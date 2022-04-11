---
title: "narzeLIVE twitch devlog"
---

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

## 2022-04-09
- Run socket.io server separately
- Github Actions (build & push to ghcr.io)
- Twitch Plays Patrick's Parabox (,w ,a ,s ,d)

## 2022-04-10
- Redis helm chart
  - Bitnami's not working, use arm64v8/redis instead
 - Add `redis` package to Streamie
 - Replace `isPaused` with Redis key `streamie-dev-mode`
 - Dev Streamie to update `streamie-dev-mode` to `"true"`, then Production Streamie will stop responding to !commands, until quitting Dev Streamie will update to `"false"`

## 2022-04-11
- Setup vitest
  - Found issues when mocking Prisma, use `vitest-mock-extended`
- ~~Bits & Subs -> $OULONG~~

---

## Ideas / Todo
 - [x] Queue !say
 - [x] Build streamie docker on Github Actions
 - [ ] SSL support for streamie-feed.narze.live & other domains
 - [ ] !devmode bot to skip commands on production and use dev instead
   - [x] !pause & !unpause (quick solution)
 - [x] !farm to get coin every 5min
   - [x] Get more when live
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
   - [ ] Fix socket io not responding to !say
   - [ ] !say support replies
   - [ ] Command rate limit (5-10 seconds per command) use redis
     - [ ] Rate limit by command
   - [ ] vitest
   - [x] !farm when on live gets more than not live
   - [ ] Bit -> 3$ / bit
   - [ ] Sub -> 100$ + airdrop
   - [ ] Gift -> 100$ + airdrop
   - [ ] Store twitch user id
   - [ ] !rename oldusername
   - [ ] !marketcap
   - [ ] !place x y hex
   - [ ] !olf
   - [ ] Twitch plays ...
   - [ ] !github
- [ ] Discord
  - [ ] Connect with twitch id
- [ ] Keyboard cam
- [ ] argocd-image-updater.readthedocs.io/en/stable
- [ ] Angalung layer for streamlabs (no click required)
  