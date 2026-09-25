// 500 Job-Focused SQL Canonical Reference Solutions
export interface ProblemSolutionRecord {
  code_id: string;
  levelNumber: number;
  title: string;
  optimalCode: string;
  timeComplexity: string;
  spaceComplexity: string;
  explanation: string;
  keyTakeaway: string;
}

const BASE_SOLUTIONS_MAP: Record<string, any> = {
  "Basics-001": {
    "code_id": "Basics-001",
    "levelNumber": 1,
    "title": "Select All Columns",
    "optimalCode": "SELECT * FROM table_name;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Select all columns from a table' using SQLite execution planner.",
    "keyTakeaway": "Mastering Select all columns from a table is essential for database query optimization and relational data analysis."
  },
  "Basics-002": {
    "code_id": "Basics-002",
    "levelNumber": 2,
    "title": "Select Specific Columns",
    "optimalCode": "SELECT employee_id, first_name, last_name, job_title, salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "Selects specific columns (employee_id, first_name, last_name, job_title, salary) from the employees table.",
    "keyTakeaway": "Selecting specific columns improves performance and reduces network overhead."
  },
  "Basics-003": {
    "code_id": "Basics-003",
    "levelNumber": 3,
    "title": "Filter Rows Using WHERE",
    "optimalCode": "SELECT * FROM employees WHERE department_id = 101;",
    "timeComplexity": "O(N) / O(log N)",
    "spaceComplexity": "O(N)",
    "explanation": "Filters rows from the employees table to return only those matching department_id = 101.",
    "keyTakeaway": "The WHERE clause filters rows before SQL returns the result. Only matching rows are included."
  },
  "Basics-004": {
    "code_id": "Basics-004",
    "levelNumber": 4,
    "title": "Use Multiple Conditions with AND",
    "optimalCode": "SELECT *\nFROM employees\nWHERE department_id = 101\nAND salary > 60000;",
    "timeComplexity": "O(N) / O(log N)",
    "spaceComplexity": "O(N)",
    "explanation": "Combines multiple filtering criteria using AND, requiring department_id = 101 AND salary > 60000 to both be TRUE for each returned row.",
    "keyTakeaway": "The AND operator requires all connected conditions to evaluate to TRUE for a row to be included."
  },
  "Basics-005": {
    "code_id": "Basics-005",
    "levelNumber": 5,
    "title": "Use Multiple Conditions with OR",
    "optimalCode": "SELECT *\nFROM employees\nWHERE department_id = 101\nOR salary > 60000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "Combines multiple filtering criteria using OR, returning rows where department_id = 101 OR salary > 60000 evaluates to TRUE for at least one condition.",
    "keyTakeaway": "The OR operator broadens your search by returning rows where at least one condition is true. It is useful when you want records that satisfy any one of multiple conditions."
  },
  "Basics-006": {
    "code_id": "Basics-006",
    "levelNumber": 6,
    "title": "Sort Data Using ORDER BY",
    "optimalCode": "SELECT *\nFROM employees\nORDER BY salary ASC;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "Sorts records based on the specified column. By default, SQL sorts in ascending order (ASC).",
    "keyTakeaway": "ORDER BY is used to arrange rows in a specific order. It never removes rows; it only changes their display order. By default, SQL sorts in ascending order (ASC)."
  },
  "Basics-007": {
    "code_id": "Basics-007",
    "levelNumber": 7,
    "title": "Limit the Number of Rows (LIMIT)",
    "optimalCode": "SELECT *\nFROM employees\nLIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(K)",
    "explanation": "Restricts the number of rows returned by a query, stopping execution after 5 rows are read.",
    "keyTakeaway": "LIMIT restricts the number of rows returned by a query. It is commonly used with ORDER BY to retrieve Top N records."
  },
  "Basics-008": {
    "code_id": "Basics-008",
    "levelNumber": 8,
    "title": "Find Distinct Values (DISTINCT)",
    "optimalCode": "SELECT DISTINCT department_id\nFROM employees;",
    "timeComplexity": "O(N) / O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "Removes duplicate values from query output by retrieving each unique department_id only once.",
    "keyTakeaway": "DISTINCT removes duplicate values from query results. It does not modify table data and is ideal for populating unique lists and dropdowns."
  },
  "Basics-009": {
    "code_id": "Basics-009",
    "levelNumber": 9,
    "title": "Count Total Records (COUNT())",
    "optimalCode": "SELECT COUNT(*)\nFROM employees;",
    "timeComplexity": "O(N) / O(log N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes aggregate function COUNT(*) to return the single total count of all rows in the employees table.",
    "keyTakeaway": "COUNT(*) is an aggregate function that counts every row in the table, including NULLs and duplicates, returning a single summary number."
  },
  "Basics-010": {
    "code_id": "Basics-010",
    "levelNumber": 10,
    "title": "Find the Maximum Value (MAX())",
    "optimalCode": "SELECT MAX(salary)\nFROM employees;",
    "timeComplexity": "O(N) / O(log N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes aggregate function MAX(salary) to compare all employee salaries and return the single highest value.",
    "keyTakeaway": "MAX() is an aggregate function that returns the largest value from a column. It ignores NULL values and returns a single summary value."
  },
  "Basics-011": {
    "code_id": "Basics-011",
    "levelNumber": 11,
    "title": "Find the Minimum Value (MIN())",
    "optimalCode": "SELECT MIN(salary)\nFROM employees;",
    "timeComplexity": "O(N) / O(log N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes aggregate function MIN(salary) to compare all employee salaries and return the single lowest value.",
    "keyTakeaway": "MIN() is an aggregate function that returns the smallest value from a column. It ignores NULL values and returns a single summary value."
  },
  "Basics-012": {
    "code_id": "Basics-012",
    "levelNumber": 12,
    "title": "Find the Total Sum (SUM())",
    "optimalCode": "SELECT SUM(salary)\nFROM employees;",
    "timeComplexity": "O(N) / O(log N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes aggregate function SUM(salary) to add all employee salaries together and return the single total sum.",
    "keyTakeaway": "SUM() is an aggregate function that adds all numeric values in a column and returns a single total. NULL values are ignored."
  },
  "Basics-013": {
    "code_id": "Basics-013",
    "levelNumber": 13,
    "title": "Calculate the Average (AVG())",
    "optimalCode": "SELECT AVG(salary)\nFROM employees;",
    "timeComplexity": "O(N) / O(log N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes aggregate function AVG(salary) to calculate the arithmetic mean of all non-NULL employee salaries.",
    "keyTakeaway": "AVG() is an aggregate function that calculates the average of numeric values. It automatically ignores NULL values and returns one value."
  },
  "Basics-014": {
    "code_id": "Basics-014",
    "levelNumber": 14,
    "title": "Group Data Using GROUP BY",
    "optimalCode": "SELECT department_id,\n       COUNT(*)\nFROM employees\nGROUP BY department_id;",
    "timeComplexity": "O(N) / O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "Executes GROUP BY department_id to partition records by department and computes COUNT(*) headcount for each distinct group.",
    "keyTakeaway": "GROUP BY groups rows with the same values together so aggregate functions (COUNT, SUM, AVG, MAX, MIN) can be calculated separately for each group."
  },
  "Basics-015": {
    "code_id": "Basics-015",
    "levelNumber": 15,
    "title": "Filter Groups Using HAVING",
    "optimalCode": "SELECT department_id,\n       COUNT(*) AS total_employees\nFROM employees\nGROUP BY department_id\nHAVING COUNT(*) > 2;",
    "timeComplexity": "O(N) / O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "Executes GROUP BY department_id and applies post-aggregation filter HAVING COUNT(*) > 2 to retain only groups with more than 2 employees.",
    "keyTakeaway": "WHERE filters rows before grouping. HAVING filters groups after grouping. Aggregate functions such as COUNT(), SUM(), AVG(), MIN(), and MAX() are typically used with HAVING."
  },
  "Basics-016": {
    "code_id": "Basics-016",
    "levelNumber": 16,
    "title": "Retrieve Matching Records Using INNER JOIN",
    "optimalCode": "SELECT employees.first_name,\n       departments.department_name\nFROM employees\nINNER JOIN departments\nON employees.department_id = departments.department_id;",
    "timeComplexity": "O(N × M) / O(N log M)",
    "spaceComplexity": "O(1) / O(N)",
    "explanation": "Executes an INNER JOIN between employees and departments on department_id to return matching employee first names and department names.",
    "keyTakeaway": "INNER JOIN returns only the rows where the join condition matches in both tables. Unmatched rows from either table are excluded."
  },
  "Basics-017": {
    "code_id": "Basics-017",
    "levelNumber": 17,
    "title": "Retrieve All Records from the Left Table Using LEFT JOIN",
    "optimalCode": "SELECT employees.first_name,\n       departments.department_name\nFROM employees\nLEFT JOIN departments\nON employees.department_id = departments.department_id;",
    "timeComplexity": "O(N × M) / O(N log M)",
    "spaceComplexity": "O(1) / O(N)",
    "explanation": "Executes a LEFT JOIN between employees and departments on department_id to return all employee records, filling department fields with NULL when no match exists.",
    "keyTakeaway": "LEFT JOIN returns every row from the left table. If a matching row exists in the right table, it is returned. Otherwise, SQL fills the right-side columns with NULL."
  },
  "Basics-018": {
    "code_id": "Basics-018",
    "levelNumber": 18,
    "title": "Retrieve All Records from the Right Table Using RIGHT JOIN",
    "optimalCode": "SELECT employees.first_name,\n       departments.department_name\nFROM employees\nRIGHT JOIN departments\nON employees.department_id = departments.department_id;",
    "timeComplexity": "O(N × M) / O(N log M)",
    "spaceComplexity": "O(1) / O(N)",
    "explanation": "Executes a RIGHT JOIN between employees and departments on department_id to return all department records, filling employee fields with NULL when no match exists.",
    "keyTakeaway": "RIGHT JOIN returns every row from the right table. If a matching row exists in the left table, it is returned. Otherwise, SQL fills the left-side columns with NULL."
  },
  "Basics-019": {
    "code_id": "Basics-019",
    "levelNumber": 19,
    "title": "Retrieve All Records from Both Tables Using FULL OUTER JOIN",
    "optimalCode": "SELECT employees.first_name,\n       departments.department_name\nFROM employees\nFULL OUTER JOIN departments\nON employees.department_id = departments.department_id;",
    "timeComplexity": "O(N × M) / O(N log M)",
    "spaceComplexity": "O(N)",
    "explanation": "Executes a FULL OUTER JOIN between employees and departments on department_id to return all rows from both tables, padding unmatched fields with NULL.",
    "keyTakeaway": "FULL OUTER JOIN returns every row from both tables. Matching rows are combined, and unmatched rows from either table are included with NULL values for the missing side."
  },
  "Basics-020": {
    "code_id": "Basics-020",
    "levelNumber": 20,
    "title": "Join a Table with Itself Using SELF JOIN",
    "optimalCode": "SELECT e.first_name AS employee_name,\n       m.first_name AS manager_name\nFROM employees e\nINNER JOIN employees m\nON e.manager_id = m.employee_id;",
    "timeComplexity": "O(N²) / O(N log N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes a SELF JOIN on the employees table using aliases e (employee) and m (manager) to compare e.manager_id with m.employee_id.",
    "keyTakeaway": "A SELF JOIN joins a table with itself. Different table aliases are required so SQL can treat the single physical table as two separate logical tables."
  },
  "Basics-021": {
    "code_id": "Basics-021",
    "levelNumber": 21,
    "title": "Combine Results of Two Queries Using UNION",
    "optimalCode": "SELECT first_name FROM employees\nUNION\nSELECT department_name FROM departments;",
    "timeComplexity": "O(N + M) / O((N + M) log(N + M))",
    "spaceComplexity": "O(N + M)",
    "explanation": "Executes a UNION between SELECT first_name FROM employees and SELECT department_name FROM departments, merging rows and removing duplicate values.",
    "keyTakeaway": "UNION combines rows from multiple SELECT statements into a single result set and automatically removes duplicate rows. Contrast with JOIN, which combines columns."
  },
  "Basics-022": {
    "code_id": "Basics-022",
    "levelNumber": 22,
    "title": "Combine Results of Two Queries Using UNION ALL",
    "optimalCode": "SELECT first_name FROM employees\nUNION ALL\nSELECT department_name FROM departments;",
    "timeComplexity": "O(N + M)",
    "spaceComplexity": "O(N + M)",
    "explanation": "Executes a UNION ALL between SELECT first_name FROM employees and SELECT department_name FROM departments, merging all rows without removing duplicates.",
    "keyTakeaway": "UNION ALL combines rows from multiple SELECT statements into a single result set without checking or removing duplicate rows, making it faster than UNION."
  },
  "Basics-023": {
    "code_id": "Basics-023",
    "levelNumber": 23,
    "title": "Filter Records Using the LIKE Operator",
    "optimalCode": "SELECT first_name FROM employees WHERE first_name LIKE 'A%';",
    "timeComplexity": "O(N) / O(log N) (Prefix search 'A%' can utilize B-Tree index)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name FROM employees WHERE first_name LIKE 'A%', using the LIKE pattern matching operator with wildcard '%'.",
    "keyTakeaway": "LIKE enables pattern matching in SQL. '%' represents zero or more characters, while '_' represents exactly one character. Prefix patterns ('A%') can leverage B-Tree indexes."
  },
  "Basics-024": {
    "code_id": "Basics-024",
    "levelNumber": 24,
    "title": "Filter Records Using the IN Operator",
    "optimalCode": "SELECT first_name FROM employees WHERE first_name IN ('John', 'Alice', 'Bob');",
    "timeComplexity": "O(N) / O(log N) (Can utilize B-Tree index lookup for list items)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name FROM employees WHERE first_name IN ('John', 'Alice', 'Bob'), cleanly replacing multiple OR conditions with set membership checking.",
    "keyTakeaway": "The IN operator checks whether a value matches any item in a literal list or subquery result. It provides a cleaner, more readable alternative to multiple OR conditions."
  },
  "Basics-025": {
    "code_id": "Basics-025",
    "levelNumber": 25,
    "title": "Filter Records Using the BETWEEN Operator",
    "optimalCode": "SELECT first_name FROM employees WHERE salary BETWEEN 50000 AND 100000;",
    "timeComplexity": "O(N) / O(log N) (Can utilize B-Tree range scans)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name FROM employees WHERE salary BETWEEN 50000 AND 100000, filtering records within an inclusive range.",
    "keyTakeaway": "BETWEEN filters values within a continuous range and is inclusive of both boundary values (val >= low AND val <= high)."
  },
  "Basics-026": {
    "code_id": "Basics-026",
    "levelNumber": 26,
    "title": "Find Records with Missing Values Using IS NULL",
    "optimalCode": "SELECT first_name FROM employees WHERE manager_id IS NULL;",
    "timeComplexity": "O(N) / O(log N) (With index)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name FROM employees WHERE manager_id IS NULL, retrieving rows with missing/unknown values using IS NULL predicate.",
    "keyTakeaway": "NULL represents unknown or missing data. Always use IS NULL or IS NOT NULL to evaluate NULLs in SQL; never use scalar equality = NULL."
  },
  "Basics-027": {
    "code_id": "Basics-027",
    "levelNumber": 27,
    "title": "Find Records with Non-NULL Values Using IS NOT NULL",
    "optimalCode": "SELECT first_name FROM employees WHERE manager_id IS NOT NULL;",
    "timeComplexity": "O(N) / O(log N) (With index)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name FROM employees WHERE manager_id IS NOT NULL, retrieving rows with valid stored values using IS NOT NULL predicate.",
    "keyTakeaway": "IS NOT NULL checks for existing values. Never use != NULL or <> NULL because inequality comparisons with NULL evaluate to UNKNOWN."
  },
  "Basics-028": {
    "code_id": "Basics-028",
    "levelNumber": 28,
    "title": "Use CASE WHEN to Display Conditional Values",
    "optimalCode": "SELECT first_name, salary, CASE WHEN salary >= 100000 THEN 'High Salary' WHEN salary >= 60000 THEN 'Medium Salary' ELSE 'Low Salary' END AS salary_category FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name, salary, CASE WHEN... END AS salary_category FROM employees, projecting conditional values per row.",
    "keyTakeaway": "CASE WHEN enables inline conditional logic in SQL. Always order conditions from most specific to least specific because evaluation stops at the first matching WHEN."
  },
  "Basics-029": {
    "code_id": "Basics-029",
    "levelNumber": 29,
    "title": "Round Decimal Values Using ROUND()",
    "optimalCode": "SELECT first_name, salary, ROUND(salary, 2) AS rounded_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name, salary, ROUND(salary, 2) AS rounded_salary FROM employees, rounding values to specified decimal precision.",
    "keyTakeaway": "ROUND(value, decimal_places) rounds numeric values. Omitted decimal places round to the nearest whole integer."
  },
  "Basics-030": {
    "code_id": "Basics-030",
    "levelNumber": 30,
    "title": "Find the Length of a String Using LENGTH()",
    "optimalCode": "SELECT first_name, LENGTH(first_name) AS name_length FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name, LENGTH(first_name) AS name_length FROM employees, counting characters in string values.",
    "keyTakeaway": "LENGTH() returns character counts in MySQL, PostgreSQL, SQLite, and Oracle. Use LEN() in SQL Server."
  },
  "Basics-031": {
    "code_id": "Basics-031",
    "levelNumber": 31,
    "title": "Convert Text to Uppercase and Lowercase Using UPPER() and LOWER()",
    "optimalCode": "SELECT first_name, UPPER(first_name) AS upper_name, LOWER(first_name) AS lower_name FROM employees;",
    "timeComplexity": "O(N * M)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name, UPPER(first_name) AS upper_name, LOWER(first_name) AS lower_name FROM employees, transforming character casing per row.",
    "keyTakeaway": "UPPER() and LOWER() alter text display casing without modifying stored database values. Crucial for case-insensitive searches."
  },
  "Basics-032": {
    "code_id": "Basics-032",
    "levelNumber": 32,
    "title": "Extract Part of a String Using SUBSTRING()",
    "optimalCode": "SELECT first_name, SUBSTR(first_name, 1, 3) AS first_three_letters FROM employees;",
    "timeComplexity": "O(N * M)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name, SUBSTR(first_name, 1, 3) AS first_three_letters FROM employees, extracting 3 characters starting from 1st position.",
    "keyTakeaway": "SUBSTRING(str, start, length) extracts text starting at 1-indexed position. Use SUBSTR() in Oracle/SQLite."
  },
  "Basics-033": {
    "code_id": "Basics-033",
    "levelNumber": 33,
    "title": "Replace Part of a String Using REPLACE()",
    "optimalCode": "SELECT first_name, REPLACE(first_name, 'John', 'Jonathan') AS updated_name FROM employees;",
    "timeComplexity": "O(N * M)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name, REPLACE(first_name, 'John', 'Jonathan') AS updated_name FROM employees, substituting every occurrence of 'John' with 'Jonathan'.",
    "keyTakeaway": "REPLACE(string, old_string, new_string) performs string substitution per row. SELECT projection alters display output only, not table records on disk."
  },
  "Basics-034": {
    "code_id": "Basics-034",
    "levelNumber": 34,
    "title": "Replace NULL Values Using COALESCE()",
    "optimalCode": "SELECT first_name, COALESCE(CAST(manager_id AS TEXT), 'No Manager') AS manager FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name, COALESCE(CAST(manager_id AS TEXT), 'No Manager') AS manager FROM employees, returning manager_id or defaulting to 'No Manager'.",
    "keyTakeaway": "COALESCE(e1, e2, ... eN) returns the first non-NULL expression from left to right. It is ANSI SQL compliant across all database engines."
  },
  "Basics-035": {
    "code_id": "Basics-035",
    "levelNumber": 35,
    "title": "Display the Current Date and Time",
    "optimalCode": "SELECT CURRENT_DATE AS current_date, CURRENT_TIME AS current_time, CURRENT_TIMESTAMP AS current_datetime;",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT CURRENT_DATE AS current_date, CURRENT_TIME AS current_time, CURRENT_TIMESTAMP AS current_datetime, retrieving system clock parameters from the database server.",
    "keyTakeaway": "CURRENT_DATE, CURRENT_TIME, and CURRENT_TIMESTAMP are ANSI SQL scalar functions evaluated in O(1) time without querying any table on disk."
  },
  "SQL-001": {
    "code_id": "SQL-001",
    "levelNumber": 36,
    "title": "Group Employees by Department",
    "optimalCode": "SELECT department_name,\n       COUNT(*) AS employee_count\nFROM employees\nGROUP BY department_name\nORDER BY department_name;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT department_name, COUNT(*) AS employee_count FROM employees GROUP BY department_name ORDER BY department_name, grouping employees by department and counting total headcounts.",
    "keyTakeaway": "GROUP BY clusters rows sharing common column values, enabling aggregate functions like COUNT() to compute per-group totals."
  },
  "SQL-002": {
    "code_id": "SQL-002",
    "levelNumber": 37,
    "title": "Group Students by Class",
    "optimalCode": "SELECT class_name,\n       COUNT(*) AS student_count\nFROM students\nGROUP BY class_name\nORDER BY class_name;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT class_name, COUNT(*) AS student_count FROM students GROUP BY class_name ORDER BY class_name, grouping student records by class and computing enrollment counts.",
    "keyTakeaway": "GROUP BY partitions student records by class_name, enabling COUNT(*) to count total enrollments per class."
  },
  "SQL-003": {
    "code_id": "SQL-003",
    "levelNumber": 38,
    "title": "Count Employees per Department",
    "optimalCode": "SELECT department_name,\n       COUNT(*) AS total_employees\nFROM employees\nGROUP BY department_name\nORDER BY total_employees DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT department_name, COUNT(*) AS total_employees FROM employees GROUP BY department_name ORDER BY total_employees DESC, grouping employee records by department and sorting from largest to smallest headcount.",
    "keyTakeaway": "ORDER BY ... DESC sorts aggregate group counts from highest to lowest, surfacing the largest groups first."
  },
  "SQL-004": {
    "code_id": "SQL-004",
    "levelNumber": 39,
    "title": "Departments Having More Than 5 Employees",
    "optimalCode": "SELECT department_name,\n       COUNT(*) AS employee_count\nFROM employees\nGROUP BY department_name\nHAVING COUNT(*) > 5\nORDER BY employee_count DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT department_name, COUNT(*) AS employee_count FROM employees GROUP BY department_name HAVING COUNT(*) > 5 ORDER BY employee_count DESC, filtering department groups having more than 5 members.",
    "keyTakeaway": "HAVING filters aggregated groups after GROUP BY, whereas WHERE filters individual rows before grouping."
  },
  "SQL-005": {
    "code_id": "SQL-005",
    "levelNumber": 40,
    "title": "Departments with Average Salary Greater Than ₹50,000",
    "optimalCode": "SELECT department_name,\n       ROUND(AVG(salary), 2) AS average_salary\nFROM employees\nGROUP BY department_name\nHAVING AVG(salary) > 50000\nORDER BY average_salary DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT department_name, ROUND(AVG(salary), 2) AS average_salary FROM employees GROUP BY department_name HAVING AVG(salary) > 50000 ORDER BY average_salary DESC, calculating department average compensation, rounding to 2 decimal places, and ranking highest to lowest.",
    "keyTakeaway": "AVG() calculates mean values ignoring NULLs, ROUND(..., 2) formats clean decimals, and HAVING filters aggregates after GROUP BY."
  },
  "SQL-006": {
    "code_id": "SQL-006",
    "levelNumber": 41,
    "title": "Cities Having More Than 10 Customers",
    "optimalCode": "SELECT city,\n       COUNT(*) AS customer_count\nFROM customers\nGROUP BY city\nHAVING COUNT(*) > 10\nORDER BY customer_count DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT city, COUNT(*) AS customer_count FROM customers GROUP BY city HAVING COUNT(*) > 10 ORDER BY customer_count DESC, grouping customers by city and filtering for cities with more than 10 customers sorted in descending order.",
    "keyTakeaway": "GROUP BY partitions records by category/location, COUNT(*) aggregates totals, and HAVING filters aggregated group metrics."
  },
  "SQL-007": {
    "code_id": "SQL-007",
    "levelNumber": 42,
    "title": "Product Categories with Highest Sales",
    "optimalCode": "SELECT category_name,\n       SUM(sales_amount) AS total_sales\nFROM sales\nGROUP BY category_name\nORDER BY total_sales DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT category_name, SUM(sales_amount) AS total_sales FROM sales GROUP BY category_name ORDER BY total_sales DESC, grouping transactions by category, summing sales revenues, and ranking categories from highest grossing to lowest.",
    "keyTakeaway": "SUM() computes total numeric values per group, ignoring NULLs, and ORDER BY DESC orders categories from highest revenue to lowest."
  },
  "SQL-008": {
    "code_id": "SQL-008",
    "levelNumber": 43,
    "title": "Customers with More Than 5 Orders",
    "optimalCode": "SELECT customer_id,\n       customer_name,\n       COUNT(*) AS total_orders\nFROM orders\nGROUP BY customer_id, customer_name\nHAVING COUNT(*) > 5\nORDER BY total_orders DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT customer_id, customer_name, COUNT(*) AS total_orders FROM orders GROUP BY customer_id, customer_name HAVING COUNT(*) > 5 ORDER BY total_orders DESC, aggregating orders per customer, filtering for customers with more than 5 orders, and ordering descending.",
    "keyTakeaway": "All non-aggregated columns in SELECT must be included in GROUP BY in standard ANSI SQL, and HAVING filters aggregated counts."
  },
  "SQL-009": {
    "code_id": "SQL-009",
    "levelNumber": 44,
    "title": "Branches with Highest Profit",
    "optimalCode": "SELECT branch_name,\n       SUM(selling_price - cost_price) AS total_profit\nFROM sales\nGROUP BY branch_name\nORDER BY total_profit DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT branch_name, SUM(selling_price - cost_price) AS total_profit FROM sales GROUP BY branch_name ORDER BY total_profit DESC, evaluating row-level profit per transaction, summing per branch, and sorting branches by total profitability in descending order.",
    "keyTakeaway": "SUM() accepts calculated expressions like (selling_price - cost_price) to compute totals over derived metrics per group."
  },
  "SQL-010": {
    "code_id": "SQL-010",
    "levelNumber": 45,
    "title": "States with Highest Customers",
    "optimalCode": "SELECT state,\n       COUNT(*) AS total_customers\nFROM customers\nGROUP BY state\nORDER BY total_customers DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT state, COUNT(*) AS total_customers FROM customers GROUP BY state ORDER BY total_customers DESC, aggregating user records per state and sorting by total customer count in descending order.",
    "keyTakeaway": "COUNT(*) tallies all rows per state group, and ORDER BY DESC orders regions from largest customer base to smallest."
  },
  "SQL-011": {
    "code_id": "SQL-011",
    "levelNumber": 46,
    "title": "Monthly Sales Summary",
    "optimalCode": "SELECT MONTH(order_date) AS month,\n       COUNT(*) AS total_orders,\n       SUM(total_amount) AS total_sales\nFROM orders\nGROUP BY MONTH(order_date)\nORDER BY month;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT MONTH(order_date) AS month, COUNT(*) AS total_orders, SUM(total_amount) AS total_sales FROM orders GROUP BY MONTH(order_date) ORDER BY month, extracting the month component from order_date, aggregating order counts and sales amounts, and sorting chronologically.",
    "keyTakeaway": "MONTH() (or EXTRACT(MONTH FROM date)) extracts numerical months from dates, enabling temporal grouping and chronological reporting with ORDER BY month."
  },
  "SQL-012": {
    "code_id": "SQL-012",
    "levelNumber": 47,
    "title": "Yearly Sales Summary",
    "optimalCode": "SELECT YEAR(order_date) AS year,\n       COUNT(*) AS total_orders,\n       SUM(total_amount) AS total_sales\nFROM orders\nGROUP BY YEAR(order_date)\nORDER BY year;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT YEAR(order_date) AS year, COUNT(*) AS total_orders, SUM(total_amount) AS total_sales FROM orders GROUP BY YEAR(order_date) ORDER BY year, extracting the 4-digit year component, aggregating annual order volumes and revenues, and ordering chronologically.",
    "keyTakeaway": "YEAR() (or EXTRACT(YEAR FROM date)) extracts annual cohorts from date values, ideal for multi-year trend analysis and executive financial reporting."
  },
  "SQL-013": {
    "code_id": "SQL-013",
    "levelNumber": 48,
    "title": "Products Sold More Than 100 Times",
    "optimalCode": "SELECT product_id,\n       product_name,\n       SUM(quantity) AS total_quantity\nFROM sales\nGROUP BY product_id, product_name\nHAVING SUM(quantity) > 100\nORDER BY total_quantity DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT product_id, product_name, SUM(quantity) AS total_quantity FROM sales GROUP BY product_id, product_name HAVING SUM(quantity) > 100 ORDER BY total_quantity DESC, clustering sales by product entity, aggregating sold quantities, filtering via HAVING for volumes > 100, and ranking highest volume first.",
    "keyTakeaway": "HAVING filters aggregated groups after GROUP BY evaluation, whereas WHERE filters individual raw rows before grouping occurs."
  },
  "SQL-014": {
    "code_id": "SQL-014",
    "levelNumber": 49,
    "title": "Average Age by City",
    "optimalCode": "SELECT city,\n       ROUND(AVG(age), 2) AS average_age\nFROM customers\nGROUP BY city\nORDER BY city;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT city, ROUND(AVG(age), 2) AS average_age FROM customers GROUP BY city ORDER BY city, grouping customers by city, computing the arithmetic mean age with AVG(age), rounding the result to 2 decimal places with ROUND(..., 2), and ordering alphabetically by city name.",
    "keyTakeaway": "AVG() calculates the arithmetic mean of numeric columns while ignoring NULLs, and ROUND(..., 2) formats floating point results for clean presentation."
  },
  "SQL-015": {
    "code_id": "SQL-015",
    "levelNumber": 50,
    "title": "Highest Salary Department",
    "optimalCode": "SELECT department_name,\n       ROUND(AVG(salary), 2) AS average_salary\nFROM employees\nGROUP BY department_name\nORDER BY average_salary DESC\nLIMIT 1;",
    "timeComplexity": "O(N + G log G)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT department_name, ROUND(AVG(salary), 2) AS average_salary FROM employees GROUP BY department_name ORDER BY average_salary DESC LIMIT 1, aggregating average compensation per department, sorting the groups descending by average salary, and returning the single top-earning department.",
    "keyTakeaway": "Combining GROUP BY with aggregate functions, ORDER BY DESC, and LIMIT 1 is the standard SQL pattern for locating top-performing entities across groups."
  },
  "SQL-016": {
    "code_id": "SQL-016",
    "levelNumber": 51,
    "title": "Lowest salary department",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Lowest salary department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Lowest salary department is essential for database query optimization and relational data analysis."
  },
  "SQL-017": {
    "code_id": "SQL-017",
    "levelNumber": 52,
    "title": "Average Marks Above 80",
    "optimalCode": "SELECT class_name,\n       ROUND(AVG(marks), 2) AS average_marks\nFROM students\nGROUP BY class_name\nHAVING AVG(marks) > 80\nORDER BY average_marks DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT class_name, ROUND(AVG(marks), 2) AS average_marks FROM students GROUP BY class_name HAVING AVG(marks) > 80 ORDER BY average_marks DESC, grouping student performance records by classroom entity, computing average score with AVG(marks), rounding results to 2 decimals with ROUND(..., 2), filtering for group averages > 80 via HAVING, and sorting honor roll classrooms descending.",
    "keyTakeaway": "HAVING AVG(marks) > 80 filters aggregate group calculations after GROUP BY, whereas WHERE filters individual student rows before grouping."
  },
  "SQL-018": {
    "code_id": "SQL-018",
    "levelNumber": 53,
    "title": "Groups Using Multiple Columns",
    "optimalCode": "SELECT department_name,\n       city,\n       COUNT(*) AS employee_count\nFROM employees\nGROUP BY department_name,\n         city\nORDER BY department_name,\n         city;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT department_name, city, COUNT(*) AS employee_count FROM employees GROUP BY department_name, city ORDER BY department_name, city, partitioning employee records into unique composite department-city pairs, counting total headcount within each multi-column group, and sorting by department name and city.",
    "keyTakeaway": "Grouping by multiple columns creates a aggregate bucket for every unique combination of values across those specified columns."
  },
  "SQL-019": {
    "code_id": "SQL-019",
    "levelNumber": 54,
    "title": "HAVING with COUNT()",
    "optimalCode": "SELECT category_name,\n       COUNT(*) AS product_count\nFROM products\nGROUP BY category_name\nHAVING COUNT(*) >= 10\nORDER BY product_count DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT category_name, COUNT(*) AS product_count FROM products GROUP BY category_name HAVING COUNT(*) >= 10 ORDER BY product_count DESC, partitioning products into category buckets, counting items per bucket, filtering out categories with fewer than 10 items via HAVING, and sorting largest categories first.",
    "keyTakeaway": "Use HAVING COUNT(*) >= N to filter groups based on the total number of items contained within each group."
  },
  "SQL-020": {
    "code_id": "SQL-020",
    "levelNumber": 55,
    "title": "HAVING with SUM()",
    "optimalCode": "SELECT customer_id,\n       customer_name,\n       SUM(purchase_amount) AS total_purchase\nFROM purchases\nGROUP BY customer_id,\n         customer_name\nHAVING SUM(purchase_amount) > 50000\nORDER BY total_purchase DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT customer_id, customer_name, SUM(purchase_amount) AS total_purchase FROM purchases GROUP BY customer_id, customer_name HAVING SUM(purchase_amount) > 50000 ORDER BY total_purchase DESC, grouping records per customer, computing total spend with SUM(purchase_amount), filtering out customers below 50000 with HAVING, and sorting high-rollers first.",
    "keyTakeaway": "Aggregate function SUM() must be filtered in the HAVING clause because it evaluates aggregated groups after they are formed."
  },
  "SQL-021": {
    "code_id": "SQL-021",
    "levelNumber": 56,
    "title": "INNER JOIN",
    "optimalCode": "SELECT e.employee_id,\n       e.employee_name,\n       d.department_name\nFROM employees AS e\nINNER JOIN departments AS d\nON e.department_id = d.department_id\nORDER BY e.employee_id;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT e.employee_id, e.employee_name, d.department_name FROM employees AS e INNER JOIN departments AS d ON e.department_id = d.department_id ORDER BY e.employee_id, linking employee records to department records exclusively where the foreign key department_id matches, discarding unmatched rows from either side, and sorting by employee ID.",
    "keyTakeaway": "INNER JOIN acts as an intersection operation, returning only rows that have matching values in both tables based on the ON condition."
  },
  "SQL-022": {
    "code_id": "SQL-022",
    "levelNumber": 57,
    "title": "LEFT JOIN",
    "optimalCode": "SELECT e.employee_id,\n       e.employee_name,\n       d.department_name\nFROM employees AS e\nLEFT JOIN departments AS d\nON e.department_id = d.department_id\nORDER BY e.employee_id;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT e.employee_id, e.employee_name, d.department_name FROM employees AS e LEFT JOIN departments AS d ON e.department_id = d.department_id ORDER BY e.employee_id, returning all rows from the primary left table (employees) and appending matching department names from the right table. If an employee has no valid department, it fills the right side with NULLs.",
    "keyTakeaway": "LEFT JOIN ensures zero data loss from the left-hand table, preserving all primary records even if related lookup data is missing."
  },
  "SQL-023": {
    "code_id": "SQL-023",
    "levelNumber": 58,
    "title": "RIGHT JOIN",
    "optimalCode": "SELECT d.department_name,\n       e.employee_name\nFROM employees AS e\nRIGHT JOIN departments AS d\nON e.department_id = d.department_id\nORDER BY d.department_name;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT d.department_name, e.employee_name FROM employees AS e RIGHT JOIN departments AS d ON e.department_id = d.department_id ORDER BY d.department_name, guaranteeing that every department record from the right-hand table is included in the output. For empty departments like Marketing, corresponding employee columns evaluate to NULL.",
    "keyTakeaway": "RIGHT JOIN preserves all records from the right-side table. However, since it is syntactically equivalent to a LEFT JOIN with swapped table order, most teams prefer standardizing on LEFT JOIN for readability."
  },
  "SQL-024": {
    "code_id": "SQL-024",
    "levelNumber": 59,
    "title": "FULL JOIN",
    "optimalCode": "SELECT e.employee_name,\n       d.department_name\nFROM employees AS e\nFULL JOIN departments AS d\nON e.department_id = d.department_id\nORDER BY d.department_name;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT e.employee_name, d.department_name FROM employees AS e FULL JOIN departments AS d ON e.department_id = d.department_id ORDER BY d.department_name, combining the results of a LEFT JOIN and a RIGHT JOIN. It preserves matching records, unmatched employees (NULL department), and empty departments (NULL employee) all in a single result set.",
    "keyTakeaway": "FULL JOIN ensures zero data loss from BOTH tables, making it perfect for finding mismatches or reconciling missing data between two datasets."
  },
  "SQL-025": {
    "code_id": "SQL-025",
    "levelNumber": 60,
    "title": "SELF JOIN",
    "optimalCode": "SELECT e.employee_name,\n       m.employee_name AS manager_name\nFROM employees AS e\nLEFT JOIN employees AS m\nON e.manager_id = m.employee_id\nORDER BY e.employee_name;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT e.employee_name, m.employee_name AS manager_name FROM employees AS e LEFT JOIN employees AS m ON e.manager_id = m.employee_id ORDER BY e.employee_name. It treats the single 'employees' table as two distinct entities using aliases (e and m), looking up the manager's ID from the 'e' side against the employee ID on the 'm' side. The LEFT JOIN ensures top-level executives (who have no manager) are still included.",
    "keyTakeaway": "SELF JOIN is not a special keyword, but a technique of aliasing the same table twice to resolve hierarchical or sequential relationships contained within a single dataset."
  }
};

export const ALL_50_SOLUTIONS: Record<string, any> = {
  ...BASE_SOLUTIONS_MAP,
  ...Object.fromEntries(Object.values(BASE_SOLUTIONS_MAP).map(item => [String(item.levelNumber || item.numeric_id || item.level_number), item]))
};
