---
title: "Humanistic Architecture - Day 2 workshop"
created: 2023-02-05 16:04
date: 2023-02-06
draft: true
---

- Entities
  - Event
  - User
  - Ticket
- Use Cases
  - Organizer creates event & tickets
  - Customer get tickets from event
  - Customer checks into event
- Controllers
  - Organizer registration
  - Organizer CRUD events & tickets
  - Associate customer with ticket
  - Set ticket status = "used"
- Presentation
  - Web
  - Mobile App
- Infrastructre
  - Database
  - Email
  - MQ

- แบ่งคนตาม use case
  - อ้น ต่อ database (mongodb) เขียน repository
  - เป้ use case : check-in feature
  - เล็ก : validate request 
    - Authorization e.g. ไม่ให้ non-org สร้าง event ได้
  - ป้องกัน : web มีคน provide Postman ขึ้นเว็บได้เลย
  - Noom : Design/implement หน้าเว็บแบบ responsive
  - Sol : User ซื้อ ticket
  - J : org สร้าง event, ticket
  - Ice : Mobile app - รู้ Postman, Flutter


  - Addtional
    - Contract testing เผื่อ API เปลี่ยน