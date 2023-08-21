<%* if (tp.date.now("ddd") == "Mon") { %>
[[Daily.priv/<% tp.date.now("YYYY-MM/YYYY-MM-DD", -3, tp.file.title, "YYYY-MM-DD") %>|Last Friday]] | <%* } %>[[Daily.priv/<% tp.date.now("YYYY-MM/YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|Yesterday]] | [[Daily.priv/<% tp.date.now("YYYY-MM/YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>|Tomorrow]]

```tasks
((scheduled on or before <% tp.date.now() %>) AND (not done)) OR (done on <% tp.date.now() %>)
sort by done, happens
```

<% tp.file.cursor() %>