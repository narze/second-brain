---
title: "narzeLIVE twitch devlog"
---

## Ideas / Todo
 - [x] Queue !say
 - [ ] Build streamie docker on Github Actions
 - [ ] SSL support for streamie-feed.narze.live & other domains
 - [ ] !devmode bot to skip commands on production and use dev instead
   - [x] !pause & !unpause (quick solution)
 - [x] !farm to get coin every 5min
   - [ ] Get more when live
   - [ ] Subbers get more
 - [x] !give to give coin to other with 30% fee
 - [ ] argo.home-cluster.narze.live
 - [ ] Youtube mediashare
 - [ ] 20 marbles game
 - [ ] Inactive burn rate
 - [ ] Resound redux
 - [ ] !wordle
 - [ ] Lumken : amඞgus mඞde
 - [ ] Show market cap in Twitch
 - [ ] Emotes
 - [ ] Telegram bot
 - [ ] Twitch bot
   - [ ] !say support replies
   - [ ] Command rate limit (5-10 seconds per command) use redis
     - [ ] Rate limit by command
   - [ ] vitest
   - [ ] !farm when on live gets more than not live
   - [ ] Bit -> redeem $oulong
   - [ ] Store twitch user id
   - [ ] !rename oldusername
   - [ ] !marketcap
   - [ ] !place x y hex
- [ ] Discord
  - [ ] Connect with twitch id
- [ ] Keyboard cam
  
## 2022-04-04
- Deploy new streamie version to home-cluster
- Prisma is broken since can't run `prisma migrate` on arm64 arch
  - Can be built with Rust, but freaking slow
  - Change Dockerfile `node:16-alpine` to `node:16-slim` and it works 🤯

## 2022-04-05
- Setup feed for `!gacha` & `!airdrop`

## 2022-04-06
- `!airdrop [n]`
- Deploy feed overlay & angalung page (web)
- Build docker image with `make build`

## 2022-04-07
- !give 
- !devmode -> !pause & !unpause (quick solution)
- !farm

## 2022-04-08
- Fix inconsistent !say connection
- Add testing
- !gacha with range -> rename to !invest