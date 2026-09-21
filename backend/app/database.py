from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from sqlalchemy.orm import declarative_base
from app.config import settings

# Adjust postgres scheme if needed for async driver
db_url = settings.DATABASE_URL
if db_url.startswith("postgresql://") or db_url.startswith("postgres://"):
    db_url = db_url.replace("postgresql://", "postgresql+asyncpg://", 1).replace("postgres://", "postgresql+asyncpg://", 1)
    if "?" in db_url:
        base_part = db_url.split("?")[0]
        db_url = f"{base_part}?ssl=require"
    else:
        db_url = f"{db_url}?ssl=require"
elif db_url.startswith("sqlite:///"):
    db_url = db_url.replace("sqlite:///", "sqlite+aiosqlite:///", 1)

from sqlalchemy import event

is_postgres = "postgresql" in db_url
connect_args = (
    {"statement_cache_size": 0} if is_postgres else ({"check_same_thread": False} if "sqlite" in db_url else {})
)

engine_kwargs = {
    "echo": False,
    "future": True,
    "connect_args": connect_args,
}

if is_postgres:
    engine_kwargs.update({
        "pool_pre_ping": False,
        "pool_recycle": 180,
        "pool_size": 10,
        "max_overflow": 20,
    })

engine = create_async_engine(db_url, **engine_kwargs)

if "sqlite" in db_url:
    @event.listens_for(engine.sync_engine, "connect")
    def set_sqlite_pragma(dbapi_connection, connection_record):
        cursor = dbapi_connection.cursor()
        cursor.execute("PRAGMA journal_mode=WAL;")
        cursor.execute("PRAGMA synchronous=NORMAL;")
        cursor.close()

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False,
)

Base = declarative_base()


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()
