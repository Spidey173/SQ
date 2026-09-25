import json

path = "/Users/spidey./Desktop/Study/backend/app/sql_challenges_seeded.json"
with open(path, "r") as f:
    data = json.load(f)

new_challenge = {
    "level_number": 60,
    "chapter_id": 3,
    "chapter_title": "Module 3: Core SQL Analytics",
    "title": "SELF JOIN",
    "story": "HR is auditing the reporting structure of the company. The organizational chart is stored inside a single table, where each employee's record contains a reference to their manager's employee ID. They need a flattened report showing every employee mapped directly to their manager's name.",
    "objective": "Write an SQL query to display each employee along with their manager's name. Return employee_name and manager_name. Sort the result by employee_name.",
    "starter_code": "-- Problem #SQL-025: SELF JOIN\n-- Write your SQL query below\n\n",
    "expected_output": "employee_name | manager_name\n----------------------------\nAlice | Robert\nDavid | Robert\nJohn | Robert\nRobert | Sophia\nSophia | NULL",
    "hints": [
      "You need to join the employees table to itself.",
      "Use aliases to distinguish the two copies, e.g., employees AS e and employees AS m.",
      "The join condition is e.manager_id = m.employee_id.",
      "Use LEFT JOIN if you want to include employees who don't have a manager."
    ],
    "test_cases": [
      {
        "input": "",
        "expected": "SELECT e.employee_name, m.employee_name AS manager_name FROM employees AS e LEFT JOIN employees AS m ON e.manager_id = m.employee_id ORDER BY e.employee_name;",
        "hidden": False,
        "description": "Self join employees to get managers"
      }
    ],
    "explanation": "SELECT e.employee_name, m.employee_name AS manager_name FROM employees AS e LEFT JOIN employees AS m ON e.manager_id = m.employee_id ORDER BY e.employee_name;",
    "difficulty": "Easy",
    "track": "core",
    "code_id": "SQL-025"
}

data.append(new_challenge)

with open(path, "w") as f:
    json.dump(data, f, indent=2)

print("Added SQL-025")
