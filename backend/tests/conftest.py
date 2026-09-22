import pytest
import pytest_asyncio
from app.database import AsyncSessionLocal, engine
from app.models import Challenge
from app.seed_data import seed_database
from sqlalchemy import select, func

@pytest_asyncio.fixture(autouse=True, scope="session")
async def setup_test_database():
    async with AsyncSessionLocal() as session:
        count = (await session.execute(select(func.count(Challenge.id)))).scalar() or 0
        if count == 0:
            await seed_database()
    yield
    await engine.dispose()
