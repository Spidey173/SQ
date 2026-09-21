import time
import os
import json
from typing import Optional, Dict, List, Any, Union
from sqlalchemy import select
from app.models import Challenge, User, UserProgress


class CacheStore:
    def __init__(self):
        # Challenges & Curriculum
        self._challenges_by_id: Dict[int, Challenge] = {}
        self._challenges_by_code: Dict[str, Challenge] = {}
        self._challenges_by_level: Dict[int, Challenge] = {}
        self._all_challenges: List[Challenge] = []
        self._cached_at: float = 0.0

        # Users cache: username -> (User, expire_time)
        self._users: Dict[str, tuple[User, float]] = {}

        # User progress cache: user_id -> (Dict[challenge_id, UserProgress], expire_time)
        self._progress: Dict[int, tuple[Dict[int, UserProgress], float]] = {}

    def is_curriculum_loaded(self) -> bool:
        return len(self._all_challenges) > 0

    def get_all_challenges(self) -> List[Challenge]:
        return self._all_challenges

    def get_challenge(self, identifier: Union[int, str]) -> Optional[Challenge]:
        if identifier is None:
            return None
        
        q_str = str(identifier).strip()
        if not q_str:
            return None

        # 1. Direct code_id match (case-insensitive)
        lower_q = q_str.lower()
        if lower_q in self._challenges_by_code:
            return self._challenges_by_code[lower_q]

        # 2. Padded code_id (e.g. basics-1 -> basics-001)
        if "-" in q_str:
            parts = q_str.split("-", 1)
            if parts[1].isdigit():
                padded_code = f"{parts[0].lower()}-{int(parts[1]):03d}"
                if padded_code in self._challenges_by_code:
                    return self._challenges_by_code[padded_code]

        # 3. Numeric match (id or level_number or padded 001)
        if q_str.isdigit():
            num = int(q_str)
            if num in self._challenges_by_id:
                return self._challenges_by_id[num]
            
            padded_sql = f"sql-{num:03d}"
            if padded_sql in self._challenges_by_code:
                return self._challenges_by_code[padded_sql]

            padded_num = f"{num:03d}"
            if padded_num in self._challenges_by_code:
                return self._challenges_by_code[padded_num]

            if num in self._challenges_by_level:
                return self._challenges_by_level[num]

        return None

    def set_challenges(self, challenges: List[Challenge]):
        self._challenges_by_id.clear()
        self._challenges_by_code.clear()
        self._challenges_by_level.clear()
        self._all_challenges = list(challenges)

        for ch in challenges:
            if ch.id:
                self._challenges_by_id[ch.id] = ch
            if ch.code_id:
                self._challenges_by_code[ch.code_id.strip().lower()] = ch
            if ch.level_number and ch.track != "fundamentals":
                self._challenges_by_level[ch.level_number] = ch

        self._cached_at = time.time()

    def load_from_json_fallback(self):
        """Loads seeded challenges directly from local json for instant zero-latency startup."""
        if self._all_challenges:
            return
        
        json_path = os.path.join(os.path.dirname(__file__), "sql_challenges_seeded.json")
        if not os.path.exists(json_path):
            return

        try:
            with open(json_path, "r", encoding="utf-8") as f:
                data = json.load(f)

            loaded = []
            for idx, item in enumerate(data, start=1):
                ch = Challenge(
                    id=idx,
                    code_id=item["code_id"],
                    track=item.get("track", "core"),
                    level_number=item["level_number"],
                    chapter_id=item["chapter_id"],
                    chapter_title=item["chapter_title"],
                    title=item["title"],
                    story=item["story"],
                    objective=item["objective"],
                    starter_code=item["starter_code"],
                    expected_output=item["expected_output"],
                    hints_json=json.dumps(item.get("hints", [])),
                    test_cases_json=json.dumps(item.get("test_cases", [])),
                    explanation=item.get("explanation", ""),
                    difficulty=item.get("difficulty", "Easy")
                )
                loaded.append(ch)
            self.set_challenges(loaded)
        except Exception as e:
            print("Warning: could not load fallback challenges from json:", e)

    def invalidate_curriculum(self):
        self._challenges_by_id.clear()
        self._challenges_by_code.clear()
        self._challenges_by_level.clear()
        self._all_challenges.clear()
        self._cached_at = 0.0

    # User cache
    def get_cached_user(self, username: str) -> Optional[User]:
        entry = self._users.get(username.lower())
        if entry:
            user, expire = entry
            if time.time() < expire:
                return user
            del self._users[username.lower()]
        return None

    def set_cached_user(self, username: str, user: User, ttl_seconds: float = 300.0):
        self._users[username.lower()] = (user, time.time() + ttl_seconds)

    def invalidate_user(self, username: str):
        self._users.pop(username.lower(), None)

    # User progress cache
    def get_cached_progress(self, user_id: int) -> Optional[Dict[int, UserProgress]]:
        entry = self._progress.get(user_id)
        if entry:
            prog_map, expire = entry
            if time.time() < expire:
                return prog_map
            del self._progress[user_id]
        return None

    def set_cached_progress(self, user_id: int, progress_map: Dict[int, UserProgress], ttl_seconds: float = 60.0):
        self._progress[user_id] = (progress_map, time.time() + ttl_seconds)

    def invalidate_progress(self, user_id: int):
        self._progress.pop(user_id, None)


# Global singleton cache
cache = CacheStore()
# Initialize fallback immediately from local json so the API starts hot
cache.load_from_json_fallback()
