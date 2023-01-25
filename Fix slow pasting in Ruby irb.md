---
title: "Fix slow pasting in Ruby irb"
created: 2023-01-19 14:50
date: 2023-01-26
draft: true
---

```ruby
# ~/.irbrc
IRB.conf[:USE_MULTILINE] = false
```

Adding via shell before running rails console

```shell
echo 'IRB.conf[:USE_MULTILINE] = false' >> ~/.irbrc
```

Nah, won't work, just use `pry`