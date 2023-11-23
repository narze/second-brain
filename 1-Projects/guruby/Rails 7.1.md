สรุปอัปเดต Rails เวอร์ชั่น 7.1 ที่น่าสนใจ (ตอนนี้ 7.1.1 แล้ว แต่ป่วยฮะ 😷 ยังไม่ได้ดู Rails World keynote เลย)

1. Dockerfile 

ตอนนี้เมื่อสร้างโปรเจกต์ใหม่ ตัวเว็บแอปจะมีไฟล์ Dockerfile สำหรับ deploy ได้เลย (ควรจะมีมานานมากแล้ว ปล่อยให้ก็อปแปะเองมานานโข) ซึ่งจะใช้กับ Kamal [1] ได้ด้วย (ก่อนหน้านี้ชื่อ MRSK) หรือจะใช้กับ docker compose, k8s ได้ตามปกติ

(Kamal คือ Capistrano แบบเป็น Docker นั่นแหละถ้าว่ากันง่ายๆ ถ้าสนใจไปลองเล่นดูได้)

2. เพิ่ม Method ที่ใช้ทำ Auth

เพิ่ม normalize, authenticate_by, generates_token_for เพื่อมาเสริมทัพ ActiveModel.has_secure_password ในการทำ User Authentication ให้รัดกุมขึ้น

ก็ดีแหละ แต่ผมคงใช้ Devise เหมือนเดิม 😂

3. Async queries สำหรับ ActiveRecord

ตอน Rails 7.0 ยังมีแค่ Relation#load_async แต่ตอนนี้เพิ่มอีกหลาย Method ส่วนใหญ่จะเป็น aggregates เช่น async_count, async_sum, async_average, async_pluck และอื่นๆ

4. รองรับ Trilogy MySQL adapter ที่เค้าว่า Performance ดีขึ้น
5. รองรับ Bun JS runtime [2] เมื่อสร้างโปรเจกต์ใหม่ ด้วยคำสั่ง rails new --javascript=bun 

อ่านทั้งหมดได้ที่บล็อกของเว็บ Ruby on Rails -> https://rubyonrails.org/2023/10/5/Rails-7-1-0-has-been-released

References
[1]: https://kamal-deploy.org
[2]: https://bun.sh
