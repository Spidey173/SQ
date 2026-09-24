import sqlite3
import re
from typing import Dict, Any, List, Optional, Tuple

TABLE_DDL: Dict[str, str] = {
    "departments": """CREATE TABLE departments (
    department_id INTEGER PRIMARY KEY,
    department_name TEXT,
    location TEXT
);""",
    "employees": """CREATE TABLE employees (
    employee_id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone_number TEXT,
    hire_date DATE,
    job_title TEXT,
    salary REAL,
    manager_id INTEGER,
    department_id INTEGER,
    department_name TEXT,
    age INTEGER,
    city TEXT,
    gender TEXT,
    state TEXT
);""",
    "customers": """CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    city TEXT,
    state TEXT,
    country TEXT,
    age INTEGER,
    customer_type TEXT
);""",
    "products": """CREATE TABLE products (
    product_id INTEGER PRIMARY KEY,
    product_name TEXT,
    category TEXT,
    price REAL,
    stock_quantity INTEGER,
    supplier_id INTEGER
);""",
    "suppliers": """CREATE TABLE suppliers (
    supplier_id INTEGER PRIMARY KEY,
    supplier_name TEXT,
    city TEXT,
    country TEXT
);""",
    "orders": """CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    order_date DATE,
    total_amount REAL,
    status TEXT
);""",
    "order_items": """CREATE TABLE order_items (
    order_item_id INTEGER PRIMARY KEY,
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    unit_price REAL
);""",
    "sales": """CREATE TABLE sales (
    sale_id INTEGER PRIMARY KEY,
    product_id INTEGER,
    sale_date DATE,
    quantity INTEGER,
    amount REAL,
    region TEXT,
    salesperson_id INTEGER
);""",
    "students": """CREATE TABLE students (
    student_id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    class TEXT,
    class_name TEXT,
    marks REAL,
    age INTEGER,
    city TEXT
);""",
    "courses": """CREATE TABLE courses (
    course_id INTEGER PRIMARY KEY,
    course_name TEXT,
    credits INTEGER
);""",
    "enrollments": """CREATE TABLE enrollments (
    enrollment_id INTEGER PRIMARY KEY,
    student_id INTEGER,
    course_id INTEGER,
    grade TEXT,
    enrollment_date DATE
);""",
    "branches": """CREATE TABLE branches (
    branch_id INTEGER PRIMARY KEY,
    branch_name TEXT,
    city TEXT,
    profit REAL
);""",
    "user_logins": """CREATE TABLE user_logins (
    login_id INTEGER PRIMARY KEY,
    user_id INTEGER,
    login_date DATE,
    device TEXT
);"""
}

