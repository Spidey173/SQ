#!/usr/bin/env bash
set -e

echo "===================================="
echo "Starting SQL Quest (250 SQL Masterclass)"
echo "===================================="

# 1. Skip automatic seeding (seed disabled until all problems are completed)
# echo "[1/3] Skipping seed..."


# 2. Start backend server in background
echo "[2/3] Starting FastAPI Backend on http://localhost:8000 ..."
cd backend
PYTHONPATH=. uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload &
BACKEND_PID=$!
cd ..

# 3. Start frontend dev server
echo "[3/3] Starting Next.js Frontend on http://localhost:3000 ..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null || true" EXIT

wait $BACKEND_PID $FRONTEND_PID
