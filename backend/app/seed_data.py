import asyncio
import json
import os
from sqlalchemy import select, delete
from app.database import AsyncSessionLocal, engine, Base
from app.models import Challenge, User, UserProgress, Submission


async def seed_database():
    async with engine.begin() as conn:
        def recreate_tables(sync_conn):
            Submission.__table__.drop(sync_conn, checkfirst=True)
            UserProgress.__table__.drop(sync_conn, checkfirst=True)
            Challenge.__table__.drop(sync_conn, checkfirst=True)
            Base.metadata.create_all(sync_conn)

        await conn.run_sync(recreate_tables)

    async with AsyncSessionLocal() as session:
        # Load SQL Challenges
        json_path = os.path.join(os.path.dirname(__file__), "sql_challenges_seeded.json")
        with open(json_path, "r", encoding="utf-8") as f:
            sql_challenges = json.load(f)

        for item in sql_challenges:
            ch = Challenge(
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
                hints=item.get("hints", []),
                test_cases=item.get("test_cases", []),
                explanation=item.get("explanation", ""),
                difficulty=item.get("difficulty", "Easy")
            )
            session.add(ch)

        await session.commit()
        print(f"Successfully seeded database with {len(sql_challenges)} SQL challenges!")


if __name__ == "__main__":
    asyncio.run(seed_database())
