---
title: "94 - Try Directus"
date: 2023-08-25
slug: 100daysofcode-r3-94-try-directus
publish: true
tags:
- directus
- 100DaysOfCode
no_feed: true
---

## Livestream

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/q63W0lYtnk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- https://directus.io/
    - [Quickstart Guide](https://docs.directus.io/getting-started/quickstart.html)
    - Run with Docker Compose
```yaml
version: '3'
services:
  directus:
    image: directus/directus:latest
    ports:
      - 8055:8055
    volumes:
      - ./database:/directus/database
      - ./uploads:/directus/uploads
    environment:
      KEY: 'replace-with-random-value'
      SECRET: 'replace-with-random-value'
      ADMIN_EMAIL: 'admin@example.com'
      ADMIN_PASSWORD: 'd1r3ctu5'
      DB_CLIENT: 'sqlite3'
      DB_FILENAME: '/directus/database/data.db'
      WEBSOCKETS_ENABLED: true
```
- Access http://localhost:8055
- API is available via http://localhost:8055/items/:collection_name
    - Set `read` role to have `All Access` permission first
- Can connect to existing database, it will create `directus_*` tables
![Linking to existing database](1-Projects/100DaysOfCode-R3/attachments/94%20-%20Try%20Directus.png)
- Supports WebSockets for real time updates

