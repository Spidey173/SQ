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

export const ALL_50_SOLUTIONS: Record<string, ProblemSolutionRecord> = {
  "1": {
    "code_id": "Basics-001",
    "levelNumber": 1,
    "title": "Select All Columns",
    "optimalCode": "SELECT * FROM table_name;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Select all columns from a table' using SQLite execution planner.",
    "keyTakeaway": "Mastering Select all columns from a table is essential for database query optimization and relational data analysis."
  },
  "2": {
    "code_id": "Basics-002",
    "levelNumber": 2,
    "title": "Select Specific Columns",
    "optimalCode": "SELECT employee_id, first_name, last_name, job_title, salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "Selects specific columns (employee_id, first_name, last_name, job_title, salary) from the employees table.",
    "keyTakeaway": "Selecting specific columns improves performance and reduces network overhead."
  },
  "3": {
    "code_id": "Basics-003",
    "levelNumber": 3,
    "title": "Filter Rows Using WHERE",
    "optimalCode": "SELECT * FROM employees WHERE department_id = 101;",
    "timeComplexity": "O(N) / O(log N)",
    "spaceComplexity": "O(N)",
    "explanation": "Filters rows from the employees table to return only those matching department_id = 101.",
    "keyTakeaway": "The WHERE clause filters rows before SQL returns the result. Only matching rows are included."
  },
  "4": {
    "code_id": "Basics-004",
    "levelNumber": 4,
    "title": "Use Multiple Conditions with AND",
    "optimalCode": "SELECT *\nFROM employees\nWHERE department_id = 101\nAND salary > 60000;",
    "timeComplexity": "O(N) / O(log N)",
    "spaceComplexity": "O(N)",
    "explanation": "Combines multiple filtering criteria using AND, requiring department_id = 101 AND salary > 60000 to both be TRUE for each returned row.",
    "keyTakeaway": "The AND operator requires all connected conditions to evaluate to TRUE for a row to be included."
  },
  "5": {
    "code_id": "Basics-005",
    "levelNumber": 5,
    "title": "Use Multiple Conditions with OR",
    "optimalCode": "SELECT *\nFROM employees\nWHERE department_id = 101\nOR salary > 60000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "Combines multiple filtering criteria using OR, returning rows where department_id = 101 OR salary > 60000 evaluates to TRUE for at least one condition.",
    "keyTakeaway": "The OR operator broadens your search by returning rows where at least one condition is true. It is useful when you want records that satisfy any one of multiple conditions."
  },
  "6": {
    "code_id": "Basics-006",
    "levelNumber": 6,
    "title": "Sort Data Using ORDER BY",
    "optimalCode": "SELECT *\nFROM employees\nORDER BY salary ASC;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "Sorts records based on the specified column. By default, SQL sorts in ascending order (ASC).",
    "keyTakeaway": "ORDER BY is used to arrange rows in a specific order. It never removes rows; it only changes their display order. By default, SQL sorts in ascending order (ASC)."
  },
  "7": {
    "code_id": "Basics-007",
    "levelNumber": 7,
    "title": "Limit the Number of Rows (LIMIT)",
    "optimalCode": "SELECT *\nFROM employees\nLIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(K)",
    "explanation": "Restricts the number of rows returned by a query, stopping execution after 5 rows are read.",
    "keyTakeaway": "LIMIT restricts the number of rows returned by a query. It is commonly used with ORDER BY to retrieve Top N records."
  },
  "8": {
    "code_id": "Basics-008",
    "levelNumber": 8,
    "title": "Find Distinct Values (DISTINCT)",
    "optimalCode": "SELECT DISTINCT department_id\nFROM employees;",
    "timeComplexity": "O(N) / O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "Removes duplicate values from query output by retrieving each unique department_id only once.",
    "keyTakeaway": "DISTINCT removes duplicate values from query results. It does not modify table data and is ideal for populating unique lists and dropdowns."
  },
  "9": {
    "code_id": "Basics-009",
    "levelNumber": 9,
    "title": "Count Total Records (COUNT())",
    "optimalCode": "SELECT COUNT(*)\nFROM employees;",
    "timeComplexity": "O(N) / O(log N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes aggregate function COUNT(*) to return the single total count of all rows in the employees table.",
    "keyTakeaway": "COUNT(*) is an aggregate function that counts every row in the table, including NULLs and duplicates, returning a single summary number."
  },
  "10": {
    "code_id": "Basics-010",
    "levelNumber": 10,
    "title": "Find the Maximum Value (MAX())",
    "optimalCode": "SELECT MAX(salary)\nFROM employees;",
    "timeComplexity": "O(N) / O(log N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes aggregate function MAX(salary) to compare all employee salaries and return the single highest value.",
    "keyTakeaway": "MAX() is an aggregate function that returns the largest value from a column. It ignores NULL values and returns a single summary value."
  },
  "11": {
    "code_id": "Basics-011",
    "levelNumber": 11,
    "title": "Find the Minimum Value (MIN())",
    "optimalCode": "SELECT MIN(salary)\nFROM employees;",
    "timeComplexity": "O(N) / O(log N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes aggregate function MIN(salary) to compare all employee salaries and return the single lowest value.",
    "keyTakeaway": "MIN() is an aggregate function that returns the smallest value from a column. It ignores NULL values and returns a single summary value."
  },
  "12": {
    "code_id": "Basics-012",
    "levelNumber": 12,
    "title": "Find the Total Sum (SUM())",
    "optimalCode": "SELECT SUM(salary)\nFROM employees;",
    "timeComplexity": "O(N) / O(log N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes aggregate function SUM(salary) to add all employee salaries together and return the single total sum.",
    "keyTakeaway": "SUM() is an aggregate function that adds all numeric values in a column and returns a single total. NULL values are ignored."
  },
  "13": {
    "code_id": "Basics-013",
    "levelNumber": 13,
    "title": "Calculate the Average (AVG())",
    "optimalCode": "SELECT AVG(salary)\nFROM employees;",
    "timeComplexity": "O(N) / O(log N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes aggregate function AVG(salary) to calculate the arithmetic mean of all non-NULL employee salaries.",
    "keyTakeaway": "AVG() is an aggregate function that calculates the average of numeric values. It automatically ignores NULL values and returns one value."
  },
  "14": {
    "code_id": "Basics-014",
    "levelNumber": 14,
    "title": "Group Data Using GROUP BY",
    "optimalCode": "SELECT department_id,\n       COUNT(*)\nFROM employees\nGROUP BY department_id;",
    "timeComplexity": "O(N) / O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "Executes GROUP BY department_id to partition records by department and computes COUNT(*) headcount for each distinct group.",
    "keyTakeaway": "GROUP BY groups rows with the same values together so aggregate functions (COUNT, SUM, AVG, MAX, MIN) can be calculated separately for each group."
  },
  "15": {
    "code_id": "Basics-015",
    "levelNumber": 15,
    "title": "Filter Groups Using HAVING",
    "optimalCode": "SELECT department_id,\n       COUNT(*) AS total_employees\nFROM employees\nGROUP BY department_id\nHAVING COUNT(*) > 2;",
    "timeComplexity": "O(N) / O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "Executes GROUP BY department_id and applies post-aggregation filter HAVING COUNT(*) > 2 to retain only groups with more than 2 employees.",
    "keyTakeaway": "WHERE filters rows before grouping. HAVING filters groups after grouping. Aggregate functions such as COUNT(), SUM(), AVG(), MIN(), and MAX() are typically used with HAVING."
  },
  "16": {
    "code_id": "Basics-016",
    "levelNumber": 16,
    "title": "Retrieve Matching Records Using INNER JOIN",
    "optimalCode": "SELECT employees.first_name,\n       departments.department_name\nFROM employees\nINNER JOIN departments\nON employees.department_id = departments.department_id;",
    "timeComplexity": "O(N × M) / O(N log M)",
    "spaceComplexity": "O(1) / O(N)",
    "explanation": "Executes an INNER JOIN between employees and departments on department_id to return matching employee first names and department names.",
    "keyTakeaway": "INNER JOIN returns only the rows where the join condition matches in both tables. Unmatched rows from either table are excluded."
  },
  "17": {
    "code_id": "Basics-017",
    "levelNumber": 17,
    "title": "Retrieve All Records from the Left Table Using LEFT JOIN",
    "optimalCode": "SELECT employees.first_name,\n       departments.department_name\nFROM employees\nLEFT JOIN departments\nON employees.department_id = departments.department_id;",
    "timeComplexity": "O(N × M) / O(N log M)",
    "spaceComplexity": "O(1) / O(N)",
    "explanation": "Executes a LEFT JOIN between employees and departments on department_id to return all employee records, filling department fields with NULL when no match exists.",
    "keyTakeaway": "LEFT JOIN returns every row from the left table. If a matching row exists in the right table, it is returned. Otherwise, SQL fills the right-side columns with NULL."
  },
  "18": {
    "code_id": "Basics-018",
    "levelNumber": 18,
    "title": "Retrieve All Records from the Right Table Using RIGHT JOIN",
    "optimalCode": "SELECT employees.first_name,\n       departments.department_name\nFROM employees\nRIGHT JOIN departments\nON employees.department_id = departments.department_id;",
    "timeComplexity": "O(N × M) / O(N log M)",
    "spaceComplexity": "O(1) / O(N)",
    "explanation": "Executes a RIGHT JOIN between employees and departments on department_id to return all department records, filling employee fields with NULL when no match exists.",
    "keyTakeaway": "RIGHT JOIN returns every row from the right table. If a matching row exists in the left table, it is returned. Otherwise, SQL fills the left-side columns with NULL."
  },
  "19": {
    "code_id": "Basics-019",
    "levelNumber": 19,
    "title": "Retrieve All Records from Both Tables Using FULL OUTER JOIN",
    "optimalCode": "SELECT employees.first_name,\n       departments.department_name\nFROM employees\nFULL OUTER JOIN departments\nON employees.department_id = departments.department_id;",
    "timeComplexity": "O(N × M) / O(N log M)",
    "spaceComplexity": "O(N)",
    "explanation": "Executes a FULL OUTER JOIN between employees and departments on department_id to return all rows from both tables, padding unmatched fields with NULL.",
    "keyTakeaway": "FULL OUTER JOIN returns every row from both tables. Matching rows are combined, and unmatched rows from either table are included with NULL values for the missing side."
  },
  "20": {
    "code_id": "Basics-020",
    "levelNumber": 20,
    "title": "Join a Table with Itself Using SELF JOIN",
    "optimalCode": "SELECT e.first_name AS employee_name,\n       m.first_name AS manager_name\nFROM employees e\nINNER JOIN employees m\nON e.manager_id = m.employee_id;",
    "timeComplexity": "O(N²) / O(N log N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes a SELF JOIN on the employees table using aliases e (employee) and m (manager) to compare e.manager_id with m.employee_id.",
    "keyTakeaway": "A SELF JOIN joins a table with itself. Different table aliases are required so SQL can treat the single physical table as two separate logical tables."
  },
  "21": {
    "code_id": "Basics-021",
    "levelNumber": 21,
    "title": "Combine Results of Two Queries Using UNION",
    "optimalCode": "SELECT first_name FROM employees\nUNION\nSELECT department_name FROM departments;",
    "timeComplexity": "O(N + M) / O((N + M) log(N + M))",
    "spaceComplexity": "O(N + M)",
    "explanation": "Executes a UNION between SELECT first_name FROM employees and SELECT department_name FROM departments, merging rows and removing duplicate values.",
    "keyTakeaway": "UNION combines rows from multiple SELECT statements into a single result set and automatically removes duplicate rows. Contrast with JOIN, which combines columns."
  },
  "22": {
    "code_id": "Basics-022",
    "levelNumber": 22,
    "title": "Combine Results of Two Queries Using UNION ALL",
    "optimalCode": "SELECT first_name FROM employees\nUNION ALL\nSELECT department_name FROM departments;",
    "timeComplexity": "O(N + M)",
    "spaceComplexity": "O(N + M)",
    "explanation": "Executes a UNION ALL between SELECT first_name FROM employees and SELECT department_name FROM departments, merging all rows without removing duplicates.",
    "keyTakeaway": "UNION ALL combines rows from multiple SELECT statements into a single result set without checking or removing duplicate rows, making it faster than UNION."
  },
  "23": {
    "code_id": "Basics-023",
    "levelNumber": 23,
    "title": "Filter Records Using the LIKE Operator",
    "optimalCode": "SELECT first_name FROM employees WHERE first_name LIKE 'A%';",
    "timeComplexity": "O(N) / O(log N) (Prefix search 'A%' can utilize B-Tree index)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name FROM employees WHERE first_name LIKE 'A%', using the LIKE pattern matching operator with wildcard '%'.",
    "keyTakeaway": "LIKE enables pattern matching in SQL. '%' represents zero or more characters, while '_' represents exactly one character. Prefix patterns ('A%') can leverage B-Tree indexes."
  },
  "24": {
    "code_id": "Basics-024",
    "levelNumber": 24,
    "title": "Filter Records Using the IN Operator",
    "optimalCode": "SELECT first_name FROM employees WHERE first_name IN ('John', 'Alice', 'Bob');",
    "timeComplexity": "O(N) / O(log N) (Can utilize B-Tree index lookup for list items)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name FROM employees WHERE first_name IN ('John', 'Alice', 'Bob'), cleanly replacing multiple OR conditions with set membership checking.",
    "keyTakeaway": "The IN operator checks whether a value matches any item in a literal list or subquery result. It provides a cleaner, more readable alternative to multiple OR conditions."
  },
  "25": {
    "code_id": "Basics-025",
    "levelNumber": 25,
    "title": "Filter Records Using the BETWEEN Operator",
    "optimalCode": "SELECT first_name FROM employees WHERE salary BETWEEN 50000 AND 100000;",
    "timeComplexity": "O(N) / O(log N) (Can utilize B-Tree range scans)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name FROM employees WHERE salary BETWEEN 50000 AND 100000, filtering records within an inclusive range.",
    "keyTakeaway": "BETWEEN filters values within a continuous range and is inclusive of both boundary values (val >= low AND val <= high)."
  },
  "26": {
    "code_id": "Basics-026",
    "levelNumber": 26,
    "title": "Find Records with Missing Values Using IS NULL",
    "optimalCode": "SELECT first_name FROM employees WHERE manager_id IS NULL;",
    "timeComplexity": "O(N) / O(log N) (With index)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name FROM employees WHERE manager_id IS NULL, retrieving rows with missing/unknown values using IS NULL predicate.",
    "keyTakeaway": "NULL represents unknown or missing data. Always use IS NULL or IS NOT NULL to evaluate NULLs in SQL; never use scalar equality = NULL."
  },
  "27": {
    "code_id": "Basics-027",
    "levelNumber": 27,
    "title": "Find Records with Non-NULL Values Using IS NOT NULL",
    "optimalCode": "SELECT first_name FROM employees WHERE manager_id IS NOT NULL;",
    "timeComplexity": "O(N) / O(log N) (With index)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name FROM employees WHERE manager_id IS NOT NULL, retrieving rows with valid stored values using IS NOT NULL predicate.",
    "keyTakeaway": "IS NOT NULL checks for existing values. Never use != NULL or <> NULL because inequality comparisons with NULL evaluate to UNKNOWN."
  },
  "28": {
    "code_id": "Basics-028",
    "levelNumber": 28,
    "title": "Use CASE WHEN to Display Conditional Values",
    "optimalCode": "SELECT first_name, salary, CASE WHEN salary >= 100000 THEN 'High Salary' WHEN salary >= 60000 THEN 'Medium Salary' ELSE 'Low Salary' END AS salary_category FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name, salary, CASE WHEN... END AS salary_category FROM employees, projecting conditional values per row.",
    "keyTakeaway": "CASE WHEN enables inline conditional logic in SQL. Always order conditions from most specific to least specific because evaluation stops at the first matching WHEN."
  },
  "29": {
    "code_id": "Basics-029",
    "levelNumber": 29,
    "title": "Round Decimal Values Using ROUND()",
    "optimalCode": "SELECT first_name, salary, ROUND(salary, 2) AS rounded_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name, salary, ROUND(salary, 2) AS rounded_salary FROM employees, rounding values to specified decimal precision.",
    "keyTakeaway": "ROUND(value, decimal_places) rounds numeric values. Omitted decimal places round to the nearest whole integer."
  },
  "30": {
    "code_id": "Basics-030",
    "levelNumber": 30,
    "title": "Find the Length of a String Using LENGTH()",
    "optimalCode": "SELECT first_name, LENGTH(first_name) AS name_length FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name, LENGTH(first_name) AS name_length FROM employees, counting characters in string values.",
    "keyTakeaway": "LENGTH() returns character counts in MySQL, PostgreSQL, SQLite, and Oracle. Use LEN() in SQL Server."
  },
  "31": {
    "code_id": "Basics-031",
    "levelNumber": 31,
    "title": "Convert Text to Uppercase and Lowercase Using UPPER() and LOWER()",
    "optimalCode": "SELECT first_name, UPPER(first_name) AS upper_name, LOWER(first_name) AS lower_name FROM employees;",
    "timeComplexity": "O(N * M)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name, UPPER(first_name) AS upper_name, LOWER(first_name) AS lower_name FROM employees, transforming character casing per row.",
    "keyTakeaway": "UPPER() and LOWER() alter text display casing without modifying stored database values. Crucial for case-insensitive searches."
  },
  "32": {
    "code_id": "Basics-032",
    "levelNumber": 32,
    "title": "Extract Part of a String Using SUBSTRING()",
    "optimalCode": "SELECT first_name, SUBSTR(first_name, 1, 3) AS first_three_letters FROM employees;",
    "timeComplexity": "O(N * M)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name, SUBSTR(first_name, 1, 3) AS first_three_letters FROM employees, extracting 3 characters starting from 1st position.",
    "keyTakeaway": "SUBSTRING(str, start, length) extracts text starting at 1-indexed position. Use SUBSTR() in Oracle/SQLite."
  },
  "33": {
    "code_id": "Basics-033",
    "levelNumber": 33,
    "title": "Replace Part of a String Using REPLACE()",
    "optimalCode": "SELECT first_name, REPLACE(first_name, 'John', 'Jonathan') AS updated_name FROM employees;",
    "timeComplexity": "O(N * M)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name, REPLACE(first_name, 'John', 'Jonathan') AS updated_name FROM employees, substituting every occurrence of 'John' with 'Jonathan'.",
    "keyTakeaway": "REPLACE(string, old_string, new_string) performs string substitution per row. SELECT projection alters display output only, not table records on disk."
  },
  "34": {
    "code_id": "Basics-034",
    "levelNumber": 34,
    "title": "Replace NULL Values Using COALESCE()",
    "optimalCode": "SELECT first_name, COALESCE(CAST(manager_id AS TEXT), 'No Manager') AS manager FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT first_name, COALESCE(CAST(manager_id AS TEXT), 'No Manager') AS manager FROM employees, returning manager_id or defaulting to 'No Manager'.",
    "keyTakeaway": "COALESCE(e1, e2, ... eN) returns the first non-NULL expression from left to right. It is ANSI SQL compliant across all database engines."
  },
  "35": {
    "code_id": "Basics-035",
    "levelNumber": 35,
    "title": "Display the Current Date and Time",
    "optimalCode": "SELECT CURRENT_DATE AS current_date, CURRENT_TIME AS current_time, CURRENT_TIMESTAMP AS current_datetime;",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "explanation": "Executes SELECT CURRENT_DATE AS current_date, CURRENT_TIME AS current_time, CURRENT_TIMESTAMP AS current_datetime, retrieving system clock parameters from the database server.",
    "keyTakeaway": "CURRENT_DATE, CURRENT_TIME, and CURRENT_TIMESTAMP are ANSI SQL scalar functions evaluated in O(1) time without querying any table on disk."
  },
  "36": {
    "code_id": "SQL-001",
    "levelNumber": 36,
    "title": "Group Employees by Department",
    "optimalCode": "SELECT department_name,\n       COUNT(*) AS employee_count\nFROM employees\nGROUP BY department_name\nORDER BY department_name;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT department_name, COUNT(*) AS employee_count FROM employees GROUP BY department_name ORDER BY department_name, grouping employees by department and counting total headcounts.",
    "keyTakeaway": "GROUP BY clusters rows sharing common column values, enabling aggregate functions like COUNT() to compute per-group totals."
  },
  "37": {
    "code_id": "SQL-002",
    "levelNumber": 37,
    "title": "Group Students by Class",
    "optimalCode": "SELECT class_name,\n       COUNT(*) AS student_count\nFROM students\nGROUP BY class_name\nORDER BY class_name;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT class_name, COUNT(*) AS student_count FROM students GROUP BY class_name ORDER BY class_name, grouping student records by class and computing enrollment counts.",
    "keyTakeaway": "GROUP BY partitions student records by class_name, enabling COUNT(*) to count total enrollments per class."
  },
  "38": {
    "code_id": "SQL-003",
    "levelNumber": 38,
    "title": "Count Employees per Department",
    "optimalCode": "SELECT department_name,\n       COUNT(*) AS total_employees\nFROM employees\nGROUP BY department_name\nORDER BY total_employees DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT department_name, COUNT(*) AS total_employees FROM employees GROUP BY department_name ORDER BY total_employees DESC, grouping employee records by department and sorting from largest to smallest headcount.",
    "keyTakeaway": "ORDER BY ... DESC sorts aggregate group counts from highest to lowest, surfacing the largest groups first."
  },
  "39": {
    "code_id": "SQL-004",
    "levelNumber": 39,
    "title": "Departments Having More Than 5 Employees",
    "optimalCode": "SELECT department_name,\n       COUNT(*) AS employee_count\nFROM employees\nGROUP BY department_name\nHAVING COUNT(*) > 5\nORDER BY employee_count DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT department_name, COUNT(*) AS employee_count FROM employees GROUP BY department_name HAVING COUNT(*) > 5 ORDER BY employee_count DESC, filtering department groups having more than 5 members.",
    "keyTakeaway": "HAVING filters aggregated groups after GROUP BY, whereas WHERE filters individual rows before grouping."
  },
  "40": {
    "code_id": "SQL-005",
    "levelNumber": 40,
    "title": "Departments with Average Salary Greater Than ₹50,000",
    "optimalCode": "SELECT department_name,\n       ROUND(AVG(salary), 2) AS average_salary\nFROM employees\nGROUP BY department_name\nHAVING AVG(salary) > 50000\nORDER BY average_salary DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT department_name, ROUND(AVG(salary), 2) AS average_salary FROM employees GROUP BY department_name HAVING AVG(salary) > 50000 ORDER BY average_salary DESC, calculating department average compensation, rounding to 2 decimal places, and ranking highest to lowest.",
    "keyTakeaway": "AVG() calculates mean values ignoring NULLs, ROUND(..., 2) formats clean decimals, and HAVING filters aggregates after GROUP BY."
  },
  "41": {
    "code_id": "SQL-006",
    "levelNumber": 41,
    "title": "Cities Having More Than 10 Customers",
    "optimalCode": "SELECT city,\n       COUNT(*) AS customer_count\nFROM customers\nGROUP BY city\nHAVING COUNT(*) > 10\nORDER BY customer_count DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT city, COUNT(*) AS customer_count FROM customers GROUP BY city HAVING COUNT(*) > 10 ORDER BY customer_count DESC, grouping customers by city and filtering for cities with more than 10 customers sorted in descending order.",
    "keyTakeaway": "GROUP BY partitions records by category/location, COUNT(*) aggregates totals, and HAVING filters aggregated group metrics."
  },
  "42": {
    "code_id": "SQL-007",
    "levelNumber": 42,
    "title": "Product Categories with Highest Sales",
    "optimalCode": "SELECT category_name,\n       SUM(sales_amount) AS total_sales\nFROM sales\nGROUP BY category_name\nORDER BY total_sales DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT category_name, SUM(sales_amount) AS total_sales FROM sales GROUP BY category_name ORDER BY total_sales DESC, grouping transactions by category, summing sales revenues, and ranking categories from highest grossing to lowest.",
    "keyTakeaway": "SUM() computes total numeric values per group, ignoring NULLs, and ORDER BY DESC orders categories from highest revenue to lowest."
  },
  "43": {
    "code_id": "SQL-008",
    "levelNumber": 43,
    "title": "Customers with More Than 5 Orders",
    "optimalCode": "SELECT customer_id,\n       customer_name,\n       COUNT(*) AS total_orders\nFROM orders\nGROUP BY customer_id, customer_name\nHAVING COUNT(*) > 5\nORDER BY total_orders DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT customer_id, customer_name, COUNT(*) AS total_orders FROM orders GROUP BY customer_id, customer_name HAVING COUNT(*) > 5 ORDER BY total_orders DESC, aggregating orders per customer, filtering for customers with more than 5 orders, and ordering descending.",
    "keyTakeaway": "All non-aggregated columns in SELECT must be included in GROUP BY in standard ANSI SQL, and HAVING filters aggregated counts."
  },
  "44": {
    "code_id": "SQL-009",
    "levelNumber": 44,
    "title": "Branches with Highest Profit",
    "optimalCode": "SELECT branch_name,\n       SUM(selling_price - cost_price) AS total_profit\nFROM sales\nGROUP BY branch_name\nORDER BY total_profit DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT branch_name, SUM(selling_price - cost_price) AS total_profit FROM sales GROUP BY branch_name ORDER BY total_profit DESC, evaluating row-level profit per transaction, summing per branch, and sorting branches by total profitability in descending order.",
    "keyTakeaway": "SUM() accepts calculated expressions like (selling_price - cost_price) to compute totals over derived metrics per group."
  },
  "45": {
    "code_id": "SQL-010",
    "levelNumber": 45,
    "title": "States with Highest Customers",
    "optimalCode": "SELECT state,\n       COUNT(*) AS total_customers\nFROM customers\nGROUP BY state\nORDER BY total_customers DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT state, COUNT(*) AS total_customers FROM customers GROUP BY state ORDER BY total_customers DESC, aggregating user records per state and sorting by total customer count in descending order.",
    "keyTakeaway": "COUNT(*) tallies all rows per state group, and ORDER BY DESC orders regions from largest customer base to smallest."
  },
  "46": {
    "code_id": "SQL-011",
    "levelNumber": 46,
    "title": "Monthly Sales Summary",
    "optimalCode": "SELECT MONTH(order_date) AS month,\n       COUNT(*) AS total_orders,\n       SUM(total_amount) AS total_sales\nFROM orders\nGROUP BY MONTH(order_date)\nORDER BY month;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT MONTH(order_date) AS month, COUNT(*) AS total_orders, SUM(total_amount) AS total_sales FROM orders GROUP BY MONTH(order_date) ORDER BY month, extracting the month component from order_date, aggregating order counts and sales amounts, and sorting chronologically.",
    "keyTakeaway": "MONTH() (or EXTRACT(MONTH FROM date)) extracts numerical months from dates, enabling temporal grouping and chronological reporting with ORDER BY month."
  },
  "47": {
    "code_id": "SQL-012",
    "levelNumber": 47,
    "title": "Yearly Sales Summary",
    "optimalCode": "SELECT YEAR(order_date) AS year,\n       COUNT(*) AS total_orders,\n       SUM(total_amount) AS total_sales\nFROM orders\nGROUP BY YEAR(order_date)\nORDER BY year;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT YEAR(order_date) AS year, COUNT(*) AS total_orders, SUM(total_amount) AS total_sales FROM orders GROUP BY YEAR(order_date) ORDER BY year, extracting the 4-digit year component, aggregating annual order volumes and revenues, and ordering chronologically.",
    "keyTakeaway": "YEAR() (or EXTRACT(YEAR FROM date)) extracts annual cohorts from date values, ideal for multi-year trend analysis and executive financial reporting."
  },
  "48": {
    "code_id": "SQL-013",
    "levelNumber": 48,
    "title": "Products Sold More Than 100 Times",
    "optimalCode": "SELECT product_id,\n       product_name,\n       SUM(quantity) AS total_quantity\nFROM sales\nGROUP BY product_id, product_name\nHAVING SUM(quantity) > 100\nORDER BY total_quantity DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT product_id, product_name, SUM(quantity) AS total_quantity FROM sales GROUP BY product_id, product_name HAVING SUM(quantity) > 100 ORDER BY total_quantity DESC, clustering sales by product entity, aggregating sold quantities, filtering via HAVING for volumes > 100, and ranking highest volume first.",
    "keyTakeaway": "HAVING filters aggregated groups after GROUP BY evaluation, whereas WHERE filters individual raw rows before grouping occurs."
  },
  "49": {
    "code_id": "SQL-014",
    "levelNumber": 49,
    "title": "Average Age by City",
    "optimalCode": "SELECT city,\n       ROUND(AVG(age), 2) AS average_age\nFROM customers\nGROUP BY city\nORDER BY city;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT city, ROUND(AVG(age), 2) AS average_age FROM customers GROUP BY city ORDER BY city, grouping customers by city, computing the arithmetic mean age with AVG(age), rounding the result to 2 decimal places with ROUND(..., 2), and ordering alphabetically by city name.",
    "keyTakeaway": "AVG() calculates the arithmetic mean of numeric columns while ignoring NULLs, and ROUND(..., 2) formats floating point results for clean presentation."
  },
  "50": {
    "code_id": "SQL-015",
    "levelNumber": 50,
    "title": "Highest Salary Department",
    "optimalCode": "SELECT department_name,\n       ROUND(AVG(salary), 2) AS average_salary\nFROM employees\nGROUP BY department_name\nORDER BY average_salary DESC\nLIMIT 1;",
    "timeComplexity": "O(N + G log G)",
    "spaceComplexity": "O(G)",
    "explanation": "Executes SELECT department_name, ROUND(AVG(salary), 2) AS average_salary FROM employees GROUP BY department_name ORDER BY average_salary DESC LIMIT 1, aggregating average compensation per department, sorting the groups descending by average salary, and returning the single top-earning department.",
    "keyTakeaway": "Combining GROUP BY with aggregate functions, ORDER BY DESC, and LIMIT 1 is the standard SQL pattern for locating top-performing entities across groups."
  },
  "51": {
    "code_id": "SQL-016",
    "levelNumber": 51,
    "title": "Lowest salary department",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Lowest salary department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Lowest salary department is essential for database query optimization and relational data analysis."
  },
  "52": {
    "code_id": "SQL-017",
    "levelNumber": 52,
    "title": "Average marks above 80",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Average marks above 80' using SQLite execution planner.",
    "keyTakeaway": "Mastering Average marks above 80 is essential for database query optimization and relational data analysis."
  },
  "53": {
    "code_id": "SQL-018",
    "levelNumber": 53,
    "title": "Groups using multiple columns",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Groups using multiple columns' using SQLite execution planner.",
    "keyTakeaway": "Mastering Groups using multiple columns is essential for database query optimization and relational data analysis."
  },
  "54": {
    "code_id": "SQL-019",
    "levelNumber": 54,
    "title": "HAVING with COUNT",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'HAVING with COUNT' using SQLite execution planner.",
    "keyTakeaway": "Mastering HAVING with COUNT is essential for database query optimization and relational data analysis."
  },
  "55": {
    "code_id": "SQL-020",
    "levelNumber": 55,
    "title": "HAVING with SUM",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'HAVING with SUM' using SQLite execution planner.",
    "keyTakeaway": "Mastering HAVING with SUM is essential for database query optimization and relational data analysis."
  },
  "56": {
    "code_id": "SQL-021",
    "levelNumber": 56,
    "title": "Inner Join",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Inner Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Inner Join is essential for database query optimization and relational data analysis."
  },
  "57": {
    "code_id": "SQL-022",
    "levelNumber": 57,
    "title": "Left Join",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Left Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Left Join is essential for database query optimization and relational data analysis."
  },
  "58": {
    "code_id": "SQL-023",
    "levelNumber": 58,
    "title": "Right Join",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Right Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Right Join is essential for database query optimization and relational data analysis."
  },
  "59": {
    "code_id": "SQL-024",
    "levelNumber": 59,
    "title": "Full Join",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Full Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Full Join is essential for database query optimization and relational data analysis."
  },
  "60": {
    "code_id": "SQL-025",
    "levelNumber": 60,
    "title": "Self Join",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Self Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Self Join is essential for database query optimization and relational data analysis."
  },
  "61": {
    "code_id": "SQL-026",
    "levelNumber": 61,
    "title": "Cross Join",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Cross Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Cross Join is essential for database query optimization and relational data analysis."
  },
  "62": {
    "code_id": "SQL-027",
    "levelNumber": 62,
    "title": "Employees with department names",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees with department names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees with department names is essential for database query optimization and relational data analysis."
  },
  "63": {
    "code_id": "SQL-028",
    "levelNumber": 63,
    "title": "Customers with orders",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers with orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers with orders is essential for database query optimization and relational data analysis."
  },
  "64": {
    "code_id": "SQL-029",
    "levelNumber": 64,
    "title": "Customers without orders",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers without orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers without orders is essential for database query optimization and relational data analysis."
  },
  "65": {
    "code_id": "SQL-030",
    "levelNumber": 65,
    "title": "Orders without customers",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Orders without customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Orders without customers is essential for database query optimization and relational data analysis."
  },
  "66": {
    "code_id": "SQL-031",
    "levelNumber": 66,
    "title": "Students with course names",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Students with course names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Students with course names is essential for database query optimization and relational data analysis."
  },
  "67": {
    "code_id": "SQL-032",
    "levelNumber": 67,
    "title": "Employees without managers",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees without managers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees without managers is essential for database query optimization and relational data analysis."
  },
  "68": {
    "code_id": "SQL-033",
    "levelNumber": 68,
    "title": "Manager and employee names",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Manager and employee names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Manager and employee names is essential for database query optimization and relational data analysis."
  },
  "69": {
    "code_id": "SQL-034",
    "levelNumber": 69,
    "title": "Multiple table joins",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Multiple table joins' using SQLite execution planner.",
    "keyTakeaway": "Mastering Multiple table joins is essential for database query optimization and relational data analysis."
  },
  "70": {
    "code_id": "SQL-035",
    "levelNumber": 70,
    "title": "Join three tables",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join three tables' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join three tables is essential for database query optimization and relational data analysis."
  },
  "71": {
    "code_id": "SQL-036",
    "levelNumber": 71,
    "title": "Join four tables",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join four tables' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join four tables is essential for database query optimization and relational data analysis."
  },
  "72": {
    "code_id": "SQL-037",
    "levelNumber": 72,
    "title": "Highest order per customer",
    "optimalCode": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Highest order per customer' using SQLite execution planner.",
    "keyTakeaway": "Mastering Highest order per customer is essential for database query optimization and relational data analysis."
  },
  "73": {
    "code_id": "SQL-038",
    "levelNumber": 73,
    "title": "Total orders per customer",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Total orders per customer' using SQLite execution planner.",
    "keyTakeaway": "Mastering Total orders per customer is essential for database query optimization and relational data analysis."
  },
  "74": {
    "code_id": "SQL-039",
    "levelNumber": 74,
    "title": "Employee and project details",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee and project details' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee and project details is essential for database query optimization and relational data analysis."
  },
  "75": {
    "code_id": "SQL-040",
    "levelNumber": 75,
    "title": "Product and supplier details",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Product and supplier details' using SQLite execution planner.",
    "keyTakeaway": "Mastering Product and supplier details is essential for database query optimization and relational data analysis."
  },
  "76": {
    "code_id": "SQL-041",
    "levelNumber": 76,
    "title": "Customer-city join",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customer-city join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customer-city join is essential for database query optimization and relational data analysis."
  },
  "77": {
    "code_id": "SQL-042",
    "levelNumber": 77,
    "title": "Find unmatched rows",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find unmatched rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find unmatched rows is essential for database query optimization and relational data analysis."
  },
  "78": {
    "code_id": "SQL-043",
    "levelNumber": 78,
    "title": "Sales with product names",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sales with product names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sales with product names is essential for database query optimization and relational data analysis."
  },
  "79": {
    "code_id": "SQL-044",
    "levelNumber": 79,
    "title": "Student-course enrollment",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Student-course enrollment' using SQLite execution planner.",
    "keyTakeaway": "Mastering Student-course enrollment is essential for database query optimization and relational data analysis."
  },
  "80": {
    "code_id": "SQL-045",
    "levelNumber": 80,
    "title": "Employee-manager hierarchy",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee-manager hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee-manager hierarchy is essential for database query optimization and relational data analysis."
  },
  "81": {
    "code_id": "SQL-046",
    "levelNumber": 81,
    "title": "Left join with WHERE",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Left join with WHERE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Left join with WHERE is essential for database query optimization and relational data analysis."
  },
  "82": {
    "code_id": "SQL-047",
    "levelNumber": 82,
    "title": "Right join with NULL",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Right join with NULL' using SQLite execution planner.",
    "keyTakeaway": "Mastering Right join with NULL is essential for database query optimization and relational data analysis."
  },
  "83": {
    "code_id": "SQL-048",
    "levelNumber": 83,
    "title": "Join with GROUP BY",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with GROUP BY' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with GROUP BY is essential for database query optimization and relational data analysis."
  },
  "84": {
    "code_id": "SQL-049",
    "levelNumber": 84,
    "title": "Join with HAVING",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with HAVING' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with HAVING is essential for database query optimization and relational data analysis."
  },
  "85": {
    "code_id": "SQL-050",
    "levelNumber": 85,
    "title": "Join with aggregate functions",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with aggregate functions' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with aggregate functions is essential for database query optimization and relational data analysis."
  },
  "86": {
    "code_id": "SQL-051",
    "levelNumber": 86,
    "title": "Join with CASE",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with CASE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with CASE is essential for database query optimization and relational data analysis."
  },
  "87": {
    "code_id": "SQL-052",
    "levelNumber": 87,
    "title": "Join with subquery",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with subquery' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with subquery is essential for database query optimization and relational data analysis."
  },
  "88": {
    "code_id": "SQL-053",
    "levelNumber": 88,
    "title": "Join using aliases",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join using aliases' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join using aliases is essential for database query optimization and relational data analysis."
  },
  "89": {
    "code_id": "SQL-054",
    "levelNumber": 89,
    "title": "Difference between INNER and LEFT JOIN",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Difference between INNER and LEFT JOIN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Difference between INNER and LEFT JOIN is essential for database query optimization and relational data analysis."
  },
  "90": {
    "code_id": "SQL-055",
    "levelNumber": 90,
    "title": "Difference between LEFT and RIGHT JOIN",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Difference between LEFT and RIGHT JOIN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Difference between LEFT and RIGHT JOIN is essential for database query optimization and relational data analysis."
  },
  "91": {
    "code_id": "SQL-056",
    "levelNumber": 91,
    "title": "Salary above average",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Salary above average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Salary above average is essential for database query optimization and relational data analysis."
  },
  "92": {
    "code_id": "SQL-058",
    "levelNumber": 92,
    "title": "Third highest salary",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Second highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Second highest salary is essential for database query optimization and relational data analysis."
  },
  "93": {
    "code_id": "SQL-060",
    "levelNumber": 93,
    "title": "Employees earning more than department average",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Third highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Third highest salary is essential for database query optimization and relational data analysis."
  },
  "94": {
    "code_id": "SQL-061",
    "levelNumber": 94,
    "title": "Products above average price",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Nth highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Nth highest salary is essential for database query optimization and relational data analysis."
  },
  "95": {
    "code_id": "SQL-062",
    "levelNumber": 95,
    "title": "Customers with maximum orders",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees earning more than department average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees earning more than department average is essential for database query optimization and relational data analysis."
  },
  "96": {
    "code_id": "SQL-063",
    "levelNumber": 96,
    "title": "Employees in highest-paying department",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Products above average price' using SQLite execution planner.",
    "keyTakeaway": "Mastering Products above average price is essential for database query optimization and relational data analysis."
  },
  "97": {
    "code_id": "SQL-064",
    "levelNumber": 97,
    "title": "Departments with highest average salary",
    "optimalCode": "SELECT *, COUNT(*) AS count FROM orders GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers with maximum orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers with maximum orders is essential for database query optimization and relational data analysis."
  },
  "98": {
    "code_id": "SQL-065",
    "levelNumber": 98,
    "title": "Find duplicate rows",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees in highest-paying department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees in highest-paying department is essential for database query optimization and relational data analysis."
  },
  "99": {
    "code_id": "SQL-066",
    "levelNumber": 99,
    "title": "Remove duplicate rows",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Departments with highest average salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Departments with highest average salary is essential for database query optimization and relational data analysis."
  },
  "100": {
    "code_id": "100",
    "levelNumber": 349,
    "title": "Managers with at Least 5 Direct Reports",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find duplicate rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find duplicate rows is essential for database query optimization and relational data analysis."
  },
  "101": {
    "code_id": "101",
    "levelNumber": 350,
    "title": "Winning Candidate",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Remove duplicate rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Remove duplicate rows is essential for database query optimization and relational data analysis."
  },
  "102": {
    "code_id": "102",
    "levelNumber": 351,
    "title": "Count Student Number in Departments",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Exists vs IN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Exists vs IN is essential for database query optimization and relational data analysis."
  },
  "103": {
    "code_id": "103",
    "levelNumber": 352,
    "title": "Investments in 2016",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'NOT EXISTS' using SQLite execution planner.",
    "keyTakeaway": "Mastering NOT EXISTS is essential for database query optimization and relational data analysis."
  },
  "104": {
    "code_id": "104",
    "levelNumber": 353,
    "title": "Friend Requests II: Who Has the Most Friends",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Correlated subquery' using SQLite execution planner.",
    "keyTakeaway": "Mastering Correlated subquery is essential for database query optimization and relational data analysis."
  },
  "105": {
    "code_id": "105",
    "levelNumber": 354,
    "title": "Tree Node",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Nested subqueries' using SQLite execution planner.",
    "keyTakeaway": "Mastering Nested subqueries is essential for database query optimization and relational data analysis."
  },
  "106": {
    "code_id": "106",
    "levelNumber": 355,
    "title": "Shortest Distance in a Plane",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Max salary employee' using SQLite execution planner.",
    "keyTakeaway": "Mastering Max salary employee is essential for database query optimization and relational data analysis."
  },
  "107": {
    "code_id": "107",
    "levelNumber": 356,
    "title": "Second Degree Follower",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Min salary employee' using SQLite execution planner.",
    "keyTakeaway": "Mastering Min salary employee is essential for database query optimization and relational data analysis."
  },
  "108": {
    "code_id": "108",
    "levelNumber": 357,
    "title": "Exchange Seats",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers without orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers without orders is essential for database query optimization and relational data analysis."
  },
  "109": {
    "code_id": "109",
    "levelNumber": 358,
    "title": "Customers Who Bought All Products",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Products never sold' using SQLite execution planner.",
    "keyTakeaway": "Mastering Products never sold is essential for database query optimization and relational data analysis."
  },
  "110": {
    "code_id": "110",
    "levelNumber": 359,
    "title": "Product Sales Analysis III",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Orders above average amount' using SQLite execution planner.",
    "keyTakeaway": "Mastering Orders above average amount is essential for database query optimization and relational data analysis."
  },
  "111": {
    "code_id": "111",
    "levelNumber": 360,
    "title": "Project Employees III",
    "optimalCode": "SELECT employee_id, first_name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'ROW_NUMBER()' using SQLite execution planner.",
    "keyTakeaway": "Mastering ROW_NUMBER() is essential for database query optimization and relational data analysis."
  },
  "112": {
    "code_id": "112",
    "levelNumber": 361,
    "title": "Unpopular Books",
    "optimalCode": "SELECT employee_id, first_name, salary, RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'RANK()' using SQLite execution planner.",
    "keyTakeaway": "Mastering RANK() is essential for database query optimization and relational data analysis."
  },
  "113": {
    "code_id": "113",
    "levelNumber": 362,
    "title": "New Users Daily Count",
    "optimalCode": "SELECT employee_id, first_name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'DENSE_RANK()' using SQLite execution planner.",
    "keyTakeaway": "Mastering DENSE_RANK() is essential for database query optimization and relational data analysis."
  },
  "114": {
    "code_id": "114",
    "levelNumber": 363,
    "title": "Highest Grade For Each Student",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'NTILE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering NTILE() is essential for database query optimization and relational data analysis."
  },
  "115": {
    "code_id": "115",
    "levelNumber": 364,
    "title": "Reported Posts II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LEAD()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LEAD() is essential for database query optimization and relational data analysis."
  },
  "116": {
    "code_id": "116",
    "levelNumber": 365,
    "title": "Article Views II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LAG()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LAG() is essential for database query optimization and relational data analysis."
  },
  "117": {
    "code_id": "117",
    "levelNumber": 366,
    "title": "Market Analysis I",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'FIRST_VALUE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering FIRST_VALUE() is essential for database query optimization and relational data analysis."
  },
  "118": {
    "code_id": "118",
    "levelNumber": 367,
    "title": "Product Price at a Given Date",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LAST_VALUE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LAST_VALUE() is essential for database query optimization and relational data analysis."
  },
  "119": {
    "code_id": "119",
    "levelNumber": 368,
    "title": "Immediate Food Delivery II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running total' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running total is essential for database query optimization and relational data analysis."
  },
  "120": {
    "code_id": "120",
    "levelNumber": 369,
    "title": "Monthly Transactions I",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Cumulative sum' using SQLite execution planner.",
    "keyTakeaway": "Mastering Cumulative sum is essential for database query optimization and relational data analysis."
  },
  "121": {
    "code_id": "121",
    "levelNumber": 370,
    "title": "Last Person to Fit in the Bus",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Moving average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Moving average is essential for database query optimization and relational data analysis."
  },
  "122": {
    "code_id": "122",
    "levelNumber": 371,
    "title": "Monthly Transactions II",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Top 3 salaries' using SQLite execution planner.",
    "keyTakeaway": "Mastering Top 3 salaries is essential for database query optimization and relational data analysis."
  },
  "123": {
    "code_id": "123",
    "levelNumber": 372,
    "title": "Team Scores in Football Tournament",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Highest salary per department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Highest salary per department is essential for database query optimization and relational data analysis."
  },
  "124": {
    "code_id": "124",
    "levelNumber": 373,
    "title": "Page Recommendations",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Lowest salary per department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Lowest salary per department is essential for database query optimization and relational data analysis."
  },
  "125": {
    "code_id": "125",
    "levelNumber": 374,
    "title": "All People Report to the Given Manager",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Previous month's sales' using SQLite execution planner.",
    "keyTakeaway": "Mastering Previous month's sales is essential for database query optimization and relational data analysis."
  },
  "126": {
    "code_id": "126",
    "levelNumber": 375,
    "title": "Find the Start and End Number of Continuous Ranges",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Next month's sales' using SQLite execution planner.",
    "keyTakeaway": "Mastering Next month's sales is essential for database query optimization and relational data analysis."
  },
  "127": {
    "code_id": "127",
    "levelNumber": 376,
    "title": "Running Total for Different Genders",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Difference from previous row' using SQLite execution planner.",
    "keyTakeaway": "Mastering Difference from previous row is essential for database query optimization and relational data analysis."
  },
  "128": {
    "code_id": "128",
    "levelNumber": 377,
    "title": "Restaurant Growth",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running average is essential for database query optimization and relational data analysis."
  },
  "129": {
    "code_id": "129",
    "levelNumber": 378,
    "title": "Movie Rating",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running count' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running count is essential for database query optimization and relational data analysis."
  },
  "130": {
    "code_id": "130",
    "levelNumber": 379,
    "title": "Activity Participants",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Percent rank' using SQLite execution planner.",
    "keyTakeaway": "Mastering Percent rank is essential for database query optimization and relational data analysis."
  },
  "131": {
    "code_id": "131",
    "levelNumber": 380,
    "title": "Number of Trusted Contacts of a Customer",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Dense rank by department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Dense rank by department is essential for database query optimization and relational data analysis."
  },
  "132": {
    "code_id": "132",
    "levelNumber": 381,
    "title": "Capital Gain/Loss",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Row number partition' using SQLite execution planner.",
    "keyTakeaway": "Mastering Row number partition is essential for database query optimization and relational data analysis."
  },
  "133": {
    "code_id": "133",
    "levelNumber": 382,
    "title": "Customers Who Bought Products A and B but Not C",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Ranking products' using SQLite execution planner.",
    "keyTakeaway": "Mastering Ranking products is essential for database query optimization and relational data analysis."
  },
  "134": {
    "code_id": "134",
    "levelNumber": 383,
    "title": "Evaluate Boolean Expression",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Ranking students' using SQLite execution planner.",
    "keyTakeaway": "Mastering Ranking students is essential for database query optimization and relational data analysis."
  },
  "135": {
    "code_id": "135",
    "levelNumber": 384,
    "title": "Apples & Oranges",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Ranking salespersons' using SQLite execution planner.",
    "keyTakeaway": "Mastering Ranking salespersons is essential for database query optimization and relational data analysis."
  },
  "136": {
    "code_id": "136",
    "levelNumber": 385,
    "title": "Active Users",
    "optimalCode": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Top N customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Top N customers is essential for database query optimization and relational data analysis."
  },
  "137": {
    "code_id": "137",
    "levelNumber": 386,
    "title": "Rectangles Area",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Bottom N products' using SQLite execution planner.",
    "keyTakeaway": "Mastering Bottom N products is essential for database query optimization and relational data analysis."
  },
  "138": {
    "code_id": "138",
    "levelNumber": 387,
    "title": "Calculate Salaries",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Window frame examples' using SQLite execution planner.",
    "keyTakeaway": "Mastering Window frame examples is essential for database query optimization and relational data analysis."
  },
  "139": {
    "code_id": "139",
    "levelNumber": 388,
    "title": "Countries You Can Safely Invest In",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'PARTITION BY' using SQLite execution planner.",
    "keyTakeaway": "Mastering PARTITION BY is essential for database query optimization and relational data analysis."
  },
  "140": {
    "code_id": "140",
    "levelNumber": 389,
    "title": "The Most Recent Three Orders",
    "optimalCode": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'ORDER BY in window functions' using SQLite execution planner.",
    "keyTakeaway": "Mastering ORDER BY in window functions is essential for database query optimization and relational data analysis."
  },
  "141": {
    "code_id": "141",
    "levelNumber": 390,
    "title": "The Most Recent Orders for Each Product",
    "optimalCode": "WITH HighEarners AS (SELECT * FROM employees WHERE salary > 80000) SELECT * FROM HighEarners;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Simple CTE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Simple CTE is essential for database query optimization and relational data analysis."
  },
  "142": {
    "code_id": "142",
    "levelNumber": 391,
    "title": "Bank Account Summary",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Multiple CTEs' using SQLite execution planner.",
    "keyTakeaway": "Mastering Multiple CTEs is essential for database query optimization and relational data analysis."
  },
  "143": {
    "code_id": "143",
    "levelNumber": 392,
    "title": "The Most Frequently Ordered Products for Each Customer",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Recursive CTE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Recursive CTE is essential for database query optimization and relational data analysis."
  },
  "144": {
    "code_id": "144",
    "levelNumber": 393,
    "title": "Find the Missing IDs",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee hierarchy is essential for database query optimization and relational data analysis."
  },
  "145": {
    "code_id": "145",
    "levelNumber": 394,
    "title": "Number of Calls Between Two Persons",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Category hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Category hierarchy is essential for database query optimization and relational data analysis."
  },
  "146": {
    "code_id": "146",
    "levelNumber": 395,
    "title": "Biggest Window Between Visits",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running totals using CTE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running totals using CTE is essential for database query optimization and relational data analysis."
  },
  "147": {
    "code_id": "147",
    "levelNumber": 396,
    "title": "Leetflex Banned Accounts",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Ranking using CTE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Ranking using CTE is essential for database query optimization and relational data analysis."
  },
  "148": {
    "code_id": "148",
    "levelNumber": 397,
    "title": "Grand Slam Titles",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate removal' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate removal is essential for database query optimization and relational data analysis."
  },
  "149": {
    "code_id": "149",
    "levelNumber": 398,
    "title": "Ad-Free Sessions",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Temporary calculations' using SQLite execution planner.",
    "keyTakeaway": "Mastering Temporary calculations is essential for database query optimization and relational data analysis."
  },
  "150": {
    "code_id": "150",
    "levelNumber": 399,
    "title": "Find Interview Candidates",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Monthly sales report' using SQLite execution planner.",
    "keyTakeaway": "Mastering Monthly sales report is essential for database query optimization and relational data analysis."
  },
  "151": {
    "code_id": "151",
    "levelNumber": 400,
    "title": "Maximum Transaction Each Day",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Department summary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Department summary is essential for database query optimization and relational data analysis."
  },
  "152": {
    "code_id": "152",
    "levelNumber": 401,
    "title": "League Statistics",
    "optimalCode": "SELECT *, COUNT(*) AS count FROM customers GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customer summary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customer summary is essential for database query optimization and relational data analysis."
  },
  "153": {
    "code_id": "153",
    "levelNumber": 402,
    "title": "Suspicious Bank Accounts",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sales analysis' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sales analysis is essential for database query optimization and relational data analysis."
  },
  "154": {
    "code_id": "154",
    "levelNumber": 403,
    "title": "Orders With Maximum Quantity Above Average",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee analysis' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee analysis is essential for database query optimization and relational data analysis."
  },
  "155": {
    "code_id": "155",
    "levelNumber": 404,
    "title": "Group Employees of the Same Salary",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Recursive numbers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Recursive numbers is essential for database query optimization and relational data analysis."
  },
  "156": {
    "code_id": "156",
    "levelNumber": 405,
    "title": "Page Recommendations II",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Grade students' using SQLite execution planner.",
    "keyTakeaway": "Mastering Grade students is essential for database query optimization and relational data analysis."
  },
  "157": {
    "code_id": "157",
    "levelNumber": 406,
    "title": "Leetcodify Friends Recommendations",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Salary bands' using SQLite execution planner.",
    "keyTakeaway": "Mastering Salary bands is essential for database query optimization and relational data analysis."
  },
  "158": {
    "code_id": "158",
    "levelNumber": 407,
    "title": "Leetcodify Similar Friends",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Age groups' using SQLite execution planner.",
    "keyTakeaway": "Mastering Age groups is essential for database query optimization and relational data analysis."
  },
  "159": {
    "code_id": "159",
    "levelNumber": 408,
    "title": "Confirmation Rate",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sales categories' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sales categories is essential for database query optimization and relational data analysis."
  },
  "160": {
    "code_id": "160",
    "levelNumber": 409,
    "title": "Users That Actively Request Confirmation Messages",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Bonus calculation' using SQLite execution planner.",
    "keyTakeaway": "Mastering Bonus calculation is essential for database query optimization and relational data analysis."
  },
  "161": {
    "code_id": "161",
    "levelNumber": 410,
    "title": "Strong Friendship",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customer classification' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customer classification is essential for database query optimization and relational data analysis."
  },
  "162": {
    "code_id": "162",
    "levelNumber": 411,
    "title": "All the Pairs With the Maximum Number of Common Followers",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Pass/Fail status' using SQLite execution planner.",
    "keyTakeaway": "Mastering Pass/Fail status is essential for database query optimization and relational data analysis."
  },
  "163": {
    "code_id": "163",
    "levelNumber": 412,
    "title": "Find Cutoff Score for Each School",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Gender formatting' using SQLite execution planner.",
    "keyTakeaway": "Mastering Gender formatting is essential for database query optimization and relational data analysis."
  },
  "164": {
    "code_id": "164",
    "levelNumber": 413,
    "title": "The Category of Each Member in the Store",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Conditional aggregation' using SQLite execution planner.",
    "keyTakeaway": "Mastering Conditional aggregation is essential for database query optimization and relational data analysis."
  },
  "165": {
    "code_id": "165",
    "levelNumber": 414,
    "title": "Account Balance",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Multiple CASE conditions' using SQLite execution planner.",
    "keyTakeaway": "Mastering Multiple CASE conditions is essential for database query optimization and relational data analysis."
  },
  "166": {
    "code_id": "166",
    "levelNumber": 415,
    "title": "The Winner University",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LENGTH()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LENGTH() is essential for database query optimization and relational data analysis."
  },
  "167": {
    "code_id": "167",
    "levelNumber": 416,
    "title": "Drop Type 1 Orders for Customers With Type 0 Orders",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'UPPER()' using SQLite execution planner.",
    "keyTakeaway": "Mastering UPPER() is essential for database query optimization and relational data analysis."
  },
  "168": {
    "code_id": "168",
    "levelNumber": 417,
    "title": "The Airport With the Most Traffic",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LOWER()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LOWER() is essential for database query optimization and relational data analysis."
  },
  "169": {
    "code_id": "169",
    "levelNumber": 418,
    "title": "Build the Equation",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'CONCAT()' using SQLite execution planner.",
    "keyTakeaway": "Mastering CONCAT() is essential for database query optimization and relational data analysis."
  },
  "170": {
    "code_id": "170",
    "levelNumber": 419,
    "title": "Order Two Columns Independently",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'SUBSTRING()' using SQLite execution planner.",
    "keyTakeaway": "Mastering SUBSTRING() is essential for database query optimization and relational data analysis."
  },
  "171": {
    "code_id": "171",
    "levelNumber": 420,
    "title": "The Change in Global Rankings",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'REPLACE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering REPLACE() is essential for database query optimization and relational data analysis."
  },
  "172": {
    "code_id": "172",
    "levelNumber": 421,
    "title": "Finding the Topic of Each Post",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'TRIM()' using SQLite execution planner.",
    "keyTakeaway": "Mastering TRIM() is essential for database query optimization and relational data analysis."
  },
  "173": {
    "code_id": "173",
    "levelNumber": 422,
    "title": "The Number of Users That Are Eligible for Discount",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LTRIM()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LTRIM() is essential for database query optimization and relational data analysis."
  },
  "174": {
    "code_id": "174",
    "levelNumber": 423,
    "title": "Users With Two Purchases Within Seven Days",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'RTRIM()' using SQLite execution planner.",
    "keyTakeaway": "Mastering RTRIM() is essential for database query optimization and relational data analysis."
  },
  "175": {
    "code_id": "175",
    "levelNumber": 424,
    "title": "The Users That Are Eligible for Discount",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LEFT()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LEFT() is essential for database query optimization and relational data analysis."
  },
  "176": {
    "code_id": "176",
    "levelNumber": 425,
    "title": "Number of Times a Driver Was a Passenger",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'RIGHT()' using SQLite execution planner.",
    "keyTakeaway": "Mastering RIGHT() is essential for database query optimization and relational data analysis."
  },
  "177": {
    "code_id": "177",
    "levelNumber": 426,
    "title": "Products With Three or More Orders in Two Consecutive Years",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'POSITION/CHARINDEX()' using SQLite execution planner.",
    "keyTakeaway": "Mastering POSITION/CHARINDEX() is essential for database query optimization and relational data analysis."
  },
  "178": {
    "code_id": "178",
    "levelNumber": 427,
    "title": "Tasks Count in the Weekend",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'REVERSE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering REVERSE() is essential for database query optimization and relational data analysis."
  },
  "179": {
    "code_id": "179",
    "levelNumber": 428,
    "title": "Arrange Table by Gender",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Split names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Split names is essential for database query optimization and relational data analysis."
  },
  "180": {
    "code_id": "180",
    "levelNumber": 429,
    "title": "The First Day of the Maximum Recorded Degree in Each City",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Initials' using SQLite execution planner.",
    "keyTakeaway": "Mastering Initials is essential for database query optimization and relational data analysis."
  },
  "181": {
    "code_id": "181",
    "levelNumber": 430,
    "title": "Product Sales Analysis IV",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Email extraction' using SQLite execution planner.",
    "keyTakeaway": "Mastering Email extraction is essential for database query optimization and relational data analysis."
  },
  "182": {
    "code_id": "182",
    "levelNumber": 431,
    "title": "Product Sales Analysis V",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Domain extraction' using SQLite execution planner.",
    "keyTakeaway": "Mastering Domain extraction is essential for database query optimization and relational data analysis."
  },
  "183": {
    "code_id": "183",
    "levelNumber": 432,
    "title": "All the Matches of the League",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count characters' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count characters is essential for database query optimization and relational data analysis."
  },
  "184": {
    "code_id": "184",
    "levelNumber": 433,
    "title": "Compute the Rank as a Percentage",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Remove spaces' using SQLite execution planner.",
    "keyTakeaway": "Mastering Remove spaces is essential for database query optimization and relational data analysis."
  },
  "185": {
    "code_id": "185",
    "levelNumber": 434,
    "title": "Generate the Invoice",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Replace multiple characters' using SQLite execution planner.",
    "keyTakeaway": "Mastering Replace multiple characters is essential for database query optimization and relational data analysis."
  },
  "186": {
    "code_id": "186",
    "levelNumber": 435,
    "title": "Calculate the Influence of Each Salesperson",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Current date' using SQLite execution planner.",
    "keyTakeaway": "Mastering Current date is essential for database query optimization and relational data analysis."
  },
  "187": {
    "code_id": "187",
    "levelNumber": 436,
    "title": "Change Null Values in a Table to the Previous Value",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Current timestamp' using SQLite execution planner.",
    "keyTakeaway": "Mastering Current timestamp is essential for database query optimization and relational data analysis."
  },
  "188": {
    "code_id": "188",
    "levelNumber": 437,
    "title": "Employees With Deductions",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Difference between dates' using SQLite execution planner.",
    "keyTakeaway": "Mastering Difference between dates is essential for database query optimization and relational data analysis."
  },
  "189": {
    "code_id": "189",
    "levelNumber": 438,
    "title": "Customers With Strictly Increasing Purchases",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Add days' using SQLite execution planner.",
    "keyTakeaway": "Mastering Add days is essential for database query optimization and relational data analysis."
  },
  "190": {
    "code_id": "190",
    "levelNumber": 439,
    "title": "Form a Chemical Bond",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Add months' using SQLite execution planner.",
    "keyTakeaway": "Mastering Add months is essential for database query optimization and relational data analysis."
  },
  "191": {
    "code_id": "191",
    "levelNumber": 440,
    "title": "Count Artist Occurrences On Spotify Ranking List",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Extract year' using SQLite execution planner.",
    "keyTakeaway": "Mastering Extract year is essential for database query optimization and relational data analysis."
  },
  "192": {
    "code_id": "192",
    "levelNumber": 441,
    "title": "Product Price at a Given Date II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Extract month' using SQLite execution planner.",
    "keyTakeaway": "Mastering Extract month is essential for database query optimization and relational data analysis."
  },
  "193": {
    "code_id": "193",
    "levelNumber": 442,
    "title": "User Activity for the Past 60 Days",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Extract day' using SQLite execution planner.",
    "keyTakeaway": "Mastering Extract day is essential for database query optimization and relational data analysis."
  },
  "194": {
    "code_id": "194",
    "levelNumber": 443,
    "title": "Immediate Food Delivery III",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Week number' using SQLite execution planner.",
    "keyTakeaway": "Mastering Week number is essential for database query optimization and relational data analysis."
  },
  "195": {
    "code_id": "195",
    "levelNumber": 444,
    "title": "Monthly Transactions III",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Quarter' using SQLite execution planner.",
    "keyTakeaway": "Mastering Quarter is essential for database query optimization and relational data analysis."
  },
  "196": {
    "code_id": "196",
    "levelNumber": 445,
    "title": "Project Employees IV",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Last day of month' using SQLite execution planner.",
    "keyTakeaway": "Mastering Last day of month is essential for database query optimization and relational data analysis."
  },
  "197": {
    "code_id": "197",
    "levelNumber": 446,
    "title": "Sales Analysis IV",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'First day of month' using SQLite execution planner.",
    "keyTakeaway": "Mastering First day of month is essential for database query optimization and relational data analysis."
  },
  "198": {
    "code_id": "198",
    "levelNumber": 447,
    "title": "Winning Candidate II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Date formatting' using SQLite execution planner.",
    "keyTakeaway": "Mastering Date formatting is essential for database query optimization and relational data analysis."
  },
  "199": {
    "code_id": "199",
    "levelNumber": 448,
    "title": "Team Scores in Football Tournament II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Age calculation' using SQLite execution planner.",
    "keyTakeaway": "Mastering Age calculation is essential for database query optimization and relational data analysis."
  },
  "200": {
    "code_id": "200",
    "levelNumber": 449,
    "title": "Find Cutoff Score for Each Department",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees hired this year' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees hired this year is essential for database query optimization and relational data analysis."
  },
  "201": {
    "code_id": "201",
    "levelNumber": 450,
    "title": "The Airport With Lowest Traffic",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Orders this month' using SQLite execution planner.",
    "keyTakeaway": "Mastering Orders this month is essential for database query optimization and relational data analysis."
  },
  "202": {
    "code_id": "202",
    "levelNumber": 451,
    "title": "The Change in Regional Rankings",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sales last 30 days' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sales last 30 days is essential for database query optimization and relational data analysis."
  },
  "203": {
    "code_id": "203",
    "levelNumber": 452,
    "title": "Active Users II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Weekend records' using SQLite execution planner.",
    "keyTakeaway": "Mastering Weekend records is essential for database query optimization and relational data analysis."
  },
  "204": {
    "code_id": "204",
    "levelNumber": 453,
    "title": "Rectangles Perimeter",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Leap year check' using SQLite execution planner.",
    "keyTakeaway": "Mastering Leap year check is essential for database query optimization and relational data analysis."
  },
  "205": {
    "code_id": "205",
    "levelNumber": 454,
    "title": "Employees With Bonus Deductions",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Monthly report' using SQLite execution planner.",
    "keyTakeaway": "Mastering Monthly report is essential for database query optimization and relational data analysis."
  },
  "206": {
    "code_id": "206",
    "levelNumber": 455,
    "title": "Ad-Free Active Sessions",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find duplicates' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find duplicates is essential for database query optimization and relational data analysis."
  },
  "207": {
    "code_id": "207",
    "levelNumber": 456,
    "title": "Count Salary Categories",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Remove duplicates' using SQLite execution planner.",
    "keyTakeaway": "Mastering Remove duplicates is essential for database query optimization and relational data analysis."
  },
  "208": {
    "code_id": "208",
    "levelNumber": 457,
    "title": "Active Businesses",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate emails' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate emails is essential for database query optimization and relational data analysis."
  },
  "209": {
    "code_id": "209",
    "levelNumber": 458,
    "title": "Get Highest Answer Rate Question",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate names is essential for database query optimization and relational data analysis."
  },
  "210": {
    "code_id": "210",
    "levelNumber": 459,
    "title": "Department Top Three Salaries",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate phone numbers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate phone numbers is essential for database query optimization and relational data analysis."
  },
  "211": {
    "code_id": "211",
    "levelNumber": 460,
    "title": "Trips and Users",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate salaries' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate salaries is essential for database query optimization and relational data analysis."
  },
  "212": {
    "code_id": "212",
    "levelNumber": 461,
    "title": "Find Median Given Frequency of Numbers",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Keep first duplicate' using SQLite execution planner.",
    "keyTakeaway": "Mastering Keep first duplicate is essential for database query optimization and relational data analysis."
  },
  "213": {
    "code_id": "213",
    "levelNumber": 462,
    "title": "Find Cumulative Salary of an Employee",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Keep latest duplicate' using SQLite execution planner.",
    "keyTakeaway": "Mastering Keep latest duplicate is essential for database query optimization and relational data analysis."
  },
  "214": {
    "code_id": "214",
    "levelNumber": 463,
    "title": "Human Traffic of Stadium",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Delete duplicate rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Delete duplicate rows is essential for database query optimization and relational data analysis."
  },
  "215": {
    "code_id": "215",
    "levelNumber": 464,
    "title": "Average Salary: Departments VS Company",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count duplicate groups' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count duplicate groups is essential for database query optimization and relational data analysis."
  },
  "216": {
    "code_id": "216",
    "levelNumber": 465,
    "title": "Students Report By Geography",
    "optimalCode": "SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Second highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Second highest salary is essential for database query optimization and relational data analysis."
  },
  "217": {
    "code_id": "217",
    "levelNumber": 466,
    "title": "Game Play Analysis V",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Nth highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Nth highest salary is essential for database query optimization and relational data analysis."
  },
  "218": {
    "code_id": "218",
    "levelNumber": 467,
    "title": "User Purchase Platform",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Top 3 salaries per department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Top 3 salaries per department is essential for database query optimization and relational data analysis."
  },
  "219": {
    "code_id": "219",
    "levelNumber": 468,
    "title": "Market Analysis II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Consecutive login days' using SQLite execution planner.",
    "keyTakeaway": "Mastering Consecutive login days is essential for database query optimization and relational data analysis."
  },
  "220": {
    "code_id": "220",
    "levelNumber": 469,
    "title": "Tournament Winners",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Consecutive numbers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Consecutive numbers is essential for database query optimization and relational data analysis."
  },
  "221": {
    "code_id": "221",
    "levelNumber": 470,
    "title": "Report Contiguous Dates",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Gap and island problems' using SQLite execution planner.",
    "keyTakeaway": "Mastering Gap and island problems is essential for database query optimization and relational data analysis."
  },
  "222": {
    "code_id": "222",
    "levelNumber": 471,
    "title": "Number of Transactions per Visit",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Median salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Median salary is essential for database query optimization and relational data analysis."
  },
  "223": {
    "code_id": "223",
    "levelNumber": 472,
    "title": "Get the Second Most Recent Activity",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Pivot table' using SQLite execution planner.",
    "keyTakeaway": "Mastering Pivot table is essential for database query optimization and relational data analysis."
  },
  "224": {
    "code_id": "224",
    "levelNumber": 473,
    "title": "Total Sales Amount by Year",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Unpivot table' using SQLite execution planner.",
    "keyTakeaway": "Mastering Unpivot table is essential for database query optimization and relational data analysis."
  },
  "225": {
    "code_id": "225",
    "levelNumber": 474,
    "title": "Find the Quiet Students in All Exams",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee hierarchy is essential for database query optimization and relational data analysis."
  },
  "226": {
    "code_id": "226",
    "levelNumber": 475,
    "title": "Sales by Day of the Week",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running balance' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running balance is essential for database query optimization and relational data analysis."
  },
  "227": {
    "code_id": "227",
    "levelNumber": 476,
    "title": "Hopper Company Queries I",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Daily active users' using SQLite execution planner.",
    "keyTakeaway": "Mastering Daily active users is essential for database query optimization and relational data analysis."
  },
  "228": {
    "code_id": "228",
    "levelNumber": 477,
    "title": "Hopper Company Queries II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Monthly active users' using SQLite execution planner.",
    "keyTakeaway": "Mastering Monthly active users is essential for database query optimization and relational data analysis."
  },
  "229": {
    "code_id": "229",
    "levelNumber": 478,
    "title": "Hopper Company Queries III",
    "optimalCode": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Churn customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Churn customers is essential for database query optimization and relational data analysis."
  },
  "230": {
    "code_id": "230",
    "levelNumber": 479,
    "title": "Find the Subtasks That Did Not Execute",
    "optimalCode": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Repeat customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Repeat customers is essential for database query optimization and relational data analysis."
  },
  "231": {
    "code_id": "231",
    "levelNumber": 480,
    "title": "First and Last Call On the Same Day",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'First purchase' using SQLite execution planner.",
    "keyTakeaway": "Mastering First purchase is essential for database query optimization and relational data analysis."
  },
  "232": {
    "code_id": "232",
    "levelNumber": 481,
    "title": "Count the Number of Experiments",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Last purchase' using SQLite execution planner.",
    "keyTakeaway": "Mastering Last purchase is essential for database query optimization and relational data analysis."
  },
  "233": {
    "code_id": "233",
    "levelNumber": 482,
    "title": "The Number of Seniors and Juniors to Join the Company",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Most expensive product' using SQLite execution planner.",
    "keyTakeaway": "Mastering Most expensive product is essential for database query optimization and relational data analysis."
  },
  "234": {
    "code_id": "234",
    "levelNumber": 483,
    "title": "The Number of Seniors and Juniors to Join the Company II",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Least expensive product' using SQLite execution planner.",
    "keyTakeaway": "Mastering Least expensive product is essential for database query optimization and relational data analysis."
  },
  "235": {
    "code_id": "235",
    "levelNumber": 484,
    "title": "Number of Accounts That Did Not Stream",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Product never sold' using SQLite execution planner.",
    "keyTakeaway": "Mastering Product never sold is essential for database query optimization and relational data analysis."
  },
  "236": {
    "code_id": "236",
    "levelNumber": 485,
    "title": "The Number of Passengers in Each Bus I",
    "optimalCode": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customer lifetime value' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customer lifetime value is essential for database query optimization and relational data analysis."
  },
  "237": {
    "code_id": "237",
    "levelNumber": 486,
    "title": "The Number of Passengers in Each Bus II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Revenue by month' using SQLite execution planner.",
    "keyTakeaway": "Mastering Revenue by month is essential for database query optimization and relational data analysis."
  },
  "238": {
    "code_id": "238",
    "levelNumber": 487,
    "title": "Longest Winning Streak",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Rolling average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Rolling average is essential for database query optimization and relational data analysis."
  },
  "239": {
    "code_id": "239",
    "levelNumber": 488,
    "title": "Dynamic Pivoting of a Table",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Year-over-year growth' using SQLite execution planner.",
    "keyTakeaway": "Mastering Year-over-year growth is essential for database query optimization and relational data analysis."
  },
  "240": {
    "code_id": "240",
    "levelNumber": 489,
    "title": "Dynamic Unpivoting of a Table",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Month-over-month growth' using SQLite execution planner.",
    "keyTakeaway": "Mastering Month-over-month growth is essential for database query optimization and relational data analysis."
  },
  "241": {
    "code_id": "241",
    "levelNumber": 490,
    "title": "Merge Overlapping Events in the Same Hall",
    "optimalCode": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Top-selling product' using SQLite execution planner.",
    "keyTakeaway": "Mastering Top-selling product is essential for database query optimization and relational data analysis."
  },
  "242": {
    "code_id": "242",
    "levelNumber": 491,
    "title": "Consecutive Numbers Sum",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Least-selling product' using SQLite execution planner.",
    "keyTakeaway": "Mastering Least-selling product is essential for database query optimization and relational data analysis."
  },
  "243": {
    "code_id": "243",
    "levelNumber": 492,
    "title": "Shortest Distance in a Plane II",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Market share calculation' using SQLite execution planner.",
    "keyTakeaway": "Mastering Market share calculation is essential for database query optimization and relational data analysis."
  },
  "244": {
    "code_id": "244",
    "levelNumber": 493,
    "title": "Department Top Five Salaries",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Percent contribution' using SQLite execution planner.",
    "keyTakeaway": "Mastering Percent contribution is essential for database query optimization and relational data analysis."
  },
  "245": {
    "code_id": "245",
    "levelNumber": 494,
    "title": "Total Sales Amount by Month",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Cohort analysis' using SQLite execution planner.",
    "keyTakeaway": "Mastering Cohort analysis is essential for database query optimization and relational data analysis."
  },
  "246": {
    "code_id": "246",
    "levelNumber": 495,
    "title": "Longest Losing Streak",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Retention analysis' using SQLite execution planner.",
    "keyTakeaway": "Mastering Retention analysis is essential for database query optimization and relational data analysis."
  },
  "247": {
    "code_id": "247",
    "levelNumber": 496,
    "title": "Order Three Columns Independently",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Dense ranking challenge' using SQLite execution planner.",
    "keyTakeaway": "Mastering Dense ranking challenge is essential for database query optimization and relational data analysis."
  },
  "248": {
    "code_id": "248",
    "levelNumber": 497,
    "title": "Dynamic Pivoting of a Summary Table",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Recursive hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Recursive hierarchy is essential for database query optimization and relational data analysis."
  },
  "249": {
    "code_id": "249",
    "levelNumber": 498,
    "title": "Dynamic Unpivoting of a Summary Table",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sessionization problem' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sessionization problem is essential for database query optimization and relational data analysis."
  },
  "250": {
    "code_id": "250",
    "levelNumber": 499,
    "title": "Median Employee Salary",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Fraud detection using SQL' using SQLite execution planner.",
    "keyTakeaway": "Mastering Fraud detection using SQL is essential for database query optimization and relational data analysis."
  },
  "251": {
    "code_id": "002",
    "levelNumber": 251,
    "title": "Employees Earning More Than Their Managers",
    "optimalCode": "SELECT employee_id, first_name, last_name, salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Select specific columns' using SQLite execution planner.",
    "keyTakeaway": "Mastering Select specific columns is essential for database query optimization and relational data analysis."
  },
  "252": {
    "code_id": "003",
    "levelNumber": 252,
    "title": "Duplicate Emails",
    "optimalCode": "SELECT * FROM employees WHERE salary > 80000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Filter rows using WHERE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Filter rows using WHERE is essential for database query optimization and relational data analysis."
  },
  "253": {
    "code_id": "004",
    "levelNumber": 253,
    "title": "Customers Who Never Order",
    "optimalCode": "SELECT * FROM employees WHERE salary > 70000 AND department_id = 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use multiple conditions with AND' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use multiple conditions with AND is essential for database query optimization and relational data analysis."
  },
  "254": {
    "code_id": "005",
    "levelNumber": 254,
    "title": "Delete Duplicate Emails",
    "optimalCode": "SELECT * FROM employees WHERE department_id = 1 OR salary > 100000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use multiple conditions with OR' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use multiple conditions with OR is essential for database query optimization and relational data analysis."
  },
  "255": {
    "code_id": "006",
    "levelNumber": 255,
    "title": "Rising Temperature",
    "optimalCode": "SELECT * FROM employees WHERE NOT (department_id = 1);",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use NOT' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use NOT is essential for database query optimization and relational data analysis."
  },
  "256": {
    "code_id": "007",
    "levelNumber": 256,
    "title": "Game Play Analysis I",
    "optimalCode": "SELECT * FROM employees WHERE salary BETWEEN 60000 AND 90000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use BETWEEN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use BETWEEN is essential for database query optimization and relational data analysis."
  },
  "257": {
    "code_id": "008",
    "levelNumber": 257,
    "title": "Game Play Analysis II",
    "optimalCode": "SELECT * FROM employees WHERE department_id IN (1, 2, 3);",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use IN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use IN is essential for database query optimization and relational data analysis."
  },
  "258": {
    "code_id": "009",
    "levelNumber": 258,
    "title": "Employee Bonus",
    "optimalCode": "SELECT * FROM employees WHERE department_id NOT IN (1, 2);",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use NOT IN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use NOT IN is essential for database query optimization and relational data analysis."
  },
  "259": {
    "code_id": "010",
    "levelNumber": 259,
    "title": "Find Customer Referee",
    "optimalCode": "SELECT * FROM employees WHERE first_name LIKE 'J%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use LIKE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use LIKE is essential for database query optimization and relational data analysis."
  },
  "260": {
    "code_id": "011",
    "levelNumber": 260,
    "title": "Customer Placing the Largest Number of Orders",
    "optimalCode": "SELECT * FROM employees WHERE first_name LIKE 'A%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find records starting with a letter' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find records starting with a letter is essential for database query optimization and relational data analysis."
  },
  "261": {
    "code_id": "012",
    "levelNumber": 261,
    "title": "Big Countries",
    "optimalCode": "SELECT * FROM employees WHERE last_name LIKE '%n';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find records ending with a letter' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find records ending with a letter is essential for database query optimization and relational data analysis."
  },
  "262": {
    "code_id": "013",
    "levelNumber": 262,
    "title": "Classes With at Least 5 Students",
    "optimalCode": "SELECT * FROM products WHERE product_name LIKE '%Laptop%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find records containing a word' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find records containing a word is essential for database query optimization and relational data analysis."
  },
  "263": {
    "code_id": "014",
    "levelNumber": 263,
    "title": "Friend Requests I: Overall Acceptance Rate",
    "optimalCode": "SELECT * FROM employees WHERE manager_id IS NULL;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use IS NULL' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use IS NULL is essential for database query optimization and relational data analysis."
  },
  "264": {
    "code_id": "015",
    "levelNumber": 264,
    "title": "Consecutive Available Seats",
    "optimalCode": "SELECT * FROM employees WHERE manager_id IS NOT NULL;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use IS NOT NULL' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use IS NOT NULL is essential for database query optimization and relational data analysis."
  },
  "265": {
    "code_id": "016",
    "levelNumber": 265,
    "title": "Sales Person",
    "optimalCode": "SELECT * FROM employees ORDER BY salary ASC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sort using ORDER BY ASC' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sort using ORDER BY ASC is essential for database query optimization and relational data analysis."
  },
  "266": {
    "code_id": "017",
    "levelNumber": 266,
    "title": "Triangle Judgement",
    "optimalCode": "SELECT * FROM employees ORDER BY salary DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sort using ORDER BY DESC' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sort using ORDER BY DESC is essential for database query optimization and relational data analysis."
  },
  "267": {
    "code_id": "018",
    "levelNumber": 267,
    "title": "Shortest Distance in a Line",
    "optimalCode": "SELECT * FROM employees ORDER BY salary DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Retrieve top N records (LIMIT/TOP)' using SQLite execution planner.",
    "keyTakeaway": "Mastering Retrieve top N records (LIMIT/TOP) is essential for database query optimization and relational data analysis."
  },
  "268": {
    "code_id": "019",
    "levelNumber": 268,
    "title": "Not Boring Movies",
    "optimalCode": "SELECT DISTINCT job_title FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Remove duplicates using DISTINCT' using SQLite execution planner.",
    "keyTakeaway": "Mastering Remove duplicates using DISTINCT is essential for database query optimization and relational data analysis."
  },
  "269": {
    "code_id": "020",
    "levelNumber": 269,
    "title": "Swap Sex of Employees",
    "optimalCode": "SELECT first_name AS name, salary AS annual_pay FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Alias columns using AS' using SQLite execution planner.",
    "keyTakeaway": "Mastering Alias columns using AS is essential for database query optimization and relational data analysis."
  },
  "270": {
    "code_id": "021",
    "levelNumber": 270,
    "title": "Actors and Directors Who Cooperated At Least Three Times",
    "optimalCode": "SELECT COUNT(*) AS total_employees FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count total rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count total rows is essential for database query optimization and relational data analysis."
  },
  "271": {
    "code_id": "022",
    "levelNumber": 271,
    "title": "Product Sales Analysis I",
    "optimalCode": "SELECT COUNT(DISTINCT department_id) AS total_depts FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count distinct values' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count distinct values is essential for database query optimization and relational data analysis."
  },
  "272": {
    "code_id": "023",
    "levelNumber": 272,
    "title": "Product Sales Analysis II",
    "optimalCode": "SELECT MAX(salary) AS max_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find maximum salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find maximum salary is essential for database query optimization and relational data analysis."
  },
  "273": {
    "code_id": "024",
    "levelNumber": 273,
    "title": "Project Employees I",
    "optimalCode": "SELECT MIN(salary) AS min_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find minimum salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find minimum salary is essential for database query optimization and relational data analysis."
  },
  "274": {
    "code_id": "025",
    "levelNumber": 274,
    "title": "Project Employees II",
    "optimalCode": "SELECT AVG(salary) AS avg_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find average salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find average salary is essential for database query optimization and relational data analysis."
  },
  "275": {
    "code_id": "026",
    "levelNumber": 275,
    "title": "Sales Analysis I",
    "optimalCode": "SELECT SUM(salary) AS total_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find total salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find total salary is essential for database query optimization and relational data analysis."
  },
  "276": {
    "code_id": "027",
    "levelNumber": 276,
    "title": "Sales Analysis II",
    "optimalCode": "SELECT AVG(marks) AS avg_marks FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find average marks' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find average marks is essential for database query optimization and relational data analysis."
  },
  "277": {
    "code_id": "028",
    "levelNumber": 277,
    "title": "Sales Analysis III",
    "optimalCode": "SELECT SUM(sale_amount) AS total_sales FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sum sales' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sum sales is essential for database query optimization and relational data analysis."
  },
  "278": {
    "code_id": "029",
    "levelNumber": 278,
    "title": "Reported Posts",
    "optimalCode": "SELECT department_id, COUNT(*) AS emp_count FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count employees in each department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count employees in each department is essential for database query optimization and relational data analysis."
  },
  "279": {
    "code_id": "030",
    "levelNumber": 279,
    "title": "User Activity for the Past 30 Days I",
    "optimalCode": "SELECT department_id, MAX(salary) AS max_salary FROM employees GROUP BY department_id ORDER BY max_salary DESC LIMIT 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find department with highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find department with highest salary is essential for database query optimization and relational data analysis."
  },
  "280": {
    "code_id": "031",
    "levelNumber": 280,
    "title": "User Activity for the Past 30 Days II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find department with lowest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find department with lowest salary is essential for database query optimization and relational data analysis."
  },
  "281": {
    "code_id": "032",
    "levelNumber": 281,
    "title": "Article Views I",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Average salary by department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Average salary by department is essential for database query optimization and relational data analysis."
  },
  "282": {
    "code_id": "033",
    "levelNumber": 282,
    "title": "Immediate Food Delivery I",
    "optimalCode": "SELECT class, AVG(marks) AS avg_mark FROM students GROUP BY class;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Maximum marks by class' using SQLite execution planner.",
    "keyTakeaway": "Mastering Maximum marks by class is essential for database query optimization and relational data analysis."
  },
  "283": {
    "code_id": "034",
    "levelNumber": 283,
    "title": "Reformat Department Table",
    "optimalCode": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Minimum sales by region' using SQLite execution planner.",
    "keyTakeaway": "Mastering Minimum sales by region is essential for database query optimization and relational data analysis."
  },
  "284": {
    "code_id": "035",
    "levelNumber": 284,
    "title": "Queries Quality and Percentage",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Total revenue by month' using SQLite execution planner.",
    "keyTakeaway": "Mastering Total revenue by month is essential for database query optimization and relational data analysis."
  },
  "285": {
    "code_id": "036",
    "levelNumber": 285,
    "title": "Number of Comments per Post",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Group employees by department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Group employees by department is essential for database query optimization and relational data analysis."
  },
  "286": {
    "code_id": "037",
    "levelNumber": 286,
    "title": "Average Selling Price",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Group students by class' using SQLite execution planner.",
    "keyTakeaway": "Mastering Group students by class is essential for database query optimization and relational data analysis."
  },
  "287": {
    "code_id": "038",
    "levelNumber": 287,
    "title": "Students and Examinations",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count employees per department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count employees per department is essential for database query optimization and relational data analysis."
  },
  "288": {
    "code_id": "039",
    "levelNumber": 288,
    "title": "Weather Type in Each Country",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Departments having more than 5 employees' using SQLite execution planner.",
    "keyTakeaway": "Mastering Departments having more than 5 employees is essential for database query optimization and relational data analysis."
  },
  "289": {
    "code_id": "040",
    "levelNumber": 289,
    "title": "Find the Team Size",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Departments with average salary > 50,000' using SQLite execution planner.",
    "keyTakeaway": "Mastering Departments with average salary > 50,000 is essential for database query optimization and relational data analysis."
  },
  "290": {
    "code_id": "041",
    "levelNumber": 290,
    "title": "Ads Performance",
    "optimalCode": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Cities having more than 10 customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Cities having more than 10 customers is essential for database query optimization and relational data analysis."
  },
  "291": {
    "code_id": "042",
    "levelNumber": 291,
    "title": "List the Products Ordered in a Period",
    "optimalCode": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Product categories with highest sales' using SQLite execution planner.",
    "keyTakeaway": "Mastering Product categories with highest sales is essential for database query optimization and relational data analysis."
  },
  "292": {
    "code_id": "043",
    "levelNumber": 292,
    "title": "Students With Invalid Departments",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers with more than 5 orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers with more than 5 orders is essential for database query optimization and relational data analysis."
  },
  "293": {
    "code_id": "044",
    "levelNumber": 293,
    "title": "Replace Employee ID With The Unique Identifier",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Branches with highest profit' using SQLite execution planner.",
    "keyTakeaway": "Mastering Branches with highest profit is essential for database query optimization and relational data analysis."
  },
  "294": {
    "code_id": "045",
    "levelNumber": 294,
    "title": "Top Travellers",
    "optimalCode": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'States with highest customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering States with highest customers is essential for database query optimization and relational data analysis."
  },
  "295": {
    "code_id": "046",
    "levelNumber": 295,
    "title": "NPV Queries",
    "optimalCode": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Monthly sales summary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Monthly sales summary is essential for database query optimization and relational data analysis."
  },
  "296": {
    "code_id": "047",
    "levelNumber": 296,
    "title": "Create a Session Bar Chart",
    "optimalCode": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Yearly sales summary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Yearly sales summary is essential for database query optimization and relational data analysis."
  },
  "297": {
    "code_id": "048",
    "levelNumber": 297,
    "title": "Group Sold Products By The Date",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Products sold more than 100 times' using SQLite execution planner.",
    "keyTakeaway": "Mastering Products sold more than 100 times is essential for database query optimization and relational data analysis."
  },
  "298": {
    "code_id": "049",
    "levelNumber": 298,
    "title": "Friendly Movies Streamed Last Month",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Average age by city' using SQLite execution planner.",
    "keyTakeaway": "Mastering Average age by city is essential for database query optimization and relational data analysis."
  },
  "299": {
    "code_id": "050",
    "levelNumber": 299,
    "title": "Customer Order Frequency",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Highest salary department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Highest salary department is essential for database query optimization and relational data analysis."
  },
  "300": {
    "code_id": "051",
    "levelNumber": 300,
    "title": "Find Users With Valid E-Mails",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Lowest salary department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Lowest salary department is essential for database query optimization and relational data analysis."
  },
  "301": {
    "code_id": "052",
    "levelNumber": 301,
    "title": "Patients With a Condition",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Average marks above 80' using SQLite execution planner.",
    "keyTakeaway": "Mastering Average marks above 80 is essential for database query optimization and relational data analysis."
  },
  "302": {
    "code_id": "053",
    "levelNumber": 302,
    "title": "Fix Product Name Format",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Groups using multiple columns' using SQLite execution planner.",
    "keyTakeaway": "Mastering Groups using multiple columns is essential for database query optimization and relational data analysis."
  },
  "303": {
    "code_id": "054",
    "levelNumber": 303,
    "title": "Unique Orders and Customers Per Month",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'HAVING with COUNT' using SQLite execution planner.",
    "keyTakeaway": "Mastering HAVING with COUNT is essential for database query optimization and relational data analysis."
  },
  "304": {
    "code_id": "055",
    "levelNumber": 304,
    "title": "Warehouse Manager",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'HAVING with SUM' using SQLite execution planner.",
    "keyTakeaway": "Mastering HAVING with SUM is essential for database query optimization and relational data analysis."
  },
  "305": {
    "code_id": "056",
    "levelNumber": 305,
    "title": "Customer Who Visited but Did Not Make Any Transactions",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Inner Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Inner Join is essential for database query optimization and relational data analysis."
  },
  "306": {
    "code_id": "057",
    "levelNumber": 306,
    "title": "Bank Account Summary II",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Left Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Left Join is essential for database query optimization and relational data analysis."
  },
  "307": {
    "code_id": "058",
    "levelNumber": 307,
    "title": "Sellers With No Sales",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Right Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Right Join is essential for database query optimization and relational data analysis."
  },
  "308": {
    "code_id": "059",
    "levelNumber": 308,
    "title": "All Valid Triplets That Can Represent a Country",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Full Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Full Join is essential for database query optimization and relational data analysis."
  },
  "309": {
    "code_id": "060",
    "levelNumber": 309,
    "title": "Percentage of Users Attended a Contest",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Self Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Self Join is essential for database query optimization and relational data analysis."
  },
  "310": {
    "code_id": "061",
    "levelNumber": 310,
    "title": "Average Time of Process per Machine",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Cross Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Cross Join is essential for database query optimization and relational data analysis."
  },
  "311": {
    "code_id": "062",
    "levelNumber": 311,
    "title": "Fix Names in a Table",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees with department names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees with department names is essential for database query optimization and relational data analysis."
  },
  "312": {
    "code_id": "063",
    "levelNumber": 312,
    "title": "Product's Worth Over Invoices",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers with orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers with orders is essential for database query optimization and relational data analysis."
  },
  "313": {
    "code_id": "064",
    "levelNumber": 313,
    "title": "Invalid Tweets",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers without orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers without orders is essential for database query optimization and relational data analysis."
  },
  "314": {
    "code_id": "065",
    "levelNumber": 314,
    "title": "Daily Leads and Partners",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Orders without customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Orders without customers is essential for database query optimization and relational data analysis."
  },
  "315": {
    "code_id": "066",
    "levelNumber": 315,
    "title": "Count Apples and Oranges",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Students with course names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Students with course names is essential for database query optimization and relational data analysis."
  },
  "316": {
    "code_id": "067",
    "levelNumber": 316,
    "title": "Find Followers Count",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees without managers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees without managers is essential for database query optimization and relational data analysis."
  },
  "317": {
    "code_id": "068",
    "levelNumber": 317,
    "title": "The Number of Employees Which Report to Each Employee",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Manager and employee names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Manager and employee names is essential for database query optimization and relational data analysis."
  },
  "318": {
    "code_id": "069",
    "levelNumber": 318,
    "title": "Find Total Time Spent by Each Employee",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Multiple table joins' using SQLite execution planner.",
    "keyTakeaway": "Mastering Multiple table joins is essential for database query optimization and relational data analysis."
  },
  "319": {
    "code_id": "070",
    "levelNumber": 319,
    "title": "Recyclable and Low Fat Products",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join three tables' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join three tables is essential for database query optimization and relational data analysis."
  },
  "320": {
    "code_id": "071",
    "levelNumber": 320,
    "title": "Product's Price for Each Store",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join four tables' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join four tables is essential for database query optimization and relational data analysis."
  },
  "321": {
    "code_id": "072",
    "levelNumber": 321,
    "title": "Primary Department for Each Employee",
    "optimalCode": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Highest order per customer' using SQLite execution planner.",
    "keyTakeaway": "Mastering Highest order per customer is essential for database query optimization and relational data analysis."
  },
  "322": {
    "code_id": "073",
    "levelNumber": 322,
    "title": "Rearrange Products Table",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Total orders per customer' using SQLite execution planner.",
    "keyTakeaway": "Mastering Total orders per customer is essential for database query optimization and relational data analysis."
  },
  "323": {
    "code_id": "074",
    "levelNumber": 323,
    "title": "Find Customers With Positive Revenue this Year",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee and project details' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee and project details is essential for database query optimization and relational data analysis."
  },
  "324": {
    "code_id": "075",
    "levelNumber": 324,
    "title": "Convert Date Format",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Product and supplier details' using SQLite execution planner.",
    "keyTakeaway": "Mastering Product and supplier details is essential for database query optimization and relational data analysis."
  },
  "325": {
    "code_id": "076",
    "levelNumber": 325,
    "title": "Calculate Special Bonus",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customer-city join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customer-city join is essential for database query optimization and relational data analysis."
  },
  "326": {
    "code_id": "077",
    "levelNumber": 326,
    "title": "The Latest Login in 2020",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find unmatched rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find unmatched rows is essential for database query optimization and relational data analysis."
  },
  "327": {
    "code_id": "078",
    "levelNumber": 327,
    "title": "Employees Whose Manager Left the Company",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sales with product names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sales with product names is essential for database query optimization and relational data analysis."
  },
  "328": {
    "code_id": "079",
    "levelNumber": 328,
    "title": "Low-Quality Problems",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Student-course enrollment' using SQLite execution planner.",
    "keyTakeaway": "Mastering Student-course enrollment is essential for database query optimization and relational data analysis."
  },
  "329": {
    "code_id": "080",
    "levelNumber": 329,
    "title": "Accepted Candidates From the Interviews",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee-manager hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee-manager hierarchy is essential for database query optimization and relational data analysis."
  },
  "330": {
    "code_id": "081",
    "levelNumber": 330,
    "title": "The Number of Rich Customers",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Left join with WHERE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Left join with WHERE is essential for database query optimization and relational data analysis."
  },
  "331": {
    "code_id": "082",
    "levelNumber": 331,
    "title": "Number of Unique Subjects Taught by Each Teacher",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Right join with NULL' using SQLite execution planner.",
    "keyTakeaway": "Mastering Right join with NULL is essential for database query optimization and relational data analysis."
  },
  "332": {
    "code_id": "083",
    "levelNumber": 332,
    "title": "Sort the Olympic Table",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with GROUP BY' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with GROUP BY is essential for database query optimization and relational data analysis."
  },
  "333": {
    "code_id": "084",
    "levelNumber": 333,
    "title": "Concatenate the Name and the Profession",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with HAVING' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with HAVING is essential for database query optimization and relational data analysis."
  },
  "334": {
    "code_id": "085",
    "levelNumber": 334,
    "title": "Find Latest Salaries",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with aggregate functions' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with aggregate functions is essential for database query optimization and relational data analysis."
  },
  "335": {
    "code_id": "086",
    "levelNumber": 335,
    "title": "Triangles",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with CASE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with CASE is essential for database query optimization and relational data analysis."
  },
  "336": {
    "code_id": "087",
    "levelNumber": 336,
    "title": "The Number of Employees Who Direct Report to Each Director",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with subquery' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with subquery is essential for database query optimization and relational data analysis."
  },
  "337": {
    "code_id": "088",
    "levelNumber": 337,
    "title": "Customers Who Never Reordered",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join using aliases' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join using aliases is essential for database query optimization and relational data analysis."
  },
  "338": {
    "code_id": "089",
    "levelNumber": 338,
    "title": "Number of Comments per User",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Difference between INNER and LEFT JOIN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Difference between INNER and LEFT JOIN is essential for database query optimization and relational data analysis."
  },
  "339": {
    "code_id": "090",
    "levelNumber": 339,
    "title": "Average Selling Price by Category",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Difference between LEFT and RIGHT JOIN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Difference between LEFT and RIGHT JOIN is essential for database query optimization and relational data analysis."
  },
  "340": {
    "code_id": "091",
    "levelNumber": 340,
    "title": "Employees With Missing Information",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Salary above average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Salary above average is essential for database query optimization and relational data analysis."
  },
  "341": {
    "code_id": "092",
    "levelNumber": 341,
    "title": "Biggest Single Number",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Second highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Second highest salary is essential for database query optimization and relational data analysis."
  },
  "342": {
    "code_id": "093",
    "levelNumber": 342,
    "title": "Second Highest Salary",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Third highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Third highest salary is essential for database query optimization and relational data analysis."
  },
  "343": {
    "code_id": "094",
    "levelNumber": 343,
    "title": "Nth Highest Salary",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Nth highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Nth highest salary is essential for database query optimization and relational data analysis."
  },
  "344": {
    "code_id": "095",
    "levelNumber": 344,
    "title": "Rank Scores",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees earning more than department average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees earning more than department average is essential for database query optimization and relational data analysis."
  },
  "345": {
    "code_id": "096",
    "levelNumber": 345,
    "title": "Consecutive Numbers",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Products above average price' using SQLite execution planner.",
    "keyTakeaway": "Mastering Products above average price is essential for database query optimization and relational data analysis."
  },
  "346": {
    "code_id": "097",
    "levelNumber": 346,
    "title": "Department Highest Salary",
    "optimalCode": "SELECT *, COUNT(*) AS count FROM orders GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers with maximum orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers with maximum orders is essential for database query optimization and relational data analysis."
  },
  "347": {
    "code_id": "098",
    "levelNumber": 347,
    "title": "Game Play Analysis III",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees in highest-paying department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees in highest-paying department is essential for database query optimization and relational data analysis."
  },
  "348": {
    "code_id": "099",
    "levelNumber": 348,
    "title": "Game Play Analysis IV",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Departments with highest average salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Departments with highest average salary is essential for database query optimization and relational data analysis."
  },
  "349": {
    "code_id": "100",
    "levelNumber": 349,
    "title": "Managers with at Least 5 Direct Reports",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find duplicate rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find duplicate rows is essential for database query optimization and relational data analysis."
  },
  "350": {
    "code_id": "101",
    "levelNumber": 350,
    "title": "Winning Candidate",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Remove duplicate rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Remove duplicate rows is essential for database query optimization and relational data analysis."
  },
  "351": {
    "code_id": "102",
    "levelNumber": 351,
    "title": "Count Student Number in Departments",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Exists vs IN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Exists vs IN is essential for database query optimization and relational data analysis."
  },
  "352": {
    "code_id": "103",
    "levelNumber": 352,
    "title": "Investments in 2016",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'NOT EXISTS' using SQLite execution planner.",
    "keyTakeaway": "Mastering NOT EXISTS is essential for database query optimization and relational data analysis."
  },
  "353": {
    "code_id": "104",
    "levelNumber": 353,
    "title": "Friend Requests II: Who Has the Most Friends",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Correlated subquery' using SQLite execution planner.",
    "keyTakeaway": "Mastering Correlated subquery is essential for database query optimization and relational data analysis."
  },
  "354": {
    "code_id": "105",
    "levelNumber": 354,
    "title": "Tree Node",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Nested subqueries' using SQLite execution planner.",
    "keyTakeaway": "Mastering Nested subqueries is essential for database query optimization and relational data analysis."
  },
  "355": {
    "code_id": "106",
    "levelNumber": 355,
    "title": "Shortest Distance in a Plane",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Max salary employee' using SQLite execution planner.",
    "keyTakeaway": "Mastering Max salary employee is essential for database query optimization and relational data analysis."
  },
  "356": {
    "code_id": "107",
    "levelNumber": 356,
    "title": "Second Degree Follower",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Min salary employee' using SQLite execution planner.",
    "keyTakeaway": "Mastering Min salary employee is essential for database query optimization and relational data analysis."
  },
  "357": {
    "code_id": "108",
    "levelNumber": 357,
    "title": "Exchange Seats",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers without orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers without orders is essential for database query optimization and relational data analysis."
  },
  "358": {
    "code_id": "109",
    "levelNumber": 358,
    "title": "Customers Who Bought All Products",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Products never sold' using SQLite execution planner.",
    "keyTakeaway": "Mastering Products never sold is essential for database query optimization and relational data analysis."
  },
  "359": {
    "code_id": "110",
    "levelNumber": 359,
    "title": "Product Sales Analysis III",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Orders above average amount' using SQLite execution planner.",
    "keyTakeaway": "Mastering Orders above average amount is essential for database query optimization and relational data analysis."
  },
  "360": {
    "code_id": "111",
    "levelNumber": 360,
    "title": "Project Employees III",
    "optimalCode": "SELECT employee_id, first_name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'ROW_NUMBER()' using SQLite execution planner.",
    "keyTakeaway": "Mastering ROW_NUMBER() is essential for database query optimization and relational data analysis."
  },
  "361": {
    "code_id": "112",
    "levelNumber": 361,
    "title": "Unpopular Books",
    "optimalCode": "SELECT employee_id, first_name, salary, RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'RANK()' using SQLite execution planner.",
    "keyTakeaway": "Mastering RANK() is essential for database query optimization and relational data analysis."
  },
  "362": {
    "code_id": "113",
    "levelNumber": 362,
    "title": "New Users Daily Count",
    "optimalCode": "SELECT employee_id, first_name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'DENSE_RANK()' using SQLite execution planner.",
    "keyTakeaway": "Mastering DENSE_RANK() is essential for database query optimization and relational data analysis."
  },
  "363": {
    "code_id": "114",
    "levelNumber": 363,
    "title": "Highest Grade For Each Student",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'NTILE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering NTILE() is essential for database query optimization and relational data analysis."
  },
  "364": {
    "code_id": "115",
    "levelNumber": 364,
    "title": "Reported Posts II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LEAD()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LEAD() is essential for database query optimization and relational data analysis."
  },
  "365": {
    "code_id": "116",
    "levelNumber": 365,
    "title": "Article Views II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LAG()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LAG() is essential for database query optimization and relational data analysis."
  },
  "366": {
    "code_id": "117",
    "levelNumber": 366,
    "title": "Market Analysis I",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'FIRST_VALUE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering FIRST_VALUE() is essential for database query optimization and relational data analysis."
  },
  "367": {
    "code_id": "118",
    "levelNumber": 367,
    "title": "Product Price at a Given Date",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LAST_VALUE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LAST_VALUE() is essential for database query optimization and relational data analysis."
  },
  "368": {
    "code_id": "119",
    "levelNumber": 368,
    "title": "Immediate Food Delivery II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running total' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running total is essential for database query optimization and relational data analysis."
  },
  "369": {
    "code_id": "120",
    "levelNumber": 369,
    "title": "Monthly Transactions I",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Cumulative sum' using SQLite execution planner.",
    "keyTakeaway": "Mastering Cumulative sum is essential for database query optimization and relational data analysis."
  },
  "370": {
    "code_id": "121",
    "levelNumber": 370,
    "title": "Last Person to Fit in the Bus",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Moving average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Moving average is essential for database query optimization and relational data analysis."
  },
  "371": {
    "code_id": "122",
    "levelNumber": 371,
    "title": "Monthly Transactions II",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Top 3 salaries' using SQLite execution planner.",
    "keyTakeaway": "Mastering Top 3 salaries is essential for database query optimization and relational data analysis."
  },
  "372": {
    "code_id": "123",
    "levelNumber": 372,
    "title": "Team Scores in Football Tournament",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Highest salary per department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Highest salary per department is essential for database query optimization and relational data analysis."
  },
  "373": {
    "code_id": "124",
    "levelNumber": 373,
    "title": "Page Recommendations",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Lowest salary per department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Lowest salary per department is essential for database query optimization and relational data analysis."
  },
  "374": {
    "code_id": "125",
    "levelNumber": 374,
    "title": "All People Report to the Given Manager",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Previous month's sales' using SQLite execution planner.",
    "keyTakeaway": "Mastering Previous month's sales is essential for database query optimization and relational data analysis."
  },
  "375": {
    "code_id": "126",
    "levelNumber": 375,
    "title": "Find the Start and End Number of Continuous Ranges",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Next month's sales' using SQLite execution planner.",
    "keyTakeaway": "Mastering Next month's sales is essential for database query optimization and relational data analysis."
  },
  "376": {
    "code_id": "127",
    "levelNumber": 376,
    "title": "Running Total for Different Genders",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Difference from previous row' using SQLite execution planner.",
    "keyTakeaway": "Mastering Difference from previous row is essential for database query optimization and relational data analysis."
  },
  "377": {
    "code_id": "128",
    "levelNumber": 377,
    "title": "Restaurant Growth",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running average is essential for database query optimization and relational data analysis."
  },
  "378": {
    "code_id": "129",
    "levelNumber": 378,
    "title": "Movie Rating",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running count' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running count is essential for database query optimization and relational data analysis."
  },
  "379": {
    "code_id": "130",
    "levelNumber": 379,
    "title": "Activity Participants",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Percent rank' using SQLite execution planner.",
    "keyTakeaway": "Mastering Percent rank is essential for database query optimization and relational data analysis."
  },
  "380": {
    "code_id": "131",
    "levelNumber": 380,
    "title": "Number of Trusted Contacts of a Customer",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Dense rank by department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Dense rank by department is essential for database query optimization and relational data analysis."
  },
  "381": {
    "code_id": "132",
    "levelNumber": 381,
    "title": "Capital Gain/Loss",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Row number partition' using SQLite execution planner.",
    "keyTakeaway": "Mastering Row number partition is essential for database query optimization and relational data analysis."
  },
  "382": {
    "code_id": "133",
    "levelNumber": 382,
    "title": "Customers Who Bought Products A and B but Not C",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Ranking products' using SQLite execution planner.",
    "keyTakeaway": "Mastering Ranking products is essential for database query optimization and relational data analysis."
  },
  "383": {
    "code_id": "134",
    "levelNumber": 383,
    "title": "Evaluate Boolean Expression",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Ranking students' using SQLite execution planner.",
    "keyTakeaway": "Mastering Ranking students is essential for database query optimization and relational data analysis."
  },
  "384": {
    "code_id": "135",
    "levelNumber": 384,
    "title": "Apples & Oranges",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Ranking salespersons' using SQLite execution planner.",
    "keyTakeaway": "Mastering Ranking salespersons is essential for database query optimization and relational data analysis."
  },
  "385": {
    "code_id": "136",
    "levelNumber": 385,
    "title": "Active Users",
    "optimalCode": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Top N customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Top N customers is essential for database query optimization and relational data analysis."
  },
  "386": {
    "code_id": "137",
    "levelNumber": 386,
    "title": "Rectangles Area",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Bottom N products' using SQLite execution planner.",
    "keyTakeaway": "Mastering Bottom N products is essential for database query optimization and relational data analysis."
  },
  "387": {
    "code_id": "138",
    "levelNumber": 387,
    "title": "Calculate Salaries",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Window frame examples' using SQLite execution planner.",
    "keyTakeaway": "Mastering Window frame examples is essential for database query optimization and relational data analysis."
  },
  "388": {
    "code_id": "139",
    "levelNumber": 388,
    "title": "Countries You Can Safely Invest In",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'PARTITION BY' using SQLite execution planner.",
    "keyTakeaway": "Mastering PARTITION BY is essential for database query optimization and relational data analysis."
  },
  "389": {
    "code_id": "140",
    "levelNumber": 389,
    "title": "The Most Recent Three Orders",
    "optimalCode": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'ORDER BY in window functions' using SQLite execution planner.",
    "keyTakeaway": "Mastering ORDER BY in window functions is essential for database query optimization and relational data analysis."
  },
  "390": {
    "code_id": "141",
    "levelNumber": 390,
    "title": "The Most Recent Orders for Each Product",
    "optimalCode": "WITH HighEarners AS (SELECT * FROM employees WHERE salary > 80000) SELECT * FROM HighEarners;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Simple CTE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Simple CTE is essential for database query optimization and relational data analysis."
  },
  "391": {
    "code_id": "142",
    "levelNumber": 391,
    "title": "Bank Account Summary",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Multiple CTEs' using SQLite execution planner.",
    "keyTakeaway": "Mastering Multiple CTEs is essential for database query optimization and relational data analysis."
  },
  "392": {
    "code_id": "143",
    "levelNumber": 392,
    "title": "The Most Frequently Ordered Products for Each Customer",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Recursive CTE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Recursive CTE is essential for database query optimization and relational data analysis."
  },
  "393": {
    "code_id": "144",
    "levelNumber": 393,
    "title": "Find the Missing IDs",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee hierarchy is essential for database query optimization and relational data analysis."
  },
  "394": {
    "code_id": "145",
    "levelNumber": 394,
    "title": "Number of Calls Between Two Persons",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Category hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Category hierarchy is essential for database query optimization and relational data analysis."
  },
  "395": {
    "code_id": "146",
    "levelNumber": 395,
    "title": "Biggest Window Between Visits",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running totals using CTE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running totals using CTE is essential for database query optimization and relational data analysis."
  },
  "396": {
    "code_id": "147",
    "levelNumber": 396,
    "title": "Leetflex Banned Accounts",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Ranking using CTE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Ranking using CTE is essential for database query optimization and relational data analysis."
  },
  "397": {
    "code_id": "148",
    "levelNumber": 397,
    "title": "Grand Slam Titles",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate removal' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate removal is essential for database query optimization and relational data analysis."
  },
  "398": {
    "code_id": "149",
    "levelNumber": 398,
    "title": "Ad-Free Sessions",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Temporary calculations' using SQLite execution planner.",
    "keyTakeaway": "Mastering Temporary calculations is essential for database query optimization and relational data analysis."
  },
  "399": {
    "code_id": "150",
    "levelNumber": 399,
    "title": "Find Interview Candidates",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Monthly sales report' using SQLite execution planner.",
    "keyTakeaway": "Mastering Monthly sales report is essential for database query optimization and relational data analysis."
  },
  "400": {
    "code_id": "151",
    "levelNumber": 400,
    "title": "Maximum Transaction Each Day",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Department summary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Department summary is essential for database query optimization and relational data analysis."
  },
  "401": {
    "code_id": "152",
    "levelNumber": 401,
    "title": "League Statistics",
    "optimalCode": "SELECT *, COUNT(*) AS count FROM customers GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customer summary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customer summary is essential for database query optimization and relational data analysis."
  },
  "402": {
    "code_id": "153",
    "levelNumber": 402,
    "title": "Suspicious Bank Accounts",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sales analysis' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sales analysis is essential for database query optimization and relational data analysis."
  },
  "403": {
    "code_id": "154",
    "levelNumber": 403,
    "title": "Orders With Maximum Quantity Above Average",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee analysis' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee analysis is essential for database query optimization and relational data analysis."
  },
  "404": {
    "code_id": "155",
    "levelNumber": 404,
    "title": "Group Employees of the Same Salary",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Recursive numbers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Recursive numbers is essential for database query optimization and relational data analysis."
  },
  "405": {
    "code_id": "156",
    "levelNumber": 405,
    "title": "Page Recommendations II",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Grade students' using SQLite execution planner.",
    "keyTakeaway": "Mastering Grade students is essential for database query optimization and relational data analysis."
  },
  "406": {
    "code_id": "157",
    "levelNumber": 406,
    "title": "Leetcodify Friends Recommendations",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Salary bands' using SQLite execution planner.",
    "keyTakeaway": "Mastering Salary bands is essential for database query optimization and relational data analysis."
  },
  "407": {
    "code_id": "158",
    "levelNumber": 407,
    "title": "Leetcodify Similar Friends",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Age groups' using SQLite execution planner.",
    "keyTakeaway": "Mastering Age groups is essential for database query optimization and relational data analysis."
  },
  "408": {
    "code_id": "159",
    "levelNumber": 408,
    "title": "Confirmation Rate",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sales categories' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sales categories is essential for database query optimization and relational data analysis."
  },
  "409": {
    "code_id": "160",
    "levelNumber": 409,
    "title": "Users That Actively Request Confirmation Messages",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Bonus calculation' using SQLite execution planner.",
    "keyTakeaway": "Mastering Bonus calculation is essential for database query optimization and relational data analysis."
  },
  "410": {
    "code_id": "161",
    "levelNumber": 410,
    "title": "Strong Friendship",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customer classification' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customer classification is essential for database query optimization and relational data analysis."
  },
  "411": {
    "code_id": "162",
    "levelNumber": 411,
    "title": "All the Pairs With the Maximum Number of Common Followers",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Pass/Fail status' using SQLite execution planner.",
    "keyTakeaway": "Mastering Pass/Fail status is essential for database query optimization and relational data analysis."
  },
  "412": {
    "code_id": "163",
    "levelNumber": 412,
    "title": "Find Cutoff Score for Each School",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Gender formatting' using SQLite execution planner.",
    "keyTakeaway": "Mastering Gender formatting is essential for database query optimization and relational data analysis."
  },
  "413": {
    "code_id": "164",
    "levelNumber": 413,
    "title": "The Category of Each Member in the Store",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Conditional aggregation' using SQLite execution planner.",
    "keyTakeaway": "Mastering Conditional aggregation is essential for database query optimization and relational data analysis."
  },
  "414": {
    "code_id": "165",
    "levelNumber": 414,
    "title": "Account Balance",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Multiple CASE conditions' using SQLite execution planner.",
    "keyTakeaway": "Mastering Multiple CASE conditions is essential for database query optimization and relational data analysis."
  },
  "415": {
    "code_id": "166",
    "levelNumber": 415,
    "title": "The Winner University",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LENGTH()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LENGTH() is essential for database query optimization and relational data analysis."
  },
  "416": {
    "code_id": "167",
    "levelNumber": 416,
    "title": "Drop Type 1 Orders for Customers With Type 0 Orders",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'UPPER()' using SQLite execution planner.",
    "keyTakeaway": "Mastering UPPER() is essential for database query optimization and relational data analysis."
  },
  "417": {
    "code_id": "168",
    "levelNumber": 417,
    "title": "The Airport With the Most Traffic",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LOWER()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LOWER() is essential for database query optimization and relational data analysis."
  },
  "418": {
    "code_id": "169",
    "levelNumber": 418,
    "title": "Build the Equation",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'CONCAT()' using SQLite execution planner.",
    "keyTakeaway": "Mastering CONCAT() is essential for database query optimization and relational data analysis."
  },
  "419": {
    "code_id": "170",
    "levelNumber": 419,
    "title": "Order Two Columns Independently",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'SUBSTRING()' using SQLite execution planner.",
    "keyTakeaway": "Mastering SUBSTRING() is essential for database query optimization and relational data analysis."
  },
  "420": {
    "code_id": "171",
    "levelNumber": 420,
    "title": "The Change in Global Rankings",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'REPLACE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering REPLACE() is essential for database query optimization and relational data analysis."
  },
  "421": {
    "code_id": "172",
    "levelNumber": 421,
    "title": "Finding the Topic of Each Post",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'TRIM()' using SQLite execution planner.",
    "keyTakeaway": "Mastering TRIM() is essential for database query optimization and relational data analysis."
  },
  "422": {
    "code_id": "173",
    "levelNumber": 422,
    "title": "The Number of Users That Are Eligible for Discount",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LTRIM()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LTRIM() is essential for database query optimization and relational data analysis."
  },
  "423": {
    "code_id": "174",
    "levelNumber": 423,
    "title": "Users With Two Purchases Within Seven Days",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'RTRIM()' using SQLite execution planner.",
    "keyTakeaway": "Mastering RTRIM() is essential for database query optimization and relational data analysis."
  },
  "424": {
    "code_id": "175",
    "levelNumber": 424,
    "title": "The Users That Are Eligible for Discount",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LEFT()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LEFT() is essential for database query optimization and relational data analysis."
  },
  "425": {
    "code_id": "176",
    "levelNumber": 425,
    "title": "Number of Times a Driver Was a Passenger",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'RIGHT()' using SQLite execution planner.",
    "keyTakeaway": "Mastering RIGHT() is essential for database query optimization and relational data analysis."
  },
  "426": {
    "code_id": "177",
    "levelNumber": 426,
    "title": "Products With Three or More Orders in Two Consecutive Years",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'POSITION/CHARINDEX()' using SQLite execution planner.",
    "keyTakeaway": "Mastering POSITION/CHARINDEX() is essential for database query optimization and relational data analysis."
  },
  "427": {
    "code_id": "178",
    "levelNumber": 427,
    "title": "Tasks Count in the Weekend",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'REVERSE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering REVERSE() is essential for database query optimization and relational data analysis."
  },
  "428": {
    "code_id": "179",
    "levelNumber": 428,
    "title": "Arrange Table by Gender",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Split names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Split names is essential for database query optimization and relational data analysis."
  },
  "429": {
    "code_id": "180",
    "levelNumber": 429,
    "title": "The First Day of the Maximum Recorded Degree in Each City",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Initials' using SQLite execution planner.",
    "keyTakeaway": "Mastering Initials is essential for database query optimization and relational data analysis."
  },
  "430": {
    "code_id": "181",
    "levelNumber": 430,
    "title": "Product Sales Analysis IV",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Email extraction' using SQLite execution planner.",
    "keyTakeaway": "Mastering Email extraction is essential for database query optimization and relational data analysis."
  },
  "431": {
    "code_id": "182",
    "levelNumber": 431,
    "title": "Product Sales Analysis V",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Domain extraction' using SQLite execution planner.",
    "keyTakeaway": "Mastering Domain extraction is essential for database query optimization and relational data analysis."
  },
  "432": {
    "code_id": "183",
    "levelNumber": 432,
    "title": "All the Matches of the League",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count characters' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count characters is essential for database query optimization and relational data analysis."
  },
  "433": {
    "code_id": "184",
    "levelNumber": 433,
    "title": "Compute the Rank as a Percentage",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Remove spaces' using SQLite execution planner.",
    "keyTakeaway": "Mastering Remove spaces is essential for database query optimization and relational data analysis."
  },
  "434": {
    "code_id": "185",
    "levelNumber": 434,
    "title": "Generate the Invoice",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Replace multiple characters' using SQLite execution planner.",
    "keyTakeaway": "Mastering Replace multiple characters is essential for database query optimization and relational data analysis."
  },
  "435": {
    "code_id": "186",
    "levelNumber": 435,
    "title": "Calculate the Influence of Each Salesperson",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Current date' using SQLite execution planner.",
    "keyTakeaway": "Mastering Current date is essential for database query optimization and relational data analysis."
  },
  "436": {
    "code_id": "187",
    "levelNumber": 436,
    "title": "Change Null Values in a Table to the Previous Value",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Current timestamp' using SQLite execution planner.",
    "keyTakeaway": "Mastering Current timestamp is essential for database query optimization and relational data analysis."
  },
  "437": {
    "code_id": "188",
    "levelNumber": 437,
    "title": "Employees With Deductions",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Difference between dates' using SQLite execution planner.",
    "keyTakeaway": "Mastering Difference between dates is essential for database query optimization and relational data analysis."
  },
  "438": {
    "code_id": "189",
    "levelNumber": 438,
    "title": "Customers With Strictly Increasing Purchases",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Add days' using SQLite execution planner.",
    "keyTakeaway": "Mastering Add days is essential for database query optimization and relational data analysis."
  },
  "439": {
    "code_id": "190",
    "levelNumber": 439,
    "title": "Form a Chemical Bond",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Add months' using SQLite execution planner.",
    "keyTakeaway": "Mastering Add months is essential for database query optimization and relational data analysis."
  },
  "440": {
    "code_id": "191",
    "levelNumber": 440,
    "title": "Count Artist Occurrences On Spotify Ranking List",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Extract year' using SQLite execution planner.",
    "keyTakeaway": "Mastering Extract year is essential for database query optimization and relational data analysis."
  },
  "441": {
    "code_id": "192",
    "levelNumber": 441,
    "title": "Product Price at a Given Date II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Extract month' using SQLite execution planner.",
    "keyTakeaway": "Mastering Extract month is essential for database query optimization and relational data analysis."
  },
  "442": {
    "code_id": "193",
    "levelNumber": 442,
    "title": "User Activity for the Past 60 Days",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Extract day' using SQLite execution planner.",
    "keyTakeaway": "Mastering Extract day is essential for database query optimization and relational data analysis."
  },
  "443": {
    "code_id": "194",
    "levelNumber": 443,
    "title": "Immediate Food Delivery III",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Week number' using SQLite execution planner.",
    "keyTakeaway": "Mastering Week number is essential for database query optimization and relational data analysis."
  },
  "444": {
    "code_id": "195",
    "levelNumber": 444,
    "title": "Monthly Transactions III",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Quarter' using SQLite execution planner.",
    "keyTakeaway": "Mastering Quarter is essential for database query optimization and relational data analysis."
  },
  "445": {
    "code_id": "196",
    "levelNumber": 445,
    "title": "Project Employees IV",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Last day of month' using SQLite execution planner.",
    "keyTakeaway": "Mastering Last day of month is essential for database query optimization and relational data analysis."
  },
  "446": {
    "code_id": "197",
    "levelNumber": 446,
    "title": "Sales Analysis IV",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'First day of month' using SQLite execution planner.",
    "keyTakeaway": "Mastering First day of month is essential for database query optimization and relational data analysis."
  },
  "447": {
    "code_id": "198",
    "levelNumber": 447,
    "title": "Winning Candidate II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Date formatting' using SQLite execution planner.",
    "keyTakeaway": "Mastering Date formatting is essential for database query optimization and relational data analysis."
  },
  "448": {
    "code_id": "199",
    "levelNumber": 448,
    "title": "Team Scores in Football Tournament II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Age calculation' using SQLite execution planner.",
    "keyTakeaway": "Mastering Age calculation is essential for database query optimization and relational data analysis."
  },
  "449": {
    "code_id": "200",
    "levelNumber": 449,
    "title": "Find Cutoff Score for Each Department",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees hired this year' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees hired this year is essential for database query optimization and relational data analysis."
  },
  "450": {
    "code_id": "201",
    "levelNumber": 450,
    "title": "The Airport With Lowest Traffic",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Orders this month' using SQLite execution planner.",
    "keyTakeaway": "Mastering Orders this month is essential for database query optimization and relational data analysis."
  },
  "451": {
    "code_id": "202",
    "levelNumber": 451,
    "title": "The Change in Regional Rankings",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sales last 30 days' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sales last 30 days is essential for database query optimization and relational data analysis."
  },
  "452": {
    "code_id": "203",
    "levelNumber": 452,
    "title": "Active Users II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Weekend records' using SQLite execution planner.",
    "keyTakeaway": "Mastering Weekend records is essential for database query optimization and relational data analysis."
  },
  "453": {
    "code_id": "204",
    "levelNumber": 453,
    "title": "Rectangles Perimeter",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Leap year check' using SQLite execution planner.",
    "keyTakeaway": "Mastering Leap year check is essential for database query optimization and relational data analysis."
  },
  "454": {
    "code_id": "205",
    "levelNumber": 454,
    "title": "Employees With Bonus Deductions",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Monthly report' using SQLite execution planner.",
    "keyTakeaway": "Mastering Monthly report is essential for database query optimization and relational data analysis."
  },
  "455": {
    "code_id": "206",
    "levelNumber": 455,
    "title": "Ad-Free Active Sessions",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find duplicates' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find duplicates is essential for database query optimization and relational data analysis."
  },
  "456": {
    "code_id": "207",
    "levelNumber": 456,
    "title": "Count Salary Categories",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Remove duplicates' using SQLite execution planner.",
    "keyTakeaway": "Mastering Remove duplicates is essential for database query optimization and relational data analysis."
  },
  "457": {
    "code_id": "208",
    "levelNumber": 457,
    "title": "Active Businesses",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate emails' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate emails is essential for database query optimization and relational data analysis."
  },
  "458": {
    "code_id": "209",
    "levelNumber": 458,
    "title": "Get Highest Answer Rate Question",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate names is essential for database query optimization and relational data analysis."
  },
  "459": {
    "code_id": "210",
    "levelNumber": 459,
    "title": "Department Top Three Salaries",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate phone numbers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate phone numbers is essential for database query optimization and relational data analysis."
  },
  "460": {
    "code_id": "211",
    "levelNumber": 460,
    "title": "Trips and Users",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate salaries' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate salaries is essential for database query optimization and relational data analysis."
  },
  "461": {
    "code_id": "212",
    "levelNumber": 461,
    "title": "Find Median Given Frequency of Numbers",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Keep first duplicate' using SQLite execution planner.",
    "keyTakeaway": "Mastering Keep first duplicate is essential for database query optimization and relational data analysis."
  },
  "462": {
    "code_id": "213",
    "levelNumber": 462,
    "title": "Find Cumulative Salary of an Employee",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Keep latest duplicate' using SQLite execution planner.",
    "keyTakeaway": "Mastering Keep latest duplicate is essential for database query optimization and relational data analysis."
  },
  "463": {
    "code_id": "214",
    "levelNumber": 463,
    "title": "Human Traffic of Stadium",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Delete duplicate rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Delete duplicate rows is essential for database query optimization and relational data analysis."
  },
  "464": {
    "code_id": "215",
    "levelNumber": 464,
    "title": "Average Salary: Departments VS Company",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count duplicate groups' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count duplicate groups is essential for database query optimization and relational data analysis."
  },
  "465": {
    "code_id": "216",
    "levelNumber": 465,
    "title": "Students Report By Geography",
    "optimalCode": "SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Second highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Second highest salary is essential for database query optimization and relational data analysis."
  },
  "466": {
    "code_id": "217",
    "levelNumber": 466,
    "title": "Game Play Analysis V",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Nth highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Nth highest salary is essential for database query optimization and relational data analysis."
  },
  "467": {
    "code_id": "218",
    "levelNumber": 467,
    "title": "User Purchase Platform",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Top 3 salaries per department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Top 3 salaries per department is essential for database query optimization and relational data analysis."
  },
  "468": {
    "code_id": "219",
    "levelNumber": 468,
    "title": "Market Analysis II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Consecutive login days' using SQLite execution planner.",
    "keyTakeaway": "Mastering Consecutive login days is essential for database query optimization and relational data analysis."
  },
  "469": {
    "code_id": "220",
    "levelNumber": 469,
    "title": "Tournament Winners",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Consecutive numbers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Consecutive numbers is essential for database query optimization and relational data analysis."
  },
  "470": {
    "code_id": "221",
    "levelNumber": 470,
    "title": "Report Contiguous Dates",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Gap and island problems' using SQLite execution planner.",
    "keyTakeaway": "Mastering Gap and island problems is essential for database query optimization and relational data analysis."
  },
  "471": {
    "code_id": "222",
    "levelNumber": 471,
    "title": "Number of Transactions per Visit",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Median salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Median salary is essential for database query optimization and relational data analysis."
  },
  "472": {
    "code_id": "223",
    "levelNumber": 472,
    "title": "Get the Second Most Recent Activity",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Pivot table' using SQLite execution planner.",
    "keyTakeaway": "Mastering Pivot table is essential for database query optimization and relational data analysis."
  },
  "473": {
    "code_id": "224",
    "levelNumber": 473,
    "title": "Total Sales Amount by Year",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Unpivot table' using SQLite execution planner.",
    "keyTakeaway": "Mastering Unpivot table is essential for database query optimization and relational data analysis."
  },
  "474": {
    "code_id": "225",
    "levelNumber": 474,
    "title": "Find the Quiet Students in All Exams",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee hierarchy is essential for database query optimization and relational data analysis."
  },
  "475": {
    "code_id": "226",
    "levelNumber": 475,
    "title": "Sales by Day of the Week",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running balance' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running balance is essential for database query optimization and relational data analysis."
  },
  "476": {
    "code_id": "227",
    "levelNumber": 476,
    "title": "Hopper Company Queries I",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Daily active users' using SQLite execution planner.",
    "keyTakeaway": "Mastering Daily active users is essential for database query optimization and relational data analysis."
  },
  "477": {
    "code_id": "228",
    "levelNumber": 477,
    "title": "Hopper Company Queries II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Monthly active users' using SQLite execution planner.",
    "keyTakeaway": "Mastering Monthly active users is essential for database query optimization and relational data analysis."
  },
  "478": {
    "code_id": "229",
    "levelNumber": 478,
    "title": "Hopper Company Queries III",
    "optimalCode": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Churn customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Churn customers is essential for database query optimization and relational data analysis."
  },
  "479": {
    "code_id": "230",
    "levelNumber": 479,
    "title": "Find the Subtasks That Did Not Execute",
    "optimalCode": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Repeat customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Repeat customers is essential for database query optimization and relational data analysis."
  },
  "480": {
    "code_id": "231",
    "levelNumber": 480,
    "title": "First and Last Call On the Same Day",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'First purchase' using SQLite execution planner.",
    "keyTakeaway": "Mastering First purchase is essential for database query optimization and relational data analysis."
  },
  "481": {
    "code_id": "232",
    "levelNumber": 481,
    "title": "Count the Number of Experiments",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Last purchase' using SQLite execution planner.",
    "keyTakeaway": "Mastering Last purchase is essential for database query optimization and relational data analysis."
  },
  "482": {
    "code_id": "233",
    "levelNumber": 482,
    "title": "The Number of Seniors and Juniors to Join the Company",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Most expensive product' using SQLite execution planner.",
    "keyTakeaway": "Mastering Most expensive product is essential for database query optimization and relational data analysis."
  },
  "483": {
    "code_id": "234",
    "levelNumber": 483,
    "title": "The Number of Seniors and Juniors to Join the Company II",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Least expensive product' using SQLite execution planner.",
    "keyTakeaway": "Mastering Least expensive product is essential for database query optimization and relational data analysis."
  },
  "484": {
    "code_id": "235",
    "levelNumber": 484,
    "title": "Number of Accounts That Did Not Stream",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Product never sold' using SQLite execution planner.",
    "keyTakeaway": "Mastering Product never sold is essential for database query optimization and relational data analysis."
  },
  "485": {
    "code_id": "236",
    "levelNumber": 485,
    "title": "The Number of Passengers in Each Bus I",
    "optimalCode": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customer lifetime value' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customer lifetime value is essential for database query optimization and relational data analysis."
  },
  "486": {
    "code_id": "237",
    "levelNumber": 486,
    "title": "The Number of Passengers in Each Bus II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Revenue by month' using SQLite execution planner.",
    "keyTakeaway": "Mastering Revenue by month is essential for database query optimization and relational data analysis."
  },
  "487": {
    "code_id": "238",
    "levelNumber": 487,
    "title": "Longest Winning Streak",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Rolling average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Rolling average is essential for database query optimization and relational data analysis."
  },
  "488": {
    "code_id": "239",
    "levelNumber": 488,
    "title": "Dynamic Pivoting of a Table",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Year-over-year growth' using SQLite execution planner.",
    "keyTakeaway": "Mastering Year-over-year growth is essential for database query optimization and relational data analysis."
  },
  "489": {
    "code_id": "240",
    "levelNumber": 489,
    "title": "Dynamic Unpivoting of a Table",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Month-over-month growth' using SQLite execution planner.",
    "keyTakeaway": "Mastering Month-over-month growth is essential for database query optimization and relational data analysis."
  },
  "490": {
    "code_id": "241",
    "levelNumber": 490,
    "title": "Merge Overlapping Events in the Same Hall",
    "optimalCode": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Top-selling product' using SQLite execution planner.",
    "keyTakeaway": "Mastering Top-selling product is essential for database query optimization and relational data analysis."
  },
  "491": {
    "code_id": "242",
    "levelNumber": 491,
    "title": "Consecutive Numbers Sum",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Least-selling product' using SQLite execution planner.",
    "keyTakeaway": "Mastering Least-selling product is essential for database query optimization and relational data analysis."
  },
  "492": {
    "code_id": "243",
    "levelNumber": 492,
    "title": "Shortest Distance in a Plane II",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Market share calculation' using SQLite execution planner.",
    "keyTakeaway": "Mastering Market share calculation is essential for database query optimization and relational data analysis."
  },
  "493": {
    "code_id": "244",
    "levelNumber": 493,
    "title": "Department Top Five Salaries",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Percent contribution' using SQLite execution planner.",
    "keyTakeaway": "Mastering Percent contribution is essential for database query optimization and relational data analysis."
  },
  "494": {
    "code_id": "245",
    "levelNumber": 494,
    "title": "Total Sales Amount by Month",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Cohort analysis' using SQLite execution planner.",
    "keyTakeaway": "Mastering Cohort analysis is essential for database query optimization and relational data analysis."
  },
  "495": {
    "code_id": "246",
    "levelNumber": 495,
    "title": "Longest Losing Streak",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Retention analysis' using SQLite execution planner.",
    "keyTakeaway": "Mastering Retention analysis is essential for database query optimization and relational data analysis."
  },
  "496": {
    "code_id": "247",
    "levelNumber": 496,
    "title": "Order Three Columns Independently",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Dense ranking challenge' using SQLite execution planner.",
    "keyTakeaway": "Mastering Dense ranking challenge is essential for database query optimization and relational data analysis."
  },
  "497": {
    "code_id": "248",
    "levelNumber": 497,
    "title": "Dynamic Pivoting of a Summary Table",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Recursive hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Recursive hierarchy is essential for database query optimization and relational data analysis."
  },
  "498": {
    "code_id": "249",
    "levelNumber": 498,
    "title": "Dynamic Unpivoting of a Summary Table",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sessionization problem' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sessionization problem is essential for database query optimization and relational data analysis."
  },
  "499": {
    "code_id": "250",
    "levelNumber": 499,
    "title": "Median Employee Salary",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Fraud detection using SQL' using SQLite execution planner.",
    "keyTakeaway": "Mastering Fraud detection using SQL is essential for database query optimization and relational data analysis."
  },
  "500": {
    "code_id": "SQL-C-NEW5",
    "levelNumber": 500,
    "title": "Find Cutoff Score",
    "optimalCode": "SELECT COUNT(*) AS total_employees FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count total rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count total rows is essential for database query optimization and relational data analysis."
  },
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
    "title": "Select specific columns",
    "optimalCode": "SELECT employee_id, first_name, last_name, salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Select specific columns' using SQLite execution planner.",
    "keyTakeaway": "Mastering Select specific columns is essential for database query optimization and relational data analysis."
  },
  "Basics-003": {
    "code_id": "Basics-003",
    "levelNumber": 3,
    "title": "Filter rows using WHERE",
    "optimalCode": "SELECT * FROM employees WHERE salary > 80000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Filter rows using WHERE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Filter rows using WHERE is essential for database query optimization and relational data analysis."
  },
  "Basics-004": {
    "code_id": "Basics-004",
    "levelNumber": 4,
    "title": "Use multiple conditions with AND",
    "optimalCode": "SELECT * FROM employees WHERE salary > 70000 AND department_id = 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use multiple conditions with AND' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use multiple conditions with AND is essential for database query optimization and relational data analysis."
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
    "title": "Average marks above 80",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Average marks above 80' using SQLite execution planner.",
    "keyTakeaway": "Mastering Average marks above 80 is essential for database query optimization and relational data analysis."
  },
  "SQL-018": {
    "code_id": "SQL-018",
    "levelNumber": 53,
    "title": "Groups using multiple columns",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Groups using multiple columns' using SQLite execution planner.",
    "keyTakeaway": "Mastering Groups using multiple columns is essential for database query optimization and relational data analysis."
  },
  "SQL-019": {
    "code_id": "SQL-019",
    "levelNumber": 54,
    "title": "HAVING with COUNT",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'HAVING with COUNT' using SQLite execution planner.",
    "keyTakeaway": "Mastering HAVING with COUNT is essential for database query optimization and relational data analysis."
  },
  "SQL-020": {
    "code_id": "SQL-020",
    "levelNumber": 55,
    "title": "HAVING with SUM",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'HAVING with SUM' using SQLite execution planner.",
    "keyTakeaway": "Mastering HAVING with SUM is essential for database query optimization and relational data analysis."
  },
  "SQL-021": {
    "code_id": "SQL-021",
    "levelNumber": 56,
    "title": "Inner Join",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Inner Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Inner Join is essential for database query optimization and relational data analysis."
  },
  "SQL-022": {
    "code_id": "SQL-022",
    "levelNumber": 57,
    "title": "Left Join",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Left Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Left Join is essential for database query optimization and relational data analysis."
  },
  "SQL-023": {
    "code_id": "SQL-023",
    "levelNumber": 58,
    "title": "Right Join",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Right Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Right Join is essential for database query optimization and relational data analysis."
  },
  "SQL-024": {
    "code_id": "SQL-024",
    "levelNumber": 59,
    "title": "Full Join",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Full Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Full Join is essential for database query optimization and relational data analysis."
  },
  "SQL-025": {
    "code_id": "SQL-025",
    "levelNumber": 60,
    "title": "Self Join",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Self Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Self Join is essential for database query optimization and relational data analysis."
  },
  "SQL-026": {
    "code_id": "SQL-026",
    "levelNumber": 61,
    "title": "Cross Join",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Cross Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Cross Join is essential for database query optimization and relational data analysis."
  },
  "SQL-027": {
    "code_id": "SQL-027",
    "levelNumber": 62,
    "title": "Employees with department names",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees with department names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees with department names is essential for database query optimization and relational data analysis."
  },
  "SQL-028": {
    "code_id": "SQL-028",
    "levelNumber": 63,
    "title": "Customers with orders",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers with orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers with orders is essential for database query optimization and relational data analysis."
  },
  "SQL-029": {
    "code_id": "SQL-029",
    "levelNumber": 64,
    "title": "Customers without orders",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers without orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers without orders is essential for database query optimization and relational data analysis."
  },
  "SQL-030": {
    "code_id": "SQL-030",
    "levelNumber": 65,
    "title": "Orders without customers",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Orders without customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Orders without customers is essential for database query optimization and relational data analysis."
  },
  "SQL-031": {
    "code_id": "SQL-031",
    "levelNumber": 66,
    "title": "Students with course names",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Students with course names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Students with course names is essential for database query optimization and relational data analysis."
  },
  "SQL-032": {
    "code_id": "SQL-032",
    "levelNumber": 67,
    "title": "Employees without managers",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees without managers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees without managers is essential for database query optimization and relational data analysis."
  },
  "SQL-033": {
    "code_id": "SQL-033",
    "levelNumber": 68,
    "title": "Manager and employee names",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Manager and employee names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Manager and employee names is essential for database query optimization and relational data analysis."
  },
  "SQL-034": {
    "code_id": "SQL-034",
    "levelNumber": 69,
    "title": "Multiple table joins",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Multiple table joins' using SQLite execution planner.",
    "keyTakeaway": "Mastering Multiple table joins is essential for database query optimization and relational data analysis."
  },
  "SQL-035": {
    "code_id": "SQL-035",
    "levelNumber": 70,
    "title": "Join three tables",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join three tables' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join three tables is essential for database query optimization and relational data analysis."
  },
  "SQL-036": {
    "code_id": "SQL-036",
    "levelNumber": 71,
    "title": "Join four tables",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join four tables' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join four tables is essential for database query optimization and relational data analysis."
  },
  "SQL-037": {
    "code_id": "SQL-037",
    "levelNumber": 72,
    "title": "Highest order per customer",
    "optimalCode": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Highest order per customer' using SQLite execution planner.",
    "keyTakeaway": "Mastering Highest order per customer is essential for database query optimization and relational data analysis."
  },
  "SQL-038": {
    "code_id": "SQL-038",
    "levelNumber": 73,
    "title": "Total orders per customer",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Total orders per customer' using SQLite execution planner.",
    "keyTakeaway": "Mastering Total orders per customer is essential for database query optimization and relational data analysis."
  },
  "SQL-039": {
    "code_id": "SQL-039",
    "levelNumber": 74,
    "title": "Employee and project details",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee and project details' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee and project details is essential for database query optimization and relational data analysis."
  },
  "SQL-040": {
    "code_id": "SQL-040",
    "levelNumber": 75,
    "title": "Product and supplier details",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Product and supplier details' using SQLite execution planner.",
    "keyTakeaway": "Mastering Product and supplier details is essential for database query optimization and relational data analysis."
  },
  "SQL-041": {
    "code_id": "SQL-041",
    "levelNumber": 76,
    "title": "Customer-city join",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customer-city join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customer-city join is essential for database query optimization and relational data analysis."
  },
  "SQL-042": {
    "code_id": "SQL-042",
    "levelNumber": 77,
    "title": "Find unmatched rows",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find unmatched rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find unmatched rows is essential for database query optimization and relational data analysis."
  },
  "SQL-043": {
    "code_id": "SQL-043",
    "levelNumber": 78,
    "title": "Sales with product names",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sales with product names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sales with product names is essential for database query optimization and relational data analysis."
  },
  "SQL-044": {
    "code_id": "SQL-044",
    "levelNumber": 79,
    "title": "Student-course enrollment",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Student-course enrollment' using SQLite execution planner.",
    "keyTakeaway": "Mastering Student-course enrollment is essential for database query optimization and relational data analysis."
  },
  "SQL-045": {
    "code_id": "SQL-045",
    "levelNumber": 80,
    "title": "Employee-manager hierarchy",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee-manager hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee-manager hierarchy is essential for database query optimization and relational data analysis."
  },
  "SQL-046": {
    "code_id": "SQL-046",
    "levelNumber": 81,
    "title": "Left join with WHERE",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Left join with WHERE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Left join with WHERE is essential for database query optimization and relational data analysis."
  },
  "SQL-047": {
    "code_id": "SQL-047",
    "levelNumber": 82,
    "title": "Right join with NULL",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Right join with NULL' using SQLite execution planner.",
    "keyTakeaway": "Mastering Right join with NULL is essential for database query optimization and relational data analysis."
  },
  "SQL-048": {
    "code_id": "SQL-048",
    "levelNumber": 83,
    "title": "Join with GROUP BY",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with GROUP BY' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with GROUP BY is essential for database query optimization and relational data analysis."
  },
  "SQL-049": {
    "code_id": "SQL-049",
    "levelNumber": 84,
    "title": "Join with HAVING",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with HAVING' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with HAVING is essential for database query optimization and relational data analysis."
  },
  "SQL-050": {
    "code_id": "SQL-050",
    "levelNumber": 85,
    "title": "Join with aggregate functions",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with aggregate functions' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with aggregate functions is essential for database query optimization and relational data analysis."
  },
  "SQL-051": {
    "code_id": "SQL-051",
    "levelNumber": 86,
    "title": "Join with CASE",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with CASE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with CASE is essential for database query optimization and relational data analysis."
  },
  "SQL-052": {
    "code_id": "SQL-052",
    "levelNumber": 87,
    "title": "Join with subquery",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with subquery' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with subquery is essential for database query optimization and relational data analysis."
  },
  "SQL-053": {
    "code_id": "SQL-053",
    "levelNumber": 88,
    "title": "Join using aliases",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join using aliases' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join using aliases is essential for database query optimization and relational data analysis."
  },
  "SQL-054": {
    "code_id": "SQL-054",
    "levelNumber": 89,
    "title": "Difference between INNER and LEFT JOIN",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Difference between INNER and LEFT JOIN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Difference between INNER and LEFT JOIN is essential for database query optimization and relational data analysis."
  },
  "SQL-055": {
    "code_id": "SQL-055",
    "levelNumber": 90,
    "title": "Difference between LEFT and RIGHT JOIN",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Difference between LEFT and RIGHT JOIN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Difference between LEFT and RIGHT JOIN is essential for database query optimization and relational data analysis."
  },
  "SQL-056": {
    "code_id": "SQL-056",
    "levelNumber": 91,
    "title": "Salary above average",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Salary above average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Salary above average is essential for database query optimization and relational data analysis."
  },
  "SQL-058": {
    "code_id": "SQL-058",
    "levelNumber": 92,
    "title": "Third highest salary",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Second highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Second highest salary is essential for database query optimization and relational data analysis."
  },
  "SQL-060": {
    "code_id": "SQL-060",
    "levelNumber": 93,
    "title": "Employees earning more than department average",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Third highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Third highest salary is essential for database query optimization and relational data analysis."
  },
  "SQL-061": {
    "code_id": "SQL-061",
    "levelNumber": 94,
    "title": "Products above average price",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Nth highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Nth highest salary is essential for database query optimization and relational data analysis."
  },
  "SQL-062": {
    "code_id": "SQL-062",
    "levelNumber": 95,
    "title": "Customers with maximum orders",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees earning more than department average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees earning more than department average is essential for database query optimization and relational data analysis."
  },
  "SQL-063": {
    "code_id": "SQL-063",
    "levelNumber": 96,
    "title": "Employees in highest-paying department",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Products above average price' using SQLite execution planner.",
    "keyTakeaway": "Mastering Products above average price is essential for database query optimization and relational data analysis."
  },
  "SQL-064": {
    "code_id": "SQL-064",
    "levelNumber": 97,
    "title": "Departments with highest average salary",
    "optimalCode": "SELECT *, COUNT(*) AS count FROM orders GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers with maximum orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers with maximum orders is essential for database query optimization and relational data analysis."
  },
  "SQL-065": {
    "code_id": "SQL-065",
    "levelNumber": 98,
    "title": "Find duplicate rows",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees in highest-paying department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees in highest-paying department is essential for database query optimization and relational data analysis."
  },
  "SQL-066": {
    "code_id": "SQL-066",
    "levelNumber": 99,
    "title": "Remove duplicate rows",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Departments with highest average salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Departments with highest average salary is essential for database query optimization and relational data analysis."
  },
  "SQL-067": {
    "code_id": "SQL-067",
    "levelNumber": 100,
    "title": "Exists vs IN",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find duplicate rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find duplicate rows is essential for database query optimization and relational data analysis."
  },
  "SQL-068": {
    "code_id": "SQL-068",
    "levelNumber": 101,
    "title": "NOT EXISTS",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Remove duplicate rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Remove duplicate rows is essential for database query optimization and relational data analysis."
  },
  "SQL-069": {
    "code_id": "SQL-069",
    "levelNumber": 102,
    "title": "Correlated subquery",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Exists vs IN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Exists vs IN is essential for database query optimization and relational data analysis."
  },
  "SQL-070": {
    "code_id": "SQL-070",
    "levelNumber": 103,
    "title": "Nested subqueries",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'NOT EXISTS' using SQLite execution planner.",
    "keyTakeaway": "Mastering NOT EXISTS is essential for database query optimization and relational data analysis."
  },
  "SQL-071": {
    "code_id": "SQL-071",
    "levelNumber": 104,
    "title": "Max salary employee",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Correlated subquery' using SQLite execution planner.",
    "keyTakeaway": "Mastering Correlated subquery is essential for database query optimization and relational data analysis."
  },
  "SQL-072": {
    "code_id": "SQL-072",
    "levelNumber": 105,
    "title": "Min salary employee",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Nested subqueries' using SQLite execution planner.",
    "keyTakeaway": "Mastering Nested subqueries is essential for database query optimization and relational data analysis."
  },
  "SQL-074": {
    "code_id": "SQL-074",
    "levelNumber": 106,
    "title": "Products never sold",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Max salary employee' using SQLite execution planner.",
    "keyTakeaway": "Mastering Max salary employee is essential for database query optimization and relational data analysis."
  },
  "SQL-075": {
    "code_id": "SQL-075",
    "levelNumber": 107,
    "title": "Orders above average amount",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Min salary employee' using SQLite execution planner.",
    "keyTakeaway": "Mastering Min salary employee is essential for database query optimization and relational data analysis."
  },
  "SQL-076": {
    "code_id": "SQL-076",
    "levelNumber": 108,
    "title": "ROW_NUMBER()",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers without orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers without orders is essential for database query optimization and relational data analysis."
  },
  "SQL-077": {
    "code_id": "SQL-077",
    "levelNumber": 109,
    "title": "RANK()",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Products never sold' using SQLite execution planner.",
    "keyTakeaway": "Mastering Products never sold is essential for database query optimization and relational data analysis."
  },
  "SQL-078": {
    "code_id": "SQL-078",
    "levelNumber": 110,
    "title": "DENSE_RANK()",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Orders above average amount' using SQLite execution planner.",
    "keyTakeaway": "Mastering Orders above average amount is essential for database query optimization and relational data analysis."
  },
  "SQL-079": {
    "code_id": "SQL-079",
    "levelNumber": 111,
    "title": "NTILE()",
    "optimalCode": "SELECT employee_id, first_name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'ROW_NUMBER()' using SQLite execution planner.",
    "keyTakeaway": "Mastering ROW_NUMBER() is essential for database query optimization and relational data analysis."
  },
  "SQL-080": {
    "code_id": "SQL-080",
    "levelNumber": 112,
    "title": "LEAD()",
    "optimalCode": "SELECT employee_id, first_name, salary, RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'RANK()' using SQLite execution planner.",
    "keyTakeaway": "Mastering RANK() is essential for database query optimization and relational data analysis."
  },
  "SQL-081": {
    "code_id": "SQL-081",
    "levelNumber": 113,
    "title": "LAG()",
    "optimalCode": "SELECT employee_id, first_name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'DENSE_RANK()' using SQLite execution planner.",
    "keyTakeaway": "Mastering DENSE_RANK() is essential for database query optimization and relational data analysis."
  },
  "SQL-082": {
    "code_id": "SQL-082",
    "levelNumber": 114,
    "title": "FIRST_VALUE()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'NTILE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering NTILE() is essential for database query optimization and relational data analysis."
  },
  "SQL-083": {
    "code_id": "SQL-083",
    "levelNumber": 115,
    "title": "LAST_VALUE()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LEAD()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LEAD() is essential for database query optimization and relational data analysis."
  },
  "SQL-084": {
    "code_id": "SQL-084",
    "levelNumber": 116,
    "title": "Running total",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LAG()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LAG() is essential for database query optimization and relational data analysis."
  },
  "SQL-085": {
    "code_id": "SQL-085",
    "levelNumber": 117,
    "title": "Cumulative sum",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'FIRST_VALUE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering FIRST_VALUE() is essential for database query optimization and relational data analysis."
  },
  "SQL-086": {
    "code_id": "SQL-086",
    "levelNumber": 118,
    "title": "Moving average",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LAST_VALUE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LAST_VALUE() is essential for database query optimization and relational data analysis."
  },
  "SQL-087": {
    "code_id": "SQL-087",
    "levelNumber": 119,
    "title": "Top 3 salaries",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running total' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running total is essential for database query optimization and relational data analysis."
  },
  "SQL-088": {
    "code_id": "SQL-088",
    "levelNumber": 120,
    "title": "Highest salary per department",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Cumulative sum' using SQLite execution planner.",
    "keyTakeaway": "Mastering Cumulative sum is essential for database query optimization and relational data analysis."
  },
  "SQL-089": {
    "code_id": "SQL-089",
    "levelNumber": 121,
    "title": "Lowest salary per department",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Moving average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Moving average is essential for database query optimization and relational data analysis."
  },
  "SQL-090": {
    "code_id": "SQL-090",
    "levelNumber": 122,
    "title": "Previous month's sales",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Top 3 salaries' using SQLite execution planner.",
    "keyTakeaway": "Mastering Top 3 salaries is essential for database query optimization and relational data analysis."
  },
  "SQL-091": {
    "code_id": "SQL-091",
    "levelNumber": 123,
    "title": "Next month's sales",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Highest salary per department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Highest salary per department is essential for database query optimization and relational data analysis."
  },
  "SQL-092": {
    "code_id": "SQL-092",
    "levelNumber": 124,
    "title": "Difference from previous row",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Lowest salary per department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Lowest salary per department is essential for database query optimization and relational data analysis."
  },
  "SQL-093": {
    "code_id": "SQL-093",
    "levelNumber": 125,
    "title": "Running average",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Previous month's sales' using SQLite execution planner.",
    "keyTakeaway": "Mastering Previous month's sales is essential for database query optimization and relational data analysis."
  },
  "SQL-094": {
    "code_id": "SQL-094",
    "levelNumber": 126,
    "title": "Running count",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Next month's sales' using SQLite execution planner.",
    "keyTakeaway": "Mastering Next month's sales is essential for database query optimization and relational data analysis."
  },
  "SQL-095": {
    "code_id": "SQL-095",
    "levelNumber": 127,
    "title": "Percent rank",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Difference from previous row' using SQLite execution planner.",
    "keyTakeaway": "Mastering Difference from previous row is essential for database query optimization and relational data analysis."
  },
  "SQL-096": {
    "code_id": "SQL-096",
    "levelNumber": 128,
    "title": "Dense rank by department",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running average is essential for database query optimization and relational data analysis."
  },
  "SQL-097": {
    "code_id": "SQL-097",
    "levelNumber": 129,
    "title": "Row number partition",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running count' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running count is essential for database query optimization and relational data analysis."
  },
  "SQL-098": {
    "code_id": "SQL-098",
    "levelNumber": 130,
    "title": "Ranking products",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Percent rank' using SQLite execution planner.",
    "keyTakeaway": "Mastering Percent rank is essential for database query optimization and relational data analysis."
  },
  "SQL-099": {
    "code_id": "SQL-099",
    "levelNumber": 131,
    "title": "Ranking students",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Dense rank by department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Dense rank by department is essential for database query optimization and relational data analysis."
  },
  "SQL-100": {
    "code_id": "SQL-100",
    "levelNumber": 132,
    "title": "Ranking salespersons",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Row number partition' using SQLite execution planner.",
    "keyTakeaway": "Mastering Row number partition is essential for database query optimization and relational data analysis."
  },
  "SQL-101": {
    "code_id": "SQL-101",
    "levelNumber": 133,
    "title": "Top N customers",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Ranking products' using SQLite execution planner.",
    "keyTakeaway": "Mastering Ranking products is essential for database query optimization and relational data analysis."
  },
  "SQL-102": {
    "code_id": "SQL-102",
    "levelNumber": 134,
    "title": "Bottom N products",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Ranking students' using SQLite execution planner.",
    "keyTakeaway": "Mastering Ranking students is essential for database query optimization and relational data analysis."
  },
  "SQL-103": {
    "code_id": "SQL-103",
    "levelNumber": 135,
    "title": "Window frame examples",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Ranking salespersons' using SQLite execution planner.",
    "keyTakeaway": "Mastering Ranking salespersons is essential for database query optimization and relational data analysis."
  },
  "SQL-104": {
    "code_id": "SQL-104",
    "levelNumber": 136,
    "title": "PARTITION BY",
    "optimalCode": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Top N customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Top N customers is essential for database query optimization and relational data analysis."
  },
  "SQL-105": {
    "code_id": "SQL-105",
    "levelNumber": 137,
    "title": "ORDER BY in window functions",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Bottom N products' using SQLite execution planner.",
    "keyTakeaway": "Mastering Bottom N products is essential for database query optimization and relational data analysis."
  },
  "SQL-106": {
    "code_id": "SQL-106",
    "levelNumber": 138,
    "title": "Simple CTE",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Window frame examples' using SQLite execution planner.",
    "keyTakeaway": "Mastering Window frame examples is essential for database query optimization and relational data analysis."
  },
  "SQL-107": {
    "code_id": "SQL-107",
    "levelNumber": 139,
    "title": "Multiple CTEs",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'PARTITION BY' using SQLite execution planner.",
    "keyTakeaway": "Mastering PARTITION BY is essential for database query optimization and relational data analysis."
  },
  "SQL-108": {
    "code_id": "SQL-108",
    "levelNumber": 140,
    "title": "Recursive CTE",
    "optimalCode": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'ORDER BY in window functions' using SQLite execution planner.",
    "keyTakeaway": "Mastering ORDER BY in window functions is essential for database query optimization and relational data analysis."
  },
  "SQL-110": {
    "code_id": "SQL-110",
    "levelNumber": 141,
    "title": "Category hierarchy",
    "optimalCode": "WITH HighEarners AS (SELECT * FROM employees WHERE salary > 80000) SELECT * FROM HighEarners;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Simple CTE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Simple CTE is essential for database query optimization and relational data analysis."
  },
  "SQL-111": {
    "code_id": "SQL-111",
    "levelNumber": 142,
    "title": "Running totals using CTE",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Multiple CTEs' using SQLite execution planner.",
    "keyTakeaway": "Mastering Multiple CTEs is essential for database query optimization and relational data analysis."
  },
  "SQL-112": {
    "code_id": "SQL-112",
    "levelNumber": 143,
    "title": "Ranking using CTE",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Recursive CTE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Recursive CTE is essential for database query optimization and relational data analysis."
  },
  "SQL-113": {
    "code_id": "SQL-113",
    "levelNumber": 144,
    "title": "Duplicate removal",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee hierarchy is essential for database query optimization and relational data analysis."
  },
  "SQL-114": {
    "code_id": "SQL-114",
    "levelNumber": 145,
    "title": "Temporary calculations",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Category hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Category hierarchy is essential for database query optimization and relational data analysis."
  },
  "SQL-115": {
    "code_id": "SQL-115",
    "levelNumber": 146,
    "title": "Monthly sales report",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running totals using CTE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running totals using CTE is essential for database query optimization and relational data analysis."
  },
  "SQL-116": {
    "code_id": "SQL-116",
    "levelNumber": 147,
    "title": "Department summary",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Ranking using CTE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Ranking using CTE is essential for database query optimization and relational data analysis."
  },
  "SQL-117": {
    "code_id": "SQL-117",
    "levelNumber": 148,
    "title": "Customer summary",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate removal' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate removal is essential for database query optimization and relational data analysis."
  },
  "SQL-118": {
    "code_id": "SQL-118",
    "levelNumber": 149,
    "title": "Sales analysis",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Temporary calculations' using SQLite execution planner.",
    "keyTakeaway": "Mastering Temporary calculations is essential for database query optimization and relational data analysis."
  },
  "SQL-119": {
    "code_id": "SQL-119",
    "levelNumber": 150,
    "title": "Employee analysis",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Monthly sales report' using SQLite execution planner.",
    "keyTakeaway": "Mastering Monthly sales report is essential for database query optimization and relational data analysis."
  },
  "SQL-120": {
    "code_id": "SQL-120",
    "levelNumber": 151,
    "title": "Recursive numbers",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Department summary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Department summary is essential for database query optimization and relational data analysis."
  },
  "SQL-121": {
    "code_id": "SQL-121",
    "levelNumber": 152,
    "title": "Grade students",
    "optimalCode": "SELECT *, COUNT(*) AS count FROM customers GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customer summary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customer summary is essential for database query optimization and relational data analysis."
  },
  "SQL-122": {
    "code_id": "SQL-122",
    "levelNumber": 153,
    "title": "Salary bands",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sales analysis' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sales analysis is essential for database query optimization and relational data analysis."
  },
  "SQL-123": {
    "code_id": "SQL-123",
    "levelNumber": 154,
    "title": "Age groups",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee analysis' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee analysis is essential for database query optimization and relational data analysis."
  },
  "SQL-124": {
    "code_id": "SQL-124",
    "levelNumber": 155,
    "title": "Sales categories",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Recursive numbers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Recursive numbers is essential for database query optimization and relational data analysis."
  },
  "SQL-125": {
    "code_id": "SQL-125",
    "levelNumber": 156,
    "title": "Bonus calculation",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Grade students' using SQLite execution planner.",
    "keyTakeaway": "Mastering Grade students is essential for database query optimization and relational data analysis."
  },
  "SQL-126": {
    "code_id": "SQL-126",
    "levelNumber": 157,
    "title": "Customer classification",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Salary bands' using SQLite execution planner.",
    "keyTakeaway": "Mastering Salary bands is essential for database query optimization and relational data analysis."
  },
  "SQL-127": {
    "code_id": "SQL-127",
    "levelNumber": 158,
    "title": "Pass/Fail status",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Age groups' using SQLite execution planner.",
    "keyTakeaway": "Mastering Age groups is essential for database query optimization and relational data analysis."
  },
  "SQL-128": {
    "code_id": "SQL-128",
    "levelNumber": 159,
    "title": "Gender formatting",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sales categories' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sales categories is essential for database query optimization and relational data analysis."
  },
  "SQL-129": {
    "code_id": "SQL-129",
    "levelNumber": 160,
    "title": "Conditional aggregation",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Bonus calculation' using SQLite execution planner.",
    "keyTakeaway": "Mastering Bonus calculation is essential for database query optimization and relational data analysis."
  },
  "SQL-130": {
    "code_id": "SQL-130",
    "levelNumber": 161,
    "title": "Multiple CASE conditions",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customer classification' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customer classification is essential for database query optimization and relational data analysis."
  },
  "SQL-131": {
    "code_id": "SQL-131",
    "levelNumber": 162,
    "title": "LENGTH()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Pass/Fail status' using SQLite execution planner.",
    "keyTakeaway": "Mastering Pass/Fail status is essential for database query optimization and relational data analysis."
  },
  "SQL-132": {
    "code_id": "SQL-132",
    "levelNumber": 163,
    "title": "UPPER()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Gender formatting' using SQLite execution planner.",
    "keyTakeaway": "Mastering Gender formatting is essential for database query optimization and relational data analysis."
  },
  "SQL-133": {
    "code_id": "SQL-133",
    "levelNumber": 164,
    "title": "LOWER()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Conditional aggregation' using SQLite execution planner.",
    "keyTakeaway": "Mastering Conditional aggregation is essential for database query optimization and relational data analysis."
  },
  "SQL-134": {
    "code_id": "SQL-134",
    "levelNumber": 165,
    "title": "CONCAT()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Multiple CASE conditions' using SQLite execution planner.",
    "keyTakeaway": "Mastering Multiple CASE conditions is essential for database query optimization and relational data analysis."
  },
  "SQL-135": {
    "code_id": "SQL-135",
    "levelNumber": 166,
    "title": "SUBSTRING()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LENGTH()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LENGTH() is essential for database query optimization and relational data analysis."
  },
  "SQL-136": {
    "code_id": "SQL-136",
    "levelNumber": 167,
    "title": "REPLACE()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'UPPER()' using SQLite execution planner.",
    "keyTakeaway": "Mastering UPPER() is essential for database query optimization and relational data analysis."
  },
  "SQL-137": {
    "code_id": "SQL-137",
    "levelNumber": 168,
    "title": "TRIM()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LOWER()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LOWER() is essential for database query optimization and relational data analysis."
  },
  "SQL-138": {
    "code_id": "SQL-138",
    "levelNumber": 169,
    "title": "LTRIM()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'CONCAT()' using SQLite execution planner.",
    "keyTakeaway": "Mastering CONCAT() is essential for database query optimization and relational data analysis."
  },
  "SQL-139": {
    "code_id": "SQL-139",
    "levelNumber": 170,
    "title": "RTRIM()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'SUBSTRING()' using SQLite execution planner.",
    "keyTakeaway": "Mastering SUBSTRING() is essential for database query optimization and relational data analysis."
  },
  "SQL-140": {
    "code_id": "SQL-140",
    "levelNumber": 171,
    "title": "LEFT()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'REPLACE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering REPLACE() is essential for database query optimization and relational data analysis."
  },
  "SQL-141": {
    "code_id": "SQL-141",
    "levelNumber": 172,
    "title": "RIGHT()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'TRIM()' using SQLite execution planner.",
    "keyTakeaway": "Mastering TRIM() is essential for database query optimization and relational data analysis."
  },
  "SQL-142": {
    "code_id": "SQL-142",
    "levelNumber": 173,
    "title": "POSITION/CHARINDEX()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LTRIM()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LTRIM() is essential for database query optimization and relational data analysis."
  },
  "SQL-143": {
    "code_id": "SQL-143",
    "levelNumber": 174,
    "title": "REVERSE()",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'RTRIM()' using SQLite execution planner.",
    "keyTakeaway": "Mastering RTRIM() is essential for database query optimization and relational data analysis."
  },
  "SQL-144": {
    "code_id": "SQL-144",
    "levelNumber": 175,
    "title": "Split names",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'LEFT()' using SQLite execution planner.",
    "keyTakeaway": "Mastering LEFT() is essential for database query optimization and relational data analysis."
  },
  "SQL-145": {
    "code_id": "SQL-145",
    "levelNumber": 176,
    "title": "Initials",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'RIGHT()' using SQLite execution planner.",
    "keyTakeaway": "Mastering RIGHT() is essential for database query optimization and relational data analysis."
  },
  "SQL-146": {
    "code_id": "SQL-146",
    "levelNumber": 177,
    "title": "Email extraction",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'POSITION/CHARINDEX()' using SQLite execution planner.",
    "keyTakeaway": "Mastering POSITION/CHARINDEX() is essential for database query optimization and relational data analysis."
  },
  "SQL-147": {
    "code_id": "SQL-147",
    "levelNumber": 178,
    "title": "Domain extraction",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'REVERSE()' using SQLite execution planner.",
    "keyTakeaway": "Mastering REVERSE() is essential for database query optimization and relational data analysis."
  },
  "SQL-148": {
    "code_id": "SQL-148",
    "levelNumber": 179,
    "title": "Count characters",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Split names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Split names is essential for database query optimization and relational data analysis."
  },
  "SQL-149": {
    "code_id": "SQL-149",
    "levelNumber": 180,
    "title": "Remove spaces",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Initials' using SQLite execution planner.",
    "keyTakeaway": "Mastering Initials is essential for database query optimization and relational data analysis."
  },
  "SQL-150": {
    "code_id": "SQL-150",
    "levelNumber": 181,
    "title": "Replace multiple characters",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Email extraction' using SQLite execution planner.",
    "keyTakeaway": "Mastering Email extraction is essential for database query optimization and relational data analysis."
  },
  "SQL-151": {
    "code_id": "SQL-151",
    "levelNumber": 182,
    "title": "Current date",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Domain extraction' using SQLite execution planner.",
    "keyTakeaway": "Mastering Domain extraction is essential for database query optimization and relational data analysis."
  },
  "SQL-152": {
    "code_id": "SQL-152",
    "levelNumber": 183,
    "title": "Current timestamp",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count characters' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count characters is essential for database query optimization and relational data analysis."
  },
  "SQL-153": {
    "code_id": "SQL-153",
    "levelNumber": 184,
    "title": "Difference between dates",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Remove spaces' using SQLite execution planner.",
    "keyTakeaway": "Mastering Remove spaces is essential for database query optimization and relational data analysis."
  },
  "SQL-154": {
    "code_id": "SQL-154",
    "levelNumber": 185,
    "title": "Add days",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Replace multiple characters' using SQLite execution planner.",
    "keyTakeaway": "Mastering Replace multiple characters is essential for database query optimization and relational data analysis."
  },
  "SQL-155": {
    "code_id": "SQL-155",
    "levelNumber": 186,
    "title": "Add months",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Current date' using SQLite execution planner.",
    "keyTakeaway": "Mastering Current date is essential for database query optimization and relational data analysis."
  },
  "SQL-156": {
    "code_id": "SQL-156",
    "levelNumber": 187,
    "title": "Extract year",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Current timestamp' using SQLite execution planner.",
    "keyTakeaway": "Mastering Current timestamp is essential for database query optimization and relational data analysis."
  },
  "SQL-157": {
    "code_id": "SQL-157",
    "levelNumber": 188,
    "title": "Extract month",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Difference between dates' using SQLite execution planner.",
    "keyTakeaway": "Mastering Difference between dates is essential for database query optimization and relational data analysis."
  },
  "SQL-158": {
    "code_id": "SQL-158",
    "levelNumber": 189,
    "title": "Extract day",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Add days' using SQLite execution planner.",
    "keyTakeaway": "Mastering Add days is essential for database query optimization and relational data analysis."
  },
  "SQL-159": {
    "code_id": "SQL-159",
    "levelNumber": 190,
    "title": "Week number",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Add months' using SQLite execution planner.",
    "keyTakeaway": "Mastering Add months is essential for database query optimization and relational data analysis."
  },
  "SQL-160": {
    "code_id": "SQL-160",
    "levelNumber": 191,
    "title": "Quarter",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Extract year' using SQLite execution planner.",
    "keyTakeaway": "Mastering Extract year is essential for database query optimization and relational data analysis."
  },
  "SQL-161": {
    "code_id": "SQL-161",
    "levelNumber": 192,
    "title": "Last day of month",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Extract month' using SQLite execution planner.",
    "keyTakeaway": "Mastering Extract month is essential for database query optimization and relational data analysis."
  },
  "SQL-162": {
    "code_id": "SQL-162",
    "levelNumber": 193,
    "title": "First day of month",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Extract day' using SQLite execution planner.",
    "keyTakeaway": "Mastering Extract day is essential for database query optimization and relational data analysis."
  },
  "SQL-163": {
    "code_id": "SQL-163",
    "levelNumber": 194,
    "title": "Date formatting",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Week number' using SQLite execution planner.",
    "keyTakeaway": "Mastering Week number is essential for database query optimization and relational data analysis."
  },
  "SQL-164": {
    "code_id": "SQL-164",
    "levelNumber": 195,
    "title": "Age calculation",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Quarter' using SQLite execution planner.",
    "keyTakeaway": "Mastering Quarter is essential for database query optimization and relational data analysis."
  },
  "SQL-165": {
    "code_id": "SQL-165",
    "levelNumber": 196,
    "title": "Employees hired this year",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Last day of month' using SQLite execution planner.",
    "keyTakeaway": "Mastering Last day of month is essential for database query optimization and relational data analysis."
  },
  "SQL-166": {
    "code_id": "SQL-166",
    "levelNumber": 197,
    "title": "Orders this month",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'First day of month' using SQLite execution planner.",
    "keyTakeaway": "Mastering First day of month is essential for database query optimization and relational data analysis."
  },
  "SQL-167": {
    "code_id": "SQL-167",
    "levelNumber": 198,
    "title": "Sales last 30 days",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Date formatting' using SQLite execution planner.",
    "keyTakeaway": "Mastering Date formatting is essential for database query optimization and relational data analysis."
  },
  "SQL-168": {
    "code_id": "SQL-168",
    "levelNumber": 199,
    "title": "Weekend records",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Age calculation' using SQLite execution planner.",
    "keyTakeaway": "Mastering Age calculation is essential for database query optimization and relational data analysis."
  },
  "SQL-169": {
    "code_id": "SQL-169",
    "levelNumber": 200,
    "title": "Leap year check",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees hired this year' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees hired this year is essential for database query optimization and relational data analysis."
  },
  "SQL-170": {
    "code_id": "SQL-170",
    "levelNumber": 201,
    "title": "Monthly report",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Orders this month' using SQLite execution planner.",
    "keyTakeaway": "Mastering Orders this month is essential for database query optimization and relational data analysis."
  },
  "SQL-171": {
    "code_id": "SQL-171",
    "levelNumber": 202,
    "title": "Find duplicates",
    "optimalCode": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sales last 30 days' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sales last 30 days is essential for database query optimization and relational data analysis."
  },
  "SQL-172": {
    "code_id": "SQL-172",
    "levelNumber": 203,
    "title": "Remove duplicates",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Weekend records' using SQLite execution planner.",
    "keyTakeaway": "Mastering Weekend records is essential for database query optimization and relational data analysis."
  },
  "SQL-174": {
    "code_id": "SQL-174",
    "levelNumber": 204,
    "title": "Duplicate names",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Leap year check' using SQLite execution planner.",
    "keyTakeaway": "Mastering Leap year check is essential for database query optimization and relational data analysis."
  },
  "SQL-175": {
    "code_id": "SQL-175",
    "levelNumber": 205,
    "title": "Duplicate phone numbers",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Monthly report' using SQLite execution planner.",
    "keyTakeaway": "Mastering Monthly report is essential for database query optimization and relational data analysis."
  },
  "SQL-176": {
    "code_id": "SQL-176",
    "levelNumber": 206,
    "title": "Duplicate salaries",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find duplicates' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find duplicates is essential for database query optimization and relational data analysis."
  },
  "SQL-177": {
    "code_id": "SQL-177",
    "levelNumber": 207,
    "title": "Keep first duplicate",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Remove duplicates' using SQLite execution planner.",
    "keyTakeaway": "Mastering Remove duplicates is essential for database query optimization and relational data analysis."
  },
  "SQL-178": {
    "code_id": "SQL-178",
    "levelNumber": 208,
    "title": "Keep latest duplicate",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate emails' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate emails is essential for database query optimization and relational data analysis."
  },
  "SQL-179": {
    "code_id": "SQL-179",
    "levelNumber": 209,
    "title": "Delete duplicate rows",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate names is essential for database query optimization and relational data analysis."
  },
  "SQL-180": {
    "code_id": "SQL-180",
    "levelNumber": 210,
    "title": "Count duplicate groups",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate phone numbers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate phone numbers is essential for database query optimization and relational data analysis."
  },
  "SQL-183": {
    "code_id": "SQL-183",
    "levelNumber": 211,
    "title": "Top 3 salaries per department",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Duplicate salaries' using SQLite execution planner.",
    "keyTakeaway": "Mastering Duplicate salaries is essential for database query optimization and relational data analysis."
  },
  "SQL-184": {
    "code_id": "SQL-184",
    "levelNumber": 212,
    "title": "Consecutive login days",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Keep first duplicate' using SQLite execution planner.",
    "keyTakeaway": "Mastering Keep first duplicate is essential for database query optimization and relational data analysis."
  },
  "SQL-186": {
    "code_id": "SQL-186",
    "levelNumber": 213,
    "title": "Gap and island problems",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Keep latest duplicate' using SQLite execution planner.",
    "keyTakeaway": "Mastering Keep latest duplicate is essential for database query optimization and relational data analysis."
  },
  "SQL-187": {
    "code_id": "SQL-187",
    "levelNumber": 214,
    "title": "Median salary",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Delete duplicate rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Delete duplicate rows is essential for database query optimization and relational data analysis."
  },
  "SQL-188": {
    "code_id": "SQL-188",
    "levelNumber": 215,
    "title": "Pivot table",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count duplicate groups' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count duplicate groups is essential for database query optimization and relational data analysis."
  },
  "SQL-189": {
    "code_id": "SQL-189",
    "levelNumber": 216,
    "title": "Unpivot table",
    "optimalCode": "SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Second highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Second highest salary is essential for database query optimization and relational data analysis."
  },
  "SQL-191": {
    "code_id": "SQL-191",
    "levelNumber": 217,
    "title": "Running balance",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Nth highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Nth highest salary is essential for database query optimization and relational data analysis."
  },
  "SQL-192": {
    "code_id": "SQL-192",
    "levelNumber": 218,
    "title": "Daily active users",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Top 3 salaries per department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Top 3 salaries per department is essential for database query optimization and relational data analysis."
  },
  "SQL-193": {
    "code_id": "SQL-193",
    "levelNumber": 219,
    "title": "Monthly active users",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Consecutive login days' using SQLite execution planner.",
    "keyTakeaway": "Mastering Consecutive login days is essential for database query optimization and relational data analysis."
  },
  "SQL-194": {
    "code_id": "SQL-194",
    "levelNumber": 220,
    "title": "Churn customers",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Consecutive numbers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Consecutive numbers is essential for database query optimization and relational data analysis."
  },
  "SQL-195": {
    "code_id": "SQL-195",
    "levelNumber": 221,
    "title": "Repeat customers",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Gap and island problems' using SQLite execution planner.",
    "keyTakeaway": "Mastering Gap and island problems is essential for database query optimization and relational data analysis."
  },
  "SQL-196": {
    "code_id": "SQL-196",
    "levelNumber": 222,
    "title": "First purchase",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Median salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Median salary is essential for database query optimization and relational data analysis."
  },
  "SQL-197": {
    "code_id": "SQL-197",
    "levelNumber": 223,
    "title": "Last purchase",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Pivot table' using SQLite execution planner.",
    "keyTakeaway": "Mastering Pivot table is essential for database query optimization and relational data analysis."
  },
  "SQL-198": {
    "code_id": "SQL-198",
    "levelNumber": 224,
    "title": "Most expensive product",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Unpivot table' using SQLite execution planner.",
    "keyTakeaway": "Mastering Unpivot table is essential for database query optimization and relational data analysis."
  },
  "SQL-199": {
    "code_id": "SQL-199",
    "levelNumber": 225,
    "title": "Least expensive product",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee hierarchy is essential for database query optimization and relational data analysis."
  },
  "SQL-200": {
    "code_id": "SQL-200",
    "levelNumber": 226,
    "title": "Product never sold",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Running balance' using SQLite execution planner.",
    "keyTakeaway": "Mastering Running balance is essential for database query optimization and relational data analysis."
  },
  "SQL-201": {
    "code_id": "SQL-201",
    "levelNumber": 227,
    "title": "Customer lifetime value",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Daily active users' using SQLite execution planner.",
    "keyTakeaway": "Mastering Daily active users is essential for database query optimization and relational data analysis."
  },
  "SQL-202": {
    "code_id": "SQL-202",
    "levelNumber": 228,
    "title": "Revenue by month",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Monthly active users' using SQLite execution planner.",
    "keyTakeaway": "Mastering Monthly active users is essential for database query optimization and relational data analysis."
  },
  "SQL-203": {
    "code_id": "SQL-203",
    "levelNumber": 229,
    "title": "Rolling average",
    "optimalCode": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Churn customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Churn customers is essential for database query optimization and relational data analysis."
  },
  "SQL-204": {
    "code_id": "SQL-204",
    "levelNumber": 230,
    "title": "Year-over-year growth",
    "optimalCode": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Repeat customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Repeat customers is essential for database query optimization and relational data analysis."
  },
  "SQL-205": {
    "code_id": "SQL-205",
    "levelNumber": 231,
    "title": "Month-over-month growth",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'First purchase' using SQLite execution planner.",
    "keyTakeaway": "Mastering First purchase is essential for database query optimization and relational data analysis."
  },
  "SQL-206": {
    "code_id": "SQL-206",
    "levelNumber": 232,
    "title": "Top-selling product",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Last purchase' using SQLite execution planner.",
    "keyTakeaway": "Mastering Last purchase is essential for database query optimization and relational data analysis."
  },
  "SQL-207": {
    "code_id": "SQL-207",
    "levelNumber": 233,
    "title": "Least-selling product",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Most expensive product' using SQLite execution planner.",
    "keyTakeaway": "Mastering Most expensive product is essential for database query optimization and relational data analysis."
  },
  "SQL-208": {
    "code_id": "SQL-208",
    "levelNumber": 234,
    "title": "Market share calculation",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Least expensive product' using SQLite execution planner.",
    "keyTakeaway": "Mastering Least expensive product is essential for database query optimization and relational data analysis."
  },
  "SQL-209": {
    "code_id": "SQL-209",
    "levelNumber": 235,
    "title": "Percent contribution",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Product never sold' using SQLite execution planner.",
    "keyTakeaway": "Mastering Product never sold is essential for database query optimization and relational data analysis."
  },
  "SQL-210": {
    "code_id": "SQL-210",
    "levelNumber": 236,
    "title": "Cohort analysis",
    "optimalCode": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customer lifetime value' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customer lifetime value is essential for database query optimization and relational data analysis."
  },
  "SQL-211": {
    "code_id": "SQL-211",
    "levelNumber": 237,
    "title": "Retention analysis",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Revenue by month' using SQLite execution planner.",
    "keyTakeaway": "Mastering Revenue by month is essential for database query optimization and relational data analysis."
  },
  "SQL-212": {
    "code_id": "SQL-212",
    "levelNumber": 238,
    "title": "Dense ranking challenge",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Rolling average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Rolling average is essential for database query optimization and relational data analysis."
  },
  "SQL-213": {
    "code_id": "SQL-213",
    "levelNumber": 239,
    "title": "Recursive hierarchy",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Year-over-year growth' using SQLite execution planner.",
    "keyTakeaway": "Mastering Year-over-year growth is essential for database query optimization and relational data analysis."
  },
  "SQL-214": {
    "code_id": "SQL-214",
    "levelNumber": 240,
    "title": "Sessionization problem",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Month-over-month growth' using SQLite execution planner.",
    "keyTakeaway": "Mastering Month-over-month growth is essential for database query optimization and relational data analysis."
  },
  "SQL-215": {
    "code_id": "SQL-215",
    "levelNumber": 241,
    "title": "Fraud detection using SQL",
    "optimalCode": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Top-selling product' using SQLite execution planner.",
    "keyTakeaway": "Mastering Top-selling product is essential for database query optimization and relational data analysis."
  },
  "SQL-C-NEW1": {
    "code_id": "SQL-C-NEW1",
    "levelNumber": 242,
    "title": "Swap Salary",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Least-selling product' using SQLite execution planner.",
    "keyTakeaway": "Mastering Least-selling product is essential for database query optimization and relational data analysis."
  },
  "SQL-C-NEW2": {
    "code_id": "SQL-C-NEW2",
    "levelNumber": 243,
    "title": "Find Total Time Spent by the User",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Market share calculation' using SQLite execution planner.",
    "keyTakeaway": "Mastering Market share calculation is essential for database query optimization and relational data analysis."
  },
  "SQL-C-NEW3": {
    "code_id": "SQL-C-NEW3",
    "levelNumber": 244,
    "title": "Count of Matches in Tournament",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Percent contribution' using SQLite execution planner.",
    "keyTakeaway": "Mastering Percent contribution is essential for database query optimization and relational data analysis."
  },
  "SQL-C-NEW4": {
    "code_id": "SQL-C-NEW4",
    "levelNumber": 245,
    "title": "Highest Salaries Difference",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Cohort analysis' using SQLite execution planner.",
    "keyTakeaway": "Mastering Cohort analysis is essential for database query optimization and relational data analysis."
  },
  "SQL-A-NEW1": {
    "code_id": "SQL-A-NEW1",
    "levelNumber": 246,
    "title": "Adjust Employee Salary",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Retention analysis' using SQLite execution planner.",
    "keyTakeaway": "Mastering Retention analysis is essential for database query optimization and relational data analysis."
  },
  "SQL-A-NEW2": {
    "code_id": "SQL-A-NEW2",
    "levelNumber": 247,
    "title": "Find Latest Login Date",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Dense ranking challenge' using SQLite execution planner.",
    "keyTakeaway": "Mastering Dense ranking challenge is essential for database query optimization and relational data analysis."
  },
  "SQL-A-NEW3": {
    "code_id": "SQL-A-NEW3",
    "levelNumber": 248,
    "title": "Career Level Classification",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Recursive hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Recursive hierarchy is essential for database query optimization and relational data analysis."
  },
  "SQL-A-NEW4": {
    "code_id": "SQL-A-NEW4",
    "levelNumber": 249,
    "title": "The Airport With the Highest Traffic",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sessionization problem' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sessionization problem is essential for database query optimization and relational data analysis."
  },
  "001": {
    "code_id": "001",
    "levelNumber": 250,
    "title": "Combine Two Tables",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Fraud detection using SQL' using SQLite execution planner.",
    "keyTakeaway": "Mastering Fraud detection using SQL is essential for database query optimization and relational data analysis."
  },
  "002": {
    "code_id": "002",
    "levelNumber": 251,
    "title": "Employees Earning More Than Their Managers",
    "optimalCode": "SELECT employee_id, first_name, last_name, salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Select specific columns' using SQLite execution planner.",
    "keyTakeaway": "Mastering Select specific columns is essential for database query optimization and relational data analysis."
  },
  "003": {
    "code_id": "003",
    "levelNumber": 252,
    "title": "Duplicate Emails",
    "optimalCode": "SELECT * FROM employees WHERE salary > 80000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Filter rows using WHERE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Filter rows using WHERE is essential for database query optimization and relational data analysis."
  },
  "004": {
    "code_id": "004",
    "levelNumber": 253,
    "title": "Customers Who Never Order",
    "optimalCode": "SELECT * FROM employees WHERE salary > 70000 AND department_id = 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use multiple conditions with AND' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use multiple conditions with AND is essential for database query optimization and relational data analysis."
  },
  "005": {
    "code_id": "005",
    "levelNumber": 254,
    "title": "Delete Duplicate Emails",
    "optimalCode": "SELECT * FROM employees WHERE department_id = 1 OR salary > 100000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use multiple conditions with OR' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use multiple conditions with OR is essential for database query optimization and relational data analysis."
  },
  "006": {
    "code_id": "006",
    "levelNumber": 255,
    "title": "Rising Temperature",
    "optimalCode": "SELECT * FROM employees WHERE NOT (department_id = 1);",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use NOT' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use NOT is essential for database query optimization and relational data analysis."
  },
  "007": {
    "code_id": "007",
    "levelNumber": 256,
    "title": "Game Play Analysis I",
    "optimalCode": "SELECT * FROM employees WHERE salary BETWEEN 60000 AND 90000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use BETWEEN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use BETWEEN is essential for database query optimization and relational data analysis."
  },
  "008": {
    "code_id": "008",
    "levelNumber": 257,
    "title": "Game Play Analysis II",
    "optimalCode": "SELECT * FROM employees WHERE department_id IN (1, 2, 3);",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use IN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use IN is essential for database query optimization and relational data analysis."
  },
  "009": {
    "code_id": "009",
    "levelNumber": 258,
    "title": "Employee Bonus",
    "optimalCode": "SELECT * FROM employees WHERE department_id NOT IN (1, 2);",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use NOT IN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use NOT IN is essential for database query optimization and relational data analysis."
  },
  "010": {
    "code_id": "010",
    "levelNumber": 259,
    "title": "Find Customer Referee",
    "optimalCode": "SELECT * FROM employees WHERE first_name LIKE 'J%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use LIKE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use LIKE is essential for database query optimization and relational data analysis."
  },
  "011": {
    "code_id": "011",
    "levelNumber": 260,
    "title": "Customer Placing the Largest Number of Orders",
    "optimalCode": "SELECT * FROM employees WHERE first_name LIKE 'A%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find records starting with a letter' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find records starting with a letter is essential for database query optimization and relational data analysis."
  },
  "012": {
    "code_id": "012",
    "levelNumber": 261,
    "title": "Big Countries",
    "optimalCode": "SELECT * FROM employees WHERE last_name LIKE '%n';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find records ending with a letter' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find records ending with a letter is essential for database query optimization and relational data analysis."
  },
  "013": {
    "code_id": "013",
    "levelNumber": 262,
    "title": "Classes With at Least 5 Students",
    "optimalCode": "SELECT * FROM products WHERE product_name LIKE '%Laptop%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find records containing a word' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find records containing a word is essential for database query optimization and relational data analysis."
  },
  "014": {
    "code_id": "014",
    "levelNumber": 263,
    "title": "Friend Requests I: Overall Acceptance Rate",
    "optimalCode": "SELECT * FROM employees WHERE manager_id IS NULL;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use IS NULL' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use IS NULL is essential for database query optimization and relational data analysis."
  },
  "015": {
    "code_id": "015",
    "levelNumber": 264,
    "title": "Consecutive Available Seats",
    "optimalCode": "SELECT * FROM employees WHERE manager_id IS NOT NULL;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Use IS NOT NULL' using SQLite execution planner.",
    "keyTakeaway": "Mastering Use IS NOT NULL is essential for database query optimization and relational data analysis."
  },
  "016": {
    "code_id": "016",
    "levelNumber": 265,
    "title": "Sales Person",
    "optimalCode": "SELECT * FROM employees ORDER BY salary ASC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sort using ORDER BY ASC' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sort using ORDER BY ASC is essential for database query optimization and relational data analysis."
  },
  "017": {
    "code_id": "017",
    "levelNumber": 266,
    "title": "Triangle Judgement",
    "optimalCode": "SELECT * FROM employees ORDER BY salary DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sort using ORDER BY DESC' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sort using ORDER BY DESC is essential for database query optimization and relational data analysis."
  },
  "018": {
    "code_id": "018",
    "levelNumber": 267,
    "title": "Shortest Distance in a Line",
    "optimalCode": "SELECT * FROM employees ORDER BY salary DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Retrieve top N records (LIMIT/TOP)' using SQLite execution planner.",
    "keyTakeaway": "Mastering Retrieve top N records (LIMIT/TOP) is essential for database query optimization and relational data analysis."
  },
  "019": {
    "code_id": "019",
    "levelNumber": 268,
    "title": "Not Boring Movies",
    "optimalCode": "SELECT DISTINCT job_title FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Remove duplicates using DISTINCT' using SQLite execution planner.",
    "keyTakeaway": "Mastering Remove duplicates using DISTINCT is essential for database query optimization and relational data analysis."
  },
  "020": {
    "code_id": "020",
    "levelNumber": 269,
    "title": "Swap Sex of Employees",
    "optimalCode": "SELECT first_name AS name, salary AS annual_pay FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Alias columns using AS' using SQLite execution planner.",
    "keyTakeaway": "Mastering Alias columns using AS is essential for database query optimization and relational data analysis."
  },
  "021": {
    "code_id": "021",
    "levelNumber": 270,
    "title": "Actors and Directors Who Cooperated At Least Three Times",
    "optimalCode": "SELECT COUNT(*) AS total_employees FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count total rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count total rows is essential for database query optimization and relational data analysis."
  },
  "022": {
    "code_id": "022",
    "levelNumber": 271,
    "title": "Product Sales Analysis I",
    "optimalCode": "SELECT COUNT(DISTINCT department_id) AS total_depts FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count distinct values' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count distinct values is essential for database query optimization and relational data analysis."
  },
  "023": {
    "code_id": "023",
    "levelNumber": 272,
    "title": "Product Sales Analysis II",
    "optimalCode": "SELECT MAX(salary) AS max_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find maximum salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find maximum salary is essential for database query optimization and relational data analysis."
  },
  "024": {
    "code_id": "024",
    "levelNumber": 273,
    "title": "Project Employees I",
    "optimalCode": "SELECT MIN(salary) AS min_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find minimum salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find minimum salary is essential for database query optimization and relational data analysis."
  },
  "025": {
    "code_id": "025",
    "levelNumber": 274,
    "title": "Project Employees II",
    "optimalCode": "SELECT AVG(salary) AS avg_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find average salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find average salary is essential for database query optimization and relational data analysis."
  },
  "026": {
    "code_id": "026",
    "levelNumber": 275,
    "title": "Sales Analysis I",
    "optimalCode": "SELECT SUM(salary) AS total_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find total salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find total salary is essential for database query optimization and relational data analysis."
  },
  "027": {
    "code_id": "027",
    "levelNumber": 276,
    "title": "Sales Analysis II",
    "optimalCode": "SELECT AVG(marks) AS avg_marks FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find average marks' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find average marks is essential for database query optimization and relational data analysis."
  },
  "028": {
    "code_id": "028",
    "levelNumber": 277,
    "title": "Sales Analysis III",
    "optimalCode": "SELECT SUM(sale_amount) AS total_sales FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sum sales' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sum sales is essential for database query optimization and relational data analysis."
  },
  "029": {
    "code_id": "029",
    "levelNumber": 278,
    "title": "Reported Posts",
    "optimalCode": "SELECT department_id, COUNT(*) AS emp_count FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count employees in each department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count employees in each department is essential for database query optimization and relational data analysis."
  },
  "030": {
    "code_id": "030",
    "levelNumber": 279,
    "title": "User Activity for the Past 30 Days I",
    "optimalCode": "SELECT department_id, MAX(salary) AS max_salary FROM employees GROUP BY department_id ORDER BY max_salary DESC LIMIT 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find department with highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find department with highest salary is essential for database query optimization and relational data analysis."
  },
  "031": {
    "code_id": "031",
    "levelNumber": 280,
    "title": "User Activity for the Past 30 Days II",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find department with lowest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find department with lowest salary is essential for database query optimization and relational data analysis."
  },
  "032": {
    "code_id": "032",
    "levelNumber": 281,
    "title": "Article Views I",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Average salary by department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Average salary by department is essential for database query optimization and relational data analysis."
  },
  "033": {
    "code_id": "033",
    "levelNumber": 282,
    "title": "Immediate Food Delivery I",
    "optimalCode": "SELECT class, AVG(marks) AS avg_mark FROM students GROUP BY class;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Maximum marks by class' using SQLite execution planner.",
    "keyTakeaway": "Mastering Maximum marks by class is essential for database query optimization and relational data analysis."
  },
  "034": {
    "code_id": "034",
    "levelNumber": 283,
    "title": "Reformat Department Table",
    "optimalCode": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Minimum sales by region' using SQLite execution planner.",
    "keyTakeaway": "Mastering Minimum sales by region is essential for database query optimization and relational data analysis."
  },
  "035": {
    "code_id": "035",
    "levelNumber": 284,
    "title": "Queries Quality and Percentage",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Total revenue by month' using SQLite execution planner.",
    "keyTakeaway": "Mastering Total revenue by month is essential for database query optimization and relational data analysis."
  },
  "036": {
    "code_id": "036",
    "levelNumber": 285,
    "title": "Number of Comments per Post",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Group employees by department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Group employees by department is essential for database query optimization and relational data analysis."
  },
  "037": {
    "code_id": "037",
    "levelNumber": 286,
    "title": "Average Selling Price",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Group students by class' using SQLite execution planner.",
    "keyTakeaway": "Mastering Group students by class is essential for database query optimization and relational data analysis."
  },
  "038": {
    "code_id": "038",
    "levelNumber": 287,
    "title": "Students and Examinations",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count employees per department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count employees per department is essential for database query optimization and relational data analysis."
  },
  "039": {
    "code_id": "039",
    "levelNumber": 288,
    "title": "Weather Type in Each Country",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Departments having more than 5 employees' using SQLite execution planner.",
    "keyTakeaway": "Mastering Departments having more than 5 employees is essential for database query optimization and relational data analysis."
  },
  "040": {
    "code_id": "040",
    "levelNumber": 289,
    "title": "Find the Team Size",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Departments with average salary > 50,000' using SQLite execution planner.",
    "keyTakeaway": "Mastering Departments with average salary > 50,000 is essential for database query optimization and relational data analysis."
  },
  "041": {
    "code_id": "041",
    "levelNumber": 290,
    "title": "Ads Performance",
    "optimalCode": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Cities having more than 10 customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Cities having more than 10 customers is essential for database query optimization and relational data analysis."
  },
  "042": {
    "code_id": "042",
    "levelNumber": 291,
    "title": "List the Products Ordered in a Period",
    "optimalCode": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Product categories with highest sales' using SQLite execution planner.",
    "keyTakeaway": "Mastering Product categories with highest sales is essential for database query optimization and relational data analysis."
  },
  "043": {
    "code_id": "043",
    "levelNumber": 292,
    "title": "Students With Invalid Departments",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers with more than 5 orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers with more than 5 orders is essential for database query optimization and relational data analysis."
  },
  "044": {
    "code_id": "044",
    "levelNumber": 293,
    "title": "Replace Employee ID With The Unique Identifier",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Branches with highest profit' using SQLite execution planner.",
    "keyTakeaway": "Mastering Branches with highest profit is essential for database query optimization and relational data analysis."
  },
  "045": {
    "code_id": "045",
    "levelNumber": 294,
    "title": "Top Travellers",
    "optimalCode": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'States with highest customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering States with highest customers is essential for database query optimization and relational data analysis."
  },
  "046": {
    "code_id": "046",
    "levelNumber": 295,
    "title": "NPV Queries",
    "optimalCode": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Monthly sales summary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Monthly sales summary is essential for database query optimization and relational data analysis."
  },
  "047": {
    "code_id": "047",
    "levelNumber": 296,
    "title": "Create a Session Bar Chart",
    "optimalCode": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Yearly sales summary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Yearly sales summary is essential for database query optimization and relational data analysis."
  },
  "048": {
    "code_id": "048",
    "levelNumber": 297,
    "title": "Group Sold Products By The Date",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Products sold more than 100 times' using SQLite execution planner.",
    "keyTakeaway": "Mastering Products sold more than 100 times is essential for database query optimization and relational data analysis."
  },
  "049": {
    "code_id": "049",
    "levelNumber": 298,
    "title": "Friendly Movies Streamed Last Month",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Average age by city' using SQLite execution planner.",
    "keyTakeaway": "Mastering Average age by city is essential for database query optimization and relational data analysis."
  },
  "050": {
    "code_id": "050",
    "levelNumber": 299,
    "title": "Customer Order Frequency",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Highest salary department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Highest salary department is essential for database query optimization and relational data analysis."
  },
  "051": {
    "code_id": "051",
    "levelNumber": 300,
    "title": "Find Users With Valid E-Mails",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Lowest salary department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Lowest salary department is essential for database query optimization and relational data analysis."
  },
  "052": {
    "code_id": "052",
    "levelNumber": 301,
    "title": "Patients With a Condition",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Average marks above 80' using SQLite execution planner.",
    "keyTakeaway": "Mastering Average marks above 80 is essential for database query optimization and relational data analysis."
  },
  "053": {
    "code_id": "053",
    "levelNumber": 302,
    "title": "Fix Product Name Format",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Groups using multiple columns' using SQLite execution planner.",
    "keyTakeaway": "Mastering Groups using multiple columns is essential for database query optimization and relational data analysis."
  },
  "054": {
    "code_id": "054",
    "levelNumber": 303,
    "title": "Unique Orders and Customers Per Month",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'HAVING with COUNT' using SQLite execution planner.",
    "keyTakeaway": "Mastering HAVING with COUNT is essential for database query optimization and relational data analysis."
  },
  "055": {
    "code_id": "055",
    "levelNumber": 304,
    "title": "Warehouse Manager",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'HAVING with SUM' using SQLite execution planner.",
    "keyTakeaway": "Mastering HAVING with SUM is essential for database query optimization and relational data analysis."
  },
  "056": {
    "code_id": "056",
    "levelNumber": 305,
    "title": "Customer Who Visited but Did Not Make Any Transactions",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Inner Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Inner Join is essential for database query optimization and relational data analysis."
  },
  "057": {
    "code_id": "057",
    "levelNumber": 306,
    "title": "Bank Account Summary II",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Left Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Left Join is essential for database query optimization and relational data analysis."
  },
  "058": {
    "code_id": "058",
    "levelNumber": 307,
    "title": "Sellers With No Sales",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Right Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Right Join is essential for database query optimization and relational data analysis."
  },
  "059": {
    "code_id": "059",
    "levelNumber": 308,
    "title": "All Valid Triplets That Can Represent a Country",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Full Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Full Join is essential for database query optimization and relational data analysis."
  },
  "060": {
    "code_id": "060",
    "levelNumber": 309,
    "title": "Percentage of Users Attended a Contest",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Self Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Self Join is essential for database query optimization and relational data analysis."
  },
  "061": {
    "code_id": "061",
    "levelNumber": 310,
    "title": "Average Time of Process per Machine",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Cross Join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Cross Join is essential for database query optimization and relational data analysis."
  },
  "062": {
    "code_id": "062",
    "levelNumber": 311,
    "title": "Fix Names in a Table",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees with department names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees with department names is essential for database query optimization and relational data analysis."
  },
  "063": {
    "code_id": "063",
    "levelNumber": 312,
    "title": "Product's Worth Over Invoices",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers with orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers with orders is essential for database query optimization and relational data analysis."
  },
  "064": {
    "code_id": "064",
    "levelNumber": 313,
    "title": "Invalid Tweets",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers without orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers without orders is essential for database query optimization and relational data analysis."
  },
  "065": {
    "code_id": "065",
    "levelNumber": 314,
    "title": "Daily Leads and Partners",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Orders without customers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Orders without customers is essential for database query optimization and relational data analysis."
  },
  "066": {
    "code_id": "066",
    "levelNumber": 315,
    "title": "Count Apples and Oranges",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Students with course names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Students with course names is essential for database query optimization and relational data analysis."
  },
  "067": {
    "code_id": "067",
    "levelNumber": 316,
    "title": "Find Followers Count",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees without managers' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees without managers is essential for database query optimization and relational data analysis."
  },
  "068": {
    "code_id": "068",
    "levelNumber": 317,
    "title": "The Number of Employees Which Report to Each Employee",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Manager and employee names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Manager and employee names is essential for database query optimization and relational data analysis."
  },
  "069": {
    "code_id": "069",
    "levelNumber": 318,
    "title": "Find Total Time Spent by Each Employee",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Multiple table joins' using SQLite execution planner.",
    "keyTakeaway": "Mastering Multiple table joins is essential for database query optimization and relational data analysis."
  },
  "070": {
    "code_id": "070",
    "levelNumber": 319,
    "title": "Recyclable and Low Fat Products",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join three tables' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join three tables is essential for database query optimization and relational data analysis."
  },
  "071": {
    "code_id": "071",
    "levelNumber": 320,
    "title": "Product's Price for Each Store",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join four tables' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join four tables is essential for database query optimization and relational data analysis."
  },
  "072": {
    "code_id": "072",
    "levelNumber": 321,
    "title": "Primary Department for Each Employee",
    "optimalCode": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Highest order per customer' using SQLite execution planner.",
    "keyTakeaway": "Mastering Highest order per customer is essential for database query optimization and relational data analysis."
  },
  "073": {
    "code_id": "073",
    "levelNumber": 322,
    "title": "Rearrange Products Table",
    "optimalCode": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Total orders per customer' using SQLite execution planner.",
    "keyTakeaway": "Mastering Total orders per customer is essential for database query optimization and relational data analysis."
  },
  "074": {
    "code_id": "074",
    "levelNumber": 323,
    "title": "Find Customers With Positive Revenue this Year",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee and project details' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee and project details is essential for database query optimization and relational data analysis."
  },
  "075": {
    "code_id": "075",
    "levelNumber": 324,
    "title": "Convert Date Format",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Product and supplier details' using SQLite execution planner.",
    "keyTakeaway": "Mastering Product and supplier details is essential for database query optimization and relational data analysis."
  },
  "076": {
    "code_id": "076",
    "levelNumber": 325,
    "title": "Calculate Special Bonus",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customer-city join' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customer-city join is essential for database query optimization and relational data analysis."
  },
  "077": {
    "code_id": "077",
    "levelNumber": 326,
    "title": "The Latest Login in 2020",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Find unmatched rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Find unmatched rows is essential for database query optimization and relational data analysis."
  },
  "078": {
    "code_id": "078",
    "levelNumber": 327,
    "title": "Employees Whose Manager Left the Company",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Sales with product names' using SQLite execution planner.",
    "keyTakeaway": "Mastering Sales with product names is essential for database query optimization and relational data analysis."
  },
  "079": {
    "code_id": "079",
    "levelNumber": 328,
    "title": "Low-Quality Problems",
    "optimalCode": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Student-course enrollment' using SQLite execution planner.",
    "keyTakeaway": "Mastering Student-course enrollment is essential for database query optimization and relational data analysis."
  },
  "080": {
    "code_id": "080",
    "levelNumber": 329,
    "title": "Accepted Candidates From the Interviews",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employee-manager hierarchy' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employee-manager hierarchy is essential for database query optimization and relational data analysis."
  },
  "081": {
    "code_id": "081",
    "levelNumber": 330,
    "title": "The Number of Rich Customers",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Left join with WHERE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Left join with WHERE is essential for database query optimization and relational data analysis."
  },
  "082": {
    "code_id": "082",
    "levelNumber": 331,
    "title": "Number of Unique Subjects Taught by Each Teacher",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Right join with NULL' using SQLite execution planner.",
    "keyTakeaway": "Mastering Right join with NULL is essential for database query optimization and relational data analysis."
  },
  "083": {
    "code_id": "083",
    "levelNumber": 332,
    "title": "Sort the Olympic Table",
    "optimalCode": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with GROUP BY' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with GROUP BY is essential for database query optimization and relational data analysis."
  },
  "084": {
    "code_id": "084",
    "levelNumber": 333,
    "title": "Concatenate the Name and the Profession",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with HAVING' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with HAVING is essential for database query optimization and relational data analysis."
  },
  "085": {
    "code_id": "085",
    "levelNumber": 334,
    "title": "Find Latest Salaries",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with aggregate functions' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with aggregate functions is essential for database query optimization and relational data analysis."
  },
  "086": {
    "code_id": "086",
    "levelNumber": 335,
    "title": "Triangles",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with CASE' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with CASE is essential for database query optimization and relational data analysis."
  },
  "087": {
    "code_id": "087",
    "levelNumber": 336,
    "title": "The Number of Employees Who Direct Report to Each Director",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join with subquery' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join with subquery is essential for database query optimization and relational data analysis."
  },
  "088": {
    "code_id": "088",
    "levelNumber": 337,
    "title": "Customers Who Never Reordered",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Join using aliases' using SQLite execution planner.",
    "keyTakeaway": "Mastering Join using aliases is essential for database query optimization and relational data analysis."
  },
  "089": {
    "code_id": "089",
    "levelNumber": 338,
    "title": "Number of Comments per User",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Difference between INNER and LEFT JOIN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Difference between INNER and LEFT JOIN is essential for database query optimization and relational data analysis."
  },
  "090": {
    "code_id": "090",
    "levelNumber": 339,
    "title": "Average Selling Price by Category",
    "optimalCode": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Difference between LEFT and RIGHT JOIN' using SQLite execution planner.",
    "keyTakeaway": "Mastering Difference between LEFT and RIGHT JOIN is essential for database query optimization and relational data analysis."
  },
  "091": {
    "code_id": "091",
    "levelNumber": 340,
    "title": "Employees With Missing Information",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Salary above average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Salary above average is essential for database query optimization and relational data analysis."
  },
  "092": {
    "code_id": "092",
    "levelNumber": 341,
    "title": "Biggest Single Number",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Second highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Second highest salary is essential for database query optimization and relational data analysis."
  },
  "093": {
    "code_id": "093",
    "levelNumber": 342,
    "title": "Second Highest Salary",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Third highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Third highest salary is essential for database query optimization and relational data analysis."
  },
  "094": {
    "code_id": "094",
    "levelNumber": 343,
    "title": "Nth Highest Salary",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Nth highest salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Nth highest salary is essential for database query optimization and relational data analysis."
  },
  "095": {
    "code_id": "095",
    "levelNumber": 344,
    "title": "Rank Scores",
    "optimalCode": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees earning more than department average' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees earning more than department average is essential for database query optimization and relational data analysis."
  },
  "096": {
    "code_id": "096",
    "levelNumber": 345,
    "title": "Consecutive Numbers",
    "optimalCode": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Products above average price' using SQLite execution planner.",
    "keyTakeaway": "Mastering Products above average price is essential for database query optimization and relational data analysis."
  },
  "097": {
    "code_id": "097",
    "levelNumber": 346,
    "title": "Department Highest Salary",
    "optimalCode": "SELECT *, COUNT(*) AS count FROM orders GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Customers with maximum orders' using SQLite execution planner.",
    "keyTakeaway": "Mastering Customers with maximum orders is essential for database query optimization and relational data analysis."
  },
  "098": {
    "code_id": "098",
    "levelNumber": 347,
    "title": "Game Play Analysis III",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Employees in highest-paying department' using SQLite execution planner.",
    "keyTakeaway": "Mastering Employees in highest-paying department is essential for database query optimization and relational data analysis."
  },
  "099": {
    "code_id": "099",
    "levelNumber": 348,
    "title": "Game Play Analysis IV",
    "optimalCode": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Departments with highest average salary' using SQLite execution planner.",
    "keyTakeaway": "Mastering Departments with highest average salary is essential for database query optimization and relational data analysis."
  },
  "SQL-C-NEW5": {
    "code_id": "SQL-C-NEW5",
    "levelNumber": 500,
    "title": "Find Cutoff Score",
    "optimalCode": "SELECT COUNT(*) AS total_employees FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "explanation": "The query executes standard ANSI SQL operations for 'Count total rows' using SQLite execution planner.",
    "keyTakeaway": "Mastering Count total rows is essential for database query optimization and relational data analysis."
  }
};
