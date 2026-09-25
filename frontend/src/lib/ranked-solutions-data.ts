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

const BASE_RANKED_MAP: Record<string, any> = {
  "Basics-001": {
    "code_id": "Basics-001",
    "numeric_id": 1,
    "title": "Select All Columns from a Table",
    "code": "SELECT *\nFROM employees;",
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
    "title": "Sort Data Using ORDER BY",
    "code": "SELECT *\nFROM employees\nORDER BY salary ASC;",
    "timeComplexity": "O(N log N) (Sorting Operation)",
    "spaceComplexity": "O(N) (May vary depending on the database engine)",
    "simplestExplanation": "ORDER BY is used to arrange rows in a specific order based on one or more columns. It never filters or removes rows; it only changes their display sequence. By default, SQL sorts in ascending order (ASC). Use DESC when you need largest-to-smallest ordering.",
    "mentalModel": "Imagine a teacher arranging students based on marks.\n\nWithout sorting:\nJohn     85\nAlice    60\nDavid    95\nBob      70\n\nAfter sorting (Ascending):\nAlice    60\nBob      70\nJohn     85\nDavid    95\n\nAfter sorting (Descending):\nDavid    95\nJohn     85\nBob      70\nAlice    60\n\nSQL works exactly the same way.",
    "lineByLine": [
      {
        "line": "SELECT *",
        "explanation": "Retrieves all columns from the table. You can also retrieve only the required columns (e.g. SELECT employee_id, first_name, salary)."
      },
      {
        "line": "FROM table_name",
        "explanation": "Specifies which table SQL should read (e.g. FROM employees; FROM students; FROM products;)."
      },
      {
        "line": "ORDER BY salary",
        "explanation": "ORDER BY sorts the records based on the specified column. It does not filter data; it only changes the order in which rows are displayed."
      },
      {
        "line": "ASC / DESC",
        "explanation": "• ASC means Ascending Order (Smallest → Largest, A → Z, Oldest → Newest). It is the default in SQL.\n• DESC means Descending Order (Largest → Smallest, Z → A, Newest → Oldest)."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Locate the table.\nStep 2: Read every row.\nStep 3: SELECT * ── Retrieve required columns.\nStep 4: ORDER BY salary DESC ── Sort the retrieved rows.\nStep 5: Display the sorted result."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended - Ascending):\n```sql\nSELECT *\nFROM employees\nORDER BY salary ASC;\n```\n\nMethod 2 (Specific Columns):\n```sql\nSELECT employee_id,\n       first_name,\n       salary\nFROM employees\nORDER BY salary DESC;\n```\nReturns only required columns. Preferred in production.\n\nMethod 3 (Multiple Columns):\n```sql\nSELECT *\nFROM employees\nORDER BY department_id ASC,\n         salary DESC;\n```\nFirst sorts by department, then sorts salary within each department."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nORDER BY ──► Sort Rows ──► ASC  (Small→Big, A→Z, Old→New)\n                      └──► DESC (Big→Small, Z→A, New→Old)\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL (Ascending):\n```sql\nSELECT column1, column2\nFROM table_name\nORDER BY column_name ASC;\n```\n\nGeneric SQL (Descending):\n```sql\nSELECT column1, column2\nFROM table_name\nORDER BY column_name DESC;\n```\n\nProblem Solution (Ascending):\n```sql\nSELECT *\nFROM employees\nORDER BY salary ASC;\n```\n\nProblem Solution (Descending):\n```sql\nSELECT *\nFROM employees\nORDER BY salary DESC;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Misspelling ORDER BY: SELECT * FROM employees ODER BY salary; ── Error: ODER is not a valid SQL keyword.",
      "❌ 2. Ordering by a Non-Existing Column: SELECT * FROM employees ORDER BY salaries; ── Error: Unknown column salaries.",
      "❌ 3. Using WHERE After ORDER BY: SELECT * FROM employees ORDER BY salary WHERE department_id = 101; ── Error: WHERE must always come before ORDER BY.",
      "❌ 4. Forgetting DESC: Some beginners expect ORDER BY salary; to sort highest to lowest. Default is always Ascending (ASC).",
      "❌ 5. Confusing ORDER BY with WHERE: WHERE filters rows; ORDER BY sorts rows. They perform completely different tasks."
    ],
    "keyTakeaway": "ORDER BY is used to arrange rows in a specific order. It never removes rows; it only changes their display order. By default, SQL sorts in ascending order (ASC). Use DESC when you need the highest values first.",
    "interviewPros": [
      "Q1. What is the default sorting order? Ascending (ASC).",
      "Q2. Can ORDER BY sort text? Yes, alphabetically.",
      "Q3. Can ORDER BY sort dates? Yes: Oldest → Newest (ASC), Newest → Oldest (DESC).",
      "Q4. Can ORDER BY sort multiple columns? Yes (e.g. ORDER BY department_id, salary DESC;).",
      "Q5. Does ORDER BY remove duplicate rows? No, it only changes the order."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between WHERE and ORDER BY?\n• What is the default order?\n• Can ORDER BY be used on multiple columns?\n• Does ORDER BY affect stored data?\n• Can ORDER BY sort text, numbers, and dates?",
      "⚡ Performance Notes:\n• Recommended: SELECT employee_id, first_name, salary FROM employees ORDER BY salary DESC; (✔ Returns only required columns, ✔ Efficient, ✔ Easy to read)\n• Large Tables: Sorting millions of rows can be expensive. Creating an index on the sorting column can significantly improve performance.",
      "🌍 Real-World Use Cases:\n• ✅ Highest-paid employees: ORDER BY salary DESC;\n• ✅ Lowest-priced products: ORDER BY price ASC;\n• ✅ Latest orders: ORDER BY order_date DESC;\n• ✅ Students ranked by marks: ORDER BY marks DESC.",
      "🎓 Company Interview Tip: 'What is the default sorting order in SQL?' ── SQL sorts in Ascending (ASC) order by default. 'Does ORDER BY modify data stored in the database?' ── No, it only changes how results are displayed.",
      "🔥 Pro Tip (Interview): WHERE → Filters rows. ORDER BY → Sorts rows. ASC → Small to Large / A to Z. DESC → Large to Small / Z to A. Think of ORDER BY as arranging books on a shelf—you still have the same books, you've just changed their order. 📚"
    ]
  },
  "Basics-007": {
    "code_id": "Basics-007",
    "numeric_id": 7,
    "title": "Limit the Number of Rows (LIMIT)",
    "code": "SELECT *\nFROM employees\nLIMIT 5;",
    "timeComplexity": "O(N) (Database may stop early after reaching the limit)",
    "spaceComplexity": "O(K) (Where K is the number of rows returned)",
    "simplestExplanation": "LIMIT restricts the maximum number of rows returned by a query. It stops reading and materializing rows once the specified limit count is reached.",
    "mentalModel": "Employees Table (1000 rows) ──► LIMIT 5 ──► Stop after returning first 5 rows ──► Remaining 995 rows ignored",
    "lineByLine": [
      {
        "line": "SELECT *",
        "explanation": "Retrieves all columns. You can also specify specific columns like SELECT employee_id, first_name, salary."
      },
      {
        "line": "FROM table_name",
        "explanation": "Specifies the table to read (e.g. FROM employees; FROM students; FROM products;)."
      },
      {
        "line": "LIMIT 5;",
        "explanation": "LIMIT restricts the number of rows returned. It does not filter rows based on a condition; it simply stops after returning the specified count."
      },
      {
        "line": "📚 Understanding LIMIT & Execution Sequence",
        "explanation": "Execution steps:\nStep 1: FROM employees ── Locate table\nStep 2: Read rows\nStep 3: SELECT * ── Retrieve required columns\nStep 4: LIMIT 5 ── Stop after returning 5 rows\nStep 5: Display result"
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended - First 5 Rows):\n```sql\nSELECT *\nFROM employees\nLIMIT 5;\n```\n\nMethod 2 (Specific Columns):\n```sql\nSELECT employee_id,\n       first_name,\n       salary\nFROM employees\nLIMIT 5;\n```\nRetrieves only required columns. Preferred in production.\n\nMethod 3 (Top 5 Highest Salaries - ORDER BY + LIMIT):\n```sql\nSELECT *\nFROM employees\nORDER BY salary DESC\nLIMIT 5;\n```\nSorts first, then returns only the top 5 rows."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nLIMIT ──► Restrict number of rows returned\n   ├── LIMIT 5 ──► First 5 rows\n   └── ORDER BY + LIMIT ──► Top N / Bottom N Records\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column1, column2\nFROM table_name\nLIMIT 5;\n```\n\nProblem Solution:\n```sql\nSELECT *\nFROM employees\nLIMIT 5;\n```\n\nTop 5 Highest Salaries:\n```sql\nSELECT *\nFROM employees\nORDER BY salary DESC\nLIMIT 5;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting LIMIT Value: SELECT * FROM employees LIMIT; ── Error: SQL expects a numeric value after LIMIT.",
      "❌ 2. Using LIMIT Before ORDER BY: SELECT * FROM employees LIMIT 5 ORDER BY salary DESC; ── Error: ORDER BY must always come before LIMIT.",
      "❌ 3. Assuming LIMIT Always Returns Highest Salary: SELECT * FROM employees LIMIT 5; ── Returns whichever 5 rows are read first, NOT highest paid. Use ORDER BY salary DESC LIMIT 5.",
      "❌ 4. Negative LIMIT: LIMIT -5; ── Invalid in most SQL databases.",
      "❌ 5. Forgetting ORDER BY: Without sorting, row selection order is not guaranteed."
    ],
    "keyTakeaway": "LIMIT restricts the number of rows returned by a query. It is commonly used with ORDER BY to retrieve the Top N or Bottom N records. Without ORDER BY, the returned rows have no guaranteed order.",
    "interviewPros": [
      "Q1. What does LIMIT do? Restricts the number of rows returned.",
      "Q2. Does LIMIT filter data? No, it only limits the number of rows displayed.",
      "Q3. Should LIMIT be used with ORDER BY? Yes, otherwise returned rows are non-deterministic.",
      "Q4. Can LIMIT return zero rows? Yes (e.g. LIMIT 0 returns an empty result set).",
      "Q5. Is LIMIT supported by every database? No: MySQL, PostgreSQL & SQLite use LIMIT; SQL Server uses TOP; Oracle uses FETCH FIRST or ROWNUM."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between WHERE and LIMIT?\n• Why should ORDER BY be used with LIMIT?\n• How do you retrieve the Top 10 highest-paid employees?\n• Does LIMIT improve performance?\n• Which databases support LIMIT?",
      "⚡ Performance Notes:\n• Recommended: SELECT employee_id, first_name, salary FROM employees ORDER BY salary DESC LIMIT 5; (✔ Returns only required columns, ✔ Returns only required rows, ✔ Faster than retrieving the entire table)\n• Large Tables: Using LIMIT with an indexed ORDER BY column allows the database to avoid full table scans.",
      "🌍 Real-World Use Cases:\n• ✅ Top 10 highest-paid employees: ORDER BY salary DESC LIMIT 10;\n• ✅ Latest 20 orders: ORDER BY order_date DESC LIMIT 20;\n• ✅ First 5 products: LIMIT 5;\n• ✅ Dashboard preview: Display recent records instead of full table.",
      "🎓 Company Interview Tip: 'Does LIMIT 5 always return the same five rows?' ── No. Without an ORDER BY clause, SQL does not guarantee which five rows are returned. Always use ORDER BY when order matters.",
      "🔥 Pro Tip (Interview): ORDER BY + LIMIT = Top N Records (Top 5 highest salaries, Top 10 selling products, Latest 20 orders). This combination is one of the most frequently asked SQL interview concepts! 🏆"
    ]
  },
  "Basics-008": {
    "code_id": "Basics-008",
    "numeric_id": 8,
    "title": "Find Distinct Values (DISTINCT)",
    "code": "SELECT DISTINCT department_id\nFROM employees;",
    "timeComplexity": "O(N) (Without Index) / O(N log N) (Database may sort/hash to remove duplicates)",
    "spaceComplexity": "O(N)",
    "simplestExplanation": "DISTINCT removes duplicate values from query results, keeping only a single copy of each unique value returned by the SELECT statement.",
    "mentalModel": "Employee Table ──► Read Department IDs ──► DISTINCT (Duplicate Remover) ──► Keep unique values only (HR, IT, Sales)",
    "lineByLine": [
      {
        "line": "SELECT DISTINCT department_id",
        "explanation": "SELECT retrieves column data, and DISTINCT removes duplicate values so only unique department IDs are returned."
      },
      {
        "line": "FROM table_name",
        "explanation": "Specifies which table SQL should read (e.g. FROM employees; FROM students; FROM products;)."
      },
      {
        "line": "📚 Understanding DISTINCT",
        "explanation": "Think of DISTINCT as a duplicate remover. Without DISTINCT, SQL returns duplicate values for every matching row. With DISTINCT, duplicate rows are removed from the final result set."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Locate the table.\nStep 2: Read every row.\nStep 3: SELECT department_id ── Retrieve the requested column.\nStep 4: DISTINCT ── Remove duplicate values.\nStep 5: Display only unique values."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended - Single Column):\n```sql\nSELECT DISTINCT department_id\nFROM employees;\n```\n\nMethod 2 (Multiple Columns):\n```sql\nSELECT DISTINCT department_id,\n                job_title\nFROM employees;\n```\nReturns only unique combinations of department and job title.\n\nMethod 3 (Using GROUP BY):\n```sql\nSELECT department_id\nFROM employees\nGROUP BY department_id;\n```\nReturns unique department IDs, but DISTINCT is simpler when no aggregates are needed."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nSELECT ──► Retrieve Column ──► DISTINCT ──► Remove Duplicates ──► Unique Values\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT DISTINCT column_name\nFROM table_name;\n```\n\nProblem Solution:\n```sql\nSELECT DISTINCT department_id\nFROM employees;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting DISTINCT: SELECT department_id FROM employees; ── Returns duplicate values.",
      "❌ 2. Expecting DISTINCT to Remove Duplicate Rows Completely: SELECT DISTINCT department_id, salary FROM employees; ── DISTINCT evaluates the entire row combination, not just one column.",
      "❌ 3. Confusing DISTINCT with UNIQUE Constraint: DISTINCT removes query duplicates; UNIQUE constraint prevents duplicate row inserts into the database table.",
      "❌ 4. Using DISTINCT Unnecessarily: SELECT DISTINCT employee_id FROM employees; ── Doing DISTINCT on a Primary Key is redundant.",
      "❌ 5. Assuming DISTINCT Sorts Data: SELECT DISTINCT city FROM employees; ── DISTINCT removes duplicates; it does not guarantee sorted output. Use ORDER BY for sorting."
    ],
    "keyTakeaway": "DISTINCT removes duplicate values from the query result. It does not modify the original table. It is commonly used for reports, filters, dashboards, and dropdown lists where only unique values are needed.",
    "interviewPros": [
      "Q1. What does DISTINCT do? Removes duplicate values from query results.",
      "Q2. Does DISTINCT change data stored in the table? No, it only affects query output.",
      "Q3. Can DISTINCT be used with multiple columns? Yes, it evaluates unique combinations.",
      "Q4. Is DISTINCT the same as GROUP BY? No, DISTINCT only removes duplicates, whereas GROUP BY creates groups for aggregate functions.",
      "Q5. Can DISTINCT be used with ORDER BY? Yes (e.g. SELECT DISTINCT city FROM employees ORDER BY city;)."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between DISTINCT and GROUP BY?\n• Does DISTINCT remove duplicate rows or duplicate values?\n• Can DISTINCT work with multiple columns?\n• Does DISTINCT affect database data?\n• When should DISTINCT be avoided?",
      "⚡ Performance Notes:\n• Recommended: SELECT DISTINCT department_id FROM employees; (✔ Returns only unique values, ✔ Useful for reporting & UI filters)\n• Large Tables: Removing duplicates requires sorting or hashing internally. Indexes on DISTINCT columns help avoid expensive scans.",
      "🌍 Real-World Use Cases:\n• ✅ Show unique cities: SELECT DISTINCT city FROM customers;\n• ✅ Show available product categories: SELECT DISTINCT category FROM products;\n• ✅ Show unique departments: SELECT DISTINCT department_id FROM employees;\n• ✅ Populate filter dropdowns in UI applications.",
      "🎓 Company Interview Tip: 'What is the difference between DISTINCT and GROUP BY?' ── DISTINCT removes duplicate values; GROUP BY creates groups and is mainly used with aggregate functions like COUNT(), SUM(), and AVG().",
      "🔥 Pro Tip (Interview): SELECT (Retrieve Data) ➔ DISTINCT (Remove Duplicates) ➔ ORDER BY (Optional Sort Results). In interviews, when asked 'How to display all unique values?', DISTINCT is your go-to keyword! 🚀"
    ]
  },
  "Basics-009": {
    "code_id": "Basics-009",
    "numeric_id": 9,
    "title": "Count Total Records (COUNT())",
    "code": "SELECT COUNT(*)\nFROM employees;",
    "timeComplexity": "O(N) (Without Index) / O(log N) (May be optimized with indexes depending on database)",
    "spaceComplexity": "O(1)",
    "simplestExplanation": "COUNT() is an aggregate function that counts rows. COUNT(*) counts every single row in the table, including rows with NULL values and duplicate values.",
    "mentalModel": "Employees Table ──► COUNT(*) ──► Count every row ──► Output single summary number (e.g. 10)",
    "lineByLine": [
      {
        "line": "SELECT COUNT(*)",
        "explanation": "SELECT retrieves data, and COUNT(*) is an aggregate function that counts every row in the table (including NULLs and duplicates)."
      },
      {
        "line": "FROM table_name",
        "explanation": "Specifies which table SQL should read (e.g. FROM employees; FROM students; FROM products;)."
      },
      {
        "line": "📚 Understanding COUNT() & Aggregation",
        "explanation": "COUNT(*) counts all rows. COUNT(column_name) counts only non-NULL values in that column. COUNT(DISTINCT column) counts unique non-NULL values."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Locate table.\nStep 2: Read every row.\nStep 3: COUNT(*) ── Count every row.\nStep 4: Return a single total number."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended - Count All Rows):\n```sql\nSELECT COUNT(*)\nFROM employees;\n```\n\nMethod 2 (Count Specific Non-NULL Column):\n```sql\nSELECT COUNT(employee_id)\nFROM employees;\n```\nCounts non-NULL values in employee_id column.\n\nMethod 3 (Count Unique Values):\n```sql\nSELECT COUNT(DISTINCT department_id)\nFROM employees;\n```\nCounts only unique department IDs."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nCOUNT()\n  ├── COUNT(*) ──────► All Rows (Includes NULLs)\n  ├── COUNT(col) ────► Non-NULL Values Only\n  └── COUNT(DISTINCT col) ──► Unique Non-NULL Values Only\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT COUNT(*)\nFROM table_name;\n```\n\nProblem Solution:\n```sql\nSELECT COUNT(*)\nFROM employees;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using COUNT(column_name) Without Understanding NULL: SELECT COUNT(manager_id) FROM employees; ── If manager_id contains NULL values, those rows are NOT counted.",
      "❌ 2. Confusing COUNT(*) with COUNT(column): COUNT(*) counts every row; COUNT(column_name) counts only non-NULL values.",
      "❌ 3. Forgetting Parentheses: SELECT COUNT FROM employees; ── Error: SQL expects parentheses around parameters.",
      "❌ 4. Expecting COUNT() to Return Detailed Rows: SELECT COUNT(*) FROM employees; ── Returns a single number (e.g., 10), NOT employee details.",
      "❌ 5. Confusing COUNT() with SUM(): COUNT() counts rows; SUM() adds up numeric values."
    ],
    "keyTakeaway": "COUNT() is an aggregate function used to count rows. COUNT(*) counts every row, while COUNT(column_name) counts only non-NULL values in that column.",
    "interviewPros": [
      "Q1. What is COUNT()? An aggregate function that counts rows.",
      "Q2. What is the difference between COUNT(*) and COUNT(column)? COUNT(*) counts every row; COUNT(column) counts only non-NULL values.",
      "Q3. Does COUNT() ignore NULL? COUNT(*) does not ignore NULLs. COUNT(column) ignores NULL values.",
      "Q4. Can COUNT() be used with DISTINCT? Yes (e.g. SELECT COUNT(DISTINCT department_id) FROM employees;).",
      "Q5. What does COUNT(*) return for an empty table? It returns 0."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between COUNT(*) and COUNT(column)?\n• Does COUNT() count NULL values?\n• Difference between COUNT(*) and COUNT(DISTINCT)?\n• Is COUNT() an aggregate function?\n• Can COUNT() be used with GROUP BY?",
      "⚡ Performance Notes:\n• Recommended: SELECT COUNT(*) FROM employees; (✔ Easy to read, ✔ Optimized by query engines)\n• Trick Question: Suppose a table has 10 rows and manager_id has 3 NULL values ── COUNT(*) returns 10, COUNT(manager_id) returns 7!",
      "🌍 Real-World Use Cases:\n• ✅ Count total employees: SELECT COUNT(*) FROM employees;\n• ✅ Count registered students;\n• ✅ Count total orders;\n• ✅ Dashboard statistics & analytics reports.",
      "🎓 Company Interview Tip: 'What is the difference between COUNT(*) and COUNT(column_name)?' ── COUNT(*) counts all rows regardless of contents; COUNT(column_name) counts only rows where that column is NOT NULL.",
      "🔥 Pro Tip (Interview Trick Question): Table with 10 rows and 3 NULL manager_ids ➔ COUNT(*) = 10, COUNT(manager_id) = 7, COUNT(DISTINCT department_id) = unique non-NULL count. This distinction is asked in almost every SQL interview! 🚀"
    ]
  },
  "Basics-010": {
    "code_id": "Basics-010",
    "numeric_id": 10,
    "title": "Find the Maximum Value (MAX())",
    "code": "SELECT MAX(salary)\nFROM employees;",
    "timeComplexity": "O(N) (Without Index) / O(log N) (Can be optimized using indexes depending on database)",
    "spaceComplexity": "O(1)",
    "simplestExplanation": "MAX() is an aggregate function that compares every value in a column and returns only the single highest value. NULL values are automatically ignored.",
    "mentalModel": "Employees Salaries ──► [50000, 65000, 72000, 85000, 120000, 78000] ──► MAX() Competition Judge ──► Single Winner: 120000.0",
    "lineByLine": [
      {
        "line": "SELECT",
        "explanation": "Tells SQL to retrieve data."
      },
      {
        "line": "MAX(column_name)",
        "explanation": "MAX() is an aggregate function that returns the largest value from a column (e.g., MAX(salary) returns highest salary)."
      },
      {
        "line": "FROM table_name",
        "explanation": "Specifies which table SQL should search (e.g. FROM employees; FROM students; FROM products;)."
      },
      {
        "line": "📚 Understanding MAX()",
        "explanation": "Compares every value in the column and returns strictly one value. NULL values are ignored by MAX()."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Locate table.\nStep 2: Read every row.\nStep 3: MAX(salary) ── Compare all salary values.\nStep 4: Keep the highest value.\nStep 5: Return one single result."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended):\n```sql\nSELECT MAX(salary)\nFROM employees;\n```\n\nMethod 2 (Using ORDER BY):\n```sql\nSELECT salary\nFROM employees\nORDER BY salary DESC\nLIMIT 1;\n```\nReturns the same highest value, though MAX() is simpler and more readable.\n\nMethod 3 (Highest Employee Details):\n```sql\nSELECT *\nFROM employees\nORDER BY salary DESC\nLIMIT 1;\n```\nUseful when you need the entire employee record, not just the salary."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nMAX()\n  │\n  ▼\nCompare Values\n  │\n  ▼\nFind Highest\n  │\n  ▼\nReturn One Value\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT MAX(column_name)\nFROM table_name;\n```\n\nProblem Solution:\n```sql\nSELECT MAX(salary)\nFROM employees;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Confusing MAX() with COUNT(): SELECT COUNT(salary) FROM employees; counts rows; it does NOT return the highest salary.",
      "❌ 2. Using MAX(*): SELECT MAX(*) FROM employees; ── Error: MAX() operates on a single column, never *.",
      "❌ 3. Forgetting Parentheses: SELECT MAX FROM employees; ── Error: Function parentheses are required: SELECT MAX(salary).",
      "❌ 4. Expecting MAX() to Return the Whole Row: SELECT MAX(salary) FROM employees; returns 120000.0, NOT the employee name or department. Use ORDER BY DESC LIMIT 1 if full row is needed.",
      "❌ 5. Thinking MAX() Sorts the Table: MAX() only scans to find the highest value; it does NOT sort all rows."
    ],
    "keyTakeaway": "MAX() is an aggregate function that returns the largest value from a column. It does not return all rows or sort the table. It returns only one value (unless used with GROUP BY).",
    "interviewPros": [
      "Q1. What is MAX()? An aggregate function that returns the highest value.",
      "Q2. Can MAX() work with dates? Yes, it returns the latest date.",
      "Q3. Can MAX() work with text? Yes, it returns the highest value according to alphabetical order.",
      "Q4. Does MAX() ignore NULL values? Yes, NULL values are ignored.",
      "Q5. Can MAX() be used with GROUP BY? Yes (e.g. SELECT department_id, MAX(salary) FROM employees GROUP BY department_id;)."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between MAX() and ORDER BY DESC LIMIT 1?\n• Does MAX() ignore NULL values?\n• Can MAX() work with dates or strings?\n• Can MAX() be combined with GROUP BY?",
      "⚡ Performance Notes:\n• Recommended: SELECT MAX(salary) FROM employees; (✔ Easy to read, ✔ Query engine optimized, ✔ Preferred in interviews)\n• Large Tables: If the column is indexed with a B-Tree, the database engine can jump straight to the maximum value in O(log N) or O(1) time!",
      "🌍 Real-World Use Cases:\n• ✅ Highest salary: SELECT MAX(salary) FROM employees;\n• ✅ Highest exam marks: SELECT MAX(marks) FROM students;\n• ✅ Most expensive product: SELECT MAX(price) FROM products;\n• ✅ Latest order date: SELECT MAX(order_date) FROM orders;",
      "🎓 Company Interview Tip: 'What is the difference between MAX() and ORDER BY DESC LIMIT 1?' ── MAX() returns only the highest value from a column; ORDER BY DESC LIMIT 1 returns the first row after sorting, which can include all column values if SELECT * is used.",
      "🔥 Pro Tip (Interview Trick Question): Suppose salaries are [50000, 70000, NULL, 90000, 65000]. Query: SELECT MAX(salary) FROM employees; ➔ Answer: 90000. NULL values are completely ignored by MAX()!"
    ]
  },
  "Basics-011": {
    "code_id": "Basics-011",
    "numeric_id": 11,
    "title": "Find the Minimum Value (MIN())",
    "code": "SELECT MIN(salary)\nFROM employees;",
    "timeComplexity": "O(N) (Without Index) / O(log N) (Can be optimized using indexes depending on database)",
    "spaceComplexity": "O(1)",
    "simplestExplanation": "MIN() is an aggregate function that compares every value in a column and returns only the single smallest value. NULL values are automatically ignored.",
    "mentalModel": "Employees Salaries ──► [91000, 85000, 72000, 65000, 78000, 55000] ──► MIN() Search ──► Single Smallest: 55000.0",
    "lineByLine": [
      {
        "line": "SELECT",
        "explanation": "Tells SQL that you want to retrieve data."
      },
      {
        "line": "MIN(column_name)",
        "explanation": "MIN() is an aggregate function that returns the smallest value from a column (e.g., MIN(salary) returns lowest salary)."
      },
      {
        "line": "FROM table_name",
        "explanation": "Specifies which table SQL should search (e.g. FROM employees; FROM students; FROM products;)."
      },
      {
        "line": "📚 Understanding MIN()",
        "explanation": "Compares every value in the column and returns strictly one value. NULL values are ignored by MIN()."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Locate table.\nStep 2: Read every row.\nStep 3: MIN(salary) ── Compare all salary values.\nStep 4: Keep the smallest value.\nStep 5: Return one single result."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended):\n```sql\nSELECT MIN(salary)\nFROM employees;\n```\n\nMethod 2 (Using ORDER BY):\n```sql\nSELECT salary\nFROM employees\nORDER BY salary ASC\nLIMIT 1;\n```\nReturns the same smallest value, though MIN() is simpler and easier to understand.\n\nMethod 3 (Lowest Employee Details):\n```sql\nSELECT *\nFROM employees\nORDER BY salary ASC\nLIMIT 1;\n```\nUseful when you need the entire employee record, not just the salary."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nMIN()\n  │\n  ▼\nCompare Values\n  │\n  ▼\nFind Smallest\n  │\n  ▼\nReturn One Value\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT MIN(column_name)\nFROM table_name;\n```\n\nProblem Solution:\n```sql\nSELECT MIN(salary)\nFROM employees;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Confusing MIN() with MAX(): SELECT MAX(salary) FROM employees; returns highest salary, not the lowest.",
      "❌ 2. Using MIN(*): SELECT MIN(*) FROM employees; ── Error: MIN() works on one column, not *.",
      "❌ 3. Forgetting Parentheses: SELECT MIN FROM employees; ── Error: SQL functions require parentheses: SELECT MIN(salary).",
      "❌ 4. Expecting MIN() to Return the Whole Row: SELECT MIN(salary) FROM employees; returns 55000.0, NOT the employee details. Use ORDER BY ASC LIMIT 1 for full row details.",
      "❌ 5. Thinking MIN() Sorts the Table: MIN() only finds the smallest value; it does NOT sort every row."
    ],
    "keyTakeaway": "MIN() is an aggregate function that returns the smallest value from a column. It returns only one value and does not sort the entire table or return complete rows.",
    "interviewPros": [
      "Q1. What is MIN()? An aggregate function that returns the smallest value.",
      "Q2. Does MIN() ignore NULL values? Yes, NULL values are ignored.",
      "Q3. Can MIN() work with dates? Yes, it returns the earliest (oldest) date.",
      "Q4. Can MIN() work with text? Yes, it returns the first value alphabetically.",
      "Q5. Can MIN() be used with GROUP BY? Yes (e.g. SELECT department_id, MIN(salary) FROM employees GROUP BY department_id;)."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between MIN() and ORDER BY ASC LIMIT 1?\n• Does MIN() ignore NULL values?\n• Can MIN() work with dates or strings?\n• Can MIN() be combined with GROUP BY?",
      "⚡ Performance Notes:\n• Recommended: SELECT MIN(salary) FROM employees; (✔ Simple, ✔ Fast, ✔ Preferred in interviews)\n• Large Tables: If the column is indexed with a B-Tree, many databases can jump directly to the first leaf node in O(log N) or O(1) time!",
      "🌍 Real-World Use Cases:\n• ✅ Lowest salary: SELECT MIN(salary) FROM employees;\n• ✅ Lowest exam marks: SELECT MIN(marks) FROM students;\n• ✅ Cheapest product: SELECT MIN(price) FROM products;\n• ✅ Earliest joining date: SELECT MIN(hire_date) FROM employees;",
      "🎓 Company Interview Tip: 'What is the difference between MIN() and ORDER BY ASC LIMIT 1?' ── MIN() returns only the smallest value from a column; ORDER BY ASC LIMIT 1 returns the first row after sorting, which can include all column values if SELECT * is used.",
      "🔥 Pro Tip (Interview Trick Question): Suppose salaries are [50000, 70000, NULL, 90000, 65000]. Query: SELECT MIN(salary) FROM employees; ➔ Answer: 50000. NULL values are completely ignored by MIN()!"
    ]
  },
  "Basics-012": {
    "code_id": "Basics-012",
    "numeric_id": 12,
    "title": "Find the Total Sum (SUM())",
    "code": "SELECT SUM(salary)\nFROM employees;",
    "timeComplexity": "O(N) (Without Index) / O(log N) (May be optimized depending on indexes and database engine)",
    "spaceComplexity": "O(1)",
    "simplestExplanation": "SUM() is an aggregate function that adds all numeric values in a column and returns a single total. NULL values are automatically ignored.",
    "mentalModel": "Employees Salaries ──► [50000 + 65000 + 70000 + 85000 + 90000 ...] ──► SUM() Running Accumulator ──► Total Sum: 665000.0",
    "lineByLine": [
      {
        "line": "SELECT",
        "explanation": "Tells SQL to retrieve data."
      },
      {
        "line": "SUM(column_name)",
        "explanation": "SUM() is an aggregate function that adds all numeric values from a column (e.g. SUM(salary) returns total payroll expenditure)."
      },
      {
        "line": "FROM table_name",
        "explanation": "Specifies the table to read (e.g. FROM employees; FROM students; FROM orders;)."
      },
      {
        "line": "📚 Understanding SUM()",
        "explanation": "Adds every numeric value in the column and returns strictly one total value. NULL values are ignored by SUM()."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Locate table.\nStep 2: Read every row.\nStep 3: SUM(salary) ── Add every salary.\nStep 4: Return one value."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended):\n```sql\nSELECT SUM(salary)\nFROM employees;\n```\n\nMethod 2 (Sum After Filtering):\n```sql\nSELECT SUM(salary)\nFROM employees\nWHERE department_id = 101;\n```\nReturns total salary only for Department 101.\n\nMethod 3 (Sum Using Alias):\n```sql\nSELECT SUM(salary) AS total_salary\nFROM employees;\n```\nProduces a more readable column header."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nSUM()\n  │\n  ▼\nRead Numeric Values\n  │\n  ▼\nAdd Every Value\n  │\n  ▼\nReturn Total Sum\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT SUM(column_name)\nFROM table_name;\n```\n\nProblem Solution:\n```sql\nSELECT SUM(salary)\nFROM employees;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using SUM(*): SELECT SUM(*) FROM employees; ── Error: SUM() works on one numeric column, never wildcard *.",
      "❌ 2. Using SUM() on Text: SELECT SUM(first_name) FROM employees; ── Error: Text/string values cannot be added mathematically.",
      "❌ 3. Forgetting Parentheses: SELECT SUM FROM employees; ── Error: SQL functions require parentheses: SELECT SUM(salary).",
      "❌ 4. Confusing SUM() with COUNT(): COUNT(salary) counts rows (e.g. 10); SUM(salary) adds numeric values (e.g. 665000.0).",
      "❌ 5. Expecting SUM() to Return Individual Rows: SELECT SUM(salary) FROM employees; returns one total number, not individual employee records."
    ],
    "keyTakeaway": "SUM() is an aggregate function that adds all numeric values in a column and returns a single total. NULL values are ignored.",
    "interviewPros": [
      "Q1. What does SUM() do? Adds all numeric values in a column.",
      "Q2. Does SUM() ignore NULL values? Yes, NULL values are ignored.",
      "Q3. Can SUM() work with text columns? No, only numeric columns.",
      "Q4. Can SUM() be used with GROUP BY? Yes (e.g. SELECT department_id, SUM(salary) FROM employees GROUP BY department_id;).",
      "Q5. What happens if all values are NULL? Most databases return NULL."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between SUM() and COUNT()?\n• Does SUM() ignore NULL values?\n• Can SUM() work on VARCHAR columns?\n• Can SUM() be combined with GROUP BY?\n• Can SUM() be used with WHERE?",
      "⚡ Performance Notes:\n• Recommended: SELECT SUM(salary) FROM employees; (✔ Database optimized, ✔ Easy to read, ✔ Most commonly used)\n• Large Tables: Indexes help evaluate WHERE filters first before aggregation, reducing records passed to the summation accumulator.",
      "🌍 Real-World Use Cases:\n• ✅ Total company salary: SELECT SUM(salary) FROM employees;\n• ✅ Total sales amount: SELECT SUM(amount) FROM orders;\n• ✅ Total student marks: SELECT SUM(marks) FROM students;\n• ✅ Total stock quantity: SELECT SUM(quantity) FROM products;",
      "🎓 Company Interview Tip: 'What is the difference between COUNT() and SUM()?' ── COUNT() counts the number of rows; SUM() adds the values of a numeric column.",
      "🔥 Pro Tip (Interview Trick Question): Salaries [50000, 70000, NULL, 90000, 65000]. Query: SELECT SUM(salary) FROM employees; ➔ Answer: 275000 (50000 + 70000 + 90000 + 65000 = 275000). NULL values are ignored by SUM()! 🚀"
    ]
  },
  "Basics-013": {
    "code_id": "Basics-013",
    "numeric_id": 13,
    "title": "Calculate the Average (AVG())",
    "code": "SELECT AVG(salary)\nFROM employees;",
    "timeComplexity": "O(N) (Without Index) / O(log N) (May be optimized depending on indexes and database engine)",
    "spaceComplexity": "O(1)",
    "simplestExplanation": "AVG() is an aggregate function that calculates the arithmetic mean of numeric values. It automatically ignores NULL values and returns a single average.",
    "mentalModel": "Employees Salaries ──► Sum all non-NULL salaries ──► Count valid rows ──► [SUM ÷ COUNT] ──► Average: 83125.0",
    "lineByLine": [
      {
        "line": "SELECT",
        "explanation": "Tells SQL that you want to retrieve data."
      },
      {
        "line": "AVG(column_name)",
        "explanation": "AVG() is an aggregate function that calculates the arithmetic mean of numeric values (e.g. AVG(salary) returns average employee salary)."
      },
      {
        "line": "FROM table_name",
        "explanation": "Specifies which table SQL should read (e.g. FROM employees; FROM students; FROM products;)."
      },
      {
        "line": "📚 Understanding AVG()",
        "explanation": "Calculates (SUM ÷ COUNT) of all non-NULL values and returns strictly one value. NULL values are excluded from both SUM and COUNT."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Locate table.\nStep 2: Read every row.\nStep 3: AVG(salary) ── Add non-NULL salaries.\nStep 4: Count non-NULL rows.\nStep 5: Divide SUM by COUNT.\nStep 6: Return single average value."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended):\n```sql\nSELECT AVG(salary)\nFROM employees;\n```\n\nMethod 2 (Calculate Average Manually):\n```sql\nSELECT SUM(salary) / COUNT(salary)\nFROM employees;\n```\nProduces the same result and illustrates how AVG() functions internally.\n\nMethod 3 (Average After Filtering):\n```sql\nSELECT AVG(salary)\nFROM employees\nWHERE department_id = 101;\n```\nCalculates the average salary only for Department 101."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nAVG()\n  │\n  ▼\nRead Numeric Values\n  │\n  ▼\nCalculate SUM\n  │\n  ▼\nCount Values\n  │\n  ▼\nSUM ÷ COUNT\n  │\n  ▼\nReturn Average\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT AVG(column_name)\nFROM table_name;\n```\n\nProblem Solution:\n```sql\nSELECT AVG(salary)\nFROM employees;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using AVG(*): SELECT AVG(*) FROM employees; ── Error: AVG() works on one numeric column, never wildcard *.",
      "❌ 2. Using AVG() on Text: SELECT AVG(first_name) FROM employees; ── Error: Text/string values cannot be averaged mathematically.",
      "❌ 3. Forgetting Parentheses: SELECT AVG FROM employees; ── Error: SQL functions require parentheses: SELECT AVG(salary).",
      "❌ 4. Confusing AVG() with SUM(): SUM adds all values together; AVG divides that sum by the count of values.",
      "❌ 5. Assuming NULL Values Are Included in Denominator: NULL values are completely excluded from both the numerator and the denominator (divided by non-NULL count, not total rows)."
    ],
    "keyTakeaway": "AVG() is an aggregate function that calculates the average of numeric values. It automatically ignores NULL values and returns one value.",
    "interviewPros": [
      "Q1. What does AVG() do? Calculates the arithmetic mean.",
      "Q2. Does AVG() ignore NULL values? Yes, NULL values are ignored.",
      "Q3. Can AVG() work on text columns? No, only numeric columns.",
      "Q4. Can AVG() be used with GROUP BY? Yes (e.g. SELECT department_id, AVG(salary) FROM employees GROUP BY department_id;).",
      "Q5. How is AVG() calculated internally? Using SUM(column) / COUNT(column)."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between AVG() and SUM()?\n• Does AVG() count NULL values in the denominator?\n• Can AVG() work on VARCHAR columns?\n• How is AVG() calculated internally?\n• Can AVG() be combined with GROUP BY?",
      "⚡ Performance Notes:\n• Recommended: SELECT AVG(salary) FROM employees; (✔ Database optimized, ✔ Easy to read, ✔ Preferred over manual calculation)\n• Large Tables: Scans matching rows to accumulate sum and count; indexes optimize pre-filtering with WHERE before calculation.",
      "🌍 Real-World Use Cases:\n• ✅ Average employee salary: SELECT AVG(salary) FROM employees;\n• ✅ Average student marks: SELECT AVG(marks) FROM students;\n• ✅ Average product price: SELECT AVG(price) FROM products;\n• ✅ Average monthly sales order amount: SELECT AVG(amount) FROM orders;",
      "🎓 Company Interview Tip: 'How does SQL calculate AVG()?' ── AVG(column) = SUM(column) / COUNT(column). Crucially, only non-NULL values are included in both the sum and the row count divisor.",
      "🔥 Pro Tip (Interview Trick Question): Suppose salaries are [50000, 70000, NULL, 90000, 60000]. Query: SELECT AVG(salary) FROM employees; ➔ Answer: (50000 + 70000 + 90000 + 60000) / 4 = 67500. It divides by 4, NOT 5, because NULLs are excluded from the denominator! 🚀"
    ]
  },
  "Basics-014": {
    "code_id": "Basics-014",
    "numeric_id": 14,
    "title": "Group Data Using GROUP BY",
    "code": "SELECT department_id,\n       COUNT(*)\nFROM employees\nGROUP BY department_id;",
    "timeComplexity": "O(N) (Without Index) / O(N log N) (Database may sort/hash while grouping)",
    "spaceComplexity": "O(N) (Depends on number of unique groups)",
    "simplestExplanation": "GROUP BY partitions rows having the same values into distinct groups so aggregate functions (COUNT, SUM, AVG, MAX, MIN) run separately for each group.",
    "mentalModel": "Employees ──► Partition by department_id [101: 3, 102: 2, 103: 1, 104: 1, 105: 1] ──► Execute COUNT(*) per partition ──► Output 1 Row Per Group",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*)",
        "explanation": "Specifies what to project: the grouping key (department_id) and the row count for each group."
      },
      {
        "line": "COUNT(*)",
        "explanation": "Aggregate function that counts records inside each respective departmental group rather than across the whole table."
      },
      {
        "line": "FROM employees",
        "explanation": "Identifies the source dataset to scan."
      },
      {
        "line": "GROUP BY department_id;",
        "explanation": "Instructs SQL to place employees with matching department_id values into the same group. Aggregations run independently for each group."
      },
      {
        "line": "📚 Understanding GROUP BY",
        "explanation": "Think of GROUP BY like sorting students into classrooms. Students in the same class stand together, and then the teacher counts or evaluates students in each classroom."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Locate table.\nStep 2: Read every row.\nStep 3: GROUP BY department_id ── Create partitioned groups.\nStep 4: COUNT(*) ── Calculate count inside each group.\nStep 5: Return one summarized row per group."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended):\n```sql\nSELECT department_id, COUNT(*)\nFROM employees\nGROUP BY department_id;\n```\n\nMethod 2 (Average Salary per Department):\n```sql\nSELECT department_id, AVG(salary)\nFROM employees\nGROUP BY department_id;\n```\n\nMethod 3 (Max Salary per Department):\n```sql\nSELECT department_id, MAX(salary)\nFROM employees\nGROUP BY department_id;\n```\n\nMethod 4 (Total Salary per Department):\n```sql\nSELECT department_id, SUM(salary)\nFROM employees\nGROUP BY department_id;\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nGROUP BY\n   │\n   ▼\nCreate Groups\n   │\n   ▼\nRun Aggregate Function\n   │\n   ▼\nReturn One Row Per Group\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column_name, aggregate_function(column_name)\nFROM table_name\nGROUP BY column_name;\n```\n\nProblem Solution:\n```sql\nSELECT department_id, COUNT(*)\nFROM employees\nGROUP BY department_id;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting GROUP BY: SELECT department_id, COUNT(*) FROM employees; ── Syntax error because department_id is neither aggregated nor grouped.",
      "❌ 2. Selecting Non-Grouped Columns: SELECT department_id, first_name, COUNT(*) FROM employees GROUP BY department_id; ── Error: first_name is not in GROUP BY.",
      "❌ 3. Thinking GROUP BY Sorts Data: GROUP BY does NOT guarantee sorting order. Use ORDER BY if a specific sort sequence is required.",
      "❌ 4. Confusing WHERE with GROUP BY: WHERE filters individual rows before grouping; GROUP BY collects rows into summary buckets.",
      "❌ 5. Misunderstanding Aggregation Scope: SUM(salary) with GROUP BY returns total salary per group, not the grand total for the whole table."
    ],
    "keyTakeaway": "GROUP BY groups rows with the same values together so aggregate functions (COUNT, SUM, AVG, MAX, MIN) can be calculated separately for each group.",
    "interviewPros": [
      "Q1. What does GROUP BY do? Combines rows with identical values into groups.",
      "Q2. Which functions are commonly used with GROUP BY? COUNT(), SUM(), AVG(), MAX(), MIN().",
      "Q3. Can GROUP BY be used without aggregate functions? Yes, but it acts similarly to DISTINCT.",
      "Q4. Does GROUP BY sort the output? No, an explicit ORDER BY clause is required.",
      "Q5. Can GROUP BY use multiple columns? Yes (e.g. GROUP BY department_id, city;)."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between GROUP BY and ORDER BY?\n• Why is GROUP BY used?\n• Can GROUP BY have multiple columns?\n• Which aggregate functions work with GROUP BY?\n• Can GROUP BY be used without COUNT()?",
      "⚡ Performance Notes:\n• Recommended: SELECT department_id, COUNT(*) FROM employees GROUP BY department_id; (✔ Efficient, ✔ Database optimized, ✔ Most common interview solution)\n• Large Tables: Indexes on grouped columns allow the database engine to use Stream Aggregate / Index Grouping rather than Hash Aggregate or Sort Aggregate.",
      "🌍 Real-World Use Cases:\n• ✅ Count employees per department: SELECT department_id, COUNT(*) FROM employees GROUP BY department_id;\n• ✅ Total sales by city: SELECT city, SUM(amount) FROM orders GROUP BY city;\n• ✅ Average marks per class: SELECT class, AVG(marks) FROM students GROUP BY class;\n• ✅ Highest salary per department: SELECT department_id, MAX(salary) FROM employees GROUP BY department_id;",
      "🎓 Company Interview Tip: 'What is the difference between GROUP BY and ORDER BY?' ── GROUP BY collapses rows with identical values into groups for aggregation; ORDER BY purely sorts the final result set.",
      "🔥 Pro Tip (Interview Trick Question): If a query selects department_id and COUNT(*) with GROUP BY department_id, SQL returns ONE row per department (e.g., HR: 3, IT: 2), NOT one row per individual employee! 🚀"
    ]
  },
  "Basics-015": {
    "code_id": "Basics-015",
    "numeric_id": 15,
    "title": "Filter Groups Using HAVING",
    "code": "SELECT department_id,\n       COUNT(*) AS total_employees\nFROM employees\nGROUP BY department_id\nHAVING COUNT(*) > 2;",
    "timeComplexity": "O(N) (Without Index) / O(N log N) (Grouping + Filtering depending on database engine)",
    "spaceComplexity": "O(N) (Depends on number of groups)",
    "simplestExplanation": "HAVING filters summarized groups after GROUP BY evaluates aggregate calculations, discarding groups that do not satisfy the condition.",
    "mentalModel": "Employees ──► GROUP BY department_id [101: 3, 102: 2, 103: 1, 104: 1, 105: 1] ──► Security Guard HAVING COUNT(*) > 2 ──► Keep Only [101: 3] ──► Output Filtered Groups",
    "lineByLine": [
      {
        "line": "SELECT department_id, COUNT(*) AS total_employees",
        "explanation": "Selects the grouping key (department_id) and the aliased count of employees."
      },
      {
        "line": "FROM employees",
        "explanation": "Identifies the source dataset to read."
      },
      {
        "line": "GROUP BY department_id",
        "explanation": "Creates one summary group for each distinct department_id."
      },
      {
        "line": "HAVING COUNT(*) > 2;",
        "explanation": "Post-aggregation filter: evaluates the aggregate count of each group and retains only departments with more than 2 employees."
      },
      {
        "line": "📚 Understanding HAVING",
        "explanation": "Think of HAVING as a security guard standing after the groups are created. Only groups satisfying the aggregate predicate are allowed through to the final result."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Locate table.\nStep 2: GROUP BY department_id ── Create partitioned groups.\nStep 3: COUNT(*) ── Calculate row count for each group.\nStep 4: HAVING COUNT(*) > 2 ── Remove groups that do not satisfy condition.\nStep 5: Display surviving groups."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended):\n```sql\nSELECT department_id,\n       COUNT(*) AS total_employees\nFROM employees\nGROUP BY department_id\nHAVING COUNT(*) > 2;\n```\n\nMethod 2 (Departments with High Average Salary):\n```sql\nSELECT department_id,\n       AVG(salary) AS average_salary\nFROM employees\nGROUP BY department_id\nHAVING AVG(salary) > 70000;\n```\n\nMethod 3 (Departments with Large Total Salary):\n```sql\nSELECT department_id,\n       SUM(salary) AS total_salary\nFROM employees\nGROUP BY department_id\nHAVING SUM(salary) > 300000;\n```\n\nMethod 4 (Pre-Filter Rows Then Filter Groups):\n```sql\nSELECT department_id,\n       COUNT(*) AS total_employees\nFROM employees\nWHERE salary > 30000\nGROUP BY department_id\nHAVING COUNT(*) > 2;\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nFROM\n  │\n  ▼\nWHERE (Filters Rows)\n  │\n  ▼\nGROUP BY (Creates Groups)\n  │\n  ▼\nHAVING (Filters Groups)\n  │\n  ▼\nSELECT\n  │\n  ▼\nORDER BY\n  │\n  ▼\nLIMIT\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column_name, aggregate_function(column_name)\nFROM table_name\nGROUP BY column_name\nHAVING aggregate_function(column_name) condition;\n```\n\nProblem Solution:\n```sql\nSELECT department_id, COUNT(*) AS total_employees\nFROM employees\nGROUP BY department_id\nHAVING COUNT(*) > 2;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using WHERE with Aggregate Functions: SELECT department_id FROM employees WHERE COUNT(*) > 2 GROUP BY department_id; ── Error: WHERE cannot use aggregates.",
      "❌ 2. Forgetting GROUP BY: SELECT department_id FROM employees HAVING COUNT(*) > 2; ── Invalid or non-standard without grouping dimension.",
      "❌ 3. Confusing WHERE and HAVING: WHERE filters individual row tuples before grouping; HAVING filters collapsed groups after aggregation.",
      "❌ 4. Thinking HAVING Runs Before GROUP BY: HAVING always runs after GROUP BY and aggregate evaluation.",
      "❌ 5. Using HAVING for Non-Aggregate Row Filters: SELECT * FROM employees HAVING salary > 50000; ── Inefficient/incorrect; use WHERE for row filtering."
    ],
    "keyTakeaway": "WHERE filters rows before grouping. HAVING filters groups after grouping. Aggregate functions such as COUNT(), SUM(), AVG(), MIN(), and MAX() are typically used with HAVING.",
    "interviewPros": [
      "Q1. What is HAVING? A clause that filters grouped records after GROUP BY.",
      "Q2. Difference between WHERE and HAVING? WHERE filters individual rows before grouping; HAVING filters groups after aggregation.",
      "Q3. Can HAVING be used without GROUP BY? In some SQL dialects, treating the whole table as a single group.",
      "Q4. Which functions are commonly used with HAVING? COUNT(), SUM(), AVG(), MAX(), MIN().",
      "Q5. Which executes first: WHERE, GROUP BY, or HAVING? Logical order is WHERE ──► GROUP BY ──► HAVING."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between WHERE and HAVING?\n• Can HAVING use aggregate functions? (Yes, WHERE cannot)\n• Which clause executes first between WHERE, GROUP BY, and HAVING?\n• Can HAVING work without GROUP BY?\n• Can WHERE use COUNT()?",
      "⚡ Performance Notes:\n• Recommended: Filter row-level conditions with WHERE first before GROUP BY, then apply HAVING strictly for aggregate thresholds. This reduces rows entering the grouping phase.",
      "🌍 Real-World Use Cases:\n• ✅ Departments with more than 10 employees: SELECT department_id, COUNT(*) FROM employees GROUP BY department_id HAVING COUNT(*) > 10;\n• ✅ Cities with total sales > 5,00,000: SELECT city, SUM(amount) FROM orders GROUP BY city HAVING SUM(amount) > 500000;\n• ✅ Classes with average marks > 75: SELECT class, AVG(marks) FROM students GROUP BY class HAVING AVG(marks) > 75;",
      "🎓 Company Interview Tip: 'What is the difference between WHERE and HAVING?' ── WHERE filters rows before grouping and cannot contain aggregate functions; HAVING filters groups after aggregation and can evaluate aggregate functions.",
      "🔥 Pro Tip (Interview Trick Question): Table with HR (3 employees), IT (2 employees), Sales (1 employee). Query with HAVING COUNT(*) >= 2 returns HR (3) and IT (2). Sales (1) is completely omitted because its group count is less than 2! 🚀"
    ]
  },
  "Basics-016": {
    "code_id": "Basics-016",
    "numeric_id": 16,
    "title": "Retrieve Matching Records Using INNER JOIN",
    "code": "SELECT employees.first_name,\n       departments.department_name\nFROM employees\nINNER JOIN departments\nON employees.department_id = departments.department_id;",
    "timeComplexity": "O(N × M) (Without Index) / O(N log M) (With Proper Indexes)",
    "spaceComplexity": "O(1) (Streaming) / O(N) (Hash Join / Buffer depending on execution plan)",
    "simplestExplanation": "INNER JOIN combines rows from two tables where the join condition matches in both tables, discarding any non-matching rows.",
    "mentalModel": "Employees ──► [Intersection ∩ ON employees.department_id = departments.department_id] ◄── Departments ──► Only Matching Records Survived",
    "lineByLine": [
      {
        "line": "SELECT employees.first_name, departments.department_name",
        "explanation": "Specifies projecting the employee's first_name and department's department_name with qualified table prefixes to avoid ambiguity."
      },
      {
        "line": "FROM employees",
        "explanation": "Identifies employees as the primary (left) table."
      },
      {
        "line": "INNER JOIN departments",
        "explanation": "Connects the departments table to retrieve matching records."
      },
      {
        "line": "ON employees.department_id = departments.department_id;",
        "explanation": "The matching condition: pairs every employee with the department having the identical department_id."
      },
      {
        "line": "📚 Understanding INNER JOIN",
        "explanation": "Think of INNER JOIN like comparing two friend lists. Only people whose IDs match on both sides are included in the final list. Any employee without a valid department or any department without an employee is excluded."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Read rows from employees.\nStep 2: INNER JOIN departments ── Read rows from departments.\nStep 3: ON employees.department_id = departments.department_id ── Compare matching keys.\nStep 4: Keep only matching rows across both tables.\nStep 5: Return selected columns."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended Explicit Table Names):\n```sql\nSELECT employees.first_name,\n       departments.department_name\nFROM employees\nINNER JOIN departments\nON employees.department_id = departments.department_id;\n```\n\nMethod 2 (Using Table Aliases - Preferred for Complex Queries):\n```sql\nSELECT e.first_name,\n       d.department_name\nFROM employees AS e\nINNER JOIN departments AS d\nON e.department_id = d.department_id;\n```\n\nMethod 3 (Multi-Table JOIN):\n```sql\nSELECT e.first_name, d.department_name, l.city\nFROM employees e\nINNER JOIN departments d ON e.department_id = d.department_id\nINNER JOIN locations l ON d.location_id = l.location_id;\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nEmployees Table\n      │\n      ▼\nINNER JOIN\n      │\nDepartments Table\n      │\n      ▼\nCompare Matching IDs\n      │\n      ▼\nKeep Only Matches\n      │\n      ▼\nDisplay Result\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT table1.column_name, table2.column_name\nFROM table1\nINNER JOIN table2\nON table1.common_column = table2.common_column;\n```\n\nProblem Solution:\n```sql\nSELECT employees.first_name,\n       departments.department_name\nFROM employees\nINNER JOIN departments\nON employees.department_id = departments.department_id;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting the ON Clause: SELECT * FROM employees INNER JOIN departments; ── Produces a Cartesian product (Cross Join) matching every row to every row.",
      "❌ 2. Joining on the Wrong Column: ON employees.employee_id = departments.department_id; ── Logical error comparing employee primary key to department primary key.",
      "❌ 3. Selecting Ambiguous Columns: SELECT department_id FROM employees INNER JOIN departments ON ... ── Ambiguity error because department_id exists in both tables; qualify with employees.department_id.",
      "❌ 4. Expecting INNER JOIN to Return Every Row: Unmatched rows from either table are omitted.",
      "❌ 5. Confusing INNER JOIN with LEFT JOIN: INNER JOIN returns only the intersection (common matches); LEFT JOIN preserves all left table records regardless of matches."
    ],
    "keyTakeaway": "INNER JOIN returns only the rows where the join condition matches in both tables. Unmatched rows from either table are excluded.",
    "interviewPros": [
      "Q1. What is INNER JOIN? Combines rows from two tables using a matching key condition.",
      "Q2. What happens to unmatched rows? They are completely ignored and omitted from output.",
      "Q3. Why is the ON clause required? It specifies the predicate linking foreign and primary keys.",
      "Q4. Can INNER JOIN join more than two tables? Yes, chains of INNER JOINs can link arbitrary numbers of tables.",
      "Q5. Is JOIN the same as INNER JOIN? Yes, in SQL JOIN defaults to INNER JOIN."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between INNER JOIN and LEFT JOIN?\n• What happens to unmatched rows in an INNER JOIN?\n• Why do we use the ON clause?\n• Can we join more than two tables in a single query?\n• Is JOIN the exact same as INNER JOIN?",
      "⚡ Performance Notes:\n• Recommended: Index foreign key columns (employees.department_id) to enable Index Nested Loop Join or Hash Join instead of full table scans.",
      "🌍 Real-World Use Cases:\n• ✅ Employees with departments: SELECT e.first_name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;\n• ✅ Students with courses: SELECT s.student_name, c.course_name FROM students s INNER JOIN courses c ON s.course_id = c.course_id;\n• ✅ Orders with customers: SELECT c.customer_name, o.order_id FROM customers c INNER JOIN orders o ON c.customer_id = o.customer_id;",
      "🎓 Company Interview Tip: 'What is the difference between INNER JOIN and LEFT JOIN?' ── INNER JOIN returns ONLY matching records between both tables. LEFT JOIN returns ALL records from the left table, padding right-side columns with NULL when no match exists.",
      "🔥 Pro Tip (Interview Trick Question): If an employee has department_id 105 but departments table only has 101, 102, 103, 104, that employee disappears in an INNER JOIN because there is no matching record! 🚀"
    ]
  },
  "Basics-017": {
    "code_id": "Basics-017",
    "numeric_id": 17,
    "title": "Retrieve All Records from the Left Table Using LEFT JOIN",
    "code": "SELECT employees.first_name,\n       departments.department_name\nFROM employees\nLEFT JOIN departments\nON employees.department_id = departments.department_id;",
    "timeComplexity": "O(N × M) (Without Index) / O(N log M) (With Proper Indexes)",
    "spaceComplexity": "O(1) (Streaming) / O(N) (Hash Join / Buffer depending on execution plan)",
    "simplestExplanation": "LEFT JOIN retrieves every record from the left table; when a corresponding record exists in the right table, it attaches it, and when no match exists, it fills the right table columns with NULL.",
    "mentalModel": "Left Team (All Invited to Party) ──► Match Found? [Yes ──► Attach Dept Data, No ──► Attach NULL] ──► Output All Left Records Preserved",
    "lineByLine": [
      {
        "line": "SELECT employees.first_name, departments.department_name",
        "explanation": "Selects the employee's first_name and department_name with explicit table qualification."
      },
      {
        "line": "FROM employees",
        "explanation": "Designates employees as the primary (left) table where every row is guaranteed to be returned."
      },
      {
        "line": "LEFT JOIN departments",
        "explanation": "Outer-joins the departments table to bring in associated department information."
      },
      {
        "line": "ON employees.department_id = departments.department_id;",
        "explanation": "Compares department_id across both tables. If matched, displays department name; otherwise, displays NULL."
      },
      {
        "line": "📚 Understanding LEFT JOIN",
        "explanation": "Think of LEFT JOIN like inviting everyone from the left team to a party. If someone has a friend on the right team, they come together. If not, they still enter the party alone with NULL on their guest ticket."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Read all rows from left table.\nStep 2: LEFT JOIN departments ── Read right table.\nStep 3: ON employees.department_id = departments.department_id ── Compare keys.\nStep 4: If match exists, attach department data; if not, populate with NULL.\nStep 5: Return all rows from left table with projected columns."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended Explicit Table Names):\n```sql\nSELECT employees.first_name,\n       departments.department_name\nFROM employees\nLEFT JOIN departments\nON employees.department_id = departments.department_id;\n```\n\nMethod 2 (Using Table Aliases - Preferred in Production):\n```sql\nSELECT e.first_name,\n       d.department_name\nFROM employees AS e\nLEFT JOIN departments AS d\nON e.department_id = d.department_id;\n```\n\nMethod 3 (Find Unmatched Left Records - Left Anti-Join Pattern):\n```sql\nSELECT e.first_name\nFROM employees e\nLEFT JOIN departments d ON e.department_id = d.department_id\nWHERE d.department_id IS NULL;\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nLEFT TABLE\n    │\n    ▼\nLEFT JOIN\n    │\nRIGHT TABLE\n    │\n    ▼\nMatch Found?\n ┌──┴────────┐\n │           │\nYes         No\n │           │\n ▼           ▼\nData       NULL\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT table1.column_name, table2.column_name\nFROM table1\nLEFT JOIN table2\nON table1.common_column = table2.common_column;\n```\n\nProblem Solution:\n```sql\nSELECT employees.first_name,\n       departments.department_name\nFROM employees\nLEFT JOIN departments\nON employees.department_id = departments.department_id;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Confusing LEFT JOIN with INNER JOIN: INNER JOIN eliminates unmatched rows; LEFT JOIN always retains all left-table rows.",
      "❌ 2. Forgetting the ON Clause: Missing ON clause leads to syntax errors or accidental Cartesian products.",
      "❌ 3. Joining on Incompatible Columns: Linking employee_id with department_id instead of foreign key department_id.",
      "❌ 4. Thinking NULL Means an Error: NULL in a LEFT JOIN simply indicates 'no matching row exists in right table' - this is expected behavior.",
      "❌ 5. Filtering Right Table in WHERE (Accidental INNER JOIN Conversion): Placing WHERE departments.department_name = 'HR' silently converts the LEFT JOIN into an INNER JOIN because NULLs are filtered out."
    ],
    "keyTakeaway": "LEFT JOIN returns every row from the left table. If a matching row exists in the right table, it is returned. Otherwise, SQL fills the right-side columns with NULL.",
    "interviewPros": [
      "Q1. What is LEFT JOIN? Returns all rows from left table, along with matching rows from right table.",
      "Q2. What happens when there is no match? SQL populates right table columns with NULL values.",
      "Q3. Which table is always preserved? The left table (specified directly after FROM).",
      "Q4. Can LEFT JOIN return unmatched rows? Yes, preserving unmatched left rows is its core purpose.",
      "Q5. Is LEFT OUTER JOIN different? No, LEFT JOIN and LEFT OUTER JOIN are exact synonyms in SQL."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between INNER JOIN and LEFT JOIN?\n• What happens when there is no matching record in the right table?\n• Why are NULL values returned in a LEFT JOIN?\n• Which table is always preserved in a LEFT JOIN?\n• Is LEFT JOIN identical to LEFT OUTER JOIN?",
      "⚡ Performance Notes:\n• Recommended: Index the right table's foreign key column so the optimizer can perform quick index lookups for each row of the preserved left table.",
      "🌍 Real-World Use Cases:\n• ✅ Show every employee, even if unassigned to a department: SELECT e.first_name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;\n• ✅ Show every customer, even if they have placed no orders: SELECT c.customer_name, o.order_id FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id;\n• ✅ Show every student, even if they have not enrolled in courses: SELECT s.student_name, c.course_name FROM students s LEFT JOIN courses c ON s.course_id = c.course_id;",
      "🎓 Company Interview Tip: 'What is the difference between INNER JOIN and LEFT JOIN?' ── INNER JOIN returns only matching rows and excludes non-matches; LEFT JOIN returns all rows from the left table, padding right-side columns with NULL when no match exists.",
      "🔥 Pro Tip (Interview Trick Question): If an employee table has Bob with department_id 105, and departments table only has 101, 102, 103, 104, a LEFT JOIN still outputs Bob with department_name NULL! 🚀"
    ]
  },
  "Basics-018": {
    "code_id": "Basics-018",
    "numeric_id": 18,
    "title": "Retrieve All Records from the Right Table Using RIGHT JOIN",
    "code": "SELECT employees.first_name,\n       departments.department_name\nFROM employees\nRIGHT JOIN departments\nON employees.department_id = departments.department_id;",
    "timeComplexity": "O(N × M) (Without Index) / O(N log M) (With Proper Indexes)",
    "spaceComplexity": "O(1) (Streaming) / O(N) (Hash Join / Buffer depending on execution plan)",
    "simplestExplanation": "RIGHT JOIN preserves all records from the right table; if an employee matches the department, employee data is attached, otherwise employee columns are filled with NULL.",
    "mentalModel": "Right Table (All Departments Invited) ──► Match Found? [Yes ──► Attach Employee Data, No ──► Attach NULL] ──► Output All Right Records Preserved",
    "lineByLine": [
      {
        "line": "SELECT employees.first_name, departments.department_name",
        "explanation": "Selects the employee's first_name and department's department_name."
      },
      {
        "line": "FROM employees",
        "explanation": "Designates employees as the left table."
      },
      {
        "line": "RIGHT JOIN departments",
        "explanation": "Right-joins the departments table. Every department row is guaranteed to appear in the output."
      },
      {
        "line": "ON employees.department_id = departments.department_id;",
        "explanation": "Join condition matching department_id. Unmatched departments receive NULL for employee columns."
      },
      {
        "line": "📚 Understanding RIGHT JOIN",
        "explanation": "Think of RIGHT JOIN like inviting everyone from the right table (departments) to a meeting. If they have a matching record in the left table, they come together. If not, they still attend alone with NULL for the left fields."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Read left table.\nStep 2: RIGHT JOIN departments ── Read right table.\nStep 3: ON employees.department_id = departments.department_id ── Match keys.\nStep 4: If no employee matches a department, populate employee columns with NULL.\nStep 5: Return all rows from right table with projected columns."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended Explicit Table Names):\n```sql\nSELECT employees.first_name,\n       departments.department_name\nFROM employees\nRIGHT JOIN departments\nON employees.department_id = departments.department_id;\n```\n\nMethod 2 (Using Table Aliases - Preferred in Production):\n```sql\nSELECT e.first_name,\n       d.department_name\nFROM employees AS e\nRIGHT JOIN departments AS d\nON e.department_id = d.department_id;\n```\n\nMethod 3 (Equivalent LEFT JOIN Swapping Table Order - Universal Dialect Pattern):\n```sql\nSELECT e.first_name,\n       d.department_name\nFROM departments d\nLEFT JOIN employees e\nON d.department_id = e.department_id;\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nRIGHT TABLE\n    │\n    ▼\nRIGHT JOIN\n    │\nLEFT TABLE\n    │\n    ▼\nMatch Found?\n ┌──┴────────┐\n │           │\nYes         No\n │           │\n ▼           ▼\nData       NULL\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT table1.column_name, table2.column_name\nFROM table1\nRIGHT JOIN table2\nON table1.common_column = table2.common_column;\n```\n\nProblem Solution:\n```sql\nSELECT employees.first_name,\n       departments.department_name\nFROM employees\nRIGHT JOIN departments\nON employees.department_id = departments.department_id;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Confusing LEFT JOIN and RIGHT JOIN: LEFT JOIN preserves the left table (FROM table); RIGHT JOIN preserves the right table (JOINed table).",
      "❌ 2. Forgetting the ON Clause: Omitting the ON clause leads to syntax errors or accidental Cartesian products.",
      "❌ 3. Assuming RIGHT JOIN Is Supported Universally: SQLite historically lacked RIGHT JOIN prior to version 3.39.0; you can always replace RIGHT JOIN by swapping the tables and using LEFT JOIN.",
      "❌ 4. Thinking NULL Means an Error: NULL simply indicates there is no matching employee assigned to that department.",
      "❌ 5. Joining on Incompatible Columns: Linking employee_id with department_id instead of common foreign key department_id."
    ],
    "keyTakeaway": "RIGHT JOIN returns every row from the right table. If a matching row exists in the left table, it is returned. Otherwise, SQL fills the left-side columns with NULL.",
    "interviewPros": [
      "Q1. What is RIGHT JOIN? Returns all rows from the right table and matching rows from the left table.",
      "Q2. Which table is always preserved? The right table (specified directly after RIGHT JOIN).",
      "Q3. What happens if there is no match? The left table columns become NULL.",
      "Q4. Can RIGHT JOIN always be replaced with LEFT JOIN? Yes, by simply reversing the order of the tables.",
      "Q5. Is RIGHT JOIN the same as RIGHT OUTER JOIN? Yes, RIGHT JOIN and RIGHT OUTER JOIN are exact synonyms."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between LEFT JOIN and RIGHT JOIN?\n• Which table is always preserved in a RIGHT JOIN?\n• Why do NULL values appear in left table columns?\n• Does SQLite support RIGHT JOIN? (Supported in SQLite 3.39+, but historically swapped to LEFT JOIN)\n• Can a RIGHT JOIN always be written as a LEFT JOIN?",
      "⚡ Performance Notes:\n• Recommended: Index the left table's foreign key so the query planner can execute an efficient index lookup for each right table row.",
      "🌍 Real-World Use Cases:\n• ✅ Show every department, even if it has no employees: SELECT e.first_name, d.department_name FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id;\n• ✅ Show every course, even if no students are enrolled: SELECT s.student_name, c.course_name FROM students s RIGHT JOIN courses c ON s.course_id = c.course_id;\n• ✅ Show every product, even if never ordered: SELECT o.order_id, p.product_name FROM orders o RIGHT JOIN products p ON o.product_id = p.product_id;",
      "🎓 Company Interview Tip: 'Can RIGHT JOIN always be replaced?' ── Yes! Most database style guides prefer LEFT JOIN consistently for code readability; swapping table order in FROM / LEFT JOIN yields identical results.",
      "🔥 Pro Tip (Interview Trick Question): If departments table has Finance (104), but employees table has no employee with department_id 104, a RIGHT JOIN outputs Finance with employee first_name as NULL! 🚀"
    ]
  },
  "Basics-019": {
    "code_id": "Basics-019",
    "numeric_id": 19,
    "title": "Retrieve All Records from Both Tables Using FULL OUTER JOIN",
    "code": "SELECT employees.first_name,\n       departments.department_name\nFROM employees\nFULL OUTER JOIN departments\nON employees.department_id = departments.department_id;",
    "timeComplexity": "O(N × M) (Without Index) / O(N log M) (With Proper Indexes)",
    "spaceComplexity": "O(N) (Buffer for matching and tracking unmatched records across both relations)",
    "simplestExplanation": "FULL OUTER JOIN retrieves all records from both tables: matching tuples are combined, unmatched left-table records appear with NULL right columns, and unmatched right-table records appear with NULL left columns.",
    "mentalModel": "Everyone Invited (Both Left & Right Teams) ──► Match Found? [Yes ──► Combine Pair, Left Only ──► Attach NULL Right, Right Only ──► Attach NULL Left] ──► Complete Set Union",
    "lineByLine": [
      {
        "line": "SELECT employees.first_name, departments.department_name",
        "explanation": "Selects employee name and department name from both tables."
      },
      {
        "line": "FROM employees",
        "explanation": "Starts from the employees (left) table."
      },
      {
        "line": "FULL OUTER JOIN departments",
        "explanation": "Full outer-joins the departments (right) table, preserving 100% of rows from both sides."
      },
      {
        "line": "ON employees.department_id = departments.department_id;",
        "explanation": "Join predicate comparing department_id. Fills missing values with NULL on either side when unmatched."
      },
      {
        "line": "📚 Understanding FULL OUTER JOIN",
        "explanation": "Think of FULL OUTER JOIN as inviting everyone from both teams to a party. If two people know each other, they stand together. If someone comes alone from either team, they still stay in the result with NULL."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees ── Read left table.\nStep 2: FULL OUTER JOIN departments ── Read right table.\nStep 3: Compare department_id matching keys.\nStep 4: Combine matching rows.\nStep 5: Include unmatched rows from BOTH tables.\nStep 6: Fill missing values with NULL."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended Standard Standard ANSI SQL):\n```sql\nSELECT employees.first_name,\n       departments.department_name\nFROM employees\nFULL OUTER JOIN departments\nON employees.department_id = departments.department_id;\n```\n\nMethod 2 (Using Table Aliases - Preferred in Production):\n```sql\nSELECT e.first_name,\n       d.department_name\nFROM employees e\nFULL OUTER JOIN departments d\nON e.department_id = d.department_id;\n```\n\nMethod 3 (MySQL / Legacy SQLite Simulation using UNION):\n```sql\nSELECT employees.first_name, departments.department_name\nFROM employees\nLEFT JOIN departments ON employees.department_id = departments.department_id\nUNION\nSELECT employees.first_name, departments.department_name\nFROM departments\nLEFT JOIN employees ON departments.department_id = employees.department_id;\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nLEFT TABLE\n    │\n    ▼\nFULL OUTER JOIN\n    │\nRIGHT TABLE\n    │\n    ▼\nMatching Rows + Left Only Rows + Right Only Rows\n    │\n    ▼\nFinal Result Set\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT table1.column_name, table2.column_name\nFROM table1\nFULL OUTER JOIN table2\nON table1.common_column = table2.common_column;\n```\n\nProblem Solution:\n```sql\nSELECT employees.first_name,\n       departments.department_name\nFROM employees\nFULL OUTER JOIN departments\nON employees.department_id = departments.department_id;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Confusing FULL OUTER JOIN with INNER JOIN: INNER JOIN only returns matching rows; FULL OUTER JOIN returns everything from both tables.",
      "❌ 2. Assuming MySQL Native Support: MySQL does NOT natively support FULL OUTER JOIN syntax; it must be simulated using LEFT JOIN + UNION + RIGHT JOIN (or swapped LEFT JOIN).",
      "❌ 3. Forgetting the ON Clause: Omitting the ON clause leads to syntax errors or accidental Cartesian products.",
      "❌ 4. Thinking NULL Means an Error: NULL values on either side simply indicate that no corresponding record exists in that table.",
      "❌ 5. Confusing UNION with UNION ALL in Simulation: Using UNION ALL instead of UNION in the simulation duplicates the matching rows that appeared in both LEFT JOIN queries!"
    ],
    "keyTakeaway": "FULL OUTER JOIN returns every row from both tables. Matching rows are combined, and unmatched rows from either table are included with NULL values for the missing side.",
    "interviewPros": [
      "Q1. What is FULL OUTER JOIN? Returns all rows from both tables, matching pairs where available and NULL for missing sides.",
      "Q2. What happens to unmatched rows? Unmatched rows from both left and right tables are included with NULL padding.",
      "Q3. Does MySQL natively support FULL OUTER JOIN? No. In MySQL, simulate using LEFT JOIN + UNION + RIGHT JOIN.",
      "Q4. Which tables are preserved? BOTH tables are 100% preserved.",
      "Q5. Can FULL OUTER JOIN return NULL values? Yes, whenever a row in one table has no match in the other."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between INNER, LEFT, RIGHT, and FULL OUTER JOIN?\n• How do you simulate FULL OUTER JOIN in databases like MySQL that lack native support?\n• Why are NULL values returned on both sides of a FULL OUTER JOIN?\n• Which tables are preserved in a FULL OUTER JOIN?\n• What is the difference between UNION and UNION ALL when simulating FULL OUTER JOIN?",
      "⚡ Performance Notes:\n• Recommended: FULL OUTER JOIN requires scanning both relations completely. Ensure join columns are indexed on both tables to minimize nested loop lookup overhead.",
      "🌍 Real-World Use Cases:\n• ✅ Show every employee and every department: SELECT e.first_name, d.department_name FROM employees e FULL OUTER JOIN departments d ON e.department_id = d.department_id;\n• ✅ Show every customer and every order: SELECT c.customer_name, o.order_id FROM customers c FULL OUTER JOIN orders o ON c.customer_id = o.customer_id;\n• ✅ Show every student and every course: SELECT s.student_name, c.course_name FROM students s FULL OUTER JOIN courses c ON s.course_id = c.course_id;",
      "🎓 Company Interview Tip: 'Which JOIN returns all rows from both tables?' ── FULL OUTER JOIN! If asked how MySQL executes it, explain the LEFT JOIN UNION RIGHT JOIN pattern.",
      "🔥 Pro Tip (Interview Trick Question): If employee Bob has department 105 (no dept 105 in departments) and department Finance 104 exists (no employees in 104), FULL OUTER JOIN outputs BOTH Bob ──► NULL and NULL ──► Finance! 🚀"
    ]
  },
  "Basics-020": {
    "code_id": "Basics-020",
    "numeric_id": 20,
    "title": "Join a Table with Itself Using SELF JOIN",
    "code": "SELECT e.first_name AS employee_name,\n       m.first_name AS manager_name\nFROM employees e\nINNER JOIN employees m\nON e.manager_id = m.employee_id;",
    "timeComplexity": "O(N²) (Without Index) / O(N log N) (With Proper Index on manager_id and employee_id)",
    "spaceComplexity": "O(1) (Streaming Output)",
    "simplestExplanation": "SELF JOIN treats a single physical table as two distinct logical copies using table aliases (e for employee, m for manager), comparing e.manager_id to m.employee_id.",
    "mentalModel": "Single Table ──► Duplicate into 2 Logical Copies (e = Employee, m = Manager) ──► Match e.manager_id = m.employee_id ──► Return Employee + Manager Names",
    "lineByLine": [
      {
        "line": "SELECT e.first_name AS employee_name, m.first_name AS manager_name",
        "explanation": "Selects the employee's name from table alias e and the manager's name from table alias m."
      },
      {
        "line": "FROM employees e",
        "explanation": "Assigns alias e to represent the employee role in the first copy of employees table."
      },
      {
        "line": "INNER JOIN employees m",
        "explanation": "Assigns alias m to represent the manager role in the second copy of employees table."
      },
      {
        "line": "ON e.manager_id = m.employee_id;",
        "explanation": "Join predicate comparing employee's manager_id against manager's employee_id key."
      },
      {
        "line": "📚 Understanding SELF JOIN",
        "explanation": "Think of SELF JOIN as one person wearing two hats. Copy 'e' wears the Employee hat, and copy 'm' wears the Manager hat. Both point to records in the same physical employees table."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees e ── Create first logical table copy.\nStep 2: INNER JOIN employees m ── Create second logical table copy.\nStep 3: ON e.manager_id = m.employee_id ── Match key predicates.\nStep 4: Filter matching tuples.\nStep 5: Output employee_name and manager_name."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended INNER SELF JOIN):\n```sql\nSELECT e.first_name AS employee_name,\n       m.first_name AS manager_name\nFROM employees e\nINNER JOIN employees m\nON e.manager_id = m.employee_id;\n```\n\nMethod 2 (LEFT SELF JOIN - Preserves Top-Level Executives/CEOs with NULL Managers):\n```sql\nSELECT e.first_name AS employee_name,\n       m.first_name AS manager_name\nFROM employees e\nLEFT JOIN employees m\nON e.manager_id = m.employee_id;\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nEmployees Table (Single Physical Storage)\n       │\n       ▼\nCreate Copy 1 (Alias e = Employee)\n       │\n       ▼\nCreate Copy 2 (Alias m = Manager)\n       │\n       ▼\nMatch e.manager_id = m.employee_id\n       │\n       ▼\nDisplay Employee + Manager Pair\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT t1.column_name, t2.column_name\nFROM table_name AS t1\nJOIN table_name AS t2\nON t1.common_column = t2.primary_key;\n```\n\nProblem Solution:\n```sql\nSELECT e.first_name AS employee_name,\n       m.first_name AS manager_name\nFROM employees e\nINNER JOIN employees m\nON e.manager_id = m.employee_id;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting Table Aliases: SQL cannot distinguish between columns from the same table without distinct table aliases (e, m).",
      "❌ 2. Joining on the Wrong Column (Self Match): Writing ON e.employee_id = m.employee_id matches every employee with themselves rather than their manager!",
      "❌ 3. Thinking SELF JOIN Uses Two Physical Tables: There is only ONE physical table stored on disk; SQL creates two logical copies in memory.",
      "❌ 4. Forgetting Top Managers with NULL manager_id: Top executives (CEOs) have manager_id IS NULL; INNER JOIN drops them while LEFT JOIN preserves them.",
      "❌ 5. Reusing the Same Alias: Writing FROM employees e JOIN employees e produces a syntax error because aliases must be unique."
    ],
    "keyTakeaway": "A SELF JOIN joins a table with itself. Different table aliases are required so SQL can treat the single physical table as two separate logical tables.",
    "interviewPros": [
      "Q1. What is a SELF JOIN? Joining a single table with itself using distinct table aliases.",
      "Q2. Why are aliases required in a SELF JOIN? To disambiguate column references between the two logical table copies.",
      "Q3. Is SELF JOIN a distinct keyword in SQL? No, it uses standard JOIN syntax (INNER JOIN, LEFT JOIN) with the same table referenced twice.",
      "Q4. Where is SELF JOIN commonly applied? Employee-manager hierarchies, parent-child trees, student-mentor pairings, and friend networks.",
      "Q5. How do you include top-level executives without managers? Use LEFT JOIN instead of INNER JOIN."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is a SELF JOIN and why do we use aliases?\n• What happens when manager_id is NULL in an INNER SELF JOIN vs LEFT SELF JOIN?\n• Can a table be joined with itself multiple times for multi-level hierarchies?\n• Why can't we write JOIN employees without aliases?\n• Give 3 real-world examples where SELF JOIN is required.",
      "⚡ Performance Notes:\n• Recommended: Create B-Tree indexes on both primary key (employee_id) and foreign key (manager_id) to avoid O(N²) full table scans.",
      "🌍 Real-World Use Cases:\n• ✅ Employee & Manager: SELECT e.first_name, m.first_name FROM employees e JOIN employees m ON e.manager_id = m.employee_id;\n• ✅ Student & Mentor: SELECT s.student_name, m.student_name AS mentor FROM students s JOIN students m ON s.mentor_id = m.student_id;\n• ✅ Parent & Child: SELECT c.name, p.name FROM family c JOIN family p ON c.parent_id = p.person_id;",
      "🎓 Company Interview Tip: 'Why can't we write JOIN employees without aliases?' ── Because SQL cannot resolve ambiguous column names without explicit aliases for each logical copy!",
      "🔥 Pro Tip (Interview Trick Question): In an organization with CEO John (manager_id = NULL), INNER JOIN drops John, but LEFT JOIN outputs John ──► NULL! 🚀"
    ]
  },
  "Basics-021": {
    "code_id": "Basics-021",
    "numeric_id": 21,
    "title": "Combine Results of Two Queries Using UNION",
    "code": "SELECT first_name FROM employees\nUNION\nSELECT department_name FROM departments;",
    "timeComplexity": "O(N + M) (Reading both result sets) / O((N + M) log(N + M)) (Deduplication via sorting/hashing)",
    "spaceComplexity": "O(N + M) (Buffer for combined result set and hash table for duplicate elimination)",
    "simplestExplanation": "UNION stacks the result rows of multiple SELECT queries into a single vertical result set and automatically removes duplicate values across queries.",
    "mentalModel": "List 1 (Employees) + List 2 (Departments) ──► Stack Vertically ──► Hash Deduplication ──► Output Unique Rows",
    "lineByLine": [
      {
        "line": "SELECT first_name FROM employees",
        "explanation": "Executes first query to retrieve first_name values from employees table."
      },
      {
        "line": "UNION",
        "explanation": "Combines rows from both queries and automatically eliminates duplicate rows."
      },
      {
        "line": "SELECT department_name FROM departments;",
        "explanation": "Executes second query to retrieve department_name values from departments table."
      },
      {
        "line": "📚 Understanding UNION",
        "explanation": "Think of UNION like merging two party guest lists into a single document. If Alice appears on both the employee list and manager list, UNION keeps Alice only once."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: Execute 1st query (SELECT first_name FROM employees).\nStep 2: Execute 2nd query (SELECT department_name FROM departments).\nStep 3: Combine both result sets vertically.\nStep 4: Remove duplicate rows.\nStep 5: Output final result set."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended Standard UNION - Removes Duplicates):\n```sql\nSELECT first_name FROM employees\nUNION\nSELECT department_name FROM departments;\n```\n\nMethod 2 (Using UNION ALL - Preserves Duplicates & Executes Faster):\n```sql\nSELECT first_name FROM employees\nUNION ALL\nSELECT department_name FROM departments;\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nSELECT 1 (Query A)\n       │\n       ▼\n    UNION\n       ▲\n       │\nSELECT 2 (Query B)\n       │\n       ▼\nMerge Rows Vertically\n       │\n       ▼\nRemove Duplicate Rows\n       │\n       ▼\nFinal Unique Result Set\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column_name FROM table1\nUNION\nSELECT column_name FROM table2;\n```\n\nProblem Solution:\n```sql\nSELECT first_name FROM employees\nUNION\nSELECT department_name FROM departments;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Different Number of Columns: Both SELECT queries MUST return the exact same number of columns.",
      "❌ 2. Mismatched Data Types: Combining incompatible column data types (e.g. VARCHAR and INT) causes type conversion errors.",
      "❌ 3. Expecting UNION to Keep Duplicates: Plain UNION always deduplicates; use UNION ALL if duplicate retention is required.",
      "❌ 4. Confusing UNION with JOIN: JOIN combines COLUMNS horizontally using ON; UNION combines ROWS vertically without ON.",
      "❌ 5. Ordering Individual Queries: Placing ORDER BY inside individual SELECT statements is invalid; place a single ORDER BY at the very end of the final query."
    ],
    "keyTakeaway": "UNION combines rows from multiple SELECT statements into a single result set and automatically removes duplicate rows.",
    "interviewPros": [
      "Q1. What is UNION? Combines row results from multiple SELECT queries into one result set.",
      "Q2. Does UNION remove duplicates? Yes, automatically.",
      "Q3. What is the difference between UNION and UNION ALL? UNION removes duplicates (slower); UNION ALL retains duplicates (faster).",
      "Q4. What is the main structural requirement for UNION? Both queries must return the exact same number of columns with compatible data types.",
      "Q5. How does UNION differ from JOIN? JOIN combines columns horizontally; UNION combines rows vertically."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between UNION and UNION ALL?\n• What are the mandatory rules for using UNION?\n• How does UNION differ from JOIN in relational operations?\n• Why is UNION ALL faster than UNION?\n• Where should the ORDER BY clause be placed in a UNION query?",
      "⚡ Performance Notes:\n• Recommended: Use UNION ALL when you know result sets are disjoint or duplicates are acceptable, as it avoids expensive sorting/hashing.",
      "🌍 Real-World Use Cases:\n• ✅ Unified Address Book: SELECT name FROM customers UNION SELECT name FROM suppliers;\n• ✅ Cross-Category Product Roster: SELECT title FROM books UNION SELECT title FROM electronics;\n• ✅ Consolidated Entity Names: SELECT first_name FROM employees UNION SELECT department_name FROM departments;",
      "🎓 Company Interview Tip: 'How do JOIN and UNION differ?' ── JOIN combines COLUMNS horizontally using matching keys; UNION combines ROWS vertically into one list!",
      "🔥 Pro Tip (Interview Trick Question): If Alice appears in both query sets, standard UNION outputs Alice ONCE, while UNION ALL outputs Alice TWICE! 🚀"
    ]
  },
  "Basics-022": {
    "code_id": "Basics-022",
    "numeric_id": 22,
    "title": "Combine Results of Two Queries Using UNION ALL",
    "code": "SELECT first_name FROM employees\nUNION ALL\nSELECT department_name FROM departments;",
    "timeComplexity": "O(N + M) (Direct streaming concatenation without duplicate checking)",
    "spaceComplexity": "O(N + M) (Buffer for combined result set)",
    "simplestExplanation": "UNION ALL stacks the result rows of multiple SELECT queries into a single vertical result set WITHOUT removing duplicate values across queries.",
    "mentalModel": "List 1 (Employees) + List 2 (Departments) ──► Direct Vertical Concatenation ──► Output All Rows (Including Duplicates)",
    "lineByLine": [
      {
        "line": "SELECT first_name FROM employees",
        "explanation": "Executes first query to retrieve first_name values from employees table."
      },
      {
        "line": "UNION ALL",
        "explanation": "Combines rows from both queries and retains all duplicate rows without performing expensive deduplication."
      },
      {
        "line": "SELECT department_name FROM departments;",
        "explanation": "Executes second query to retrieve department_name values from departments table."
      },
      {
        "line": "📚 Understanding UNION ALL",
        "explanation": "Think of UNION ALL like stacking two physical paper sheets together. Every row from sheet 1 sits on top of sheet 2, retaining every entry even if names match."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: Execute 1st query (SELECT first_name FROM employees).\nStep 2: Execute 2nd query (SELECT department_name FROM departments).\nStep 3: Concatenate both result sets vertically.\nStep 4: Stream output directly without duplicate checking pass."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended Recommended Fast UNION ALL - Keeps Duplicates):\n```sql\nSELECT first_name FROM employees\nUNION ALL\nSELECT department_name FROM departments;\n```\n\nMethod 2 (Multiple Chained Queries):\n```sql\nSELECT first_name FROM employees\nUNION ALL\nSELECT department_name FROM departments\nUNION ALL\nSELECT manager_id FROM employees;\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nSELECT 1 (Query A)\n       │\n       ▼\n   UNION ALL\n       ▲\n       │\nSELECT 2 (Query B)\n       │\n       ▼\nConcatenate Rows Vertically\n       │\n       ▼\nSkip Duplicate Checking\n       │\n       ▼\nFinal Complete Result Set\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column_name FROM table1\nUNION ALL\nSELECT column_name FROM table2;\n```\n\nProblem Solution:\n```sql\nSELECT first_name FROM employees\nUNION ALL\nSELECT department_name FROM departments;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Confusing UNION and UNION ALL: UNION removes duplicates; UNION ALL preserves all duplicate rows.",
      "❌ 2. Different Number of Columns: Both SELECT queries MUST return the exact same number of columns.",
      "❌ 3. Mismatched Data Types: Combining incompatible column data types causes type conversion errors.",
      "❌ 4. Thinking UNION ALL Removes Duplicates: UNION ALL NEVER deduplicates results.",
      "❌ 5. ORDER BY in Wrong Location: Placing ORDER BY inside subqueries causes syntax errors; place a single ORDER BY at the very end."
    ],
    "keyTakeaway": "UNION ALL combines rows from multiple SELECT statements into a single result set without removing duplicate rows, making it faster than UNION.",
    "interviewPros": [
      "Q1. What is UNION ALL? Combines row results from multiple SELECT queries into one result set, keeping duplicates.",
      "Q2. Does UNION ALL remove duplicates? No, all duplicate rows are retained.",
      "Q3. Why is UNION ALL faster than UNION? Because SQL skips duplicate checking (no sort/hash deduplication pass).",
      "Q4. When should you prefer UNION ALL over UNION? When you know result sets are disjoint or when keeping duplicate records is required (e.g. log aggregation).",
      "Q5. Which takes less memory? UNION ALL, because it does not maintain a hash table for duplicate tracking."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between UNION and UNION ALL?\n• Which operator is faster and why?\n• Does UNION ALL check for duplicate rows?\n• When is UNION ALL preferred in production pipelines?\n• Can UNION ALL combine results from different tables?",
      "⚡ Performance Notes:\n• Recommended: Always default to UNION ALL unless duplicate elimination is explicitly required, to avoid O(N log N) deduplication overhead.",
      "🌍 Real-World Use Cases:\n• ✅ Aggregating Multi-Server System Logs: SELECT msg FROM server1_logs UNION ALL SELECT msg FROM server2_logs;\n• ✅ Multi-Store Transaction Feeds: SELECT sale_id FROM store1_sales UNION ALL SELECT sale_id FROM store2_sales;\n• ✅ Audit Roster Concatenation: SELECT first_name FROM employees UNION ALL SELECT department_name FROM departments;",
      "🎓 Company Interview Tip: 'Which is faster: UNION or UNION ALL?' ── UNION ALL! Because it skips the expensive sort/hash duplicate elimination step.",
      "🔥 Pro Tip (Interview Trick Question): If Alice is present in both tables, UNION returns Alice 1 time, but UNION ALL returns Alice 2 times! 🚀"
    ]
  },
  "Basics-023": {
    "code_id": "Basics-023",
    "numeric_id": 23,
    "title": "Filter Records Using the LIKE Operator",
    "code": "SELECT first_name FROM employees WHERE first_name LIKE 'A%';",
    "timeComplexity": "O(N) (Full table scan without B-Tree index) / O(log N) (Prefix search 'A%' can use B-Tree index)",
    "spaceComplexity": "O(1) (Constant memory auxiliary space)",
    "simplestExplanation": "LIKE filters rows using text pattern matching where '%' represents zero or more characters and '_' represents exactly one character.",
    "mentalModel": "Scan Employees ──► Compare first_name against 'A%' ──► Match Starts-With 'A' ──► Project Output",
    "lineByLine": [
      {
        "line": "SELECT first_name FROM employees",
        "explanation": "Specifies output column first_name and target table employees."
      },
      {
        "line": "WHERE first_name LIKE 'A%';",
        "explanation": "Filters rows to return only names starting with uppercase 'A'. '%' matches any trailing characters."
      },
      {
        "line": "📚 Understanding LIKE Patterns",
        "explanation": "• LIKE 'A%' ── Starts with 'A'\n• LIKE '%n' ── Ends with 'n'\n• LIKE '%an%' ── Contains 'an'\n• LIKE '_a%' ── Second letter is 'a'"
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees (Access table rows).\nStep 2: WHERE first_name LIKE 'A%' (Evaluate pattern predicate).\nStep 3: SELECT first_name (Project matching names)."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Starts With 'A%'):\n```sql\nSELECT first_name FROM employees WHERE first_name LIKE 'A%';\n```\n\nMethod 2 (Contains '%an%'):\n```sql\nSELECT first_name FROM employees WHERE first_name LIKE '%an%';\n```\n\nMethod 3 (Ends With '%n'):\n```sql\nSELECT first_name FROM employees WHERE first_name LIKE '%n';\n```\n\nMethod 4 (Single Character Match '_a%'):\n```sql\nSELECT first_name FROM employees WHERE first_name LIKE '_a%';\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\n'A%'   ──► Starts with A\n'%A'   ──► Ends with A\n'%A%'  ──► Contains A\n'_A%'  ──► Second letter is A\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column_name FROM table_name WHERE column_name LIKE 'pattern';\n```\n\nProblem Solution:\n```sql\nSELECT first_name FROM employees WHERE first_name LIKE 'A%';\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting Quotes around Pattern: Writing WHERE col LIKE A% instead of WHERE col LIKE 'A%' causes a syntax error.",
      "❌ 2. Confusing % and _: % matches 0 or more characters; _ matches EXACTLY ONE character.",
      "❌ 3. Using = Instead of LIKE: Writing WHERE col = 'A%' searches for the literal string 'A%' rather than executing a pattern match.",
      "❌ 4. Omitting Wildcards: Writing WHERE col LIKE 'A' matches ONLY the single-letter string 'A'.",
      "❌ 5. Index Invalidation via Leading Wildcard: WHERE col LIKE '%A%' forces a full table scan, bypassing B-Tree index lookup."
    ],
    "keyTakeaway": "LIKE is used for pattern matching in SQL. '%' matches zero or more characters, while '_' matches exactly one character.",
    "interviewPros": [
      "Q1. What is LIKE? Pattern matching predicate operator in SQL.",
      "Q2. What does '%' mean? Matches zero or more characters.",
      "Q3. What does '_' mean? Matches exactly one character.",
      "Q4. Difference between '=' and 'LIKE'? '=' performs exact scalar equality; 'LIKE' performs wildcard pattern matching.",
      "Q5. Can a B-Tree index optimize LIKE? Yes, for prefix searches like 'A%', but NOT for leading wildcards like '%A%'."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between % and _?\n• How does LIKE 'A%' differ from LIKE '%A%'\n• Why is LIKE '%A%' slow on large production tables?\n• What is the difference between = and LIKE?\n• How do you match a string whose second letter is 'a'?",
      "⚡ Performance Notes:\n• Prefix patterns ('A%') can utilize B-Tree range scans (sargable).\n• Leading wildcard patterns ('%A%') force full table scans (non-sargable).",
      "🌍 Real-World Use Cases:\n• ✅ Email Provider Filtering: WHERE email LIKE '%@gmail.com';\n• ✅ E-Commerce Product Search: WHERE title LIKE '%Laptop%';\n• ✅ Customer Name Prefix Search: WHERE name LIKE 'S%';",
      "🎓 Company Interview Tip: 'What is the difference between % and _?' ── % matches any number of characters (0 to N); _ matches EXACTLY 1 character!",
      "🔥 Pro Tip (Interview Trick Question): `%` can match 0 characters, so `LIKE 'A%'` matches the single-letter name `'A'`! 🚀"
    ]
  },
  "Basics-024": {
    "code_id": "Basics-024",
    "numeric_id": 24,
    "title": "Filter Records Using the IN Operator",
    "code": "SELECT first_name FROM employees WHERE first_name IN ('John', 'Alice', 'Bob');",
    "timeComplexity": "O(N) (Without index) / O(K log N) (With B-Tree index lookup for K list values)",
    "spaceComplexity": "O(1) (Constant memory auxiliary space)",
    "simplestExplanation": "IN evaluates whether a column value matches any item inside a specified literal list or subquery, cleanly eliminating verbose OR chains.",
    "mentalModel": "Value ──► Check Membership in ('John', 'Alice', 'Bob') ──► Match Found? ──► Project Record",
    "lineByLine": [
      {
        "line": "SELECT first_name FROM employees",
        "explanation": "Specifies target output column first_name and target table employees."
      },
      {
        "line": "WHERE first_name IN ('John', 'Alice', 'Bob');",
        "explanation": "Filters rows to return only employees whose first_name matches 'John', 'Alice', or 'Bob'."
      },
      {
        "line": "📚 Understanding IN vs OR",
        "explanation": "WHERE first_name IN ('John', 'Alice', 'Bob') is logically identical to:\nWHERE first_name = 'John' OR first_name = 'Alice' OR first_name = 'Bob'."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees (Access table rows).\nStep 2: WHERE first_name IN (...) (Evaluate membership predicate).\nStep 3: SELECT first_name (Project matching records)."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended IN Operator):\n```sql\nSELECT first_name FROM employees WHERE first_name IN ('John', 'Alice', 'Bob');\n```\n\nMethod 2 (Multiple OR Conditions):\n```sql\nSELECT first_name FROM employees WHERE first_name = 'John' OR first_name = 'Alice' OR first_name = 'Bob';\n```\n\nMethod 3 (Subquery Membership):\n```sql\nSELECT first_name FROM employees WHERE first_name IN (SELECT name FROM shift_leads);\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nSingle Value   ──►  WHERE col = 'John'\nMultiple List  ──►  WHERE col IN ('John', 'Alice', 'Bob')\nSubquery List  ──►  WHERE col IN (SELECT name FROM leads)\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column_name FROM table_name WHERE column_name IN (value1, value2, value3);\n```\n\nProblem Solution:\n```sql\nSELECT first_name FROM employees WHERE first_name IN ('John', 'Alice', 'Bob');\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting Parentheses: Writing WHERE col IN 'HR', 'IT' instead of WHERE col IN ('HR', 'IT') causes a syntax error.",
      "❌ 2. Forgetting Quotes around String Literals: Writing WHERE col IN (HR, IT) treats HR and IT as unquoted column names.",
      "❌ 3. Using = with List Tuples: Writing WHERE col = ('HR', 'IT') results in a syntax or type error.",
      "❌ 4. Using IN for Single Values: Writing WHERE col IN ('HR') is redundant; prefer scalar equality WHERE col = 'HR'.",
      "❌ 5. Mixing Incompatible Data Types: Comparing string columns to unquoted integers causes implicit casting overhead."
    ],
    "keyTakeaway": "IN checks whether a value exists in a specified list of values. It is cleaner and more readable than writing multiple OR conditions.",
    "interviewPros": [
      "Q1. What is the IN operator? Checks if a value exists in a specified list or subquery result.",
      "Q2. Is IN equivalent to multiple OR conditions? Yes, IN ('A', 'B') is logically identical to col = 'A' OR col = 'B'.",
      "Q3. Why use IN over OR? IN is cleaner, more readable, easier to maintain, and concise.",
      "Q4. Can IN be used with numbers? Yes! e.g., WHERE employee_id IN (101, 102, 103).",
      "Q5. Can IN be used with subqueries? Yes! e.g., WHERE dept_id IN (SELECT id FROM depts WHERE loc = 'Bangalore')."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between IN and multiple OR conditions?\n• Why is IN preferred over multiple OR statements?\n• Can IN be used with a subquery?\n• Is IN faster than multiple OR conditions in SQL optimizers?\n• How does IN handle NULL values inside the list?",
      "⚡ Performance Notes:\n• Modern query optimizers transform IN (val1, val2, val3) into multiple B-Tree index lookups (In-List iterator), making it highly performant.",
      "🌍 Real-World Use Cases:\n• ✅ Customer Location Search: WHERE city IN ('Bangalore', 'Mumbai', 'Delhi');\n• ✅ Category Filtering: WHERE category IN ('Electronics', 'Furniture');\n• ✅ Multi-ID Lookup: WHERE employee_id IN (101, 103, 110);",
      "🎓 Company Interview Tip: 'Which is more readable: multiple OR conditions or IN?' ── IN! It reduces code complexity and prevents operator precedence bugs.",
      "🔥 Pro Tip (Interview Trick Question): `=` matches ONE value; `IN` matches MANY values! 🚀"
    ]
  },
  "Basics-025": {
    "code_id": "Basics-025",
    "numeric_id": 25,
    "title": "Filter Records Using the BETWEEN Operator",
    "code": "SELECT first_name FROM employees WHERE salary BETWEEN 50000 AND 100000;",
    "timeComplexity": "O(N) (Without index) / O(log N) (With B-Tree range index scan)",
    "spaceComplexity": "O(1) (Constant auxiliary memory)",
    "simplestExplanation": "BETWEEN filters values within an inclusive range (low <= value <= high), including both boundary endpoints.",
    "mentalModel": "Scan Rows ──► Check low_bound <= salary <= high_bound ──► Both Inclusive ──► Project Output",
    "lineByLine": [
      {
        "line": "SELECT first_name FROM employees",
        "explanation": "Specifies target output column first_name and table employees."
      },
      {
        "line": "WHERE salary BETWEEN 50000 AND 100000;",
        "explanation": "Filters rows where salary is >= 50000 AND <= 100000."
      },
      {
        "line": "📚 Understanding Range Bounds",
        "explanation": "WHERE salary BETWEEN 50000 AND 100000 is logically equivalent to:\nWHERE salary >= 50000 AND salary <= 100000."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees (Access table rows).\nStep 2: WHERE salary BETWEEN 50000 AND 100000 (Evaluate inclusive range comparison).\nStep 3: SELECT first_name (Project matching records)."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Recommended BETWEEN Operator):\n```sql\nSELECT first_name FROM employees WHERE salary BETWEEN 50000 AND 100000;\n```\n\nMethod 2 (Using Explicit Comparison Operators):\n```sql\nSELECT first_name FROM employees WHERE salary >= 50000 AND salary <= 100000;\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nIN       ──► Checks specific discrete list (Val1, Val2, Val3)\nBETWEEN  ──► Checks continuous inclusive range [Low, High]\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column_name FROM table_name WHERE column_name BETWEEN low AND high;\n```\n\nProblem Solution:\n```sql\nSELECT first_name FROM employees WHERE salary BETWEEN 50000 AND 100000;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Thinking BETWEEN Excludes Boundary Values: BETWEEN is fully INCLUSIVE of both starting (low) and ending (high) bounds.",
      "❌ 2. Reversing Range Limits: Writing BETWEEN 100000 AND 50000 evaluates to empty results because low > high.",
      "❌ 3. Forgetting the AND Keyword: Writing BETWEEN 50000 100000 without AND causes a syntax error.",
      "❌ 4. Quoting Numeric Literals unnecessarily: Writing BETWEEN '50000' AND '100000' relies on implicit type conversion.",
      "❌ 5. Confusing BETWEEN and IN: IN checks discrete sets; BETWEEN checks continuous intervals."
    ],
    "keyTakeaway": "BETWEEN filters values within a range and includes both the starting and ending values.",
    "interviewPros": [
      "Q1. What is BETWEEN? Filters rows within a specified range.",
      "Q2. Does BETWEEN include boundary values? YES! Both lower and upper limits are included.",
      "Q3. Is BETWEEN identical to >= and <=? Yes, salary BETWEEN 50000 AND 100000 is identical to salary >= 50000 AND salary <= 100000.",
      "Q4. Can BETWEEN be used with dates? Yes! e.g., order_date BETWEEN '2026-01-01' AND '2026-12-31'.",
      "Q5. Can BETWEEN be used with text? Yes! Alphabetically matches text ranges, e.g. name BETWEEN 'A' AND 'M'."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Does BETWEEN include boundary values?\n• What happens if you reverse values in BETWEEN (high AND low)?\n• What is the difference between BETWEEN and IN?\n• Can BETWEEN be used with dates and strings?\n• Is BETWEEN faster than >= AND <= in execution plans?",
      "⚡ Performance Notes:\n• Relational engines convert BETWEEN low AND high into index range scans on B-Tree indexed columns, yielding O(log N) performance.",
      "🌍 Real-World Use Cases:\n• ✅ Salary Range Filtering: WHERE salary BETWEEN 50000 AND 100000;\n• ✅ Date Range Reporting: WHERE order_date BETWEEN '2026-01-01' AND '2026-12-31';\n• ✅ Price Range Search: WHERE price BETWEEN 10.00 AND 50.00;",
      "🎓 Company Interview Tip: 'Does BETWEEN include both values?' ── YES! Both boundary endpoints are included in the result set.",
      "🔥 Pro Tip (Interview Trick Question): `IN` is for specific values; `BETWEEN` is for a continuous range! 🚀"
    ]
  },
  "Basics-026": {
    "code_id": "Basics-026",
    "numeric_id": 26,
    "title": "Find Records with Missing Values Using IS NULL",
    "code": "SELECT first_name FROM employees WHERE manager_id IS NULL;",
    "timeComplexity": "O(N) (Without index) / O(log N) (With B-Tree index scan on nullable column)",
    "spaceComplexity": "O(1) (Constant auxiliary memory)",
    "simplestExplanation": "IS NULL checks whether a column value is missing or unknown. Standard equality (= NULL) always returns UNKNOWN in SQL three-valued logic.",
    "mentalModel": "Scan Employees ──► Inspect manager_id ──► State is Missing/NULL? ──► Project Output",
    "lineByLine": [
      {
        "line": "SELECT first_name FROM employees",
        "explanation": "Specifies target column first_name and table employees."
      },
      {
        "line": "WHERE manager_id IS NULL;",
        "explanation": "Filters rows where manager_id has no value stored (missing/unknown)."
      },
      {
        "line": "📚 Understanding NULL Semantics",
        "explanation": "• NULL represents missing/unknown data.\n• NULL is NOT equal to 0, empty string (''), or space (' ').\n• Always use IS NULL / IS NOT NULL."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees (Access table rows).\nStep 2: WHERE manager_id IS NULL (Evaluate missing value predicate).\nStep 3: SELECT first_name (Project matching records)."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Find Missing Values - IS NULL):\n```sql\nSELECT first_name FROM employees WHERE manager_id IS NULL;\n```\n\nMethod 2 (Find Existing Values - IS NOT NULL):\n```sql\nSELECT first_name FROM employees WHERE manager_id IS NOT NULL;\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nCheck Missing Value    ──►  WHERE col IS NULL     ✅\nCheck Existing Value   ──►  WHERE col IS NOT NULL ✅\nScalar Equality Trap   ──►  WHERE col = NULL      ❌ (Returns 0 rows)\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column_name FROM table_name WHERE column_name IS NULL;\n```\n\nProblem Solution:\n```sql\nSELECT first_name FROM employees WHERE manager_id IS NULL;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using = NULL: Writing WHERE col = NULL returns ZERO rows because comparison with NULL yields UNKNOWN.",
      "❌ 2. Using != NULL: Writing WHERE col != NULL also returns ZERO rows; use IS NOT NULL instead.",
      "❌ 3. Equating NULL with Zero (0): NULL is missing data; 0 is a known numeric value.",
      "❌ 4. Equating NULL with Empty String (''): An empty string is a valid 0-length string; NULL is absence of a value.",
      "❌ 5. Omitting IS: Writing WHERE col NULL causes a syntax error."
    ],
    "keyTakeaway": "NULL represents missing or unknown data. Always use IS NULL or IS NOT NULL. Never use = or != with NULL.",
    "interviewPros": [
      "Q1. What is NULL? NULL represents missing or unknown data in a relational database.",
      "Q2. Can we use = NULL? NO! Scalar comparison with NULL evaluates to UNKNOWN. You must use IS NULL.",
      "Q3. How do you find non-null records? Use IS NOT NULL predicate.",
      "Q4. Is NULL equal to 0? No, 0 is a known numeric value; NULL is missing information.",
      "Q5. Is NULL equal to empty string ('')? No, '' is a defined zero-length string value."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is NULL in SQL?\n• Why does WHERE col = NULL fail to return matching rows?\n• What is three-valued logic in SQL (TRUE, FALSE, UNKNOWN)?\n• What is the difference between NULL, 0, and ''?\n• How does IS NOT NULL differ from != NULL?",
      "⚡ Performance Notes:\n• Database engines can index NULL values (B-Tree or Bitmap index), allowing fast O(log N) lookup for IS NULL / IS NOT NULL queries.",
      "🌍 Real-World Use Cases:\n• ✅ Top-Level Hierarchy: WHERE manager_id IS NULL;\n• ✅ Missing Contact Info: WHERE phone_number IS NULL;\n• ✅ Unassigned Categorization: WHERE category_id IS NULL;",
      "🎓 Company Interview Tip: 'Why doesn't = NULL work?' ── Because NULL represents UNKNOWN, and UNKNOWN = UNKNOWN evaluates to UNKNOWN (FALSE in WHERE clause filtering)!",
      "🔥 Pro Tip (Interview Trick Question): `IS NULL` ✅ works; `= NULL` ❌ NEVER works! 🚀"
    ]
  },
  "Basics-027": {
    "code_id": "Basics-027",
    "numeric_id": 27,
    "title": "Find Records with Non-NULL Values Using IS NOT NULL",
    "code": "SELECT first_name FROM employees WHERE manager_id IS NOT NULL;",
    "timeComplexity": "O(N) (Without index) / O(log N) (With B-Tree index scan)",
    "spaceComplexity": "O(1) (Constant auxiliary memory)",
    "simplestExplanation": "IS NOT NULL retrieves rows where a column contains a valid, existing value (excluding NULLs).",
    "mentalModel": "Scan Employees ──► Inspect manager_id ──► Contains Valid Value? ──► Project Output",
    "lineByLine": [
      {
        "line": "SELECT first_name FROM employees",
        "explanation": "Specifies target column first_name and table employees."
      },
      {
        "line": "WHERE manager_id IS NOT NULL;",
        "explanation": "Filters rows where manager_id contains an actual stored value (not missing)."
      },
      {
        "line": "📚 Understanding IS NOT NULL",
        "explanation": "• Asks: 'Does this column contain a valid, non-missing value?'\n• Excludes all rows where manager_id is NULL.\n• Never use != NULL or <> NULL."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees (Access table rows).\nStep 2: WHERE manager_id IS NOT NULL (Evaluate non-NULL predicate).\nStep 3: SELECT first_name (Project matching records)."
      },
      {
        "line": "🚀 ALTERNATIVE SOLUTIONS",
        "explanation": "✅ Method 1 (Find Non-NULL Values - IS NOT NULL):\n```sql\nSELECT first_name FROM employees WHERE manager_id IS NOT NULL;\n```\n\nMethod 2 (Find Missing Values - IS NULL):\n```sql\nSELECT first_name FROM employees WHERE manager_id IS NULL;\n```"
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nFind Existing Values ──► WHERE col IS NOT NULL ✅\nFind Missing Values  ──► WHERE col IS NULL     ✅\nInequality Trap      ──► WHERE col != NULL     ❌ (Returns 0 rows)\n```"
      },
      {
        "line": "⭐ FINAL QUERY",
        "explanation": "Generic SQL:\n```sql\nSELECT column_name FROM table_name WHERE column_name IS NOT NULL;\n```\n\nProblem Solution:\n```sql\nSELECT first_name FROM employees WHERE manager_id IS NOT NULL;\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using != NULL: Writing WHERE col != NULL returns ZERO rows because inequality with NULL evaluates to UNKNOWN.",
      "❌ 2. Using <> NULL: Writing WHERE col <> NULL also evaluates to UNKNOWN and returns ZERO rows.",
      "❌ 3. Equating NULL with Zero (0): 0 is a valid number; NULL is missing data.",
      "❌ 4. Equating NULL with Empty String (''): An empty string is a stored value; NULL is absence of data.",
      "❌ 5. Omitting IS: Writing WHERE col NOT NULL causes a syntax error."
    ],
    "keyTakeaway": "IS NOT NULL returns rows where a column contains an actual value. Never use != NULL or <> NULL.",
    "interviewPros": [
      "Q1. What is IS NOT NULL? It retrieves rows where a column contains a valid, non-missing value.",
      "Q2. Can we use != NULL? NO! Inequality comparison with NULL evaluates to UNKNOWN and returns 0 rows.",
      "Q3. What is the opposite of IS NULL? IS NOT NULL.",
      "Q4. Is NULL equal to 0? No, zero is a valid numeric value.",
      "Q5. Is NULL equal to empty string ('')? No, empty string is a valid string of length zero."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between IS NULL and IS NOT NULL?\n• Why doesn't WHERE col != NULL work?\n• Can NULL be compared using = or !=?\n• What does NULL represent in SQL?\n• Give a real-world example of IS NOT NULL.",
      "⚡ Performance Notes:\n• Databases can optimize IS NOT NULL using B-Tree range scans or bitmap indexes on non-null values.",
      "🌍 Real-World Use Cases:\n• ✅ Employees with Managers: WHERE manager_id IS NOT NULL;\n• ✅ Customers with Phone Numbers: WHERE phone_number IS NOT NULL;\n• ✅ Students with Email: WHERE email IS NOT NULL;\n• ✅ Products with Category: WHERE category_id IS NOT NULL;",
      "🎓 Company Interview Tip: 'What is the difference between IS NULL and IS NOT NULL?' ── IS NULL finds missing values; IS NOT NULL finds existing valid values!",
      "🔥 Pro Tip (Interview Trick Question): `IS NOT NULL` ✅ works; `!= NULL` or `<> NULL` ❌ NEVER works! 🚀"
    ]
  },
  "Basics-028": {
    "code_id": "Basics-028",
    "numeric_id": 28,
    "title": "Use CASE WHEN to Display Conditional Values",
    "code": "SELECT first_name, salary, CASE WHEN salary >= 100000 THEN 'High Salary' WHEN salary >= 60000 THEN 'Medium Salary' ELSE 'Low Salary' END AS salary_category FROM employees;",
    "timeComplexity": "O(N) (Linear row scan evaluating expressions)",
    "spaceComplexity": "O(1) (Constant memory overhead)",
    "simplestExplanation": "CASE WHEN adds conditional logic directly inside SQL queries, evaluating expressions like an if-elif-else statement.",
    "mentalModel": "Scan Employee ──► Check >= 100k? ──(No)──► Check >= 60k? ──(No)──► Default Low Salary",
    "lineByLine": [
      {
        "line": "SELECT first_name, salary,",
        "explanation": "Retrieves the employee name and base salary."
      },
      {
        "line": "CASE",
        "explanation": "Initiates conditional evaluation block."
      },
      {
        "line": "WHEN salary >= 100000 THEN 'High Salary'",
        "explanation": "First specific condition: returns 'High Salary' for earnings >= 100000."
      },
      {
        "line": "WHEN salary >= 60000 THEN 'Medium Salary'",
        "explanation": "Second condition: returns 'Medium Salary' for earnings >= 60000."
      },
      {
        "line": "ELSE 'Low Salary'",
        "explanation": "Fallback condition: returns 'Low Salary' for unmatched rows."
      },
      {
        "line": "END AS salary_category",
        "explanation": "Terminates the CASE expression and assigns alias salary_category."
      },
      {
        "line": "FROM employees;",
        "explanation": "Reads records from the employees table."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting END: Omitting END causes a syntax error.",
      "❌ 2. Incorrect Condition Order: Placing broader conditions before specific ones (e.g. >= 60000 before >= 100000) causes early matching and incorrect results.",
      "❌ 3. Forgetting ELSE: Without ELSE, unmatched rows evaluate to NULL.",
      "❌ 4. Missing Column Alias: Omitting AS alias_name creates messy auto-generated column headers.",
      "❌ 5. Confusing CASE with WHERE: CASE creates new conditional values; WHERE filters rows."
    ],
    "keyTakeaway": "CASE WHEN enables conditional logic inside SQL queries. Always order conditions from most specific to least specific.",
    "interviewPros": [
      "Q1. What is CASE WHEN? Inline conditional expression in SQL.",
      "Q2. Is CASE similar to if-else? Yes, it maps directly to if-elif-else.",
      "Q3. Is ELSE mandatory? No, but without it unmatched rows evaluate to NULL.",
      "Q4. Can CASE be used in ORDER BY / GROUP BY? Yes, CASE works in SELECT, WHERE, ORDER BY, GROUP BY, and HAVING.",
      "Q5. How does SQL evaluate multiple WHEN clauses? Sequentially from top to bottom, stopping at the first TRUE match."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is CASE WHEN and how does it work?\n• What programming concept is similar to CASE?\n• Why is condition order critical in CASE statements?\n• What happens if ELSE is omitted?\n• Can CASE be used in ORDER BY or GROUP BY?",
      "⚡ Performance Notes:\n• CASE expressions evaluate per row in memory with negligible CPU overhead.",
      "🌍 Real-World Use Cases:\n• ✅ Tiered Salary Classification: High / Medium / Low\n• ✅ Student Grading: Marks >= 90 'A', >= 75 'B', else 'C'\n• ✅ Order Fulfillment Status: Shipped date NULL -> 'Pending', else 'Delivered'",
      "🎓 Company Interview Tip: 'What programming concept is similar to CASE?' ── if → elif → else!",
      "🔥 Pro Tip (Interview Trick Question): SQL stops evaluating after the FIRST matching `WHEN`. Order matters! 🚀"
    ]
  },
  "Basics-029": {
    "code_id": "Basics-029",
    "numeric_id": 29,
    "title": "Round Decimal Values Using ROUND()",
    "code": "SELECT first_name, salary, ROUND(salary, 2) AS rounded_salary FROM employees;",
    "timeComplexity": "O(N) (Linear row scan applying numeric rounding)",
    "spaceComplexity": "O(1) (Constant memory overhead)",
    "simplestExplanation": "ROUND(column, decimal_places) rounds numeric values to the specified decimal precision.",
    "mentalModel": "Scan Employee ──► Read Salary (e.g., 45678.456) ──► Apply ROUND(x, 2) ──► Output 45678.46",
    "lineByLine": [
      {
        "line": "SELECT first_name, salary,",
        "explanation": "Retrieves employee name and raw original salary."
      },
      {
        "line": "ROUND(salary, 2) AS rounded_salary",
        "explanation": "Rounds salary to 2 decimal places and assigns alias rounded_salary."
      },
      {
        "line": "FROM employees;",
        "explanation": "Reads data from the employees table."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees (Read data rows).\nStep 2: Apply ROUND(salary, 2) per row.\nStep 3: SELECT first_name, salary, rounded_salary (Project output)."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nROUND(12.678, 2) ──► 12.68  (2 Decimal Places)\nROUND(12.678)    ──► 13     (Whole Integer)\nROUND(45678, -2) ──► 45700  (Nearest Hundred)\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Omitting Decimal Places: ROUND(salary) rounds to whole integers instead of decimals.",
      "❌ 2. Confusing ROUND() with TRUNCATE(): ROUND performs mathematical rounding (5 or more rounds up); TRUNCATE simply cuts off digits without rounding.",
      "❌ 3. Misunderstanding Negative Decimal Places: ROUND(x, -1) rounds to the nearest ten; ROUND(x, -2) rounds to nearest hundred.",
      "❌ 4. Forgetting Column Alias: Omitting AS rounded_salary produces raw functional column headers.",
      "❌ 5. Expecting ROUND to change stored database values: ROUND only formats the projected query result set."
    ],
    "keyTakeaway": "ROUND(value, decimal_places) rounds numeric values. Omitted decimal places round to the nearest whole integer.",
    "interviewPros": [
      "Q1. What does ROUND() do? Rounds a numeric value to specified decimal places.",
      "Q2. What does the 2nd argument represent? Number of decimal places to keep.",
      "Q3. What if 2nd argument is omitted? Rounds to nearest whole integer.",
      "Q4. Can ROUND take negative decimal arguments? Yes! Negative values round to tens, hundreds, thousands, etc.",
      "Q5. Difference between ROUND and TRUNCATE? ROUND rounds mathematically; TRUNCATE cuts off digits."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What does ROUND() do in SQL?\n• Difference between ROUND and TRUNCATE?\n• What is ROUND(15.567, 1)? (Answer: 15.6)\n• What happens when negative numbers are passed as the 2nd argument?\n• What is the difference between ROUND(12.345, 2) and ROUND(12.345)?",
      "⚡ Performance Notes:\n• Fast inline mathematical scalar function evaluated per row during projection.",
      "🌍 Real-World Use Cases:\n• ✅ Product Pricing: ROUND(price, 2)\n• ✅ Average Salary Display: ROUND(AVG(salary), 2)\n• ✅ Student GPA: ROUND(gpa, 2)\n• ✅ Product Ratings: ROUND(rating, 1)",
      "🎓 Company Interview Tip: 'What is the difference between ROUND(12.345, 2) and ROUND(12.345)?' ── ROUND(12.345, 2) = 12.35, whereas ROUND(12.345) = 12!",
      "🔥 Pro Tip (Interview Trick Question): 5 or more rounds UP, less than 5 rounds DOWN! 🚀"
    ]
  },
  "Basics-030": {
    "code_id": "Basics-030",
    "numeric_id": 30,
    "title": "Find the Length of a String Using LENGTH()",
    "code": "SELECT first_name, LENGTH(first_name) AS name_length FROM employees;",
    "timeComplexity": "O(N) (N = String length character iteration)",
    "spaceComplexity": "O(1) (Constant space complexity)",
    "simplestExplanation": "LENGTH() calculates the number of characters in a string value.",
    "mentalModel": "Scan Employee Name ('Christopher') ──► Count Characters (11) ──► Output 11",
    "lineByLine": [
      {
        "line": "SELECT first_name,",
        "explanation": "Retrieves the employee first_name column."
      },
      {
        "line": "LENGTH(first_name) AS name_length",
        "explanation": "Counts total characters in first_name (including whitespace) and assigns alias name_length."
      },
      {
        "line": "FROM employees;",
        "explanation": "Reads records from the employees table."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees (Read table rows).\nStep 2: Calculate LENGTH(first_name) per row.\nStep 3: SELECT first_name, name_length (Project result set)."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\n'John'        ──► LENGTH('John') = 4\n'Christopher' ──► LENGTH('Christopher') = 11\n'John Doe'    ──► LENGTH('John Doe') = 8 (Includes space!)\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Wrong Function Name per Dialect: Using LENGTH() in SQL Server instead of LEN(), or LEN() in MySQL/Postgres instead of LENGTH().",
      "❌ 2. Forgetting Parentheses: Writing LENGTH employee_name instead of LENGTH(employee_name).",
      "❌ 3. Expecting LENGTH to Count Words: LENGTH counts characters (letters + spaces + symbols), not words.",
      "❌ 4. Confusing LENGTH() with COUNT(): COUNT() counts table rows; LENGTH() counts characters in a string.",
      "❌ 5. Forgetting Column Alias: Omitting AS name_length leaves unreadable raw function headers."
    ],
    "keyTakeaway": "LENGTH() counts characters in a string. In SQL Server, use LEN().",
    "interviewPros": [
      "Q1. What does LENGTH() do? Returns the total number of characters in a string.",
      "Q2. What is the SQL Server equivalent? LEN().",
      "Q3. Does LENGTH count spaces? Yes! Letters + spaces + symbols are all counted.",
      "Q4. Difference between LENGTH and COUNT? LENGTH counts characters in a string; COUNT counts rows in a dataset.",
      "Q5. Can LENGTH be used in WHERE clause? Yes! WHERE LENGTH(username) >= 8 filters rows by character length."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What does LENGTH() do?\n• Difference between COUNT() and LENGTH()?\n• What is the SQL Server equivalent of LENGTH()?\n• Does LENGTH() count spaces?\n• Can LENGTH() be used inside WHERE?",
      "⚡ Performance Notes:\n• Fast scalar string function evaluated per row during projection or filtering.",
      "🌍 Real-World Use Cases:\n• ✅ Validate Username Length: WHERE LENGTH(username) >= 8\n• ✅ Password Strength Audit: WHERE LENGTH(password) >= 8\n• ✅ Truncation Safeguard: WHERE LENGTH(title) > 50",
      "🎓 Company Interview Tip: 'What is the difference between COUNT() and LENGTH()?' ── COUNT() counts rows; LENGTH() counts characters in a string!",
      "🔥 Pro Tip (Interview Trick Question): `LENGTH()` counts SPACES as characters! 'John Doe' = 8! 🚀"
    ]
  },
  "Basics-031": {
    "code_id": "Basics-031",
    "numeric_id": 31,
    "title": "Convert Text to Uppercase and Lowercase Using UPPER() and LOWER()",
    "code": "SELECT first_name, UPPER(first_name) AS upper_name, LOWER(first_name) AS lower_name FROM employees;",
    "timeComplexity": "O(N * M) (N = Row count, M = String length)",
    "spaceComplexity": "O(1) (Constant memory overhead)",
    "simplestExplanation": "UPPER() converts text characters to uppercase; LOWER() converts text characters to lowercase.",
    "mentalModel": "Scan Employee Name ('John') ──► UPPER() ──► 'JOHN' | LOWER() ──► 'john'",
    "lineByLine": [
      {
        "line": "SELECT first_name,",
        "explanation": "Retrieves original employee first_name column."
      },
      {
        "line": "UPPER(first_name) AS upper_name,",
        "explanation": "Converts all characters of first_name to uppercase and assigns alias upper_name."
      },
      {
        "line": "LOWER(first_name) AS lower_name",
        "explanation": "Converts all characters of first_name to lowercase and assigns alias lower_name."
      },
      {
        "line": "FROM employees;",
        "explanation": "Reads data records from the employees table."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees (Access table rows).\nStep 2: Apply UPPER(first_name) and LOWER(first_name) per row.\nStep 3: SELECT first_name, upper_name, lower_name (Emit result set)."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\n'John' ──► UPPER('John') = 'JOHN' | LOWER('John') = 'john'\nCase-Insensitive Search: WHERE LOWER(email) = LOWER('User@Email.com')\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Thinking UPPER()/LOWER() Mutates Stored Table Data: Scalar functions alter display results only, not persisted table values.",
      "❌ 2. Confusing UPPER() with UPDATE: UPPER() formats SELECT results; UPDATE modifies table records on disk.",
      "❌ 3. Forgetting Parentheses: Writing UPPER first_name instead of UPPER(first_name).",
      "❌ 4. Forgetting Column Aliases: Omitting AS upper_name / AS lower_name leaves unreadable query output headers.",
      "❌ 5. Missing Index Awareness in WHERE: Wrapping indexed columns in LOWER(col) can bypass standard B-Tree index scans unless a expression/functional index exists."
    ],
    "keyTakeaway": "UPPER() and LOWER() alter text display casing without modifying stored database values. Crucial for case-insensitive searches.",
    "interviewPros": [
      "Q1. What does UPPER() do? Converts string text to uppercase.",
      "Q2. What does LOWER() do? Converts string text to lowercase.",
      "Q3. Does UPPER/LOWER modify table data? No! Only query projection results change.",
      "Q4. Why use LOWER() in WHERE clauses? To perform case-insensitive text matching.",
      "Q5. Can UPPER and LOWER be combined in the same query? Yes! Multiple scalar functions can be used together."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between UPPER() and LOWER()?\n• Does UPPER() update the stored database records?\n• How do you write a case-insensitive WHERE clause in SQL?\n• Can scalar functions in WHERE break index usage?\n• What is the difference between UPPER() and UPDATE?",
      "⚡ Performance Notes:\n• Fast scalar string conversion per row. Be careful applying functions on indexed WHERE columns.",
      "🌍 Real-World Use Cases:\n• ✅ Display Uppercase Names: UPPER(employee_name)\n• ✅ Standardize Email Input: LOWER(email)\n• ✅ Case-Insensitive User Search: WHERE LOWER(username) = 'john'\n• ✅ Compare Cross-System Data: WHERE LOWER(a.email) = LOWER(b.email)",
      "🎓 Company Interview Tip: 'How do you make a case-insensitive string comparison in SQL?' ── Wrap both sides in LOWER(): WHERE LOWER(col) = LOWER('input')!",
      "🔥 Pro Tip (Interview Trick Question): UPPER() and LOWER() change PROJECTION, not PERSISTENCE! 🚀"
    ]
  },
  "Basics-032": {
    "code_id": "Basics-032",
    "numeric_id": 32,
    "title": "Extract Part of a String Using SUBSTRING()",
    "code": "SELECT first_name, SUBSTR(first_name, 1, 3) AS first_three_letters FROM employees;",
    "timeComplexity": "O(N * M) (N = Row count, M = Extracted substring length)",
    "spaceComplexity": "O(1) (Constant memory overhead)",
    "simplestExplanation": "SUBSTRING(str, start, length) extracts a specified slice of text starting at position 'start' for 'length' characters.",
    "mentalModel": "Word 'Christopher' ──► Start at 1 ──► Slice 3 chars ──► 'Chr'",
    "lineByLine": [
      {
        "line": "SELECT first_name,",
        "explanation": "Retrieves the original first_name column."
      },
      {
        "line": "SUBSTR(first_name, 1, 3) AS first_three_letters",
        "explanation": "Extracts 3 characters starting from position 1 (SQL 1-based indexing) and assigns alias first_three_letters."
      },
      {
        "line": "FROM employees;",
        "explanation": "Reads records from the employees table."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees (Access table rows).\nStep 2: Apply SUBSTR(first_name, 1, 3) per row.\nStep 3: SELECT first_name, first_three_letters (Emit result set)."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nSUBSTRING(text, start_pos, character_length)\n'Christopher' ──► SUBSTRING('Christopher', 1, 5) = 'Chris'\n'Christopher' ──► SUBSTRING('Christopher', 2, 4) = 'hris'\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Starting at 0 Instead of 1: SQL uses 1-based indexing! Starting at 0 can produce unexpected results or empty outputs in some DBs.",
      "❌ 2. Confusing Length with End Position: SUBSTRING(name, 2, 4) means start at 2 and take 4 characters, NOT slice from position 2 to position 4!",
      "❌ 3. Dialect Mismatch (SUBSTRING vs SUBSTR): Oracle & SQLite use SUBSTR(); MySQL, PostgreSQL, & SQL Server support SUBSTRING().",
      "❌ 4. Forgetting Column Alias: Omitting AS first_three_letters results in raw unreadable function headers.",
      "❌ 5. Misusing SUBSTRING for Wildcard Searches: Use LIKE 'J%' for pattern matching instead of WHERE SUBSTRING(name, 1, 1) = 'J' for better indexing."
    ],
    "keyTakeaway": "SUBSTRING() extracts substring slices using (column, start_position, length) with 1-based indexing.",
    "interviewPros": [
      "Q1. What does SUBSTRING() do? Extracts a specific slice of characters from a string.",
      "Q2. Does SQL start counting from 0 or 1? SQL start positions count from 1!",
      "Q3. What is the difference between SUBSTRING() and SUBSTR()? Functionality is identical; naming depends on database dialect.",
      "Q4. What does the 3rd parameter represent? Number of characters to extract (length), NOT end position index.",
      "Q5. Can SUBSTRING extract from middle of string? Yes! Specify any valid start position, e.g. SUBSTRING(name, 3, 5)."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What do the three parameters of SUBSTRING(col, A, B) mean?\n• Does SQL count positions from 0 or 1?\n• What does SUBSTRING('Christopher', 2, 4) return? (Answer: 'hris')\n• Difference between SUBSTRING and SUBSTR?\n• Can SUBSTRING be used inside WHERE clauses?",
      "⚡ Performance Notes:\n• Fast scalar string slice. In WHERE predicates, prefers expression indexes to prevent full scans.",
      "🌍 Real-World Use Cases:\n• ✅ Employee Initials / Badges: SUBSTRING(name, 1, 1)\n• ✅ Product SKUs / Serial Codes: SUBSTRING(code, 1, 4)\n• ✅ Area Code Extraction: SUBSTRING(phone, 1, 3)\n• ✅ Masking Sensitive Data: SUBSTRING(card_no, 13, 4)",
      "🎓 Company Interview Tip: 'What does SUBSTRING(name, 2, 4) mean?' ── Start at position 2 and take the next 4 characters!",
      "🔥 Pro Tip (Interview Trick Question): 3rd parameter is LENGTH, NOT ending position index! 🚀"
    ]
  },
  "Basics-033": {
    "code_id": "Basics-033",
    "numeric_id": 33,
    "title": "Replace Part of a String Using REPLACE()",
    "code": "SELECT first_name, REPLACE(first_name, 'John', 'Jonathan') AS updated_name FROM employees;",
    "timeComplexity": "O(N * M) (N = Row count, M = String length)",
    "spaceComplexity": "O(1) (Constant memory overhead)",
    "simplestExplanation": "REPLACE(string, search_target, replacement) searches for matching substrings and substitutes every occurrence with replacement text.",
    "mentalModel": "Find & Replace: Scan 'John Smith' ──► Find 'John' ──► Substitute 'Jonathan' ──► Result 'Jonathan Smith'",
    "lineByLine": [
      {
        "line": "SELECT first_name,",
        "explanation": "Retrieves original employee first_name column."
      },
      {
        "line": "REPLACE(first_name, 'John', 'Jonathan') AS updated_name",
        "explanation": "Searches for 'John' in first_name and replaces with 'Jonathan', aliasing output as updated_name."
      },
      {
        "line": "FROM employees;",
        "explanation": "Reads records from the employees table."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees (Access table rows).\nStep 2: Apply REPLACE(first_name, 'John', 'Jonathan') per row.\nStep 3: SELECT first_name, updated_name (Emit result set)."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nREPLACE(column, old_text, new_text)\nRemove Spaces: REPLACE(name, ' ', '')\nReplace Spaces with Underscores: REPLACE(name, ' ', '_')\nRemove Dashes: REPLACE(phone, '-', '')\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Thinking REPLACE() Modifies Table Data: SELECT REPLACE() only alters query projection output. Use UPDATE to persist changes.",
      "❌ 2. Forgetting String Quotes: Writing REPLACE(name, John, Jonathan) without quotes results in invalid column reference errors.",
      "❌ 3. Confusing REPLACE() Function with UPDATE DML: REPLACE() is a scalar string function; UPDATE is a DML statement.",
      "❌ 4. Assuming Wildcard/Regex Support: Standard REPLACE() matches exact literal strings, not regex or wildcard patterns.",
      "❌ 5. Forgetting Column Aliases: Omitting AS updated_name outputs unreadable raw function headers."
    ],
    "keyTakeaway": "REPLACE() performs literal substring replacement across string columns, altering output projection unless bound to UPDATE.",
    "interviewPros": [
      "Q1. What does REPLACE() do? Replaces all occurrences of a specified substring with new text.",
      "Q2. Does REPLACE() modify original database records? No! Only SELECT query projection results change.",
      "Q3. How do you remove all spaces from a string? Use REPLACE(col, ' ', '').",
      "Q4. Does REPLACE() substitute all occurrences or only the first? Every matching occurrence in the string is replaced!",
      "Q5. Can REPLACE() be used inside an UPDATE statement? Yes! UPDATE tbl SET col = REPLACE(col, 'old', 'new')."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What do the three parameters of REPLACE(col, A, B) mean?\n• Does REPLACE() alter persisted table data on disk?\n• How do you remove all spaces or dashes from a string in SQL?\n• Difference between REPLACE() and UPDATE?\n• Does REPLACE() replace one occurrence or all occurrences?",
      "⚡ Performance Notes:\n• Fast scalar string substitution. On large text blobs, string scanning incurs minor O(M) overhead per row.",
      "🌍 Real-World Use Cases:\n• ✅ Remove Phone Dashes: REPLACE(phone, '-', '')\n• ✅ Rebrand Company Names: REPLACE(company, 'Facebook', 'Meta')\n• ✅ Format Usernames: REPLACE(username, ' ', '_')\n• ✅ Clean CSV Imports: REPLACE(product, '  ', ' ')",
      "🎓 Company Interview Tip: 'How do you remove all spaces from a string in SQL?' ── REPLACE(column_name, ' ', '')!",
      "🔥 Pro Tip (Interview Trick Question): REPLACE() replaces ALL matching occurrences in the string! 🚀"
    ]
  },
  "Basics-034": {
    "code_id": "Basics-034",
    "numeric_id": 34,
    "title": "Replace NULL Values Using COALESCE()",
    "code": "SELECT first_name, COALESCE(CAST(manager_id AS TEXT), 'No Manager') AS manager FROM employees;",
    "timeComplexity": "O(N) (Linear row evaluation)",
    "spaceComplexity": "O(1) (Constant memory overhead)",
    "simplestExplanation": "COALESCE(e1, e2, ... eN) evaluates arguments from left to right and returns the very first non-NULL expression.",
    "mentalModel": "Backup Value Provider: Check manager_id ──► Non-NULL? Return ID ──► NULL? Fallback to 'No Manager'",
    "lineByLine": [
      {
        "line": "SELECT first_name,",
        "explanation": "Retrieves employee first_name column."
      },
      {
        "line": "COALESCE(CAST(manager_id AS TEXT), 'No Manager') AS manager",
        "explanation": "Casts manager_id to TEXT and returns it if non-NULL; defaults to 'No Manager' if NULL, aliasing result as manager."
      },
      {
        "line": "FROM employees;",
        "explanation": "Reads records from the employees table."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: FROM employees (Access table rows).\nStep 2: Evaluate COALESCE(CAST(manager_id AS TEXT), 'No Manager') per row.\nStep 3: SELECT first_name, manager (Emit result set)."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nCOALESCE(val1, val2, val3, ...)\nCOALESCE(NULL, NULL, 100, 200) ──► 100\nCOALESCE(salary, 0) ──► Returns salary or 0 if NULL\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Thinking COALESCE() Modifies Table Data: SELECT COALESCE() replaces NULL values in display output only, not stored database values.",
      "❌ 2. Data Type Mismatch Traps: Combining numbers and strings without CAST (e.g. COALESCE(manager_id, 'No Manager')) triggers data type conversion errors in strict DB engines.",
      "❌ 3. Confusing COALESCE() with IS NULL: IS NULL is a boolean comparison operator (WHERE col IS NULL); COALESCE() is a value replacement function.",
      "❌ 4. Assuming COALESCE() Accepts Only 2 Arguments: COALESCE() accepts arbitrary parameters: COALESCE(col1, col2, col3, 'Default').",
      "❌ 5. Using Vendor-Specific IFNULL()/ISNULL(): Prefer ANSI SQL standard COALESCE() for cross-database portability (Postgres, Oracle, MySQL, SQL Server, SQLite)."
    ],
    "keyTakeaway": "COALESCE() provides ANSI standard NULL replacement by returning the first non-NULL argument.",
    "interviewPros": [
      "Q1. What does COALESCE() do? Returns the first non-NULL expression from left to right.",
      "Q2. Is COALESCE() ANSI SQL compliant? Yes! Native across MySQL, Postgres, Oracle, SQL Server, SQLite.",
      "Q3. Can COALESCE() take more than 2 arguments? Yes! Accepts an arbitrary list of expressions.",
      "Q4. What is the difference between COALESCE() and IFNULL()? COALESCE() is ANSI SQL with N arguments; IFNULL() is vendor-specific (MySQL/SQLite) with 2 arguments.",
      "Q5. Does COALESCE() change database table data? No! Only alters query output projection."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What does COALESCE() return when given COALESCE(NULL, NULL, 50, 100)? (Answer: 50)\n• Difference between COALESCE() and IFNULL()/ISNULL()?\n• Why do we need CAST() when replacing numeric NULLs with text defaults?\n• Difference between IS NULL and COALESCE()?\n• Is COALESCE() ANSI SQL standard?",
      "⚡ Performance Notes:\n• Ultra-fast short-circuit evaluation. Stops scanning arguments as soon as it hits the first non-NULL value.",
      "🌍 Real-World Use Cases:\n• ✅ Default Salary/Bonus: COALESCE(salary, 0)\n• ✅ Fallback Contact Info: COALESCE(mobile_phone, work_phone, 'Not Provided')\n• ✅ Missing Manager Label: COALESCE(CAST(manager_id AS TEXT), 'No Manager')\n• ✅ Missing Address/City: COALESCE(city, 'Unknown')",
      "🎓 Company Interview Tip: 'Why prefer COALESCE over IFNULL/ISNULL?' ── COALESCE is ANSI standard and handles N fallback parameters!",
      "🔥 Pro Tip (Interview Trick Question): Short-circuits at the FIRST non-NULL argument! 🚀"
    ]
  },
  "Basics-035": {
    "code_id": "Basics-035",
    "numeric_id": 35,
    "title": "Display the Current Date and Time",
    "code": "SELECT CURRENT_DATE AS current_date, CURRENT_TIME AS current_time, CURRENT_TIMESTAMP AS current_datetime;",
    "timeComplexity": "O(1) (Constant system clock lookup)",
    "spaceComplexity": "O(1) (Constant memory overhead)",
    "simplestExplanation": "CURRENT_DATE, CURRENT_TIME, and CURRENT_TIMESTAMP query the database engine's system clock directly without reading table data.",
    "mentalModel": "System Clock Query: Read DB Server Clock ──► Emit Current Date (YYYY-MM-DD), Time (HH:MM:SS), and Timestamp",
    "lineByLine": [
      {
        "line": "SELECT CURRENT_DATE AS current_date,",
        "explanation": "Fetches system date from database server clock."
      },
      {
        "line": "CURRENT_TIME AS current_time,",
        "explanation": "Fetches current system time."
      },
      {
        "line": "CURRENT_TIMESTAMP AS current_datetime;",
        "explanation": "Fetches full date and time timestamp from system clock."
      },
      {
        "line": "⚙️ SQL EXECUTION ORDER",
        "explanation": "Step 1: Read system clock parameters from DB server.\nStep 2: Format projection values.\nStep 3: Emit result set tuple (No FROM table scanning required)."
      },
      {
        "line": "📝 QUICK REVISION BOX",
        "explanation": "```text\nANSI SQL: CURRENT_DATE, CURRENT_TIME, CURRENT_TIMESTAMP\nMySQL: CURDATE(), CURTIME(), NOW()\nSQL Server: GETDATE()\nOracle: SYSDATE, SYSTIMESTAMP FROM dual\n```"
      }
    ],
    "beginnerTraps": [
      "❌ 1. Writing Unnecessary FROM Clauses: Writing SELECT CURRENT_DATE FROM employees executes the system clock function N times (once per row) instead of once without a FROM clause.",
      "❌ 2. Confusing Client Clock with DB Server Clock: Date/time functions retrieve the database server clock time, NOT the local user device time.",
      "❌ 3. Confusing CURRENT_DATE with CURRENT_TIMESTAMP: CURRENT_DATE returns only date (YYYY-MM-DD); CURRENT_TIMESTAMP returns date + time.",
      "❌ 4. Ignoring Vendor Dialect Differences: Using MySQL NOW() in SQL Server (which uses GETDATE()) or Oracle (which uses SYSDATE/SYSTIMESTAMP FROM dual).",
      "❌ 5. Expecting SELECT CURRENT_DATE to Persist Data: SELECT only displays clock values. Use INSERT INTO audit_logs(created_at) VALUES (CURRENT_TIMESTAMP) to store data."
    ],
    "keyTakeaway": "System date and time functions query the database server clock in O(1) time and do not require table references.",
    "interviewPros": [
      "Q1. What is CURRENT_DATE? ANSI SQL scalar function that returns the current database server date.",
      "Q2. What is CURRENT_TIMESTAMP? Returns combined date and time from system clock.",
      "Q3. Do date/time functions require a FROM clause? No! Evaluates directly without table references.",
      "Q4. What is NOW() in MySQL? MySQL-specific function equivalent to CURRENT_TIMESTAMP.",
      "Q5. What is GETDATE() in SQL Server? SQL Server-specific function equivalent to CURRENT_TIMESTAMP."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Difference between CURRENT_DATE and CURRENT_TIMESTAMP?\n• What is NOW() in MySQL and GETDATE() in SQL Server?\n• Does SELECT CURRENT_DATE require a FROM clause?\n• Whose system clock is returned: client device or DB server?\n• How do you auto-populate creation timestamps on INSERT?",
      "⚡ Performance Notes:\n• O(1) constant time execution. No table scan or disk I/O involved.",
      "🌍 Real-World Use Cases:\n• ✅ Order Creation Timestamps: INSERT INTO orders(order_date) VALUES (CURRENT_DATE)\n• ✅ User Login Auditing: INSERT INTO login_logs(login_time) VALUES (CURRENT_TIMESTAMP)\n• ✅ Attendance Tracking: INSERT INTO attendance(check_in) VALUES (CURRENT_TIMESTAMP)\n• ✅ Financial Transaction Logs: Stamping exact transaction execution times",
      "🎓 Company Interview Tip: 'Whose time does CURRENT_TIMESTAMP return?' ── Always the Database Server Clock, not the client machine!",
      "🔥 Pro Tip (Interview Trick Question): No FROM clause needed in ANSI SQL / MySQL / Postgres / SQLite! 🚀"
    ]
  },
  "SQL-001": {
    "code_id": "SQL-001",
    "numeric_id": 36,
    "title": "Group Employees by Department",
    "code": "SELECT department_name,\n       COUNT(*) AS employee_count\nFROM employees\nGROUP BY department_name\nORDER BY department_name;",
    "timeComplexity": "O(N) (N = Number of Employee Records)",
    "spaceComplexity": "O(G) (G = Number of Unique Departments)",
    "simplestExplanation": "GROUP BY clusters rows sharing the same department_name. COUNT(*) counts the rows in each group, and ORDER BY sorts results alphabetically.",
    "mentalModel": "Classroom Sorting: Employees ──► Bucketed into Department Classrooms ──► COUNT(*) counts students per room ──► Emit (department_name, employee_count)",
    "lineByLine": [
      {
        "line": "SELECT department_name,",
        "explanation": "Retrieves the department name column."
      },
      {
        "line": "COUNT(*) AS employee_count",
        "explanation": "COUNT(*) counts total employee records in each department group, aliased as employee_count."
      },
      {
        "line": "FROM employees",
        "explanation": "Reads records from the employees table."
      },
      {
        "line": "GROUP BY department_name",
        "explanation": "Combines rows having the exact same department_name into distinct groups."
      },
      {
        "line": "ORDER BY department_name;",
        "explanation": "Sorts the grouped result set alphabetically in ascending order."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting GROUP BY: Mixing department_name and COUNT(*) without GROUP BY causes SQL engine syntax errors.",
      "❌ 2. Selecting Non-Aggregated Columns: Selecting employee_name alongside COUNT(*) without grouping by employee_name fails in standard SQL.",
      "❌ 3. Using WHERE Instead of HAVING for Aggregates: WHERE COUNT(*) > 5 fails because WHERE runs before grouping. Use HAVING COUNT(*) > 5.",
      "❌ 4. Assuming GROUP BY Sorts Automatically: GROUP BY does NOT guarantee sorted output; always append ORDER BY department_name.",
      "❌ 5. Confusing GROUP BY with DISTINCT: DISTINCT removes duplicates without aggregation; GROUP BY creates groups for aggregate functions."
    ],
    "keyTakeaway": "GROUP BY groups rows with matching values so aggregate functions (COUNT, SUM, AVG, MAX, MIN) compute results per group.",
    "interviewPros": [
      "Q1. What does GROUP BY do? Clusters rows having identical values into summary groups.",
      "Q2. Why use COUNT(*)? Counts all rows in each group regardless of NULLs.",
      "Q3. Can GROUP BY be used without aggregate functions? Yes, it produces distinct grouped values similar to DISTINCT.",
      "Q4. Can GROUP BY take multiple columns? Yes (e.g. GROUP BY department_name, city creates composite groups).",
      "Q5. Does GROUP BY sort results? No, sorting requires explicit ORDER BY."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between WHERE and HAVING?\n• Can you SELECT a column that is neither in GROUP BY nor inside an aggregate function?\n• Difference between GROUP BY and DISTINCT?\n• How does the SQL execution order process GROUP BY?\n• What happens if a grouped column contains NULL values?",
      "⚡ Performance Notes:\n• O(N) scan using hash-based or sort-based aggregation.\n• Indexes on GROUP BY columns allow the query planner to avoid full-table sorting.",
      "🌍 Real-World Use Cases:\n• ✅ Department headcounts in HR systems\n• ✅ Student enrollments per class\n• ✅ Customer counts by branch / city\n• ✅ Order volumes grouped by product category",
      "🎓 Company Interview Tip: 'Difference between WHERE and HAVING?' ── WHERE filters rows BEFORE grouping; HAVING filters aggregated groups AFTER grouping!",
      "🔥 Pro Tip (Interview Trick Question): GROUP BY clusters NULLs into a single NULL group! 🚀"
    ]
  },
  "SQL-002": {
    "code_id": "SQL-002",
    "numeric_id": 37,
    "title": "Group Students by Class",
    "code": "SELECT class_name,\n       COUNT(*) AS student_count\nFROM students\nGROUP BY class_name\nORDER BY class_name;",
    "timeComplexity": "O(N) (N = Number of Student Records)",
    "spaceComplexity": "O(G) (G = Number of Classes)",
    "simplestExplanation": "GROUP BY clusters student records by class_name. COUNT(*) counts students within each class, and ORDER BY sorts classes alphabetically.",
    "mentalModel": "School Classrooms: Students ──► Sorted into Class Rooms (Class A, Class B) ──► COUNT(*) counts students per room ──► Output (class_name, student_count)",
    "lineByLine": [
      {
        "line": "SELECT class_name,",
        "explanation": "Retrieves the class name column."
      },
      {
        "line": "COUNT(*) AS student_count",
        "explanation": "COUNT(*) counts total enrolled students per class group, aliased as student_count."
      },
      {
        "line": "FROM students",
        "explanation": "Reads data from the students table."
      },
      {
        "line": "GROUP BY class_name",
        "explanation": "Clusters students belonging to the same class into distinct groups."
      },
      {
        "line": "ORDER BY class_name;",
        "explanation": "Displays classes in alphabetical order."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting GROUP BY: Mixing class_name with COUNT(*) without GROUP BY causes SQL engine aggregation errors.",
      "❌ 2. Selecting Extra Non-Aggregated Columns: Adding student_name alongside COUNT(*) without grouping by student_name fails in ANSI SQL.",
      "❌ 3. Using WHERE Instead of HAVING for Counts: WHERE COUNT(*) > 10 fails because WHERE runs before grouping. Use HAVING COUNT(*) > 10.",
      "❌ 4. Assuming GROUP BY Automatically Sorts: GROUP BY does NOT guarantee sorted output; append explicit ORDER BY class_name.",
      "❌ 5. Confusing COUNT(*) with COUNT(col): COUNT(*) counts every row in the class; COUNT(col) ignores NULL values."
    ],
    "keyTakeaway": "GROUP BY groups rows by class_name so aggregate functions like COUNT() calculate enrollments per class.",
    "interviewPros": [
      "Q1. Why use GROUP BY? Combines similar rows before running aggregate calculations.",
      "Q2. What does COUNT(*) count? Counts every row in the group regardless of NULLs.",
      "Q3. Can GROUP BY work on numbers or dates? Yes (e.g. GROUP BY age or GROUP BY order_date).",
      "Q4. Can GROUP BY use multiple columns? Yes (e.g. GROUP BY class_name, section).",
      "Q5. Does GROUP BY sort data? No, sorting requires ORDER BY."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the purpose of GROUP BY?\n• Difference between COUNT(*) and COUNT(student_id)?\n• Can you filter group size with WHERE?\n• Can GROUP BY work without aggregate functions?\n• What happens if class_name contains NULLs?",
      "⚡ Performance Notes:\n• O(N) scan using hash aggregation.\n• B-Tree index on (class_name) eliminates sorting overhead.",
      "🌍 Real-World Use Cases:\n• ✅ School enrollment figures by class / grade\n• ✅ College course student distributions\n• ✅ Online academy enrollment statistics\n• ✅ University department student strengths",
      "🎓 Company Interview Tip: 'Why COUNT(*) instead of COUNT(student_id)?' ── COUNT(*) counts every row directly and is optimized by database query engines!",
      "🔥 Pro Tip (Interview Trick Question): GROUP BY class_name, section creates groups for each unique composite pair! 🚀"
    ]
  },
  "SQL-003": {
    "code_id": "SQL-003",
    "numeric_id": 38,
    "title": "Count Employees per Department",
    "code": "SELECT department_name,\n       COUNT(*) AS total_employees\nFROM employees\nGROUP BY department_name\nORDER BY total_employees DESC;",
    "timeComplexity": "O(N) (N = Number of Employee Records)",
    "spaceComplexity": "O(G) (G = Number of Departments)",
    "simplestExplanation": "GROUP BY partitions employees by department_name. COUNT(*) counts employees in each group, and ORDER BY total_employees DESC orders them from largest to smallest.",
    "mentalModel": "Department Headcount Ranking: Employees ──► Grouped by Department ──► COUNT(*) counts team size ──► ORDER BY total_employees DESC sorts highest to lowest",
    "lineByLine": [
      {
        "line": "SELECT department_name,",
        "explanation": "Retrieves the department name column."
      },
      {
        "line": "COUNT(*) AS total_employees",
        "explanation": "Counts employees in each department, aliasing the aggregate metric as total_employees."
      },
      {
        "line": "FROM employees",
        "explanation": "Reads records from the employees table."
      },
      {
        "line": "GROUP BY department_name",
        "explanation": "Creates one group per department name."
      },
      {
        "line": "ORDER BY total_employees DESC;",
        "explanation": "Sorts results from highest employee count to lowest."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting GROUP BY: Selecting department_name and COUNT(*) without GROUP BY causes aggregation syntax errors.",
      "❌ 2. Using ASC Instead of DESC: ORDER BY total_employees ASC lists the smallest departments first instead of the largest.",
      "❌ 3. Forgetting ORDER BY: Omitting the sorting clause returns rows in nondeterministic hash bucket order.",
      "❌ 4. Using WHERE Instead of HAVING for Counts: Filtering WHERE COUNT(*) > 5 fails because WHERE runs before grouping. Use HAVING COUNT(*) > 5.",
      "❌ 5. Sorting by Un-aliased Non-Aggregated Columns: Trying to sort by individual employee attributes instead of the group aggregate."
    ],
    "keyTakeaway": "GROUP BY creates groups, COUNT(*) computes group headcounts, and ORDER BY alias DESC ranks departments from largest to smallest.",
    "interviewPros": [
      "Q1. Why use ORDER BY DESC? Displays the largest values / highest counts first.",
      "Q2. Can we sort by a column alias in SQL? Yes, standard databases allow ORDER BY alias_name.",
      "Q3. Can we sort using COUNT(*) directly? Yes: ORDER BY COUNT(*) DESC is completely valid ANSI SQL.",
      "Q4. Which sorting syntax is preferred? Sorting by alias (ORDER BY total_employees DESC) improves code readability.",
      "Q5. Does GROUP BY sort data? No, sorting always requires an explicit ORDER BY clause."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between ASC and DESC?\n• Can you sort by an aggregate alias in ORDER BY?\n• Can you use WHERE to filter groups by headcount?\n• What is the logical execution order of SELECT, FROM, GROUP BY, and ORDER BY?\n• How does the database engine optimize top-N grouped queries?",
      "⚡ Performance Notes:\n• O(N) grouping via hash table followed by Top-K heap or sort on G groups.\n• Very efficient when G (number of departments) is small relative to N.",
      "🌍 Real-World Use Cases:\n• ✅ HR department headcount leaderboards\n• ✅ Workforce planning and hiring priority reports\n• ✅ Team size distribution analytics\n• ✅ Organizational budgeting by department strength",
      "🎓 Company Interview Tip: 'Can you sort by alias in WHERE?' ── No! But you CAN sort by alias in ORDER BY because ORDER BY executes AFTER SELECT!",
      "🔥 Pro Tip (Interview Trick Question): ORDER BY COUNT(*) DESC and ORDER BY total_employees DESC produce the exact same execution plan! 🚀"
    ]
  },
  "SQL-004": {
    "code_id": "SQL-004",
    "numeric_id": 39,
    "title": "Departments Having More Than 5 Employees",
    "code": "SELECT department_name,\n       COUNT(*) AS employee_count\nFROM employees\nGROUP BY department_name\nHAVING COUNT(*) > 5\nORDER BY employee_count DESC;",
    "timeComplexity": "O(N) (N = Number of Employee Records)",
    "spaceComplexity": "O(G) (G = Number of Departments)",
    "simplestExplanation": "GROUP BY partitions employees by department. COUNT(*) calculates group headcounts. HAVING COUNT(*) > 5 removes small departments, and ORDER BY sorts results in descending order.",
    "mentalModel": "Funnel Filter Pipeline: All Employees ──► Group by Department ──► COUNT(*) Headcounts ──► HAVING COUNT(*) > 5 Filter Out Small Teams ──► ORDER BY employee_count DESC",
    "lineByLine": [
      {
        "line": "SELECT department_name,",
        "explanation": "Retrieves the department name."
      },
      {
        "line": "COUNT(*) AS employee_count",
        "explanation": "Calculates the total headcount for each department group, aliasing it as employee_count."
      },
      {
        "line": "FROM employees",
        "explanation": "Reads rows from the employees table."
      },
      {
        "line": "GROUP BY department_name",
        "explanation": "Creates one group per unique department."
      },
      {
        "line": "HAVING COUNT(*) > 5",
        "explanation": "Filters groups post-aggregation: keeps only departments where employee count strictly exceeds 5."
      },
      {
        "line": "ORDER BY employee_count DESC;",
        "explanation": "Sorts the qualified departments from highest employee count down to lowest."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using WHERE with Aggregate Functions: WHERE COUNT(*) > 5 throws a syntax error because WHERE executes before grouping. Use HAVING COUNT(*) > 5.",
      "❌ 2. Forgetting GROUP BY: Trying to use HAVING COUNT(*) > 5 without GROUP BY cannot partition employee counts per department.",
      "❌ 3. Placing HAVING Before GROUP BY: SQL syntax requires GROUP BY before HAVING.",
      "❌ 4. Forgetting DESC in Sorting: Writing ORDER BY employee_count without DESC sorts in ascending order (smallest first).",
      "❌ 5. Confusing HAVING with WHERE: WHERE filters individual tuples; HAVING filters grouped and aggregated buckets."
    ],
    "keyTakeaway": "HAVING filters grouped records after aggregation, whereas WHERE filters individual rows before grouping.",
    "interviewPros": [
      "Q1. What is the difference between WHERE and HAVING? WHERE filters rows before grouping; HAVING filters aggregated groups after grouping.",
      "Q2. Can HAVING use COUNT()? Yes, HAVING is specifically designed to filter on aggregate functions like COUNT(), SUM(), AVG().",
      "Q3. Can WHERE use COUNT()? No, because rows are not grouped yet when WHERE runs.",
      "Q4. Which executes first between WHERE, GROUP BY, and HAVING? Execution order is: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY.",
      "Q5. Can HAVING evaluate other aggregates like AVG() or SUM()? Yes (e.g. HAVING AVG(salary) > 60000 or HAVING SUM(revenue) > 1000000)."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the fundamental difference between WHERE and HAVING?\n• Can a query use both WHERE and HAVING simultaneously?\n• What is the exact execution order of the SQL SELECT statement?\n• Why does WHERE COUNT(*) > 5 fail at compile time?\n• Can HAVING filter on columns not included in SELECT?",
      "⚡ Performance Notes:\n• Prefer WHERE to filter out individual rows early, reducing rows processed by GROUP BY and HAVING.\n• Hash aggregation partitions rows in O(N); HAVING filters G groups in O(G).",
      "🌍 Real-World Use Cases:\n• ✅ Identifying enterprise departments requiring facility expansions\n• ✅ Finding retail branches serving over 1,000 customers\n• ✅ Flagging products ordered more than 100 times\n• ✅ Discovering cities with large customer concentrations",
      "🎓 Company Interview Tip: 'Can you use both WHERE and HAVING together?' ── Yes! WHERE filters input rows first, GROUP BY groups them, and HAVING filters the aggregated buckets!",
      "🔥 Pro Tip (Interview Trick Question): WHERE filters individual rows before grouping; HAVING filters collapsed groups after aggregation! 🚀"
    ]
  },
  "SQL-005": {
    "code_id": "SQL-005",
    "numeric_id": 40,
    "title": "Departments with Average Salary Greater Than ₹50,000",
    "code": "SELECT department_name,\n       ROUND(AVG(salary), 2) AS average_salary\nFROM employees\nGROUP BY department_name\nHAVING AVG(salary) > 50000\nORDER BY average_salary DESC;",
    "timeComplexity": "O(N) (N = Number of Employee Records)",
    "spaceComplexity": "O(G) (G = Number of Departments)",
    "simplestExplanation": "GROUP BY clusters employees into departments. AVG(salary) computes mean salary, ROUND(..., 2) formats the decimal, HAVING AVG(salary) > 50000 filters qualifying departments, and ORDER BY sorts them descending.",
    "mentalModel": "Department Payroll Threshold: Employees ──► Group by Department ──► Compute AVG(salary) ──► HAVING AVG(salary) > 50000 ──► ROUND(..., 2) ──► ORDER BY average_salary DESC",
    "lineByLine": [
      {
        "line": "SELECT department_name,",
        "explanation": "Retrieves the department name column."
      },
      {
        "line": "ROUND(AVG(salary), 2) AS average_salary",
        "explanation": "Calculates the average salary for each department group and rounds it to 2 decimal places with alias average_salary."
      },
      {
        "line": "FROM employees",
        "explanation": "Reads records from the employees table."
      },
      {
        "line": "GROUP BY department_name",
        "explanation": "Creates one group per unique department name."
      },
      {
        "line": "HAVING AVG(salary) > 50000",
        "explanation": "Filters groups post-aggregation: retains only departments whose average salary strictly exceeds ₹50,000."
      },
      {
        "line": "ORDER BY average_salary DESC;",
        "explanation": "Sorts qualifying departments from highest average salary down to lowest."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using WHERE Instead of HAVING: WHERE AVG(salary) > 50000 fails with an error because WHERE runs before grouping.",
      "❌ 2. Forgetting GROUP BY: Without GROUP BY, AVG(salary) collapses the entire table into a single company-wide average.",
      "❌ 3. Forgetting ROUND(): Leaving AVG(salary) unrounded produces lengthy floating-point decimals.",
      "❌ 4. Using ASC Instead of DESC: Ascending order puts the lowest-paying departments at the top.",
      "❌ 5. Filtering on the Alias in WHERE: WHERE average_salary > 50000 causes an error because WHERE cannot evaluate column aliases."
    ],
    "keyTakeaway": "AVG() aggregates numeric data ignoring NULLs, ROUND(..., 2) cleans decimal display, and HAVING filters calculated group aggregates.",
    "interviewPros": [
      "Q1. What does AVG() do? Computes the arithmetic mean of numeric values in a column.",
      "Q2. Does AVG() ignore NULL values? Yes, ANSI SQL AVG() excludes NULL rows from both numerator and denominator.",
      "Q3. Why is ROUND() used? Formats floating-point averages into clean monetary precision (2 decimal places).",
      "Q4. Can HAVING filter on AVG()? Yes, HAVING is built specifically for aggregate functions like AVG(), SUM(), COUNT().",
      "Q5. Can AVG() work on text columns? No, AVG() requires numeric types (INT, REAL, DECIMAL)."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• How does AVG() handle NULL values versus zeroes?\n• Can you filter by alias in HAVING or ORDER BY?\n• What is the difference between ROUND(AVG(salary), 2) and TRUNCATE?\n• What happens if all salaries in a department are NULL?\n• What is the logical execution order of this query?",
      "⚡ Performance Notes:\n• O(N) single-pass aggregation over employee records.\n• A composite index on (department_name, salary) enables index-only scan (covering index) without touching heap pages.",
      "🌍 Real-World Use Cases:\n• ✅ Annual departmental compensation benchmarking\n• ✅ Executive payroll audit reports\n• ✅ High-earning team budget allocations\n• ✅ Cost center financial health dashboards",
      "🎓 Company Interview Tip: 'How does AVG() handle NULLs?' ── It excludes them! If a team of 3 has salaries [60000, 60000, NULL], AVG() is 60000 (divided by 2, not 3)!",
      "🔥 Pro Tip (Interview Trick Question): WHERE filters individual rows before grouping; HAVING filters aggregated department metrics after grouping! 🚀"
    ]
  },
  "SQL-006": {
    "code_id": "SQL-006",
    "numeric_id": 41,
    "title": "Cities Having More Than 10 Customers",
    "code": "SELECT city,\n       COUNT(*) AS customer_count\nFROM customers\nGROUP BY city\nHAVING COUNT(*) > 10\nORDER BY customer_count DESC;",
    "timeComplexity": "O(N) (N = Number of Customer Records)",
    "spaceComplexity": "O(G) (G = Number of Cities)",
    "simplestExplanation": "GROUP BY partitions customers into city buckets. COUNT(*) counts shoppers in each city, HAVING COUNT(*) > 10 eliminates smaller towns, and ORDER BY customer_count DESC ranks the largest customer hubs first.",
    "mentalModel": "Regional Cluster Funnel: Customers ──► Group by City ──► COUNT(*) per City ──► HAVING COUNT(*) > 10 ──► Project city, customer_count ──► ORDER BY customer_count DESC",
    "lineByLine": [
      {
        "line": "SELECT city,",
        "explanation": "Retrieves the city name column."
      },
      {
        "line": "COUNT(*) AS customer_count",
        "explanation": "Counts total customers living in each city group and aliases the metric as customer_count."
      },
      {
        "line": "FROM customers",
        "explanation": "Reads records from the customers table."
      },
      {
        "line": "GROUP BY city",
        "explanation": "Groups customer records by unique city."
      },
      {
        "line": "HAVING COUNT(*) > 10",
        "explanation": "Filters aggregated groups to keep only cities with strictly more than 10 customers."
      },
      {
        "line": "ORDER BY customer_count DESC;",
        "explanation": "Sorts qualifying cities from largest customer count down to lowest."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using WHERE Instead of HAVING: WHERE COUNT(*) > 10 throws an error because WHERE runs before rows are grouped.",
      "❌ 2. Forgetting GROUP BY: Without GROUP BY city, COUNT(*) yields a single grand total count for the whole table.",
      "❌ 3. Using ASC Instead of DESC: Ascending sort lists cities with the fewest customers first.",
      "❌ 4. Using >= 10 Instead of > 10: 'More than 10' is strict inequality (> 10); using >= 10 includes cities with exactly 10 customers.",
      "❌ 5. Sorting by Raw COUNT(*) in ASC: Inverting the leaderboard order leads to incorrect reporting."
    ],
    "keyTakeaway": "GROUP BY aggregates individual rows into regional buckets, and HAVING filters those buckets on aggregated metrics.",
    "interviewPros": [
      "Q1. Why use HAVING instead of WHERE? COUNT(*) is an aggregate metric calculated after GROUP BY, so it can only be filtered in HAVING.",
      "Q2. Can HAVING use SUM() and AVG()? Yes, HAVING works with all standard SQL aggregates.",
      "Q3. What does COUNT(*) count? Counts all rows in each grouped partition.",
      "Q4. Can GROUP BY be used on multiple columns? Yes (e.g. GROUP BY country, state, city).",
      "Q5. Does GROUP BY automatically sort rows? No, SQL standard requires an explicit ORDER BY clause to guarantee sorted output."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between WHERE and HAVING in execution cost?\n• Can you filter by WHERE city IS NOT NULL and HAVING COUNT(*) > 10 in the same query?\n• What index strategy optimizes GROUP BY city queries?\n• Can COUNT(customer_id) be used instead of COUNT(*)?\n• How does the database handle NULL values in GROUP BY columns?",
      "⚡ Performance Notes:\n• A B-Tree index on (city) allows index grouping or stream aggregation without an extra memory sort.\n• Pre-filtering with WHERE (e.g. WHERE country = 'India') reduces tuples sent to GROUP BY.",
      "🌍 Real-World Use Cases:\n• ✅ E-commerce marketing campaigns targeting high-density metropolitan areas\n• ✅ Logistics delivery network and regional warehouse planning\n• ✅ Customer demographic and market penetration analysis\n• ✅ Retail storefront expansion feasibility studies",
      "🎓 Company Interview Tip: 'Can WHERE and HAVING be in the same query?' ── Absolutely! WHERE filters individual customers before grouping; HAVING filters aggregated city totals after grouping!",
      "🔥 Pro Tip (Interview Trick Question): GROUP BY nulls? In SQL, all NULL values in the grouping column are clustered together into a single group! 🚀"
    ]
  },
  "SQL-007": {
    "code_id": "SQL-007",
    "numeric_id": 42,
    "title": "Product Categories with Highest Sales",
    "code": "SELECT category_name,\n       SUM(sales_amount) AS total_sales\nFROM sales\nGROUP BY category_name\nORDER BY total_sales DESC;",
    "timeComplexity": "O(N) (N = Number of Sales Records)",
    "spaceComplexity": "O(G) (G = Number of Product Categories)",
    "simplestExplanation": "GROUP BY partitions sales into distinct product categories. SUM(sales_amount) totals revenues in each category bucket, and ORDER BY total_sales DESC displays the highest revenue earners at the top.",
    "mentalModel": "Category Revenue Rollup: Sales Rows ──► Group by category_name ──► SUM(sales_amount) ──► Project category_name, total_sales ──► ORDER BY total_sales DESC",
    "lineByLine": [
      {
        "line": "SELECT category_name,",
        "explanation": "Retrieves the merchandise category name."
      },
      {
        "line": "SUM(sales_amount) AS total_sales",
        "explanation": "Adds up all sales amounts within each category and aliases the aggregated metric as total_sales."
      },
      {
        "line": "FROM sales",
        "explanation": "Reads transaction records from the sales table."
      },
      {
        "line": "GROUP BY category_name",
        "explanation": "Creates one group per unique product category."
      },
      {
        "line": "ORDER BY total_sales DESC;",
        "explanation": "Sorts the aggregated categories from highest total sales revenue down to lowest."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting GROUP BY: Without GROUP BY category_name, SUM() calculates a single total for the whole table.",
      "❌ 2. Using ASC Instead of DESC: Ascending sort lists the lowest grossing categories first.",
      "❌ 3. Misspelling SUM(): Typos like SMU(sales_amount) cause syntax parse errors.",
      "❌ 4. Using SUM() on Non-Numeric Columns: SUM(category_name) causes an invalid operand error.",
      "❌ 5. Sorting by Category Name Alphabetically: Omitting ORDER BY or sorting by category_name fails the leaderboard requirement."
    ],
    "keyTakeaway": "SUM() computes cumulative totals for numeric groups, and ORDER BY DESC sorts the aggregated results from highest to lowest.",
    "interviewPros": [
      "Q1. What does SUM() do? Adds all numeric values in a column or grouped partition.",
      "Q2. Does SUM() ignore NULL values? Yes, ANSI SQL SUM() ignores NULLs and does not count them as 0.",
      "Q3. What is the difference between COUNT() and SUM()? COUNT() counts the number of rows/items; SUM() adds the values inside numeric cells.",
      "Q4. Can SUM() be executed on VARCHAR or TEXT? No, SUM() strictly requires numeric types (INT, REAL, DECIMAL).",
      "Q5. Can we sort by the calculated alias in ORDER BY? Yes, ORDER BY evaluates after SELECT, so aliases like total_sales are fully accessible."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What does SUM() return if all rows in a group are NULL? (Answer: NULL)\n• What happens if the table is empty? (Answer: SUM() returns NULL, COUNT() returns 0)\n• Can you use COALESCE(SUM(sales_amount), 0) to prevent NULL returns?\n• How does hash aggregation compute SUM() in O(N) linear time?\n• What index optimizes GROUP BY category_name?",
      "⚡ Performance Notes:\n• A composite index on (category_name, sales_amount) allows an index-only scan.\n• In large columnar systems (BigQuery/ClickHouse/Snowflake), SUM() is vectorized with SIMD hardware instructions.",
      "🌍 Real-World Use Cases:\n• ✅ E-commerce GMV category leaderboards (Amazon, Flipkart)\n• ✅ Corporate financial revenue breakdowns by department\n• ✅ Point of sale (POS) daily merchandise reconciliation\n• ✅ Product catalog margin and profitability analysis",
      "🎓 Company Interview Tip: 'What is the result of SUM() on an empty table vs COUNT()?' ── SUM() returns NULL, whereas COUNT() returns 0!",
      "🔥 Pro Tip (Interview Trick Question): Need clean zeros instead of NULLs for missing sales? Wrap in COALESCE: COALESCE(SUM(sales_amount), 0)! 🚀"
    ]
  },
  "SQL-008": {
    "code_id": "SQL-008",
    "numeric_id": 43,
    "title": "Customers with More Than 5 Orders",
    "code": "SELECT customer_id,\n       customer_name,\n       COUNT(*) AS total_orders\nFROM orders\nGROUP BY customer_id, customer_name\nHAVING COUNT(*) > 5\nORDER BY total_orders DESC;",
    "timeComplexity": "O(N) (N = Number of Order Records)",
    "spaceComplexity": "O(G) (G = Number of Customers)",
    "simplestExplanation": "GROUP BY customer_id, customer_name groups orders per shopper. COUNT(*) tallies order totals, HAVING COUNT(*) > 5 filters for frequent buyers, and ORDER BY total_orders DESC ranks them from most active to least.",
    "mentalModel": "Shopper Loyalty Leaderboard: Order Records ──► Group by customer_id, customer_name ──► COUNT(*) Orders ──► HAVING COUNT(*) > 5 ──► Project ID, Name, total_orders ──► ORDER BY total_orders DESC",
    "lineByLine": [
      {
        "line": "SELECT customer_id,",
        "explanation": "Retrieves the customer's unique identifier."
      },
      {
        "line": "customer_name,",
        "explanation": "Retrieves the customer's full name."
      },
      {
        "line": "COUNT(*) AS total_orders",
        "explanation": "Counts total orders placed by each customer and aliases the calculated total as total_orders."
      },
      {
        "line": "FROM orders",
        "explanation": "Reads transactional records from the orders table."
      },
      {
        "line": "GROUP BY customer_id, customer_name",
        "explanation": "Groups records by both customer_id and customer_name to comply with ANSI SQL grouping rules."
      },
      {
        "line": "HAVING COUNT(*) > 5",
        "explanation": "Filters groups post-aggregation to retain only shoppers who placed strictly more than 5 orders."
      },
      {
        "line": "ORDER BY total_orders DESC;",
        "explanation": "Sorts qualifying customers from most active (highest order count) down to least."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using WHERE with COUNT(): WHERE COUNT(*) > 5 throws an error because WHERE runs before rows are grouped.",
      "❌ 2. Omitting customer_name from GROUP BY: Selecting customer_name without including it in GROUP BY violates ANSI SQL.",
      "❌ 3. Using ASC Instead of DESC: Ascending order displays customers with the fewest orders first.",
      "❌ 4. Using >= 5 Instead of Strict > 5: 'More than 5 orders' is strict inequality (> 5); using >= 5 includes shoppers with exactly 5 orders.",
      "❌ 5. Sorting by customer_id: Sorting by ID instead of total_orders fails the leaderboard requirement."
    ],
    "keyTakeaway": "Include all non-aggregated SELECT columns in GROUP BY, and use HAVING to filter aggregated metrics.",
    "interviewPros": [
      "Q1. Why GROUP BY two columns (customer_id and customer_name)? Because both are selected. Standard SQL requires every unaggregated column in SELECT to be present in GROUP BY.",
      "Q2. Can COUNT(*) be replaced with COUNT(order_id)? Yes, since order_id is a non-null Primary Key, both yield identical results.",
      "Q3. Why use HAVING instead of WHERE? COUNT(*) is an aggregate metric evaluated after grouping.",
      "Q4. Can ORDER BY use the alias total_orders? Yes, ORDER BY executes after SELECT, so column aliases are valid.",
      "Q5. Does GROUP BY automatically sort results? No, explicit ORDER BY is required to guarantee sorted results."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between GROUP BY customer_id vs GROUP BY customer_id, customer_name in SQL:1999 functional dependency?\n• Can you filter orders by status = 'Completed' before grouping?\n• What index strategy optimizes this query? (Index on (customer_id, customer_name))\n• How does the database handle customers who share the same name but different customer_ids?\n• What is the logical execution order of this query?",
      "⚡ Performance Notes:\n• A composite index on (customer_id, customer_name) enables an index-only scan.\n• Pre-filtering with WHERE status = 'Completed' eliminates non-qualifying rows before aggregation.",
      "🌍 Real-World Use Cases:\n• ✅ E-commerce VIP / loyalty club qualification (Amazon Prime, Flipkart Plus)\n• ✅ High-value repeat customer identification for marketing promos\n• ✅ Fraud / anomaly detection for unusually high order volumes\n• ✅ Customer retention and churn probability scoring",
      "🎓 Company Interview Tip: 'Why group by customer_name if customer_id is already unique?' ── In ANSI SQL-92, every non-aggregate SELECT column MUST be listed in GROUP BY! Even though customer_id determines customer_name, listing both ensures 100% database portability!",
      "🔥 Pro Tip (Interview Trick Question): If two different customers share the name 'John Smith' but have IDs 101 and 102, grouping by (customer_id, customer_name) keeps them correctly separated! 🚀"
    ]
  },
  "SQL-009": {
    "code_id": "SQL-009",
    "numeric_id": 44,
    "title": "Branches with Highest Profit",
    "code": "SELECT branch_name,\n       SUM(selling_price - cost_price) AS total_profit\nFROM sales\nGROUP BY branch_name\nORDER BY total_profit DESC;",
    "timeComplexity": "O(N) (N = Number of Sales Records)",
    "spaceComplexity": "O(G) (G = Number of Branches)",
    "simplestExplanation": "GROUP BY partitions sales by branch. For each sale, (selling_price - cost_price) computes margin profit, SUM() aggregates the profits into a branch total, and ORDER BY total_profit DESC ranks the most profitable branch first.",
    "mentalModel": "Branch Profitability Rollup: Transaction Rows ──► Calculate (SP - CP) per row ──► Group by branch_name ──► SUM(Profit) ──► Project branch_name, total_profit ──► ORDER BY total_profit DESC",
    "lineByLine": [
      {
        "line": "SELECT branch_name,",
        "explanation": "Retrieves the regional branch location name."
      },
      {
        "line": "SUM(selling_price - cost_price) AS total_profit",
        "explanation": "Calculates profit (selling price minus cost price) for each transaction row, sums across the branch, and aliases as total_profit."
      },
      {
        "line": "FROM sales",
        "explanation": "Reads transactional sales data from the sales table."
      },
      {
        "line": "GROUP BY branch_name",
        "explanation": "Clusters transaction records into individual branch partitions."
      },
      {
        "line": "ORDER BY total_profit DESC;",
        "explanation": "Sorts branches from highest total profit down to lowest."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Inverted Profit Formula: Writing SUM(cost_price - selling_price) calculates net loss instead of profit.",
      "❌ 2. Omitting SUM(): Selecting selling_price - cost_price without SUM() returns unaggregated row-level margins.",
      "❌ 3. Forgetting GROUP BY: Without GROUP BY branch_name, SUM() calculates a single company-wide total profit.",
      "❌ 4. Using ASC Instead of DESC: Ascending sort orders the least profitable branches first.",
      "❌ 5. Sorting by Raw Revenue: Sorting by SUM(selling_price) instead of total_profit ignores costs and ranks by gross sales rather than net profit."
    ],
    "keyTakeaway": "SUM() computes cumulative totals over mathematical expressions, and ORDER BY DESC highlights top-performing units.",
    "interviewPros": [
      "Q1. Can mathematical expressions be used inside SUM()? Yes, SQL allows arithmetic operations (addition, subtraction, multiplication, division) within aggregate functions.",
      "Q2. What is the difference between SUM(SP - CP) and SUM(SP) - SUM(CP)? Mathematically and logically they produce identical results. SUM(SP - CP) is typically preferred for clarity.",
      "Q3. How does SQL handle NULL in cost_price or selling_price? If either value is NULL, the expression (SP - CP) yields NULL, which SUM() then ignores. Wrap with COALESCE to treat NULLs as 0.",
      "Q4. Can ORDER BY use the alias total_profit? Yes, ORDER BY evaluates after SELECT, so column aliases are fully accessible.",
      "Q5. Can we add a filter for only profitable branches? Yes, by adding HAVING SUM(selling_price - cost_price) > 0 after GROUP BY."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What happens if cost_price is NULL for some sales? (How to handle: COALESCE(cost_price, 0))\n• How does the database optimize SUM(selling_price - cost_price)?\n• Can you calculate profit margin percentage: SUM(SP - CP) / SUM(SP) * 100?\n• What index optimizes GROUP BY branch_name queries?\n• What is the logical execution order of expression evaluation vs aggregation?",
      "⚡ Performance Notes:\n• A composite index on (branch_name, selling_price, cost_price) provides an index-only scan without touching heap tables.\n• Push-down predicates with WHERE (e.g. WHERE sale_date >= '2024-01-01') prune partitions before computing row margins.",
      "🌍 Real-World Use Cases:\n• ✅ Retail chain quarterly branch performance and P&L statements\n• ✅ Dealership franchise margin reviews and bonus allocations\n• ✅ E-commerce fulfillment center profitability dashboards\n• ✅ Product category contribution margin analysis",
      "🎓 Company Interview Tip: 'Is SUM(A - B) faster than SUM(A) - SUM(B)?' ── SUM(A - B) evaluates one subtraction per row and one aggregation accumulator, whereas SUM(A) - SUM(B) maintains two accumulators and subtracts once at the end. In modern engines both take O(N) time!",
      "🔥 Pro Tip (Interview Trick Question): If cost_price can be NULL, always write SUM(COALESCE(selling_price, 0) - COALESCE(cost_price, 0)) to avoid losing entire rows to NULL propagation! 🚀"
    ]
  },
  "SQL-010": {
    "code_id": "SQL-010",
    "numeric_id": 45,
    "title": "States with Highest Customers",
    "code": "SELECT state,\n       COUNT(*) AS total_customers\nFROM customers\nGROUP BY state\nORDER BY total_customers DESC;",
    "timeComplexity": "O(N) (N = Number of Customer Records)",
    "spaceComplexity": "O(G) (G = Number of States)",
    "simplestExplanation": "GROUP BY state aggregates individual customer records into state clusters. COUNT(*) computes the head count of customers per state, and ORDER BY total_customers DESC lists the most populous states first.",
    "mentalModel": "State Demographics Funnel: Customer Rows ──► Cluster by state ──► COUNT(*) customers ──► Project state, total_customers ──► ORDER BY total_customers DESC",
    "lineByLine": [
      {
        "line": "SELECT state,",
        "explanation": "Retrieves the state/province name."
      },
      {
        "line": "COUNT(*) AS total_customers",
        "explanation": "Counts all customer records within each state group and aliases the count as total_customers."
      },
      {
        "line": "FROM customers",
        "explanation": "Reads demographic customer records from the customers table."
      },
      {
        "line": "GROUP BY state",
        "explanation": "Partitions customer records into distinct groups based on state."
      },
      {
        "line": "ORDER BY total_customers DESC;",
        "explanation": "Sorts the aggregated states from highest customer count down to lowest."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting GROUP BY: Without GROUP BY state, COUNT(*) computes the total number of customers across all states and returns an arbitrary state.",
      "❌ 2. Using ASC Instead of DESC: Ascending sort lists the least populated customer states first.",
      "❌ 3. Misspelling COUNT(): Syntax typos like COUNTT(*) or CNUT(*) fail at parse time.",
      "❌ 4. Using COUNT(column) when NULLs exist: COUNT(column) skips NULL values; COUNT(*) counts all registered user records.",
      "❌ 5. Sorting by state Alphabetically: Omitting ORDER BY total_customers DESC fails the leaderboard requirement."
    ],
    "keyTakeaway": "GROUP BY state collapses customer rows by region, and COUNT(*) combined with ORDER BY DESC creates clean geographical distribution rankings.",
    "interviewPros": [
      "Q1. What does COUNT(*) count? Counts every row in each group, regardless of whether individual columns contain NULL.",
      "Q2. Why is GROUP BY state required? Because we want the count calculated separately for each geographic territory.",
      "Q3. Can ORDER BY use the alias total_customers? Yes, ORDER BY executes after SELECT, so column aliases are valid.",
      "Q4. Does GROUP BY automatically sort results? No, relational databases do not guarantee sort order without an explicit ORDER BY clause.",
      "Q5. Can COUNT(customer_id) replace COUNT(*)? Yes, because customer_id is a non-null Primary Key, both yield identical counts."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What does COUNT(*) do if state contains NULL values? (Answer: NULL states form their own single group)\n• How do you filter out NULL states before grouping? (Answer: WHERE state IS NOT NULL)\n• What index optimizes GROUP BY state? (Answer: B-Tree index on customers(state))\n• How does hash aggregation vs sort aggregation work for GROUP BY state?\n• Can you filter for states with more than 100 customers? (Answer: HAVING COUNT(*) > 100)",
      "⚡ Performance Notes:\n• A single-column index on customers(state) enables the query optimizer to perform a loose index scan or stream aggregation without memory sorting.\n• Adding WHERE state IS NOT NULL eliminates unwanted missing values before hashing.",
      "🌍 Real-World Use Cases:\n• ✅ E-commerce logistics hub and delivery center planning (Amazon, Flipkart)\n• ✅ Targeted state-level marketing and advertising budget allocation\n• ✅ Legislative and regional sales tax compliance tracking\n• ✅ Customer geographic demographic heatmaps",
      "🎓 Company Interview Tip: 'Does COUNT(*) include rows where state is NULL?' ── YES! If some customers don't have a state listed, SQL groups them under a NULL group with their corresponding count!",
      "🔥 Pro Tip (Interview Trick Question): If you want to exclude unregistered or foreign users without states, always add WHERE state IS NOT NULL before GROUP BY! 🚀"
    ]
  },
  "SQL-011": {
    "code_id": "SQL-011",
    "numeric_id": 46,
    "title": "Monthly Sales Summary",
    "code": "SELECT MONTH(order_date) AS month,\n       COUNT(*) AS total_orders,\n       SUM(total_amount) AS total_sales\nFROM orders\nGROUP BY MONTH(order_date)\nORDER BY month;",
    "timeComplexity": "O(N) (N = Number of Sales Records)",
    "spaceComplexity": "O(G) (G = Number of Months <= 12)",
    "simplestExplanation": "MONTH(order_date) extracts the integer month (1-12) from each order date. GROUP BY aggregates transactions into monthly buckets, computing total order volume via COUNT(*) and gross revenue via SUM(total_amount), sorted chronologically by month.",
    "mentalModel": "Temporal Aggregation Funnel: Order Records ──► Extract MONTH(order_date) ──► GROUP BY month ──► COUNT(*) & SUM(total_amount) ──► ORDER BY month ASC",
    "lineByLine": [
      {
        "line": "SELECT MONTH(order_date) AS month,",
        "explanation": "Extracts the month number (1–12) from order_date and aliases the calculated column as month."
      },
      {
        "line": "COUNT(*) AS total_orders,",
        "explanation": "Counts the total number of orders placed in each month."
      },
      {
        "line": "SUM(total_amount) AS total_sales",
        "explanation": "Calculates the total revenue from all orders completed within that month."
      },
      {
        "line": "FROM orders",
        "explanation": "Reads transactional sales and order records from the orders table."
      },
      {
        "line": "GROUP BY MONTH(order_date)",
        "explanation": "Partitions order records into distinct groups based on the extracted month."
      },
      {
        "line": "ORDER BY month;",
        "explanation": "Sorts the monthly summaries chronologically from January (1) through December (12)."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting GROUP BY: Omitting GROUP BY collapses all orders across all months into a single summary row.",
      "❌ 2. Sorting by total_sales instead of month: The requirement asks for chronological sorting (ORDER BY month), not sales volume ranking.",
      "❌ 3. Forgetting SUM(total_amount): Leaving out SUM() shows order count but fails the total revenue requirement.",
      "❌ 4. Applying MONTH() to Non-Date Columns: Passing string or numerical non-date columns to MONTH() causes runtime or parsing errors.",
      "❌ 5. Multi-Year Blind Spot: If data spans multiple years (e.g., 2024 and 2025), MONTH() merges January 2024 and January 2025 together. In multi-year scenarios, group by YEAR(order_date), MONTH(order_date)."
    ],
    "keyTakeaway": "Date-part functions like MONTH() or EXTRACT(MONTH FROM date) enable granular temporal grouping for financial reporting and time-series analytics.",
    "interviewPros": [
      "Q1. What does MONTH() return? Returns the integer month number ranging from 1 to 12.",
      "Q2. Can MONTH() be used inside GROUP BY? Yes, function calls on columns can be used directly in GROUP BY expressions.",
      "Q3. What is the ANSI SQL standard equivalent? EXTRACT(MONTH FROM order_date) is the ANSI SQL standard supported across PostgreSQL, Oracle, and Snowflake.",
      "Q4. Can multiple aggregate functions be used together? Yes, SQL allows combining COUNT(*), SUM(), AVG(), MIN(), and MAX() within a single query.",
      "Q5. Can MONTH() return the name of the month? No, MONTH() returns numbers (1–12). For names, MySQL uses MONTHNAME() or DATE_FORMAT(date, '%M')."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What happens when order data spans multiple calendar years? (Answer: Group by YEAR(order_date), MONTH(order_date))\n• How does the database index optimize GROUP BY on a function? (Answer: Function-based index on MONTH(order_date))\n• What is the difference between MONTH() and EXTRACT(MONTH FROM col)?\n• How do you include months with zero orders? (Answer: Generate month series via recursive CTE or calendar dimension table with LEFT JOIN)\n• What is the logical execution order of date extraction and aggregation?",
      "⚡ Performance Notes:\n• Regular B-Tree indexes on order_date cannot be directly used for GROUP BY MONTH(order_date); creating a functional/computed index on (MONTH(order_date)) or storing a generated column avoids full table scans.\n• Date truncation functions like DATE_TRUNC('month', order_date) in PostgreSQL retain year and month together.",
      "🌍 Real-World Use Cases:\n• ✅ E-commerce seasonal holiday sales trend analysis (Black Friday, Diwali, Christmas)\n• ✅ Financial quarter-over-quarter and month-over-month executive reporting\n• ✅ Inventory restocking and warehouse staffing forecasting\n• ✅ SaaS monthly recurring revenue (MRR) tracking dashboards",
      "🎓 Company Interview Tip: 'What happens if there are orders from Jan 2024 and Jan 2025?' ── Mentioning this demonstrates senior-level awareness! Point out that for single-year datasets GROUP BY MONTH() works, but in production multi-year systems you should group by (YEAR, MONTH) or use DATE_FORMAT / DATE_TRUNC! 🚀",
      "🔥 Pro Tip (Interview Trick Question): To display all 12 calendar months even if some months had zero orders, use a calendar table or CTE with a LEFT JOIN to orders! 🚀"
    ]
  },
  "SQL-012": {
    "code_id": "SQL-012",
    "numeric_id": 47,
    "title": "Yearly Sales Summary",
    "code": "SELECT YEAR(order_date) AS year,\n       COUNT(*) AS total_orders,\n       SUM(total_amount) AS total_sales\nFROM orders\nGROUP BY YEAR(order_date)\nORDER BY year;",
    "timeComplexity": "O(N) (N = Number of Sales Records)",
    "spaceComplexity": "O(G) (G = Number of Unique Years)",
    "simplestExplanation": "YEAR(order_date) extracts the calendar year (e.g. 2023, 2024, 2025) from each order date. GROUP BY aggregates records by year, tallying total order count via COUNT(*) and calculating annual gross revenue via SUM(total_amount), ordered chronologically by year.",
    "mentalModel": "Annual Macro Aggregation: Order Records ──► Extract YEAR(order_date) ──► GROUP BY year ──► COUNT(*) & SUM(total_amount) ──► ORDER BY year ASC",
    "lineByLine": [
      {
        "line": "SELECT YEAR(order_date) AS year,",
        "explanation": "Extracts the 4-digit calendar year from order_date and aliases the calculated column as year."
      },
      {
        "line": "COUNT(*) AS total_orders,",
        "explanation": "Counts how many total orders were completed within each calendar year."
      },
      {
        "line": "SUM(total_amount) AS total_sales",
        "explanation": "Calculates total cumulative sales revenue generated during that year."
      },
      {
        "line": "FROM orders",
        "explanation": "Reads transactional sales and order records from the orders table."
      },
      {
        "line": "GROUP BY YEAR(order_date)",
        "explanation": "Partitions order records into annual cohorts based on the extracted year."
      },
      {
        "line": "ORDER BY year;",
        "explanation": "Displays yearly reports chronologically from the earliest year to the latest."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting GROUP BY: Without GROUP BY, the query collapses all years into a single row with overall company totals and an arbitrary year.",
      "❌ 2. Using MONTH() instead of YEAR(): Using MONTH() groups by calendar month rather than annual cohorts.",
      "❌ 3. Sorting by total_sales instead of year: The requirement asks for chronological sorting (ORDER BY year), not a revenue leaderboard.",
      "❌ 4. Applying YEAR() to non-date columns: Passing text or integer customer names/IDs causes errors or NULL results.",
      "❌ 5. Missing SUM() aggregator: Only counting orders fails the total_sales revenue requirement."
    ],
    "keyTakeaway": "YEAR() (or ANSI EXTRACT(YEAR FROM date)) provides high-level macro temporal rollups essential for year-over-year (YoY) revenue tracking.",
    "interviewPros": [
      "Q1. What does YEAR() return? Returns the 4-digit integer calendar year (e.g., 2023, 2024, 2025).",
      "Q2. Can YEAR() be used inside GROUP BY and ORDER BY? Yes, function expressions can be used in GROUP BY and referenced by alias in ORDER BY.",
      "Q3. What is the ANSI SQL alternative? EXTRACT(YEAR FROM order_date) is the ANSI SQL standard supported across PostgreSQL, Oracle, Snowflake, and BigQuery.",
      "Q4. Can multiple aggregate functions be evaluated simultaneously? Yes, SQL processes COUNT(*), SUM(), AVG(), MIN(), and MAX() in a single table pass.",
      "Q5. How do you calculate Year-over-Year (YoY) growth? Use the LAG() window function: LAG(total_sales) OVER (ORDER BY year) to compare against previous year."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• How do you calculate YoY Growth Percentage? (Answer: (total_sales - LAG(total_sales) OVER (ORDER BY year)) / LAG(total_sales) OVER (ORDER BY year) * 100)\n• What happens if a year had zero sales? (Answer: Use a calendar table or generate_series with LEFT JOIN to show 0 values)\n• How does the optimizer handle GROUP BY YEAR(order_date)? (Answer: Scans table or uses functional index on YEAR(order_date))\n• What is the difference between YEAR() and EXTRACT(YEAR FROM col)?\n• Can you group by both YEAR and QUARTER? (Answer: GROUP BY YEAR(order_date), QUARTER(order_date))",
      "⚡ Performance Notes:\n• Regular B-Tree indexes on order_date require full table scans for function calls unless a function-based index (e.g. on YEAR(order_date)) or virtual generated column is indexed.\n• For massive partitioned tables, partition pruning on date ranges (WHERE order_date >= '2023-01-01') speeds up aggregation significantly.",
      "🌍 Real-World Use Cases:\n• ✅ Annual SEC 10-K financial reports and corporate tax filings\n• ✅ Year-over-year (YoY) revenue growth and executive board dashboards\n• ✅ Long-term capital budgeting and warehouse infrastructure scaling\n• ✅ Multi-year customer lifetime value (LTV) cohort analysis",
      "🎓 Company Interview Tip: 'How would you calculate YoY revenue growth in this query?' ── Proactively mention using a CTE or subquery with the LAG() window function: LAG(SUM(total_amount)) OVER (ORDER BY YEAR(order_date)) to demonstrate advanced SQL competency! 🚀",
      "🔥 Pro Tip (Interview Trick Question): If asked to handle gap years where no orders occurred, always suggest a calendar dimension table with a LEFT JOIN to guarantee zero-fill years! 🚀"
    ]
  },
  "SQL-013": {
    "code_id": "SQL-013",
    "numeric_id": 48,
    "title": "Products Sold More Than 100 Times",
    "code": "SELECT product_id,\n       product_name,\n       SUM(quantity) AS total_quantity\nFROM sales\nGROUP BY product_id, product_name\nHAVING SUM(quantity) > 100\nORDER BY total_quantity DESC;",
    "timeComplexity": "O(N) (N = Number of Sales Records)",
    "spaceComplexity": "O(G) (G = Number of Products)",
    "simplestExplanation": "GROUP BY product_id, product_name consolidates transaction rows into distinct product buckets. SUM(quantity) totals the units sold, HAVING SUM(quantity) > 100 filters out low-volume products after grouping, and ORDER BY total_quantity DESC sorts the top sellers first.",
    "mentalModel": "Post-Aggregation Filtering Funnel: Sales Records ──► GROUP BY product ──► SUM(quantity) ──► HAVING SUM > 100 ──► Project product & total_quantity ──► ORDER BY total_quantity DESC",
    "lineByLine": [
      {
        "line": "SELECT product_id,",
        "explanation": "Retrieves the unique identifier of the product."
      },
      {
        "line": "product_name,",
        "explanation": "Retrieves the human-readable product name."
      },
      {
        "line": "SUM(quantity) AS total_quantity",
        "explanation": "Calculates the total aggregate quantity sold and aliases as total_quantity."
      },
      {
        "line": "FROM sales",
        "explanation": "Reads transactional order items from the sales table."
      },
      {
        "line": "GROUP BY product_id, product_name",
        "explanation": "Groups all transaction rows belonging to the same product."
      },
      {
        "line": "HAVING SUM(quantity) > 100",
        "explanation": "Filters the grouped results to retain only products whose aggregate quantity strictly exceeds 100 units."
      },
      {
        "line": "ORDER BY total_quantity DESC;",
        "explanation": "Sorts the qualifying products in descending order of total units sold."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using WHERE Instead of HAVING: Writing WHERE SUM(quantity) > 100 causes a SQL syntax error because WHERE cannot evaluate aggregate functions.",
      "❌ 2. Using COUNT() Instead of SUM(): COUNT(quantity) counts the number of sales transactions (rows), whereas SUM(quantity) adds up the actual units sold.",
      "❌ 3. Forgetting GROUP BY: Omitting GROUP BY collapses all rows into a single product with an arbitrary product_id and grand total.",
      "❌ 4. Sorting in ASC Order: Writing ORDER BY total_quantity ASC (or omitting DESC) puts least-sold products first instead of the best-sellers.",
      "❌ 5. Relying on Aliases in HAVING: While MySQL allows HAVING total_quantity > 100, PostgreSQL, Oracle, and SQL Server reject aliases in HAVING; always repeat HAVING SUM(quantity) > 100 for portable code."
    ],
    "keyTakeaway": "WHERE filters raw individual records BEFORE grouping; HAVING filters aggregated groups AFTER GROUP BY calculations.",
    "interviewPros": [
      "Q1. Why is SUM(quantity) used instead of COUNT(*)? SUM adds up unit numbers (e.g. 20 + 30 = 50), whereas COUNT merely counts how many order lines exist.",
      "Q2. Why is HAVING required here instead of WHERE? Because the condition > 100 applies to the aggregated total, which only exists after groups are computed.",
      "Q3. Why group by both product_id and product_name? In ANSI SQL, non-aggregated columns in SELECT must appear in the GROUP BY clause (unless functionally dependent on the Primary Key).",
      "Q4. Can ORDER BY use the alias total_quantity? Yes, ORDER BY evaluates after SELECT, so aliases defined in SELECT are fully accessible.",
      "Q5. Can HAVING filter on conditions without aggregate functions? Yes, but standard practice delegates non-aggregate row filters to WHERE for earlier row elimination."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the exact execution difference between WHERE and HAVING?\n• Can you use HAVING without GROUP BY? (Answer: Yes, it evaluates over the entire table treated as a single group)\n• Why is Method 1 (HAVING SUM(quantity) > 100) preferred over Method 2 (HAVING total_quantity > 100)? (Answer: ANSI SQL compliance and portability across PostgreSQL/Oracle)\n• How does the database engine optimize this query? (Answer: Composite index on sales(product_id, quantity) enables index-only scan)\n• What happens if quantity contains NULL values? (Answer: SUM() automatically ignores NULLs)",
      "⚡ Performance Notes:\n• A composite index on sales(product_id, product_name, quantity) allows index-only covering scans, completely bypassing table heap fetches.\n• Combining a WHERE clause (e.g. WHERE sale_date >= '2025-01-01') before GROUP BY reduces intermediate hash table memory consumption.",
      "🌍 Real-World Use Cases:\n• ✅ E-commerce best-seller badges and automated featured product placement (Amazon, Flipkart)\n• ✅ Procurement restocking and safety stock thresholds in enterprise ERPs (SAP, Oracle NetSuite)\n• ✅ High-volume bulk sales rebates and vendor tier discounts\n• ✅ Warehousing picking slot optimization based on product velocity",
      "🎓 Company Interview Tip: 'Why can't we use WHERE SUM(quantity) > 100?' ── Explain the relational algebra lifecycle: WHERE operates on base tuples before partitioning; aggregates don't exist yet! HAVING operates on post-grouped relational sets! 🚀",
      "🔥 Pro Tip (Interview Trick Question): If asked whether to filter out deleted/cancelled orders, add WHERE status = 'Completed' before GROUP BY so that invalid orders are pruned before aggregation! 🚀"
    ]
  },
  "SQL-014": {
    "code_id": "SQL-014",
    "numeric_id": 49,
    "title": "Average Age by City",
    "code": "SELECT city,\n       ROUND(AVG(age), 2) AS average_age\nFROM customers\nGROUP BY city\nORDER BY city;",
    "timeComplexity": "O(N) (N = Number of Customer Records)",
    "spaceComplexity": "O(G) (G = Number of Unique Cities)",
    "simplestExplanation": "GROUP BY city partitions customers into city groups. AVG(age) calculates the arithmetic mean age of each city's residents (automatically skipping NULLs), ROUND(..., 2) limits precision to 2 decimal places, and ORDER BY city displays the cities alphabetically.",
    "mentalModel": "Geographic Demographic Averaging: Customers ──► Partition by city ──► Calculate AVG(age) ──► ROUND(..., 2) ──► Project city & average_age ──► ORDER BY city ASC",
    "lineByLine": [
      {
        "line": "SELECT city,",
        "explanation": "Retrieves the geographic city name for each group."
      },
      {
        "line": "ROUND(AVG(age), 2) AS average_age",
        "explanation": "Calculates the arithmetic mean customer age for the city and rounds to 2 decimal places, aliasing as average_age."
      },
      {
        "line": "FROM customers",
        "explanation": "Scans customer demographic records from the customers table."
      },
      {
        "line": "GROUP BY city",
        "explanation": "Clusters customer records into discrete groups based on city."
      },
      {
        "line": "ORDER BY city;",
        "explanation": "Sorts the city groups in alphabetical order (A to Z)."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Forgetting GROUP BY: Without GROUP BY, the query collapses all customers into a single row with overall average age and an arbitrary city.",
      "❌ 2. Forgetting ROUND(..., 2): Omitting ROUND() produces raw floating-point numbers with many decimal places (e.g. 33.333333333333336) that fail UI/grading requirements.",
      "❌ 3. Using COUNT() Instead of AVG(): Writing COUNT(age) counts how many customers have an age recorded instead of calculating their average age.",
      "❌ 4. Sorting by average_age Instead of city: The requirement specifies sorting alphabetically by city (ORDER BY city), not ranking by age (ORDER BY average_age).",
      "❌ 5. Integer Division in Some Databases: In SQL Server or older SQLite versions, AVG() on integer columns might perform integer truncation unless cast (e.g. AVG(CAST(age AS FLOAT))); in modern engines and MySQL, AVG() automatically casts to floating point."
    ],
    "keyTakeaway": "AVG() calculates the arithmetic mean while automatically ignoring NULL values, and ROUND() formats precision for clean executive reporting.",
    "interviewPros": [
      "Q1. What does AVG(age) return? The arithmetic mean (sum of ages divided by count of non-NULL ages).",
      "Q2. Does AVG() include NULL values in its denominator? No. AVG() ignores NULLs; it divides only by the count of non-NULL values: SUM(age) / COUNT(age).",
      "Q3. Why use ROUND(AVG(age), 2)? Floating-point arithmetic produces long recurring decimals (e.g. 28.6666...); ROUND guarantees standardized currency/decimal presentation.",
      "Q4. Can AVG() be used without GROUP BY? Yes, executing SELECT ROUND(AVG(age), 2) FROM customers computes the average age across the entire user base.",
      "Q5. Can WHERE and HAVING both be used with AVG()? Yes! WHERE age >= 18 filters adult records before averaging; HAVING AVG(age) > 30 filters cities whose average age exceeds 30."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between COUNT(age) and COUNT(*)? (Answer: COUNT(age) ignores NULLs, COUNT(*) counts all rows)\n• How does AVG() treat NULL vs 0? (Answer: NULL is completely ignored in numerator and denominator; 0 is included as a valid data point and pulls down the average)\n• How do you handle integer division truncation in databases like SQL Server? (Answer: CAST(age AS DECIMAL(10,2)) or 1.0 * age)\n• How does the optimizer execute GROUP BY city? (Answer: Hash Aggregate or Stream/Sort Aggregate with B-Tree index on city)\n• How would you find the city with the highest average age? (Answer: ORDER BY average_age DESC LIMIT 1)",
      "⚡ Performance Notes:\n• A composite index on customers(city, age) enables a Covering Index Scan / Loose Index Scan, avoiding table heap reads entirely.\n• Filtering out unpopulated cities early with WHERE city IS NOT NULL prevents empty city groups.",
      "🌍 Real-World Use Cases:\n• ✅ Targeted regional marketing and demographic cohort analysis (Gen Z vs Millennials vs Boomers)\n• ✅ Health insurance and life insurance actuarial risk pricing by geographic territory\n• ✅ Real estate and urban planning municipal demographic heatmaps\n• ✅ Regional advertising budget allocation and localized promotions",
      "🎓 Company Interview Tip: 'Does AVG() count NULLs?' ── Emphasize that AVG() calculates SUM(col) / COUNT(col), NOT SUM(col) / COUNT(*)! Demonstrating this exact distinction is a classic senior interview differentiator! 🚀",
      "🔥 Pro Tip (Interview Trick Question): If asked to treat NULL ages as 0, use COALESCE(age, 0) inside AVG(): AVG(COALESCE(age, 0))! 🚀"
    ]
  },
  "SQL-015": {
    "code_id": "SQL-015",
    "numeric_id": 50,
    "title": "Highest Salary Department",
    "code": "SELECT department_name,\n       ROUND(AVG(salary), 2) AS average_salary\nFROM employees\nGROUP BY department_name\nORDER BY average_salary DESC\nLIMIT 1;",
    "timeComplexity": "O(N + G log G) (N = Number of Employees, G = Number of Departments)",
    "spaceComplexity": "O(G) (G = Unique Departments)",
    "simplestExplanation": "GROUP BY department_name aggregates employee salaries into departmental groups. AVG(salary) computes each department's mean compensation, ROUND(..., 2) rounds to 2 decimal places, ORDER BY average_salary DESC ranks the departments from richest to lowest, and LIMIT 1 isolates the single highest-paying department.",
    "mentalModel": "Departmental Salary Leaderboard: Employees ──► GROUP BY department ──► Calculate AVG(salary) ──► ROUND(..., 2) ──► ORDER BY average_salary DESC ──► LIMIT 1",
    "lineByLine": [
      {
        "line": "SELECT department_name,",
        "explanation": "Selects the operational department name."
      },
      {
        "line": "ROUND(AVG(salary), 2) AS average_salary",
        "explanation": "Computes the arithmetic mean salary of all employees in each department, rounds to 2 decimals, and aliases as average_salary."
      },
      {
        "line": "FROM employees",
        "explanation": "Scans employee payroll records from the employees table."
      },
      {
        "line": "GROUP BY department_name",
        "explanation": "Clusters employees into discrete departmental partitions."
      },
      {
        "line": "ORDER BY average_salary DESC",
        "explanation": "Sorts the aggregated department records in descending order of average salary so the highest compensation package is at the top."
      },
      {
        "line": "LIMIT 1;",
        "explanation": "Truncates the result set to return solely the first row (the highest-paying department)."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using MAX(salary) Instead of AVG(salary): MAX(salary) finds the single richest employee across departments, NOT the department with the highest average salary.",
      "❌ 2. Forgetting GROUP BY: Without GROUP BY, the query collapses all company employees into one row with overall average salary and an arbitrary department name.",
      "❌ 3. Using ASC Instead of DESC: ORDER BY average_salary ASC (or omitting DESC) puts the lowest-paying department first, giving the exact opposite result.",
      "❌ 4. Forgetting LIMIT 1: Omitting LIMIT 1 returns all departments ordered by salary instead of solely the highest-paying department.",
      "❌ 5. Relying on LIMIT in ANSI Databases: Oracle, DB2, and pure ANSI SQL use FETCH FIRST 1 ROW ONLY instead of LIMIT 1; keep dialect differences in mind during interviews."
    ],
    "keyTakeaway": "AVG() measures collective cohort compensation, while ORDER BY DESC + LIMIT 1 selects the top-ranking aggregated bucket.",
    "interviewPros": [
      "Q1. Why is AVG(salary) used instead of MAX(salary)? AVG computes group compensation density, whereas MAX only reflects one outlier superstar individual.",
      "Q2. Why is ORDER BY DESC needed before LIMIT 1? Without sorting in descending order, LIMIT 1 would return an arbitrary department or the lowest-paying one.",
      "Q3. How does this handle ties? If two departments tie for highest average salary, LIMIT 1 deterministically picks one; to include all tied departments, use DENSE_RANK() or RANK() OVER (ORDER BY average_salary DESC).",
      "Q4. Can ORDER BY reference the column alias average_salary? Yes, in ANSI SQL and modern engines, ORDER BY evaluates after SELECT, so aliases defined in SELECT are fully accessible.",
      "Q5. What is the ANSI SQL standard equivalent of LIMIT 1? FETCH FIRST 1 ROW ONLY (supported in PostgreSQL 8.4+, Oracle 12c+, SQL Server via TOP 1)."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What happens if two departments have the exact same highest average salary? (Answer: LIMIT 1 returns only one arbitrary department; use a CTE with DENSE_RANK() = 1 to return all tied departments)\n• How does the database engine optimize this query? (Answer: Composite index on employees(department_name, salary) allows an Index-Only Scan with Loose Index aggregation)\n• Can you write this query using a Window Function or Subquery instead of LIMIT 1?\n• What is the difference between LIMIT 1 and WHERE ROWNUM = 1 (Oracle)?\n• Does AVG() count employees with NULL salary? (Answer: No, AVG ignores NULL salaries)",
      "⚡ Performance Notes:\n• A composite index on employees(department_name, salary) allows stream aggregation without reading data heap pages.\n• If the table is massive (millions of rows), the database maintains an in-memory priority queue / top-N heap sort to find the top 1 group without sorting all G departments.",
      "🌍 Real-World Use Cases:\n• ✅ Corporate compensation benchmarking and department bonus pool allocation\n• ✅ Sales region performance leaderboards and executive revenue rankings\n• ✅ University department grant and scholarship fund distribution\n• ✅ Cloud infrastructure cost center audits (identifying highest-spending engineering team)",
      "🎓 Company Interview Tip: 'How would you return ALL departments if there is a tie for 1st place?' ── Proactively mention using a CTE with DENSE_RANK(): WITH RankedDept AS (SELECT department_name, AVG(salary) as avg_sal, DENSE_RANK() OVER (ORDER BY AVG(salary) DESC) as rnk FROM employees GROUP BY department_name) SELECT department_name, avg_sal FROM RankedDept WHERE rnk = 1! 🚀",
      "🔥 Pro Tip (Interview Trick Question): If asked whether to filter out interns or part-time staff, add WHERE employment_type = 'Full-Time' before GROUP BY! 🚀"
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
    "title": "Average Marks Above 80",
    "code": "SELECT class_name,\n       ROUND(AVG(marks), 2) AS average_marks\nFROM students\nGROUP BY class_name\nHAVING AVG(marks) > 80\nORDER BY average_marks DESC;",
    "timeComplexity": "O(N) (N = Number of Students)",
    "spaceComplexity": "O(G) (G = Unique Classes)",
    "simplestExplanation": "GROUP BY class_name clusters students into classroom groups. AVG(marks) computes each classroom's average score, ROUND(..., 2) formats to 2 decimal places, HAVING AVG(marks) > 80 filters out any classroom with an average score of 80 or below, and ORDER BY average_marks DESC ranks top-performing classrooms first.",
    "mentalModel": "Classroom Performance Threshold Pipeline: Students ──► GROUP BY class_name ──► Calculate AVG(marks) ──► Filter HAVING AVG(marks) > 80 ──► ROUND(..., 2) ──► ORDER BY average_marks DESC",
    "lineByLine": [
      {
        "line": "SELECT class_name,",
        "explanation": "Selects the classroom identifier name column."
      },
      {
        "line": "ROUND(AVG(marks), 2) AS average_marks",
        "explanation": "Computes the arithmetic mean marks of students in each class, rounds to 2 decimal places, and aliases the metric as average_marks."
      },
      {
        "line": "FROM students",
        "explanation": "Scans student score records from the students table."
      },
      {
        "line": "GROUP BY class_name",
        "explanation": "Clusters individual student rows into discrete classroom groups."
      },
      {
        "line": "HAVING AVG(marks) > 80",
        "explanation": "Evaluates the aggregate class average and filters out any classroom group whose mean score is <= 80."
      },
      {
        "line": "ORDER BY average_marks DESC;",
        "explanation": "Sorts the qualifying classroom groups in descending order of average marks."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using WHERE with Aggregate Functions: Writing WHERE AVG(marks) > 80 causes a SQL syntax error because WHERE executes before GROUP BY aggregation.",
      "❌ 2. Writing WHERE marks > 80 Instead of HAVING: WHERE marks > 80 discards individual low-scoring students before calculating class averages, distorting true cohort means.",
      "❌ 3. Forgetting GROUP BY class_name: Omitting GROUP BY collapses the entire school into a single overall average row instead of per-class averages.",
      "❌ 4. Using COUNT() Instead of AVG(): Writing COUNT(marks) > 80 filters by class headcount rather than academic score average.",
      "❌ 5. Forgetting ORDER BY average_marks DESC: Omitting ORDER BY returns qualifying classrooms in non-deterministic database order."
    ],
    "keyTakeaway": "HAVING filters group aggregate calculations after GROUP BY, while WHERE filters raw table rows before grouping.",
    "interviewPros": [
      "Q1. Why is HAVING used instead of WHERE? Aggregate functions like AVG() cannot be evaluated in WHERE because WHERE executes before rows are grouped; HAVING evaluates after grouping.",
      "Q2. What is the execution order difference between WHERE and HAVING? WHERE runs first to filter raw input rows ──► GROUP BY creates groups ──► HAVING runs next to filter aggregated groups.",
      "Q3. How does WHERE marks > 80 distort results? WHERE marks > 80 drops low student scores before averaging, inflating class averages rather than testing true cohort performance.",
      "Q4. Does AVG() count NULL marks? No, AVG() excludes NULL values from both the numerator sum and denominator count.",
      "Q5. How can this query be rewritten using a CTE? WITH ClassAvg AS (SELECT class_name, ROUND(AVG(marks), 2) as average_marks FROM students GROUP BY class_name) SELECT * FROM ClassAvg WHERE average_marks > 80 ORDER BY average_marks DESC;"
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between WHERE and HAVING? (Answer: WHERE filters individual rows before GROUP BY; HAVING filters aggregate groups after GROUP BY)\n• Why can't you use column alias average_marks in HAVING? (Answer: HAVING evaluates before SELECT projection in ANSI SQL standard, though some engines like MySQL permit it)\n• How do you index this query? (Answer: A composite index on students(class_name, marks) enables Index-Only Scan)\n• How do you handle classes with ties in average marks? (Answer: Add a secondary tie-breaker like ORDER BY average_marks DESC, class_name ASC)",
      "⚡ Performance Notes:\n• A composite index on students(class_name, marks) allows Loose Index Scan for instant group aggregation and filtering.",
      "🌍 Real-World Use Cases:\n• ✅ Identifying academic honor roll classrooms and top-performing school departments\n• ✅ Corporate sales teams achieving average monthly quota targets above benchmark\n• ✅ Customer support teams maintaining average CSAT ratings above 4.5\n• ✅ Cloud servers maintaining average CPU utilization over threshold limits",
      "🎓 Company Interview Tip: 'Can HAVING be used without GROUP BY?' ── Yes! If omitted, HAVING treats the entire table as a single summary group! 🚀",
      "🔥 Pro Tip (Interview Trick Question): Remember that WHERE filters ROWS, HAVING filters GROUPS—mixing them up is the #1 mistake in intermediate SQL interviews! 🚀"
    ]
  },
  "SQL-018": {
    "code_id": "SQL-018",
    "numeric_id": 53,
    "title": "Groups Using Multiple Columns",
    "code": "SELECT department_name,\n       city,\n       COUNT(*) AS employee_count\nFROM employees\nGROUP BY department_name,\n         city\nORDER BY department_name,\n         city;",
    "timeComplexity": "O(N) (N = Number of Employees)",
    "spaceComplexity": "O(G) (G = Number of Department-City combinations)",
    "simplestExplanation": "GROUP BY department_name, city groups employee records by both department and city simultaneously. COUNT(*) counts the total headcount per unique department-city combination, and ORDER BY department_name, city sorts the result set alphabetically by department name first, then by city.",
    "mentalModel": "Multi-Column Grouping Matrix: Employees ──► GROUP BY department_name, city ──► Form Unique Pairs (e.g. HR+Delhi, HR+Mumbai, IT+Bangalore, IT+Delhi) ──► COUNT(*) ──► ORDER BY department_name, city",
    "lineByLine": [
      {
        "line": "SELECT department_name,",
        "explanation": "Selects the department name column."
      },
      {
        "line": "city,",
        "explanation": "Selects the office city location column."
      },
      {
        "line": "COUNT(*) AS employee_count",
        "explanation": "Counts the total number of employees belonging to each unique department-city combination and aliases the aggregate as employee_count."
      },
      {
        "line": "FROM employees",
        "explanation": "Scans all employee records from the employees table."
      },
      {
        "line": "GROUP BY department_name,",
        "explanation": "Specifies department_name as the primary grouping dimension."
      },
      {
        "line": "city",
        "explanation": "Specifies city as the secondary grouping dimension, creating composite (department_name, city) buckets."
      },
      {
        "line": "ORDER BY department_name,",
        "explanation": "Sorts the aggregated result rows alphabetically by department_name."
      },
      {
        "line": "city;",
        "explanation": "Sorts ties within each department alphabetically by city name."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Selecting Non-Grouped Unaggregated Columns: Selecting a column like first_name without including it in GROUP BY or wrapping it in an aggregate function causes a SQL syntax error in strict SQL modes.",
      "❌ 2. Confusing WHERE with GROUP BY: WHERE filters individual rows before grouping occurs; GROUP BY creates aggregate buckets across multiple column values.",
      "❌ 3. Forgetting COUNT(*): Omitting the aggregate function returns unique composite keys (like DISTINCT) without computing headcount.",
      "❌ 4. Forgetting ORDER BY: Omitting ORDER BY produces non-deterministic row ordering in the output table.",
      "❌ 5. Misunderstanding Column Order in GROUP BY: GROUP BY department_name, city produces the exact same aggregate buckets as GROUP BY city, department_name, but column order in SELECT dictates presentation."
    ],
    "keyTakeaway": "GROUP BY col1, col2 partitions data into buckets for every unique combination of values across col1 and col2.",
    "interviewPros": [
      "Q1. Can GROUP BY accept multiple columns? Yes, GROUP BY can take any number of columns to create multi-dimensional composite aggregate groups.",
      "Q2. How are groups formed when grouping by two columns? One group is created for every unique combination of values present in (column1, column2).",
      "Q3. What happens if a selected column is omitted from GROUP BY? Modern ANSI SQL database engines throw an error (e.g. Expression not in GROUP BY key) unless an aggregate function like MAX() or MIN() is used.",
      "Q4. Can ORDER BY sort by multiple columns? Yes, ORDER BY department_name, city sorts by department_name first, then resolves ties using city.",
      "Q5. Can we use column positions in GROUP BY? Yes, GROUP BY 1, 2 works in MySQL and PostgreSQL, but writing explicit column names is best practice in production and interviews."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between single-column and multi-column GROUP BY? (Answer: Single-column collapses rows by 1 attribute; multi-column collapses rows by composite unique pairs)\n• How does the database engine execute multi-column GROUP BY? (Answer: Hash Aggregate or Sort/Group Aggregate using composite hash key (col1, col2))\n• What index optimizes GROUP BY department_name, city? (Answer: A composite index on employees(department_name, city))\n• What happens if city contains NULL values? (Answer: All NULL cities within a department are clustered into a single (department, NULL) group)",
      "⚡ Performance Notes:\n• A composite index on employees(department_name, city) allows Index-Only Scan with Loose Index aggregation, eliminating heap table reads.",
      "🌍 Real-World Use Cases:\n• ✅ Headcount reporting by department and branch city location\n• ✅ Sales volume breakdown by product category and geographic region\n• ✅ Order counts by customer tier and order year\n• ✅ Website traffic metrics by device type and browser",
      "🎓 Company Interview Tip: 'How do you group by 3 or more dimensions?' ── Demonstrate that GROUP BY department_name, city, gender works seamlessly for 3D analytical breakdowns! 🚀",
      "🔥 Pro Tip (Interview Trick Question): If asked whether column order in GROUP BY changes the resulting counts, answer NO—the total counts per pair remain identical regardless of column sequence in GROUP BY! 🚀"
    ]
  },
  "SQL-019": {
      "code_id": "SQL-019",
      "numeric_id": 54,
      "title": "HAVING with COUNT()",
      "code": "SELECT category_name,\n       COUNT(*) AS product_count\nFROM products\nGROUP BY category_name\nHAVING COUNT(*) >= 10\nORDER BY product_count DESC;",
      "timeComplexity": "O(N) (N = Number of Product Records)",
      "spaceComplexity": "O(G) (G = Number of Categories)",
      "simplestExplanation": "Groups products by category_name, calculates the total count of products in each category using COUNT(*), filters out categories having fewer than 10 products using HAVING COUNT(*) >= 10, and orders the qualifying categories from highest product count to lowest.",
      "mentalModel": "Products \u2500\u2500\u25ba GROUP BY category_name \u2500\u2500\u25ba COUNT(*) per Category \u2500\u2500\u25ba HAVING COUNT(*) >= 10 \u2500\u2500\u25ba SELECT category_name, product_count \u2500\u2500\u25ba ORDER BY product_count DESC",
      "lineByLine": [
          {
              "line": "SELECT category_name,",
              "explanation": "Displays the category name."
          },
          {
              "line": "COUNT(*) AS product_count",
              "explanation": "Counts all products inside each category group and aliases the count as product_count."
          },
          {
              "line": "FROM products",
              "explanation": "Reads all product records from the products table."
          },
          {
              "line": "GROUP BY category_name",
              "explanation": "Groups products belonging to the same category together."
          },
          {
              "line": "HAVING COUNT(*) >= 10",
              "explanation": "Filters aggregated groups, keeping only categories that contain 10 or more products."
          },
          {
              "line": "ORDER BY product_count DESC;",
              "explanation": "Sorts output descending so categories with the most products appear first."
          }
      ],
      "beginnerTraps": [
          "\u274c 1. Using WHERE with COUNT(): WHERE COUNT(*) >= 10 causes an error because WHERE runs before grouping and cannot evaluate aggregate functions.",
          "\u274c 2. Forgetting GROUP BY: Attempting to select category_name with COUNT(*) without GROUP BY category_name throws an expression not in GROUP BY error.",
          "\u274c 3. Using COUNT(column_name) when NULLs exist: COUNT(column_name) ignores NULL values, whereas COUNT(*) counts every row.",
          "\u274c 4. Forgetting ORDER BY: Missing ORDER BY product_count DESC produces unranked, non-deterministic output."
      ],
      "keyTakeaway": "HAVING filters groups after aggregation (e.g. COUNT(*) >= 10), whereas WHERE filters individual rows before grouping occurs.",
      "interviewPros": [
          "Q1. Why use HAVING instead of WHERE? Because HAVING filters grouped data after aggregation, whereas WHERE cannot evaluate aggregate functions.",
          "Q2. Can HAVING use COUNT()? Yes, HAVING COUNT(*) >= N is one of the most common SQL interview patterns.",
          "Q3. What does COUNT(*) count? Every row in the group, including rows containing NULLs in other columns.",
          "Q4. What is the difference between COUNT(*) and COUNT(col)? COUNT(*) counts all rows; COUNT(col) ignores NULLs in that specific column.",
          "Q5. Can ORDER BY use aliases? Yes, ORDER BY product_count DESC works because ORDER BY executes after SELECT in logical query processing."
      ],
      "interviewCons": [
          "\u2b50 Questions Interviewers Will Ask:\n\u2022 What is the logical execution order of HAVING vs WHERE? (Answer: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY)\n\u2022 Can you use both WHERE and HAVING in the same query? (Answer: Yes, WHERE filters base rows first, then GROUP BY groups, then HAVING filters groups)\n\u2022 Can HAVING use column aliases? (Answer: Standard ANSI SQL requires the aggregate function e.g. HAVING COUNT(*) >= 10, though MySQL allows aliases)",
          "\u26a1 Performance Notes:\n\u2022 An index on category_name speeds up grouping significantly by enabling loose/stream index scans.",
          "\ud83c\udf0d Real-World Use Cases:\n\u2022 \u2705 Categories with high inventory volumes\n\u2022 \u2705 Active customers with 10+ completed orders\n\u2022 \u2705 High-density delivery zones with multiple shipments"
      ]
  },
  "SQL-020": {
      "code_id": "SQL-020",
      "numeric_id": 55,
      "title": "HAVING with SUM()",
      "code": "SELECT customer_id,\n       customer_name,\n       SUM(purchase_amount) AS total_purchase\nFROM purchases\nGROUP BY customer_id,\n         customer_name\nHAVING SUM(purchase_amount) > 50000\nORDER BY total_purchase DESC;",
      "timeComplexity": "O(N) (N = Number of Purchase Records)",
      "spaceComplexity": "O(G) (G = Number of Customers)",
      "simplestExplanation": "Groups purchase transactions by customer_id and customer_name, calculates cumulative spend with SUM(purchase_amount), filters out customers whose cumulative spend is \u20b950,000 or less using HAVING SUM(purchase_amount) > 50000, and sorts high spenders first.",
      "mentalModel": "Purchases \u2500\u2500\u25ba GROUP BY customer_id, customer_name \u2500\u2500\u25ba SUM(purchase_amount) \u2500\u2500\u25ba HAVING SUM > 50000 \u2500\u2500\u25ba SELECT \u2500\u2500\u25ba ORDER BY total_purchase DESC",
      "lineByLine": [
          {
              "line": "SELECT customer_id,",
              "explanation": "Displays the unique customer ID."
          },
          {
              "line": "customer_name,",
              "explanation": "Displays the customer name."
          },
          {
              "line": "SUM(purchase_amount) AS total_purchase",
              "explanation": "Calculates total amount spent across all transactions for each customer."
          },
          {
              "line": "FROM purchases",
              "explanation": "Reads transaction records from the purchases table."
          },
          {
              "line": "GROUP BY customer_id,",
              "explanation": "Partitions orders by customer ID."
          },
          {
              "line": "customer_name",
              "explanation": "Includes customer_name in GROUP BY to satisfy strict ANSI SQL rules for non-aggregated columns."
          },
          {
              "line": "HAVING SUM(purchase_amount) > 50000",
              "explanation": "Filters out customer groups whose total purchase does not exceed 50,000."
          },
          {
              "line": "ORDER BY total_purchase DESC;",
              "explanation": "Sorts top spenders in descending order."
          }
      ],
      "beginnerTraps": [
          "\u274c 1. Using WHERE with SUM(): WHERE SUM(purchase_amount) > 50000 throws an aggregate not allowed in WHERE error.",
          "\u274c 2. Forgetting customer_name in GROUP BY: Selecting customer_name without including it in GROUP BY causes an error in standard SQL.",
          "\u274c 3. Confusing SUM() with COUNT(): SUM() calculates total numeric value; COUNT() counts total number of rows.",
          "\u274c 4. Using >= instead of >: The requirement asks for exceeding 50,000, which strictly requires > 50000."
      ],
      "keyTakeaway": "SUM() computes cumulative numeric values across grouped rows, and HAVING filters those sums after aggregation is performed.",
      "interviewPros": [
          "Q1. Why must SUM() be filtered with HAVING instead of WHERE? Because aggregate values like SUM() only exist after grouping is completed.",
          "Q2. Can SUM() return NULL? Yes, if all values in the group are NULL, SUM() returns NULL.",
          "Q3. What is the difference between SUM() and COUNT()? SUM() adds up numeric column values; COUNT() counts number of records.",
          "Q4. Why include both customer_id and customer_name in GROUP BY? Because non-aggregated columns in SELECT must appear in GROUP BY to ensure deterministic results.",
          "Q5. How can we optimize this query? Create a composite index on (customer_id, purchase_amount) to allow index-based aggregation."
      ],
      "interviewCons": [
          "\u2b50 Questions Interviewers Will Ask:\n\u2022 What happens if purchase_amount has negative values? (Answer: SUM() computes the algebraic sum, correctly offsetting refunds/returns)\n\u2022 How does HAVING differ from WHERE performance-wise? (Answer: WHERE filters rows before aggregation to reduce group count; HAVING filters groups after aggregation)\n\u2022 Can you filter both before and after grouping? (Answer: Yes, e.g. WHERE status = 'Completed' GROUP BY customer_id HAVING SUM(amount) > 50000)"
      ]
  },
  "SQL-021": {
      "code_id": "SQL-021",
      "numeric_id": 56,
      "title": "INNER JOIN",
      "code": "SELECT e.employee_id,\n       e.employee_name,\n       d.department_name\nFROM employees AS e\nINNER JOIN departments AS d\nON e.department_id = d.department_id\nORDER BY e.employee_id;",
      "timeComplexity": "O(N \u00d7 M) (Without indexes. Optimized by modern databases using indexes)",
      "spaceComplexity": "O(Result Set)",
      "simplestExplanation": "Combines rows from employees and departments where department_id matches in both tables. Employees without a department and departments without employees are excluded. The result is ordered by employee_id.",
      "mentalModel": "Employees (e) \u2500\u2500\u25ba Match department_id \u25c4\u2500\u2500 Departments (d) \u2500\u2500\u25ba Keep Only Matches \u2500\u2500\u25ba SELECT e.id, e.name, d.name \u2500\u2500\u25ba ORDER BY e.employee_id",
      "lineByLine": [
          {
              "line": "SELECT e.employee_id,",
              "explanation": "Selects employee ID from the employees table."
          },
          {
              "line": "e.employee_name,",
              "explanation": "Selects employee name from the employees table."
          },
          {
              "line": "d.department_name",
              "explanation": "Selects department name from the departments table."
          },
          {
              "line": "FROM employees AS e",
              "explanation": "Scans the employees table, assigning alias e."
          },
          {
              "line": "INNER JOIN departments AS d",
              "explanation": "Joins with the departments table, assigning alias d."
          },
          {
              "line": "ON e.department_id = d.department_id",
              "explanation": "Specifies the join condition matching foreign key to primary key."
          },
          {
              "line": "ORDER BY e.employee_id;",
              "explanation": "Sorts output ascending by employee_id."
          }
      ],
      "beginnerTraps": [
          "\u274c 1. Forgetting the ON clause: Omitting ON produces a Cartesian product (CROSS JOIN), matching every employee to every department.",
          "\u274c 2. Joining on the wrong columns: Joining on employee_id = department_id produces invalid matches.",
          "\u274c 3. Ambiguous column names: Selecting department_id without a table prefix (e. or d.) causes an ambiguous column error.",
          "\u274c 4. Confusing INNER JOIN with LEFT JOIN: INNER JOIN excludes unmatched rows; if unmatched employees should be shown, use LEFT JOIN."
      ],
      "keyTakeaway": "INNER JOIN returns only rows where the join condition is satisfied in both tables.",
      "interviewPros": [
          "Q1. What is an INNER JOIN? It returns rows where there is a match in both joined tables.",
          "Q2. What happens if there is no match? Unmatched rows from both tables are discarded.",
          "Q3. Is JOIN the same as INNER JOIN? Yes, the INNER keyword is optional in SQL; JOIN defaults to INNER JOIN.",
          "Q4. Why use table aliases? Aliases make queries cleaner and resolve ambiguous column references.",
          "Q5. Which join is used most often? INNER JOIN is by far the most commonly used join in database applications."
      ],
      "interviewCons": [
          "\u2b50 Questions Interviewers Will Ask:\n\u2022 What is the difference between ON and WHERE in an INNER JOIN? (Answer: For INNER JOIN they produce identical results, but ON defines the join condition while WHERE filters results)\n\u2022 Can you join more than two tables with INNER JOIN? (Answer: Yes, multiple JOIN ... ON clauses can be chained)\n\u2022 What indexes speed up INNER JOIN? (Answer: An index on the foreign key column e.department_id)"
      ]
  },
  "SQL-022": {
      "code_id": "SQL-022",
      "numeric_id": 57,
      "title": "LEFT JOIN",
      "code": "SELECT e.employee_id,\n       e.employee_name,\n       d.department_name\nFROM employees AS e\nLEFT JOIN departments AS d\nON e.department_id = d.department_id\nORDER BY e.employee_id;",
      "timeComplexity": "O(N \u00d7 M) (Without indexes. Modern databases optimize joins using indexes and join algorithms)",
      "spaceComplexity": "O(Result Set)",
      "simplestExplanation": "Returns all records from the left table (employees) regardless of whether they have a matching department. If an employee has no matching department, department_name displays as NULL. The output is sorted by employee_id.",
      "mentalModel": "All Employees (Left) \u2500\u2500\u25ba Match department_id \u2500\u2500\u25ba Department found? Show department_name : Show NULL \u2500\u2500\u25ba ORDER BY e.employee_id",
      "lineByLine": [
          {
              "line": "SELECT e.employee_id,",
              "explanation": "Selects employee ID from employees."
          },
          {
              "line": "e.employee_name,",
              "explanation": "Selects employee name from employees."
          },
          {
              "line": "d.department_name",
              "explanation": "Selects department name from departments (or NULL if no match)."
          },
          {
              "line": "FROM employees AS e",
              "explanation": "Specifies employees as the left table (fully preserved)."
          },
          {
              "line": "LEFT JOIN departments AS d",
              "explanation": "Joins departments on the right side."
          },
          {
              "line": "ON e.department_id = d.department_id",
              "explanation": "Matches rows by department_id."
          },
          {
              "line": "ORDER BY e.employee_id;",
              "explanation": "Sorts output ascending by employee_id."
          }
      ],
      "beginnerTraps": [
          "\u274c 1. Confusing LEFT JOIN with INNER JOIN: Using INNER JOIN drops unassigned employees like David and Emma.",
          "\u274c 2. Filtering the right table in WHERE: Placing right-table conditions in WHERE (e.g. WHERE d.department_name = 'HR') accidentally converts LEFT JOIN into an INNER JOIN.",
          "\u274c 3. Forgetting the ON clause: Missing ON produces an invalid Cartesian product.",
          "\u274c 4. Expecting NULL rows to disappear: LEFT JOIN explicitly retains unmatched rows from the left table with NULL right-side values."
      ],
      "keyTakeaway": "LEFT JOIN returns all rows from the left table and matched rows from the right table, filling unmatched right-side attributes with NULL.",
      "interviewPros": [
          "Q1. What is a LEFT JOIN? It returns all rows from the left table and matching rows from the right table.",
          "Q2. What happens when there is no match? Right-side columns are filled with NULL.",
          "Q3. Which table is the left table? The table declared after FROM is the left table; the table declared after LEFT JOIN is the right table.",
          "Q4. Difference between INNER JOIN and LEFT JOIN? INNER JOIN returns only matching rows; LEFT JOIN returns all rows from the left table plus matching rows from the right.",
          "Q5. Is LEFT JOIN the same as LEFT OUTER JOIN? Yes, the OUTER keyword is optional."
      ],
      "interviewCons": [
          "\u2b50 Questions Interviewers Will Ask:\n\u2022 How do you find employees with NO department using LEFT JOIN? (Answer: Add WHERE d.department_id IS NULL)\n\u2022 What is the difference between ON and WHERE in a LEFT JOIN? (Answer: Conditions in ON filter the right table before joining; conditions in WHERE filter the final joined result)\n\u2022 Does table order matter in LEFT JOIN? (Answer: Yes! Swapping the tables completely changes which table is fully preserved)"
      ]
  },
  "SQL-023": {
      "code_id": "SQL-023",
      "numeric_id": 58,
      "title": "RIGHT JOIN",
      "code": "SELECT d.department_name,\n       e.employee_name\nFROM employees AS e\nRIGHT JOIN departments AS d\nON e.department_id = d.department_id\nORDER BY d.department_name;",
      "timeComplexity": "O(N \u00d7 M) (Without indexes. Optimized by modern databases using indexes)",
      "spaceComplexity": "O(Result Set)",
      "simplestExplanation": "Returns all records from the right table (departments) and matching rows from the left table (employees). Departments with no assigned employees (like Marketing) appear in the result with employee_name as NULL. The output is sorted alphabetically by department_name.",
      "mentalModel": "Employees (Left) \u2500\u2500\u25ba Match department_id \u25c4\u2500\u2500 All Departments (Right) \u2500\u2500\u25ba Keep All Departments \u2500\u2500\u25ba Employee missing? Show NULL \u2500\u2500\u25ba ORDER BY d.department_name",
      "lineByLine": [
          {
              "line": "SELECT d.department_name,",
              "explanation": "Selects department name from the departments table."
          },
          {
              "line": "e.employee_name",
              "explanation": "Selects employee name (or NULL if no employees in that department)."
          },
          {
              "line": "FROM employees AS e",
              "explanation": "Specifies employees as the left table."
          },
          {
              "line": "RIGHT JOIN departments AS d",
              "explanation": "Specifies departments as the preserved right table."
          },
          {
              "line": "ON e.department_id = d.department_id",
              "explanation": "Joins tables on department_id."
          },
          {
              "line": "ORDER BY d.department_name;",
              "explanation": "Sorts alphabetically by department_name."
          }
      ],
      "beginnerTraps": [
          "\u274c 1. Confusing RIGHT JOIN with LEFT JOIN: RIGHT JOIN preserves the right-side table (departments), not the left.",
          "\u274c 2. Expecting unmatched right rows to disappear: Marketing has 0 employees but is preserved with NULL.",
          "\u274c 3. Filtering the left table in WHERE: Placing left-table filters in WHERE converts RIGHT JOIN into an INNER JOIN.",
          "\u274c 4. Using RIGHT JOIN in older SQLite: Older SQLite versions (< 3.39) lacked RIGHT JOIN; swapping tables with LEFT JOIN is functionally identical."
      ],
      "keyTakeaway": "RIGHT JOIN guarantees that every row from the right table appears in the output, with missing left-table columns evaluating to NULL.",
      "interviewPros": [
          "Q1. What does RIGHT JOIN do? It returns all rows from the right table and matching rows from the left table.",
          "Q2. What happens when there is no match? Left-table columns evaluate to NULL.",
          "Q3. How can RIGHT JOIN be rewritten with LEFT JOIN? Swap table positions: FROM departments d LEFT JOIN employees e.",
          "Q4. Which join is more commonly used in real projects? LEFT JOIN is overwhelmingly preferred for code readability (reading left-to-right).",
          "Q5. Is RIGHT JOIN the same as RIGHT OUTER JOIN? Yes, OUTER is optional."
      ],
      "interviewCons": [
          "\u2b50 Questions Interviewers Will Ask:\n\u2022 Why do most style guides recommend avoiding RIGHT JOIN? (Answer: Because LEFT JOIN is more intuitive to read from left to right, and any RIGHT JOIN can be rewritten as a LEFT JOIN)\n\u2022 How do you identify departments with zero employees? (Answer: Use RIGHT JOIN with WHERE e.employee_id IS NULL)\n\u2022 What happens if the join condition matches multiple rows? (Answer: The department row is duplicated for each matching employee)"
      ]
  },
  "SQL-024": {
      "code_id": "SQL-024",
      "numeric_id": 59,
      "title": "FULL JOIN",
      "code": "SELECT e.employee_name,\n       d.department_name\nFROM employees AS e\nFULL JOIN departments AS d\nON e.department_id = d.department_id\nORDER BY d.department_name;",
      "timeComplexity": "O(N \u00d7 M) (Without indexes. Optimized internally by modern databases)",
      "spaceComplexity": "O(Result Set)",
      "simplestExplanation": "Combines the results of both LEFT JOIN and RIGHT JOIN. It returns all employees and all departments. Employees without departments appear with department_name as NULL, and departments without employees appear with employee_name as NULL. The output is sorted by department_name.",
      "mentalModel": "All Employees \u2500\u2500\u25ba Match department_id \u25c4\u2500\u2500 All Departments \u2500\u2500\u25ba Keep Matches + Keep Unmatched Employees + Keep Unmatched Departments \u2500\u2500\u25ba Fill Missing with NULL",
      "lineByLine": [
          {
              "line": "SELECT e.employee_name,",
              "explanation": "Selects employee name."
          },
          {
              "line": "d.department_name",
              "explanation": "Selects department name."
          },
          {
              "line": "FROM employees AS e",
              "explanation": "References the employees table."
          },
          {
              "line": "FULL JOIN departments AS d",
              "explanation": "Performs a full outer join with departments."
          },
          {
              "line": "ON e.department_id = d.department_id",
              "explanation": "Matches rows on department_id."
          },
          {
              "line": "ORDER BY d.department_name;",
              "explanation": "Sorts output by department_name."
          }
      ],
      "beginnerTraps": [
          "\u274c 1. Confusing FULL JOIN with INNER JOIN: INNER JOIN excludes all unmatched records; FULL JOIN keeps all records from both tables.",
          "\u274c 2. Assuming FULL JOIN works in MySQL: MySQL does not support FULL JOIN directly; developers must use LEFT JOIN UNION RIGHT JOIN.",
          "\u274c 3. Forgetting the ON clause: Missing ON produces an invalid cartesian join.",
          "\u274c 4. Overlooking NULL handling in ORDER BY: NULL values may sort first or last depending on the database engine."
      ],
      "keyTakeaway": "FULL JOIN provides complete visibility across both datasets by combining matching rows and preserving all unmatched rows from both tables with NULLs.",
      "interviewPros": [
          "Q1. What is a FULL JOIN? It returns all rows from both tables, filling NULLs wherever matches do not exist.",
          "Q2. Which databases support FULL JOIN? PostgreSQL, SQL Server, Oracle, and modern SQLite (3.39+). MySQL does not.",
          "Q3. How do you simulate FULL JOIN in MySQL? Use SELECT ... FROM A LEFT JOIN B UNION SELECT ... FROM A RIGHT JOIN B.",
          "Q4. Is FULL JOIN the same as FULL OUTER JOIN? Yes, the OUTER keyword is optional.",
          "Q5. When should you use FULL JOIN? When performing data reconciliation or auditing discrepancies between two tables."
      ],
      "interviewCons": [
          "\u2b50 Questions Interviewers Will Ask:\n\u2022 How do you find rows that exist in only ONE of the two tables? (Answer: Use FULL JOIN WHERE e.department_id IS NULL OR d.department_id IS NULL)\n\u2022 What is the difference between UNION and FULL JOIN? (Answer: UNION combines results vertically across compatible columns; FULL JOIN combines tables horizontally across joined relations)\n\u2022 How expensive is a FULL JOIN? (Answer: It requires scanning both relations completely, making it more resource-intensive than INNER or LEFT joins)"
      ]
  },
  "SQL-025": {
      "code_id": "SQL-025",
      "numeric_id": 60,
      "title": "SELF JOIN",
      "code": "SELECT e.employee_name,\n       m.employee_name AS manager_name\nFROM employees AS e\nLEFT JOIN employees AS m\nON e.manager_id = m.employee_id\nORDER BY e.employee_name;",
      "timeComplexity": "O(N \u00d7 M) (Optimized with indexes on join columns)",
      "spaceComplexity": "O(Result Set)",
      "simplestExplanation": "A table joined with itself using aliases to distinguish the two roles. The first copy (alias e) represents the employee, and the second copy (alias m) represents their manager. The LEFT JOIN ensures top-level leaders with no manager (manager_id = NULL) are retained. The output is sorted alphabetically by employee_name.",
      "mentalModel": "Employees (as Staff: e) \u2500\u2500\u25ba Match e.manager_id = m.employee_id \u25c4\u2500\u2500 Employees (as Manager: m) \u2500\u2500\u25ba SELECT e.name, m.name \u2500\u2500\u25ba ORDER BY e.employee_name",
      "lineByLine": [
          {
              "line": "SELECT e.employee_name,",
              "explanation": "Displays the employee's name from alias e."
          },
          {
              "line": "m.employee_name AS manager_name",
              "explanation": "Displays the manager's name from alias m, aliased as manager_name."
          },
          {
              "line": "FROM employees AS e",
              "explanation": "First instance of employees representing individual staff."
          },
          {
              "line": "LEFT JOIN employees AS m",
              "explanation": "Second instance of employees representing managers."
          },
          {
              "line": "ON e.manager_id = m.employee_id",
              "explanation": "Connects employee's manager_id to the manager's employee_id."
          },
          {
              "line": "ORDER BY e.employee_name;",
              "explanation": "Sorts output alphabetically by employee_name."
          }
      ],
      "beginnerTraps": [
          "\u274c 1. Forgetting aliases: Writing FROM employees JOIN employees without aliases throws a syntax error because SQL cannot differentiate the two instances.",
          "\u274c 2. Joining the wrong columns: Writing ON e.employee_id = m.employee_id compares each row to itself.",
          "\u274c 3. Using INNER JOIN instead of LEFT JOIN: INNER JOIN excludes employees who don't have a manager (e.g. CEO or founder).",
          "\u274c 4. Forgetting the ON clause: Produces a cartesian product of every employee paired with every other employee."
      ],
      "keyTakeaway": "SELF JOIN is a technique of joining a table to itself using aliases, indispensable for hierarchical and parent-child data structures.",
      "interviewPros": [
          "Q1. What is a SELF JOIN? A join where a table is joined with itself.",
          "Q2. Why are table aliases mandatory? To allow SQL to distinguish between the two instances of the same table.",
          "Q3. Can INNER JOIN be used in a SELF JOIN? Yes, but employees without managers will be excluded.",
          "Q4. Which join is generally preferred for hierarchies? LEFT JOIN, because it preserves root-level nodes (like CEOs).",
          "Q5. Is SELF JOIN a distinct SQL keyword? No, it simply uses standard JOIN syntax (INNER, LEFT, etc.) on the same table."
      ],
      "interviewCons": [
          "\u2b50 Questions Interviewers Will Ask:\n\u2022 How do you handle multi-level hierarchies (e.g. employee -> manager -> VP)? (Answer: Chain multiple SELF JOINs or use a Recursive Common Table Expression [CTE])\n\u2022 How do you find employees who are also managers? (Answer: SELECT DISTINCT m.employee_name FROM employees e JOIN employees m ON e.manager_id = m.employee_id)\n\u2022 What indexes optimize a SELF JOIN? (Answer: Indexes on employee_id and manager_id)"
      ]
  }
,
  "SQL-026": {
    "code_id": "SQL-026",
    "numeric_id": 61,
    "title": "CROSS JOIN",
    "code": "SELECT e.employee_name,\n       d.department_name\nFROM employees AS e\nCROSS JOIN departments AS d\nORDER BY e.employee_name,\n         d.department_name;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "Combines every row from employees with every row from departments to create all possible employee-department pairs (a Cartesian Product). No ON condition is needed because no columns are matched. The output is sorted by employee_name, then department_name.",
    "mentalModel": "Employees (3 rows) ──► CROSS JOIN ◄── Departments (2 rows) ──► Cartesian Product (3 × 2 = 6 rows) ──► ORDER BY e.employee_name, d.department_name",
    "lineByLine": [
      {
        "line": "SELECT e.employee_name,",
        "explanation": "Selects the employee name from the employees table."
      },
      {
        "line": "d.department_name",
        "explanation": "Selects the department name from the departments table."
      },
      {
        "line": "FROM employees AS e",
        "explanation": "Scans all employee records from the employees table."
      },
      {
        "line": "CROSS JOIN departments AS d",
        "explanation": "Pairs each employee with every single department without any matching condition."
      },
      {
        "line": "ORDER BY e.employee_name,",
        "explanation": "Sorts the output alphabetically by employee name first."
      },
      {
        "line": "d.department_name;",
        "explanation": "Sorts ties alphabetically by department name."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using an ON clause: CROSS JOIN does not use an ON matching predicate. Adding ON causes a syntax error or converts it to an INNER JOIN.",
      "❌ 2. Confusing CROSS JOIN with INNER JOIN: INNER JOIN filters matching rows; CROSS JOIN generates every possible combination.",
      "❌ 3. Running CROSS JOIN on large tables: Pairing two tables of 1,000 rows each generates 1,000,000 output rows, causing high memory usage and slow performance."
    ],
    "keyTakeaway": "CROSS JOIN returns every possible combination of rows from two tables (Cartesian Product), where total rows equals Rows A × Rows B.",
    "interviewPros": [
      "Q1. What is a CROSS JOIN? It returns every possible combination of rows from two tables without checking matching keys.",
      "Q2. Does CROSS JOIN require an ON clause? No, CROSS JOIN strictly operates without an ON condition.",
      "Q3. What is a Cartesian Product? The mathematical product where every element of set A is paired with every element of set B.",
      "Q4. If Table A has 8 rows and Table B has 6 rows, how many rows are returned? 8 × 6 = 48 rows.",
      "Q5. Can CROSS JOIN be written implicitly? Yes, using FROM table1, table2 without a WHERE clause."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between CROSS JOIN and FULL OUTER JOIN? (Answer: FULL JOIN returns matched rows and unmatched rows with NULLs; CROSS JOIN multiplies all rows indiscriminately)\n• When is CROSS JOIN used in production? (Answer: Generating matrix reports, matrix scheduling, color/size SKU variants, and test fixture permutations)\n• How do you prevent accidental CROSS JOINs? (Answer: Always ensure JOINs have valid ON conditions and linters flag comma-separated table syntax)"
    ]
  },
  "SQL-027": {
    "code_id": "SQL-027",
    "numeric_id": 62,
    "title": "Employees with Department Names",
    "code": "SELECT e.employee_id,\n       e.employee_name,\n       d.department_name\nFROM employees AS e\nINNER JOIN departments AS d\nON e.department_id = d.department_id\nORDER BY e.employee_id;",
    "timeComplexity": "O(N × M) (Without indexes. Optimized with indexes in modern databases)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "Joins employees with departments using an INNER JOIN on department_id. It replaces raw numeric IDs with clear department names, excluding any unassigned staff, and sorts the final roster by employee_id.",
    "mentalModel": "Employees (e) ──► Match department_id = d.department_id ◄── Departments (d) ──► Combine Matching Rows ──► SELECT e.id, e.name, d.name ──► ORDER BY e.employee_id",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id,",
        "explanation": "Retrieves the unique employee ID."
      },
      {
        "line": "e.employee_name,",
        "explanation": "Retrieves the employee name."
      },
      {
        "line": "d.department_name",
        "explanation": "Retrieves the corresponding department name from the departments table."
      },
      {
        "line": "FROM employees AS e",
        "explanation": "Scans the employees table using alias e."
      },
      {
        "line": "INNER JOIN departments AS d",
        "explanation": "Joins the departments table using alias d."
      },
      {
        "line": "ON e.department_id = d.department_id",
        "explanation": "Specifies the join condition matching foreign key to primary key."
      },
      {
        "line": "ORDER BY e.employee_id;",
        "explanation": "Sorts the output rows ascending by employee_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Joining on the wrong columns: Writing ON e.employee_id = d.department_id compares employee ID to department ID, yielding incorrect or empty results.",
      "❌ 2. Forgetting the ON clause: Omitting ON produces an unintended Cartesian Product.",
      "❌ 3. Selecting ambiguous columns: Selecting department_id without specifying e. or d. throws an ambiguous column reference error.",
      "❌ 4. Using LEFT JOIN unnecessarily: When business requirements specify only displaying employees who belong to a valid department, INNER JOIN is preferred."
    ],
    "keyTakeaway": "INNER JOIN combines related data from normalized tables by matching key columns in the ON clause, preventing data redundancy.",
    "interviewPros": [
      "Q1. Why do we need a JOIN here? Because related employee and department data are stored in separate normalized tables to eliminate redundancy.",
      "Q2. Why not store department_name directly in employees? Storing department_name in employees would create data redundancy and update anomalies.",
      "Q3. What if an employee has no department? INNER JOIN excludes that employee. A LEFT JOIN would be needed to retain them with a NULL department_name.",
      "Q4. Can JOIN and INNER JOIN be used interchangeably? Yes, JOIN defaults to INNER JOIN in SQL.",
      "Q5. Which columns should be indexed? Indexes on employees.department_id and departments.department_id optimize lookup speeds."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What happens if department_id contains NULLs? (Answer: Rows with NULL department_id fail the equality comparison and are excluded from the INNER JOIN)\n• How does the optimizer execute this join? (Answer: Hash Join or Index Nested Loop Join using the indexed department_id)\n• Can you alias tables with AS? (Answer: Yes, AS is optional for table aliases in SQL, e.g. FROM employees e)"
    ]
  },
  "SQL-028": {
    "code_id": "SQL-028",
    "numeric_id": 63,
    "title": "Customers with Orders",
    "code": "SELECT o.order_id,\n       c.customer_name,\n       o.order_date,\n       o.total_amount\nFROM orders AS o\nINNER JOIN customers AS c\nON o.customer_id = c.customer_id\nORDER BY o.order_id;",
    "timeComplexity": "O(N × M) (Without indexes. Modern databases optimize joins using indexes)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "Performs an INNER JOIN between orders and customers on customer_id. Only customers who have placed at least one order are displayed. Customers with multiple orders appear once per order (one-to-many relationship). The result is sorted by order_id.",
    "mentalModel": "Orders (o) ──► Match o.customer_id = c.customer_id ◄── Customers (c) ──► Combine Matching Records ──► SELECT o.order_id, c.name, o.date, o.amount ──► ORDER BY o.order_id",
    "lineByLine": [
      {
        "line": "SELECT o.order_id,",
        "explanation": "Retrieves the unique order ID from the orders table."
      },
      {
        "line": "c.customer_name,",
        "explanation": "Retrieves the purchaser's name from the customers table."
      },
      {
        "line": "o.order_date,",
        "explanation": "Retrieves the date the order was placed."
      },
      {
        "line": "o.total_amount",
        "explanation": "Retrieves the total purchase amount for the order."
      },
      {
        "line": "FROM orders AS o",
        "explanation": "Scans the orders table using alias o."
      },
      {
        "line": "INNER JOIN customers AS c",
        "explanation": "Joins the customers table using alias c."
      },
      {
        "line": "ON o.customer_id = c.customer_id",
        "explanation": "Matches the foreign key in orders to the primary key in customers."
      },
      {
        "line": "ORDER BY o.order_id;",
        "explanation": "Sorts the output rows in ascending order by order_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Joining on the wrong columns: Writing ON o.order_id = c.customer_id compares order ID to customer ID, producing invalid matches.",
      "❌ 2. Forgetting the ON clause: Writing FROM orders INNER JOIN customers without ON produces an expensive Cartesian product.",
      "❌ 3. Selecting ambiguous columns: Selecting customer_id without specifying o. or c. throws an ambiguous column reference error.",
      "❌ 4. Using LEFT JOIN unnecessarily: If the goal is only to display customers who have placed orders, INNER JOIN is the correct tool."
    ],
    "keyTakeaway": "INNER JOIN between a child transaction table (orders) and parent entity table (customers) models a one-to-many relationship, naturally excluding parent rows with no activity.",
    "interviewPros": [
      "Q1. Why use INNER JOIN instead of LEFT JOIN? Because we only want customers who placed orders. Customers with zero orders (like Bob) are excluded.",
      "Q2. Can one customer have multiple orders? Yes, this is a standard one-to-many relationship. John appears twice because he placed two separate orders.",
      "Q3. Why isn't customer_name stored directly in orders? To prevent data redundancy and maintain third normal form (3NF) database design.",
      "Q4. What happens if an order has an invalid customer_id? INNER JOIN discards orders without a matching customer.",
      "Q5. Which columns should be indexed? Indexes on orders.customer_id and customers.customer_id optimize join execution speeds."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What query displays ALL customers including those who never ordered? (Answer: SELECT ... FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id)\n• How do you count total orders per customer? (Answer: Use GROUP BY c.customer_id, c.customer_name with COUNT(o.order_id))\n• How does the database optimize this one-to-many join? (Answer: Index scan on customers primary key customer_id for each order row)"
    ]
  },
  "SQL-029": {
    "code_id": "SQL-029",
    "numeric_id": 64,
    "title": "Customers without Orders",
    "code": "SELECT c.customer_id,\n       c.customer_name\nFROM customers AS c\nLEFT JOIN orders AS o\nON c.customer_id = o.customer_id\nWHERE o.customer_id IS NULL\nORDER BY c.customer_id;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We start with all customers via LEFT JOIN against orders. When a customer has never placed an order, all joined order columns become NULL. We then filter WHERE o.customer_id IS NULL to keep only those customers without orders.",
    "mentalModel": "Imagine a roll call sheet of every customer. For each name, we check the order logbook. If an entry exists, we cross their name off our target list. If their line is completely blank (NULL), we keep them on our report!",
    "lineByLine": [
      {
        "line": "SELECT c.customer_id,",
        "explanation": "Retrieves the unique identifier of the customer."
      },
      {
        "line": "       c.customer_name",
        "explanation": "Retrieves the name of the customer."
      },
      {
        "line": "FROM customers AS c",
        "explanation": "Starts from the customers table as the primary (left) table."
      },
      {
        "line": "LEFT JOIN orders AS o",
        "explanation": "Attempts to match each customer against records in the orders table, preserving customers even if no orders exist."
      },
      {
        "line": "ON c.customer_id = o.customer_id",
        "explanation": "Matches orders to customers based on customer_id."
      },
      {
        "line": "WHERE o.customer_id IS NULL",
        "explanation": "Filters for rows where no matching order was found, meaning the customer has never placed an order."
      },
      {
        "line": "ORDER BY c.customer_id;",
        "explanation": "Sorts the resulting customers in ascending order by customer_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using INNER JOIN: INNER JOIN discards unmatched rows entirely, leaving zero rows if looking for non-orderers.",
      "❌ 2. Writing WHERE o.customer_id = NULL: In SQL, comparing with NULL via '=' evaluates to UNKNOWN. You MUST use IS NULL.",
      "❌ 3. Joining on the wrong column: Joining c.customer_name = o.customer_id compares names to numeric IDs.",
      "❌ 4. Filtering the wrong table: Filtering c.customer_id IS NULL would search for customers without an ID, not customers without an order."
    ],
    "keyTakeaway": "LEFT JOIN combined with a WHERE joined_table.foreign_key IS NULL filter is the classic SQL Anti-Join technique to identify records without child transactions.",
    "interviewPros": [
      "Q1. Why is LEFT JOIN used? To keep all customers, even those who have never placed an order.",
      "Q2. Why use IS NULL? To identify rows from the right table that had no match and were populated with NULLs.",
      "Q3. Can INNER JOIN solve this? No, INNER JOIN discards unmatched records.",
      "Q4. What is another way to solve this? Using NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id) or NOT IN.",
      "Q5. Which method is faster? NOT EXISTS is often faster on large datasets because it terminates as soon as a single match is found."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between LEFT JOIN ... WHERE IS NULL and NOT EXISTS?\n• How does NOT IN behave if the subquery returns a NULL value? (Trap: NOT IN returns zero rows if any subquery item is NULL!)\n• Which columns should be indexed for maximum performance on this anti-join? (Answer: Index on orders.customer_id and customers.customer_id)"
    ]
  },
  "SQL-030": {
    "code_id": "SQL-030",
    "numeric_id": 65,
    "title": "Orders without Customers",
    "code": "SELECT o.order_id,\n       o.customer_id,\n       o.order_date,\n       o.total_amount\nFROM orders AS o\nLEFT JOIN customers AS c\nON o.customer_id = c.customer_id\nWHERE c.customer_id IS NULL\nORDER BY o.order_id;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We start with all orders via LEFT JOIN against customers. For orphan orders referencing non-existent customers, joined customer columns become NULL. We then filter WHERE c.customer_id IS NULL to output only those orphan orders.",
    "mentalModel": "Imagine a package delivery warehouse. Every parcel has a recipient customer ID. We look up each customer ID in our customer roster. If the customer isn't in our system (NULL result), that parcel is an orphan package flagged for investigation!",
    "lineByLine": [
      {
        "line": "SELECT o.order_id,",
        "explanation": "Retrieves the unique identifier of the order."
      },
      {
        "line": "       o.customer_id,",
        "explanation": "Retrieves the customer ID referenced by the order."
      },
      {
        "line": "       o.order_date,",
        "explanation": "Retrieves the date the order was created."
      },
      {
        "line": "       o.total_amount",
        "explanation": "Retrieves the monetary total of the order."
      },
      {
        "line": "FROM orders AS o",
        "explanation": "Starts from the orders table as the primary (left) table."
      },
      {
        "line": "LEFT JOIN customers AS c",
        "explanation": "Performs a LEFT JOIN with customers, preserving every order row regardless of whether a matching customer exists."
      },
      {
        "line": "ON o.customer_id = c.customer_id",
        "explanation": "Matches orders to customers using customer_id."
      },
      {
        "line": "WHERE c.customer_id IS NULL",
        "explanation": "Filters for records where no corresponding customer was found, identifying orphan orders."
      },
      {
        "line": "ORDER BY o.order_id;",
        "explanation": "Sorts the resulting orphan orders in ascending order by order_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using INNER JOIN: INNER JOIN automatically discards orders with unmatched customer IDs, concealing data integrity issues.",
      "❌ 2. Writing WHERE c.customer_id = NULL: In SQL, comparing NULL with '=' yields UNKNOWN; always use IS NULL.",
      "❌ 3. Joining on wrong columns: Writing ON o.order_id = c.customer_id compares order IDs to customer IDs.",
      "❌ 4. Filtering the wrong table: Writing WHERE o.customer_id IS NULL searches for orders that have no customer_id value, rather than orders referencing non-existent customers."
    ],
    "keyTakeaway": "An orphan record occurs when a child record references a missing parent key; detecting them with LEFT JOIN ... WHERE parent.id IS NULL is crucial for auditing data integrity and enforcing referential consistency.",
    "interviewPros": [
      "Q1. What is an orphan record? A record that references another record that does not exist in the parent table.",
      "Q2. Why use LEFT JOIN? To keep every order while checking whether a matching customer exists.",
      "Q3. Why use IS NULL? Because unmatched parent rows yield NULL in all parent attributes after a LEFT JOIN.",
      "Q4. How are orphan records prevented in production? By establishing foreign key constraints (FOREIGN KEY (customer_id) REFERENCES customers(customer_id)).",
      "Q5. Can NOT EXISTS solve this? Yes, using WHERE NOT EXISTS (SELECT 1 FROM customers c WHERE c.customer_id = o.customer_id)."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between Customers without Orders and Orders without Customers? (Customers without orders starts with customers; Orders without customers starts with orders)\n• How do database engines enforce foreign keys during deletions? (Cascade, Set Null, Restrict/No Action)\n• Why might orphan records exist in real-world systems? (Data migration glitches, non-transactional batch ingestion, legacy systems without foreign key constraints)"
    ]
  },
  "SQL-031": {
    "code_id": "SQL-031",
    "numeric_id": 66,
    "title": "Students with Course Names",
    "code": "SELECT s.student_id,\n       s.student_name,\n       c.course_name\nFROM students AS s\nINNER JOIN courses AS c\nON s.course_id = c.course_id\nORDER BY s.student_id;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "Students stores only course_id, and courses stores course_name. We use an INNER JOIN to match course_id between both tables, pulling the course_name alongside each student's details, sorted by student_id.",
    "mentalModel": "Think of student ID cards that have a course code stamped on the back. To print their full transcript, the registrar matches the code on each student's card to the master course directory book and copies the full course title onto their certificate!",
    "lineByLine": [
      {
        "line": "SELECT s.student_id,",
        "explanation": "Retrieves the student's unique identification number."
      },
      {
        "line": "       s.student_name,",
        "explanation": "Retrieves the student's full name."
      },
      {
        "line": "       c.course_name",
        "explanation": "Retrieves the enrolled course name from the courses table."
      },
      {
        "line": "FROM students AS s",
        "explanation": "Reads records from the students table using alias s."
      },
      {
        "line": "INNER JOIN courses AS c",
        "explanation": "Joins the courses table using alias c."
      },
      {
        "line": "ON s.course_id = c.course_id",
        "explanation": "Pairs rows where the student's enrolled course_id equals the course catalog's course_id."
      },
      {
        "line": "ORDER BY s.student_id;",
        "explanation": "Sorts the output rows in ascending order by student_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Joining on the wrong columns: Writing ON s.student_id = c.course_id compares student IDs to course IDs, resulting in invalid or zero matches.",
      "❌ 2. Forgetting the ON clause: Writing FROM students INNER JOIN courses without ON generates an unintended Cartesian product.",
      "❌ 3. Selecting ambiguous columns: Referencing course_id directly without table alias prefix (s.course_id or c.course_id) results in an ambiguous column error.",
      "❌ 4. Using LEFT JOIN unnecessarily: When the objective specifies only enrolled students with matching courses, INNER JOIN is the correct choice."
    ],
    "keyTakeaway": "INNER JOIN merges related entities across normalized schemas by matching foreign keys to primary keys, eliminating duplication while guaranteeing valid relationships.",
    "interviewPros": [
      "Q1. Why use INNER JOIN? Because only students enrolled in a valid course should be returned in the roster.",
      "Q2. Why store course_id instead of course_name in students? To normalize data, eliminating redundant text storage and avoiding update anomalies.",
      "Q3. Can one course have multiple students? Yes, courses-to-students is a standard one-to-many relationship.",
      "Q4. What JOIN would include students not enrolled in any course? LEFT JOIN students to courses.",
      "Q5. Which columns should be indexed? Indexing students.course_id and courses.course_id optimizes join lookups from O(N × M) to O(N log M)."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between JOIN and INNER JOIN? (They are syntactically and semantically identical in SQL)\n• What happens to students whose course_id is NULL under INNER JOIN? (They are filtered out; use LEFT JOIN to retain them)\n• How would you find courses that currently have zero enrolled students? (SELECT c.course_name FROM courses c LEFT JOIN students s ON c.course_id = s.course_id WHERE s.student_id IS NULL)"
    ]
  },
  "SQL-032": {
    "code_id": "SQL-032",
    "numeric_id": 67,
    "title": "Employees without Managers",
    "code": "SELECT employee_id,\n       employee_name\nFROM employees\nWHERE manager_id IS NULL\nORDER BY employee_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "Every employee typically has a manager_id pointing to their superior. Top executives like CEOs report to no one, so their manager_id is NULL. We simply filter with WHERE manager_id IS NULL and sort by employee_id.",
    "mentalModel": "Picture the corporate organizational tree. While branches connect subordinates up to their leads, the roots/crown at the very top (the CEO) have no branch above them—their manager slot is completely blank (NULL)!",
    "lineByLine": [
      {
        "line": "SELECT employee_id,",
        "explanation": "Retrieves the employee's unique identifier."
      },
      {
        "line": "       employee_name",
        "explanation": "Retrieves the name of the employee."
      },
      {
        "line": "FROM employees",
        "explanation": "Scans the employees table."
      },
      {
        "line": "WHERE manager_id IS NULL",
        "explanation": "Filters rows to retain only employees with no manager assigned (manager_id is NULL)."
      },
      {
        "line": "ORDER BY employee_id;",
        "explanation": "Sorts results in ascending order by employee_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Writing WHERE manager_id = NULL: In SQL, comparing NULL with '=' yields UNKNOWN; you must use IS NULL.",
      "❌ 2. Using a JOIN unnecessarily: Writing a SELF JOIN to check if manager_id is NULL adds unnecessary overhead when a simple WHERE filter suffices.",
      "❌ 3. Forgetting ORDER BY: Omitting ORDER BY employee_id causes non-deterministic output order."
    ],
    "keyTakeaway": "NULL represents the absence of a value; top-level hierarchical nodes are naturally captured using the WHERE column IS NULL predicate without needing a join.",
    "interviewPros": [
      "Q1. Why use IS NULL? Because in SQL, NULL denotes the absence of a value and cannot be evaluated with the equality operator =.",
      "Q2. Is a JOIN required for this problem? No, a simple WHERE filter on manager_id IS NULL directly solves the requirement in O(N) time.",
      "Q3. Who typically has a NULL manager_id? CEOs, founders, board members, or top-level independent contractors.",
      "Q4. What if there are multiple top executives? All rows with manager_id IS NULL are returned.",
      "Q5. How can this query be optimized? Adding an index on manager_id allows the engine to perform an index lookup rather than a full table scan."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between = NULL and IS NULL? (= NULL evaluates to UNKNOWN and returns 0 rows; IS NULL correctly detects NULL values)\n• How would you write this using COALESCE or IFNULL? (WHERE COALESCE(manager_id, -1) = -1)\n• How do you query the full management reporting chain from CEO down to junior staff? (Use a Recursive CTE with UNION ALL)"
    ]
  },
  "SQL-033": {
    "code_id": "SQL-033",
    "numeric_id": 68,
    "title": "Manager and Employee Names",
    "code": "SELECT e.employee_id,\n       e.employee_name,\n       m.employee_name AS manager_name\nFROM employees AS e\nLEFT JOIN employees AS m\nON e.manager_id = m.employee_id\nORDER BY e.employee_id;",
    "timeComplexity": "O(N × M)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "Because managers are also employees in the same table, we join employees to itself using two aliases: e for the employee and m for the manager. We connect e.manager_id = m.employee_id with a LEFT JOIN so the CEO (whose manager is NULL) is still included.",
    "mentalModel": "Imagine every employee in the company holding an index card with their ID, name, and their boss's ID. When we line them up, we look across the room at the other workers to find who matches the boss's ID on their card, writing that boss's name next to theirs. If an employee has no boss ID (like the CEO), we leave the line blank (NULL)!",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id,",
        "explanation": "Retrieves the subordinate employee's unique identifier."
      },
      {
        "line": "       e.employee_name,",
        "explanation": "Retrieves the subordinate employee's name."
      },
      {
        "line": "       m.employee_name AS manager_name",
        "explanation": "Retrieves the manager's name from the joined manager instance (m), aliased as manager_name."
      },
      {
        "line": "FROM employees AS e",
        "explanation": "Treats the primary table scan as the subordinate employee entity."
      },
      {
        "line": "LEFT JOIN employees AS m",
        "explanation": "Joins the same employees table to represent managers; LEFT JOIN preserves employees with no manager."
      },
      {
        "line": "ON e.manager_id = m.employee_id",
        "explanation": "Matches the employee's manager_id against the manager's employee_id."
      },
      {
        "line": "ORDER BY e.employee_id;",
        "explanation": "Sorts results in ascending order by employee_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using INNER JOIN: INNER JOIN removes employees with NULL manager_id, accidentally eliminating the CEO/executives.",
      "❌ 2. Joining the wrong columns: Writing ON e.employee_id = m.employee_id joins every employee to themselves instead of their manager.",
      "❌ 3. Forgetting table aliases: Omitting aliases causes ambiguous table errors because SQL cannot distinguish between the employee and manager instances."
    ],
    "keyTakeaway": "A SELF JOIN using distinct aliases (e, m) and a LEFT JOIN allows resolving recursive parent-child relationships stored in a single table while retaining top-level hierarchy leaders.",
    "interviewPros": [
      "Q1. What is a SELF JOIN? A technique where a table is joined with itself using distinct table aliases.",
      "Q2. Why use LEFT JOIN? To preserve top-level executives (like the CEO) who report to no one and have a NULL manager_id.",
      "Q3. Why are aliases required? Because the engine needs distinct identifiers to differentiate the subordinate role from the managerial role on the same underlying table.",
      "Q4. Which employee has NULL as manager_name? The CEO, Founder, or Managing Director.",
      "Q5. Which columns should be indexed? Primary key on employee_id and a secondary index on manager_id ensure high-speed hash/merge joins."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between INNER JOIN and LEFT JOIN in a self-join scenario? (INNER JOIN excludes root executives; LEFT JOIN preserves them with NULL)\n• How would you find all direct reports for a specific manager? (Filter WHERE m.employee_name = 'Alice')\n• How do you traverse deep multi-level reporting hierarchies? (Use Recursive Common Table Expressions / CTEs)"
    ]
  },
  "SQL-034": {
    "code_id": "SQL-034",
    "numeric_id": 69,
    "title": "Multiple Table Joins",
    "code": "SELECT e.employee_id,\n       e.employee_name,\n       d.department_name,\n       l.city\nFROM employees AS e\nINNER JOIN departments AS d\nON e.department_id = d.department_id\nINNER JOIN locations AS l\nON d.location_id = l.location_id\nORDER BY e.employee_id;",
    "timeComplexity": "O(N × M × K)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "Employees are linked to departments via department_id, and departments are linked to locations via location_id. We connect the three tables using two consecutive INNER JOINs and sort by employee_id.",
    "mentalModel": "Imagine a bridge between three islands: Island 1 (Employees) has a bridge to Island 2 (Departments) via Department IDs. Island 2 has another bridge to Island 3 (Locations) via Location IDs. By crossing both bridges in sequence, we can pick up the employee's name, department name, and city all in one single journey!",
    "lineByLine": [
      {
        "line": "SELECT e.employee_id,",
        "explanation": "Retrieves the employee's unique ID."
      },
      {
        "line": "       e.employee_name,",
        "explanation": "Retrieves the employee's full name."
      },
      {
        "line": "       d.department_name,",
        "explanation": "Retrieves the department name from departments table."
      },
      {
        "line": "       l.city",
        "explanation": "Retrieves the city name from locations table."
      },
      {
        "line": "FROM employees AS e",
        "explanation": "Scans the primary employees table using alias e."
      },
      {
        "line": "INNER JOIN departments AS d",
        "explanation": "First join: connects employees to departments."
      },
      {
        "line": "ON e.department_id = d.department_id",
        "explanation": "Matches each employee's department_id to the primary key in departments."
      },
      {
        "line": "INNER JOIN locations AS l",
        "explanation": "Second join: connects departments to locations."
      },
      {
        "line": "ON d.location_id = l.location_id",
        "explanation": "Matches each department's location_id to the primary key in locations."
      },
      {
        "line": "ORDER BY e.employee_id;",
        "explanation": "Sorts the combined output records in ascending order by employee_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Joining incorrect columns: Writing ON e.employee_id = d.department_id attempts to join employee ID to department ID.",
      "❌ 2. Missing the second join: Forgetting to join locations makes it impossible to retrieve the city.",
      "❌ 3. Ambiguous column names: Referencing department_id or location_id without prefixing the table alias causes an ambiguous column error.",
      "❌ 4. Joining tables out of relational order: Trying to join employees directly to locations without passing through departments fails because employees lacks a location_id foreign key."
    ],
    "keyTakeaway": "Multi-table joins traverse relational foreign-key pathways sequentially (Entity A -> Entity B -> Entity C), assembling normalized data across the database schema.",
    "interviewPros": [
      "Q1. Can SQL join more than two tables? Yes, queries can chain multiple joins connecting three or more normalized tables.",
      "Q2. What determines the join order? The foreign key relationships connecting primary keys across tables.",
      "Q3. Why use table aliases? Aliases (e, d, l) prevent column name collisions and make complex multi-join queries clean and readable.",
      "Q4. What if an employee does not have a department? An INNER JOIN excludes them; use LEFT JOINs to retain them.",
      "Q5. Which columns should be indexed? Indexes on join keys (employees.department_id, departments.department_id, departments.location_id, locations.location_id) optimize join planning."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• In what order does the SQL query optimizer execute multiple joins? (Uses cost-based estimation, often starting with the most selective table)\n• What happens if one of the intermediate tables has duplicate keys? (A Cartesian fan-out can occur, multiplying rows)\n• How do multiple LEFT JOINs differ from multiple INNER JOINs? (Any failure in an INNER JOIN drops the entire row; LEFT JOINs propagate NULLs forward)"
    ]
  },
  "SQL-035": {
    "code_id": "SQL-035",
    "numeric_id": 70,
    "title": "Join Three Tables",
    "code": "SELECT o.order_id,\n       c.customer_name,\n       p.product_name,\n       p.price\nFROM orders AS o\nINNER JOIN customers AS c\nON o.customer_id = c.customer_id\nINNER JOIN products AS p\nON o.product_id = p.product_id\nORDER BY o.order_id;",
    "timeComplexity": "O(N × M × K)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "Every order has a customer_id and a product_id. We start with orders, use an INNER JOIN to attach customer names from customers, and a second INNER JOIN to attach product details from products, sorted by order_id.",
    "mentalModel": "Think of a receipt invoice. The order receipt has a customer number and an item SKU. The system matches the customer number to the user directory to print their name, and matches the SKU to the product catalog to print the product title and price on the invoice!",
    "lineByLine": [
      {
        "line": "SELECT o.order_id,",
        "explanation": "Retrieves the order ID from the orders table."
      },
      {
        "line": "       c.customer_name,",
        "explanation": "Retrieves the buyer's name from the customers table."
      },
      {
        "line": "       p.product_name,",
        "explanation": "Retrieves the item description from the products table."
      },
      {
        "line": "       p.price",
        "explanation": "Retrieves the unit price from the products table."
      },
      {
        "line": "FROM orders AS o",
        "explanation": "Starts from the transaction table (orders) as the primary driving table."
      },
      {
        "line": "INNER JOIN customers AS c",
        "explanation": "Joins customers table using alias c."
      },
      {
        "line": "ON o.customer_id = c.customer_id",
        "explanation": "Matches the purchaser ID on the order to the customer ID in customers."
      },
      {
        "line": "INNER JOIN products AS p",
        "explanation": "Joins products table using alias p."
      },
      {
        "line": "ON o.product_id = p.product_id",
        "explanation": "Matches the purchased item SKU on the order to product_id in products."
      },
      {
        "line": "ORDER BY o.order_id;",
        "explanation": "Sorts results in ascending order by order_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Joining incorrect foreign keys: Writing ON o.order_id = p.product_id compares order IDs to product IDs.",
      "❌ 2. Omitting one of the joins: Omitting either customers or products makes their corresponding attributes inaccessible.",
      "❌ 3. Ambiguous column names: Referencing customer_id or product_id without an alias throws an ambiguous column error.",
      "❌ 4. Starting with the wrong table: Starting with customers without considering orders can lead to complex left joins or missing transaction records."
    ],
    "keyTakeaway": "In star/snowflake reporting schemas, starting from the central transaction fact table (orders) and joining out to dimension tables (customers, products) yields clean, natural multi-way relational joins.",
    "interviewPros": [
      "Q1. Why start from the Orders table? Because each output row corresponds to an individual order transaction.",
      "Q2. Why use multiple joins? The necessary fields (customer name, item details, order ID) reside across three normalized tables.",
      "Q3. How can join performance be optimized? Ensure indexes exist on orders.customer_id, orders.product_id, customers.customer_id, and products.product_id.",
      "Q4. What if an order has an invalid product_id? INNER JOIN eliminates that order; a LEFT JOIN would retain it with NULL product fields.",
      "Q5. Can this query join more than 3 tables? Yes, real-world queries frequently join payment, shipping, and discount tables in the same chain."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between Star Schema and Snowflake Schema joins?\n• How would you calculate total customer spend across all products? (Use SUM(p.price) with GROUP BY c.customer_id, c.customer_name)\n• What happens if a customer placed multiple orders? (The customer name repeats for each unique order row)"
    ]
  },
  "ASQL-001": {
    "code_id": "ASQL-001",
    "numeric_id": 71,
    "title": "Grade Students",
    "code": "SELECT student_id,\n       student_name,\n       marks,\n       CASE\n           WHEN marks >= 90 THEN 'A'\n           WHEN marks >= 80 THEN 'B'\n           WHEN marks >= 70 THEN 'C'\n           WHEN marks >= 60 THEN 'D'\n           ELSE 'F'\n       END AS grade\nFROM students\nORDER BY student_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We evaluate each student's score from top to bottom using CASE WHEN: scores 90+ get 'A', 80+ get 'B', 70+ get 'C', 60+ get 'D', and anything below 60 falls through to ELSE 'F'.",
    "mentalModel": "Think of a coin sorter machine with decreasing slot sizes. Large coins fall into the first slot (A), medium coins into the second (B), and smaller coins pass down until the catch-all tray at the bottom (F) catches whatever didn't fit above!",
    "lineByLine": [
      {
        "line": "SELECT student_id,",
        "explanation": "Retrieves the student's unique ID."
      },
      {
        "line": "       student_name,",
        "explanation": "Retrieves the student's full name."
      },
      {
        "line": "       marks,",
        "explanation": "Retrieves the raw numerical score."
      },
      {
        "line": "       CASE",
        "explanation": "Initiates conditional branching expression."
      },
      {
        "line": "           WHEN marks >= 90 THEN 'A'",
        "explanation": "Assigns 'A' if marks are 90 or above."
      },
      {
        "line": "           WHEN marks >= 80 THEN 'B'",
        "explanation": "Assigns 'B' if marks are 80 to 89."
      },
      {
        "line": "           WHEN marks >= 70 THEN 'C'",
        "explanation": "Assigns 'C' if marks are 70 to 79."
      },
      {
        "line": "           WHEN marks >= 60 THEN 'D'",
        "explanation": "Assigns 'D' if marks are 60 to 69."
      },
      {
        "line": "           ELSE 'F'",
        "explanation": "Default fallback assigning 'F' to scores under 60."
      },
      {
        "line": "       END AS grade",
        "explanation": "Closes the CASE block and aliases the computed column as grade."
      },
      {
        "line": "FROM students",
        "explanation": "Reads records from the students table."
      },
      {
        "line": "ORDER BY student_id;",
        "explanation": "Sorts output rows in ascending order by student_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Reversing condition order: Checking WHEN marks >= 60 first causes any score above 60 (including 95) to immediately receive a 'D' due to short-circuiting.",
      "❌ 2. Forgetting the ELSE clause: Omitting ELSE causes any score not matching the explicit WHEN rules to evaluate to NULL instead of 'F'.",
      "❌ 3. Forgetting the END keyword: In SQL, every CASE expression must terminate with END before specifying an alias."
    ],
    "keyTakeaway": "SQL CASE WHEN evaluates top-to-bottom and stops at the first matching condition; always order descending when testing greater-than-or-equal thresholds.",
    "interviewPros": [
      "Q1. Does CASE evaluate all conditions? No, it short-circuits and returns as soon as the first truthy condition is encountered.",
      "Q2. Why is descending order required here? Because testing `marks >= 60` first would match 95, preventing the `>= 90` branch from ever executing.",
      "Q3. Is ELSE mandatory? No, but omitted ELSE defaults unmatched rows to NULL.",
      "Q4. Can CASE expressions be nested or used inside aggregations? Yes, conditional aggregation (e.g. SUM(CASE WHEN ...)) is a standard interview pattern.",
      "Q5. Can CASE be used in WHERE or ORDER BY? Yes, CASE expressions are valid anywhere an expression is accepted."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between Simple CASE (CASE expr WHEN val THEN ...) and Searched CASE (CASE WHEN condition THEN ...)?\n• How would you count how many students received an 'A' using conditional aggregation? (COUNT(CASE WHEN marks >= 90 THEN 1 END))\n• How does SQL handle NULL values inside a CASE expression? (NULL evaluated against comparisons yields UNKNOWN and falls through to ELSE)"
    ]
  },
  "ASQL-002": {
    "code_id": "ASQL-002",
    "numeric_id": 72,
    "title": "Salary Bands",
    "code": "SELECT employee_id,\n       employee_name,\n       salary,\n       CASE\n           WHEN salary >= 100000 THEN 'High'\n           WHEN salary >= 70000 THEN 'Medium'\n           WHEN salary >= 40000 THEN 'Low'\n           ELSE 'Very Low'\n       END AS salary_band\nFROM employees\nORDER BY employee_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We classify employees into salary brackets using a CASE statement: salaries 100,000+ get 'High', 70,000+ get 'Medium', 40,000+ get 'Low', and anything lower falls into ELSE 'Very Low', sorted by employee_id.",
    "mentalModel": "Think of income tax brackets or salary tiers at a company. By checking from the top tier down, anyone earning six figures gets stamped 'High' immediately, while others trickle down to 'Medium', 'Low', or 'Very Low'!",
    "lineByLine": [
      {
        "line": "SELECT employee_id,",
        "explanation": "Retrieves the employee's unique identifier."
      },
      {
        "line": "       employee_name,",
        "explanation": "Retrieves the employee's full name."
      },
      {
        "line": "       salary,",
        "explanation": "Retrieves the base compensation amount."
      },
      {
        "line": "       CASE",
        "explanation": "Begins conditional evaluation expression."
      },
      {
        "line": "           WHEN salary >= 100000 THEN 'High'",
        "explanation": "Labels salaries 100k and above as 'High'."
      },
      {
        "line": "           WHEN salary >= 70000 THEN 'Medium'",
        "explanation": "Labels salaries between 70k and 99.9k as 'Medium'."
      },
      {
        "line": "           WHEN salary >= 40000 THEN 'Low'",
        "explanation": "Labels salaries between 40k and 69.9k as 'Low'."
      },
      {
        "line": "           ELSE 'Very Low'",
        "explanation": "Default fallback assigning 'Very Low' to salaries below 40k."
      },
      {
        "line": "       END AS salary_band",
        "explanation": "Terminates the CASE block and aliases the output column as salary_band."
      },
      {
        "line": "FROM employees",
        "explanation": "Reads rows from the employees table."
      },
      {
        "line": "ORDER BY employee_id;",
        "explanation": "Sorts the output rows in ascending order by employee_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Wrong clause order: Placing WHEN salary >= 40000 THEN 'Low' before 100000 causes high earners (like 120,000) to incorrectly be classified as 'Low'.",
      "❌ 2. Omitting the ELSE branch: Without ELSE 'Very Low', any employee with a salary below 40,000 will be evaluated to NULL.",
      "❌ 3. Writing unnecessary compound conditions: Writing WHEN salary >= 70000 AND salary < 100000 is verbose and redundant when descending order is maintained."
    ],
    "keyTakeaway": "Sequential CASE evaluation provides clean numerical categorization; maintaining descending order guarantees mutually exclusive brackets without redundant boolean expressions.",
    "interviewPros": [
      "Q1. Why is the order of WHEN clauses important? CASE statements evaluate top-to-bottom and exit upon the first truthy condition.",
      "Q2. Can CASE expressions return numeric values? Yes, CASE can return text, integers, floats, or dates.",
      "Q3. Can CASE be used in an ORDER BY clause? Yes, CASE is often used in ORDER BY to apply custom sorting orders (e.g. ORDER BY CASE salary_band WHEN 'High' THEN 1 ... END).",
      "Q4. What is the time complexity? O(N) linear time as each row is evaluated in constant time.",
      "Q5. How would you pivot the counts of employees in each band? Using SUM(CASE WHEN salary_band = 'High' THEN 1 ELSE 0 END) grouped by department."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• How would you handle negative or NULL salary values? (Include explicit WHEN salary IS NULL or WHEN salary < 0 conditions)\n• How does CASE differ between PostgreSQL, MySQL, and SQL Server? (CASE is ANSI standard and behaves identically across all major SQL dialects)\n• Can a CASE expression return different datatypes in different branches? (No, all THEN and ELSE return expressions must evaluate to compatible datatypes)"
    ]
  },
  "ASQL-003": {
    "code_id": "ASQL-003",
    "numeric_id": 73,
    "title": "Age Groups",
    "code": "SELECT person_id,\n       person_name,\n       age,\n       CASE\n           WHEN age >= 60 THEN 'Senior Citizen'\n           WHEN age >= 20 THEN 'Adult'\n           WHEN age >= 13 THEN 'Teen'\n           ELSE 'Child'\n       END AS age_group\nFROM persons\nORDER BY person_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We classify people by age from highest threshold to lowest using CASE WHEN: age 60+ gets 'Senior Citizen', 20+ gets 'Adult', 13+ gets 'Teen', and any age below 13 falls through to ELSE 'Child', sorted by person_id.",
    "mentalModel": "Imagine a theme park queue with age gates. Visitors aged 60+ go to the Senior Citizen lane, 20+ to Adult, 13+ to Teen, and anyone younger is automatically welcomed into the Child group!",
    "lineByLine": [
      {
        "line": "SELECT person_id,",
        "explanation": "Retrieves the person's unique identifier."
      },
      {
        "line": "       person_name,",
        "explanation": "Retrieves the person's full name."
      },
      {
        "line": "       age,",
        "explanation": "Retrieves the person's age in years."
      },
      {
        "line": "       CASE",
        "explanation": "Initiates conditional classification expression."
      },
      {
        "line": "           WHEN age >= 60 THEN 'Senior Citizen'",
        "explanation": "Classifies ages 60 and above as 'Senior Citizen'."
      },
      {
        "line": "           WHEN age >= 20 THEN 'Adult'",
        "explanation": "Classifies ages 20 to 59 as 'Adult'."
      },
      {
        "line": "           WHEN age >= 13 THEN 'Teen'",
        "explanation": "Classifies ages 13 to 19 as 'Teen'."
      },
      {
        "line": "           ELSE 'Child'",
        "explanation": "Default fallback classifying ages 0 to 12 as 'Child'."
      },
      {
        "line": "       END AS age_group",
        "explanation": "Closes the CASE expression and aliases the resulting column as age_group."
      },
      {
        "line": "FROM persons",
        "explanation": "Reads records from the persons table."
      },
      {
        "line": "ORDER BY person_id;",
        "explanation": "Sorts results in ascending order by person_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Testing lower ages first: Placing WHEN age >= 0 THEN 'Child' at the top causes everyone (including a 67-year-old) to be labeled 'Child' due to short-circuiting.",
      "❌ 2. Omitting the ELSE branch: Without ELSE 'Child', children aged 0-12 evaluate to NULL.",
      "❌ 3. Writing complex BETWEEN ranges: Writing WHEN age BETWEEN 20 AND 59 is redundant and error-prone compared to clean descending `>=` thresholds."
    ],
    "keyTakeaway": "Evaluating numerical brackets from highest to lowest in CASE statements creates a clean cascading filter that prevents overlapping boundary bugs.",
    "interviewPros": [
      "Q1. Why start with age >= 60? Because CASE short-circuits at the first match; descending order guarantees high ages aren't trapped by lower thresholds.",
      "Q2. Does CASE stop checking once a condition is met? Yes, subsequent WHEN clauses are completely skipped.",
      "Q3. Can CASE return numeric codes instead of text? Yes, e.g. returning 1 for Senior, 2 for Adult, etc.",
      "Q4. Can you group by this age group to see demographic distribution? Yes: `SELECT CASE ... END AS age_group, COUNT(*) FROM persons GROUP BY 1`.",
      "Q5. How does CASE handle NULL age values? A NULL age fails all comparisons and falls into ELSE unless explicitly handled with `WHEN age IS NULL`."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• How would you validate that ages cannot be negative? (Add WHEN age < 0 THEN 'Invalid' or an integrity constraint CHECK (age >= 0))\n• Can CASE expressions be evaluated in parallel across rows? (Yes, database query executors easily vectorize CASE expressions across columnar or row buffers)\n• How do you implement dynamic age group bucket sizing? (Join with an age_bands reference table using ON persons.age BETWEEN age_bands.min_age AND age_bands.max_age)"
    ]
  },
  "ASQL-004": {
    "code_id": "ASQL-004",
    "numeric_id": 74,
    "title": "Sales Categories",
    "code": "SELECT sale_id,\n       customer_name,\n       sale_amount,\n       CASE\n           WHEN sale_amount >= 100000 THEN 'Premium'\n           WHEN sale_amount >= 50000 THEN 'High'\n           WHEN sale_amount >= 20000 THEN 'Medium'\n           ELSE 'Low'\n       END AS sales_category\nFROM sales\nORDER BY sale_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We classify transactions into sales tiers based on sale_amount: 100k+ is 'Premium', 50k+ is 'High', 20k+ is 'Medium', and anything below 20k falls into ELSE 'Low', sorted by sale_id.",
    "mentalModel": "Imagine a VIP reward system for purchases. Any mega transaction of 100k+ gets a 'Premium' badge right away. Moderately high ones get 'High', standard ones get 'Medium', and smaller transactions fall into 'Low'!",
    "lineByLine": [
      {
        "line": "SELECT sale_id,",
        "explanation": "Retrieves the transaction's unique ID."
      },
      {
        "line": "       customer_name,",
        "explanation": "Retrieves the purchaser's name."
      },
      {
        "line": "       sale_amount,",
        "explanation": "Retrieves the monetary sale total."
      },
      {
        "line": "       CASE",
        "explanation": "Begins conditional classification expression."
      },
      {
        "line": "           WHEN sale_amount >= 100000 THEN 'Premium'",
        "explanation": "Assigns 'Premium' tier to sales 100k and above."
      },
      {
        "line": "           WHEN sale_amount >= 50000 THEN 'High'",
        "explanation": "Assigns 'High' tier to sales from 50k to 99.9k."
      },
      {
        "line": "           WHEN sale_amount >= 20000 THEN 'Medium'",
        "explanation": "Assigns 'Medium' tier to sales from 20k to 49.9k."
      },
      {
        "line": "           ELSE 'Low'",
        "explanation": "Default fallback assigning 'Low' to transactions under 20k."
      },
      {
        "line": "       END AS sales_category",
        "explanation": "Terminates the CASE block and aliases the computed tier as sales_category."
      },
      {
        "line": "FROM sales",
        "explanation": "Reads records from the sales table."
      },
      {
        "line": "ORDER BY sale_id;",
        "explanation": "Sorts results in ascending order by sale_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Reversing condition priority: Testing WHEN sale_amount >= 20000 first causes a 120,000 sale to be stamped 'Medium' due to short-circuiting.",
      "❌ 2. Forgetting the ELSE clause: Without ELSE 'Low', sales under 20,000 evaluate to NULL.",
      "❌ 3. Redundant BETWEEN checks: Writing WHEN sale_amount BETWEEN 50000 AND 99999 is verbose when descending order naturally establishes the ceiling."
    ],
    "keyTakeaway": "Cascading CASE WHEN statements offer high-performance transactional bucketing without the overhead of lookup tables or complex joins.",
    "interviewPros": [
      "Q1. Why start with sale_amount >= 100000? CASE evaluates top-down; descending order prevents higher amounts from matching lower bands.",
      "Q2. Can CASE expressions be nested? Yes, nested CASE statements are supported though flat descending structures are preferred for readability.",
      "Q3. How can you find the total revenue generated by Premium sales? Using conditional aggregation: `SUM(CASE WHEN sale_amount >= 100000 THEN sale_amount ELSE 0 END)`.",
      "Q4. Where can CASE be used in SQL? SELECT, ORDER BY, GROUP BY, HAVING, and inside aggregate functions.",
      "Q5. Can CASE return numeric scores instead of labels? Yes, e.g. returning tier codes 1, 2, 3, 4."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• How does the database optimizer handle CASE in index lookups? (Expressions on columns in WHERE generally cannot use B-Tree indexes unless a functional index exists)\n• How would you handle refunds or negative sales amounts? (Add WHEN sale_amount < 0 THEN 'Refund' or a CHECK constraint)\n• How does CASE perform over millions of rows? (Extremely fast O(N) evaluation that vectorizes well in modern columnar engines)"
    ]
  },
  "ASQL-005": {
    "code_id": "ASQL-005",
    "numeric_id": 75,
    "title": "Bonus Calculation",
    "code": "SELECT employee_id,\n       employee_name,\n       salary,\n       CASE\n           WHEN salary >= 100000 THEN salary * 0.20\n           WHEN salary >= 70000 THEN salary * 0.15\n           WHEN salary >= 40000 THEN salary * 0.10\n           ELSE salary * 0.05\n       END AS bonus\nFROM employees\nORDER BY employee_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We compute employee bonuses dynamically using CASE WHEN: salaries 100k+ get 20% (salary * 0.20), 70k+ get 15%, 40k+ get 10%, and below 40k gets 5% (salary * 0.05), sorted by employee_id.",
    "mentalModel": "Think of a tiered commission rate. Rather than just applying a text tag, the database calculates an exact bonus paycheck by multiplying the employee's base salary by their tier's decimal rate directly inside each branch!",
    "lineByLine": [
      {
        "line": "SELECT employee_id,",
        "explanation": "Retrieves the employee's unique identifier."
      },
      {
        "line": "       employee_name,",
        "explanation": "Retrieves the employee's full name."
      },
      {
        "line": "       salary,",
        "explanation": "Retrieves the base compensation amount."
      },
      {
        "line": "       CASE",
        "explanation": "Begins dynamic numeric conditional calculation."
      },
      {
        "line": "           WHEN salary >= 100000 THEN salary * 0.20",
        "explanation": "Calculates 20% bonus for salaries 100,000 and above."
      },
      {
        "line": "           WHEN salary >= 70000 THEN salary * 0.15",
        "explanation": "Calculates 15% bonus for salaries 70,000 to 99,999."
      },
      {
        "line": "           WHEN salary >= 40000 THEN salary * 0.10",
        "explanation": "Calculates 10% bonus for salaries 40,000 to 69,999."
      },
      {
        "line": "           ELSE salary * 0.05",
        "explanation": "Default fallback calculating 5% bonus for salaries below 40,000."
      },
      {
        "line": "       END AS bonus",
        "explanation": "Terminates the CASE block and aliases the computed bonus column."
      },
      {
        "line": "FROM employees",
        "explanation": "Reads records from the employees table."
      },
      {
        "line": "ORDER BY employee_id;",
        "explanation": "Sorts results in ascending order by employee_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Multiplying by whole integer instead of percentage: Writing salary * 20 computes 2000% rather than 20% (use 0.20).",
      "❌ 2. Inverting condition hierarchy: Checking WHEN salary >= 40000 first assigns 10% bonus to a 120,000 earner instead of 20%.",
      "❌ 3. Omitting the ELSE branch: Leaves employees earning under 40k with NULL bonuses instead of 5%.",
      "❌ 4. Type mismatch: Returning text in one branch and numbers in another causes a datatype conversion error in strict SQL engines."
    ],
    "keyTakeaway": "SQL CASE WHEN branches are full expressions capable of inline arithmetic operations (e.g. salary * 0.20), enabling clean dynamic payroll and financial computations.",
    "interviewPros": [
      "Q1. Can CASE expressions perform calculations and arithmetic? Yes, each THEN/ELSE clause can contain full mathematical expressions, function calls, or subqueries.",
      "Q2. Why multiply by 0.20 instead of 20? 0.20 represents 20/100 (20%); multiplying by 20 would yield twenty times the base salary.",
      "Q3. Can ROUND() be wrapped around the CASE expression? Yes: `ROUND(CASE ... END, 2)` formats the computed bonus to 2 decimal currency places.",
      "Q4. Can you calculate total company bonus payout? Yes: `SUM(CASE WHEN salary >= 100000 THEN salary * 0.20 ... END)`.",
      "Q5. What is the time complexity? O(N) linear time with constant time arithmetic per row."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What happens if salary is NULL? (Multiplication with NULL returns NULL; use COALESCE(salary, 0) or an explicit IS NULL branch)\n• How do floating-point rounding errors affect financial arithmetic in SQL? (In production, use NUMERIC/DECIMAL types instead of FLOAT/REAL for monetary calculations)\n• How would you give an extra flat bonus on top of the percentage? (e.g. `(salary * 0.20) + 5000` inside the THEN branch)"
    ]
  },
  "ASQL-006": {
    "code_id": "ASQL-006",
    "numeric_id": 76,
    "title": "Customer Classification",
    "code": "SELECT customer_id,\n       customer_name,\n       total_purchase,\n       CASE\n           WHEN total_purchase >= 100000 THEN 'Platinum'\n           WHEN total_purchase >= 50000 THEN 'Gold'\n           WHEN total_purchase >= 20000 THEN 'Silver'\n           ELSE 'Bronze'\n       END AS customer_type\nFROM customers\nORDER BY customer_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We evaluate total_purchase from highest threshold to lowest using CASE WHEN: spend 100k+ is 'Platinum', 50k+ is 'Gold', 20k+ is 'Silver', and anything lower falls into ELSE 'Bronze', sorted by customer_id.",
    "mentalModel": "Think of frequent flyer or credit card loyalty tiers. A shopper spending 150k immediately earns the top-tier Platinum card, while lower spenders cascade down into Gold, Silver, or Bronze!",
    "lineByLine": [
      {
        "line": "SELECT customer_id,",
        "explanation": "Retrieves the customer's unique ID."
      },
      {
        "line": "       customer_name,",
        "explanation": "Retrieves the customer's full name."
      },
      {
        "line": "       total_purchase,",
        "explanation": "Retrieves cumulative lifetime purchase spend."
      },
      {
        "line": "       CASE",
        "explanation": "Initiates conditional loyalty classification."
      },
      {
        "line": "           WHEN total_purchase >= 100000 THEN 'Platinum'",
        "explanation": "Assigns 'Platinum' tier to total spend of 100,000 and above."
      },
      {
        "line": "           WHEN total_purchase >= 50000 THEN 'Gold'",
        "explanation": "Assigns 'Gold' tier to total spend between 50,000 and 99,999."
      },
      {
        "line": "           WHEN total_purchase >= 20000 THEN 'Silver'",
        "explanation": "Assigns 'Silver' tier to total spend between 20,000 and 49,999."
      },
      {
        "line": "           ELSE 'Bronze'",
        "explanation": "Default fallback assigning 'Bronze' to spend below 20,000."
      },
      {
        "line": "       END AS customer_type",
        "explanation": "Terminates the CASE block and aliases the computed tier as customer_type."
      },
      {
        "line": "FROM customers",
        "explanation": "Reads records from the customers table."
      },
      {
        "line": "ORDER BY customer_id;",
        "explanation": "Sorts results in ascending order by customer_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Reversing condition priority: Placing WHEN total_purchase >= 20000 THEN 'Silver' at the top causes 150k spenders to be labeled 'Silver' due to short-circuiting.",
      "❌ 2. Omitting the ELSE branch: Causes customers with spend under 20k to receive NULL rather than 'Bronze'.",
      "❌ 3. Redundant BETWEEN syntax: Using BETWEEN 50000 AND 99999 is unnecessary and prone to off-by-one errors when descending order is maintained."
    ],
    "keyTakeaway": "Cascading CASE expressions partition continuous numeric variables into discrete cohorts in linear O(N) time with minimal execution overhead.",
    "interviewPros": [
      "Q1. Why check >= 100000 first? Because SQL evaluates top-to-bottom and exits at the first match; higher thresholds must be evaluated first.",
      "Q2. How can you find the count of customers in each loyalty tier? Group by the CASE expression: `SELECT CASE ... END AS tier, COUNT(*) FROM customers GROUP BY 1`.",
      "Q3. How can you find total revenue by tier? Using conditional aggregation: `SUM(CASE WHEN total_purchase >= 100000 THEN total_purchase ELSE 0 END)`.",
      "Q4. Can CASE return numeric tier codes? Yes, e.g. returning 1, 2, 3, 4 instead of string labels.",
      "Q5. Can this query run without an index on total_purchase? Yes, though for large tables an index aids filtering if a WHERE clause is added."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between static CASE bucketing vs dynamic NTILE(4) bucketing? (CASE uses fixed business rule thresholds; NTILE splits the population into 4 equal-sized quartiles regardless of spend values)\n• How do you handle customers with 0 or negative purchases? (Add WHEN total_purchase <= 0 THEN 'Inactive' or a CHECK constraint)\n• How can loyalty tiers be stored if business rules change frequently? (Maintain a loyalty_tiers metadata lookup table and join with `BETWEEN min_spend AND max_spend`)"
    ]
  },
  "ASQL-007": {
    "code_id": "ASQL-007",
    "numeric_id": 77,
    "title": "Pass/Fail Status",
    "code": "SELECT student_id,\n       student_name,\n       marks,\n       CASE\n           WHEN marks >= 40 THEN 'Pass'\n           ELSE 'Fail'\n       END AS result\nFROM students\nORDER BY student_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We evaluate each student's marks with CASE WHEN: scores of 40 or greater receive 'Pass', while any score below 40 falls into ELSE 'Fail', sorted by student_id.",
    "mentalModel": "Think of a security barrier set at a height of 40 inches. Anyone 40 or above gets through with a green 'Pass' stamp; anyone shorter receives a red 'Fail' stamp!",
    "lineByLine": [
      {
        "line": "SELECT student_id,",
        "explanation": "Retrieves the student's unique ID."
      },
      {
        "line": "       student_name,",
        "explanation": "Retrieves the student's full name."
      },
      {
        "line": "       marks,",
        "explanation": "Retrieves the raw numerical score."
      },
      {
        "line": "       CASE",
        "explanation": "Begins conditional evaluation expression."
      },
      {
        "line": "           WHEN marks >= 40 THEN 'Pass'",
        "explanation": "Assigns 'Pass' to marks 40 and above."
      },
      {
        "line": "           ELSE 'Fail'",
        "explanation": "Default fallback assigning 'Fail' to marks under 40."
      },
      {
        "line": "       END AS result",
        "explanation": "Closes the CASE expression and aliases the outcome column as result."
      },
      {
        "line": "FROM students",
        "explanation": "Reads records from the students table."
      },
      {
        "line": "ORDER BY student_id;",
        "explanation": "Sorts results in ascending order by student_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using strict greater-than (> 40): Writing WHEN marks > 40 causes a student who scored exactly 40 to fail unfairly.",
      "❌ 2. Omitting the ELSE clause: Causes failing students to receive NULL rather than 'Fail'.",
      "❌ 3. Reversing the inequality (marks <= 40): Inverts the academic logic, causing failing students to be labeled as 'Pass'."
    ],
    "keyTakeaway": "A single WHEN branch with an explicit ELSE clause is the cleanest, most efficient pattern for binary categorization in SQL.",
    "interviewPros": [
      "Q1. Can CASE have only a single WHEN clause? Yes, CASE requires at least one WHEN condition; simple binary logic requires only one WHEN and an ELSE.",
      "Q2. Why is >= 40 used instead of > 40? 40 marks is the passing grade boundary; inclusive comparison ensures 40 is categorized as Pass.",
      "Q3. How can you count the total number of passing students? Using conditional aggregation: `COUNT(CASE WHEN marks >= 40 THEN 1 END)` or `SUM(CASE WHEN marks >= 40 THEN 1 ELSE 0 END)`.",
      "Q4. Can you calculate the pass percentage? Yes: `ROUND(AVG(CASE WHEN marks >= 40 THEN 100.0 ELSE 0.0 END), 2)`.",
      "Q5. Can this logic be used in an IIF() function? In SQL Server and SQLite (newer versions), `IIF(marks >= 40, 'Pass', 'Fail')` is supported, but standard CASE WHEN is portable across all SQL engines."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• How does SQL handle NULL values in marks? (NULL >= 40 evaluates to UNKNOWN, which defaults to the ELSE branch, assigning 'Fail'; use `WHEN marks IS NULL THEN 'Absent'` if distinction is needed)\n• How would you filter for only passing students? (Either repeat `WHERE marks >= 40` or wrap in a CTE/subquery to filter by `result = 'Pass'`)\n• Why can't you write WHERE result = 'Pass' directly in the same SELECT query? (Because the WHERE clause executes before the SELECT clause assigns the column alias)"
    ]
  },
  "ASQL-008": {
    "code_id": "ASQL-008",
    "numeric_id": 78,
    "title": "Gender Formatting",
    "code": "SELECT employee_id,\n       employee_name,\n       gender,\n       CASE\n           WHEN gender = 'M' THEN 'Male'\n           WHEN gender = 'F' THEN 'Female'\n           WHEN gender = 'O' THEN 'Other'\n           ELSE 'Unknown'\n       END AS gender_name\nFROM employees\nORDER BY employee_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We decode raw gender codes using CASE WHEN: 'M' becomes 'Male', 'F' becomes 'Female', 'O' becomes 'Other', and any invalid or unknown code defaults to ELSE 'Unknown', sorted by employee_id.",
    "mentalModel": "Think of a legend decoder on a map. Instead of printing cryptic abbreviations like 'M' or 'F' on official reports, the database translates each letter into its complete, polished english word!",
    "lineByLine": [
      {
        "line": "SELECT employee_id,",
        "explanation": "Retrieves the employee's unique ID."
      },
      {
        "line": "       employee_name,",
        "explanation": "Retrieves the employee's full name."
      },
      {
        "line": "       gender,",
        "explanation": "Retrieves the stored single-character gender code."
      },
      {
        "line": "       CASE",
        "explanation": "Initiates conditional code translation."
      },
      {
        "line": "           WHEN gender = 'M' THEN 'Male'",
        "explanation": "Decodes code 'M' to 'Male'."
      },
      {
        "line": "           WHEN gender = 'F' THEN 'Female'",
        "explanation": "Decodes code 'F' to 'Female'."
      },
      {
        "line": "           WHEN gender = 'O' THEN 'Other'",
        "explanation": "Decodes code 'O' to 'Other'."
      },
      {
        "line": "           ELSE 'Unknown'",
        "explanation": "Default fallback assigning 'Unknown' to unexpected codes (e.g. 'X') or NULL values."
      },
      {
        "line": "       END AS gender_name",
        "explanation": "Terminates the CASE block and aliases the output column as gender_name."
      },
      {
        "line": "FROM employees",
        "explanation": "Reads records from the employees table."
      },
      {
        "line": "ORDER BY employee_id;",
        "explanation": "Sorts results in ascending order by employee_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Omitting single quotes around string literals: Writing WHEN gender = M instead of 'M' causes a column lookup syntax error.",
      "❌ 2. Omitting the ELSE branch: Causes unlisted codes (like 'X') or NULLs to evaluate to NULL instead of 'Unknown'.",
      "❌ 3. Checking for the long name: Writing WHEN gender = 'Male' fails because the underlying column stores 'M'."
    ],
    "keyTakeaway": "Discrete value mapping via CASE WHEN is the standard SQL method for transforming internal database codes into client-friendly display labels.",
    "interviewPros": [
      "Q1. Why decode in SQL rather than updating the database table? Because single-character codes save significant storage space and index memory; decoding is done purely at the presentation/query layer.",
      "Q2. What happens if gender is NULL? NULL comparisons evaluate to UNKNOWN, cleanly falling through to the ELSE branch to return 'Unknown'.",
      "Q3. How can you pivot employee counts by gender into columns? Using conditional aggregation: `COUNT(CASE WHEN gender = 'M' THEN 1 END) AS male_count, COUNT(CASE WHEN gender = 'F' THEN 1 END) AS female_count`.",
      "Q4. Can CASE handle case-insensitive codes (e.g. 'm' and 'M')? Yes: `WHEN UPPER(gender) = 'M' THEN 'Male'`.",
      "Q5. Can this be written as a simple CASE expression? Yes: `CASE gender WHEN 'M' THEN 'Male' WHEN 'F' THEN 'Female' WHEN 'O' THEN 'Other' ELSE 'Unknown' END`."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between Simple CASE (CASE expr WHEN val THEN ...) and Searched CASE (CASE WHEN condition THEN ...)? (Simple CASE tests equality against a single base expression; Searched CASE supports arbitrary boolean conditions and ranges)\n• When should you replace a CASE statement with a lookup table? (When there are dozens of codes or codes change dynamically without code redeployment, a dim_gender lookup table joined via foreign key is preferable)\n• How does database collation affect string comparisons in CASE? (Collation determines whether comparisons are case-sensitive or accent-sensitive)"
    ]
  },
  "ASQL-009": {
    "code_id": "ASQL-009",
    "numeric_id": 79,
    "title": "Conditional Aggregation",
    "code": "SELECT\n    COUNT(*) AS total_students,\n    SUM(\n        CASE\n            WHEN marks >= 40 THEN 1\n            ELSE 0\n        END\n    ) AS passed_students,\n    SUM(\n        CASE\n            WHEN marks < 40 THEN 1\n            ELSE 0\n        END\n    ) AS failed_students\nFROM students;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "simplestExplanation": "We compute total student count using COUNT(*), and calculate passing and failing student totals in the same scan by wrapping CASE WHEN statements inside SUM(): returning 1 for matches and 0 otherwise.",
    "mentalModel": "Imagine a scorekeeper holding two counters. When a passing score comes in, they add 1 to the 'Pass' counter and 0 to the 'Fail' counter. At the end of the line, both tallies together with the total head-count are displayed on one neat dashboard row!",
    "lineByLine": [
      {
        "line": "SELECT",
        "explanation": "Initiates projection of summary metrics."
      },
      {
        "line": "    COUNT(*) AS total_students,",
        "explanation": "Counts the total number of students in the table."
      },
      {
        "line": "    SUM(",
        "explanation": "Opens summation aggregate function for conditional passed count."
      },
      {
        "line": "        CASE",
        "explanation": "Evaluates pass criteria per student."
      },
      {
        "line": "            WHEN marks >= 40 THEN 1",
        "explanation": "Emits 1 when marks are 40 or greater."
      },
      {
        "line": "            ELSE 0",
        "explanation": "Emits 0 when marks are below 40."
      },
      {
        "line": "        END",
        "explanation": "Closes the CASE evaluation."
      },
      {
        "line": "    ) AS passed_students,",
        "explanation": "Sums the 1s and 0s, aliasing the total as passed_students."
      },
      {
        "line": "    SUM(",
        "explanation": "Opens summation aggregate function for conditional failed count."
      },
      {
        "line": "        CASE",
        "explanation": "Evaluates fail criteria per student."
      },
      {
        "line": "            WHEN marks < 40 THEN 1",
        "explanation": "Emits 1 when marks are strictly below 40."
      },
      {
        "line": "            ELSE 0",
        "explanation": "Emits 0 when marks are 40 or greater."
      },
      {
        "line": "        END",
        "explanation": "Closes the CASE evaluation."
      },
      {
        "line": "    ) AS failed_students",
        "explanation": "Sums the 1s and 0s, aliasing the total as failed_students."
      },
      {
        "line": "FROM students;",
        "explanation": "Executes single-table scan over the students table without needing a GROUP BY clause."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Returning text inside SUM(): Writing SUM(CASE WHEN marks >= 40 THEN 'Pass' END) causes a numeric type conversion error.",
      "❌ 2. Forgetting ELSE 0: Omitting ELSE returns NULL for unmatched rows, which while ignored by SUM, can cause unintended edge cases in mathematical expressions.",
      "❌ 3. Attempting to use COUNT(CASE WHEN marks >= 40 THEN 0 END): COUNT counts non-null values! It would count 0 as a valid row. You must use SUM with 1 and 0, or COUNT with 1 and NULL."
    ],
    "keyTakeaway": "Conditional aggregation via SUM(CASE WHEN ... THEN 1 ELSE 0 END) enables multiple filtered metrics to be computed simultaneously in a single table scan.",
    "interviewPros": [
      "Q1. Why use SUM(CASE WHEN ... THEN 1 ELSE 0 END) instead of COUNT(*)? COUNT(*) counts every single row; conditional SUM allows selective counting based on boolean criteria.",
      "Q2. Why return 1 and 0? SUM() mathematically adds numbers; emitting 1 for matches and 0 for non-matches totals the exact number of matching occurrences.",
      "Q3. Can this pattern be used to calculate percentages? Yes: `ROUND(100.0 * SUM(CASE WHEN marks >= 40 THEN 1 ELSE 0 END) / COUNT(*), 2) AS pass_rate`.",
      "Q4. Can you use COUNT(CASE WHEN marks >= 40 THEN 1 END) without ELSE? Yes, because COUNT ignores NULLs; if ELSE is omitted, unmatched rows evaluate to NULL and are not counted.",
      "Q5. What is the space complexity? O(1) auxiliary space because aggregation maintains running scalar accumulators in memory."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the FILTER clause in PostgreSQL and SQLite 3.30+? (`COUNT(*) FILTER (WHERE marks >= 40)` is the modern SQL standard shorthand for conditional aggregation)\n• How does conditional aggregation compare to running multiple SELECT queries with UNION? (Conditional aggregation requires only 1 table scan O(N), whereas multiple queries scan the table multiple times O(K × N))\n• How do you pivot row values into columns dynamically without conditional aggregation? (In database engines with PIVOT support, PIVOT can be used, but SUM(CASE ...) is universal across every SQL engine)"
    ]
  },
  "ASQL-010": {
    "code_id": "ASQL-010",
    "numeric_id": 80,
    "title": "Multiple CASE Conditions",
    "code": "SELECT employee_id,\n       employee_name,\n       age,\n       salary,\n       CASE\n           WHEN age < 30 THEN 'Young'\n           WHEN age < 50 THEN 'Mid Age'\n           ELSE 'Senior'\n       END AS age_category,\n       CASE\n           WHEN salary >= 100000 THEN 'High'\n           WHEN salary >= 50000 THEN 'Medium'\n           ELSE 'Low'\n       END AS salary_category\nFROM employees\nORDER BY employee_id;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We generate two separate calculated columns in the same SELECT statement: one CASE WHEN categorizes age (< 30 Young, < 50 Mid Age, ELSE Senior) and a second CASE WHEN categorizes salary (>= 100k High, >= 50k Medium, ELSE Low), sorted by employee_id.",
    "mentalModel": "Imagine an employee badge printer. Machine #1 stamps an age cohort sticker ('Young', 'Mid Age', 'Senior') on the top corner, and Machine #2 stamps a salary band sticker ('High', 'Medium', 'Low') on the bottom corner. Both operations run in parallel on the same badge!",
    "lineByLine": [
      {
        "line": "SELECT employee_id,",
        "explanation": "Retrieves the employee's unique ID."
      },
      {
        "line": "       employee_name,",
        "explanation": "Retrieves the employee's full name."
      },
      {
        "line": "       age,",
        "explanation": "Retrieves the recorded age."
      },
      {
        "line": "       salary,",
        "explanation": "Retrieves the base compensation amount."
      },
      {
        "line": "       CASE",
        "explanation": "Opens first CASE expression for age segmentation."
      },
      {
        "line": "           WHEN age < 30 THEN 'Young'",
        "explanation": "Assigns 'Young' to ages below 30."
      },
      {
        "line": "           WHEN age < 50 THEN 'Mid Age'",
        "explanation": "Assigns 'Mid Age' to ages from 30 to 49."
      },
      {
        "line": "           ELSE 'Senior'",
        "explanation": "Default fallback assigning 'Senior' to ages 50 and above."
      },
      {
        "line": "       END AS age_category,",
        "explanation": "Closes first CASE and aliases the column as age_category."
      },
      {
        "line": "       CASE",
        "explanation": "Opens second independent CASE expression for compensation tiering."
      },
      {
        "line": "           WHEN salary >= 100000 THEN 'High'",
        "explanation": "Assigns 'High' to salaries 100,000 and above."
      },
      {
        "line": "           WHEN salary >= 50000 THEN 'Medium'",
        "explanation": "Assigns 'Medium' to salaries between 50,000 and 99,999."
      },
      {
        "line": "           ELSE 'Low'",
        "explanation": "Default fallback assigning 'Low' to salaries below 50,000."
      },
      {
        "line": "       END AS salary_category",
        "explanation": "Closes second CASE and aliases the column as salary_category."
      },
      {
        "line": "FROM employees",
        "explanation": "Reads records from the employees table."
      },
      {
        "line": "ORDER BY employee_id;",
        "explanation": "Sorts results in ascending order by employee_id."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Trying to compute two columns inside a single CASE block: Each computed column requires its own dedicated CASE ... END block separated by a comma.",
      "❌ 2. Forgetting END on the first CASE: Causes a syntax parsing error before the comma.",
      "❌ 3. Reversing age priority: Writing WHEN age >= 0 THEN 'Young' first traps all older employees as 'Young'."
    ],
    "keyTakeaway": "Multiple CASE WHEN blocks can coexist in a single SELECT projection, allowing multiple independent business categorizations in one query pass.",
    "interviewPros": [
      "Q1. Can one SELECT query contain multiple CASE statements? Yes, each CASE statement is an independent scalar expression that produces its own column.",
      "Q2. Do the two CASE expressions affect each other? No, they operate on completely independent attributes (age vs salary) and evaluate in parallel per row.",
      "Q3. Can you combine both into a cross-tabulation grid? Yes, you can group by both: `SELECT age_category, salary_category, COUNT(*) FROM (...) GROUP BY 1, 2`.",
      "Q4. Can a CASE expression reference the alias of another CASE expression? No, aliases defined in SELECT cannot be referenced in the same SELECT clause; you must repeat the expression or wrap it in a CTE/subquery.",
      "Q5. What is the execution cost of multiple CASE blocks? Negligible; modern CPUs evaluate simple conditional branches in nanoseconds during the single table scan."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• How would you generate a composite category (e.g. 'Young High Earner')? (Use boolean AND inside a single CASE: `WHEN age < 30 AND salary >= 100000 THEN 'Young High Earner'` or concatenate both column results)\n• How do database query planners vectorize multiple CASE expressions? (Columnar storage engines vectorize each projection expression across SIMD registers across column blocks)\n• What are generated columns (stored/virtual) in MySQL/PostgreSQL? (You can define generated columns directly on the table DDL using these CASE expressions so they are computed automatically upon INSERT/UPDATE)"
    ]
  },
  "Pro-001": {
    "code_id": "Pro-001",
    "numeric_id": 81,
    "title": "Combine Two Tables",
    "code": "SELECT\n    p.firstName,\n    p.lastName,\n    a.city,\n    a.state\nFROM Person AS p\nLEFT JOIN Address AS a\nON p.personId = a.personId;",
    "timeComplexity": "O(N + M)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We perform a LEFT JOIN from Person to Address matching on personId so every person is returned, with city and state filled with NULL for anyone lacking an address.",
    "mentalModel": "Think of a company directory. Everyone gets an ID card printed with their first and last name. If they registered an office address, their city and state are stamped on; otherwise, those fields remain blank (NULL), but their card is never thrown away!",
    "lineByLine": [
      {
        "line": "SELECT",
        "explanation": "Initiates projection of specified personal and geographical attributes."
      },
      {
        "line": "    p.firstName,",
        "explanation": "Retrieves the person's first name."
      },
      {
        "line": "    p.lastName,",
        "explanation": "Retrieves the person's last name."
      },
      {
        "line": "    a.city,",
        "explanation": "Retrieves the city from Address (evaluates to NULL if no matching address exists)."
      },
      {
        "line": "    a.state",
        "explanation": "Retrieves the state from Address (evaluates to NULL if no matching address exists)."
      },
      {
        "line": "FROM Person AS p",
        "explanation": "Designates Person as the primary left table whose rows must all be preserved."
      },
      {
        "line": "LEFT JOIN Address AS a",
        "explanation": "Performs an outer join against Address, retaining all left-side rows regardless of a match."
      },
      {
        "line": "ON p.personId = a.personId;",
        "explanation": "Joins records by equating primary key Person.personId with foreign key Address.personId."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using INNER JOIN instead of LEFT JOIN: Drops individuals (like Allen Wang) who do not have an address registered.",
      "❌ 2. Equating the wrong key columns: Writing ON p.personId = a.addressId joins person IDs with address IDs.",
      "❌ 3. Swapping table positions: Writing FROM Address a LEFT JOIN Person p drops persons who do not have addresses."
    ],
    "keyTakeaway": "A LEFT JOIN preserves every row from the primary left table, returning NULL for unmatched right-table columns.",
    "interviewPros": [
      "Q1. Why is LEFT JOIN chosen over INNER JOIN? Because the problem statement explicitly requires returning all persons, even when their address is missing (with NULL for city/state).",
      "Q2. Which table belongs on the left side of the JOIN? The Person table, because its rows must unconditionally appear in the final output.",
      "Q3. How does the database optimize this query? If indexes exist on Person.personId and Address.personId, the optimizer uses an Index Nested Loops Join or Hash Outer Join in O(N + M) time.",
      "Q4. What if a person has multiple addresses? A LEFT JOIN would duplicate the person row for each matching address; if only one address is desired, deduplication or aggregation (e.g. ROW_NUMBER()) would be needed.",
      "Q5. Can this query be written with a correlated subquery? Yes, but joining is significantly more idiomatic and scalable than correlated scalar subqueries in SELECT."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the difference between filtering on Address in the ON clause vs the WHERE clause? (Filtering in ON preserves unmatched Person rows with NULLs; filtering in WHERE turns the LEFT JOIN into an INNER JOIN by discarding NULLs)\n• How does the query engine handle NULL in the join condition? (NULL = NULL evaluates to UNKNOWN, so rows with NULL personId will never match an address)\n• How would you find ONLY persons who lack an address? (Add `WHERE a.personId IS NULL` after the LEFT JOIN)"
    ]
  },
  "Pro-002": {
    "code_id": "Pro-002",
    "numeric_id": 82,
    "title": "Employees Earning More Than Their Managers",
    "code": "SELECT e.name AS Employee\nFROM Employee AS e\nJOIN Employee AS m\nON e.managerId = m.id\nWHERE e.salary > m.salary;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We perform a SELF JOIN on the Employee table, matching the employee's managerId to the manager's id, and filter for rows where the employee's salary is strictly higher than their manager's.",
    "mentalModel": "Imagine every employee holding a folder with their own salary and their boss's ID. In line, they walk up to their boss, compare the paystubs side-by-side, and only those out-earning their manager step into the winner's circle!",
    "lineByLine": [
      {
        "line": "SELECT e.name AS Employee",
        "explanation": "Selects the employee's name and aliases the column as Employee."
      },
      {
        "line": "FROM Employee AS e",
        "explanation": "Designates the Employee table under alias e representing individual employees."
      },
      {
        "line": "JOIN Employee AS m",
        "explanation": "Joins the same Employee table under alias m representing their respective managers."
      },
      {
        "line": "ON e.managerId = m.id",
        "explanation": "Matches each employee's managerId foreign key to the manager's primary key id."
      },
      {
        "line": "WHERE e.salary > m.salary;",
        "explanation": "Filters only for instances where the employee earns strictly more than their manager."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Joining on identical primary keys: Writing ON e.id = m.id compares each employee to themselves rather than their supervisor.",
      "❌ 2. Reversing inequality: Writing e.salary < m.salary isolates underpaid employees instead of overpaid employees.",
      "❌ 3. Forgetting table aliases: Using Employee.salary without aliases creates ambiguous column references since both tables have identical schemas."
    ],
    "keyTakeaway": "A self-join resolves parent-child and hierarchical relationships stored within a single database table by treating aliases as separate logical tables.",
    "interviewPros": [
      "Q1. What is a self-join and when is it necessary? A self-join is when a table is joined with itself; it is necessary when recursive or hierarchical relationships (e.g. employee-manager, bill-of-materials, parent-child categories) exist in one table.",
      "Q2. Why is INNER JOIN appropriate here instead of LEFT JOIN? Employees without managers (managerId IS NULL, e.g. CEO) can never have a manager salary to compare against, so inner joining safely excludes them.",
      "Q3. How can this query be optimized? Adding an index on `managerId` and `(managerId, salary)` turns the join into a fast index lookup.",
      "Q4. Can this be solved with a correlated subquery? Yes: `WHERE salary > (SELECT salary FROM Employee m WHERE m.id = e.managerId)`, but a self-join is typically favored for performance and readability.",
      "Q5. What happens if e.salary = m.salary? The condition `>` is strict, so equal salaries are correctly excluded."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What happens if managerId is NULL? (In an INNER JOIN, NULL = id evaluates to UNKNOWN and the row is dropped, which is correct since no manager exists)\n• How would you find all levels in an organization hierarchy (e.g. employee -> manager -> VP -> CEO)? (Requires a Recursive CTE using `WITH RECURSIVE`)\n• How do implicit joins `FROM Employee e, Employee m WHERE e.managerId = m.id` compare to explicit `JOIN`? (Both produce identical query execution plans, but explicit ANSI JOIN is industry best practice)"
    ]
  },
  "Pro-003": {
    "code_id": "Pro-003",
    "numeric_id": 83,
    "title": "Duplicate Emails",
    "code": "SELECT email AS Email\nFROM Person\nGROUP BY email\nHAVING COUNT(*) > 1;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We group all records in Person by email and use HAVING COUNT(*) > 1 to filter and return only the emails that appear more than once.",
    "mentalModel": "Imagine sorting incoming mail into pigeonholes labeled with each email address. Once all letters are sorted, you walk along the boxes and pick up only the ones that hold 2 or more envelopes!",
    "lineByLine": [
      {
        "line": "SELECT email AS Email",
        "explanation": "Selects the email address attribute, aliasing the column as Email."
      },
      {
        "line": "FROM Person",
        "explanation": "Scans the Person table containing contact identity records."
      },
      {
        "line": "GROUP BY email",
        "explanation": "Aggregates identical email addresses into distinct group buckets."
      },
      {
        "line": "HAVING COUNT(*) > 1;",
        "explanation": "Filters groups post-aggregation, keeping only emails that have a row count strictly greater than 1."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using WHERE COUNT(*) > 1: Aggregation functions cannot appear in the WHERE clause because WHERE executes before grouping occurs.",
      "❌ 2. Omitting GROUP BY: Running HAVING COUNT(*) > 1 without GROUP BY evaluates the entire table as a single grand-total group.",
      "❌ 3. Forgetting the output alias: Problem specifically asks for column header 'Email' rather than 'email'."
    ],
    "keyTakeaway": "HAVING evaluates aggregated group properties (like COUNT(*) > 1), whereas WHERE filters individual rows before grouping.",
    "interviewPros": [
      "Q1. Why must HAVING be used instead of WHERE? WHERE evaluates row-by-row before any aggregation or grouping occurs; HAVING evaluates after groups are formed, allowing criteria on aggregate functions like COUNT(*).",
      "Q2. What is the execution order of this query? FROM Person -> GROUP BY email -> HAVING COUNT(*) > 1 -> SELECT email AS Email.",
      "Q3. How does database indexing help this query? A B-tree index on `email` allows the engine to perform a stream aggregate or index skip scan rather than a full table hash-aggregation.",
      "Q4. Can this be written without GROUP BY? Yes, using a self-join `SELECT DISTINCT p1.email FROM Person p1 JOIN Person p2 ON p1.email = p2.email AND p1.id != p2.id` or `EXISTS`, but GROUP BY + HAVING is cleaner and more optimal.",
      "Q5. Is COUNT(*) preferred over COUNT(id)? Yes, COUNT(*) clearly conveys counting the number of records in each bucket without null-checking overhead."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• How would you delete duplicates, keeping only the record with the smallest id? (DELETE p1 FROM Person p1 JOIN Person p2 ON p1.email = p2.email AND p1.id > p2.id)\n• What happens if email contains NULL values? (SQL groups NULLs into a single group; if multiple rows have NULL, HAVING COUNT(*) > 1 would return NULL unless filtered by `WHERE email IS NOT NULL`)\n• How does the database implement GROUP BY under the hood? (Hash Aggregation or Sort/Stream Aggregation depending on index availability and memory budget)"
    ]
  },
  "Pro-004": {
    "code_id": "Pro-004",
    "numeric_id": 84,
    "title": "Delete Duplicate Emails",
    "code": "DELETE p1\nFROM Person p1\nJOIN Person p2\nON p1.email = p2.email\nAND p1.id > p2.id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(1)",
    "simplestExplanation": "We perform a self-join on Person matching identical email addresses, and delete only the records from alias p1 where p1's id is strictly greater than p2's id, preserving the record with the minimum id.",
    "mentalModel": "Imagine two identical stacks of index cards. Whenever you spot two cards sharing the same email address, you compare their ID numbers. You shred the card with the bigger ID number and keep the card with the lower ID number!",
    "lineByLine": [
      {
        "line": "DELETE p1",
        "explanation": "Directs the deletion operation specifically at rows belonging to the p1 table alias."
      },
      {
        "line": "FROM Person p1",
        "explanation": "Instantiates the first copy of the Person table as the deletion target."
      },
      {
        "line": "JOIN Person p2",
        "explanation": "Self-joins a second copy of Person as the comparison reference."
      },
      {
        "line": "ON p1.email = p2.email",
        "explanation": "Pairs records that have identical email addresses."
      },
      {
        "line": "AND p1.id > p2.id;",
        "explanation": "Ensures only rows with higher IDs match for deletion, protecting the lowest ID."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Reversing the inequality: Writing p1.id < p2.id deletes the smallest ID and keeps the largest duplicate.",
      "❌ 2. Joining by ID: Writing ON p1.id = p2.id compares each row to itself and finds zero duplicates.",
      "❌ 3. Forgetting the email comparison: Writing only p1.id > p2.id deletes all rows except the absolute first row of the entire table."
    ],
    "keyTakeaway": "Multi-table DELETE syntax with a self-join condition `p1.id > p2.id` removes redundant records in-place while keeping the first occurrence.",
    "interviewPros": [
      "Q1. Why target DELETE p1 instead of DELETE Person? In multi-table DELETE syntax, specifying the alias `p1` tells the query planner exactly which table copy to delete rows from.",
      "Q2. What if an email has 3 or 4 duplicates (e.g. IDs 2, 5, 9)? The condition `p1.id > p2.id` matches 5 (5 > 2) and 9 (9 > 2), deleting both 5 and 9 and leaving only ID 2 intact.",
      "Q3. How can this query be written in PostgreSQL or SQLite? Using a subquery `DELETE FROM Person WHERE id NOT IN (SELECT MIN(id) FROM Person GROUP BY email)` or a CTE with ROW_NUMBER().",
      "Q4. What is the time complexity? O(N log N) with an index on `email`; without an index, the nested join check requires O(N²).",
      "Q5. Can this be done with ROW_NUMBER()? Yes: `WITH cte AS (SELECT id, ROW_NUMBER() OVER(PARTITION BY email ORDER BY id) as rn FROM Person) DELETE FROM Person WHERE id IN (SELECT id FROM cte WHERE rn > 1)`."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Why does MySQL permit DELETE with JOIN while standard ANSI SQL requires subqueries? (MySQL supports multi-table DELETE extensions for performance; in standard SQL `WHERE id NOT IN (SELECT MIN(id)...)` or CTE is required)\n• What locking occurs during this DELETE? (Row-level exclusive locks on deleted records; on large production tables, batching in chunks like LIMIT 5000 prevents table lock escalation)\n• Why can't we write `DELETE FROM Person WHERE id NOT IN (SELECT MIN(id) FROM Person GROUP BY email)` directly in older MySQL? (MySQL throws error 1093 'You can't specify target table for update in FROM clause'; requires wrapping in an extra subquery)"
    ]
  },
  "Pro-005": {
    "code_id": "Pro-005",
    "numeric_id": 85,
    "title": "Rising Temperature",
    "code": "SELECT w1.id\nFROM Weather w1\nJOIN Weather w2\nON DATEDIFF(w1.recordDate, w2.recordDate) = 1\nWHERE w1.temperature > w2.temperature;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We perform a self-join on Weather where w1 represents today and w2 represents yesterday (matching on DATEDIFF = 1), and return today's id whenever today's temperature is strictly greater than yesterday's.",
    "mentalModel": "Imagine flipping through a desk calendar day-by-day. Every morning, you peek at yesterday's page. If today's thermometer reading is higher than yesterday's note, you stamp today's date with a green star!",
    "lineByLine": [
      {
        "line": "SELECT w1.id",
        "explanation": "Projects the identifier for today's weather observation."
      },
      {
        "line": "FROM Weather w1",
        "explanation": "Designates w1 as the observation for today."
      },
      {
        "line": "JOIN Weather w2",
        "explanation": "Self-joins a second instance w2 representing yesterday's observation."
      },
      {
        "line": "ON DATEDIFF(w1.recordDate, w2.recordDate) = 1",
        "explanation": "Enforces that w1's date is exactly 1 calendar day ahead of w2's date."
      },
      {
        "line": "WHERE w1.temperature > w2.temperature;",
        "explanation": "Filters for records where today's temperature is strictly greater than yesterday's."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Joining on ID (ON w1.id = w2.id + 1): IDs are not guaranteed to be consecutive; missing observation days cause subtle false matches.",
      "❌ 2. Comparing dates with >: Writing w1.recordDate > w2.recordDate joins today with all previous historical dates instead of strictly yesterday.",
      "❌ 3. Using >= instead of >: Problem requires temperatures to be strictly higher than the previous day."
    ],
    "keyTakeaway": "Always compute temporal adjacency with calendar date functions (e.g. `DATEDIFF(d1, d2) = 1`) rather than relying on surrogate primary keys.",
    "interviewPros": [
      "Q1. Why is comparing IDs (w1.id = w2.id + 1) incorrect? Because IDs can have gaps due to deletions, missing sensors, or distributed key generation, meaning id + 1 may represent a date weeks later or not exist at all.",
      "Q2. What does DATEDIFF(w1.recordDate, w2.recordDate) = 1 do? In MySQL, DATEDIFF(date1, date2) computes date1 - date2 in days; equaling 1 guarantees exactly consecutive days.",
      "Q3. How can this be solved in PostgreSQL or SQLite? In SQLite/PostgreSQL: `ON julianday(w1.recordDate) - julianday(w2.recordDate) = 1` or `ON w1.recordDate = DATE(w2.recordDate, '+1 day')`.",
      "Q4. Can this be solved with window functions? Yes: `SELECT id FROM (SELECT id, recordDate, temperature, LAG(temperature) OVER (ORDER BY recordDate) prev_temp, LAG(recordDate) OVER (ORDER BY recordDate) prev_date FROM Weather) t WHERE DATEDIFF(recordDate, prev_date) = 1 AND temperature > prev_temp`.",
      "Q5. How to optimize this query? Create a composite B-tree index on `Weather(recordDate, temperature)`."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Why might LAG() perform better than a self-join on huge datasets? (LAG() processes data in a single sorted pass O(N log N) using a window spool, avoiding an O(N²) cartesian comparison before date filtering)\n• What happens on the very first day in the table? (It has no matching yesterday row in an INNER JOIN, so it evaluates to NULL and is safely omitted)\n• How does the query handle date format strings like YYYY-MM-DD? (ISO-8601 strings parse cleanly into standard database DATE types)"
    ]
  },
  "Pro-006": {
    "code_id": "Pro-006",
    "numeric_id": 86,
    "title": "Game Play Analysis I",
    "code": "SELECT\n    player_id,\n    MIN(event_date) AS first_login\nFROM Activity\nGROUP BY player_id;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We group the Activity table by player_id and apply the MIN(event_date) aggregate function to isolate the earliest login date for each player.",
    "mentalModel": "Imagine every gamer has a gaming passport stamped with their play dates. You stack each gamer's passport pages in order, look at the very first page stamp, and write that down as their first login!",
    "lineByLine": [
      {
        "line": "SELECT",
        "explanation": "Initiates projection of player identifier and their earliest login date."
      },
      {
        "line": "    player_id,",
        "explanation": "Outputs the unique player identifier."
      },
      {
        "line": "    MIN(event_date) AS first_login",
        "explanation": "Calculates the earliest date per player and aliases it as first_login."
      },
      {
        "line": "FROM Activity",
        "explanation": "Scans gaming activity logs from the Activity table."
      },
      {
        "line": "GROUP BY player_id;",
        "explanation": "Clusters records belonging to the same player into distinct aggregation groups."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using MAX(event_date): Returns the player's most recent login instead of their earliest initial login.",
      "❌ 2. Forgetting GROUP BY: Writing SELECT MIN(event_date) collapses the entire table into a single global row.",
      "❌ 3. Grouping by device_id: Groups by gaming device rather than individual player accounts."
    ],
    "keyTakeaway": "Pairing GROUP BY with MIN(date_column) is the canonical solution for finding onboarding dates and initial touchpoints in user telemetry.",
    "interviewPros": [
      "Q1. Why is MIN() appropriate for finding the first date? Dates in SQL are chronologically comparable scalar values; the minimum value corresponds strictly to the earliest date in time.",
      "Q2. What if a player logged in multiple times on their first day? The primary key is (player_id, event_date), so at most one record exists per day; MIN(event_date) cleanly yields that single date.",
      "Q3. How can this query be indexed for maximum performance? A composite B-tree index on `Activity(player_id, event_date)` enables a loose index scan or tight index stream aggregation in O(N) time with zero disk sorting.",
      "Q4. Can this be solved with ROW_NUMBER()? Yes: `SELECT player_id, event_date AS first_login FROM (SELECT player_id, event_date, ROW_NUMBER() OVER (PARTITION BY player_id ORDER BY event_date) rn FROM Activity) t WHERE rn = 1`.",
      "Q5. When is ROW_NUMBER() preferred over GROUP BY MIN()? When you also need to retrieve other non-aggregated columns from the first login row (e.g. device_id or games_played)."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is Game Play Analysis II asking for? (It asks for the device_id corresponding to this first login, which requires either a JOIN back on (player_id, first_login) or ROW_NUMBER())\n• How does the optimizer handle GROUP BY on a composite primary key? (Since player_id is the leading column of the composite primary key, the engine reads directly in index order without sorting)\n• What if the table contains millions of rows? (Index-only scan on (player_id, event_date) avoids reading the full table heap entirely)"
    ]
  },
  "Pro-007": {
    "code_id": "Pro-007",
    "numeric_id": 87,
    "title": "Game Play Analysis II",
    "code": "SELECT\n    a.player_id,\n    a.device_id\nFROM Activity a\nJOIN\n(\n    SELECT\n        player_id,\n        MIN(event_date) AS first_login\n    FROM Activity\n    GROUP BY player_id\n) f\nON a.player_id = f.player_id\nAND a.event_date = f.first_login;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We find each player's earliest login date using a GROUP BY MIN(event_date) subquery, then join that result back to the Activity table on player_id and event_date to retrieve the exact device_id used on that day.",
    "mentalModel": "Imagine finding the earliest date stamp in a gamer's logbook. Now that you know the date, you flip back to that specific log entry and read off the hardware console model scribbled next to it!",
    "lineByLine": [
      {
        "line": "SELECT a.player_id, a.device_id",
        "explanation": "Selects the player ID and the hardware device used during their initial session."
      },
      {
        "line": "FROM Activity a",
        "explanation": "Scans the full Activity log table."
      },
      {
        "line": "JOIN (SELECT player_id, MIN(event_date) AS first_login FROM Activity GROUP BY player_id) f",
        "explanation": "Constructs an in-line summary table mapping each player to their earliest recorded login date."
      },
      {
        "line": "ON a.player_id = f.player_id",
        "explanation": "Aligns summary records with the corresponding player."
      },
      {
        "line": "AND a.event_date = f.first_login;",
        "explanation": "Filters for the exact row where the login date matches that player's earliest date."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Writing SELECT player_id, device_id, MIN(event_date): Invalid SQL because device_id is not included in the GROUP BY clause and is unaggregated.",
      "❌ 2. Joining only on player_id: Omitting `AND a.event_date = f.first_login` returns every device ever used by each player instead of only the first.",
      "❌ 3. Grouping by device_id: Changes the grouping grain to device models rather than individual player accounts."
    ],
    "keyTakeaway": "To fetch accompanying attributes of an aggregated extreme (like the device used on the MIN date), compute the extreme in a subquery and join back on the composite key.",
    "interviewPros": [
      "Q1. Why can't we simply write `SELECT player_id, device_id, MIN(event_date) FROM Activity GROUP BY player_id`? In strict SQL mode (and ANSI standards), every column in SELECT must either appear in GROUP BY or be enclosed in an aggregate function; device_id is neither.",
      "Q2. What is the fundamental interview pattern demonstrated here? 'Find an aggregate value, then join back to retrieve related row-level attributes.'",
      "Q3. How can this query be solved using window functions? `SELECT player_id, device_id FROM (SELECT player_id, device_id, ROW_NUMBER() OVER (PARTITION BY player_id ORDER BY event_date) AS rn FROM Activity) t WHERE rn = 1`.",
      "Q4. Which approach is more performant: Subquery JOIN or ROW_NUMBER()? With a composite index `(player_id, event_date, device_id)`, ROW_NUMBER() executes in a single streaming index scan without requiring two table scans.",
      "Q5. Can this be solved with a correlated subquery in WHERE? Yes: `WHERE (player_id, event_date) IN (SELECT player_id, MIN(event_date) FROM Activity GROUP BY player_id)`."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What if a player logged in from two different devices on their very first day? (The problem states (player_id, event_date) is primary key, meaning a player has at most 1 login record per day, eliminating tie-breaks)\n• How does the query plan change when using `IN ((player_id, MIN(event_date)))` vs `INNER JOIN`? (Most modern query optimizers rewrite tuple IN subqueries into equivalent semi-joins or hash joins)\n• What index strategy works best? (Covering index on `(player_id, event_date, device_id)` provides an index-only scan)"
    ]
  },
  "Pro-008": {
    "code_id": "Pro-008",
    "numeric_id": 88,
    "title": "Employee Bonus",
    "code": "SELECT\n    e.name,\n    b.bonus\nFROM Employee e\nLEFT JOIN Bonus b\nON e.empId = b.empId\nWHERE b.bonus < 1000\n   OR b.bonus IS NULL;",
    "timeComplexity": "O(N + M)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We use a LEFT JOIN to combine Employee and Bonus records while keeping all employees, then filter for rows where bonus is strictly less than 1000 OR bonus IS NULL.",
    "mentalModel": "Imagine handing out payroll envelopes. Some employees have a bonus slip inside, and others don't. You pick out everyone whose slip shows less than $1,000, PLUS everyone whose envelope has no bonus slip at all!",
    "lineByLine": [
      {
        "line": "SELECT",
        "explanation": "Initiates projection of employee name and bonus amount."
      },
      {
        "line": "    e.name,",
        "explanation": "Retrieves the employee's name from the Employee relation."
      },
      {
        "line": "    b.bonus",
        "explanation": "Retrieves the bonus figure (or NULL) from the Bonus relation."
      },
      {
        "line": "FROM Employee e",
        "explanation": "Establishes Employee as the primary preserved relation in the left join."
      },
      {
        "line": "LEFT JOIN Bonus b",
        "explanation": "Preserves all employees even if they lack an entry in the Bonus table."
      },
      {
        "line": "ON e.empId = b.empId",
        "explanation": "Matches bonus records to employees by primary/foreign key empId."
      },
      {
        "line": "WHERE b.bonus < 1000",
        "explanation": "Filters for records where a bonus was awarded but is strictly below 1000."
      },
      {
        "line": "   OR b.bonus IS NULL;",
        "explanation": "Also includes employees who have no bonus record at all (represented as NULL)."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using INNER JOIN: Drops employees who never received a bonus, excluding Brad and John entirely.",
      "❌ 2. Writing b.bonus = NULL: In SQL, NULL cannot be compared with equality; you must write `b.bonus IS NULL`.",
      "❌ 3. Using AND instead of OR: Writing `b.bonus < 1000 AND b.bonus IS NULL` is impossible and returns 0 rows.",
      "❌ 4. Using <= 1000: Problem states strictly less than 1000."
    ],
    "keyTakeaway": "In three-valued logic, `NULL < 1000` evaluates to UNKNOWN. To include missing rows in a LEFT JOIN, explicitly check `OR column IS NULL` or use `COALESCE(column, 0) < 1000`.",
    "interviewPros": [
      "Q1. Why does an INNER JOIN fail for this problem? An INNER JOIN requires matching keys in both tables; employees without bonuses have no matching row in Bonus and would be silently discarded.",
      "Q2. Why is `b.bonus = NULL` incorrect in SQL? SQL implements three-valued logic (TRUE, FALSE, UNKNOWN). Comparing anything with NULL using `=` results in UNKNOWN, which the WHERE clause filters out. `IS NULL` is the only syntax that evaluates to TRUE for nulls.",
      "Q3. How does COALESCE provide an alternative solution? `WHERE COALESCE(b.bonus, 0) < 1000` replaces NULL with 0 before the comparison; since 0 < 1000, missing bonuses evaluate to TRUE in a single comparison.",
      "Q4. What is the time complexity? O(N + M) assuming indexes exist on `Employee.empId` and `Bonus.empId`.",
      "Q5. What if the problem asked for 'employees with bonus >= 1000'? In that case an INNER JOIN is sufficient because NULL values are excluded anyway."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is three-valued logic (3VL)? (SQL boolean logic where expressions evaluate to TRUE, FALSE, or UNKNOWN; WHERE only retains rows that evaluate strictly to TRUE)\n• How does moving the condition to the ON clause change the result? (Putting `ON e.empId = b.empId AND b.bonus < 1000` in a LEFT JOIN preserves all employees, but displays Thomas with bonus NULL instead of excluding him!)\n• Can COALESCE prevent index usage? (Applying functions on indexed columns can prevent sargability, though on the non-preserved side of a LEFT JOIN WHERE filter it has minimal index impact)"
    ]
  },
  "Pro-009": {
    "code_id": "Pro-009",
    "numeric_id": 89,
    "title": "Find Customer Referee",
    "code": "SELECT name\nFROM Customer\nWHERE referee_id <> 2\n   OR referee_id IS NULL;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "simplestExplanation": "We filter for customers whose referee_id is not equal to 2, and explicitly include rows where referee_id IS NULL to ensure organic customers without referrers are not discarded by SQL's three-valued logic.",
    "mentalModel": "Imagine greeting guests at a VIP event. If someone says 'Alex sent me!' (Alex has ID 2), you turn them away. But if someone says 'John sent me' (ID 1) OR 'I came by myself with no referral' (NULL), you warmly welcome them in!",
    "lineByLine": [
      {
        "line": "SELECT name",
        "explanation": "Extracts the customer's name from matching records."
      },
      {
        "line": "FROM Customer",
        "explanation": "Scans rows from the Customer table."
      },
      {
        "line": "WHERE referee_id <> 2",
        "explanation": "Retains customers referred by anyone other than user 2."
      },
      {
        "line": "   OR referee_id IS NULL;",
        "explanation": "Explicitly preserves organic customers who were referred by nobody (referee_id is NULL)."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Writing only WHERE referee_id <> 2: Because NULL <> 2 evaluates to UNKNOWN, all customers with NULL referrers (Will, Jane, Bill) are silently discarded!",
      "❌ 2. Writing referee_id != NULL: Comparisons with NULL using != or = always evaluate to UNKNOWN and match nothing.",
      "❌ 3. Using AND instead of OR: Writing `WHERE referee_id <> 2 AND referee_id IS NULL` is contradictory and returns 0 rows."
    ],
    "keyTakeaway": "In SQL, `NULL <> value` evaluates to UNKNOWN, not TRUE. To retain missing/unknown values in inequality filters, always write `WHERE col <> val OR col IS NULL` or use `COALESCE(col, default) <> val`.",
    "interviewPros": [
      "Q1. Why doesn't `WHERE referee_id <> 2` include NULL values? SQL uses three-valued logic: TRUE, FALSE, and UNKNOWN. Comparing any value with NULL using comparison operators like `<>`, `!=`, or `=` yields UNKNOWN. Since the WHERE clause only accepts expressions that evaluate to TRUE, UNKNOWN rows are dropped.",
      "Q2. What is the difference between `<>` and `!=` in SQL? `<>` is the standard ANSI SQL inequality operator supported across all engines; `!=` is supported by most modern RDBMSs as an alias, but neither handles NULL values without `IS NULL`.",
      "Q3. How can this query be written using COALESCE? `SELECT name FROM Customer WHERE COALESCE(referee_id, 0) <> 2;` replacing NULL with 0 before comparing.",
      "Q4. Can this be written with IFNULL or NVL? Yes: `IFNULL(referee_id, 0) <> 2` in MySQL/SQLite or `NVL(referee_id, 0) <> 2` in Oracle.",
      "Q5. How can this query be optimized on huge tables? Add a B-tree index on `Customer(referee_id)` or a partial index `WHERE referee_id <> 2 OR referee_id IS NULL`."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What is the NULL-safe equality operator in MySQL? (`<=>` operator; `NOT (referee_id <=> 2)` handles NULL cleanly without OR!)\n• How does SQL standard `IS DISTINCT FROM` work? (`WHERE referee_id IS DISTINCT FROM 2` in PostgreSQL and modern SQL standards treats NULL as a distinct comparable value, cleanly solving this without OR)\n• Why is COALESCE potentially less performant with indexes? (Wrapping a column in a function like `COALESCE(col, 0)` can prevent index seek usage, causing a full table scan)"
    ]
  },
  "Pro-010": {
    "code_id": "Pro-010",
    "numeric_id": 90,
    "title": "Customer Placing the Largest Number of Orders",
    "code": "SELECT customer_number\nFROM Orders\nGROUP BY customer_number\nORDER BY COUNT(*) DESC\nLIMIT 1;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We group orders by customer_number, count how many orders each customer placed using COUNT(*), sort the counts in descending order, and pick the top customer with LIMIT 1.",
    "mentalModel": "Imagine a stack of receipt slips. You sort them into piles by customer name, count the height of each pile, place the tallest pile at the front of your desk, and read off the customer number on top!",
    "lineByLine": [
      {
        "line": "SELECT customer_number",
        "explanation": "Selects the customer ID of the top purchaser."
      },
      {
        "line": "FROM Orders",
        "explanation": "Scans all orders from the Orders relation."
      },
      {
        "line": "GROUP BY customer_number",
        "explanation": "Aggregates orders into distinct groups per customer."
      },
      {
        "line": "ORDER BY COUNT(*) DESC",
        "explanation": "Sorts the aggregated customer groups from highest order count to lowest."
      },
      {
        "line": "LIMIT 1;",
        "explanation": "Restricts output to only the first row (the highest volume customer)."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Omitting GROUP BY: Writing SELECT COUNT(*) FROM Orders counts the whole table instead of grouping by customer.",
      "❌ 2. Sorting ASC instead of DESC: Writing ORDER BY COUNT(*) ASC returns the customer with the lowest order count.",
      "❌ 3. Ordering by customer_number: Writing ORDER BY customer_number DESC sorts customer IDs instead of order totals."
    ],
    "keyTakeaway": "The sequence `GROUP BY ... ORDER BY COUNT(*) DESC LIMIT 1` is the canonical pattern for finding the most frequent entity or mode in SQL.",
    "interviewPros": [
      "Q1. Why is COUNT(*) used instead of COUNT(customer_number)? COUNT(*) counts all rows in the group without inspecting individual columns for nulls, which is idiomatic and optimized by database query planners.",
      "Q2. Why is LIMIT 1 appropriate here? The problem guarantees that exactly one customer has the maximum number of orders, meaning ties do not exist.",
      "Q3. How would you handle potential ties where multiple customers share the maximum count? Use DENSE_RANK() or RANK(): `SELECT customer_number FROM (SELECT customer_number, DENSE_RANK() OVER (ORDER BY COUNT(*) DESC) rnk FROM Orders GROUP BY customer_number) t WHERE rnk = 1` or `HAVING COUNT(*) = (SELECT MAX(cnt) FROM (SELECT COUNT(*) cnt FROM Orders GROUP BY customer_number) t)`.",
      "Q4. What is the time complexity? O(N log N) due to sorting N customer groups. With an index on `Orders(customer_number)`, the grouping step takes O(N).",
      "Q5. Can this be written with TOP in SQL Server? Yes: `SELECT TOP 1 customer_number FROM Orders GROUP BY customer_number ORDER BY COUNT(*) DESC`."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What happens if the table is empty? (Returns 0 rows, which is valid empty output)\n• How does the optimizer process ORDER BY aggregate functions? (The engine computes aggregates during the GROUP BY stage, stores them in an intermediate worktable, and sorts the grouped rows before applying the LIMIT/TOP operator)\n• What index strategy works best? (An index on `Orders(customer_number)` enables stream aggregation without hash/sort grouping)"
    ]
  },
  "Pro-011": {
    "code_id": "Pro-011",
    "numeric_id": 91,
    "title": "Big Countries",
    "code": "SELECT\n    name,\n    population,\n    area\nFROM World\nWHERE area >= 3000000\n   OR population >= 25000000;",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "simplestExplanation": "We check each country row and select its name, population, and area if either its area is at least 3,000,000 OR its population is at least 25,000,000.",
    "mentalModel": "Imagine a world atlas. You highlight a country if it takes up a massive amount of physical land on the map (area >= 3M) OR if it is packed with a massive crowd of people (population >= 25M). Either qualification gets it into your VIP atlas!",
    "lineByLine": [
      {
        "line": "SELECT",
        "explanation": "Initiates projection of requested demographic fields."
      },
      {
        "line": "    name,",
        "explanation": "Retrieves the country name."
      },
      {
        "line": "    population,",
        "explanation": "Retrieves the resident population count."
      },
      {
        "line": "    area",
        "explanation": "Retrieves the total geographic land area."
      },
      {
        "line": "FROM World",
        "explanation": "Scans rows from the World demographic database."
      },
      {
        "line": "WHERE area >= 3000000",
        "explanation": "Checks if the territory meets or exceeds 3,000,000 square units."
      },
      {
        "line": "   OR population >= 25000000;",
        "explanation": "Includes countries whose population meets or exceeds 25,000,000 even if their area is smaller."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using AND instead of OR: Writing `WHERE area >= 3000000 AND population >= 25000000` requires both conditions and drops huge countries with smaller populations like Canada or dense smaller countries.",
      "❌ 2. Using > instead of >=: Problem states 'at least', which includes the exact boundary values.",
      "❌ 3. Projecting extra columns: Writing SELECT * includes continent and gdp which fails column parity."
    ],
    "keyTakeaway": "Use the logical OR operator when membership in a class requires satisfying at least one criterion, and >= for inclusive 'at least' boundary semantics.",
    "interviewPros": [
      "Q1. Why is OR used rather than AND? The problem statement specifies that a country is big if its area is at least 3M OR its population is at least 25M; meeting either criterion suffices.",
      "Q2. What does 'at least' signify in SQL comparisons? 'At least' translates to the inclusive greater-than-or-equal-to `>=` operator.",
      "Q3. How can UNION be used as an alternative to OR? `SELECT name, population, area FROM World WHERE area >= 3000000 UNION SELECT name, population, area FROM World WHERE population >= 25000000;`. In MySQL/older engines, UNION can sometimes utilize independent indexes on area and population better than an OR condition (index merge).",
      "Q4. When is UNION better or worse than OR? In modern optimizers with Index Merge or Bitmap Index Scans, `OR` is executed efficiently in a single query plan; `UNION` introduces a deduplication sort pass unless written as `UNION ALL` with mutually exclusive filters.",
      "Q5. What is the time complexity? O(N) linear table scan without indexes, or O(log N + K) with B-tree indexes."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Why did LeetCode discuss UNION vs OR performance for this problem? (In older MySQL versions without index merge, OR forced a full table scan, while UNION allowed two separate index seeks)\n• Why is UNION ALL dangerous here if used carelessly? (Countries satisfying both area >= 3M and population >= 25M would be duplicated!)\n• What type should GDP be stored as? (BIGINT to avoid 32-bit integer overflow for trillion-dollar economies)"
    ]
  },
  "Pro-012": {
    "code_id": "Pro-012",
    "numeric_id": 92,
    "title": "Classes With at Least 5 Students",
    "code": "SELECT class\nFROM Courses\nGROUP BY class\nHAVING COUNT(student) >= 5;",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We group student enrollments by class, count the number of students enrolled in each class, and use HAVING COUNT(student) >= 5 to return only classes meeting the enrollment minimum.",
    "mentalModel": "Imagine a university registration office. You sort enrollment slips into classroom folders, count how many student slips are inside each folder, and only approve classes whose folders contain 5 or more slips!",
    "lineByLine": [
      {
        "line": "SELECT class",
        "explanation": "Selects the name of qualifying course subjects."
      },
      {
        "line": "FROM Courses",
        "explanation": "Scans all enrollment records from Courses."
      },
      {
        "line": "GROUP BY class",
        "explanation": "Aggregates enrollments into distinct course partitions."
      },
      {
        "line": "HAVING COUNT(student) >= 5;",
        "explanation": "Filters the aggregated course groups, keeping only those with at least 5 enrolled students."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using WHERE instead of HAVING: Writing `WHERE COUNT(student) >= 5` causes a syntax error because WHERE cannot evaluate aggregate functions.",
      "❌ 2. Using strict inequality (> 5): Excludes classes with exactly 5 students, violating 'at least 5'.",
      "❌ 3. Grouping by student: Counts how many classes each student takes rather than how many students are enrolled in each class."
    ],
    "keyTakeaway": "HAVING filters aggregated groups after GROUP BY and evaluates aggregate expressions like COUNT(), whereas WHERE filters row-by-row before aggregation occurs.",
    "interviewPros": [
      "Q1. Why must HAVING be used instead of WHERE? WHERE filters individual rows before grouping takes place and cannot evaluate group-level aggregate functions like `COUNT()`. HAVING is specifically designed to filter groups after GROUP BY has aggregated rows.",
      "Q2. Can COUNT(*) be used instead of COUNT(student)? Yes, because the table's primary key is `(student, class)`, ensuring `student` is never NULL.",
      "Q3. What if duplicate student enrollments were possible? In modern versions or if duplicates were allowed without a composite primary key, we would write `HAVING COUNT(DISTINCT student) >= 5` to ensure each student is counted only once per class.",
      "Q4. What is the time complexity? O(N log N) or O(N) depending on whether the database engine uses hash-based or sort-based aggregation.",
      "Q5. Can this be written with a subquery? Yes: `SELECT class FROM (SELECT class, COUNT(student) cnt FROM Courses GROUP BY class) t WHERE cnt >= 5;`."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What was the historical trick with COUNT(DISTINCT student) on LeetCode? (Earlier problem definitions didn't have (student, class) as primary key, making COUNT(DISTINCT student) necessary)\n• How does the execution pipeline flow? (FROM -> GROUP BY -> AGGREGATION -> HAVING -> SELECT)\n• What index optimizes this query? (An index on `Courses(class, student)` enables loose/stream aggregation directly from index leaves)"
    ]
  },
  "Pro-013": {
    "code_id": "Pro-013",
    "numeric_id": 93,
    "title": "Friend Requests I: Overall Acceptance Rate",
    "code": "SELECT\n    ROUND(\n        IFNULL(\n            (SELECT COUNT(*) FROM (SELECT DISTINCT requester_id, accepter_id FROM RequestAccepted) a) * 1.0 /\n            NULLIF((SELECT COUNT(*) FROM (SELECT DISTINCT sender_id, send_to_id FROM FriendRequest) r), 0),\n            0.0\n        ),\n        2\n    ) AS accept_rate;",
    "timeComplexity": "O(N + M)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We count distinct accepted friendship pairs, divide by distinct sent friend request pairs (using floating-point arithmetic), guard against zero sent requests with IFNULL/NULLIF, and round to 2 decimal places.",
    "mentalModel": "Imagine sending out wedding invitations. You count the unique households you invited (sent requests) and count how many sent back an 'attending' RSVP (accepted requests). Divide RSVPs by total invites sent, and if nobody was invited, your acceptance rate is simply 0.00!",
    "lineByLine": [
      {
        "line": "SELECT",
        "explanation": "Initiates projection of the final acceptance rate metric."
      },
      {
        "line": "    ROUND(",
        "explanation": "Rounds the computed decimal quotient to exactly 2 decimal places."
      },
      {
        "line": "        IFNULL(",
        "explanation": "Replaces NULL with 0.0 if the denominator is zero (or tables are empty)."
      },
      {
        "line": "            (SELECT COUNT(*) FROM (SELECT DISTINCT requester_id, accepter_id FROM RequestAccepted) a) * 1.0 /",
        "explanation": "Counts distinct accepted pairs and multiplies by 1.0 to ensure floating-point division."
      },
      {
        "line": "            NULLIF((SELECT COUNT(*) FROM (SELECT DISTINCT sender_id, send_to_id FROM FriendRequest) r), 0),",
        "explanation": "Counts distinct sent pairs, converting a count of 0 to NULL to prevent division-by-zero errors."
      },
      {
        "line": "            0.0",
        "explanation": "Fallback default rate if no requests exist."
      },
      {
        "line": "        ),",
        "explanation": "Closes the IFNULL wrapper."
      },
      {
        "line": "        2",
        "explanation": "Specifies 2 digits of fractional precision."
      },
      {
        "line": "    ) AS accept_rate;",
        "explanation": "Aliases output column as accept_rate."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Using COUNT(*) directly without DISTINCT: Repeat friend request attempts would inflate totals.",
      "❌ 2. Integer division truncation: Dividing integer counts directly in engines like SQL Server or PostgreSQL yields 0 instead of 0.67 without `* 1.0`.",
      "❌ 3. Forgetting division-by-zero handling: If FriendRequest has 0 rows, dividing by 0 crashes without NULLIF/IFNULL.",
      "❌ 4. Forgetting ROUND(..., 2): Problem explicitly requires 2 decimal places."
    ],
    "keyTakeaway": "When calculating ratios across separate tables in SQL, compute distinct counts in independent scalar subqueries, force floating-point arithmetic with `* 1.0`, and safeguard against empty sets using `NULLIF()` and `IFNULL()`.",
    "interviewPros": [
      "Q1. Why are distinct pairs required? The problem states to count distinct friend request pairs; users may resend requests after an initial decline or expiration.",
      "Q2. Why is `* 1.0` or `CAST AS FLOAT` necessary? In many SQL dialects (PostgreSQL, SQL Server, SQLite), dividing two integers performs integer division, discarding decimal remainders and resulting in `0` instead of `0.67`.",
      "Q3. How does NULLIF prevent division by zero? `NULLIF(count, 0)` returns NULL if count is 0. In SQL, dividing any number by NULL yields NULL (rather than throwing a runtime divide-by-zero error). Then `IFNULL(..., 0.0)` cleanly converts NULL to 0.0.",
      "Q4. Why use scalar subqueries instead of joining FriendRequest and RequestAccepted? Joining the two tables directly on `(sender_id = requester_id AND send_to_id = accepter_id)` can create Cartesian explosion on repeat attempts and complicates calculating the global denominator.",
      "Q5. Can this rate exceed 1.0 in real-world messy data? Yes, if accepted requests exist without an initial logged request; in production pipelines you would clamp with `LEAST(..., 1.0)` or log data anomalies."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• What happens if FriendRequest has 0 rows? (NULLIF turns 0 into NULL, division yields NULL, IFNULL returns 0.0, ROUND produces 0.00)\n• Can MySQL syntax `COUNT(DISTINCT sender_id, send_to_id)` be used? (MySQL supports multi-column COUNT(DISTINCT a, b), but ANSI standard subqueries `SELECT DISTINCT ...` are portable across Postgres, SQLite, and Oracle)\n• What indexes optimize this calculation? (Composite indexes `FriendRequest(sender_id, send_to_id)` and `RequestAccepted(requester_id, accepter_id)` enable index-only scans)"
    ]
  },
  "Pro-014": {
    "code_id": "Pro-014",
    "numeric_id": 94,
    "title": "Consecutive Available Seats",
    "code": "SELECT DISTINCT\n    c1.seat_id\nFROM Cinema c1\nJOIN Cinema c2\nON ABS(c1.seat_id - c2.seat_id) = 1\nWHERE c1.free = 1\n  AND c2.free = 1\nORDER BY c1.seat_id;",
    "timeComplexity": "O(N²)",
    "spaceComplexity": "O(Result Set)",
    "simplestExplanation": "We join the Cinema table to itself matching adjacent seats where the absolute difference in seat_id is 1. If both seats are free, we select the seat_id and deduplicate using DISTINCT.",
    "mentalModel": "Imagine walking along a cinema row looking for seats for a date. You check each empty seat: does it have an empty neighbor on its left OR on its right? If yes, that seat is part of a consecutive free pair and you highlight it on your seating chart!",
    "lineByLine": [
      {
        "line": "SELECT DISTINCT",
        "explanation": "Removes duplicate seat IDs because a seat with two free neighbors (e.g. seat 4) matches both."
      },
      {
        "line": "    c1.seat_id",
        "explanation": "Extracts the seat number from the primary table alias."
      },
      {
        "line": "FROM Cinema c1",
        "explanation": "Scans the cinema seating chart as the primary seat."
      },
      {
        "line": "JOIN Cinema c2",
        "explanation": "Self-joins the cinema seating chart as the candidate neighbor seat."
      },
      {
        "line": "ON ABS(c1.seat_id - c2.seat_id) = 1",
        "explanation": "Pairs seats that are immediately adjacent in the row (difference of exactly 1)."
      },
      {
        "line": "WHERE c1.free = 1",
        "explanation": "Verifies that the primary seat is free/unoccupied."
      },
      {
        "line": "  AND c2.free = 1",
        "explanation": "Verifies that the adjacent neighbor seat is also free/unoccupied."
      },
      {
        "line": "ORDER BY c1.seat_id;",
        "explanation": "Sorts the available consecutive seat numbers in ascending order."
      }
    ],
    "beginnerTraps": [
      "❌ 1. Omitting DISTINCT: Middle seats flanked by two free seats (like seat 4 between 3 and 5) appear twice.",
      "❌ 2. Checking only one seat: Writing `WHERE c1.free = 1` without `AND c2.free = 1` includes occupied neighbors.",
      "❌ 3. Comparing seat to itself: Writing `ABS(c1.seat_id - c2.seat_id) = 0` checks if a seat is free, not if it has consecutive neighbors."
    ],
    "keyTakeaway": "Self joins with `ABS(t1.id - t2.id) = 1` provide a simple declarative way to inspect immediate neighbor relationships across rows in SQL.",
    "interviewPros": [
      "Q1. Why is a self join appropriate here? The problem requires comparing adjacent rows within the exact same table (Cinema) to check if a seat's neighboring rows satisfy a shared condition.",
      "Q2. Why use ABS(c1.seat_id - c2.seat_id) = 1? It symmetrically captures both the preceding seat (`c1 = c2 - 1`) and the succeeding seat (`c1 = c2 + 1`) in a single succinct join predicate.",
      "Q3. Why is DISTINCT mandatory? If seat 4 is adjacent to free seat 3 and free seat 5, the self join produces two matching pairs for seat 4 (`(4, 3)` and `(4, 5)`). DISTINCT prevents seat 4 from showing up twice in the final output.",
      "Q4. How can this be solved using window functions in modern databases? Using `LAG()` and `LEAD()`: `SELECT seat_id FROM (SELECT seat_id, free, LAG(free) OVER (ORDER BY seat_id) prev_free, LEAD(free) OVER (ORDER BY seat_id) next_free FROM Cinema) t WHERE free = 1 AND (prev_free = 1 OR next_free = 1) ORDER BY seat_id;`. This runs in O(N log N) without the O(N²) self join cost!",
      "Q5. What indexes optimize this query? An index on `Cinema(seat_id, free)` allows index seek lookups on adjacent IDs directly from the B-tree."
    ],
    "interviewCons": [
      "⭐ Questions Interviewers Will Ask:\n• Compare the self-join approach vs LAG/LEAD window functions. (Self-join is O(N²) unindexed or O(N log N) with index seek; LAG/LEAD is strictly O(N) streaming scan after sort)\n• What if seat numbers have gaps (e.g. aisle breaks)? (If physical aisle seats have missing numbers, ABS(id - id) = 1 naturally respects the gap without false adjacent pairing)\n• How does the execution engine handle ABS in the join condition? (Functions on join columns can inhibit index seeks; writing `ON c1.seat_id = c2.seat_id + 1 OR c1.seat_id = c2.seat_id - 1` is more sargable in older query planners)"
    ]
  }};

export const ALL_PROBLEM_SOLUTIONS: Record<string, any> = {
  ...BASE_RANKED_MAP,
  ...Object.fromEntries(Object.values(BASE_RANKED_MAP).map(item => [String(item.levelNumber || item.numeric_id || item.level_number), item]))
};
