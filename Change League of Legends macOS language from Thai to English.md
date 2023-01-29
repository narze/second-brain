---
title: "Change League of Legends macOS language from Thai to English"
created: 2023-01-29 02:11
date: 2023-01-29
---

By default the interface language will be locked to region, playing in TH server will result in Thai language and it cannot be changed within the game.

![](attachments/lol_th.png)

However it can be run from command line with `--locale` argument

```shell
open /Applications/League\ of\ Legends.app/Contents/LoL/LeagueClient.app --args --locale=en_US
```

You may have to re-login, but the game will be in English.

![](attachments/lol_en.png)