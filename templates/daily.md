[[Daily.priv/<% tp.date.now("YYYY-MM/YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|Yesterday]] | [[Daily.priv/<% tp.date.now("YYYY-MM/YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>|Tomorrow]]

```tasks
scheduled <% tp.date.now %>
```

<% tp.file.cursor() %>