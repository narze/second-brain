<%* if (tp.date.now("ddd") == "Mon") { %>
[[Daily.priv/<% tp.date.now("YYYY-MM/YYYY-MM-DD", -3, tp.file.title, "YYYY-MM-DD") %>|Last Friday]] | <%* } %>[[Daily.priv/<% tp.date.now("YYYY-MM/YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|Yesterday]] | [[Daily.priv/<% tp.date.now("YYYY-MM/YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>|Tomorrow]]

---
# Journal

### Priorities
- [ ] <% tp.file.cursor() %>
- [ ] 
- [ ] 

### Checklist
- Water
- Health/Exercise
- Knowledge
- Happiness
- Reading
- Writing
- Drawing
- Sleep
- <= 1 hr gaming

### Highlights
- 

### Today I Learned
- 

### Score 

`VIEW[{score}]` / 10
0 `INPUT[slider(minValue(0), maxValue(10)):score]` 10

---

# Notes

- 

---
# Tasks
## Today
```<%* if (tp.file.title != "daily") { %>tasks<%* } %>
# Happens or done today
(happens on <% tp.file.title %>) OR (done on <% tp.file.title %>)

sort by happens
root does not include private/

# Hide date after emojis
short mode
hide task count
```

## Yesterday

```<%* if (tp.file.title != "daily") { %>tasks<%* } %>
# Happens or done yesterday
(happens on <% tp.date.now("YYYY-MM/YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>) OR (done on <% tp.date.now("YYYY-MM/YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>)

sort by happens
root does not include private/

# Hide date after emojis
short mode
hide task count
```

## Tasks
```<%* if (tp.file.title != "daily") { %>tasks<%* } %>
# Scheduled today or past OR just done today
((scheduled on or before <% tp.file.title %>) AND (not done)) OR (done on <% tp.file.title %>)

# Sort
sort by happens reverse, done reverse
root does not include private/

# Hide date after emojis
short mode
hide task count
```

<%_* if (false) { %>
# Here's the comment section

Tasks docs https://publish.obsidian.md/tasks
Templater docs https://silentvoid13.github.io/Templater
Dataview docs https://blacksmithgu.github.io/obsidian-dataview/

<%* } _%>