TABLE_SEED: Dict[str, str] = {
    "departments": """INSERT INTO departments VALUES (101, 'Engineering', 'New York');
INSERT INTO departments VALUES (102, 'Sales', 'Chicago');
INSERT INTO departments VALUES (103, 'Marketing', 'San Francisco');
INSERT INTO departments VALUES (104, 'HR', 'Boston');
INSERT INTO departments VALUES (105, 'Finance', 'New York');""",
    "employees": """INSERT INTO employees VALUES (1, 'John', 'Doe', 'john.doe@email.com', '555-0101', '2020-01-15', 'Software Engineer', 85000, NULL, 101, 'Engineering', 28, 'New York', 'Male', 'NY');
INSERT INTO employees VALUES (2, 'Jane', 'Smith', 'jane.smith@email.com', '555-0102', '2019-03-22', 'Engineering Manager', 120000, NULL, 101, 'Engineering', 35, 'New York', 'Female', 'NY');
INSERT INTO employees VALUES (3, 'Bob', 'Johnson', 'bob.j@email.com', '555-0103', '2021-06-01', 'Sales Exec', 60000, 2, 102, 'Sales', 32, 'Chicago', 'Male', 'IL');
INSERT INTO employees VALUES (4, 'Alice', 'Williams', 'alice.w@email.com', '555-0104', '2018-11-12', 'Sales Director', 110000, NULL, 102, 'Sales', 40, 'Chicago', 'Female', 'IL');
INSERT INTO employees VALUES (5, 'Charlie', 'Brown', 'charlie.b@email.com', '555-0105', '2022-02-10', 'Marketing Specialist', 55000, 4, 103, 'Marketing', 25, 'San Francisco', 'Male', 'CA');
INSERT INTO employees VALUES (6, 'Diana', 'Prince', 'diana.p@email.com', '555-0106', '2017-08-05', 'HR Lead', 75000, NULL, 104, 'HR', 38, 'Boston', 'Female', 'MA');
INSERT INTO employees VALUES (7, 'Eva', 'Green', 'eva.g@email.com', '555-0107', '2023-01-01', 'Software Engineer', 90000, 2, 101, 'Engineering', 26, 'New York', 'Female', 'NY');
INSERT INTO employees VALUES (8, 'Frank', 'Miller', 'frank.m@email.com', '555-0108', '2020-09-15', 'Financial Analyst', 70000, NULL, 105, 'Finance', 30, 'New York', 'Male', 'NY');""",
    "customers": """INSERT INTO customers VALUES (1, 'Alice', 'Smith', 'alice@gmail.com', 'New York', 'NY', 'USA', 29, 'VIP');
INSERT INTO customers VALUES (2, 'Bob', 'Jones', 'bob@yahoo.com', 'Chicago', 'IL', 'USA', 42, 'Regular');
INSERT INTO customers VALUES (3, 'Charlie', 'Day', 'charlie@gmail.com', 'New York', 'NY', 'USA', 35, 'Regular');
INSERT INTO customers VALUES (4, 'David', 'Miller', 'david@outlook.com', 'San Francisco', 'CA', 'USA', 24, 'VIP');
INSERT INTO customers VALUES (5, 'Emma', 'Watson', 'emma@gmail.com', 'Boston', 'MA', 'USA', 31, 'Regular');""",
    "products": """INSERT INTO products VALUES (10, 'Laptop', 'Electronics', 1200.00, 50, 1);
INSERT INTO products VALUES (11, 'Smartphone', 'Electronics', 800.00, 100, 1);
INSERT INTO products VALUES (12, 'Desk Chair', 'Furniture', 250.00, 30, 2);
INSERT INTO products VALUES (13, 'Monitor', 'Electronics', 350.00, 45, 1);
INSERT INTO products VALUES (14, 'Notebook', 'Stationery', 5.00, 500, 2);""",
    "suppliers": """INSERT INTO suppliers VALUES (1, 'TechCorp', 'San Jose', 'USA');
INSERT INTO suppliers VALUES (2, 'OfficeSupplies Ltd', 'Chicago', 'USA');""",
    "orders": """INSERT INTO orders VALUES (501, 1, '2024-01-10', 1550.00, 'Completed');
INSERT INTO orders VALUES (502, 2, '2024-01-15', 250.00, 'Completed');
INSERT INTO orders VALUES (503, 1, '2024-02-01', 800.00, 'Completed');
INSERT INTO orders VALUES (504, 4, '2024-02-14', 1200.00, 'Pending');
INSERT INTO orders VALUES (505, 3, '2024-03-05', 355.00, 'Completed');""",
    "sales": """INSERT INTO sales VALUES (1, 10, '2024-01-10', 1, 1200.00, 'North', 3);
INSERT INTO sales VALUES (2, 11, '2024-01-15', 2, 1600.00, 'South', 3);
INSERT INTO sales VALUES (3, 12, '2024-02-01', 1, 250.00, 'East', 5);
INSERT INTO sales VALUES (4, 13, '2024-02-14', 3, 1050.00, 'West', 3);
INSERT INTO sales VALUES (5, 10, '2024-03-01', 2, 2400.00, 'North', 3);""",
    "students": """INSERT INTO students VALUES (1, 'Alex', 'Turner', 'Class A', 'Class A', 92.5, 16, 'Chicago');
INSERT INTO students VALUES (2, 'Bella', 'Hadid', 'Class A', 'Class A', 88.0, 17, 'New York');
INSERT INTO students VALUES (3, 'Chris', 'Evans', 'Class B', 'Class B', 74.5, 16, 'Boston');
INSERT INTO students VALUES (4, 'Daniel', 'Craig', 'Class B', 'Class B', 95.0, 17, 'Chicago');
INSERT INTO students VALUES (5, 'Ella', 'Purnell', 'Class A', 'Class A', 61.0, 16, 'New York');""",
    "courses": """INSERT INTO courses VALUES (101, 'Computer Science', 4);
INSERT INTO courses VALUES (102, 'Mathematics', 3);
INSERT INTO courses VALUES (103, 'Physics', 4);""",
    "branches": """INSERT INTO branches VALUES (1, 'Downtown Main', 'New York', 450000.00);
INSERT INTO branches VALUES (2, 'Westside Hub', 'Chicago', 320000.00);
INSERT INTO branches VALUES (3, 'Silicon Office', 'San Francisco', 680000.00);"""
}

