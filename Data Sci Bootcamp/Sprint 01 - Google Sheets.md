---
title: "Sprint 01 - Google Sheets"
created: 2022-12-28 00:48
date: 2022-12-28
---

# 101
https://docs.google.com/spreadsheets/d/12VwFWMDe62RJ-NxfmtGrd_9RM7y7Bk5rByqfrGpeE5o/edit?usp=sharing

# Why use google sheets
- Storage
  - Structured data / Tabular data
- Analyze
- Present

# Manually Input Data
- Numbers align right by default
- Text align left by default
- Format date
- Array input
  - =`{1, 2, 3, 4, 5}` -> 1 Row (A1 -> E1)
  - =`{1, 2; 3, 4; 5, 6}` -> 3 Rows (A1 -> B1, A2 -> B2, A3 -> B3)
    - Should have same number of elements in each row

# Cell References
- Shortcut key : `F4` / `fn + F4` (Switch relative & absolute reference mode)
- `A1` : No fix
  - `$A1` : Fix col A
  - `A$1` : Fix row 1
  - `$A$1` : Fix both row & col

# Functions
- `FUNCTION_NAME(arg1, arg2, [arg3], [arg4])`
  - arg 3 & 4 are optional
- Read help & documentation
- `YEAR()` / `MONTH()` / `DAY()`

# If & Array
- Instead of creating one cell and drag down, wrap with `ArrayFormula` (Ctrl/⌘+Shift+Enter) ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228010650.png)
- `IF(logical_expression, value_if_true, value_if_false)` ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228010935.png)

# Nested IF & IFS
- `IFS(cond1, val1, cond2, val2, ..., condN, valN)
- Can use `TRUE` for "else" ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228011451.png)
- Use `Alt + Enter` to format code in multiple lines

# AND, OR, NOT
- `AND(exp1, exp2, ...)`
- `OR(exp2, exp2, ...)
- `NOT(exp)`
- ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228012053.png)
- Note: Expressions use single = instead of double ==

# SWITCH
- `SWITCH(exp, case1, val1, case2, val2, ...)`
- ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228012720.png)

# AVERAGE, SUM, MEDIAN, etc
- `SUM()` sum all numeric values
- `AVERAGE()` = sum / count
- `MIN()` & `MAX()`
- `COUNTA()` count values
- `COUNT()` count only numeric values
- `MEDIAN()` get middle value (mean of 2 middle values if count is even)
- `SORT()`
- `FORMULATEXT()` shows formula ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228013640.png)

# AVERAGEIF & SUMIF
- `UNIQUE()`
- `AVERAGEIF(criteria_range, criterion, [avg_range])`
  - Similar functions: `SUMIF()`, `COUNTIF()`

---

# 102

(wip)