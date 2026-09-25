import json

path = "/Users/spidey./Desktop/Study/backend/app/sql_challenges_seeded.json"
with open(path, "r") as f:
    data = json.load(f)

new_challenge = {
    "level_number": 59,
    "chapter_id": 3,
    "chapter_title": "Module 3: Core SQL Analytics",
    "title": "FULL JOIN",
    "story": "During a corporate merger audit, analysts must reconcile the employee roster against the department directory. They need a comprehensive mapping showing every single employee and every single department, catching both unassigned employees and empty departments in one view.",
    "objective": "Write an SQL query to display all employees and all departments, whether or not they have matching records. Return employee_name and department_name. Include employees without departments and departments without employees. Sort the result by department_name.",
    "starter_code": "-- Problem #SQL-024: FULL JOIN\n-- Write your SQL query below\n\n",
    "expected_output": "employee_name | department_name\n-------------------------------\nBob | Finance\nJohn | HR\nAlice | IT\nNULL | Marketing\nDavid | NULL\nEmma | NULL",
    "hints": [
      "Use FULL JOIN (or FULL OUTER JOIN) to combine the employees and departments tables.",
      "The join condition should be ON e.department_id = d.department_id.",
      "Select e.employee_name and d.department_name.",
      "Make sure to ORDER BY d.department_name."
    ],
    "test_cases": [
      {
        "input": "",
        "expected": "SELECT e.employee_name, d.department_name FROM employees AS e FULL JOIN departments AS d ON e.department_id = d.department_id ORDER BY d.department_name;",
        "hidden": False,
        "description": "Full join employees and departments"
      }
    ],
    "explanation": "SELECT e.employee_name, d.department_name FROM employees AS e FULL JOIN departments AS d ON e.department_id = d.department_id ORDER BY d.department_name;",
    "difficulty": "Easy",
    "track": "core",
    "code_id": "SQL-024"
}

data.append(new_challenge)

with open(path, "w") as f:
    json.dump(data, f, indent=2)

print("Added SQL-024")
