from typing import Optional, Union
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.models import Challenge


from app.cache import cache


async def resolve_challenge(db: AsyncSession, identifier: Union[int, str]) -> Optional[Challenge]:
    """
    Resolves a Challenge record by checking high-speed in-memory cache first,
    falling back to database only on cache miss.
    """
    if identifier is None:
        return None

    # Check in-memory cache first (0.01ms)
    cached = cache.get_challenge(identifier)
    if cached:
        return cached

    query_str = str(identifier).strip()
    if not query_str:
        return None

    # 1. Exact or case-insensitive code_id match
    res = await db.execute(
        select(Challenge).where(Challenge.code_id.ilike(query_str))
    )
    ch = res.scalars().first()
    if ch:
        return ch

    # 2. Padded hyphen match (e.g. basis-1 -> Basis-001, sql-1 -> SQL-001)
    if "-" in query_str:
        prefix, num_part = query_str.split("-", 1)
        if num_part.isdigit():
            padded = f"{prefix.capitalize()}-{int(num_part):03d}"
            res = await db.execute(
                select(Challenge).where(Challenge.code_id.ilike(padded))
            )
            ch = res.scalars().first()
            if ch:
                return ch

    # 3. Numeric string or integer (e.g. '001' or 1 -> 001, SQL-001, or fallback to id)
    if query_str.isdigit():
        num = int(query_str)
        padded = f"{num:03d}"
        res = await db.execute(
            select(Challenge).where(
                (Challenge.code_id == padded) |
                (Challenge.code_id == f"SQL-{num:03d}") |
                ((Challenge.track != "fundamentals") & (Challenge.level_number == num)) |
                (Challenge.id == num)
            )
        )
        ch = res.scalars().first()
        if ch:
            return ch

    return None
