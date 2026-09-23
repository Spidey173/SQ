// Single Canonical Solution & Interview Breakdown for all 500 SQL Problems
// Keyed by both code_id (e.g. "Basics-001", "SQL-001", "001") and numeric problem ID

export interface ProblemSolution {
  code_id: string;
  numeric_id: number;
  title: string;
  code: string;
  timeComplexity: string;
  spaceComplexity: string;
  simplestExplanation: string;
  mentalModel: string;
  lineByLine: Array<{ line: string; explanation: string }>;
  beginnerTraps?: string[];
  keyTakeaway: string;
  interviewPros?: string[];
  interviewCons?: string[];
}

export const ALL_PROBLEM_SOLUTIONS: Record<string, ProblemSolution> = {
  "1": {
    "code_id": "Basics-001",
    "numeric_id": 1,
    "title": "Select All Columns from a Table",
    "code": "SELECT *\nFROM table_name;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "The SELECT statement is used to retrieve data from a database table. The asterisk (*) selects all columns, and FROM table_name specifies the source table.",
    "mentalModel": "table_name ──► Read every row ──► Read every column ──► Display result",
    "lineByLine": [
      {
        "line": "SELECT *",
        "explanation": "• SELECT tells the database that you want to retrieve data.\n• * (asterisk) means all columns.\nInstead of explicitly writing out every column name (column1, column2, column3, ...), you can simply write SELECT * because * automatically selects every column."
      },
      {
        "line": "FROM table_name;",
        "explanation": "FROM tells SQL where the data is stored. Here, table_name is the table name. SQL reads all data from this table."
      },
      {
        "line": "⚙️ SQL Execution Order",
        "explanation": "Although we write SELECT * FROM table_name;, SQL logically executes it in this order:\nStep 1: FROM table_name ── Locate the specified table.\nStep 2: SELECT * ── Retrieve every column from every row."
      },
      {
        "line": "🚀 Alternative Solutions",
        "explanation": "Method 1 (Recommended):\n```sql\nSELECT *\nFROM table_name;\n```\n\nMethod 2 (Explicit Column Names):\n```sql\nSELECT column1,\n       column2,\n       column3\nFROM table_name;\n```\n\nBoth queries return the exact same data."
      }
    ],
    "beginnerTraps": [
      "1. Forgetting the FROM clause: SELECT *; ❌ Error: SQL doesn't know which table to read.",
      "2. Incorrect table name: SELECT * FROM wrong_table_name; ❌ If the table name doesn't match your schema, this query will fail.",
      "3. Misspelling SQL keywords: SELET * FROM table_name; ❌ SELET is not a valid SQL keyword."
    ],
    "keyTakeaway": "SELECT retrieves data from a database, * selects all columns, and FROM specifies the target table. Without a WHERE clause, all rows are returned. SELECT * is great for learning and debugging, but selecting specific columns is preferred in production for better performance.",
    "interviewPros": [
      "What does SELECT do? It retrieves data from a database table.",
      "What does * mean? It represents all columns in the table.",
      "Does SELECT * return all rows? Yes, if there is no WHERE clause, SQL returns every row.",
      "Can SELECT * be used on any table? Yes, as long as the table exists in your schema and you have access permissions."
    ],
    "interviewCons": [
      "⚡ Performance Notes: SELECT * is easy to write and good for debugging, but in production it retrieves unnecessary columns, uses more memory, and increases network traffic.",
      "🎯 Real-World Use Cases: Viewing all table records, checking imported/migrated data, verifying database updates, exploring a new schema."
    ]
  },
  "2": {
    "code_id": "Basics-002",
    "numeric_id": 2,
    "title": "Select Specific Columns",
    "code": "SELECT employee_id,\n       first_name,\n       last_name,\n       job_title,\n       salary\nFROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Selects specific columns (employee_id, first_name, last_name, job_title, salary) from the employees table.",
    "mentalModel": "table_name ──► Read every row ──► Pick only requested columns ──► Display result\n\nUnlike SELECT *, SQL ignores every column that you didn't ask for.",
    "lineByLine": [
      {
        "line": "SELECT column1, column2, column3",
        "explanation": "• SELECT tells SQL that you want to retrieve data.\n• Instead of selecting every column (*), you explicitly specify which columns you need.\n• SQL reads only those columns and ignores the rest.\n• This improves readability and performance.\n\nInstead of writing:\n```sql\nSELECT *\nFROM table_name;\n```\nyou write:\n```sql\nSELECT column1,\n       column2,\n       column3\nFROM table_name;\n```\nwhen you don't need every column."
      },
      {
        "line": "FROM table_name;",
        "explanation": "FROM tells SQL where the data is stored.\n\ntable_name represents any table in your database.\n\nExamples:\n• FROM employees;\n• FROM students;\n• FROM customers;\n• FROM products;"
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Although we write:\n```sql\nSELECT column1,\n       column2,\n       column3\nFROM table_name;\n```\nSQL logically executes it in this order:\nStep 1: FROM table_name ── Locate the specified table.\nStep 2: Read every row.\nStep 3: Retrieve only: column1, column2, column3\nStep 4: Return the result."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended):\n```sql\nSELECT column1,\n       column2,\n       column3\nFROM table_name;\n```\n✔ Retrieves only required columns.\n✔ Faster.\n✔ Best practice.\n\nMethod 2:\n```sql\nSELECT *\nFROM table_name;\n```\nReturns the same rows but includes every column. Useful for debugging but not recommended if you only need a few columns."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nSELECT ──► Retrieve data\ncolumn1, column2 ──► Only required columns\nFROM ──► Source table\nResult ──► Only requested columns are returned\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column1,\n       column2,\n       column3\nFROM table_name;\n```\nProblem Solution:\n```sql\nSELECT employee_id,\n       first_name,\n       last_name,\n       job_title,\n       salary\nFROM employees;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting commas: SELECT column1 column2 column3 FROM table_name; ── Error: SQL expects commas between column names. (Correct: SELECT column1, column2, column3 FROM table_name;)",
      "❌ 2. Using a wrong column name: SELECT colum1 FROM table_name; ── Error: Unknown column because colum1 doesn't exist.",
      "❌ 3. Wrong table name: SELECT column1 FROM wrong_table; ── Error: Table doesn't exist.",
      "❌ 4. Forgetting FROM: SELECT column1, column2; ── Error: SQL doesn't know where to retrieve the data.",
      "❌ 5. Misspelling SELECT: SELET column1 FROM table_name; ── Error: SELET is not a valid SQL keyword."
    ],
    "keyTakeaway": "Specify only the columns you actually need. Retrieving fewer columns reduces memory usage, improves performance, minimizes network traffic, and makes queries easier to understand. In production systems, selecting specific columns is considered a best practice.",
    "interviewPros": [
      "Q1. Why should we avoid SELECT *? Because it retrieves unnecessary columns, increases network traffic, consumes more memory, and can reduce performance.",
      "Q2. Is selecting fewer columns faster? Yes. The database reads and transfers less data.",
      "Q3. Can columns be selected in any order? Yes (e.g. SELECT salary, first_name, employee_id FROM employees;). The output appears in the exact same order as specified in the query.",
      "Q4. Can we select just one column? Yes (e.g. SELECT salary FROM employees;).",
      "Q5. Does selecting fewer columns reduce database size? No. It only reduces the amount of data returned by the query."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between SELECT * and selecting specific columns?\n• Why is selecting specific columns considered a best practice?\n• Which query is more efficient? (SELECT * FROM employees; vs SELECT employee_id, first_name FROM employees;)\n• Does selecting fewer columns improve performance?\n• Can we change the order of columns in the output?",
      "⚡ Performance Notes:\n• ✅ Recommended: SELECT employee_id, first_name, last_name, job_title, salary FROM employees; (✔ Reads only required columns, ✔ Less memory usage, ✔ Less network traffic, ✔ Preferred in production)\n• Not Recommended: SELECT * FROM employees; (✔ Easy to write, ❌ Reads unnecessary columns, ❌ Transfers extra data, ❌ Slightly slower on large tables)",
      "🌍 Real-World Use Cases:\n• ✅ Employee Directory: Show only Employee Name, Designation, Department\n• ✅ Payroll System: Display only Employee ID, Name, Salary\n• ✅ Student Portal: Display only Student Name, Roll Number, Marks\n• ✅ Product Catalog: Display only Product Name, Price, Stock",
      "🎓 Company Interview Tip (Amazon, Microsoft, Google, Oracle, IBM): Why is SELECT * considered bad practice? 'Because it retrieves unnecessary columns, increases memory usage and network traffic, and can negatively affect performance. Selecting only the required columns is more efficient and improves readability.'"
    ]
  },
  "3": {
    "code_id": "Basics-003",
    "numeric_id": 3,
    "title": "Filter Rows Using WHERE",
    "code": "SELECT *\nFROM employees\nWHERE department_id = 101;",
    "timeComplexity": "O(N) (Without Index) / O(log N) (With Index)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Filters rows from the employees table to return only those matching department_id = 101.",
    "mentalModel": "table_name ──► Read every row ──► Check WHERE condition ──► Keep matching rows (TRUE) / Ignore (FALSE) ──► Display Result\n\nThink of the WHERE clause as a filter. Instead of displaying all 100 employees, SQL checks each row and returns only matching rows.",
    "lineByLine": [
      {
        "line": "SELECT *",
        "explanation": "• SELECT tells SQL to retrieve data.\n• * means return all columns.\n• You can also select specific columns instead of using * (e.g. SELECT employee_id, first_name, salary)."
      },
      {
        "line": "FROM table_name",
        "explanation": "FROM tells SQL which table to read.\nExamples:\n• FROM employees\n• FROM students\n• FROM products"
      },
      {
        "line": "WHERE condition;",
        "explanation": "WHERE filters rows. Only rows where the condition is TRUE are returned.\n\nGeneral Syntax: WHERE column_name operator value;\nExamples:\n• WHERE salary > 50000;\n• WHERE age >= 18;\n• WHERE city = 'Bangalore';\n• WHERE department_id = 101;\n\nCommon Comparison Operators:\n• = (Equal to: salary = 50000)\n• > (Greater than: salary > 50000)\n• < (Less than: salary < 50000)\n• >= (Greater than or Equal: age >= 18)\n• <= (Less than or Equal: marks <= 80)\n• <> or != (Not Equal: city <> 'Delhi')"
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Although we write:\n```sql\nSELECT *\nFROM table_name\nWHERE condition;\n```\nSQL logically executes it like this:\nStep 1: FROM table_name ── Locate the table.\nStep 2: Read every row.\nStep 3: WHERE condition ── Check each row against the condition.\nStep 4: Keep only matching rows.\nStep 5: SELECT * ── Return all columns of the remaining rows."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended):\n```sql\nSELECT *\nFROM table_name\nWHERE condition;\n```\n\nMethod 2 (Specific Columns):\n```sql\nSELECT column1,\n       column2\nFROM table_name\nWHERE condition;\n```\nRecommended when you only need a few columns.\nExample:\n```sql\nSELECT employee_id,\n       first_name,\n       salary\nFROM employees\nWHERE department_id = 101;\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nFROM ──► Choose table\n   ↓\nWHERE ──► Filter rows\n   ↓\nSELECT ──► Choose columns & return matching rows\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column1, column2\nFROM table_name\nWHERE condition;\n```\nProblem Solution:\n```sql\nSELECT *\nFROM employees\nWHERE department_id = 101;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting the WHERE keyword: SELECT * FROM employees department_id = 101; ── Error: SQL doesn't understand the condition.",
      "❌ 2. Using == instead of =: SELECT * FROM employees WHERE salary == 50000; ── Wrong in standard SQL (Use WHERE salary = 50000;).",
      "❌ 3. Forgetting Quotes for Strings: SELECT * FROM employees WHERE city = Bangalore; ── Error: SQL thinks Bangalore is a column name (Use WHERE city = 'Bangalore';).",
      "❌ 4. Wrong Column Name: SELECT * FROM employees WHERE salaries > 50000; ── Error: Unknown column salaries.",
      "❌ 5. Using = with NULL: WHERE manager_id = NULL; ── Incorrect (Use WHERE manager_id IS NULL;)."
    ],
    "keyTakeaway": "The WHERE clause filters rows before SQL returns the result. Only rows that satisfy the specified condition are included in the output. Without a WHERE clause, SQL returns every row in the table.",
    "interviewPros": [
      "Q1. What is the purpose of the WHERE clause? It filters rows based on a condition.",
      "Q2. Does WHERE filter rows or columns? Rows. SELECT controls columns, while WHERE controls rows.",
      "Q3. Can we use multiple conditions? Yes, using AND or OR operators.",
      "Q4. What happens if no row matches? SQL returns an empty result set (no error occurs).",
      "Q5. Can WHERE be used without SELECT? No. WHERE is part of a query that retrieves, updates, or deletes data."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between WHERE and HAVING?\n• Can WHERE use aggregate functions like SUM()?\n• Does WHERE execute before SELECT?\n• Can multiple conditions be used in WHERE?\n• What happens if no records match the condition?",
      "⚡ Performance Notes:\n• ✅ Recommended: SELECT * FROM employees WHERE department_id = 101; (✔ Returns only matching rows, ✔ Faster than retrieving the whole table, ✔ Even faster if department_id is indexed)\n• Less Efficient: SELECT * FROM employees; then filtering manually in app code (❌ More data transferred, ❌ Slower, ❌ Wastes memory)",
      "🌍 Real-World Use Cases:\n• ✅ Department Filter: WHERE department_id = 101\n• ✅ Price Filter: WHERE price < 1000\n• ✅ Student Pass Filter: WHERE marks >= 35\n• ✅ Order Date Filter: WHERE order_date = CURRENT_DATE",
      "🎓 Company Interview Tip (Amazon, Microsoft, Oracle, Infosys, TCS, Accenture): 'What is the difference between SELECT and WHERE?' ── SELECT decides which columns to display, while WHERE decides which rows to return.",
      "🔥 Pro Tip (Interview Execution Order): Which clause executes first: SELECT or WHERE? Logical execution order is FROM ➔ WHERE ➔ SELECT. Even though SELECT is written first, SQL finds the table, filters the rows, and then returns selected columns."
    ]
  },
  "4": {
    "code_id": "Basics-004",
    "numeric_id": 4,
    "title": "Use Multiple Conditions with AND",
    "code": "SELECT *\nFROM employees\nWHERE department_id = 101\nAND salary > 60000;",
    "timeComplexity": "O(N) (Without Index) / O(log N) (With Index)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "The AND operator combines multiple filtering criteria, requiring every condition to evaluate to TRUE before a row is included in the output.",
    "mentalModel": "table_name ──► Read every row ──► Check Checkpoint 1 (department_id = 101?) ──► Check Checkpoint 2 (salary > 60000?) ──► Keep only if BOTH TRUE ──► Display result",
    "lineByLine": [
      {
        "line": "SELECT *",
        "explanation": "Retrieves all columns from the table. You can also specify specific columns like SELECT employee_id, first_name, salary."
      },
      {
        "line": "FROM table_name",
        "explanation": "Specifies the table from which SQL retrieves data. Examples: FROM employees, FROM students, FROM products."
      },
      {
        "line": "WHERE department_id = 101",
        "explanation": "First checkpoint filter: evaluates if department_id equals 101."
      },
      {
        "line": "AND salary > 60000;",
        "explanation": "Second checkpoint filter: AND combines multiple conditions. Every condition connected with AND must be TRUE. If even one is FALSE, the row is discarded."
      },
      {
        "line": "📚 Understanding AND & Truth Table",
        "explanation": "SQL evaluates Question 1 (Is department_id = 101?) -> If YES -> Question 2 (Is salary > 60000?) -> If YES -> Return row.\n\nTruth Table:\n• TRUE + TRUE = ✅ Return Row\n• TRUE + FALSE = ❌ Ignore\n• FALSE + TRUE = ❌ Ignore\n• FALSE + FALSE = ❌ Ignore"
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees (Locate table)\nStep 2: Read every row\nStep 3: Evaluate department_id = 101\nStep 4: Evaluate salary > 60000\nStep 5: If both TRUE -> Return row, otherwise ignore."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended - All Columns):\n```sql\nSELECT *\nFROM employees\nWHERE department_id = 101\nAND salary > 60000;\n```\n\nMethod 2 (Specific Columns):\n```sql\nSELECT employee_id,\n       first_name,\n       salary\nFROM employees\nWHERE department_id = 101\nAND salary > 60000;\n```\nReturns only required columns, better for production systems."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nWHERE ──► First Condition ──► Second Condition ──► Both TRUE? ──► Yes: Return / No: Ignore\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column1,\n       column2\nFROM table_name\nWHERE condition1\nAND condition2;\n```\nProblem Solution:\n```sql\nSELECT *\nFROM employees\nWHERE department_id = 101\nAND salary > 60000;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting WHERE: SELECT * FROM employees AND salary > 60000; ── Error: AND cannot be used without a WHERE clause.",
      "❌ 2. Using Comma Instead of AND: WHERE department_id = 101, salary > 60000; ── Error: Conditions cannot be separated using commas.",
      "❌ 3. Misspelling AND: WHERE department_id = 101 AAD salary > 60000; ── Error: AAD is not a valid SQL keyword.",
      "❌ 4. Comparing Strings Without Quotes: WHERE city = Bangalore AND salary > 50000; ── Error: SQL treats Bangalore as a column (Use WHERE city = 'Bangalore').",
      "❌ 5. Expecting One Condition to be Enough: Assuming department_id = 101 is enough. With AND, every condition must be TRUE."
    ],
    "keyTakeaway": "The AND operator narrows your results by requiring every condition to be true. It is used when you want records that satisfy all specified conditions. The more AND conditions you add, the more specific your results become.",
    "interviewPros": [
      "Q1. What does AND do? It combines multiple conditions, every condition must evaluate to TRUE.",
      "Q2. What if one condition is FALSE? The row is not returned.",
      "Q3. Can we use three or more AND conditions? Yes (e.g. WHERE department_id = 101 AND salary > 60000 AND city = 'Bangalore').",
      "Q4. Is AND more restrictive than OR? Yes, AND returns fewer rows because every condition must be true.",
      "Q5. Can AND be combined with OR? Yes, usually using parentheses (e.g. WHERE department_id = 101 AND (salary > 60000 OR city = 'Bangalore'))."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between AND and OR?\n• Which operator returns fewer rows?\n• What is the truth table for AND?\n• Can AND work with LIKE, IN, BETWEEN, and IS NULL?\n• Why do we use parentheses with AND and OR?",
      "⚡ Performance Notes:\n• ✅ Recommended: SELECT employee_id, first_name, salary FROM employees WHERE department_id = 101 AND salary > 60000; (✔ Filters unnecessary rows, ✔ Returns less data, ✔ Performs even better when indexed)\n• Less Efficient: SELECT * FROM employees; then filtering manually in app code (❌ More data transferred, ❌ Slower, ❌ Wastes memory)",
      "🌍 Real-World Use Cases:\n• ✅ Department & Salary: WHERE department_id = 101 AND salary > 60000;\n• ✅ Student Merit: WHERE class = 10 AND marks > 90;\n• ✅ Product Inventory: WHERE stock > 0 AND price < 1000;\n• ✅ Customer Membership: WHERE city = 'Bangalore' AND membership = 'Premium';",
      "🎓 Company Interview Tip (Amazon, Microsoft, Google, Oracle, IBM, Infosys, TCS, Accenture): 'Which returns fewer rows: AND or OR?' ── AND usually returns fewer rows because every condition must be TRUE. OR returns more rows because only one condition needs to be TRUE.",
      "🔥 Pro Tip (Interview Execution Order): AND = ALL conditions must be TRUE. Think of AND as a series of locked doors—you only reach the result if you unlock every door. 🔐"
    ]
  },
  "5": {
    "code_id": "Basics-005",
    "numeric_id": 5,
    "title": "Use Multiple Conditions with OR",
    "code": "SELECT *\nFROM employees\nWHERE department_id = 101\nOR salary > 60000;",
    "timeComplexity": "O(N) (Without Index) / O(log N) (With Suitable Index - Approximate)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "The OR operator broadens your query results by returning rows that satisfy at least one of the given conditions. If either condition evaluates to TRUE, the row is included in the output.",
    "mentalModel": "table_name ──► Read every row ──► Check First Condition (department_id = 101?) ──► YES ──► Return Row\n                                                                          └──► NO ──► Check Second Condition (salary > 60000?) ──► TRUE: Return Row / FALSE: Ignore Row",
    "lineByLine": [
      {
        "line": "SELECT *",
        "explanation": "• Retrieves every column from the table.\n• You can also retrieve only required columns (e.g. SELECT employee_id, first_name, salary)."
      },
      {
        "line": "FROM table_name",
        "explanation": "Specifies which table SQL should read (e.g., FROM employees; FROM students; FROM customers;)."
      },
      {
        "line": "WHERE department_id = 101",
        "explanation": "Checks the first condition: filters for employees belonging to department 101."
      },
      {
        "line": "OR salary > 60000;",
        "explanation": "OR tells SQL: 'If any one condition is TRUE, return the row.' Unlike AND, OR does not require every condition to be true."
      },
      {
        "line": "📚 Understanding OR & Truth Table",
        "explanation": "SQL evaluation order:\nQuestion 1: Is department_id = 101? ── If YES: Return row immediately.\nQuestion 2 (if Question 1 was NO): Is salary > 60000? ── If YES: Return row. Otherwise: Ignore row.\n\nTruth Table:\n• TRUE + TRUE = ✅ Return\n• TRUE + FALSE = ✅ Return\n• FALSE + TRUE = ✅ Return\n• FALSE + FALSE = ❌ Ignore (Only rejected when both are FALSE)"
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Locate the table.\nStep 2: Read every row.\nStep 3: Evaluate department_id = 101.\nStep 4: If FALSE, evaluate salary > 60000.\nStep 5: If either condition is TRUE, return the row. Otherwise, ignore it."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended - All Columns):\n```sql\nSELECT *\nFROM employees\nWHERE department_id = 101\nOR salary > 60000;\n```\n\nMethod 2 (Specific Columns):\n```sql\nSELECT employee_id,\n       first_name,\n       salary\nFROM employees\nWHERE department_id = 101\nOR salary > 60000;\n```\nBetter when only a few columns are needed in production."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nWHERE ──► Condition 1 ──► TRUE? ──► Yes: Return Row\n                              └──► No ──► Condition 2 ──► TRUE? ──► Yes: Return / No: Ignore\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column1,\n       column2\nFROM table_name\nWHERE condition1\nOR condition2;\n```\n\nProblem Solution:\n```sql\nSELECT *\nFROM employees\nWHERE department_id = 101\nOR salary > 60000;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using AND instead of OR: SELECT * FROM employees WHERE department_id = 101 AND salary > 60000; ── This returns only employees satisfying both conditions. If you need either, use OR.",
      "❌ 2. Forgetting WHERE: SELECT * FROM employees OR salary > 60000; ── Error: OR cannot be used without WHERE.",
      "❌ 3. Using Comma: SELECT * FROM employees WHERE department_id = 101, salary > 60000; ── Error: Conditions cannot be separated with commas.",
      "❌ 4. Comparing Strings Without Quotes: WHERE city = Bangalore OR salary > 60000; ── Error: Strings must be enclosed in single quotes ('Bangalore').",
      "❌ 5. Forgetting Parentheses with Complex Queries: WHERE department_id = 101 OR salary > 60000 AND city = 'Bangalore'; ── AND has higher precedence. Use parentheses: WHERE department_id = 101 OR (salary > 60000 AND city = 'Bangalore');"
    ],
    "keyTakeaway": "The OR operator broadens your search by returning rows where at least one condition is true. It is useful when you want records that satisfy any one of multiple conditions.",
    "interviewPros": [
      "Q1. What does OR do? It combines multiple conditions. If any one condition is TRUE, the row is returned.",
      "Q2. Which returns more rows: AND or OR? OR returns more rows because only one condition needs to be TRUE.",
      "Q3. Can OR be used with three conditions? Yes (e.g. WHERE city = 'Bangalore' OR city = 'Mysore' OR city = 'Tumkur';).",
      "Q4. Can OR work with LIKE, BETWEEN, IN? Yes, OR can combine almost any SQL condition.",
      "Q5. Can OR and AND be used together? Yes, always use parentheses to avoid operator precedence ambiguity."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between AND and OR?\n• Which returns more rows?\n• Which operator is more restrictive?\n• What is operator precedence?\n• Why are parentheses important?",
      "⚡ Performance Notes:\n• ✅ Recommended: SELECT employee_id, first_name, salary FROM employees WHERE department_id = 101 OR salary > 60000; (✔ Returns only matching rows, ✔ Easy to understand)\n• Less Efficient: SELECT * FROM employees; then filtering in application code (❌ Transfers unnecessary data, ❌ More memory usage, ❌ Slower)",
      "🌍 Real-World Use Cases:\n• ✅ Employees from Department 101 or earning above ₹60,000: WHERE department_id = 101 OR salary > 60000;\n• ✅ Students who scored above 90 or belong to Sports quota;\n• ✅ Products costing below ₹500 or having more than 100 units in stock;\n• ✅ Customers from Bangalore or Chennai.",
      "🎓 Company Interview Tip: 'What is the difference between AND and OR?' ── Best answer: AND requires every condition to be TRUE; OR requires at least one condition to be TRUE.",
      "🔥 Pro Tip (Interview): An easy way to remember: AND = ALL conditions must be TRUE 🔒, OR = At least ONE condition must be TRUE 🚪. A common interview trick is asking which query returns more rows: the answer is almost always OR because it accepts rows satisfying either condition."
    ]
  },
  "6": {
    "code_id": "Basics-006",
    "numeric_id": 6,
    "title": "Use NOT",
    "code": "SELECT * FROM employees WHERE department_id != 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use NOT.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE department_id != 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "7": {
    "code_id": "Basics-007",
    "numeric_id": 7,
    "title": "Use BETWEEN",
    "code": "SELECT * FROM employees WHERE salary BETWEEN 60000 AND 90000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use BETWEEN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE salary BETWEEN 60000 AND 90000;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "8": {
    "code_id": "Basics-008",
    "numeric_id": 8,
    "title": "Use IN",
    "code": "SELECT * FROM employees WHERE department_id IN (1, 2, 3);",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use IN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE department_id IN (1, 2, 3);",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "9": {
    "code_id": "Basics-009",
    "numeric_id": 9,
    "title": "Use NOT IN",
    "code": "SELECT * FROM employees WHERE department_id NOT IN (1, 2);",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use NOT IN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE department_id NOT IN (1, 2);",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "10": {
    "code_id": "Basics-010",
    "numeric_id": 10,
    "title": "Use LIKE",
    "code": "SELECT * FROM employees WHERE first_name LIKE 'J%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use LIKE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE first_name LIKE 'J%';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "11": {
    "code_id": "Basics-011",
    "numeric_id": 11,
    "title": "Find records starting with a letter",
    "code": "SELECT * FROM employees WHERE first_name LIKE 'A%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find records starting with a letter.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE first_name LIKE 'A%';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "12": {
    "code_id": "Basics-012",
    "numeric_id": 12,
    "title": "Find records ending with a letter",
    "code": "SELECT * FROM employees WHERE last_name LIKE '%n';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find records ending with a letter.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE last_name LIKE '%n';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "13": {
    "code_id": "Basics-013",
    "numeric_id": 13,
    "title": "Find records containing a word",
    "code": "SELECT * FROM products WHERE product_name LIKE '%Laptop%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find records containing a word.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products WHERE product_name LIKE '%Laptop%';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "14": {
    "code_id": "Basics-014",
    "numeric_id": 14,
    "title": "Use IS NULL",
    "code": "SELECT * FROM employees WHERE manager_id IS NULL;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use IS NULL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE manager_id IS NULL;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "15": {
    "code_id": "Basics-015",
    "numeric_id": 15,
    "title": "Use IS NOT NULL",
    "code": "SELECT * FROM employees WHERE manager_id IS NOT NULL;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use IS NOT NULL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE manager_id IS NOT NULL;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "16": {
    "code_id": "Basics-016",
    "numeric_id": 16,
    "title": "Sort using ORDER BY ASC",
    "code": "SELECT * FROM employees ORDER BY salary ASC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sort using ORDER BY ASC.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY salary ASC;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "17": {
    "code_id": "Basics-017",
    "numeric_id": 17,
    "title": "Sort using ORDER BY DESC",
    "code": "SELECT * FROM employees ORDER BY salary DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sort using ORDER BY DESC.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY salary DESC;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "18": {
    "code_id": "Basics-018",
    "numeric_id": 18,
    "title": "Retrieve top N records (LIMIT/TOP)",
    "code": "SELECT * FROM employees ORDER BY salary DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Retrieve top N records (LIMIT/TOP).",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY salary DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "19": {
    "code_id": "Basics-019",
    "numeric_id": 19,
    "title": "Remove duplicates using DISTINCT",
    "code": "SELECT DISTINCT job_title FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Remove duplicates using DISTINCT.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT DISTINCT job_title FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "20": {
    "code_id": "Basics-020",
    "numeric_id": 20,
    "title": "Alias columns using AS",
    "code": "SELECT first_name AS name, salary AS annual_pay FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Alias columns using AS.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT first_name AS name, salary AS annual_pay FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "21": {
    "code_id": "Basics-021",
    "numeric_id": 21,
    "title": "Count total rows",
    "code": "SELECT COUNT(*) AS total_employees FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count total rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT COUNT(*) AS total_employees FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "22": {
    "code_id": "Basics-022",
    "numeric_id": 22,
    "title": "Count distinct values",
    "code": "SELECT COUNT(DISTINCT department_id) AS total_depts FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count distinct values.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT COUNT(DISTINCT department_id) AS total_depts FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "23": {
    "code_id": "Basics-023",
    "numeric_id": 23,
    "title": "Find maximum salary",
    "code": "SELECT MAX(salary) AS max_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find maximum salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT MAX(salary) AS max_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "24": {
    "code_id": "Basics-024",
    "numeric_id": 24,
    "title": "Find minimum salary",
    "code": "SELECT MIN(salary) AS min_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find minimum salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT MIN(salary) AS min_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "25": {
    "code_id": "Basics-025",
    "numeric_id": 25,
    "title": "Find average salary",
    "code": "SELECT AVG(salary) AS avg_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find average salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT AVG(salary) AS avg_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "26": {
    "code_id": "Basics-026",
    "numeric_id": 26,
    "title": "Find total salary",
    "code": "SELECT SUM(salary) AS total_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find total salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT SUM(salary) AS total_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "27": {
    "code_id": "Basics-027",
    "numeric_id": 27,
    "title": "Find average marks",
    "code": "SELECT AVG(marks) AS avg_marks FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find average marks.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT AVG(marks) AS avg_marks FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "28": {
    "code_id": "Basics-028",
    "numeric_id": 28,
    "title": "Sum sales",
    "code": "SELECT SUM(sale_amount) AS total_sales FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sum sales.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT SUM(sale_amount) AS total_sales FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "29": {
    "code_id": "Basics-029",
    "numeric_id": 29,
    "title": "Count employees in each department",
    "code": "SELECT department_id, COUNT(*) AS emp_count FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count employees in each department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS emp_count FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "30": {
    "code_id": "Basics-030",
    "numeric_id": 30,
    "title": "Find department with highest salary",
    "code": "SELECT department_id, MAX(salary) AS max_salary FROM employees GROUP BY department_id ORDER BY max_salary DESC LIMIT 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find department with highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, MAX(salary) AS max_salary FROM employees GROUP BY department_id ORDER BY max_salary DESC LIMIT 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "31": {
    "code_id": "Basics-031",
    "numeric_id": 31,
    "title": "Find department with lowest salary",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find department with lowest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "32": {
    "code_id": "Basics-032",
    "numeric_id": 32,
    "title": "Average salary by department",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Average salary by department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "33": {
    "code_id": "Basics-033",
    "numeric_id": 33,
    "title": "Maximum marks by class",
    "code": "SELECT class, AVG(marks) AS avg_mark FROM students GROUP BY class;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Maximum marks by class.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT class, AVG(marks) AS avg_mark FROM students GROUP BY class;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "34": {
    "code_id": "Basics-034",
    "numeric_id": 34,
    "title": "Minimum sales by region",
    "code": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Minimum sales by region.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "35": {
    "code_id": "Basics-035",
    "numeric_id": 35,
    "title": "Total revenue by month",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Total revenue by month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "36": {
    "code_id": "SQL-001",
    "numeric_id": 36,
    "title": "Group employees by department",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Group employees by department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "37": {
    "code_id": "SQL-002",
    "numeric_id": 37,
    "title": "Group students by class",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Group students by class.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "38": {
    "code_id": "SQL-003",
    "numeric_id": 38,
    "title": "Count employees per department",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count employees per department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "39": {
    "code_id": "SQL-004",
    "numeric_id": 39,
    "title": "Departments having more than 5 employees",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Departments having more than 5 employees.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "40": {
    "code_id": "SQL-005",
    "numeric_id": 40,
    "title": "Departments with average salary > 50,000",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Departments with average salary > 50,000.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "41": {
    "code_id": "SQL-006",
    "numeric_id": 41,
    "title": "Cities having more than 10 customers",
    "code": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Cities having more than 10 customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "42": {
    "code_id": "SQL-007",
    "numeric_id": 42,
    "title": "Product categories with highest sales",
    "code": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Product categories with highest sales.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "43": {
    "code_id": "SQL-008",
    "numeric_id": 43,
    "title": "Customers with more than 5 orders",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers with more than 5 orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "44": {
    "code_id": "SQL-009",
    "numeric_id": 44,
    "title": "Branches with highest profit",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Branches with highest profit.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "45": {
    "code_id": "SQL-010",
    "numeric_id": 45,
    "title": "States with highest customers",
    "code": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for States with highest customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "46": {
    "code_id": "SQL-011",
    "numeric_id": 46,
    "title": "Monthly sales summary",
    "code": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Monthly sales summary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "47": {
    "code_id": "SQL-012",
    "numeric_id": 47,
    "title": "Yearly sales summary",
    "code": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Yearly sales summary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "48": {
    "code_id": "SQL-013",
    "numeric_id": 48,
    "title": "Products sold more than 100 times",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Products sold more than 100 times.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "49": {
    "code_id": "SQL-014",
    "numeric_id": 49,
    "title": "Average age by city",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Average age by city.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "50": {
    "code_id": "SQL-015",
    "numeric_id": 50,
    "title": "Highest salary department",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Highest salary department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "51": {
    "code_id": "SQL-016",
    "numeric_id": 51,
    "title": "Lowest salary department",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Lowest salary department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "52": {
    "code_id": "SQL-017",
    "numeric_id": 52,
    "title": "Average marks above 80",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Average marks above 80.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "53": {
    "code_id": "SQL-018",
    "numeric_id": 53,
    "title": "Groups using multiple columns",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Groups using multiple columns.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "54": {
    "code_id": "SQL-019",
    "numeric_id": 54,
    "title": "HAVING with COUNT",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for HAVING with COUNT.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "55": {
    "code_id": "SQL-020",
    "numeric_id": 55,
    "title": "HAVING with SUM",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for HAVING with SUM.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "56": {
    "code_id": "SQL-021",
    "numeric_id": 56,
    "title": "Inner Join",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Inner Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "57": {
    "code_id": "SQL-022",
    "numeric_id": 57,
    "title": "Left Join",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Left Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "58": {
    "code_id": "SQL-023",
    "numeric_id": 58,
    "title": "Right Join",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Right Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "59": {
    "code_id": "SQL-024",
    "numeric_id": 59,
    "title": "Full Join",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Full Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "60": {
    "code_id": "SQL-025",
    "numeric_id": 60,
    "title": "Self Join",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Self Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "61": {
    "code_id": "SQL-026",
    "numeric_id": 61,
    "title": "Cross Join",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Cross Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "62": {
    "code_id": "SQL-027",
    "numeric_id": 62,
    "title": "Employees with department names",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees with department names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "63": {
    "code_id": "SQL-028",
    "numeric_id": 63,
    "title": "Customers with orders",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers with orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "64": {
    "code_id": "SQL-029",
    "numeric_id": 64,
    "title": "Customers without orders",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers without orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "65": {
    "code_id": "SQL-030",
    "numeric_id": 65,
    "title": "Orders without customers",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Orders without customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "66": {
    "code_id": "SQL-031",
    "numeric_id": 66,
    "title": "Students with course names",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Students with course names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "67": {
    "code_id": "SQL-032",
    "numeric_id": 67,
    "title": "Employees without managers",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees without managers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "68": {
    "code_id": "SQL-033",
    "numeric_id": 68,
    "title": "Manager and employee names",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Manager and employee names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "69": {
    "code_id": "SQL-034",
    "numeric_id": 69,
    "title": "Multiple table joins",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Multiple table joins.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "70": {
    "code_id": "SQL-035",
    "numeric_id": 70,
    "title": "Join three tables",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join three tables.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "71": {
    "code_id": "SQL-036",
    "numeric_id": 71,
    "title": "Join four tables",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join four tables.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "72": {
    "code_id": "SQL-037",
    "numeric_id": 72,
    "title": "Highest order per customer",
    "code": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Highest order per customer.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "73": {
    "code_id": "SQL-038",
    "numeric_id": 73,
    "title": "Total orders per customer",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Total orders per customer.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "74": {
    "code_id": "SQL-039",
    "numeric_id": 74,
    "title": "Employee and project details",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee and project details.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "75": {
    "code_id": "SQL-040",
    "numeric_id": 75,
    "title": "Product and supplier details",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Product and supplier details.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "76": {
    "code_id": "SQL-041",
    "numeric_id": 76,
    "title": "Customer-city join",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customer-city join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "77": {
    "code_id": "SQL-042",
    "numeric_id": 77,
    "title": "Find unmatched rows",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find unmatched rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "78": {
    "code_id": "SQL-043",
    "numeric_id": 78,
    "title": "Sales with product names",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sales with product names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "79": {
    "code_id": "SQL-044",
    "numeric_id": 79,
    "title": "Student-course enrollment",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Student-course enrollment.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "80": {
    "code_id": "SQL-045",
    "numeric_id": 80,
    "title": "Employee-manager hierarchy",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee-manager hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "81": {
    "code_id": "SQL-046",
    "numeric_id": 81,
    "title": "Left join with WHERE",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Left join with WHERE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "82": {
    "code_id": "SQL-047",
    "numeric_id": 82,
    "title": "Right join with NULL",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Right join with NULL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "83": {
    "code_id": "SQL-048",
    "numeric_id": 83,
    "title": "Join with GROUP BY",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with GROUP BY.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "84": {
    "code_id": "SQL-049",
    "numeric_id": 84,
    "title": "Join with HAVING",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with HAVING.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "85": {
    "code_id": "SQL-050",
    "numeric_id": 85,
    "title": "Join with aggregate functions",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with aggregate functions.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "86": {
    "code_id": "SQL-051",
    "numeric_id": 86,
    "title": "Join with CASE",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with CASE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "87": {
    "code_id": "SQL-052",
    "numeric_id": 87,
    "title": "Join with subquery",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with subquery.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "88": {
    "code_id": "SQL-053",
    "numeric_id": 88,
    "title": "Join using aliases",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join using aliases.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "89": {
    "code_id": "SQL-054",
    "numeric_id": 89,
    "title": "Difference between INNER and LEFT JOIN",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Difference between INNER and LEFT JOIN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "90": {
    "code_id": "SQL-055",
    "numeric_id": 90,
    "title": "Difference between LEFT and RIGHT JOIN",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Difference between LEFT and RIGHT JOIN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "91": {
    "code_id": "SQL-056",
    "numeric_id": 91,
    "title": "Salary above average",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Salary above average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "92": {
    "code_id": "SQL-058",
    "numeric_id": 92,
    "title": "Third highest salary",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Second highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "93": {
    "code_id": "SQL-060",
    "numeric_id": 93,
    "title": "Employees earning more than department average",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Third highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "94": {
    "code_id": "SQL-061",
    "numeric_id": 94,
    "title": "Products above average price",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Nth highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "95": {
    "code_id": "SQL-062",
    "numeric_id": 95,
    "title": "Customers with maximum orders",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees earning more than department average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "96": {
    "code_id": "SQL-063",
    "numeric_id": 96,
    "title": "Employees in highest-paying department",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Products above average price.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "97": {
    "code_id": "SQL-064",
    "numeric_id": 97,
    "title": "Departments with highest average salary",
    "code": "SELECT *, COUNT(*) AS count FROM orders GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers with maximum orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM orders GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "98": {
    "code_id": "SQL-065",
    "numeric_id": 98,
    "title": "Find duplicate rows",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees in highest-paying department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "99": {
    "code_id": "SQL-066",
    "numeric_id": 99,
    "title": "Remove duplicate rows",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Departments with highest average salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "100": {
    "code_id": "100",
    "numeric_id": 349,
    "title": "Managers with at Least 5 Direct Reports",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find duplicate rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "101": {
    "code_id": "101",
    "numeric_id": 350,
    "title": "Winning Candidate",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Remove duplicate rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "102": {
    "code_id": "102",
    "numeric_id": 351,
    "title": "Count Student Number in Departments",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Exists vs IN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "103": {
    "code_id": "103",
    "numeric_id": 352,
    "title": "Investments in 2016",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for NOT EXISTS.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "104": {
    "code_id": "104",
    "numeric_id": 353,
    "title": "Friend Requests II: Who Has the Most Friends",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Correlated subquery.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "105": {
    "code_id": "105",
    "numeric_id": 354,
    "title": "Tree Node",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Nested subqueries.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "106": {
    "code_id": "106",
    "numeric_id": 355,
    "title": "Shortest Distance in a Plane",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Max salary employee.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "107": {
    "code_id": "107",
    "numeric_id": 356,
    "title": "Second Degree Follower",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Min salary employee.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "108": {
    "code_id": "108",
    "numeric_id": 357,
    "title": "Exchange Seats",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers without orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "109": {
    "code_id": "109",
    "numeric_id": 358,
    "title": "Customers Who Bought All Products",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Products never sold.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "110": {
    "code_id": "110",
    "numeric_id": 359,
    "title": "Product Sales Analysis III",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Orders above average amount.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "111": {
    "code_id": "111",
    "numeric_id": 360,
    "title": "Project Employees III",
    "code": "SELECT employee_id, first_name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for ROW_NUMBER().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT employee_id, first_name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "112": {
    "code_id": "112",
    "numeric_id": 361,
    "title": "Unpopular Books",
    "code": "SELECT employee_id, first_name, salary, RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for RANK().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT employee_id, first_name, salary, RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "113": {
    "code_id": "113",
    "numeric_id": 362,
    "title": "New Users Daily Count",
    "code": "SELECT employee_id, first_name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for DENSE_RANK().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT employee_id, first_name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "114": {
    "code_id": "114",
    "numeric_id": 363,
    "title": "Highest Grade For Each Student",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for NTILE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "115": {
    "code_id": "115",
    "numeric_id": 364,
    "title": "Reported Posts II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LEAD().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "116": {
    "code_id": "116",
    "numeric_id": 365,
    "title": "Article Views II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LAG().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "117": {
    "code_id": "117",
    "numeric_id": 366,
    "title": "Market Analysis I",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for FIRST_VALUE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "118": {
    "code_id": "118",
    "numeric_id": 367,
    "title": "Product Price at a Given Date",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LAST_VALUE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "119": {
    "code_id": "119",
    "numeric_id": 368,
    "title": "Immediate Food Delivery II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running total.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "120": {
    "code_id": "120",
    "numeric_id": 369,
    "title": "Monthly Transactions I",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Cumulative sum.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "121": {
    "code_id": "121",
    "numeric_id": 370,
    "title": "Last Person to Fit in the Bus",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Moving average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "122": {
    "code_id": "122",
    "numeric_id": 371,
    "title": "Monthly Transactions II",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Top 3 salaries.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "123": {
    "code_id": "123",
    "numeric_id": 372,
    "title": "Team Scores in Football Tournament",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Highest salary per department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "124": {
    "code_id": "124",
    "numeric_id": 373,
    "title": "Page Recommendations",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Lowest salary per department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "125": {
    "code_id": "125",
    "numeric_id": 374,
    "title": "All People Report to the Given Manager",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Previous month's sales.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "126": {
    "code_id": "126",
    "numeric_id": 375,
    "title": "Find the Start and End Number of Continuous Ranges",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Next month's sales.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "127": {
    "code_id": "127",
    "numeric_id": 376,
    "title": "Running Total for Different Genders",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Difference from previous row.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "128": {
    "code_id": "128",
    "numeric_id": 377,
    "title": "Restaurant Growth",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "129": {
    "code_id": "129",
    "numeric_id": 378,
    "title": "Movie Rating",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running count.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "130": {
    "code_id": "130",
    "numeric_id": 379,
    "title": "Activity Participants",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Percent rank.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "131": {
    "code_id": "131",
    "numeric_id": 380,
    "title": "Number of Trusted Contacts of a Customer",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Dense rank by department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "132": {
    "code_id": "132",
    "numeric_id": 381,
    "title": "Capital Gain/Loss",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Row number partition.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "133": {
    "code_id": "133",
    "numeric_id": 382,
    "title": "Customers Who Bought Products A and B but Not C",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Ranking products.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "134": {
    "code_id": "134",
    "numeric_id": 383,
    "title": "Evaluate Boolean Expression",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Ranking students.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "135": {
    "code_id": "135",
    "numeric_id": 384,
    "title": "Apples & Oranges",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Ranking salespersons.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "136": {
    "code_id": "136",
    "numeric_id": 385,
    "title": "Active Users",
    "code": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Top N customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "137": {
    "code_id": "137",
    "numeric_id": 386,
    "title": "Rectangles Area",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Bottom N products.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "138": {
    "code_id": "138",
    "numeric_id": 387,
    "title": "Calculate Salaries",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Window frame examples.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "139": {
    "code_id": "139",
    "numeric_id": 388,
    "title": "Countries You Can Safely Invest In",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for PARTITION BY.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "140": {
    "code_id": "140",
    "numeric_id": 389,
    "title": "The Most Recent Three Orders",
    "code": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for ORDER BY in window functions.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "141": {
    "code_id": "141",
    "numeric_id": 390,
    "title": "The Most Recent Orders for Each Product",
    "code": "WITH HighEarners AS (SELECT * FROM employees WHERE salary > 80000) SELECT * FROM HighEarners;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Simple CTE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "WITH HighEarners AS (SELECT * FROM employees WHERE salary > 80000) SELECT * FROM HighEarners;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "142": {
    "code_id": "142",
    "numeric_id": 391,
    "title": "Bank Account Summary",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Multiple CTEs.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "143": {
    "code_id": "143",
    "numeric_id": 392,
    "title": "The Most Frequently Ordered Products for Each Customer",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Recursive CTE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "144": {
    "code_id": "144",
    "numeric_id": 393,
    "title": "Find the Missing IDs",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "145": {
    "code_id": "145",
    "numeric_id": 394,
    "title": "Number of Calls Between Two Persons",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Category hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "146": {
    "code_id": "146",
    "numeric_id": 395,
    "title": "Biggest Window Between Visits",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running totals using CTE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "147": {
    "code_id": "147",
    "numeric_id": 396,
    "title": "Leetflex Banned Accounts",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Ranking using CTE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "148": {
    "code_id": "148",
    "numeric_id": 397,
    "title": "Grand Slam Titles",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate removal.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "149": {
    "code_id": "149",
    "numeric_id": 398,
    "title": "Ad-Free Sessions",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Temporary calculations.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "150": {
    "code_id": "150",
    "numeric_id": 399,
    "title": "Find Interview Candidates",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Monthly sales report.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "151": {
    "code_id": "151",
    "numeric_id": 400,
    "title": "Maximum Transaction Each Day",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Department summary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "152": {
    "code_id": "152",
    "numeric_id": 401,
    "title": "League Statistics",
    "code": "SELECT *, COUNT(*) AS count FROM customers GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customer summary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM customers GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "153": {
    "code_id": "153",
    "numeric_id": 402,
    "title": "Suspicious Bank Accounts",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sales analysis.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "154": {
    "code_id": "154",
    "numeric_id": 403,
    "title": "Orders With Maximum Quantity Above Average",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee analysis.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "155": {
    "code_id": "155",
    "numeric_id": 404,
    "title": "Group Employees of the Same Salary",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Recursive numbers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "156": {
    "code_id": "156",
    "numeric_id": 405,
    "title": "Page Recommendations II",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Grade students.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "157": {
    "code_id": "157",
    "numeric_id": 406,
    "title": "Leetcodify Friends Recommendations",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Salary bands.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "158": {
    "code_id": "158",
    "numeric_id": 407,
    "title": "Leetcodify Similar Friends",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Age groups.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "159": {
    "code_id": "159",
    "numeric_id": 408,
    "title": "Confirmation Rate",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sales categories.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "160": {
    "code_id": "160",
    "numeric_id": 409,
    "title": "Users That Actively Request Confirmation Messages",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Bonus calculation.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "161": {
    "code_id": "161",
    "numeric_id": 410,
    "title": "Strong Friendship",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customer classification.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "162": {
    "code_id": "162",
    "numeric_id": 411,
    "title": "All the Pairs With the Maximum Number of Common Followers",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Pass/Fail status.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "163": {
    "code_id": "163",
    "numeric_id": 412,
    "title": "Find Cutoff Score for Each School",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Gender formatting.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "164": {
    "code_id": "164",
    "numeric_id": 413,
    "title": "The Category of Each Member in the Store",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Conditional aggregation.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "165": {
    "code_id": "165",
    "numeric_id": 414,
    "title": "Account Balance",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Multiple CASE conditions.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "166": {
    "code_id": "166",
    "numeric_id": 415,
    "title": "The Winner University",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LENGTH().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "167": {
    "code_id": "167",
    "numeric_id": 416,
    "title": "Drop Type 1 Orders for Customers With Type 0 Orders",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for UPPER().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "168": {
    "code_id": "168",
    "numeric_id": 417,
    "title": "The Airport With the Most Traffic",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LOWER().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "169": {
    "code_id": "169",
    "numeric_id": 418,
    "title": "Build the Equation",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for CONCAT().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "170": {
    "code_id": "170",
    "numeric_id": 419,
    "title": "Order Two Columns Independently",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for SUBSTRING().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "171": {
    "code_id": "171",
    "numeric_id": 420,
    "title": "The Change in Global Rankings",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for REPLACE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "172": {
    "code_id": "172",
    "numeric_id": 421,
    "title": "Finding the Topic of Each Post",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for TRIM().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "173": {
    "code_id": "173",
    "numeric_id": 422,
    "title": "The Number of Users That Are Eligible for Discount",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LTRIM().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "174": {
    "code_id": "174",
    "numeric_id": 423,
    "title": "Users With Two Purchases Within Seven Days",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for RTRIM().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "175": {
    "code_id": "175",
    "numeric_id": 424,
    "title": "The Users That Are Eligible for Discount",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LEFT().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "176": {
    "code_id": "176",
    "numeric_id": 425,
    "title": "Number of Times a Driver Was a Passenger",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for RIGHT().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "177": {
    "code_id": "177",
    "numeric_id": 426,
    "title": "Products With Three or More Orders in Two Consecutive Years",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for POSITION/CHARINDEX().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "178": {
    "code_id": "178",
    "numeric_id": 427,
    "title": "Tasks Count in the Weekend",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for REVERSE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "179": {
    "code_id": "179",
    "numeric_id": 428,
    "title": "Arrange Table by Gender",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Split names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "180": {
    "code_id": "180",
    "numeric_id": 429,
    "title": "The First Day of the Maximum Recorded Degree in Each City",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Initials.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "181": {
    "code_id": "181",
    "numeric_id": 430,
    "title": "Product Sales Analysis IV",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Email extraction.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "182": {
    "code_id": "182",
    "numeric_id": 431,
    "title": "Product Sales Analysis V",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Domain extraction.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "183": {
    "code_id": "183",
    "numeric_id": 432,
    "title": "All the Matches of the League",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count characters.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "184": {
    "code_id": "184",
    "numeric_id": 433,
    "title": "Compute the Rank as a Percentage",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Remove spaces.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "185": {
    "code_id": "185",
    "numeric_id": 434,
    "title": "Generate the Invoice",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Replace multiple characters.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "186": {
    "code_id": "186",
    "numeric_id": 435,
    "title": "Calculate the Influence of Each Salesperson",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Current date.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "187": {
    "code_id": "187",
    "numeric_id": 436,
    "title": "Change Null Values in a Table to the Previous Value",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Current timestamp.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "188": {
    "code_id": "188",
    "numeric_id": 437,
    "title": "Employees With Deductions",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Difference between dates.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "189": {
    "code_id": "189",
    "numeric_id": 438,
    "title": "Customers With Strictly Increasing Purchases",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Add days.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "190": {
    "code_id": "190",
    "numeric_id": 439,
    "title": "Form a Chemical Bond",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Add months.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "191": {
    "code_id": "191",
    "numeric_id": 440,
    "title": "Count Artist Occurrences On Spotify Ranking List",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Extract year.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "192": {
    "code_id": "192",
    "numeric_id": 441,
    "title": "Product Price at a Given Date II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Extract month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "193": {
    "code_id": "193",
    "numeric_id": 442,
    "title": "User Activity for the Past 60 Days",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Extract day.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "194": {
    "code_id": "194",
    "numeric_id": 443,
    "title": "Immediate Food Delivery III",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Week number.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "195": {
    "code_id": "195",
    "numeric_id": 444,
    "title": "Monthly Transactions III",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Quarter.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "196": {
    "code_id": "196",
    "numeric_id": 445,
    "title": "Project Employees IV",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Last day of month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "197": {
    "code_id": "197",
    "numeric_id": 446,
    "title": "Sales Analysis IV",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for First day of month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "198": {
    "code_id": "198",
    "numeric_id": 447,
    "title": "Winning Candidate II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Date formatting.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "199": {
    "code_id": "199",
    "numeric_id": 448,
    "title": "Team Scores in Football Tournament II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Age calculation.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "200": {
    "code_id": "200",
    "numeric_id": 449,
    "title": "Find Cutoff Score for Each Department",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees hired this year.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "201": {
    "code_id": "201",
    "numeric_id": 450,
    "title": "The Airport With Lowest Traffic",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Orders this month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "202": {
    "code_id": "202",
    "numeric_id": 451,
    "title": "The Change in Regional Rankings",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sales last 30 days.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "203": {
    "code_id": "203",
    "numeric_id": 452,
    "title": "Active Users II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Weekend records.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "204": {
    "code_id": "204",
    "numeric_id": 453,
    "title": "Rectangles Perimeter",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Leap year check.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "205": {
    "code_id": "205",
    "numeric_id": 454,
    "title": "Employees With Bonus Deductions",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Monthly report.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "206": {
    "code_id": "206",
    "numeric_id": 455,
    "title": "Ad-Free Active Sessions",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find duplicates.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "207": {
    "code_id": "207",
    "numeric_id": 456,
    "title": "Count Salary Categories",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Remove duplicates.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "208": {
    "code_id": "208",
    "numeric_id": 457,
    "title": "Active Businesses",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate emails.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "209": {
    "code_id": "209",
    "numeric_id": 458,
    "title": "Get Highest Answer Rate Question",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "210": {
    "code_id": "210",
    "numeric_id": 459,
    "title": "Department Top Three Salaries",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate phone numbers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "211": {
    "code_id": "211",
    "numeric_id": 460,
    "title": "Trips and Users",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate salaries.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "212": {
    "code_id": "212",
    "numeric_id": 461,
    "title": "Find Median Given Frequency of Numbers",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Keep first duplicate.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "213": {
    "code_id": "213",
    "numeric_id": 462,
    "title": "Find Cumulative Salary of an Employee",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Keep latest duplicate.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "214": {
    "code_id": "214",
    "numeric_id": 463,
    "title": "Human Traffic of Stadium",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Delete duplicate rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "215": {
    "code_id": "215",
    "numeric_id": 464,
    "title": "Average Salary: Departments VS Company",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count duplicate groups.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "216": {
    "code_id": "216",
    "numeric_id": 465,
    "title": "Students Report By Geography",
    "code": "SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Second highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "217": {
    "code_id": "217",
    "numeric_id": 466,
    "title": "Game Play Analysis V",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Nth highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "218": {
    "code_id": "218",
    "numeric_id": 467,
    "title": "User Purchase Platform",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Top 3 salaries per department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "219": {
    "code_id": "219",
    "numeric_id": 468,
    "title": "Market Analysis II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Consecutive login days.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "220": {
    "code_id": "220",
    "numeric_id": 469,
    "title": "Tournament Winners",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Consecutive numbers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "221": {
    "code_id": "221",
    "numeric_id": 470,
    "title": "Report Contiguous Dates",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Gap and island problems.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "222": {
    "code_id": "222",
    "numeric_id": 471,
    "title": "Number of Transactions per Visit",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Median salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "223": {
    "code_id": "223",
    "numeric_id": 472,
    "title": "Get the Second Most Recent Activity",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Pivot table.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "224": {
    "code_id": "224",
    "numeric_id": 473,
    "title": "Total Sales Amount by Year",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Unpivot table.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "225": {
    "code_id": "225",
    "numeric_id": 474,
    "title": "Find the Quiet Students in All Exams",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "226": {
    "code_id": "226",
    "numeric_id": 475,
    "title": "Sales by Day of the Week",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running balance.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "227": {
    "code_id": "227",
    "numeric_id": 476,
    "title": "Hopper Company Queries I",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Daily active users.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "228": {
    "code_id": "228",
    "numeric_id": 477,
    "title": "Hopper Company Queries II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Monthly active users.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "229": {
    "code_id": "229",
    "numeric_id": 478,
    "title": "Hopper Company Queries III",
    "code": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Churn customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "230": {
    "code_id": "230",
    "numeric_id": 479,
    "title": "Find the Subtasks That Did Not Execute",
    "code": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Repeat customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "231": {
    "code_id": "231",
    "numeric_id": 480,
    "title": "First and Last Call On the Same Day",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for First purchase.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "232": {
    "code_id": "232",
    "numeric_id": 481,
    "title": "Count the Number of Experiments",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Last purchase.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "233": {
    "code_id": "233",
    "numeric_id": 482,
    "title": "The Number of Seniors and Juniors to Join the Company",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Most expensive product.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "234": {
    "code_id": "234",
    "numeric_id": 483,
    "title": "The Number of Seniors and Juniors to Join the Company II",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Least expensive product.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "235": {
    "code_id": "235",
    "numeric_id": 484,
    "title": "Number of Accounts That Did Not Stream",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Product never sold.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "236": {
    "code_id": "236",
    "numeric_id": 485,
    "title": "The Number of Passengers in Each Bus I",
    "code": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customer lifetime value.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "237": {
    "code_id": "237",
    "numeric_id": 486,
    "title": "The Number of Passengers in Each Bus II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Revenue by month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "238": {
    "code_id": "238",
    "numeric_id": 487,
    "title": "Longest Winning Streak",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Rolling average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "239": {
    "code_id": "239",
    "numeric_id": 488,
    "title": "Dynamic Pivoting of a Table",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Year-over-year growth.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "240": {
    "code_id": "240",
    "numeric_id": 489,
    "title": "Dynamic Unpivoting of a Table",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Month-over-month growth.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "241": {
    "code_id": "241",
    "numeric_id": 490,
    "title": "Merge Overlapping Events in the Same Hall",
    "code": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Top-selling product.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "242": {
    "code_id": "242",
    "numeric_id": 491,
    "title": "Consecutive Numbers Sum",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Least-selling product.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "243": {
    "code_id": "243",
    "numeric_id": 492,
    "title": "Shortest Distance in a Plane II",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Market share calculation.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "244": {
    "code_id": "244",
    "numeric_id": 493,
    "title": "Department Top Five Salaries",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Percent contribution.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "245": {
    "code_id": "245",
    "numeric_id": 494,
    "title": "Total Sales Amount by Month",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Cohort analysis.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "246": {
    "code_id": "246",
    "numeric_id": 495,
    "title": "Longest Losing Streak",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Retention analysis.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "247": {
    "code_id": "247",
    "numeric_id": 496,
    "title": "Order Three Columns Independently",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Dense ranking challenge.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "248": {
    "code_id": "248",
    "numeric_id": 497,
    "title": "Dynamic Pivoting of a Summary Table",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Recursive hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "249": {
    "code_id": "249",
    "numeric_id": 498,
    "title": "Dynamic Unpivoting of a Summary Table",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sessionization problem.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "250": {
    "code_id": "250",
    "numeric_id": 499,
    "title": "Median Employee Salary",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Fraud detection using SQL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "251": {
    "code_id": "002",
    "numeric_id": 251,
    "title": "Employees Earning More Than Their Managers",
    "code": "SELECT employee_id, first_name, last_name, salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Select specific columns.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT employee_id, first_name, last_name, salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "252": {
    "code_id": "003",
    "numeric_id": 252,
    "title": "Duplicate Emails",
    "code": "SELECT * FROM employees WHERE salary > 80000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Filter rows using WHERE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE salary > 80000;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "253": {
    "code_id": "004",
    "numeric_id": 253,
    "title": "Customers Who Never Order",
    "code": "SELECT * FROM employees WHERE salary > 70000 AND department_id = 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use multiple conditions with AND.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE salary > 70000 AND department_id = 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "254": {
    "code_id": "005",
    "numeric_id": 254,
    "title": "Delete Duplicate Emails",
    "code": "SELECT * FROM employees WHERE department_id = 1 OR salary > 100000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use multiple conditions with OR.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE department_id = 1 OR salary > 100000;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "255": {
    "code_id": "006",
    "numeric_id": 255,
    "title": "Rising Temperature",
    "code": "SELECT * FROM employees WHERE department_id != 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use NOT.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE department_id != 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "256": {
    "code_id": "007",
    "numeric_id": 256,
    "title": "Game Play Analysis I",
    "code": "SELECT * FROM employees WHERE salary BETWEEN 60000 AND 90000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use BETWEEN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE salary BETWEEN 60000 AND 90000;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "257": {
    "code_id": "008",
    "numeric_id": 257,
    "title": "Game Play Analysis II",
    "code": "SELECT * FROM employees WHERE department_id IN (1, 2, 3);",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use IN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE department_id IN (1, 2, 3);",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "258": {
    "code_id": "009",
    "numeric_id": 258,
    "title": "Employee Bonus",
    "code": "SELECT * FROM employees WHERE department_id NOT IN (1, 2);",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use NOT IN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE department_id NOT IN (1, 2);",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "259": {
    "code_id": "010",
    "numeric_id": 259,
    "title": "Find Customer Referee",
    "code": "SELECT * FROM employees WHERE first_name LIKE 'J%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use LIKE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE first_name LIKE 'J%';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "260": {
    "code_id": "011",
    "numeric_id": 260,
    "title": "Customer Placing the Largest Number of Orders",
    "code": "SELECT * FROM employees WHERE first_name LIKE 'A%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find records starting with a letter.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE first_name LIKE 'A%';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "261": {
    "code_id": "012",
    "numeric_id": 261,
    "title": "Big Countries",
    "code": "SELECT * FROM employees WHERE last_name LIKE '%n';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find records ending with a letter.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE last_name LIKE '%n';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "262": {
    "code_id": "013",
    "numeric_id": 262,
    "title": "Classes With at Least 5 Students",
    "code": "SELECT * FROM products WHERE product_name LIKE '%Laptop%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find records containing a word.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products WHERE product_name LIKE '%Laptop%';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "263": {
    "code_id": "014",
    "numeric_id": 263,
    "title": "Friend Requests I: Overall Acceptance Rate",
    "code": "SELECT * FROM employees WHERE manager_id IS NULL;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use IS NULL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE manager_id IS NULL;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "264": {
    "code_id": "015",
    "numeric_id": 264,
    "title": "Consecutive Available Seats",
    "code": "SELECT * FROM employees WHERE manager_id IS NOT NULL;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use IS NOT NULL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE manager_id IS NOT NULL;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "265": {
    "code_id": "016",
    "numeric_id": 265,
    "title": "Sales Person",
    "code": "SELECT * FROM employees ORDER BY salary ASC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sort using ORDER BY ASC.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY salary ASC;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "266": {
    "code_id": "017",
    "numeric_id": 266,
    "title": "Triangle Judgement",
    "code": "SELECT * FROM employees ORDER BY salary DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sort using ORDER BY DESC.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY salary DESC;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "267": {
    "code_id": "018",
    "numeric_id": 267,
    "title": "Shortest Distance in a Line",
    "code": "SELECT * FROM employees ORDER BY salary DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Retrieve top N records (LIMIT/TOP).",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY salary DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "268": {
    "code_id": "019",
    "numeric_id": 268,
    "title": "Not Boring Movies",
    "code": "SELECT DISTINCT job_title FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Remove duplicates using DISTINCT.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT DISTINCT job_title FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "269": {
    "code_id": "020",
    "numeric_id": 269,
    "title": "Swap Sex of Employees",
    "code": "SELECT first_name AS name, salary AS annual_pay FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Alias columns using AS.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT first_name AS name, salary AS annual_pay FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "270": {
    "code_id": "021",
    "numeric_id": 270,
    "title": "Actors and Directors Who Cooperated At Least Three Times",
    "code": "SELECT COUNT(*) AS total_employees FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count total rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT COUNT(*) AS total_employees FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "271": {
    "code_id": "022",
    "numeric_id": 271,
    "title": "Product Sales Analysis I",
    "code": "SELECT COUNT(DISTINCT department_id) AS total_depts FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count distinct values.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT COUNT(DISTINCT department_id) AS total_depts FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "272": {
    "code_id": "023",
    "numeric_id": 272,
    "title": "Product Sales Analysis II",
    "code": "SELECT MAX(salary) AS max_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find maximum salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT MAX(salary) AS max_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "273": {
    "code_id": "024",
    "numeric_id": 273,
    "title": "Project Employees I",
    "code": "SELECT MIN(salary) AS min_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find minimum salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT MIN(salary) AS min_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "274": {
    "code_id": "025",
    "numeric_id": 274,
    "title": "Project Employees II",
    "code": "SELECT AVG(salary) AS avg_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find average salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT AVG(salary) AS avg_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "275": {
    "code_id": "026",
    "numeric_id": 275,
    "title": "Sales Analysis I",
    "code": "SELECT SUM(salary) AS total_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find total salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT SUM(salary) AS total_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "276": {
    "code_id": "027",
    "numeric_id": 276,
    "title": "Sales Analysis II",
    "code": "SELECT AVG(marks) AS avg_marks FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find average marks.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT AVG(marks) AS avg_marks FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "277": {
    "code_id": "028",
    "numeric_id": 277,
    "title": "Sales Analysis III",
    "code": "SELECT SUM(sale_amount) AS total_sales FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sum sales.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT SUM(sale_amount) AS total_sales FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "278": {
    "code_id": "029",
    "numeric_id": 278,
    "title": "Reported Posts",
    "code": "SELECT department_id, COUNT(*) AS emp_count FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count employees in each department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS emp_count FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "279": {
    "code_id": "030",
    "numeric_id": 279,
    "title": "User Activity for the Past 30 Days I",
    "code": "SELECT department_id, MAX(salary) AS max_salary FROM employees GROUP BY department_id ORDER BY max_salary DESC LIMIT 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find department with highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, MAX(salary) AS max_salary FROM employees GROUP BY department_id ORDER BY max_salary DESC LIMIT 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "280": {
    "code_id": "031",
    "numeric_id": 280,
    "title": "User Activity for the Past 30 Days II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find department with lowest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "281": {
    "code_id": "032",
    "numeric_id": 281,
    "title": "Article Views I",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Average salary by department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "282": {
    "code_id": "033",
    "numeric_id": 282,
    "title": "Immediate Food Delivery I",
    "code": "SELECT class, AVG(marks) AS avg_mark FROM students GROUP BY class;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Maximum marks by class.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT class, AVG(marks) AS avg_mark FROM students GROUP BY class;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "283": {
    "code_id": "034",
    "numeric_id": 283,
    "title": "Reformat Department Table",
    "code": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Minimum sales by region.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "284": {
    "code_id": "035",
    "numeric_id": 284,
    "title": "Queries Quality and Percentage",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Total revenue by month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "285": {
    "code_id": "036",
    "numeric_id": 285,
    "title": "Number of Comments per Post",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Group employees by department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "286": {
    "code_id": "037",
    "numeric_id": 286,
    "title": "Average Selling Price",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Group students by class.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "287": {
    "code_id": "038",
    "numeric_id": 287,
    "title": "Students and Examinations",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count employees per department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "288": {
    "code_id": "039",
    "numeric_id": 288,
    "title": "Weather Type in Each Country",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Departments having more than 5 employees.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "289": {
    "code_id": "040",
    "numeric_id": 289,
    "title": "Find the Team Size",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Departments with average salary > 50,000.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "290": {
    "code_id": "041",
    "numeric_id": 290,
    "title": "Ads Performance",
    "code": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Cities having more than 10 customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "291": {
    "code_id": "042",
    "numeric_id": 291,
    "title": "List the Products Ordered in a Period",
    "code": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Product categories with highest sales.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "292": {
    "code_id": "043",
    "numeric_id": 292,
    "title": "Students With Invalid Departments",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers with more than 5 orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "293": {
    "code_id": "044",
    "numeric_id": 293,
    "title": "Replace Employee ID With The Unique Identifier",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Branches with highest profit.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "294": {
    "code_id": "045",
    "numeric_id": 294,
    "title": "Top Travellers",
    "code": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for States with highest customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "295": {
    "code_id": "046",
    "numeric_id": 295,
    "title": "NPV Queries",
    "code": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Monthly sales summary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "296": {
    "code_id": "047",
    "numeric_id": 296,
    "title": "Create a Session Bar Chart",
    "code": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Yearly sales summary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "297": {
    "code_id": "048",
    "numeric_id": 297,
    "title": "Group Sold Products By The Date",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Products sold more than 100 times.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "298": {
    "code_id": "049",
    "numeric_id": 298,
    "title": "Friendly Movies Streamed Last Month",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Average age by city.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "299": {
    "code_id": "050",
    "numeric_id": 299,
    "title": "Customer Order Frequency",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Highest salary department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "300": {
    "code_id": "051",
    "numeric_id": 300,
    "title": "Find Users With Valid E-Mails",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Lowest salary department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "301": {
    "code_id": "052",
    "numeric_id": 301,
    "title": "Patients With a Condition",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Average marks above 80.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "302": {
    "code_id": "053",
    "numeric_id": 302,
    "title": "Fix Product Name Format",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Groups using multiple columns.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "303": {
    "code_id": "054",
    "numeric_id": 303,
    "title": "Unique Orders and Customers Per Month",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for HAVING with COUNT.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "304": {
    "code_id": "055",
    "numeric_id": 304,
    "title": "Warehouse Manager",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for HAVING with SUM.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "305": {
    "code_id": "056",
    "numeric_id": 305,
    "title": "Customer Who Visited but Did Not Make Any Transactions",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Inner Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "306": {
    "code_id": "057",
    "numeric_id": 306,
    "title": "Bank Account Summary II",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Left Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "307": {
    "code_id": "058",
    "numeric_id": 307,
    "title": "Sellers With No Sales",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Right Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "308": {
    "code_id": "059",
    "numeric_id": 308,
    "title": "All Valid Triplets That Can Represent a Country",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Full Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "309": {
    "code_id": "060",
    "numeric_id": 309,
    "title": "Percentage of Users Attended a Contest",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Self Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "310": {
    "code_id": "061",
    "numeric_id": 310,
    "title": "Average Time of Process per Machine",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Cross Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "311": {
    "code_id": "062",
    "numeric_id": 311,
    "title": "Fix Names in a Table",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees with department names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "312": {
    "code_id": "063",
    "numeric_id": 312,
    "title": "Product's Worth Over Invoices",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers with orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "313": {
    "code_id": "064",
    "numeric_id": 313,
    "title": "Invalid Tweets",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers without orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "314": {
    "code_id": "065",
    "numeric_id": 314,
    "title": "Daily Leads and Partners",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Orders without customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "315": {
    "code_id": "066",
    "numeric_id": 315,
    "title": "Count Apples and Oranges",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Students with course names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "316": {
    "code_id": "067",
    "numeric_id": 316,
    "title": "Find Followers Count",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees without managers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "317": {
    "code_id": "068",
    "numeric_id": 317,
    "title": "The Number of Employees Which Report to Each Employee",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Manager and employee names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "318": {
    "code_id": "069",
    "numeric_id": 318,
    "title": "Find Total Time Spent by Each Employee",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Multiple table joins.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "319": {
    "code_id": "070",
    "numeric_id": 319,
    "title": "Recyclable and Low Fat Products",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join three tables.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "320": {
    "code_id": "071",
    "numeric_id": 320,
    "title": "Product's Price for Each Store",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join four tables.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "321": {
    "code_id": "072",
    "numeric_id": 321,
    "title": "Primary Department for Each Employee",
    "code": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Highest order per customer.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "322": {
    "code_id": "073",
    "numeric_id": 322,
    "title": "Rearrange Products Table",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Total orders per customer.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "323": {
    "code_id": "074",
    "numeric_id": 323,
    "title": "Find Customers With Positive Revenue this Year",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee and project details.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "324": {
    "code_id": "075",
    "numeric_id": 324,
    "title": "Convert Date Format",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Product and supplier details.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "325": {
    "code_id": "076",
    "numeric_id": 325,
    "title": "Calculate Special Bonus",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customer-city join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "326": {
    "code_id": "077",
    "numeric_id": 326,
    "title": "The Latest Login in 2020",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find unmatched rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "327": {
    "code_id": "078",
    "numeric_id": 327,
    "title": "Employees Whose Manager Left the Company",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sales with product names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "328": {
    "code_id": "079",
    "numeric_id": 328,
    "title": "Low-Quality Problems",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Student-course enrollment.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "329": {
    "code_id": "080",
    "numeric_id": 329,
    "title": "Accepted Candidates From the Interviews",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee-manager hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "330": {
    "code_id": "081",
    "numeric_id": 330,
    "title": "The Number of Rich Customers",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Left join with WHERE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "331": {
    "code_id": "082",
    "numeric_id": 331,
    "title": "Number of Unique Subjects Taught by Each Teacher",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Right join with NULL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "332": {
    "code_id": "083",
    "numeric_id": 332,
    "title": "Sort the Olympic Table",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with GROUP BY.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "333": {
    "code_id": "084",
    "numeric_id": 333,
    "title": "Concatenate the Name and the Profession",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with HAVING.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "334": {
    "code_id": "085",
    "numeric_id": 334,
    "title": "Find Latest Salaries",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with aggregate functions.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "335": {
    "code_id": "086",
    "numeric_id": 335,
    "title": "Triangles",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with CASE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "336": {
    "code_id": "087",
    "numeric_id": 336,
    "title": "The Number of Employees Who Direct Report to Each Director",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with subquery.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "337": {
    "code_id": "088",
    "numeric_id": 337,
    "title": "Customers Who Never Reordered",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join using aliases.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "338": {
    "code_id": "089",
    "numeric_id": 338,
    "title": "Number of Comments per User",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Difference between INNER and LEFT JOIN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "339": {
    "code_id": "090",
    "numeric_id": 339,
    "title": "Average Selling Price by Category",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Difference between LEFT and RIGHT JOIN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "340": {
    "code_id": "091",
    "numeric_id": 340,
    "title": "Employees With Missing Information",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Salary above average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "341": {
    "code_id": "092",
    "numeric_id": 341,
    "title": "Biggest Single Number",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Second highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "342": {
    "code_id": "093",
    "numeric_id": 342,
    "title": "Second Highest Salary",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Third highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "343": {
    "code_id": "094",
    "numeric_id": 343,
    "title": "Nth Highest Salary",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Nth highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "344": {
    "code_id": "095",
    "numeric_id": 344,
    "title": "Rank Scores",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees earning more than department average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "345": {
    "code_id": "096",
    "numeric_id": 345,
    "title": "Consecutive Numbers",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Products above average price.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "346": {
    "code_id": "097",
    "numeric_id": 346,
    "title": "Department Highest Salary",
    "code": "SELECT *, COUNT(*) AS count FROM orders GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers with maximum orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM orders GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "347": {
    "code_id": "098",
    "numeric_id": 347,
    "title": "Game Play Analysis III",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees in highest-paying department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "348": {
    "code_id": "099",
    "numeric_id": 348,
    "title": "Game Play Analysis IV",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Departments with highest average salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "349": {
    "code_id": "100",
    "numeric_id": 349,
    "title": "Managers with at Least 5 Direct Reports",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find duplicate rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "350": {
    "code_id": "101",
    "numeric_id": 350,
    "title": "Winning Candidate",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Remove duplicate rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "351": {
    "code_id": "102",
    "numeric_id": 351,
    "title": "Count Student Number in Departments",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Exists vs IN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "352": {
    "code_id": "103",
    "numeric_id": 352,
    "title": "Investments in 2016",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for NOT EXISTS.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "353": {
    "code_id": "104",
    "numeric_id": 353,
    "title": "Friend Requests II: Who Has the Most Friends",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Correlated subquery.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "354": {
    "code_id": "105",
    "numeric_id": 354,
    "title": "Tree Node",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Nested subqueries.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "355": {
    "code_id": "106",
    "numeric_id": 355,
    "title": "Shortest Distance in a Plane",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Max salary employee.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "356": {
    "code_id": "107",
    "numeric_id": 356,
    "title": "Second Degree Follower",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Min salary employee.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "357": {
    "code_id": "108",
    "numeric_id": 357,
    "title": "Exchange Seats",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers without orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "358": {
    "code_id": "109",
    "numeric_id": 358,
    "title": "Customers Who Bought All Products",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Products never sold.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "359": {
    "code_id": "110",
    "numeric_id": 359,
    "title": "Product Sales Analysis III",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Orders above average amount.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "360": {
    "code_id": "111",
    "numeric_id": 360,
    "title": "Project Employees III",
    "code": "SELECT employee_id, first_name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for ROW_NUMBER().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT employee_id, first_name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "361": {
    "code_id": "112",
    "numeric_id": 361,
    "title": "Unpopular Books",
    "code": "SELECT employee_id, first_name, salary, RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for RANK().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT employee_id, first_name, salary, RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "362": {
    "code_id": "113",
    "numeric_id": 362,
    "title": "New Users Daily Count",
    "code": "SELECT employee_id, first_name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for DENSE_RANK().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT employee_id, first_name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "363": {
    "code_id": "114",
    "numeric_id": 363,
    "title": "Highest Grade For Each Student",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for NTILE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "364": {
    "code_id": "115",
    "numeric_id": 364,
    "title": "Reported Posts II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LEAD().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "365": {
    "code_id": "116",
    "numeric_id": 365,
    "title": "Article Views II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LAG().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "366": {
    "code_id": "117",
    "numeric_id": 366,
    "title": "Market Analysis I",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for FIRST_VALUE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "367": {
    "code_id": "118",
    "numeric_id": 367,
    "title": "Product Price at a Given Date",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LAST_VALUE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "368": {
    "code_id": "119",
    "numeric_id": 368,
    "title": "Immediate Food Delivery II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running total.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "369": {
    "code_id": "120",
    "numeric_id": 369,
    "title": "Monthly Transactions I",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Cumulative sum.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "370": {
    "code_id": "121",
    "numeric_id": 370,
    "title": "Last Person to Fit in the Bus",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Moving average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "371": {
    "code_id": "122",
    "numeric_id": 371,
    "title": "Monthly Transactions II",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Top 3 salaries.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "372": {
    "code_id": "123",
    "numeric_id": 372,
    "title": "Team Scores in Football Tournament",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Highest salary per department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "373": {
    "code_id": "124",
    "numeric_id": 373,
    "title": "Page Recommendations",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Lowest salary per department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "374": {
    "code_id": "125",
    "numeric_id": 374,
    "title": "All People Report to the Given Manager",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Previous month's sales.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "375": {
    "code_id": "126",
    "numeric_id": 375,
    "title": "Find the Start and End Number of Continuous Ranges",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Next month's sales.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "376": {
    "code_id": "127",
    "numeric_id": 376,
    "title": "Running Total for Different Genders",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Difference from previous row.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "377": {
    "code_id": "128",
    "numeric_id": 377,
    "title": "Restaurant Growth",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "378": {
    "code_id": "129",
    "numeric_id": 378,
    "title": "Movie Rating",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running count.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "379": {
    "code_id": "130",
    "numeric_id": 379,
    "title": "Activity Participants",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Percent rank.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "380": {
    "code_id": "131",
    "numeric_id": 380,
    "title": "Number of Trusted Contacts of a Customer",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Dense rank by department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "381": {
    "code_id": "132",
    "numeric_id": 381,
    "title": "Capital Gain/Loss",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Row number partition.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "382": {
    "code_id": "133",
    "numeric_id": 382,
    "title": "Customers Who Bought Products A and B but Not C",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Ranking products.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "383": {
    "code_id": "134",
    "numeric_id": 383,
    "title": "Evaluate Boolean Expression",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Ranking students.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "384": {
    "code_id": "135",
    "numeric_id": 384,
    "title": "Apples & Oranges",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Ranking salespersons.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "385": {
    "code_id": "136",
    "numeric_id": 385,
    "title": "Active Users",
    "code": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Top N customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "386": {
    "code_id": "137",
    "numeric_id": 386,
    "title": "Rectangles Area",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Bottom N products.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "387": {
    "code_id": "138",
    "numeric_id": 387,
    "title": "Calculate Salaries",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Window frame examples.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "388": {
    "code_id": "139",
    "numeric_id": 388,
    "title": "Countries You Can Safely Invest In",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for PARTITION BY.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "389": {
    "code_id": "140",
    "numeric_id": 389,
    "title": "The Most Recent Three Orders",
    "code": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for ORDER BY in window functions.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "390": {
    "code_id": "141",
    "numeric_id": 390,
    "title": "The Most Recent Orders for Each Product",
    "code": "WITH HighEarners AS (SELECT * FROM employees WHERE salary > 80000) SELECT * FROM HighEarners;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Simple CTE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "WITH HighEarners AS (SELECT * FROM employees WHERE salary > 80000) SELECT * FROM HighEarners;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "391": {
    "code_id": "142",
    "numeric_id": 391,
    "title": "Bank Account Summary",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Multiple CTEs.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "392": {
    "code_id": "143",
    "numeric_id": 392,
    "title": "The Most Frequently Ordered Products for Each Customer",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Recursive CTE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "393": {
    "code_id": "144",
    "numeric_id": 393,
    "title": "Find the Missing IDs",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "394": {
    "code_id": "145",
    "numeric_id": 394,
    "title": "Number of Calls Between Two Persons",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Category hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "395": {
    "code_id": "146",
    "numeric_id": 395,
    "title": "Biggest Window Between Visits",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running totals using CTE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "396": {
    "code_id": "147",
    "numeric_id": 396,
    "title": "Leetflex Banned Accounts",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Ranking using CTE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "397": {
    "code_id": "148",
    "numeric_id": 397,
    "title": "Grand Slam Titles",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate removal.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "398": {
    "code_id": "149",
    "numeric_id": 398,
    "title": "Ad-Free Sessions",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Temporary calculations.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "399": {
    "code_id": "150",
    "numeric_id": 399,
    "title": "Find Interview Candidates",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Monthly sales report.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "400": {
    "code_id": "151",
    "numeric_id": 400,
    "title": "Maximum Transaction Each Day",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Department summary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "401": {
    "code_id": "152",
    "numeric_id": 401,
    "title": "League Statistics",
    "code": "SELECT *, COUNT(*) AS count FROM customers GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customer summary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM customers GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "402": {
    "code_id": "153",
    "numeric_id": 402,
    "title": "Suspicious Bank Accounts",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sales analysis.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "403": {
    "code_id": "154",
    "numeric_id": 403,
    "title": "Orders With Maximum Quantity Above Average",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee analysis.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "404": {
    "code_id": "155",
    "numeric_id": 404,
    "title": "Group Employees of the Same Salary",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Recursive numbers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "405": {
    "code_id": "156",
    "numeric_id": 405,
    "title": "Page Recommendations II",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Grade students.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "406": {
    "code_id": "157",
    "numeric_id": 406,
    "title": "Leetcodify Friends Recommendations",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Salary bands.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "407": {
    "code_id": "158",
    "numeric_id": 407,
    "title": "Leetcodify Similar Friends",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Age groups.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "408": {
    "code_id": "159",
    "numeric_id": 408,
    "title": "Confirmation Rate",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sales categories.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "409": {
    "code_id": "160",
    "numeric_id": 409,
    "title": "Users That Actively Request Confirmation Messages",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Bonus calculation.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "410": {
    "code_id": "161",
    "numeric_id": 410,
    "title": "Strong Friendship",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customer classification.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "411": {
    "code_id": "162",
    "numeric_id": 411,
    "title": "All the Pairs With the Maximum Number of Common Followers",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Pass/Fail status.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "412": {
    "code_id": "163",
    "numeric_id": 412,
    "title": "Find Cutoff Score for Each School",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Gender formatting.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "413": {
    "code_id": "164",
    "numeric_id": 413,
    "title": "The Category of Each Member in the Store",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Conditional aggregation.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "414": {
    "code_id": "165",
    "numeric_id": 414,
    "title": "Account Balance",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Multiple CASE conditions.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "415": {
    "code_id": "166",
    "numeric_id": 415,
    "title": "The Winner University",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LENGTH().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "416": {
    "code_id": "167",
    "numeric_id": 416,
    "title": "Drop Type 1 Orders for Customers With Type 0 Orders",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for UPPER().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "417": {
    "code_id": "168",
    "numeric_id": 417,
    "title": "The Airport With the Most Traffic",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LOWER().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "418": {
    "code_id": "169",
    "numeric_id": 418,
    "title": "Build the Equation",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for CONCAT().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "419": {
    "code_id": "170",
    "numeric_id": 419,
    "title": "Order Two Columns Independently",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for SUBSTRING().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "420": {
    "code_id": "171",
    "numeric_id": 420,
    "title": "The Change in Global Rankings",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for REPLACE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "421": {
    "code_id": "172",
    "numeric_id": 421,
    "title": "Finding the Topic of Each Post",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for TRIM().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "422": {
    "code_id": "173",
    "numeric_id": 422,
    "title": "The Number of Users That Are Eligible for Discount",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LTRIM().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "423": {
    "code_id": "174",
    "numeric_id": 423,
    "title": "Users With Two Purchases Within Seven Days",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for RTRIM().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "424": {
    "code_id": "175",
    "numeric_id": 424,
    "title": "The Users That Are Eligible for Discount",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LEFT().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "425": {
    "code_id": "176",
    "numeric_id": 425,
    "title": "Number of Times a Driver Was a Passenger",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for RIGHT().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "426": {
    "code_id": "177",
    "numeric_id": 426,
    "title": "Products With Three or More Orders in Two Consecutive Years",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for POSITION/CHARINDEX().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "427": {
    "code_id": "178",
    "numeric_id": 427,
    "title": "Tasks Count in the Weekend",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for REVERSE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "428": {
    "code_id": "179",
    "numeric_id": 428,
    "title": "Arrange Table by Gender",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Split names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "429": {
    "code_id": "180",
    "numeric_id": 429,
    "title": "The First Day of the Maximum Recorded Degree in Each City",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Initials.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "430": {
    "code_id": "181",
    "numeric_id": 430,
    "title": "Product Sales Analysis IV",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Email extraction.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "431": {
    "code_id": "182",
    "numeric_id": 431,
    "title": "Product Sales Analysis V",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Domain extraction.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "432": {
    "code_id": "183",
    "numeric_id": 432,
    "title": "All the Matches of the League",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count characters.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "433": {
    "code_id": "184",
    "numeric_id": 433,
    "title": "Compute the Rank as a Percentage",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Remove spaces.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "434": {
    "code_id": "185",
    "numeric_id": 434,
    "title": "Generate the Invoice",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Replace multiple characters.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "435": {
    "code_id": "186",
    "numeric_id": 435,
    "title": "Calculate the Influence of Each Salesperson",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Current date.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "436": {
    "code_id": "187",
    "numeric_id": 436,
    "title": "Change Null Values in a Table to the Previous Value",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Current timestamp.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "437": {
    "code_id": "188",
    "numeric_id": 437,
    "title": "Employees With Deductions",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Difference between dates.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "438": {
    "code_id": "189",
    "numeric_id": 438,
    "title": "Customers With Strictly Increasing Purchases",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Add days.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "439": {
    "code_id": "190",
    "numeric_id": 439,
    "title": "Form a Chemical Bond",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Add months.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "440": {
    "code_id": "191",
    "numeric_id": 440,
    "title": "Count Artist Occurrences On Spotify Ranking List",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Extract year.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "441": {
    "code_id": "192",
    "numeric_id": 441,
    "title": "Product Price at a Given Date II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Extract month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "442": {
    "code_id": "193",
    "numeric_id": 442,
    "title": "User Activity for the Past 60 Days",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Extract day.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "443": {
    "code_id": "194",
    "numeric_id": 443,
    "title": "Immediate Food Delivery III",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Week number.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "444": {
    "code_id": "195",
    "numeric_id": 444,
    "title": "Monthly Transactions III",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Quarter.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "445": {
    "code_id": "196",
    "numeric_id": 445,
    "title": "Project Employees IV",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Last day of month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "446": {
    "code_id": "197",
    "numeric_id": 446,
    "title": "Sales Analysis IV",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for First day of month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "447": {
    "code_id": "198",
    "numeric_id": 447,
    "title": "Winning Candidate II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Date formatting.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "448": {
    "code_id": "199",
    "numeric_id": 448,
    "title": "Team Scores in Football Tournament II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Age calculation.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "449": {
    "code_id": "200",
    "numeric_id": 449,
    "title": "Find Cutoff Score for Each Department",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees hired this year.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "450": {
    "code_id": "201",
    "numeric_id": 450,
    "title": "The Airport With Lowest Traffic",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Orders this month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "451": {
    "code_id": "202",
    "numeric_id": 451,
    "title": "The Change in Regional Rankings",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sales last 30 days.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "452": {
    "code_id": "203",
    "numeric_id": 452,
    "title": "Active Users II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Weekend records.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "453": {
    "code_id": "204",
    "numeric_id": 453,
    "title": "Rectangles Perimeter",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Leap year check.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "454": {
    "code_id": "205",
    "numeric_id": 454,
    "title": "Employees With Bonus Deductions",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Monthly report.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "455": {
    "code_id": "206",
    "numeric_id": 455,
    "title": "Ad-Free Active Sessions",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find duplicates.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "456": {
    "code_id": "207",
    "numeric_id": 456,
    "title": "Count Salary Categories",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Remove duplicates.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "457": {
    "code_id": "208",
    "numeric_id": 457,
    "title": "Active Businesses",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate emails.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "458": {
    "code_id": "209",
    "numeric_id": 458,
    "title": "Get Highest Answer Rate Question",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "459": {
    "code_id": "210",
    "numeric_id": 459,
    "title": "Department Top Three Salaries",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate phone numbers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "460": {
    "code_id": "211",
    "numeric_id": 460,
    "title": "Trips and Users",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate salaries.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "461": {
    "code_id": "212",
    "numeric_id": 461,
    "title": "Find Median Given Frequency of Numbers",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Keep first duplicate.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "462": {
    "code_id": "213",
    "numeric_id": 462,
    "title": "Find Cumulative Salary of an Employee",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Keep latest duplicate.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "463": {
    "code_id": "214",
    "numeric_id": 463,
    "title": "Human Traffic of Stadium",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Delete duplicate rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "464": {
    "code_id": "215",
    "numeric_id": 464,
    "title": "Average Salary: Departments VS Company",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count duplicate groups.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "465": {
    "code_id": "216",
    "numeric_id": 465,
    "title": "Students Report By Geography",
    "code": "SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Second highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "466": {
    "code_id": "217",
    "numeric_id": 466,
    "title": "Game Play Analysis V",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Nth highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "467": {
    "code_id": "218",
    "numeric_id": 467,
    "title": "User Purchase Platform",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Top 3 salaries per department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "468": {
    "code_id": "219",
    "numeric_id": 468,
    "title": "Market Analysis II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Consecutive login days.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "469": {
    "code_id": "220",
    "numeric_id": 469,
    "title": "Tournament Winners",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Consecutive numbers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "470": {
    "code_id": "221",
    "numeric_id": 470,
    "title": "Report Contiguous Dates",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Gap and island problems.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "471": {
    "code_id": "222",
    "numeric_id": 471,
    "title": "Number of Transactions per Visit",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Median salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "472": {
    "code_id": "223",
    "numeric_id": 472,
    "title": "Get the Second Most Recent Activity",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Pivot table.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "473": {
    "code_id": "224",
    "numeric_id": 473,
    "title": "Total Sales Amount by Year",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Unpivot table.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "474": {
    "code_id": "225",
    "numeric_id": 474,
    "title": "Find the Quiet Students in All Exams",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "475": {
    "code_id": "226",
    "numeric_id": 475,
    "title": "Sales by Day of the Week",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running balance.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "476": {
    "code_id": "227",
    "numeric_id": 476,
    "title": "Hopper Company Queries I",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Daily active users.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "477": {
    "code_id": "228",
    "numeric_id": 477,
    "title": "Hopper Company Queries II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Monthly active users.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "478": {
    "code_id": "229",
    "numeric_id": 478,
    "title": "Hopper Company Queries III",
    "code": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Churn customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "479": {
    "code_id": "230",
    "numeric_id": 479,
    "title": "Find the Subtasks That Did Not Execute",
    "code": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Repeat customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "480": {
    "code_id": "231",
    "numeric_id": 480,
    "title": "First and Last Call On the Same Day",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for First purchase.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "481": {
    "code_id": "232",
    "numeric_id": 481,
    "title": "Count the Number of Experiments",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Last purchase.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "482": {
    "code_id": "233",
    "numeric_id": 482,
    "title": "The Number of Seniors and Juniors to Join the Company",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Most expensive product.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "483": {
    "code_id": "234",
    "numeric_id": 483,
    "title": "The Number of Seniors and Juniors to Join the Company II",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Least expensive product.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "484": {
    "code_id": "235",
    "numeric_id": 484,
    "title": "Number of Accounts That Did Not Stream",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Product never sold.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "485": {
    "code_id": "236",
    "numeric_id": 485,
    "title": "The Number of Passengers in Each Bus I",
    "code": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customer lifetime value.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "486": {
    "code_id": "237",
    "numeric_id": 486,
    "title": "The Number of Passengers in Each Bus II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Revenue by month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "487": {
    "code_id": "238",
    "numeric_id": 487,
    "title": "Longest Winning Streak",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Rolling average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "488": {
    "code_id": "239",
    "numeric_id": 488,
    "title": "Dynamic Pivoting of a Table",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Year-over-year growth.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "489": {
    "code_id": "240",
    "numeric_id": 489,
    "title": "Dynamic Unpivoting of a Table",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Month-over-month growth.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "490": {
    "code_id": "241",
    "numeric_id": 490,
    "title": "Merge Overlapping Events in the Same Hall",
    "code": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Top-selling product.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "491": {
    "code_id": "242",
    "numeric_id": 491,
    "title": "Consecutive Numbers Sum",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Least-selling product.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "492": {
    "code_id": "243",
    "numeric_id": 492,
    "title": "Shortest Distance in a Plane II",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Market share calculation.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "493": {
    "code_id": "244",
    "numeric_id": 493,
    "title": "Department Top Five Salaries",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Percent contribution.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "494": {
    "code_id": "245",
    "numeric_id": 494,
    "title": "Total Sales Amount by Month",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Cohort analysis.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "495": {
    "code_id": "246",
    "numeric_id": 495,
    "title": "Longest Losing Streak",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Retention analysis.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "496": {
    "code_id": "247",
    "numeric_id": 496,
    "title": "Order Three Columns Independently",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Dense ranking challenge.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "497": {
    "code_id": "248",
    "numeric_id": 497,
    "title": "Dynamic Pivoting of a Summary Table",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Recursive hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "498": {
    "code_id": "249",
    "numeric_id": 498,
    "title": "Dynamic Unpivoting of a Summary Table",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sessionization problem.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "499": {
    "code_id": "250",
    "numeric_id": 499,
    "title": "Median Employee Salary",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Fraud detection using SQL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "500": {
    "code_id": "SQL-C-NEW5",
    "numeric_id": 500,
    "title": "Find Cutoff Score",
    "code": "SELECT COUNT(*) AS total_employees FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count total rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT COUNT(*) AS total_employees FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-001": {
    "code_id": "Basics-001",
    "numeric_id": 1,
    "title": "Select All Columns from a Table",
    "code": "SELECT *\nFROM table_name;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "The SELECT statement is used to retrieve data from a database table. The asterisk (*) selects all columns, and FROM table_name specifies the source table.",
    "mentalModel": "table_name ──► Read every row ──► Read every column ──► Display result",
    "lineByLine": [
      {
        "line": "SELECT *",
        "explanation": "• SELECT tells the database that you want to retrieve data.\n• * (asterisk) means all columns.\nInstead of explicitly writing out every column name (column1, column2, column3, ...), you can simply write SELECT * because * automatically selects every column."
      },
      {
        "line": "FROM table_name;",
        "explanation": "FROM tells SQL where the data is stored. Here, table_name is the table name. SQL reads all data from this table."
      },
      {
        "line": "⚙️ SQL Execution Order",
        "explanation": "Although we write SELECT * FROM table_name;, SQL logically executes it in this order:\nStep 1: FROM table_name ── Locate the specified table.\nStep 2: SELECT * ── Retrieve every column from every row."
      },
      {
        "line": "🚀 Alternative Solutions",
        "explanation": "Method 1 (Recommended):\n```sql\nSELECT *\nFROM table_name;\n```\n\nMethod 2 (Explicit Column Names):\n```sql\nSELECT column1,\n       column2,\n       column3\nFROM table_name;\n```\n\nBoth queries return the exact same data."
      }
    ],
    "beginnerTraps": [
      "1. Forgetting the FROM clause: SELECT *; ❌ Error: SQL doesn't know which table to read.",
      "2. Incorrect table name: SELECT * FROM wrong_table_name; ❌ If the table name doesn't match your schema, this query will fail.",
      "3. Misspelling SQL keywords: SELECT * FROM table_name; ❌ SELECT is not a valid SQL keyword."
    ],
    "keyTakeaway": "SELECT retrieves data from a database, * selects all columns, and FROM specifies the target table. Without a WHERE clause, all rows are returned. SELECT * is great for learning and debugging, but selecting specific columns is preferred in production for better performance.",
    "interviewPros": [
      "What does SELECT do? It retrieves data from a database table.",
      "What does * mean? It represents all columns in the table.",
      "Does SELECT * return all rows? Yes, if there is no WHERE clause, SQL returns every row.",
      "Can SELECT * be used on any table? Yes, as long as the table exists in your schema and you have access permissions."
    ],
    "interviewCons": [
      "⚡ Performance Notes: SELECT * is easy to write and good for debugging, but in production it retrieves unnecessary columns, uses more memory, and increases network traffic.",
      "🎯 Real-World Use Cases: Viewing all table records, checking imported/migrated data, verifying database updates, exploring a new schema."
    ]
  },
  "Basics-002": {
    "code_id": "Basics-002",
    "numeric_id": 2,
    "title": "Select Specific Columns",
    "code": "SELECT employee_id,\n       first_name,\n       last_name,\n       job_title,\n       salary\nFROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Selects specific columns (employee_id, first_name, last_name, job_title, salary) from the employees table.",
    "mentalModel": "table_name ──► Read every row ──► Pick only requested columns ──► Display result\n\nUnlike SELECT *, SQL ignores every column that you didn't ask for.",
    "lineByLine": [
      {
        "line": "SELECT column1, column2, column3",
        "explanation": "• SELECT tells SQL that you want to retrieve data.\n• Instead of selecting every column (*), you explicitly specify which columns you need.\n• SQL reads only those columns and ignores the rest.\n• This improves readability and performance.\n\nInstead of writing:\n```sql\nSELECT *\nFROM table_name;\n```\nyou write:\n```sql\nSELECT column1,\n       column2,\n       column3\nFROM table_name;\n```\nwhen you don't need every column."
      },
      {
        "line": "FROM table_name;",
        "explanation": "FROM tells SQL where the data is stored.\n\ntable_name represents any table in your database.\n\nExamples:\n• FROM employees;\n• FROM students;\n• FROM customers;\n• FROM products;"
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Although we write:\n```sql\nSELECT column1,\n       column2,\n       column3\nFROM table_name;\n```\nSQL logically executes it in this order:\nStep 1: FROM table_name ── Locate the specified table.\nStep 2: Read every row.\nStep 3: Retrieve only: column1, column2, column3\nStep 4: Return the result."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended):\n```sql\nSELECT column1,\n       column2,\n       column3\nFROM table_name;\n```\n✔ Retrieves only required columns.\n✔ Faster.\n✔ Best practice.\n\nMethod 2:\n```sql\nSELECT *\nFROM table_name;\n```\nReturns the same rows but includes every column. Useful for debugging but not recommended if you only need a few columns."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nSELECT ──► Retrieve data\ncolumn1, column2 ──► Only required columns\nFROM ──► Source table\nResult ──► Only requested columns are returned\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column1,\n       column2,\n       column3\nFROM table_name;\n```\nProblem Solution:\n```sql\nSELECT employee_id,\n       first_name,\n       last_name,\n       job_title,\n       salary\nFROM employees;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting commas: SELECT column1 column2 column3 FROM table_name; ── Error: SQL expects commas between column names. (Correct: SELECT column1, column2, column3 FROM table_name;)",
      "❌ 2. Using a wrong column name: SELECT colum1 FROM table_name; ── Error: Unknown column because colum1 doesn't exist.",
      "❌ 3. Wrong table name: SELECT column1 FROM wrong_table; ── Error: Table doesn't exist.",
      "❌ 4. Forgetting FROM: SELECT column1, column2; ── Error: SQL doesn't know where to retrieve the data.",
      "❌ 5. Misspelling SELECT: SELET column1 FROM table_name; ── Error: SELET is not a valid SQL keyword."
    ],
    "keyTakeaway": "Specify only the columns you actually need. Retrieving fewer columns reduces memory usage, improves performance, minimizes network traffic, and makes queries easier to understand. In production systems, selecting specific columns is considered a best practice.",
    "interviewPros": [
      "Q1. Why should we avoid SELECT *? Because it retrieves unnecessary columns, increases network traffic, consumes more memory, and can reduce performance.",
      "Q2. Is selecting fewer columns faster? Yes. The database reads and transfers less data.",
      "Q3. Can columns be selected in any order? Yes (e.g. SELECT salary, first_name, employee_id FROM employees;). The output appears in the exact same order as specified in the query.",
      "Q4. Can we select just one column? Yes (e.g. SELECT salary FROM employees;).",
      "Q5. Does selecting fewer columns reduce database size? No. It only reduces the amount of data returned by the query."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between SELECT * and selecting specific columns?\n• Why is selecting specific columns considered a best practice?\n• Which query is more efficient? (SELECT * FROM employees; vs SELECT employee_id, first_name FROM employees;)\n• Does selecting fewer columns improve performance?\n• Can we change the order of columns in the output?",
      "⚡ Performance Notes:\n• ✅ Recommended: SELECT employee_id, first_name, last_name, job_title, salary FROM employees; (✔ Reads only required columns, ✔ Less memory usage, ✔ Less network traffic, ✔ Preferred in production)\n• Not Recommended: SELECT * FROM employees; (✔ Easy to write, ❌ Reads unnecessary columns, ❌ Transfers extra data, ❌ Slightly slower on large tables)",
      "🌍 Real-World Use Cases:\n• ✅ Employee Directory: Show only Employee Name, Designation, Department\n• ✅ Payroll System: Display only Employee ID, Name, Salary\n• ✅ Student Portal: Display only Student Name, Roll Number, Marks\n• ✅ Product Catalog: Display only Product Name, Price, Stock",
      "🎓 Company Interview Tip (Amazon, Microsoft, Google, Oracle, IBM): Why is SELECT * considered bad practice? 'Because it retrieves unnecessary columns, increases memory usage and network traffic, and can negatively affect performance. Selecting only the required columns is more efficient and improves readability.'"
    ]
  },
  "Basics-003": {
    "code_id": "Basics-003",
    "numeric_id": 3,
    "title": "Filter Rows Using WHERE",
    "code": "SELECT *\nFROM employees\nWHERE department_id = 101;",
    "timeComplexity": "O(N) (Without Index) / O(log N) (With Index)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Filters rows from the employees table to return only those matching department_id = 101.",
    "mentalModel": "table_name ──► Read every row ──► Check WHERE condition ──► Keep matching rows (TRUE) / Ignore (FALSE) ──► Display Result\n\nThink of the WHERE clause as a filter. Instead of displaying all 100 employees, SQL checks each row and returns only matching rows.",
    "lineByLine": [
      {
        "line": "SELECT *",
        "explanation": "• SELECT tells SQL to retrieve data.\n• * means return all columns.\n• You can also select specific columns instead of using * (e.g. SELECT employee_id, first_name, salary)."
      },
      {
        "line": "FROM table_name",
        "explanation": "FROM tells SQL which table to read.\nExamples:\n• FROM employees\n• FROM students\n• FROM products"
      },
      {
        "line": "WHERE condition;",
        "explanation": "WHERE filters rows. Only rows where the condition is TRUE are returned.\n\nGeneral Syntax: WHERE column_name operator value;\nExamples:\n• WHERE salary > 50000;\n• WHERE age >= 18;\n• WHERE city = 'Bangalore';\n• WHERE department_id = 101;\n\nCommon Comparison Operators:\n• = (Equal to: salary = 50000)\n• > (Greater than: salary > 50000)\n• < (Less than: salary < 50000)\n• >= (Greater than or Equal: age >= 18)\n• <= (Less than or Equal: marks <= 80)\n• <> or != (Not Equal: city <> 'Delhi')"
      },
      {
        "line": "GB️ SQL EXECUTION ORDER",
        "explanation": "Although we write:\n```sql\nSELECT *\nFROM table_name\nWHERE condition;\n```\nSQL logically executes it like this:\nStep 1: FROM table_name ── Locate the table.\nStep 2: Read every row.\nStep 3: WHERE condition ── Check each row against the condition.\nStep 4: Keep only matching rows.\nStep 5: SELECT * ── Return all columns of the remaining rows."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended):\n```sql\nSELECT *\nFROM table_name\nWHERE condition;\n```\n\nMethod 2 (Specific Columns):\n```sql\nSELECT column1,\n       column2\nFROM table_name\nWHERE condition;\n```\nRecommended when you only need a few columns.\nExample:\n```sql\nSELECT employee_id,\n       first_name,\n       salary\nFROM employees\nWHERE department_id = 101;\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nFROM ──► Choose table\n   ↓\nWHERE ──► Filter rows\n   ↓\nSELECT ──► Choose columns & return matching rows\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column1, column2\nFROM table_name\nWHERE condition;\n```\nProblem Solution:\n```sql\nSELECT *\nFROM employees\nWHERE department_id = 101;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting the WHERE keyword: SELECT * FROM employees department_id = 101; ── Error: SQL doesn't understand the condition.",
      "❌ 2. Using == instead of =: SELECT * FROM employees WHERE salary == 50000; ── Wrong in standard SQL (Use WHERE salary = 50000;).",
      "❌ 3. Forgetting Quotes for Strings: SELECT * FROM employees WHERE city = Bangalore; ── Error: SQL thinks Bangalore is a column name (Use WHERE city = 'Bangalore';).",
      "❌ 4. Wrong Column Name: SELECT * FROM employees WHERE salaries > 50000; ── Error: Unknown column salaries.",
      "❌ 5. Using = with NULL: WHERE manager_id = NULL; ── Incorrect (Use WHERE manager_id IS NULL;)."
    ],
    "keyTakeaway": "The WHERE clause filters rows before SQL returns the result. Only rows that satisfy the specified condition are included in the output. Without a WHERE clause, SQL returns every row in the table.",
    "interviewPros": [
      "Q1. What is the purpose of the WHERE clause? It filters rows based on a condition.",
      "Q2. Does WHERE filter rows or columns? Rows. SELECT controls columns, while WHERE controls rows.",
      "Q3. Can we use multiple conditions? Yes, using AND or OR operators.",
      "Q4. What happens if no row matches? SQL returns an empty result set (no error occurs).",
      "Q5. Can WHERE be used without SELECT? No. WHERE is part of a query that retrieves, updates, or deletes data."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between WHERE and HAVING?\n• Can WHERE use aggregate functions like SUM()?\n• Does WHERE execute before SELECT?\n• Can multiple conditions be used in WHERE?\n• What happens if no records match the condition?",
      "⚡ Performance Notes:\n• ✅ Recommended: SELECT * FROM employees WHERE department_id = 101; (✔ Returns only matching rows, ✔ Faster than retrieving the whole table, ✔ Even faster if department_id is indexed)\n• Less Efficient: SELECT * FROM employees; then filtering manually in app code (❌ More data transferred, ❌ Slower, ❌ Wastes memory)",
      "🌍 Real-World Use Cases:\n• ✅ Department Filter: WHERE department_id = 101\n• ✅ Price Filter: WHERE price < 1000\n• ✅ Student Pass Filter: WHERE marks >= 35\n• ✅ Order Date Filter: WHERE order_date = CURRENT_DATE",
      "🎓 Company Interview Tip (Amazon, Microsoft, Oracle, Infosys, TCS, Accenture): 'What is the difference between SELECT and WHERE?' ── SELECT decides which columns to display, while WHERE decides which rows to return.",
      "🔥 Pro Tip (Interview Execution Order): Which clause executes first: SELECT or WHERE? Logical execution order is FROM ➔ WHERE ➔ SELECT. Even though SELECT is written first, SQL finds the table, filters the rows, and then returns selected columns."
    ]
  },
  "Basics-004": {
    "code_id": "Basics-004",
    "numeric_id": 4,
    "title": "Use Multiple Conditions with AND",
    "code": "SELECT *\nFROM employees\nWHERE department_id = 101\nAND salary > 60000;",
    "timeComplexity": "O(N) (Without Index) / O(log N) (With Index)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "The AND operator combines multiple filtering criteria, requiring every condition to evaluate to TRUE before a row is included in the output.",
    "mentalModel": "table_name ──► Read every row ──► Check Checkpoint 1 (department_id = 101?) ──► Check Checkpoint 2 (salary > 60000?) ──► Keep only if BOTH TRUE ──► Display result",
    "lineByLine": [
      {
        "line": "SELECT *",
        "explanation": "Retrieves all columns from the table. You can also specify specific columns like SELECT employee_id, first_name, salary."
      },
      {
        "line": "FROM table_name",
        "explanation": "Specifies the table from which SQL retrieves data. Examples: FROM employees, FROM students, FROM products."
      },
      {
        "line": "WHERE department_id = 101",
        "explanation": "First checkpoint filter: evaluates if department_id equals 101."
      },
      {
        "line": "AND salary > 60000;",
        "explanation": "Second checkpoint filter: AND combines multiple conditions. Every condition connected with AND must be TRUE. If even one is FALSE, the row is discarded."
      },
      {
        "line": "📚 Understanding AND & Truth Table",
        "explanation": "SQL evaluates Question 1 (Is department_id = 101?) -> If YES -> Question 2 (Is salary > 60000?) -> If YES -> Return row.\n\nTruth Table:\n• TRUE + TRUE = ✅ Return Row\n• TRUE + FALSE = ❌ Ignore\n• FALSE + TRUE = ❌ Ignore\n• FALSE + FALSE = ❌ Ignore"
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees (Locate table)\nStep 2: Read every row\nStep 3: Evaluate department_id = 101\nStep 4: Evaluate salary > 60000\nStep 5: If both TRUE -> Return row, otherwise ignore."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended - All Columns):\n```sql\nSELECT *\nFROM employees\nWHERE department_id = 101\nAND salary > 60000;\n```\n\nMethod 2 (Specific Columns):\n```sql\nSELECT employee_id,\n       first_name,\n       salary\nFROM employees\nWHERE department_id = 101\nAND salary > 60000;\n```\nReturns only required columns, better for production systems."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nWHERE ──► First Condition ──► Second Condition ──► Both TRUE? ──► Yes: Return / No: Ignore\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column1,\n       column2\nFROM table_name\nWHERE condition1\nAND condition2;\n```\nProblem Solution:\n```sql\nSELECT *\nFROM employees\nWHERE department_id = 101\nAND salary > 60000;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting WHERE: SELECT * FROM employees AND salary > 60000; ── Error: AND cannot be used without a WHERE clause.",
      "❌ 2. Using Comma Instead of AND: WHERE department_id = 101, salary > 60000; ── Error: Conditions cannot be separated using commas.",
      "❌ 3. Misspelling AND: WHERE department_id = 101 AAD salary > 60000; ── Error: AAD is not a valid SQL keyword.",
      "❌ 4. Comparing Strings Without Quotes: WHERE city = Bangalore AND salary > 50000; ── Error: SQL treats Bangalore as a column (Use WHERE city = 'Bangalore').",
      "❌ 5. Expecting One Condition to be Enough: Assuming department_id = 101 is enough. With AND, every condition must be TRUE."
    ],
    "keyTakeaway": "The AND operator narrows your results by requiring every condition to be true. It is used when you want records that satisfy all specified conditions. The more AND conditions you add, the more specific your results become.",
    "interviewPros": [
      "Q1. What does AND do? It combines multiple conditions, every condition must evaluate to TRUE.",
      "Q2. What if one condition is FALSE? The row is not returned.",
      "Q3. Can we use three or more AND conditions? Yes (e.g. WHERE department_id = 101 AND salary > 60000 AND city = 'Bangalore').",
      "Q4. Is AND more restrictive than OR? Yes, AND returns fewer rows because every condition must be true.",
      "Q5. Can AND be combined with OR? Yes, usually using parentheses (e.g. WHERE department_id = 101 AND (salary > 60000 OR city = 'Bangalore'))."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between AND and OR?\n• Which operator returns fewer rows?\n• What is the truth table for AND?\n• Can AND work with LIKE, IN, BETWEEN, and IS NULL?\n• Why do we use parentheses with AND and OR?",
      "⚡ Performance Notes:\n• ✅ Recommended: SELECT employee_id, first_name, salary FROM employees WHERE department_id = 101 AND salary > 60000; (✔ Filters unnecessary rows, ✔ Returns less data, ✔ Performs even better when indexed)\n• Less Efficient: SELECT * FROM employees; then filtering manually in app code (❌ More data transferred, ❌ Slower, ❌ Wastes memory)",
      "🌍 Real-World Use Cases:\n• ✅ Department & Salary: WHERE department_id = 101 AND salary > 60000;\n• ✅ Student Merit: WHERE class = 10 AND marks > 90;\n• ✅ Product Inventory: WHERE stock > 0 AND price < 1000;\n• ✅ Customer Membership: WHERE city = 'Bangalore' AND membership = 'Premium';",
      "🎓 Company Interview Tip (Amazon, Microsoft, Google, Oracle, IBM, Infosys, TCS, Accenture): 'Which returns fewer rows: AND or OR?' ── AND usually returns fewer rows because every condition must be TRUE. OR returns more rows because only one condition needs to be TRUE.",
      "🔥 Pro Tip (Interview Execution Order): AND = ALL conditions must be TRUE. Think of AND as a series of locked doors—you only reach the result if you unlock every door. 🔐"
    ]
  },
  "Basics-005": {
    "code_id": "Basics-005",
    "numeric_id": 5,
    "title": "Use Multiple Conditions with OR",
    "code": "SELECT *\nFROM employees\nWHERE department_id = 101\nOR salary > 60000;",
    "timeComplexity": "O(N) (Without Index) / O(log N) (With Suitable Index - Approximate)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "The OR operator broadens your query results by returning rows that satisfy at least one of the given conditions. If either condition evaluates to TRUE, the row is included in the output.",
    "mentalModel": "table_name ──► Read every row ──► Check First Condition (department_id = 101?) ──► YES ──► Return Row\n                                                                          └──► NO ──► Check Second Condition (salary > 60000?) ──► TRUE: Return Row / FALSE: Ignore Row",
    "lineByLine": [
      {
        "line": "SELECT *",
        "explanation": "• Retrieves every column from the table.\n• You can also retrieve only required columns (e.g. SELECT employee_id, first_name, salary)."
      },
      {
        "line": "FROM table_name",
        "explanation": "Specifies which table SQL should read (e.g., FROM employees; FROM students; FROM customers;)."
      },
      {
        "line": "WHERE department_id = 101",
        "explanation": "Checks the first condition: filters for employees belonging to department 101."
      },
      {
        "line": "OR salary > 60000;",
        "explanation": "OR tells SQL: 'If any one condition is TRUE, return the row.' Unlike AND, OR does not require every condition to be true."
      },
      {
        "line": "📚 Understanding OR & Truth Table",
        "explanation": "SQL evaluation order:\nQuestion 1: Is department_id = 101? ── If YES: Return row immediately.\nQuestion 2 (if Question 1 was NO): Is salary > 60000? ── If YES: Return row. Otherwise: Ignore row.\n\nTruth Table:\n• TRUE + TRUE = ✅ Return\n• TRUE + FALSE = ✅ Return\n• FALSE + TRUE = ✅ Return\n• FALSE + FALSE = ❌ Ignore (Only rejected when both are FALSE)"
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Locate the table.\nStep 2: Read every row.\nStep 3: Evaluate department_id = 101.\nStep 4: If FALSE, evaluate salary > 60000.\nStep 5: If either condition is TRUE, return the row. Otherwise, ignore it."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended - All Columns):\n```sql\nSELECT *\nFROM employees\nWHERE department_id = 101\nOR salary > 60000;\n```\n\nMethod 2 (Specific Columns):\n```sql\nSELECT employee_id,\n       first_name,\n       salary\nFROM employees\nWHERE department_id = 101\nOR salary > 60000;\n```\nBetter when only a few columns are needed in production."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nWHERE ──► Condition 1 ──► TRUE? ──► Yes: Return Row\n                              └──► No ──► Condition 2 ──► TRUE? ──► Yes: Return / No: Ignore\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column1,\n       column2\nFROM table_name\nWHERE condition1\nOR condition2;\n```\n\nProblem Solution:\n```sql\nSELECT *\nFROM employees\nWHERE department_id = 101\nOR salary > 60000;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using AND instead of OR: SELECT * FROM employees WHERE department_id = 101 AND salary > 60000; ── This returns only employees satisfying both conditions. If you need either, use OR.",
      "❌ 2. Forgetting WHERE: SELECT * FROM employees OR salary > 60000; ── Error: OR cannot be used without WHERE.",
      "❌ 3. Using Comma: SELECT * FROM employees WHERE department_id = 101, salary > 60000; ── Error: Conditions cannot be separated with commas.",
      "❌ 4. Comparing Strings Without Quotes: WHERE city = Bangalore OR salary > 60000; ── Error: Strings must be enclosed in single quotes ('Bangalore').",
      "❌ 5. Forgetting Parentheses with Complex Queries: WHERE department_id = 101 OR salary > 60000 AND city = 'Bangalore'; ── AND has higher precedence. Use parentheses: WHERE department_id = 101 OR (salary > 60000 AND city = 'Bangalore');"
    ],
    "keyTakeaway": "The OR operator broadens your search by returning rows where at least one condition is true. It is useful when you want records that satisfy any one of multiple conditions.",
    "interviewPros": [
      "Q1. What does OR do? It combines multiple conditions. If any one condition is TRUE, the row is returned.",
      "Q2. Which returns more rows: AND or OR? OR returns more rows because only one condition needs to be TRUE.",
      "Q3. Can OR be used with three conditions? Yes (e.g. WHERE city = 'Bangalore' OR city = 'Mysore' OR city = 'Tumkur';).",
      "Q4. Can OR work with LIKE, BETWEEN, IN? Yes, OR can combine almost any SQL condition.",
      "Q5. Can OR and AND be used together? Yes, always use parentheses to avoid operator precedence ambiguity."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between AND and OR?\n• Which returns more rows?\n• Which operator is more restrictive?\n• What is operator precedence?\n• Why are parentheses important?",
      "⚡ Performance Notes:\n• ✅ Recommended: SELECT employee_id, first_name, salary FROM employees WHERE department_id = 101 OR salary > 60000; (✔ Returns only matching rows, ✔ Easy to understand)\n• Less Efficient: SELECT * FROM employees; then filtering in application code (❌ Transfers unnecessary data, ❌ More memory usage, ❌ Slower)",
      "🌍 Real-World Use Cases:\n• ✅ Employees from Department 101 or earning above ₹60,000: WHERE department_id = 101 OR salary > 60000;\n• ✅ Students who scored above 90 or belong to Sports quota;\n• ✅ Products costing below ₹500 or having more than 100 units in stock;\n• ✅ Customers from Bangalore or Chennai.",
      "🎓 Company Interview Tip: 'What is the difference between AND and OR?' ── Best answer: AND requires every condition to be TRUE; OR requires at least one condition to be TRUE.",
      "🔥 Pro Tip (Interview): An easy way to remember: AND = ALL conditions must be TRUE 🔒, OR = At least ONE condition must be TRUE 🚪. A common interview trick is asking which query returns more rows: the answer is almost always OR because it accepts rows satisfying either condition."
    ]
  },
  "Basics-006": {
    "code_id": "Basics-006",
    "numeric_id": 6,
    "title": "Use NOT",
    "code": "SELECT * FROM employees WHERE department_id != 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use NOT.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE department_id != 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-007": {
    "code_id": "Basics-007",
    "numeric_id": 7,
    "title": "Use BETWEEN",
    "code": "SELECT * FROM employees WHERE salary BETWEEN 60000 AND 90000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use BETWEEN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE salary BETWEEN 60000 AND 90000;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-008": {
    "code_id": "Basics-008",
    "numeric_id": 8,
    "title": "Use IN",
    "code": "SELECT * FROM employees WHERE department_id IN (1, 2, 3);",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use IN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE department_id IN (1, 2, 3);",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-009": {
    "code_id": "Basics-009",
    "numeric_id": 9,
    "title": "Use NOT IN",
    "code": "SELECT * FROM employees WHERE department_id NOT IN (1, 2);",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use NOT IN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE department_id NOT IN (1, 2);",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-010": {
    "code_id": "Basics-010",
    "numeric_id": 10,
    "title": "Use LIKE",
    "code": "SELECT * FROM employees WHERE first_name LIKE 'J%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use LIKE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE first_name LIKE 'J%';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-011": {
    "code_id": "Basics-011",
    "numeric_id": 11,
    "title": "Find records starting with a letter",
    "code": "SELECT * FROM employees WHERE first_name LIKE 'A%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find records starting with a letter.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE first_name LIKE 'A%';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-012": {
    "code_id": "Basics-012",
    "numeric_id": 12,
    "title": "Find records ending with a letter",
    "code": "SELECT * FROM employees WHERE last_name LIKE '%n';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find records ending with a letter.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE last_name LIKE '%n';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-013": {
    "code_id": "Basics-013",
    "numeric_id": 13,
    "title": "Find records containing a word",
    "code": "SELECT * FROM products WHERE product_name LIKE '%Laptop%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find records containing a word.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products WHERE product_name LIKE '%Laptop%';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-014": {
    "code_id": "Basics-014",
    "numeric_id": 14,
    "title": "Use IS NULL",
    "code": "SELECT * FROM employees WHERE manager_id IS NULL;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use IS NULL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE manager_id IS NULL;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-015": {
    "code_id": "Basics-015",
    "numeric_id": 15,
    "title": "Use IS NOT NULL",
    "code": "SELECT * FROM employees WHERE manager_id IS NOT NULL;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use IS NOT NULL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE manager_id IS NOT NULL;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-016": {
    "code_id": "Basics-016",
    "numeric_id": 16,
    "title": "Sort using ORDER BY ASC",
    "code": "SELECT * FROM employees ORDER BY salary ASC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sort using ORDER BY ASC.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY salary ASC;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-017": {
    "code_id": "Basics-017",
    "numeric_id": 17,
    "title": "Sort using ORDER BY DESC",
    "code": "SELECT * FROM employees ORDER BY salary DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sort using ORDER BY DESC.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY salary DESC;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-018": {
    "code_id": "Basics-018",
    "numeric_id": 18,
    "title": "Retrieve top N records (LIMIT/TOP)",
    "code": "SELECT * FROM employees ORDER BY salary DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Retrieve top N records (LIMIT/TOP).",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY salary DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-019": {
    "code_id": "Basics-019",
    "numeric_id": 19,
    "title": "Remove duplicates using DISTINCT",
    "code": "SELECT DISTINCT job_title FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Remove duplicates using DISTINCT.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT DISTINCT job_title FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-020": {
    "code_id": "Basics-020",
    "numeric_id": 20,
    "title": "Alias columns using AS",
    "code": "SELECT first_name AS name, salary AS annual_pay FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Alias columns using AS.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT first_name AS name, salary AS annual_pay FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-021": {
    "code_id": "Basics-021",
    "numeric_id": 21,
    "title": "Count total rows",
    "code": "SELECT COUNT(*) AS total_employees FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count total rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT COUNT(*) AS total_employees FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-022": {
    "code_id": "Basics-022",
    "numeric_id": 22,
    "title": "Count distinct values",
    "code": "SELECT COUNT(DISTINCT department_id) AS total_depts FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count distinct values.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT COUNT(DISTINCT department_id) AS total_depts FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-023": {
    "code_id": "Basics-023",
    "numeric_id": 23,
    "title": "Find maximum salary",
    "code": "SELECT MAX(salary) AS max_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find maximum salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT MAX(salary) AS max_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-024": {
    "code_id": "Basics-024",
    "numeric_id": 24,
    "title": "Find minimum salary",
    "code": "SELECT MIN(salary) AS min_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find minimum salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT MIN(salary) AS min_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-025": {
    "code_id": "Basics-025",
    "numeric_id": 25,
    "title": "Find average salary",
    "code": "SELECT AVG(salary) AS avg_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find average salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT AVG(salary) AS avg_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-026": {
    "code_id": "Basics-026",
    "numeric_id": 26,
    "title": "Find total salary",
    "code": "SELECT SUM(salary) AS total_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find total salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT SUM(salary) AS total_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-027": {
    "code_id": "Basics-027",
    "numeric_id": 27,
    "title": "Find average marks",
    "code": "SELECT AVG(marks) AS avg_marks FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find average marks.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT AVG(marks) AS avg_marks FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-028": {
    "code_id": "Basics-028",
    "numeric_id": 28,
    "title": "Sum sales",
    "code": "SELECT SUM(sale_amount) AS total_sales FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sum sales.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT SUM(sale_amount) AS total_sales FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-029": {
    "code_id": "Basics-029",
    "numeric_id": 29,
    "title": "Count employees in each department",
    "code": "SELECT department_id, COUNT(*) AS emp_count FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count employees in each department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS emp_count FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-030": {
    "code_id": "Basics-030",
    "numeric_id": 30,
    "title": "Find department with highest salary",
    "code": "SELECT department_id, MAX(salary) AS max_salary FROM employees GROUP BY department_id ORDER BY max_salary DESC LIMIT 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find department with highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, MAX(salary) AS max_salary FROM employees GROUP BY department_id ORDER BY max_salary DESC LIMIT 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-031": {
    "code_id": "Basics-031",
    "numeric_id": 31,
    "title": "Find department with lowest salary",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find department with lowest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-032": {
    "code_id": "Basics-032",
    "numeric_id": 32,
    "title": "Average salary by department",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Average salary by department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-033": {
    "code_id": "Basics-033",
    "numeric_id": 33,
    "title": "Maximum marks by class",
    "code": "SELECT class, AVG(marks) AS avg_mark FROM students GROUP BY class;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Maximum marks by class.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT class, AVG(marks) AS avg_mark FROM students GROUP BY class;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-034": {
    "code_id": "Basics-034",
    "numeric_id": 34,
    "title": "Minimum sales by region",
    "code": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Minimum sales by region.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "Basics-035": {
    "code_id": "Basics-035",
    "numeric_id": 35,
    "title": "Total revenue by month",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Total revenue by month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-001": {
    "code_id": "SQL-001",
    "numeric_id": 36,
    "title": "Group employees by department",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Group employees by department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-002": {
    "code_id": "SQL-002",
    "numeric_id": 37,
    "title": "Group students by class",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Group students by class.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-003": {
    "code_id": "SQL-003",
    "numeric_id": 38,
    "title": "Count employees per department",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count employees per department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-004": {
    "code_id": "SQL-004",
    "numeric_id": 39,
    "title": "Departments having more than 5 employees",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Departments having more than 5 employees.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-005": {
    "code_id": "SQL-005",
    "numeric_id": 40,
    "title": "Departments with average salary > 50,000",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Departments with average salary > 50,000.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-006": {
    "code_id": "SQL-006",
    "numeric_id": 41,
    "title": "Cities having more than 10 customers",
    "code": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Cities having more than 10 customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-007": {
    "code_id": "SQL-007",
    "numeric_id": 42,
    "title": "Product categories with highest sales",
    "code": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Product categories with highest sales.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-008": {
    "code_id": "SQL-008",
    "numeric_id": 43,
    "title": "Customers with more than 5 orders",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers with more than 5 orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-009": {
    "code_id": "SQL-009",
    "numeric_id": 44,
    "title": "Branches with highest profit",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Branches with highest profit.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-010": {
    "code_id": "SQL-010",
    "numeric_id": 45,
    "title": "States with highest customers",
    "code": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for States with highest customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-011": {
    "code_id": "SQL-011",
    "numeric_id": 46,
    "title": "Monthly sales summary",
    "code": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Monthly sales summary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-012": {
    "code_id": "SQL-012",
    "numeric_id": 47,
    "title": "Yearly sales summary",
    "code": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Yearly sales summary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-013": {
    "code_id": "SQL-013",
    "numeric_id": 48,
    "title": "Products sold more than 100 times",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Products sold more than 100 times.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-014": {
    "code_id": "SQL-014",
    "numeric_id": 49,
    "title": "Average age by city",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Average age by city.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-015": {
    "code_id": "SQL-015",
    "numeric_id": 50,
    "title": "Highest salary department",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Highest salary department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-016": {
    "code_id": "SQL-016",
    "numeric_id": 51,
    "title": "Lowest salary department",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Lowest salary department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-017": {
    "code_id": "SQL-017",
    "numeric_id": 52,
    "title": "Average marks above 80",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Average marks above 80.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-018": {
    "code_id": "SQL-018",
    "numeric_id": 53,
    "title": "Groups using multiple columns",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Groups using multiple columns.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-019": {
    "code_id": "SQL-019",
    "numeric_id": 54,
    "title": "HAVING with COUNT",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for HAVING with COUNT.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-020": {
    "code_id": "SQL-020",
    "numeric_id": 55,
    "title": "HAVING with SUM",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for HAVING with SUM.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-021": {
    "code_id": "SQL-021",
    "numeric_id": 56,
    "title": "Inner Join",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Inner Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-022": {
    "code_id": "SQL-022",
    "numeric_id": 57,
    "title": "Left Join",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Left Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-023": {
    "code_id": "SQL-023",
    "numeric_id": 58,
    "title": "Right Join",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Right Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-024": {
    "code_id": "SQL-024",
    "numeric_id": 59,
    "title": "Full Join",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Full Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-025": {
    "code_id": "SQL-025",
    "numeric_id": 60,
    "title": "Self Join",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Self Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-026": {
    "code_id": "SQL-026",
    "numeric_id": 61,
    "title": "Cross Join",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Cross Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-027": {
    "code_id": "SQL-027",
    "numeric_id": 62,
    "title": "Employees with department names",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees with department names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-028": {
    "code_id": "SQL-028",
    "numeric_id": 63,
    "title": "Customers with orders",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers with orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-029": {
    "code_id": "SQL-029",
    "numeric_id": 64,
    "title": "Customers without orders",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers without orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-030": {
    "code_id": "SQL-030",
    "numeric_id": 65,
    "title": "Orders without customers",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Orders without customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-031": {
    "code_id": "SQL-031",
    "numeric_id": 66,
    "title": "Students with course names",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Students with course names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-032": {
    "code_id": "SQL-032",
    "numeric_id": 67,
    "title": "Employees without managers",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees without managers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-033": {
    "code_id": "SQL-033",
    "numeric_id": 68,
    "title": "Manager and employee names",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Manager and employee names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-034": {
    "code_id": "SQL-034",
    "numeric_id": 69,
    "title": "Multiple table joins",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Multiple table joins.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-035": {
    "code_id": "SQL-035",
    "numeric_id": 70,
    "title": "Join three tables",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join three tables.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-036": {
    "code_id": "SQL-036",
    "numeric_id": 71,
    "title": "Join four tables",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join four tables.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-037": {
    "code_id": "SQL-037",
    "numeric_id": 72,
    "title": "Highest order per customer",
    "code": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Highest order per customer.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-038": {
    "code_id": "SQL-038",
    "numeric_id": 73,
    "title": "Total orders per customer",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Total orders per customer.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-039": {
    "code_id": "SQL-039",
    "numeric_id": 74,
    "title": "Employee and project details",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee and project details.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-040": {
    "code_id": "SQL-040",
    "numeric_id": 75,
    "title": "Product and supplier details",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Product and supplier details.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-041": {
    "code_id": "SQL-041",
    "numeric_id": 76,
    "title": "Customer-city join",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customer-city join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-042": {
    "code_id": "SQL-042",
    "numeric_id": 77,
    "title": "Find unmatched rows",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find unmatched rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-043": {
    "code_id": "SQL-043",
    "numeric_id": 78,
    "title": "Sales with product names",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sales with product names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-044": {
    "code_id": "SQL-044",
    "numeric_id": 79,
    "title": "Student-course enrollment",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Student-course enrollment.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-045": {
    "code_id": "SQL-045",
    "numeric_id": 80,
    "title": "Employee-manager hierarchy",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee-manager hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-046": {
    "code_id": "SQL-046",
    "numeric_id": 81,
    "title": "Left join with WHERE",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Left join with WHERE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-047": {
    "code_id": "SQL-047",
    "numeric_id": 82,
    "title": "Right join with NULL",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Right join with NULL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-048": {
    "code_id": "SQL-048",
    "numeric_id": 83,
    "title": "Join with GROUP BY",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with GROUP BY.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-049": {
    "code_id": "SQL-049",
    "numeric_id": 84,
    "title": "Join with HAVING",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with HAVING.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-050": {
    "code_id": "SQL-050",
    "numeric_id": 85,
    "title": "Join with aggregate functions",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with aggregate functions.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-051": {
    "code_id": "SQL-051",
    "numeric_id": 86,
    "title": "Join with CASE",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with CASE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-052": {
    "code_id": "SQL-052",
    "numeric_id": 87,
    "title": "Join with subquery",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with subquery.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-053": {
    "code_id": "SQL-053",
    "numeric_id": 88,
    "title": "Join using aliases",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join using aliases.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-054": {
    "code_id": "SQL-054",
    "numeric_id": 89,
    "title": "Difference between INNER and LEFT JOIN",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Difference between INNER and LEFT JOIN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-055": {
    "code_id": "SQL-055",
    "numeric_id": 90,
    "title": "Difference between LEFT and RIGHT JOIN",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Difference between LEFT and RIGHT JOIN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-056": {
    "code_id": "SQL-056",
    "numeric_id": 91,
    "title": "Salary above average",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Salary above average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-058": {
    "code_id": "SQL-058",
    "numeric_id": 92,
    "title": "Third highest salary",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Second highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-060": {
    "code_id": "SQL-060",
    "numeric_id": 93,
    "title": "Employees earning more than department average",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Third highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-061": {
    "code_id": "SQL-061",
    "numeric_id": 94,
    "title": "Products above average price",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Nth highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-062": {
    "code_id": "SQL-062",
    "numeric_id": 95,
    "title": "Customers with maximum orders",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees earning more than department average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-063": {
    "code_id": "SQL-063",
    "numeric_id": 96,
    "title": "Employees in highest-paying department",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Products above average price.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-064": {
    "code_id": "SQL-064",
    "numeric_id": 97,
    "title": "Departments with highest average salary",
    "code": "SELECT *, COUNT(*) AS count FROM orders GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers with maximum orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM orders GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-065": {
    "code_id": "SQL-065",
    "numeric_id": 98,
    "title": "Find duplicate rows",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees in highest-paying department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-066": {
    "code_id": "SQL-066",
    "numeric_id": 99,
    "title": "Remove duplicate rows",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Departments with highest average salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-067": {
    "code_id": "SQL-067",
    "numeric_id": 100,
    "title": "Exists vs IN",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find duplicate rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-068": {
    "code_id": "SQL-068",
    "numeric_id": 101,
    "title": "NOT EXISTS",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Remove duplicate rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-069": {
    "code_id": "SQL-069",
    "numeric_id": 102,
    "title": "Correlated subquery",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Exists vs IN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-070": {
    "code_id": "SQL-070",
    "numeric_id": 103,
    "title": "Nested subqueries",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for NOT EXISTS.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-071": {
    "code_id": "SQL-071",
    "numeric_id": 104,
    "title": "Max salary employee",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Correlated subquery.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-072": {
    "code_id": "SQL-072",
    "numeric_id": 105,
    "title": "Min salary employee",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Nested subqueries.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-074": {
    "code_id": "SQL-074",
    "numeric_id": 106,
    "title": "Products never sold",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Max salary employee.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-075": {
    "code_id": "SQL-075",
    "numeric_id": 107,
    "title": "Orders above average amount",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Min salary employee.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-076": {
    "code_id": "SQL-076",
    "numeric_id": 108,
    "title": "ROW_NUMBER()",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers without orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-077": {
    "code_id": "SQL-077",
    "numeric_id": 109,
    "title": "RANK()",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Products never sold.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-078": {
    "code_id": "SQL-078",
    "numeric_id": 110,
    "title": "DENSE_RANK()",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Orders above average amount.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-079": {
    "code_id": "SQL-079",
    "numeric_id": 111,
    "title": "NTILE()",
    "code": "SELECT employee_id, first_name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for ROW_NUMBER().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT employee_id, first_name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-080": {
    "code_id": "SQL-080",
    "numeric_id": 112,
    "title": "LEAD()",
    "code": "SELECT employee_id, first_name, salary, RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for RANK().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT employee_id, first_name, salary, RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-081": {
    "code_id": "SQL-081",
    "numeric_id": 113,
    "title": "LAG()",
    "code": "SELECT employee_id, first_name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for DENSE_RANK().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT employee_id, first_name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-082": {
    "code_id": "SQL-082",
    "numeric_id": 114,
    "title": "FIRST_VALUE()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for NTILE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-083": {
    "code_id": "SQL-083",
    "numeric_id": 115,
    "title": "LAST_VALUE()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LEAD().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-084": {
    "code_id": "SQL-084",
    "numeric_id": 116,
    "title": "Running total",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LAG().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-085": {
    "code_id": "SQL-085",
    "numeric_id": 117,
    "title": "Cumulative sum",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for FIRST_VALUE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-086": {
    "code_id": "SQL-086",
    "numeric_id": 118,
    "title": "Moving average",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LAST_VALUE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-087": {
    "code_id": "SQL-087",
    "numeric_id": 119,
    "title": "Top 3 salaries",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running total.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-088": {
    "code_id": "SQL-088",
    "numeric_id": 120,
    "title": "Highest salary per department",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Cumulative sum.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-089": {
    "code_id": "SQL-089",
    "numeric_id": 121,
    "title": "Lowest salary per department",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Moving average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-090": {
    "code_id": "SQL-090",
    "numeric_id": 122,
    "title": "Previous month's sales",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Top 3 salaries.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-091": {
    "code_id": "SQL-091",
    "numeric_id": 123,
    "title": "Next month's sales",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Highest salary per department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-092": {
    "code_id": "SQL-092",
    "numeric_id": 124,
    "title": "Difference from previous row",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Lowest salary per department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-093": {
    "code_id": "SQL-093",
    "numeric_id": 125,
    "title": "Running average",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Previous month's sales.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-094": {
    "code_id": "SQL-094",
    "numeric_id": 126,
    "title": "Running count",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Next month's sales.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-095": {
    "code_id": "SQL-095",
    "numeric_id": 127,
    "title": "Percent rank",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Difference from previous row.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-096": {
    "code_id": "SQL-096",
    "numeric_id": 128,
    "title": "Dense rank by department",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-097": {
    "code_id": "SQL-097",
    "numeric_id": 129,
    "title": "Row number partition",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running count.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-098": {
    "code_id": "SQL-098",
    "numeric_id": 130,
    "title": "Ranking products",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Percent rank.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-099": {
    "code_id": "SQL-099",
    "numeric_id": 131,
    "title": "Ranking students",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Dense rank by department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-100": {
    "code_id": "SQL-100",
    "numeric_id": 132,
    "title": "Ranking salespersons",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Row number partition.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-101": {
    "code_id": "SQL-101",
    "numeric_id": 133,
    "title": "Top N customers",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Ranking products.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-102": {
    "code_id": "SQL-102",
    "numeric_id": 134,
    "title": "Bottom N products",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Ranking students.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-103": {
    "code_id": "SQL-103",
    "numeric_id": 135,
    "title": "Window frame examples",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Ranking salespersons.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-104": {
    "code_id": "SQL-104",
    "numeric_id": 136,
    "title": "PARTITION BY",
    "code": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Top N customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-105": {
    "code_id": "SQL-105",
    "numeric_id": 137,
    "title": "ORDER BY in window functions",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Bottom N products.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-106": {
    "code_id": "SQL-106",
    "numeric_id": 138,
    "title": "Simple CTE",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Window frame examples.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-107": {
    "code_id": "SQL-107",
    "numeric_id": 139,
    "title": "Multiple CTEs",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for PARTITION BY.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-108": {
    "code_id": "SQL-108",
    "numeric_id": 140,
    "title": "Recursive CTE",
    "code": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for ORDER BY in window functions.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-110": {
    "code_id": "SQL-110",
    "numeric_id": 141,
    "title": "Category hierarchy",
    "code": "WITH HighEarners AS (SELECT * FROM employees WHERE salary > 80000) SELECT * FROM HighEarners;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Simple CTE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "WITH HighEarners AS (SELECT * FROM employees WHERE salary > 80000) SELECT * FROM HighEarners;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-111": {
    "code_id": "SQL-111",
    "numeric_id": 142,
    "title": "Running totals using CTE",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Multiple CTEs.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-112": {
    "code_id": "SQL-112",
    "numeric_id": 143,
    "title": "Ranking using CTE",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Recursive CTE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-113": {
    "code_id": "SQL-113",
    "numeric_id": 144,
    "title": "Duplicate removal",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-114": {
    "code_id": "SQL-114",
    "numeric_id": 145,
    "title": "Temporary calculations",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Category hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-115": {
    "code_id": "SQL-115",
    "numeric_id": 146,
    "title": "Monthly sales report",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running totals using CTE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-116": {
    "code_id": "SQL-116",
    "numeric_id": 147,
    "title": "Department summary",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Ranking using CTE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-117": {
    "code_id": "SQL-117",
    "numeric_id": 148,
    "title": "Customer summary",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate removal.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-118": {
    "code_id": "SQL-118",
    "numeric_id": 149,
    "title": "Sales analysis",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Temporary calculations.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-119": {
    "code_id": "SQL-119",
    "numeric_id": 150,
    "title": "Employee analysis",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Monthly sales report.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-120": {
    "code_id": "SQL-120",
    "numeric_id": 151,
    "title": "Recursive numbers",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Department summary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-121": {
    "code_id": "SQL-121",
    "numeric_id": 152,
    "title": "Grade students",
    "code": "SELECT *, COUNT(*) AS count FROM customers GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customer summary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM customers GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-122": {
    "code_id": "SQL-122",
    "numeric_id": 153,
    "title": "Salary bands",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sales analysis.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-123": {
    "code_id": "SQL-123",
    "numeric_id": 154,
    "title": "Age groups",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee analysis.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-124": {
    "code_id": "SQL-124",
    "numeric_id": 155,
    "title": "Sales categories",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Recursive numbers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-125": {
    "code_id": "SQL-125",
    "numeric_id": 156,
    "title": "Bonus calculation",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Grade students.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-126": {
    "code_id": "SQL-126",
    "numeric_id": 157,
    "title": "Customer classification",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Salary bands.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-127": {
    "code_id": "SQL-127",
    "numeric_id": 158,
    "title": "Pass/Fail status",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Age groups.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-128": {
    "code_id": "SQL-128",
    "numeric_id": 159,
    "title": "Gender formatting",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sales categories.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-129": {
    "code_id": "SQL-129",
    "numeric_id": 160,
    "title": "Conditional aggregation",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Bonus calculation.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-130": {
    "code_id": "SQL-130",
    "numeric_id": 161,
    "title": "Multiple CASE conditions",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customer classification.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-131": {
    "code_id": "SQL-131",
    "numeric_id": 162,
    "title": "LENGTH()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Pass/Fail status.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-132": {
    "code_id": "SQL-132",
    "numeric_id": 163,
    "title": "UPPER()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Gender formatting.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-133": {
    "code_id": "SQL-133",
    "numeric_id": 164,
    "title": "LOWER()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Conditional aggregation.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-134": {
    "code_id": "SQL-134",
    "numeric_id": 165,
    "title": "CONCAT()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Multiple CASE conditions.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-135": {
    "code_id": "SQL-135",
    "numeric_id": 166,
    "title": "SUBSTRING()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LENGTH().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-136": {
    "code_id": "SQL-136",
    "numeric_id": 167,
    "title": "REPLACE()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for UPPER().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-137": {
    "code_id": "SQL-137",
    "numeric_id": 168,
    "title": "TRIM()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LOWER().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-138": {
    "code_id": "SQL-138",
    "numeric_id": 169,
    "title": "LTRIM()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for CONCAT().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-139": {
    "code_id": "SQL-139",
    "numeric_id": 170,
    "title": "RTRIM()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for SUBSTRING().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-140": {
    "code_id": "SQL-140",
    "numeric_id": 171,
    "title": "LEFT()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for REPLACE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-141": {
    "code_id": "SQL-141",
    "numeric_id": 172,
    "title": "RIGHT()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for TRIM().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-142": {
    "code_id": "SQL-142",
    "numeric_id": 173,
    "title": "POSITION/CHARINDEX()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LTRIM().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-143": {
    "code_id": "SQL-143",
    "numeric_id": 174,
    "title": "REVERSE()",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for RTRIM().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-144": {
    "code_id": "SQL-144",
    "numeric_id": 175,
    "title": "Split names",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for LEFT().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-145": {
    "code_id": "SQL-145",
    "numeric_id": 176,
    "title": "Initials",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for RIGHT().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-146": {
    "code_id": "SQL-146",
    "numeric_id": 177,
    "title": "Email extraction",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for POSITION/CHARINDEX().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-147": {
    "code_id": "SQL-147",
    "numeric_id": 178,
    "title": "Domain extraction",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for REVERSE().",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-148": {
    "code_id": "SQL-148",
    "numeric_id": 179,
    "title": "Count characters",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Split names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-149": {
    "code_id": "SQL-149",
    "numeric_id": 180,
    "title": "Remove spaces",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Initials.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-150": {
    "code_id": "SQL-150",
    "numeric_id": 181,
    "title": "Replace multiple characters",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Email extraction.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-151": {
    "code_id": "SQL-151",
    "numeric_id": 182,
    "title": "Current date",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Domain extraction.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-152": {
    "code_id": "SQL-152",
    "numeric_id": 183,
    "title": "Current timestamp",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count characters.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-153": {
    "code_id": "SQL-153",
    "numeric_id": 184,
    "title": "Difference between dates",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Remove spaces.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-154": {
    "code_id": "SQL-154",
    "numeric_id": 185,
    "title": "Add days",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Replace multiple characters.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-155": {
    "code_id": "SQL-155",
    "numeric_id": 186,
    "title": "Add months",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Current date.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-156": {
    "code_id": "SQL-156",
    "numeric_id": 187,
    "title": "Extract year",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Current timestamp.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-157": {
    "code_id": "SQL-157",
    "numeric_id": 188,
    "title": "Extract month",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Difference between dates.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-158": {
    "code_id": "SQL-158",
    "numeric_id": 189,
    "title": "Extract day",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Add days.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-159": {
    "code_id": "SQL-159",
    "numeric_id": 190,
    "title": "Week number",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Add months.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-160": {
    "code_id": "SQL-160",
    "numeric_id": 191,
    "title": "Quarter",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Extract year.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-161": {
    "code_id": "SQL-161",
    "numeric_id": 192,
    "title": "Last day of month",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Extract month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-162": {
    "code_id": "SQL-162",
    "numeric_id": 193,
    "title": "First day of month",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Extract day.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-163": {
    "code_id": "SQL-163",
    "numeric_id": 194,
    "title": "Date formatting",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Week number.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-164": {
    "code_id": "SQL-164",
    "numeric_id": 195,
    "title": "Age calculation",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Quarter.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-165": {
    "code_id": "SQL-165",
    "numeric_id": 196,
    "title": "Employees hired this year",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Last day of month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-166": {
    "code_id": "SQL-166",
    "numeric_id": 197,
    "title": "Orders this month",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for First day of month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-167": {
    "code_id": "SQL-167",
    "numeric_id": 198,
    "title": "Sales last 30 days",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Date formatting.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-168": {
    "code_id": "SQL-168",
    "numeric_id": 199,
    "title": "Weekend records",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Age calculation.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-169": {
    "code_id": "SQL-169",
    "numeric_id": 200,
    "title": "Leap year check",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees hired this year.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-170": {
    "code_id": "SQL-170",
    "numeric_id": 201,
    "title": "Monthly report",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Orders this month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-171": {
    "code_id": "SQL-171",
    "numeric_id": 202,
    "title": "Find duplicates",
    "code": "SELECT * FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sales last 30 days.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-172": {
    "code_id": "SQL-172",
    "numeric_id": 203,
    "title": "Remove duplicates",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Weekend records.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-174": {
    "code_id": "SQL-174",
    "numeric_id": 204,
    "title": "Duplicate names",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Leap year check.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-175": {
    "code_id": "SQL-175",
    "numeric_id": 205,
    "title": "Duplicate phone numbers",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Monthly report.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-176": {
    "code_id": "SQL-176",
    "numeric_id": 206,
    "title": "Duplicate salaries",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find duplicates.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-177": {
    "code_id": "SQL-177",
    "numeric_id": 207,
    "title": "Keep first duplicate",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Remove duplicates.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-178": {
    "code_id": "SQL-178",
    "numeric_id": 208,
    "title": "Keep latest duplicate",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate emails.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-179": {
    "code_id": "SQL-179",
    "numeric_id": 209,
    "title": "Delete duplicate rows",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-180": {
    "code_id": "SQL-180",
    "numeric_id": 210,
    "title": "Count duplicate groups",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate phone numbers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-183": {
    "code_id": "SQL-183",
    "numeric_id": 211,
    "title": "Top 3 salaries per department",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Duplicate salaries.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-184": {
    "code_id": "SQL-184",
    "numeric_id": 212,
    "title": "Consecutive login days",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Keep first duplicate.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-186": {
    "code_id": "SQL-186",
    "numeric_id": 213,
    "title": "Gap and island problems",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Keep latest duplicate.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-187": {
    "code_id": "SQL-187",
    "numeric_id": 214,
    "title": "Median salary",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Delete duplicate rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-188": {
    "code_id": "SQL-188",
    "numeric_id": 215,
    "title": "Pivot table",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count duplicate groups.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-189": {
    "code_id": "SQL-189",
    "numeric_id": 216,
    "title": "Unpivot table",
    "code": "SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Second highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-191": {
    "code_id": "SQL-191",
    "numeric_id": 217,
    "title": "Running balance",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Nth highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-192": {
    "code_id": "SQL-192",
    "numeric_id": 218,
    "title": "Daily active users",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Top 3 salaries per department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-193": {
    "code_id": "SQL-193",
    "numeric_id": 219,
    "title": "Monthly active users",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Consecutive login days.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-194": {
    "code_id": "SQL-194",
    "numeric_id": 220,
    "title": "Churn customers",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Consecutive numbers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-195": {
    "code_id": "SQL-195",
    "numeric_id": 221,
    "title": "Repeat customers",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Gap and island problems.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-196": {
    "code_id": "SQL-196",
    "numeric_id": 222,
    "title": "First purchase",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Median salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-197": {
    "code_id": "SQL-197",
    "numeric_id": 223,
    "title": "Last purchase",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Pivot table.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-198": {
    "code_id": "SQL-198",
    "numeric_id": 224,
    "title": "Most expensive product",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Unpivot table.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-199": {
    "code_id": "SQL-199",
    "numeric_id": 225,
    "title": "Least expensive product",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-200": {
    "code_id": "SQL-200",
    "numeric_id": 226,
    "title": "Product never sold",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Running balance.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-201": {
    "code_id": "SQL-201",
    "numeric_id": 227,
    "title": "Customer lifetime value",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Daily active users.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-202": {
    "code_id": "SQL-202",
    "numeric_id": 228,
    "title": "Revenue by month",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Monthly active users.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-203": {
    "code_id": "SQL-203",
    "numeric_id": 229,
    "title": "Rolling average",
    "code": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Churn customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-204": {
    "code_id": "SQL-204",
    "numeric_id": 230,
    "title": "Year-over-year growth",
    "code": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Repeat customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-205": {
    "code_id": "SQL-205",
    "numeric_id": 231,
    "title": "Month-over-month growth",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for First purchase.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-206": {
    "code_id": "SQL-206",
    "numeric_id": 232,
    "title": "Top-selling product",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Last purchase.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-207": {
    "code_id": "SQL-207",
    "numeric_id": 233,
    "title": "Least-selling product",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Most expensive product.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-208": {
    "code_id": "SQL-208",
    "numeric_id": 234,
    "title": "Market share calculation",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Least expensive product.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-209": {
    "code_id": "SQL-209",
    "numeric_id": 235,
    "title": "Percent contribution",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Product never sold.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-210": {
    "code_id": "SQL-210",
    "numeric_id": 236,
    "title": "Cohort analysis",
    "code": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customer lifetime value.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-211": {
    "code_id": "SQL-211",
    "numeric_id": 237,
    "title": "Retention analysis",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Revenue by month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-212": {
    "code_id": "SQL-212",
    "numeric_id": 238,
    "title": "Dense ranking challenge",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Rolling average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-213": {
    "code_id": "SQL-213",
    "numeric_id": 239,
    "title": "Recursive hierarchy",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Year-over-year growth.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-214": {
    "code_id": "SQL-214",
    "numeric_id": 240,
    "title": "Sessionization problem",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Month-over-month growth.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-215": {
    "code_id": "SQL-215",
    "numeric_id": 241,
    "title": "Fraud detection using SQL",
    "code": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Top-selling product.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-C-NEW1": {
    "code_id": "SQL-C-NEW1",
    "numeric_id": 242,
    "title": "Swap Salary",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Least-selling product.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-C-NEW2": {
    "code_id": "SQL-C-NEW2",
    "numeric_id": 243,
    "title": "Find Total Time Spent by the User",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Market share calculation.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-C-NEW3": {
    "code_id": "SQL-C-NEW3",
    "numeric_id": 244,
    "title": "Count of Matches in Tournament",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Percent contribution.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-C-NEW4": {
    "code_id": "SQL-C-NEW4",
    "numeric_id": 245,
    "title": "Highest Salaries Difference",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Cohort analysis.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-A-NEW1": {
    "code_id": "SQL-A-NEW1",
    "numeric_id": 246,
    "title": "Adjust Employee Salary",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Retention analysis.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-A-NEW2": {
    "code_id": "SQL-A-NEW2",
    "numeric_id": 247,
    "title": "Find Latest Login Date",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Dense ranking challenge.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-A-NEW3": {
    "code_id": "SQL-A-NEW3",
    "numeric_id": 248,
    "title": "Career Level Classification",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Recursive hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-A-NEW4": {
    "code_id": "SQL-A-NEW4",
    "numeric_id": 249,
    "title": "The Airport With the Highest Traffic",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sessionization problem.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "001": {
    "code_id": "001",
    "numeric_id": 250,
    "title": "Combine Two Tables",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Fraud detection using SQL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "002": {
    "code_id": "002",
    "numeric_id": 251,
    "title": "Employees Earning More Than Their Managers",
    "code": "SELECT employee_id, first_name, last_name, salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Select specific columns.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT employee_id, first_name, last_name, salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "003": {
    "code_id": "003",
    "numeric_id": 252,
    "title": "Duplicate Emails",
    "code": "SELECT * FROM employees WHERE salary > 80000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Filter rows using WHERE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE salary > 80000;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "004": {
    "code_id": "004",
    "numeric_id": 253,
    "title": "Customers Who Never Order",
    "code": "SELECT * FROM employees WHERE salary > 70000 AND department_id = 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use multiple conditions with AND.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE salary > 70000 AND department_id = 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "005": {
    "code_id": "005",
    "numeric_id": 254,
    "title": "Delete Duplicate Emails",
    "code": "SELECT * FROM employees WHERE department_id = 1 OR salary > 100000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use multiple conditions with OR.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE department_id = 1 OR salary > 100000;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "006": {
    "code_id": "006",
    "numeric_id": 255,
    "title": "Rising Temperature",
    "code": "SELECT * FROM employees WHERE department_id != 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use NOT.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE department_id != 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "007": {
    "code_id": "007",
    "numeric_id": 256,
    "title": "Game Play Analysis I",
    "code": "SELECT * FROM employees WHERE salary BETWEEN 60000 AND 90000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use BETWEEN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE salary BETWEEN 60000 AND 90000;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "008": {
    "code_id": "008",
    "numeric_id": 257,
    "title": "Game Play Analysis II",
    "code": "SELECT * FROM employees WHERE department_id IN (1, 2, 3);",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use IN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE department_id IN (1, 2, 3);",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "009": {
    "code_id": "009",
    "numeric_id": 258,
    "title": "Employee Bonus",
    "code": "SELECT * FROM employees WHERE department_id NOT IN (1, 2);",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use NOT IN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE department_id NOT IN (1, 2);",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "010": {
    "code_id": "010",
    "numeric_id": 259,
    "title": "Find Customer Referee",
    "code": "SELECT * FROM employees WHERE first_name LIKE 'J%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use LIKE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE first_name LIKE 'J%';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "011": {
    "code_id": "011",
    "numeric_id": 260,
    "title": "Customer Placing the Largest Number of Orders",
    "code": "SELECT * FROM employees WHERE first_name LIKE 'A%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find records starting with a letter.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE first_name LIKE 'A%';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "012": {
    "code_id": "012",
    "numeric_id": 261,
    "title": "Big Countries",
    "code": "SELECT * FROM employees WHERE last_name LIKE '%n';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find records ending with a letter.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE last_name LIKE '%n';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "013": {
    "code_id": "013",
    "numeric_id": 262,
    "title": "Classes With at Least 5 Students",
    "code": "SELECT * FROM products WHERE product_name LIKE '%Laptop%';",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find records containing a word.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products WHERE product_name LIKE '%Laptop%';",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "014": {
    "code_id": "014",
    "numeric_id": 263,
    "title": "Friend Requests I: Overall Acceptance Rate",
    "code": "SELECT * FROM employees WHERE manager_id IS NULL;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use IS NULL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE manager_id IS NULL;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "015": {
    "code_id": "015",
    "numeric_id": 264,
    "title": "Consecutive Available Seats",
    "code": "SELECT * FROM employees WHERE manager_id IS NOT NULL;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Use IS NOT NULL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees WHERE manager_id IS NOT NULL;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "016": {
    "code_id": "016",
    "numeric_id": 265,
    "title": "Sales Person",
    "code": "SELECT * FROM employees ORDER BY salary ASC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sort using ORDER BY ASC.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY salary ASC;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "017": {
    "code_id": "017",
    "numeric_id": 266,
    "title": "Triangle Judgement",
    "code": "SELECT * FROM employees ORDER BY salary DESC;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sort using ORDER BY DESC.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY salary DESC;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "018": {
    "code_id": "018",
    "numeric_id": 267,
    "title": "Shortest Distance in a Line",
    "code": "SELECT * FROM employees ORDER BY salary DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Retrieve top N records (LIMIT/TOP).",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY salary DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "019": {
    "code_id": "019",
    "numeric_id": 268,
    "title": "Not Boring Movies",
    "code": "SELECT DISTINCT job_title FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Remove duplicates using DISTINCT.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT DISTINCT job_title FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "020": {
    "code_id": "020",
    "numeric_id": 269,
    "title": "Swap Sex of Employees",
    "code": "SELECT first_name AS name, salary AS annual_pay FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Alias columns using AS.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT first_name AS name, salary AS annual_pay FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "021": {
    "code_id": "021",
    "numeric_id": 270,
    "title": "Actors and Directors Who Cooperated At Least Three Times",
    "code": "SELECT COUNT(*) AS total_employees FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count total rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT COUNT(*) AS total_employees FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "022": {
    "code_id": "022",
    "numeric_id": 271,
    "title": "Product Sales Analysis I",
    "code": "SELECT COUNT(DISTINCT department_id) AS total_depts FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count distinct values.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT COUNT(DISTINCT department_id) AS total_depts FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "023": {
    "code_id": "023",
    "numeric_id": 272,
    "title": "Product Sales Analysis II",
    "code": "SELECT MAX(salary) AS max_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find maximum salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT MAX(salary) AS max_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "024": {
    "code_id": "024",
    "numeric_id": 273,
    "title": "Project Employees I",
    "code": "SELECT MIN(salary) AS min_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find minimum salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT MIN(salary) AS min_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "025": {
    "code_id": "025",
    "numeric_id": 274,
    "title": "Project Employees II",
    "code": "SELECT AVG(salary) AS avg_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find average salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT AVG(salary) AS avg_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "026": {
    "code_id": "026",
    "numeric_id": 275,
    "title": "Sales Analysis I",
    "code": "SELECT SUM(salary) AS total_salary FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find total salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT SUM(salary) AS total_salary FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "027": {
    "code_id": "027",
    "numeric_id": 276,
    "title": "Sales Analysis II",
    "code": "SELECT AVG(marks) AS avg_marks FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find average marks.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT AVG(marks) AS avg_marks FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "028": {
    "code_id": "028",
    "numeric_id": 277,
    "title": "Sales Analysis III",
    "code": "SELECT SUM(sale_amount) AS total_sales FROM sales;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sum sales.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT SUM(sale_amount) AS total_sales FROM sales;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "029": {
    "code_id": "029",
    "numeric_id": 278,
    "title": "Reported Posts",
    "code": "SELECT department_id, COUNT(*) AS emp_count FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count employees in each department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS emp_count FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "030": {
    "code_id": "030",
    "numeric_id": 279,
    "title": "User Activity for the Past 30 Days I",
    "code": "SELECT department_id, MAX(salary) AS max_salary FROM employees GROUP BY department_id ORDER BY max_salary DESC LIMIT 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find department with highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, MAX(salary) AS max_salary FROM employees GROUP BY department_id ORDER BY max_salary DESC LIMIT 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "031": {
    "code_id": "031",
    "numeric_id": 280,
    "title": "User Activity for the Past 30 Days II",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find department with lowest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "032": {
    "code_id": "032",
    "numeric_id": 281,
    "title": "Article Views I",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Average salary by department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "033": {
    "code_id": "033",
    "numeric_id": 282,
    "title": "Immediate Food Delivery I",
    "code": "SELECT class, AVG(marks) AS avg_mark FROM students GROUP BY class;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Maximum marks by class.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT class, AVG(marks) AS avg_mark FROM students GROUP BY class;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "034": {
    "code_id": "034",
    "numeric_id": 283,
    "title": "Reformat Department Table",
    "code": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Minimum sales by region.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "035": {
    "code_id": "035",
    "numeric_id": 284,
    "title": "Queries Quality and Percentage",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Total revenue by month.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "036": {
    "code_id": "036",
    "numeric_id": 285,
    "title": "Number of Comments per Post",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Group employees by department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "037": {
    "code_id": "037",
    "numeric_id": 286,
    "title": "Average Selling Price",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Group students by class.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "038": {
    "code_id": "038",
    "numeric_id": 287,
    "title": "Students and Examinations",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count employees per department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "039": {
    "code_id": "039",
    "numeric_id": 288,
    "title": "Weather Type in Each Country",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Departments having more than 5 employees.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "040": {
    "code_id": "040",
    "numeric_id": 289,
    "title": "Find the Team Size",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Departments with average salary > 50,000.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "041": {
    "code_id": "041",
    "numeric_id": 290,
    "title": "Ads Performance",
    "code": "SELECT * FROM customers;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Cities having more than 10 customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "042": {
    "code_id": "042",
    "numeric_id": 291,
    "title": "List the Products Ordered in a Period",
    "code": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Product categories with highest sales.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "043": {
    "code_id": "043",
    "numeric_id": 292,
    "title": "Students With Invalid Departments",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers with more than 5 orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "044": {
    "code_id": "044",
    "numeric_id": 293,
    "title": "Replace Employee ID With The Unique Identifier",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Branches with highest profit.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "045": {
    "code_id": "045",
    "numeric_id": 294,
    "title": "Top Travellers",
    "code": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for States with highest customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM customers ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "046": {
    "code_id": "046",
    "numeric_id": 295,
    "title": "NPV Queries",
    "code": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Monthly sales summary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "047": {
    "code_id": "047",
    "numeric_id": 296,
    "title": "Create a Session Bar Chart",
    "code": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Yearly sales summary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM sales GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "048": {
    "code_id": "048",
    "numeric_id": 297,
    "title": "Group Sold Products By The Date",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Products sold more than 100 times.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "049": {
    "code_id": "049",
    "numeric_id": 298,
    "title": "Friendly Movies Streamed Last Month",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Average age by city.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "050": {
    "code_id": "050",
    "numeric_id": 299,
    "title": "Customer Order Frequency",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Highest salary department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "051": {
    "code_id": "051",
    "numeric_id": 300,
    "title": "Find Users With Valid E-Mails",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Lowest salary department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "052": {
    "code_id": "052",
    "numeric_id": 301,
    "title": "Patients With a Condition",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Average marks above 80.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "053": {
    "code_id": "053",
    "numeric_id": 302,
    "title": "Fix Product Name Format",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Groups using multiple columns.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "054": {
    "code_id": "054",
    "numeric_id": 303,
    "title": "Unique Orders and Customers Per Month",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for HAVING with COUNT.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "055": {
    "code_id": "055",
    "numeric_id": 304,
    "title": "Warehouse Manager",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for HAVING with SUM.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "056": {
    "code_id": "056",
    "numeric_id": 305,
    "title": "Customer Who Visited but Did Not Make Any Transactions",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Inner Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "057": {
    "code_id": "057",
    "numeric_id": 306,
    "title": "Bank Account Summary II",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Left Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "058": {
    "code_id": "058",
    "numeric_id": 307,
    "title": "Sellers With No Sales",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Right Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "059": {
    "code_id": "059",
    "numeric_id": 308,
    "title": "All Valid Triplets That Can Represent a Country",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Full Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "060": {
    "code_id": "060",
    "numeric_id": 309,
    "title": "Percentage of Users Attended a Contest",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Self Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "061": {
    "code_id": "061",
    "numeric_id": 310,
    "title": "Average Time of Process per Machine",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Cross Join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "062": {
    "code_id": "062",
    "numeric_id": 311,
    "title": "Fix Names in a Table",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees with department names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "063": {
    "code_id": "063",
    "numeric_id": 312,
    "title": "Product's Worth Over Invoices",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers with orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "064": {
    "code_id": "064",
    "numeric_id": 313,
    "title": "Invalid Tweets",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers without orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "065": {
    "code_id": "065",
    "numeric_id": 314,
    "title": "Daily Leads and Partners",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Orders without customers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "066": {
    "code_id": "066",
    "numeric_id": 315,
    "title": "Count Apples and Oranges",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Students with course names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "067": {
    "code_id": "067",
    "numeric_id": 316,
    "title": "Find Followers Count",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees without managers.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "068": {
    "code_id": "068",
    "numeric_id": 317,
    "title": "The Number of Employees Which Report to Each Employee",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Manager and employee names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "069": {
    "code_id": "069",
    "numeric_id": 318,
    "title": "Find Total Time Spent by Each Employee",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Multiple table joins.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "070": {
    "code_id": "070",
    "numeric_id": 319,
    "title": "Recyclable and Low Fat Products",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join three tables.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "071": {
    "code_id": "071",
    "numeric_id": 320,
    "title": "Product's Price for Each Store",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join four tables.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "072": {
    "code_id": "072",
    "numeric_id": 321,
    "title": "Primary Department for Each Employee",
    "code": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Highest order per customer.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "073": {
    "code_id": "073",
    "numeric_id": 322,
    "title": "Rearrange Products Table",
    "code": "SELECT * FROM orders;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Total orders per customer.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM orders;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "074": {
    "code_id": "074",
    "numeric_id": 323,
    "title": "Find Customers With Positive Revenue this Year",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee and project details.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "075": {
    "code_id": "075",
    "numeric_id": 324,
    "title": "Convert Date Format",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Product and supplier details.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "076": {
    "code_id": "076",
    "numeric_id": 325,
    "title": "Calculate Special Bonus",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customer-city join.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "077": {
    "code_id": "077",
    "numeric_id": 326,
    "title": "The Latest Login in 2020",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Find unmatched rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "078": {
    "code_id": "078",
    "numeric_id": 327,
    "title": "Employees Whose Manager Left the Company",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Sales with product names.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "079": {
    "code_id": "079",
    "numeric_id": 328,
    "title": "Low-Quality Problems",
    "code": "SELECT * FROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Student-course enrollment.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM students;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "080": {
    "code_id": "080",
    "numeric_id": 329,
    "title": "Accepted Candidates From the Interviews",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employee-manager hierarchy.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "081": {
    "code_id": "081",
    "numeric_id": 330,
    "title": "The Number of Rich Customers",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Left join with WHERE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "082": {
    "code_id": "082",
    "numeric_id": 331,
    "title": "Number of Unique Subjects Taught by Each Teacher",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Right join with NULL.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "083": {
    "code_id": "083",
    "numeric_id": 332,
    "title": "Sort the Olympic Table",
    "code": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with GROUP BY.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total FROM employees GROUP BY department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "084": {
    "code_id": "084",
    "numeric_id": 333,
    "title": "Concatenate the Name and the Profession",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with HAVING.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "085": {
    "code_id": "085",
    "numeric_id": 334,
    "title": "Find Latest Salaries",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with aggregate functions.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "086": {
    "code_id": "086",
    "numeric_id": 335,
    "title": "Triangles",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with CASE.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "087": {
    "code_id": "087",
    "numeric_id": 336,
    "title": "The Number of Employees Who Direct Report to Each Director",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join with subquery.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "088": {
    "code_id": "088",
    "numeric_id": 337,
    "title": "Customers Who Never Reordered",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Join using aliases.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "089": {
    "code_id": "089",
    "numeric_id": 338,
    "title": "Number of Comments per User",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Difference between INNER and LEFT JOIN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "090": {
    "code_id": "090",
    "numeric_id": 339,
    "title": "Average Selling Price by Category",
    "code": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Difference between LEFT and RIGHT JOIN.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id, e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "091": {
    "code_id": "091",
    "numeric_id": 340,
    "title": "Employees With Missing Information",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Salary above average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "092": {
    "code_id": "092",
    "numeric_id": 341,
    "title": "Biggest Single Number",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Second highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "093": {
    "code_id": "093",
    "numeric_id": 342,
    "title": "Second Highest Salary",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Third highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "094": {
    "code_id": "094",
    "numeric_id": 343,
    "title": "Nth Highest Salary",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Nth highest salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "095": {
    "code_id": "095",
    "numeric_id": 344,
    "title": "Rank Scores",
    "code": "SELECT * FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees earning more than department average.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "096": {
    "code_id": "096",
    "numeric_id": 345,
    "title": "Consecutive Numbers",
    "code": "SELECT * FROM products;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Products above average price.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM products;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "097": {
    "code_id": "097",
    "numeric_id": 346,
    "title": "Department Highest Salary",
    "code": "SELECT *, COUNT(*) AS count FROM orders GROUP BY 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Customers with maximum orders.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT *, COUNT(*) AS count FROM orders GROUP BY 1;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "098": {
    "code_id": "098",
    "numeric_id": 347,
    "title": "Game Play Analysis III",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Employees in highest-paying department.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "099": {
    "code_id": "099",
    "numeric_id": 348,
    "title": "Game Play Analysis IV",
    "code": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Departments with highest average salary.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT * FROM employees ORDER BY 1 DESC LIMIT 5;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  },
  "SQL-C-NEW5": {
    "code_id": "SQL-C-NEW5",
    "numeric_id": 500,
    "title": "Find Cutoff Score",
    "code": "SELECT COUNT(*) AS total_employees FROM employees;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "Direct declarative ANSI SQL query for Count total rows.",
    "mentalModel": "Filter -> Group -> Project relation pipeline",
    "lineByLine": [
      {
        "line": "SELECT COUNT(*) AS total_employees FROM employees;",
        "explanation": "Executes optimized database execution plan."
      }
    ],
    "beginnerTraps": [
      "Forgetting index optimization",
      "Missing NULL handling"
    ],
    "keyTakeaway": "Always select explicit columns in production queries for memory efficiency.",
    "interviewPros": [
      "Direct ANSI standard syntax",
      "Easily optimized by B-Tree index scan"
    ],
    "interviewCons": [
      "Requires clear understanding of table schema"
    ]
  }
};
