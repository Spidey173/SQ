// 100 Job-Focused SQL Canonical Reference Solutions
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
    "optimalCode": "SELECT * FROM employees;",
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
    "optimalCode": "SELECT department_name,\n       ROUND(AVG(salary), 2) AS average_salary\nFROM employees\nGROUP BY department_name\nORDER BY average_salary ASC\nLIMIT 1;",
    "timeComplexity": "O(N + G log G)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT department_name, ROUND(AVG(salary), 2) AS average_salary FROM employees GROUP BY department_name ORDER BY average_salary ASC LIMIT 1, aggregating average compensation per department, sorting the groups ascending by average salary, and returning the single lowest-earning department.",
    "keyTakeaway": "Combining GROUP BY with AVG(), ORDER BY ASC, and LIMIT 1 isolates the group with the lowest average metric."
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
,
  "SQL-026": {
    "code_id": "SQL-026",
    "levelNumber": 61,
    "title": "CROSS JOIN",
    "optimalCode": "SELECT e.employee_name,\n       d.department_name\nFROM employees AS e\nCROSS JOIN departments AS d\nORDER BY e.employee_name,\n         d.department_name;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT e.employee_name, d.department_name FROM employees AS e CROSS JOIN departments AS d ORDER BY e.employee_name, d.department_name, producing a Cartesian Product that pairs every employee with every department without any matching condition, and sorting by employee name and department name.",
    "keyTakeaway": "CROSS JOIN generates a Cartesian Product combining every row from the first table with every row from the second table without needing an ON clause."
  },
  "SQL-027": {
    "code_id": "SQL-027",
    "levelNumber": 62,
    "title": "Employees with Department Names",
    "optimalCode": "SELECT e.employee_id,\n       e.employee_name,\n       d.department_name\nFROM employees AS e\nINNER JOIN departments AS d\nON e.department_id = d.department_id\nORDER BY e.employee_id;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT e.employee_id, e.employee_name, d.department_name FROM employees AS e INNER JOIN departments AS d ON e.department_id = d.department_id ORDER BY e.employee_id, performing an inner join to display each employee alongside their department name and sorting by employee_id.",
    "keyTakeaway": "INNER JOIN combines related records from two tables by matching key columns in the ON clause, eliminating unmatched rows from both tables."
  },
  "SQL-028": {
    "code_id": "SQL-028",
    "levelNumber": 63,
    "title": "Customers with Orders",
    "optimalCode": "SELECT o.order_id,\n       c.customer_name,\n       o.order_date,\n       o.total_amount\nFROM orders AS o\nINNER JOIN customers AS c\nON o.customer_id = c.customer_id\nORDER BY o.order_id;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT o.order_id, c.customer_name, o.order_date, o.total_amount FROM orders AS o INNER JOIN customers AS c ON o.customer_id = c.customer_id ORDER BY o.order_id, joining orders with customers on customer_id to display each placed order with the customer's name, sorted by order_id.",
    "keyTakeaway": "INNER JOIN connects transaction tables (like orders) to master dimension tables (like customers) across a one-to-many relationship, filtering out customers who have placed zero orders."
  },
  "SQL-029": {
    "code_id": "SQL-029",
    "levelNumber": 64,
    "title": "Customers without Orders",
    "optimalCode": "SELECT c.customer_id,\n       c.customer_name\nFROM customers AS c\nLEFT JOIN orders AS o\nON c.customer_id = o.customer_id\nWHERE o.customer_id IS NULL\nORDER BY c.customer_id;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT c.customer_id, c.customer_name FROM customers AS c LEFT JOIN orders AS o ON c.customer_id = o.customer_id WHERE o.customer_id IS NULL ORDER BY c.customer_id. It starts with every customer, performs a LEFT JOIN against orders, and filters using WHERE o.customer_id IS NULL to return only customers who have never placed an order, sorted by customer_id.",
    "keyTakeaway": "LEFT JOIN paired with a WHERE joined_table.id IS NULL check is the canonical SQL anti-join pattern to identify unmatched dimension records."
  },
  "SQL-030": {
    "code_id": "SQL-030",
    "levelNumber": 65,
    "title": "Orders without Customers",
    "optimalCode": "SELECT o.order_id,\n       o.customer_id,\n       o.order_date,\n       o.total_amount\nFROM orders AS o\nLEFT JOIN customers AS c\nON o.customer_id = c.customer_id\nWHERE c.customer_id IS NULL\nORDER BY o.order_id;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT o.order_id, o.customer_id, o.order_date, o.total_amount FROM orders AS o LEFT JOIN customers AS c ON o.customer_id = c.customer_id WHERE c.customer_id IS NULL ORDER BY o.order_id. It starts with all orders, joins with customers on customer_id, and filters for orders that reference non-existent customers using WHERE c.customer_id IS NULL, identifying orphan records sorted by order_id.",
    "keyTakeaway": "Detecting orphan records via LEFT JOIN with WHERE parent.id IS NULL audits data integrity and reveals broken foreign keys."
  },
  "SQL-031": {
    "code_id": "SQL-031",
    "levelNumber": 66,
    "title": "Students with Course Names",
    "optimalCode": "SELECT s.student_id,\n       s.student_name,\n       c.course_name\nFROM students AS s\nINNER JOIN courses AS c\nON s.course_id = c.course_id\nORDER BY s.student_id;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT s.student_id, s.student_name, c.course_name FROM students AS s INNER JOIN courses AS c ON s.course_id = c.course_id ORDER BY s.student_id, combining students with courses on course_id to display each enrolled student's name alongside their course name, sorted by student_id.",
    "keyTakeaway": "INNER JOIN combines related records across normalized tables by matching foreign keys to primary keys, avoiding data redundancy."
  },
  "SQL-032": {
    "code_id": "SQL-032",
    "levelNumber": 67,
    "title": "Employees without Managers",
    "optimalCode": "SELECT employee_id,\n       employee_name\nFROM employees\nWHERE manager_id IS NULL\nORDER BY employee_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT employee_id, employee_name FROM employees WHERE manager_id IS NULL ORDER BY employee_id, scanning employees and filtering with WHERE manager_id IS NULL to return all top-level executives who report to no manager, sorted by employee_id.",
    "keyTakeaway": "In SQL, comparing NULL with = evaluates to UNKNOWN; finding records without parents requires the IS NULL operator."
  },
  "SQL-033": {
    "code_id": "SQL-033",
    "levelNumber": 68,
    "title": "Manager and Employee Names",
    "optimalCode": "SELECT e.employee_id,\n       e.employee_name,\n       m.employee_name AS manager_name\nFROM employees AS e\nLEFT JOIN employees AS m\nON e.manager_id = m.employee_id\nORDER BY e.employee_id;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT e.employee_id, e.employee_name, m.employee_name AS manager_name FROM employees AS e LEFT JOIN employees AS m ON e.manager_id = m.employee_id ORDER BY e.employee_id, performing a SELF JOIN by aliasing employees as e (subordinate) and m (manager) on e.manager_id = m.employee_id. The LEFT JOIN ensures top-level leaders with NULL managers remain in the output.",
    "keyTakeaway": "SELF JOIN aliasing the same table as parent and child allows querying hierarchical reporting chains stored in a single table."
  },
  "SQL-034": {
    "code_id": "SQL-034",
    "levelNumber": 69,
    "title": "Multiple Table Joins",
    "optimalCode": "SELECT e.employee_id,\n       e.employee_name,\n       d.department_name,\n       l.city\nFROM employees AS e\nINNER JOIN departments AS d\nON e.department_id = d.department_id\nINNER JOIN locations AS l\nON d.location_id = l.location_id\nORDER BY e.employee_id;",
    "timeComplexity": "O(N × M × K)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT e.employee_id, e.employee_name, d.department_name, l.city FROM employees AS e INNER JOIN departments AS d ON e.department_id = d.department_id INNER JOIN locations AS l ON d.location_id = l.location_id ORDER BY e.employee_id, chaining two INNER JOINs through intermediate foreign keys to assemble employee, department, and city data into a unified result set, sorted by employee_id.",
    "keyTakeaway": "Chaining multiple INNER JOINs allows traversing relational entity pathways (Employees -> Departments -> Locations) using foreign key bridges."
  },
  "SQL-035": {
    "code_id": "SQL-035",
    "levelNumber": 70,
    "title": "Join Three Tables",
    "optimalCode": "SELECT o.order_id,\n       c.customer_name,\n       p.product_name,\n       p.price\nFROM orders AS o\nINNER JOIN customers AS c\nON o.customer_id = c.customer_id\nINNER JOIN products AS p\nON o.product_id = p.product_id\nORDER BY o.order_id;",
    "timeComplexity": "O(N × M × K)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT o.order_id, c.customer_name, p.product_name, p.price FROM orders AS o INNER JOIN customers AS c ON o.customer_id = c.customer_id INNER JOIN products AS p ON o.product_id = p.product_id ORDER BY o.order_id. It starts with orders, joins customers on customer_id, and joins products on product_id to assemble complete transaction details, sorted by order_id.",
    "keyTakeaway": "Starting from the central transaction table and joining dimension tables on their respective foreign keys is the quintessential multi-join reporting pattern."
  },
  "ASQL-001": {
    "code_id": "ASQL-001",
    "levelNumber": 71,
    "title": "Grade Students",
    "optimalCode": "SELECT student_id,\n       student_name,\n       marks,\n       CASE\n           WHEN marks >= 90 THEN 'A'\n           WHEN marks >= 80 THEN 'B'\n           WHEN marks >= 70 THEN 'C'\n           WHEN marks >= 60 THEN 'D'\n           ELSE 'F'\n       END AS grade\nFROM students\nORDER BY student_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT student_id, student_name, marks, CASE WHEN marks >= 90 THEN 'A' WHEN marks >= 80 THEN 'B' WHEN marks >= 70 THEN 'C' WHEN marks >= 60 THEN 'D' ELSE 'F' END AS grade FROM students ORDER BY student_id, applying conditional branching in descending order to assign letter grades A through F, sorted by student_id.",
    "keyTakeaway": "CASE WHEN evaluates sequentially and short-circuits upon the first true condition, requiring descending numerical order when checking greater-than-or-equal thresholds."
  },
  "ASQL-002": {
    "code_id": "ASQL-002",
    "levelNumber": 72,
    "title": "Salary Bands",
    "optimalCode": "SELECT employee_id,\n       employee_name,\n       salary,\n       CASE\n           WHEN salary >= 100000 THEN 'High'\n           WHEN salary >= 70000 THEN 'Medium'\n           WHEN salary >= 40000 THEN 'Low'\n           ELSE 'Very Low'\n       END AS salary_band\nFROM employees\nORDER BY employee_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT employee_id, employee_name, salary, CASE WHEN salary >= 100000 THEN 'High' WHEN salary >= 70000 THEN 'Medium' WHEN salary >= 40000 THEN 'Low' ELSE 'Very Low' END AS salary_band FROM employees ORDER BY employee_id, classifying staff compensation into High, Medium, Low, and Very Low brackets via ordered conditional evaluation, sorted by employee_id.",
    "keyTakeaway": "Conditional binning with CASE WHEN assigns discrete category labels to continuous numerical data in linear O(N) time."
  },
  "ASQL-003": {
    "code_id": "ASQL-003",
    "levelNumber": 73,
    "title": "Age Groups",
    "optimalCode": "SELECT person_id,\n       person_name,\n       age,\n       CASE\n           WHEN age >= 60 THEN 'Senior Citizen'\n           WHEN age >= 20 THEN 'Adult'\n           WHEN age >= 13 THEN 'Teen'\n           ELSE 'Child'\n       END AS age_group\nFROM persons\nORDER BY person_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT person_id, person_name, age, CASE WHEN age >= 60 THEN 'Senior Citizen' WHEN age >= 20 THEN 'Adult' WHEN age >= 13 THEN 'Teen' ELSE 'Child' END AS age_group FROM persons ORDER BY person_id, categorizing each person into demographic age cohorts via top-down conditional evaluation, sorted by person_id.",
    "keyTakeaway": "Descending threshold evaluation in CASE WHEN cleanly assigns demographic categories without requiring overlapping range checks."
  },
  "ASQL-004": {
    "code_id": "ASQL-004",
    "levelNumber": 74,
    "title": "Sales Categories",
    "optimalCode": "SELECT sale_id,\n       customer_name,\n       sale_amount,\n       CASE\n           WHEN sale_amount >= 100000 THEN 'Premium'\n           WHEN sale_amount >= 50000 THEN 'High'\n           WHEN sale_amount >= 20000 THEN 'Medium'\n           ELSE 'Low'\n       END AS sales_category\nFROM sales\nORDER BY sale_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT sale_id, customer_name, sale_amount, CASE WHEN sale_amount >= 100000 THEN 'Premium' WHEN sale_amount >= 50000 THEN 'High' WHEN sale_amount >= 20000 THEN 'Medium' ELSE 'Low' END AS sales_category FROM sales ORDER BY sale_id, stratifying sales into Premium, High, Medium, and Low tiers in linear O(N) time.",
    "keyTakeaway": "Cascading CASE WHEN statements offer high-performance transactional bucketing without the overhead of lookup tables or complex joins."
  },
  "ASQL-005": {
    "code_id": "ASQL-005",
    "levelNumber": 75,
    "title": "Bonus Calculation",
    "optimalCode": "SELECT employee_id,\n       employee_name,\n       salary,\n       CASE\n           WHEN salary >= 100000 THEN salary * 0.20\n           WHEN salary >= 70000 THEN salary * 0.15\n           WHEN salary >= 40000 THEN salary * 0.10\n           ELSE salary * 0.05\n       END AS bonus\nFROM employees\nORDER BY employee_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT employee_id, employee_name, salary, CASE WHEN salary >= 100000 THEN salary * 0.20 WHEN salary >= 70000 THEN salary * 0.15 WHEN salary >= 40000 THEN salary * 0.10 ELSE salary * 0.05 END AS bonus FROM employees ORDER BY employee_id, calculating tiered percentage bonuses through mathematical expressions directly inside CASE branches, sorted by employee_id.",
    "keyTakeaway": "CASE WHEN branches can dynamically compute arithmetic expressions (e.g. salary * 0.20) rather than merely returning static literal strings."
  },
  "ASQL-006": {
    "code_id": "ASQL-006",
    "levelNumber": 76,
    "title": "Customer Classification",
    "optimalCode": "SELECT customer_id,\n       customer_name,\n       total_purchase,\n       CASE\n           WHEN total_purchase >= 100000 THEN 'Platinum'\n           WHEN total_purchase >= 50000 THEN 'Gold'\n           WHEN total_purchase >= 20000 THEN 'Silver'\n           ELSE 'Bronze'\n       END AS customer_type\nFROM customers\nORDER BY customer_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT customer_id, customer_name, total_purchase, CASE WHEN total_purchase >= 100000 THEN 'Platinum' WHEN total_purchase >= 50000 THEN 'Gold' WHEN total_purchase >= 20000 THEN 'Silver' ELSE 'Bronze' END AS customer_type FROM customers ORDER BY customer_id, classifying users into membership loyalty tiers in linear O(N) time.",
    "keyTakeaway": "Loyalty tier segmentation using cascading CASE WHEN expressions allows instant real-time cohort labeling without batch ETL updates."
  },
  "ASQL-007": {
    "code_id": "ASQL-007",
    "levelNumber": 77,
    "title": "Pass/Fail Status",
    "optimalCode": "SELECT student_id,\n       student_name,\n       marks,\n       CASE\n           WHEN marks >= 40 THEN 'Pass'\n           ELSE 'Fail'\n       END AS result\nFROM students\nORDER BY student_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT student_id, student_name, marks, CASE WHEN marks >= 40 THEN 'Pass' ELSE 'Fail' END AS result FROM students ORDER BY student_id, implementing binary threshold evaluation using a single-branch CASE WHEN expression, sorted by student_id.",
    "keyTakeaway": "A single-condition CASE WHEN statement with an ELSE clause is the canonical SQL pattern for binary flags and pass/fail thresholds."
  },
  "ASQL-008": {
    "code_id": "ASQL-008",
    "levelNumber": 78,
    "title": "Gender Formatting",
    "optimalCode": "SELECT employee_id,\n       employee_name,\n       gender,\n       CASE\n           WHEN gender = 'M' THEN 'Male'\n           WHEN gender = 'F' THEN 'Female'\n           WHEN gender = 'O' THEN 'Other'\n           ELSE 'Unknown'\n       END AS gender_name\nFROM employees\nORDER BY employee_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT employee_id, employee_name, gender, CASE WHEN gender = 'M' THEN 'Male' WHEN gender = 'F' THEN 'Female' WHEN gender = 'O' THEN 'Other' ELSE 'Unknown' END AS gender_name FROM employees ORDER BY employee_id, converting single-character database codes into human-readable strings while safely mapping unexpected codes to 'Unknown', sorted by employee_id.",
    "keyTakeaway": "CASE WHEN enables presentation-layer decoding of internal database codes without modifying physical storage or schema constraints."
  },
  "ASQL-009": {
    "code_id": "ASQL-009",
    "levelNumber": 79,
    "title": "Conditional Aggregation",
    "optimalCode": "SELECT\n    COUNT(*) AS total_students,\n    SUM(\n        CASE\n            WHEN marks >= 40 THEN 1\n            ELSE 0\n        END\n    ) AS passed_students,\n    SUM(\n        CASE\n            WHEN marks < 40 THEN 1\n            ELSE 0\n        END\n    ) AS failed_students\nFROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT COUNT(*) AS total_students, SUM(CASE WHEN marks >= 40 THEN 1 ELSE 0 END) AS passed_students, SUM(CASE WHEN marks < 40 THEN 1 ELSE 0 END) AS failed_students FROM students, pivoting multiple filtered aggregate counts into a single-row executive summary in a single O(N) table pass.",
    "keyTakeaway": "The SUM(CASE WHEN ... THEN 1 ELSE 0 END) pattern is the foundational building block for conditional counting and data pivoting across all SQL dialects."
  },
  "ASQL-010": {
    "code_id": "ASQL-010",
    "levelNumber": 80,
    "title": "Multiple CASE Conditions",
    "optimalCode": "SELECT employee_id,\n       employee_name,\n       age,\n       salary,\n       CASE\n           WHEN age < 30 THEN 'Young'\n           WHEN age < 50 THEN 'Mid Age'\n           ELSE 'Senior'\n       END AS age_category,\n       CASE\n           WHEN salary >= 100000 THEN 'High'\n           WHEN salary >= 50000 THEN 'Medium'\n           ELSE 'Low'\n       END AS salary_category\nFROM employees\nORDER BY employee_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT employee_id, employee_name, age, salary, CASE WHEN age < 30 THEN 'Young' WHEN age < 50 THEN 'Mid Age' ELSE 'Senior' END AS age_category, CASE WHEN salary >= 100000 THEN 'High' WHEN salary >= 50000 THEN 'Medium' ELSE 'Low' END AS salary_category FROM employees ORDER BY employee_id, generating multiple distinct categorical dimensions independently in a single query scan.",
    "keyTakeaway": "Multiple distinct CASE WHEN expressions can exist within the same SELECT projection, each operating as an independent computed column."
  },
  "Pro-001": {
    "code_id": "Pro-001",
    "levelNumber": 81,
    "title": "Delete Duplicate Emails",
    "optimalCode": "DELETE p1\nFROM Person p1\nJOIN Person p2\nON p1.email = p2.email\nAND p1.id > p2.id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes DELETE p1 FROM Person p1 JOIN Person p2 ON p1.email = p2.email AND p1.id > p2.id, self-joining the table on matching email addresses and deleting the record with the strictly larger primary key id.",
    "keyTakeaway": "Multi-table DELETE syntax with a self-join purges duplicate records in-place while cleanly retaining the record with the minimum identifier."
  },
  "Pro-002": {
    "code_id": "Pro-002",
    "levelNumber": 82,
    "title": "Rising Temperature",
    "optimalCode": "SELECT w1.id\nFROM Weather w1\nJOIN Weather w2\nON DATEDIFF(w1.recordDate, w2.recordDate) = 1\nWHERE w1.temperature > w2.temperature;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT w1.id FROM Weather w1 JOIN Weather w2 ON DATEDIFF(w1.recordDate, w2.recordDate) = 1 WHERE w1.temperature > w2.temperature, self-joining weather records on exactly consecutive calendar dates and returning dates where temperatures rose strictly above the preceding day.",
    "keyTakeaway": "Joining on `DATEDIFF(today, yesterday) = 1` enforces strict calendar adjacency regardless of gaps or non-consecutive primary key IDs."
  },
  "Pro-003": {
    "code_id": "Pro-003",
    "levelNumber": 83,
    "title": "Game Play Analysis I",
    "optimalCode": "SELECT\n    player_id,\n    MIN(event_date) AS first_login\nFROM Activity\nGROUP BY player_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT player_id, MIN(event_date) AS first_login FROM Activity GROUP BY player_id, aggregating each player's session records to isolate their chronologically earliest login timestamp.",
    "keyTakeaway": "Applying MIN() on date columns grouped by an entity identifier is the standard relational design pattern for cohort onboarding and first-touch attribution."
  },
  "Pro-004": {
    "code_id": "Pro-004",
    "levelNumber": 84,
    "title": "Game Play Analysis II",
    "optimalCode": "SELECT\n    a.player_id,\n    a.device_id\nFROM Activity a\nJOIN\n(\n    SELECT\n        player_id,\n        MIN(event_date) AS first_login\n    FROM Activity\n    GROUP BY player_id\n) f\nON a.player_id = f.player_id\nAND a.event_date = f.first_login;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT a.player_id, a.device_id FROM Activity a JOIN (SELECT player_id, MIN(event_date) AS first_login FROM Activity GROUP BY player_id) f ON a.player_id = f.player_id AND a.event_date = f.first_login, calculating each player's earliest login date and joining back to the source table to recover the associated hardware device ID.",
    "keyTakeaway": "When an aggregate like MIN() is needed alongside other unaggregated row attributes, computing the aggregate in a subquery and joining back on the composite key is the canonical pattern."
  },
  "Pro-005": {
    "code_id": "Pro-005",
    "levelNumber": 85,
    "title": "Employee Bonus",
    "optimalCode": "SELECT\n    e.name,\n    b.bonus\nFROM Employee e\nLEFT JOIN Bonus b\nON e.empId = b.empId\nWHERE b.bonus < 1000\n   OR b.bonus IS NULL;",
    "timeComplexity": "O(N + M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT e.name, b.bonus FROM Employee e LEFT JOIN Bonus b ON e.empId = b.empId WHERE b.bonus < 1000 OR b.bonus IS NULL, performing a left join to ensure employees without bonus records are preserved as NULL and retained alongside bonuses strictly below 1000.",
    "keyTakeaway": "In three-valued logic, `NULL < 1000` evaluates to UNKNOWN (excluded by WHERE); you must explicitly handle missing rows with `OR col IS NULL` or `COALESCE()`."
  },
  "Pro-006": {
    "code_id": "Pro-006",
    "levelNumber": 86,
    "title": "Find Customer Referee",
    "optimalCode": "SELECT name\nFROM Customer\nWHERE referee_id <> 2\n   OR referee_id IS NULL;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT name FROM Customer WHERE referee_id <> 2 OR referee_id IS NULL, filtering for customers not referred by id 2 while explicitly preserving NULL values which would otherwise evaluate to UNKNOWN and be dropped.",
    "keyTakeaway": "Because comparisons with NULL evaluate to UNKNOWN, any inequality check (col <> value) drops NULL rows unless explicitly accompanied by `OR col IS NULL`."
  },
  "Pro-007": {
    "code_id": "Pro-007",
    "levelNumber": 87,
    "title": "Customer Placing the Largest Number of Orders",
    "optimalCode": "SELECT customer_number\nFROM Orders\nGROUP BY customer_number\nORDER BY COUNT(*) DESC\nLIMIT 1;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT customer_number FROM Orders GROUP BY customer_number ORDER BY COUNT(*) DESC LIMIT 1, aggregating order records per customer, sorting in descending order of order frequency, and retaining the top single customer.",
    "keyTakeaway": "The aggregation pattern `GROUP BY ... ORDER BY COUNT(*) DESC LIMIT 1` is the standard relational technique for isolating the mode or highest-frequency entity."
  },
  "Pro-008": {
    "code_id": "Pro-008",
    "levelNumber": 88,
    "title": "Big Countries",
    "optimalCode": "SELECT\n    name,\n    population,\n    area\nFROM World\nWHERE area >= 3000000\n   OR population >= 25000000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT name, population, area FROM World WHERE area >= 3000000 OR population >= 25000000, filtering for countries that qualify as large on either geographic expanse (>= 3M) or demographic scale (>= 25M).",
    "keyTakeaway": "The logical OR operator returns rows satisfying either boundary condition, whereas >= includes the exact boundary threshold itself."
  },
  "Pro-009": {
    "code_id": "Pro-009",
    "levelNumber": 89,
    "title": "Classes With at Least 5 Students",
    "optimalCode": "SELECT class\nFROM Courses\nGROUP BY class\nHAVING COUNT(student) >= 5;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT class FROM Courses GROUP BY class HAVING COUNT(student) >= 5, partitioning course enrollments by class and filtering the post-aggregation groups with HAVING to retain only classes with 5 or more students.",
    "keyTakeaway": "While WHERE filters individual rows before grouping, HAVING filters aggregated groups after GROUP BY and supports aggregate functions like COUNT()."
  },
  "Pro-010": {
    "code_id": "Pro-010",
    "levelNumber": 90,
    "title": "Friend Requests I: Overall Acceptance Rate",
    "optimalCode": "SELECT\n    ROUND(\n        IFNULL(\n            (SELECT COUNT(*) FROM (SELECT DISTINCT requester_id, accepter_id FROM RequestAccepted) a) * 1.0 /\n            NULLIF((SELECT COUNT(*) FROM (SELECT DISTINCT sender_id, send_to_id FROM FriendRequest) r), 0),\n            0.0\n        ),\n        2\n    ) AS accept_rate;",
    "timeComplexity": "O(N + M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes scalar subqueries counting distinct accepted friendship pairs and distinct sent request pairs, dividing them with floating-point precision, handling zero requests with IFNULL/NULLIF, and rounding the final rate to 2 decimal places.",
    "keyTakeaway": "Ratios comparing counts from independent tables should use scalar subqueries, floating-point coercion (* 1.0), and NULLIF/IFNULL to prevent division-by-zero crashes."
  },
  "Pro-011": {
    "code_id": "Pro-011",
    "levelNumber": 91,
    "title": "Consecutive Available Seats",
    "optimalCode": "SELECT DISTINCT\n    c1.seat_id\nFROM Cinema c1\nJOIN Cinema c2\nON ABS(c1.seat_id - c2.seat_id) = 1\nWHERE c1.free = 1\n  AND c2.free = 1\nORDER BY c1.seat_id;",
    "timeComplexity": "O(N²)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes a self join on Cinema matching adjacent seats where ABS(c1.seat_id - c2.seat_id) = 1 and both are free, deduplicating with DISTINCT and sorting by seat_id.",
    "keyTakeaway": "Adjacency conditions on row IDs within the same table can be cleanly expressed via self joins with ABS(id1 - id2) = 1, coupled with DISTINCT to deduplicate overlapping neighbor pairs."
  },
  "Pro-012": {
    "code_id": "Pro-012",
    "levelNumber": 92,
    "title": "Shortest Distance in a Line",
    "optimalCode": "SELECT\n    MIN(p2.x - p1.x) AS shortest\nFROM Point p1\nJOIN Point p2\nON p1.x < p2.x;",
    "timeComplexity": "O(N²)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes a self join pairing distinct points in ascending order (p1.x < p2.x) to avoid duplicate calculations and self-pairing, finding the minimum positive distance with MIN().",
    "keyTakeaway": "Joining on `p1.val < p2.val` halves the comparison search space and inherently guarantees positive differences without requiring `ABS()`."
  },
  "Pro-013": {
    "code_id": "Pro-013",
    "levelNumber": 93,
    "title": "Biggest Single Number",
    "optimalCode": "SELECT\n    MAX(num) AS num\nFROM (\n    SELECT num\n    FROM MyNumbers\n    GROUP BY num\n    HAVING COUNT(*) = 1\n) AS SingleNumbers;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes a subquery grouping numbers and retaining only solitary unique values with HAVING COUNT(*) = 1, then computes MAX(num) in the outer query which automatically evaluates to NULL if no single number exists.",
    "keyTakeaway": "Wrapping an aggregation query that filters unique values inside an outer `SELECT MAX(...)` guarantees a clean `NULL` return when the filtered subquery produces 0 rows."
  },
  "Pro-014": {
    "code_id": "Pro-014",
    "levelNumber": 94,
    "title": "Not Boring Movies",
    "optimalCode": "SELECT\n    id,\n    movie,\n    description,\n    rating\nFROM Cinema\nWHERE id % 2 = 1\n  AND description <> 'boring'\nORDER BY rating DESC;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT id, movie, description, rating FROM Cinema WHERE id % 2 = 1 AND description <> 'boring' ORDER BY rating DESC, filtering for odd-numbered primary keys and non-boring descriptions, then sorting by rating descending.",
    "keyTakeaway": "Modulo `id % 2 = 1` filters odd numerical values, while `<>` excludes targeted string tokens in the WHERE clause prior to sorting."
  },
  "Pro-015": {
    "code_id": "Pro-015",
    "levelNumber": 95,
    "title": "Combine Two Tables",
    "optimalCode": "SELECT\n    p.firstName,\n    p.lastName,\n    a.city,\n    a.state\nFROM Person p\nLEFT JOIN Address a\nON p.personId = a.personId;",
    "timeComplexity": "O(N + M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes a LEFT JOIN from Person to Address on personId, retaining all individuals regardless of whether they have a corresponding record in the Address table and filling unmatched rows with NULL.",
    "keyTakeaway": "A LEFT JOIN preserves every row from the primary (left) table and substitutes NULL for missing columns from the secondary table."
  },
  "Pro-016": {
    "code_id": "Pro-016",
    "levelNumber": 96,
    "title": "Employees Earning More Than Their Managers",
    "optimalCode": "SELECT\n    e.name AS Employee\nFROM Employee e\nJOIN Employee m\nON e.managerId = m.id\nWHERE e.salary > m.salary;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes a self join on Employee matching each employee's managerId with their manager's id, filtering where the employee salary is greater than the manager salary.",
    "keyTakeaway": "Self joins enable hierarchical relationships (like employee to supervisor) to be traversed within a single table using distinct table aliases."
  },
  "Pro-017": {
    "code_id": "Pro-017",
    "levelNumber": 97,
    "title": "Duplicate Emails",
    "optimalCode": "SELECT\n    email\nFROM Person\nGROUP BY email\nHAVING COUNT(*) > 1;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT email FROM Person GROUP BY email HAVING COUNT(*) > 1, grouping rows by email and retaining only those groups whose frequency strictly exceeds 1.",
    "keyTakeaway": "Use `GROUP BY col HAVING COUNT(*) > 1` to isolate duplicate values across rows in SQL."
  },
  "Pro-018": {
    "code_id": "Pro-018",
    "levelNumber": 98,
    "title": "Sales Person",
    "optimalCode": "SELECT name\nFROM SalesPerson\nWHERE sales_id NOT IN (\n    SELECT o.sales_id\n    FROM Orders o\n    JOIN Company c\n    ON o.com_id = c.com_id\n    WHERE c.name = 'RED'\n);",
    "timeComplexity": "O(N + M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes SELECT name FROM SalesPerson WHERE sales_id NOT IN (subquery), finding all sales_id tied to orders from company 'RED' via a JOIN between Orders and Company, then excluding them.",
    "keyTakeaway": "To exclude entities associated with a specific criterion, collect their IDs in an inner subquery and filter the main entity table using `NOT IN` or `NOT EXISTS`."
  },
  "Pro-019": {
    "code_id": "Pro-019",
    "levelNumber": 99,
    "title": "Customers Who Never Order",
    "optimalCode": "SELECT\n    c.name AS Customers\nFROM Customers c\nLEFT JOIN Orders o\nON c.id = o.customerId\nWHERE o.id IS NULL;",
    "timeComplexity": "O(N + M)",
    "spaceComplexity": "O(Result Set)",
    "explanation": "Executes a LEFT JOIN from Customers to Orders on c.id = o.customerId and filters with WHERE o.id IS NULL to isolate customers who have no recorded orders.",
    "keyTakeaway": "A LEFT JOIN combined with a `WHERE right_table.id IS NULL` check is the canonical SQL anti-join pattern to discover missing relationships."
  },
  "Pro-020": {
    "code_id": "Pro-020",
    "levelNumber": 100,
    "title": "Triangle Judgement",
    "optimalCode": "SELECT\n    x,\n    y,\n    z,\n    CASE\n        WHEN x + y > z\n         AND x + z > y\n         AND y + z > x\n        THEN 'Yes'\n        ELSE 'No'\n    END AS triangle\nFROM Triangle;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes a CASE WHEN expression checking the triangle inequality theorem (x + y > z AND x + z > y AND y + z > x), returning 'Yes' if all three conditions are met and 'No' otherwise.",
    "keyTakeaway": "The Triangle Inequality Theorem requires strictly greater (>) comparisons across all three pairwise combinations within a CASE statement."
  }};

export const ALL_50_SOLUTIONS: Record<string, any> = {
  ...BASE_SOLUTIONS_MAP,
  ...Object.fromEntries(Object.values(BASE_SOLUTIONS_MAP).map(item => [String(item.levelNumber || item.numeric_id || item.level_number), item]))
};
