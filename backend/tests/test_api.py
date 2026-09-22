import pytest
from httpx import AsyncClient, ASGITransport
from app.main import app
import uuid

@pytest.mark.asyncio
async def test_root():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        res = await ac.get("/")
        assert res.status_code == 200

@pytest.mark.asyncio
async def test_get_chapters():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        res = await ac.get("/api/challenges/chapters")
        assert res.status_code == 200
        chapters = res.json()
        assert len(chapters) >= 1

@pytest.mark.asyncio
async def test_get_challenge_detail():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        res = await ac.get("/api/challenges/1")
        assert res.status_code == 200
        data = res.json()
        assert data["level_number"] == 1

@pytest.mark.asyncio
async def test_case_insensitive_login():
    u_tag = str(uuid.uuid4())[:8]
    uname = f"fresh_user_{u_tag}"
    email = f"fresh_{u_tag}@sqlquest.io"
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        reg = await ac.post("/api/auth/register", json={
            "username": uname,
            "email": email,
            "password": "password123"
        })
        assert reg.status_code == 200

        res1 = await ac.post("/api/auth/login", json={"username": uname, "password": "password123"})
        assert res1.status_code == 200

@pytest.mark.asyncio
async def test_user_registration_flow():
    u_tag = str(uuid.uuid4())[:8]
    uname = f"reg_user_{u_tag}"
    email = f"reg_{u_tag}@sqlquest.io"
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        reg = await ac.post("/api/auth/register", json={
            "username": uname,
            "email": email,
            "password": "password123"
        })
        assert reg.status_code == 200


@pytest.mark.asyncio
async def test_code_id_routing_and_execution():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        # 1. Test Basics-001 (Fundamentals 1)
        r_basis = await ac.get("/api/challenges/Basics-001")
        assert r_basis.status_code == 200
        d_basis = r_basis.json()
        assert d_basis["code_id"] == "Basics-001"
        assert d_basis["track"] == "fundamentals"
        assert d_basis["level_number"] == 1

        # 2. Test Basics-002 (Fundamentals 2)
        r_basis_2 = await ac.get("/api/challenges/Basics-002")
        assert r_basis_2.status_code == 200
        d_basis_2 = r_basis_2.json()
        assert d_basis_2["code_id"] == "Basics-002"
        assert d_basis_2["level_number"] == 2

        # 3. Test execution with string challenge_id
        r_exec = await ac.post("/api/execution/run", json={
            "challenge_id": "Basics-001",
            "code": "SELECT * FROM employees;"
        })
        assert r_exec.status_code == 200
        assert r_exec.json()["success"] is True

        r_exec_sql = await ac.post("/api/execution/run", json={
            "challenge_id": "Basics-002",
            "code": "SELECT employee_id, first_name, last_name, job_title, salary FROM employees;"
        })
        assert r_exec_sql.status_code == 200
        assert r_exec_sql.json()["success"] is True