USER_DB_SESSIONS: Dict[str, str] = {}

def get_relevant_tables_for_challenge(title: str, objective: str = "", starter_code: str = "", story: str = "") -> List[str]:
    combined = f"{title} {objective} {starter_code} {story}".lower()
    found = []
    
    table_keywords = {
        "employees": ["employee", "staff", "salary", "manager", "hire_date", "job_title"],
        "departments": ["department", "location"],
        "customers": ["customer", "client"],
        "orders": ["order", "order_date", "total_amount"],
        "order_items": ["order_item", "unit_price"],
        "products": ["product", "stock", "price", "category"],
        "suppliers": ["supplier"],
        "sales": ["sale", "revenue", "salesperson"],
        "students": ["student", "marks", "class", "grade"],
        "courses": ["course", "credit"],
        "enrollments": ["enrollment"],
        "branches": ["branch", "profit"],
        "user_logins": ["user_login", "login_id", "login_date", "device", "login history"]
    }
    
    for tbl, kws in table_keywords.items():
        if any(kw in combined for kw in kws):
            found.append(tbl)
            
    if not found:
        found = ["employees"]
        
    return found

def generate_setup_sql_for_challenge(title: str, objective: str = "", starter_code: str = "", story: str = "") -> str:
    tables = get_relevant_tables_for_challenge(title, objective, starter_code, story)
    parts = ["-- Step 1: Database Schema & Data Setup", "-- Run this script to create and populate the practice database tables.\n"]
    
    for tbl in tables:
            if tbl == "employees" and "lowest salary department" in (title + " " + objective).lower():
                parts.append("""-- Table: employees
DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
    employee_id INTEGER PRIMARY KEY,
    employee_name TEXT,
    department_name TEXT,
    salary REAL
);

-- Sample Data: employees
INSERT INTO employees VALUES (1, 'John', 'IT', 70000);
INSERT INTO employees VALUES (2, 'Alice', 'IT', 90000);
INSERT INTO employees VALUES (3, 'Bob', 'HR', 50000);
INSERT INTO employees VALUES (4, 'Emma', 'HR', 60000);
INSERT INTO employees VALUES (5, 'David', 'Finance', 100000);
INSERT INTO employees VALUES (6, 'Sophia', 'Finance', 110000);
""")
                continue

            if tbl == "employees" and "groups using multiple columns" in (title + " " + objective).lower():
                parts.append("""-- Table: employees
DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
    employee_id INTEGER PRIMARY KEY,
    employee_name TEXT,
    department_name TEXT,
    city TEXT,
    salary REAL
);

-- Sample Data: employees
INSERT INTO employees VALUES (1, 'John', 'IT', 'Bangalore', 70000);
INSERT INTO employees VALUES (2, 'Alice', 'IT', 'Bangalore', 90000);
INSERT INTO employees VALUES (3, 'Bob', 'IT', 'Delhi', 60000);
INSERT INTO employees VALUES (4, 'Emma', 'HR', 'Delhi', 50000);
INSERT INTO employees VALUES (5, 'David', 'HR', 'Mumbai', 100000);
INSERT INTO employees VALUES (6, 'Sophia', 'HR', 'Mumbai', 110000);
""")
                continue

            if tbl == "students" and "average marks above 80" in (title + " " + objective).lower():
                parts.append("""-- Table: students
DROP TABLE IF EXISTS students;
CREATE TABLE students (
    student_id INTEGER PRIMARY KEY,
    student_name TEXT,
    class_name TEXT,
    marks REAL
);

-- Sample Data: students
INSERT INTO students VALUES (1, 'Rahul', '10A', 90);
INSERT INTO students VALUES (2, 'Priya', '10A', 80);
INSERT INTO students VALUES (3, 'Amit', '10B', 70);
INSERT INTO students VALUES (4, 'Neha', '10B', 75);
INSERT INTO students VALUES (5, 'Rohan', '10C', 95);
INSERT INTO students VALUES (6, 'Sneha', '10C', 90);
""")
                continue

            if tbl == "employees" and "highest salary department" in (title + " " + objective).lower():
                parts.append("""-- Table: employees
DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
    employee_id INTEGER PRIMARY KEY,
    employee_name TEXT,
    department_name TEXT,
    salary REAL
);

-- Sample Data: employees
INSERT INTO employees VALUES (1, 'John', 'IT', 70000);
INSERT INTO employees VALUES (2, 'Alice', 'IT', 90000);
INSERT INTO employees VALUES (3, 'Bob', 'HR', 50000);
INSERT INTO employees VALUES (4, 'Emma', 'HR', 60000);
INSERT INTO employees VALUES (5, 'David', 'Finance', 100000);
INSERT INTO employees VALUES (6, 'Sophia', 'Finance', 110000);
""")
                continue

            if tbl == "orders" and "yearly sales summary" in (title + " " + objective).lower():
                parts.append("""-- Table: orders
DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    order_date DATE,
    total_amount REAL
);

-- Sample Data: orders
INSERT INTO orders VALUES (1, '2023-01-10', 800);
INSERT INTO orders VALUES (2, '2023-05-15', 1200);
INSERT INTO orders VALUES (3, '2024-02-20', 1500);
INSERT INTO orders VALUES (4, '2024-07-08', 900);
INSERT INTO orders VALUES (5, '2025-03-12', 2000);
""")
                continue

            if tbl == "orders" and "monthly sales summary" in (title + " " + objective).lower():
                parts.append("""-- Table: orders
DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    order_date DATE,
    total_amount REAL
);

-- Sample Data: orders
INSERT INTO orders VALUES (1, '2025-01-05', 500);
INSERT INTO orders VALUES (2, '2025-01-15', 700);
INSERT INTO orders VALUES (3, '2025-02-10', 900);
INSERT INTO orders VALUES (4, '2025-02-18', 400);
INSERT INTO orders VALUES (5, '2025-03-08', 600);
""")
                continue

            if tbl == "orders" and "more than 5 orders" in (title + " " + objective).lower():
                parts.append("""-- Table: orders
DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    customer_name TEXT,
    order_date DATE,
    total_amount REAL,
    status TEXT
);

-- Sample Data: orders
INSERT INTO orders VALUES (1, 101, 'Rahul', '2024-01-10', 1500.00, 'Completed');
INSERT INTO orders VALUES (2, 101, 'Rahul', '2024-01-15', 2500.00, 'Completed');
INSERT INTO orders VALUES (3, 102, 'Priya', '2024-01-20', 800.00, 'Completed');
INSERT INTO orders VALUES (4, 101, 'Rahul', '2024-02-01', 1200.00, 'Completed');
INSERT INTO orders VALUES (5, 103, 'Amit', '2024-02-14', 450.00, 'Completed');
INSERT INTO orders VALUES (6, 101, 'Rahul', '2024-02-20', 3100.00, 'Completed');
INSERT INTO orders VALUES (7, 102, 'Priya', '2024-03-01', 950.00, 'Completed');
INSERT INTO orders VALUES (8, 101, 'Rahul', '2024-03-05', 1800.00, 'Completed');
INSERT INTO orders VALUES (9, 101, 'Rahul', '2024-03-12', 2200.00, 'Completed');
INSERT INTO orders VALUES (10, 102, 'Priya', '2024-03-15', 1100.00, 'Completed');
""")
                continue

            if tbl == "customers" and "average age by city" in (title + " " + objective).lower():
                parts.append("""-- Table: customers
DROP TABLE IF EXISTS customers;
CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    customer_name TEXT,
    city TEXT,
    age INTEGER
);

-- Sample Data: customers
INSERT INTO customers VALUES (1, 'Rahul', 'Bangalore', 25);
INSERT INTO customers VALUES (2, 'Priya', 'Bangalore', 35);
INSERT INTO customers VALUES (3, 'Amit', 'Delhi', 20);
INSERT INTO customers VALUES (4, 'Neha', 'Delhi', 30);
INSERT INTO customers VALUES (5, 'Rohan', 'Mumbai', 40);
""")
                continue

            if tbl == "customers" and "states with highest customers" in (title + " " + objective).lower():
                parts.append("""-- Table: customers
DROP TABLE IF EXISTS customers;
CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    customer_name TEXT,
    state TEXT
);

-- Sample Data: customers
INSERT INTO customers VALUES (1, 'Rahul', 'Karnataka');
INSERT INTO customers VALUES (2, 'Priya', 'Delhi');
INSERT INTO customers VALUES (3, 'Ankit', 'Karnataka');
INSERT INTO customers VALUES (4, 'Neha', 'Maharashtra');
INSERT INTO customers VALUES (5, 'Rohan', 'Karnataka');
INSERT INTO customers VALUES (6, 'Sneha', 'Delhi');
INSERT INTO customers VALUES (7, 'Amit', 'Karnataka');
""")
                continue

            if tbl == "sales" and "more than 100 times" in (title + " " + objective).lower():
                parts.append("""-- Table: sales
DROP TABLE IF EXISTS sales;
CREATE TABLE sales (
    order_id INTEGER PRIMARY KEY,
    product_id INTEGER,
    product_name TEXT,
    quantity INTEGER
);

-- Sample Data: sales
INSERT INTO sales VALUES (1, 101, 'Laptop', 20);
INSERT INTO sales VALUES (2, 101, 'Laptop', 30);
INSERT INTO sales VALUES (3, 102, 'Mouse', 15);
INSERT INTO sales VALUES (4, 101, 'Laptop', 60);
INSERT INTO sales VALUES (5, 103, 'Keyboard', 25);
""")
                continue

            if tbl == "sales" and "branch_name" in (title + " " + objective + " " + starter_code).lower():
                parts.append("""-- Table: sales
DROP TABLE IF EXISTS sales;
CREATE TABLE sales (
    sale_id INTEGER PRIMARY KEY,
    branch_name TEXT,
    cost_price REAL,
    selling_price REAL
);

-- Sample Data: sales
INSERT INTO sales VALUES (1, 'Bangalore', 300, 500);
INSERT INTO sales VALUES (2, 'Bangalore', 700, 900);
INSERT INTO sales VALUES (3, 'Delhi', 400, 600);
INSERT INTO sales VALUES (4, 'Delhi', 500, 650);
INSERT INTO sales VALUES (5, 'Mumbai', 800, 900);
""")
                continue

            if tbl == "sales" and "category_name" in (title + " " + objective + " " + starter_code).lower():
                parts.append("""-- Table: sales
DROP TABLE IF EXISTS sales;
CREATE TABLE sales (
    sale_id INTEGER PRIMARY KEY,
    category_name TEXT,
    sales_amount REAL
);

-- Sample Data: sales
INSERT INTO sales VALUES (1, 'Electronics', 50000);
INSERT INTO sales VALUES (2, 'Electronics', 30000);
INSERT INTO sales VALUES (3, 'Clothing', 2000);
INSERT INTO sales VALUES (4, 'Electronics', 5000);
INSERT INTO sales VALUES (5, 'Clothing', 3000);
INSERT INTO sales VALUES (6, 'Footwear', 4000);
""")
                continue

            ddl = TABLE_DDL.get(tbl)
            seed = TABLE_SEED.get(tbl)
            if ddl:
                parts.append(f"-- Table: {tbl}\nDROP TABLE IF EXISTS {tbl};")
                parts.append(ddl)
            if seed:
                parts.append(f"\n-- Sample Data: {tbl}\n{seed}\n")
                if tbl == "employees" and "more than 5 employees" in (title + " " + objective).lower():
                    extra_employees = """
INSERT INTO employees VALUES (9, 'Chris', 'Evans', 'chris.e@email.com', '555-0109', '2021-02-15', 'HR Recruiter', 65000, 6, 104, 'HR', 31, 'Boston', 'Male', 'MA');
INSERT INTO employees VALUES (10, 'Mike', 'Ross', 'mike.r@email.com', '555-0110', '2022-05-10', 'HR Associate', 58000, 6, 104, 'HR', 27, 'Boston', 'Male', 'MA');
INSERT INTO employees VALUES (11, 'Kevin', 'Hart', 'kevin.h@email.com', '555-0111', '2020-11-20', 'HR Generalist', 62000, 6, 104, 'HR', 34, 'Boston', 'Male', 'MA');
INSERT INTO employees VALUES (12, 'Sophia', 'Loren', 'sophia.l@email.com', '555-0112', '2019-08-14', 'HR Specialist', 71000, 6, 104, 'HR', 36, 'Boston', 'Female', 'MA');
INSERT INTO employees VALUES (13, 'Tom', 'Hanks', 'tom.h@email.com', '555-0113', '2018-04-18', 'HR Director', 95000, NULL, 104, 'HR', 45, 'Boston', 'Male', 'MA');
"""
                    parts.append(f"-- Additional Department Records for Headcount Practice:\n{extra_employees}\n")
                if tbl == "customers" and "more than 10 customers" in (title + " " + objective).lower():
                    extra_cust_lines = []
                    cid = 6
                    for i in range(1, 16):
                        extra_cust_lines.append(f"INSERT INTO customers VALUES ({cid}, 'BangaloreCust{i}', 'Kumar', 'b_cust{i}@example.com', 'Bangalore', 'KA', 'India', 28, 'Regular');")
                        cid += 1
                    for i in range(1, 13):
                        extra_cust_lines.append(f"INSERT INTO customers VALUES ({cid}, 'DelhiCust{i}', 'Sharma', 'd_cust{i}@example.com', 'Delhi', 'DL', 'India', 30, 'Regular');")
                        cid += 1
                    for i in range(1, 9):
                        extra_cust_lines.append(f"INSERT INTO customers VALUES ({cid}, 'MumbaiCust{i}', 'Patel', 'm_cust{i}@example.com', 'Mumbai', 'MH', 'India', 32, 'Regular');")
                        cid += 1
                    for i in range(1, 6):
                        extra_cust_lines.append(f"INSERT INTO customers VALUES ({cid}, 'ChennaiCust{i}', 'Rao', 'c_cust{i}@example.com', 'Chennai', 'TN', 'India', 27, 'Regular');")
                        cid += 1
                    parts.append(f"-- Additional City Customers for Grouping Practice:\n" + "\n".join(extra_cust_lines) + "\n")
            
    return "\n".join(parts)

