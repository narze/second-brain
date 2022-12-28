---
title: "Sprint 01 - Google Sheets"
created: 2022-12-28 00:48
date: 2022-12-29
---

# 101
https://docs.google.com/spreadsheets/d/12VwFWMDe62RJ-NxfmtGrd_9RM7y7Bk5rByqfrGpeE5o/edit?usp=sharing

## Why use google sheets
- Storage
  - Structured data / Tabular data
- Analyze
- Present

## Manually Input Data
- Numbers align right by default
- Text align left by default
- Format date
- Array input
  - =`{1, 2, 3, 4, 5}` -> 1 Row (A1 -> E1)
  - =`{1, 2; 3, 4; 5, 6}` -> 3 Rows (A1 -> B1, A2 -> B2, A3 -> B3)
    - Should have same number of elements in each row

## Cell References
- Shortcut key : `F4` / `fn + F4` (Switch relative & absolute reference mode)
- `A1` : No fix
  - `$A1` : Fix col A
  - `A$1` : Fix row 1
  - `$A$1` : Fix both row & col

## Functions
- `FUNCTION_NAME(arg1, arg2, [arg3], [arg4])`
  - arg 3 & 4 are optional
- Read help & documentation
- `YEAR()` / `MONTH()` / `DAY()`

## If & Array
- Instead of creating one cell and drag down, wrap with `ArrayFormula` (Ctrl/⌘+Shift+Enter) ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228010650.png)
- `IF(logical_expression, value_if_true, value_if_false)` ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228010935.png)

## Nested IF & IFS
- `IFS(cond1, val1, cond2, val2, ..., condN, valN)
- Can use `TRUE` for "else" ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228011451.png)
- Use `Alt + Enter` to format code in multiple lines

## AND, OR, NOT
- `AND(exp1, exp2, ...)`
- `OR(exp2, exp2, ...)
- `NOT(exp)`
- ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228012053.png)
- Note: Expressions use single = instead of double ==

## SWITCH
- `SWITCH(exp, case1, val1, case2, val2, ...)`
- ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228012720.png)

## AVERAGE, SUM, MEDIAN, etc
- `SUM()` sum all numeric values
- `AVERAGE()` = sum / count
- `MIN()` & `MAX()`
- `COUNTA()` count values
- `COUNT()` count only numeric values
- `MEDIAN()` get middle value (mean of 2 middle values if count is even)
- `SORT()`
- `FORMULATEXT()` shows formula ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228013640.png)

## AVERAGEIF & SUMIF
- `UNIQUE()`
- `AVERAGEIF(criteria_range, criterion, [avg_range])`
  - Similar functions: `SUMIF()`, `COUNTIF()`

---

# 102

https://docs.google.com/spreadsheets/d/1gc_tbDEa0ZdGpzubZvGTbilfcQwcnr-Nnwok_ja0PpY/edit#gid=1720028959

## Import Data
- Sample data
  - Example 1 https://people.sc.fsu.edu/~jburkardt/data/csv/csv.html
  - Example 2 https://www.w3schools.com/html/html_tables.asp
- Import csv from url: `IMPORTDATA("url")` / `IMPORTDATA(cell)`
- Import data from html: `IMPORTHTML("url", "table", idx)`

## COUNTIFS
- `COUNTIF(rng1, cri1, rng2, cri2, ...)` ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228231635.png)
- Use numeric in criterion e.g. `< 500`, `>= 2021-05-06`

## SUMIFS
- `SUMIFS(sum_rng, rng1, cri1, rng2, cri2, ...)` ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228232009.png)
- String case insensitive e.g. `AMD` & `amd` will yield same result

## FILTER
- Auto: Select data with header then click filter (funnel icon)
- Formula: `FILTER(cells, cond1, cond2, ...)` ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228232637.png)
- Use `+` for OR statements (parentheses needed on both sides) ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228232725.png)

## SORT
- Auto: Same as filter
- Formula: `SORT(range, sort_col_nth, is_ascending)` ![sort by quantity ascending](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228233117.png)
- Multiple sort criteria: ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228233235.png)

## VLOOKUP
- `VLOOKUP(search_key, range, col_index, is_sorted)`
  - Set last param as `FALSE` for exact match, `TRUE` for approx match ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221229001113.png)
- ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228233746.png)
- Set named range for convenience e.g. `VLOOKUP(D3, PRODUCTS, ...)` ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228233944.png)
- Set last params to `TRUE` for approx. match (useful for number ranges) ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228234641.png)

## INDEX & MATCH
- `INDEX(cells, row_nth, col_nth)` ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228235031.png)
- `MATCH(search_key, range, type)` get intex of search key within range
- Create dropdown with Data > Data validation 
  - or Right click cell > Data validation
- Get Data : Use `index()` with `match()` ![](Data%20Sci%20Bootcamp/attachments/Pasted%20image%2020221228235844.png)

## Date & Date Differences
- `YEAR(date)`
- `MONTH(date)`
- `DAY(date)`
- `Paste special > Paste format only` to duplicate date format
- `TODAY()` Get today's date
- `DATEDIF(start, end, unit)`
  - Unit: Y, M, D for years, months, days
  - MD, YM, YD: Use only remainders
    - "MD": the number of days between start_date and end_date after subtracting whole months.
    - "YM": the number of whole months between start_date and end_date after subtracting whole years.
    - "YD": the number of days between start_date and end_date, assuming start_date and end_date were no more than one year apart.