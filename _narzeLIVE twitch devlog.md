---
title: "narzeLIVE twitch devlog"
---

## Ideas / Todo
 - [x] Queue !say
 - [ ] Build streamie docker on Github Actions
 - [ ] SSL support for streamie-feed.narze.live & other domains
 - [ ] !coin to get coin every 5min
   - [ ] Get more when live
   - [ ] Subbers get more
 - [ ] !give to give coin to other with 30% fee
 - [ ] argo.home-cluster.narze.live
 - [ ] Youtube mediashare
 - [ ] 20 marbles game
 - [ ] Inactive burn rate
 - [ ] Resound redux
 - [ ] !wordle
 - [ ] Lumken : amඞgus mඞde
 - [ ] Show market cap in Twitch
 - [ ] Emotes
  
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