def inspect_sqlite_connection(conn: sqlite3.Connection) -> List[Dict[str, Any]]:
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name;")
    tables = [row[0] for row in cursor.fetchall()]
    
    result = []
    for tbl in tables:
        safe_tbl = tbl.replace('"', '""')
        cursor.execute(f'PRAGMA table_info("{safe_tbl}");')
        cols_raw = cursor.fetchall()
        columns = [
            {
                "name": c[1],
                "type": c[2] or "TEXT",
                "pk": bool(c[5]),
                "nullable": not bool(c[3])
            }
            for c in cols_raw
        ]
        
        try:
            cursor.execute(f'SELECT COUNT(*) FROM "{safe_tbl}";')
            row_count = cursor.fetchone()[0]
        except Exception:
            row_count = 0
            
        try:
            cursor.execute(f'SELECT * FROM "{safe_tbl}" LIMIT 10;')
            raw_rows = cursor.fetchall()
            col_names = [c["name"] for c in columns]
            sample_rows = [dict(zip(col_names, r)) for r in raw_rows]
        except Exception:
            sample_rows = []
            
        result.append({
            "name": tbl,
            "columns": columns,
            "row_count": row_count,
            "sample_rows": sample_rows
        })
        
    return result


def get_baseline_tables_for_challenge(title: str = "", objective: str = "", starter_code: str = "", story: str = "") -> List[Dict[str, Any]]:
    """Generates schema metadata for default sandbox tables relevant to this specific challenge."""
    conn = sqlite3.connect(":memory:")
    try:
        from app.sandbox.sql_runner import SAMPLE_SCHEMAS, SAMPLE_DATA
        conn.executescript(SAMPLE_SCHEMAS)
        conn.executescript(SAMPLE_DATA)
        all_tables = inspect_sqlite_connection(conn)
        relevant_names = set(get_relevant_tables_for_challenge(title, objective, starter_code, story))
        
        filtered_tables = [t for t in all_tables if t["name"].lower() in relevant_names]
        if not filtered_tables:
            filtered_tables = [t for t in all_tables if t["name"].lower() == "employees"]
        return filtered_tables
    except Exception:
        return []
    finally:
        conn.close()

def validate_schema_against_expected(
    actual_tables: List[str],
    expected_tables: List[str]
) -> Tuple[bool, Optional[str]]:
    actual_set = set(t.lower() for t in actual_tables)
    for exp in expected_tables:
        exp_lower = exp.lower()
        if exp_lower not in actual_set:
            candidates = [a for a in actual_tables if a.lower() == exp_lower[:-1] or a.lower() == exp_lower + "s" or exp_lower in a.lower()]
            if candidates:
                return False, f"Expected table '{exp}', but found '{candidates[0]}'. Did you mean '{exp}'?"
            return False, f"Missing required table '{exp}'. Please check your CREATE TABLE statement."
    return True, None
