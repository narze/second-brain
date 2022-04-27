
…---
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

## 2022-04-15
- Paperang x Streamie
  - webusb
  - `streamie/printer` package

## 2022-04-17
- Add print queue to printer
- Add synced text page to  `streamie/web` to replace Stickies
- Fix streamlarb (Error occurred randomly when opened VSCode before Streamlarb)

## 2022-04-20
- SvelteKit + Discord OAuth
  - Problem : Refresh token not working on Vercel (It caches the page, but refreshes the token in background and not returning the cookie to the browser, so that the next refresh will force user to log out since old refresh token does not work anymore)
  - Possible solutions : 
    - Client auth (Don't use hooks to set cookies)
    - SWR
    - Match the cache time with access token age

## 2022-04-22
- Discord - Twitch integration (Update user's twitchId & discordId)
- Vite build time ENVs
  - Took streamie docker image private
  - Add dockerpulljson secret to cluster https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/

## 2022-04-25
- Make !place page public @ https://streamie-public.narze.live/pub/place
  - Setup Tailwind JIT mode `mode: "jit"`
  - #til JIT class does not work with number variables `h-[${height}px]` ❌

## 2022-04-27
- Raycast extension for Navidrome
  - https://github.com/narze/raycast-navidrome
  - Only "Now Playing feature is working"
  - Cannot use MPRIS to control Sonixd yet since macOS does not have DBus supported natively


---

## Ideas / Todo
 - [x] Queue !say
 - [x] Build streamie docker on Github Actions
 - [ ] SSL support for streamie-feed.narze.live & other domains
 - [ ] Argocd deployment alert on Discord
 - [x] !devmode bot to skip commands on production and use dev instead
   - [x] !pause & !unpause (quick solution)
 - [x] !farm to get coin every 5min
   - [x] Get more when live
   - [ ] Subbers get more
 - [x] !give to give coin to other with 30% fee
 - [x] argo.home-cluster.narze.live
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
   - [x] vitest
   - [x] !farm when on live gets more than not live
   - [x] Bit -> 3$ / bit
   - [x] Sub -> 100$ + airdrop
   - [x] Gift -> 100$ + airdrop
   - [ ] Store twitch user id
   - [ ] !rename oldusername
   - [ ] !marketcap
   - [x] !place x y hex
   - [x] !olf
   - [ ] Twitch plays ...
   - [ ] !github
   - [ ] Custom ! commands (like streamelements)
- [ ] Discord
  - [ ] Connect with twitch id
- [ ] Keyboard cam
  - [ ] Bit to change kb with roulette
- [ ] argocd-image-updater.readthedocs.io/en/stable
- [x] Angalung layer for streamlabs (no click required)
- [ ] !ask (GPT-3)
- [ ] Try remotion
- [ ] RasPi Zero 2 W + Paperang
  - [ ] Needs PoC on Pi4 first
- [ ] Raycast + http://www.subsonic.org/pages/api.jsp#setRating (Mini player **MPRIS** + Star rating shortcut) 
  - [ ] https://developers.raycast.com/basics/create-your-first-extension
  - [ ] Demo https://demo.navidrome.org/rest/ping.view?u=demo&v=1.16.1&c=myapp&p=demo&f=json
- [ ] HabitsGarden clone with weighted score
- [ ] showdown.space - Code in the wind viewer
