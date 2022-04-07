---
title: "narzeLIVE twitch devlog"
---

## Ideas / Todo
 - [x] Queue !say
 - [ ] Build on Github Actions
 - [ ] SSL support for streamie-feed.narze.live
 - [ ] !coin to get coin every 5min
 - [ ] argo.home-cluster.narze.live
 - [ ] Youtube mediashare
 - [ ] 20 marbles
 - [ ] Inactive burn rate
 - [ ] Resound redux
 - [ ] !wordle
 - [ ] Lumken : amඞgus mඞde
  
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