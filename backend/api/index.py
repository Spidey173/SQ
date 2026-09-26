import os
import sys

# Add current directory (backend) and parent directory to sys.path
current_dir = os.path.dirname(os.path.abspath(__file__)) # backend/api
backend_dir = os.path.dirname(current_dir) # backend
parent_dir = os.path.dirname(backend_dir) # repo root if any

for p in [backend_dir, parent_dir, current_dir]:
    if p and p not in sys.path:
        sys.path.insert(0, p)

from app.main import app
