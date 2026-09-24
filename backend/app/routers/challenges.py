from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.database import get_db
from app.models import Challenge, UserProgress, User
from app.schemas import ChapterGroup, ChallengeSummary, ChallengeDetail, TestCaseSchema
from app.security import get_current_user_optional

router = APIRouter(prefix="/challenges", tags=["Challenges"])


from app.cache import cache

# In-memory pre-computed public chapters cache
_PUBLIC_CHAPTERS_CACHE: List[ChapterGroup] = []


@router.get("/chapters", response_model=List[ChapterGroup])
async def list_chapters(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user_optional)
):
    global _PUBLIC_CHAPTERS_CACHE

    # Always load fresh from DB if DB has more challenges, or use cached challenges
    res = await db.execute(select(Challenge).order_by(Challenge.id.asc()))
    challenges = res.scalars().all()
    if challenges:
        if len(challenges) != len(cache.get_all_challenges()):
            _PUBLIC_CHAPTERS_CACHE = []
        cache.set_challenges(challenges)
    else:
        cache.load_from_json_fallback()
        challenges = cache.get_all_challenges()

    # Return pre-computed public chapters if visitor and cache matches current challenge count
    total_cached = sum(len(c.levels) for c in _PUBLIC_CHAPTERS_CACHE) if _PUBLIC_CHAPTERS_CACHE else 0
    if not current_user and _PUBLIC_CHAPTERS_CACHE and total_cached == len(challenges):
        return _PUBLIC_CHAPTERS_CACHE

    # Fetch user progress if user logged in
    user_progress_map = {}
    if current_user:
        cached_prog = cache.get_cached_progress(current_user.id)
        if cached_prog is not None:
            user_progress_map = cached_prog
        else:
            prog_res = await db.execute(
                select(UserProgress).where(UserProgress.user_id == current_user.id)
            )
            for p in prog_res.scalars().all():
                user_progress_map[p.challenge_id] = p
            cache.set_cached_progress(current_user.id, user_progress_map)

    # Group by chapter
    chapters_dict = {}
    prev_passed = True

    for ch in challenges:
        cid = ch.chapter_id
        if cid not in chapters_dict:
            chapters_dict[cid] = {
                "chapter_id": cid,
                "chapter_title": ch.chapter_title,
                "levels": [],
                "completed_count": 0
            }

        # IMPORTANT: Only look up by exact primary key (ch.id), NOT by level_number.
        prog = user_progress_map.get(ch.id)
        passed = bool(prog.passed) if prog else False
        stars = prog.stars if prog else 0

        is_unlocked = (ch.code_id in ("Basics-001", "SQL-001")) or (ch.level_number == 1) or prev_passed or (current_user and current_user.role == "admin")

        summary = ChallengeSummary(
            id=ch.id,
            code_id=ch.code_id,
            track=ch.track,
            chapter_id=ch.chapter_id,
            chapter_title=ch.chapter_title,
            level_number=ch.level_number,
            title=ch.title,
            difficulty=ch.difficulty,
            passed=passed,
            stars=stars,
            locked=not is_unlocked
        )

        chapters_dict[cid]["levels"].append(summary)
        if passed:
            chapters_dict[cid]["completed_count"] += 1

        prev_passed = passed

    response = []
    for cid in sorted(chapters_dict.keys()):
        cdata = chapters_dict[cid]
        total_lvl = len(cdata["levels"])
        comp_pct = round((cdata["completed_count"] / total_lvl * 100), 1) if total_lvl > 0 else 0.0
        response.append(
            ChapterGroup(
                chapter_id=cdata["chapter_id"],
                chapter_title=cdata["chapter_title"],
                levels=cdata["levels"],
                completion_percentage=comp_pct,
            )
        )

    if not current_user:
        _PUBLIC_CHAPTERS_CACHE = response

    return response


from app.crud import resolve_challenge


@router.get("/{level_id}", response_model=ChallengeDetail)
async def get_challenge_detail(
    level_id: str,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user_optional)
):
    ch = await resolve_challenge(db, level_id)

    if not ch:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Challenge with ID/Code '{level_id}' not found."
        )

    passed = False
    stars = 0
    saved_code = None

    if current_user:
        prog_res = await db.execute(
            select(UserProgress).where(
                UserProgress.user_id == current_user.id,
                UserProgress.challenge_id == ch.id
            )
        )
        prog = prog_res.scalars().first()
        if prog:
            passed = prog.passed
            stars = prog.stars
            saved_code = prog.code_submitted

    # Filter visible test cases for student
    visible_tests = [
        TestCaseSchema(
            input=t.get("input", ""),
            expected=t.get("expected", ""),
            hidden=False,
            description=t.get("description", "Public test case")
        )
        for t in ch.test_cases if not t.get("hidden", False)
    ]

    from app.sandbox.schema_manager import generate_setup_sql_for_challenge, get_relevant_tables_for_challenge

    setup_sql = generate_setup_sql_for_challenge(ch.title, ch.objective, ch.starter_code)
    expected_tables = get_relevant_tables_for_challenge(ch.title, ch.objective, ch.starter_code)

    return ChallengeDetail(
        id=ch.id,
        code_id=ch.code_id,
        track=ch.track,
        chapter_id=ch.chapter_id,
        chapter_title=ch.chapter_title,
        level_number=ch.level_number,
        title=ch.title,
        story=ch.story,
        objective=ch.objective,
        starter_code=ch.starter_code,
        expected_output=ch.expected_output,
        hints=ch.hints,
        visible_test_cases=visible_tests,
        total_test_cases=len(ch.test_cases),
        explanation=ch.explanation if passed else None,
        difficulty=ch.difficulty,
        passed=passed,
        stars=stars,
        saved_code=saved_code,
        setup_sql=setup_sql,
        expected_tables=expected_tables
    )
