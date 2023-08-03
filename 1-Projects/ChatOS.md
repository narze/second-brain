---
title: "ChatOS"
date: 2023-07-20
slug: chat-os
publish: true
tags:
- 
draft: true
---

# TODOs
- [ ] OpenAI / ChatGPT integration
- [ ] Sync with Firestore
- [ ] Fix bug in iOS safari / chrome ![](1-Projects/attachments/ChatOS.png)
    - Chat logs not rendering, but can still send message and see message on desktop devices
- [ ] Image / file upload
- [ ] Timer
    - [ ] Restart timer
    - [ ] Sound alert
- [ ] Redo command `!!`
- [ ] Get / post URL
- [ ] Excalidraw?
- [ ] Readme (setup project)
- [ ] TODO app
- [ ] iframe
- [ ] bookmark (detect url)
- [ ] QR (detect url)
- [ ] Random string, uuid

```shell
# .envrc
export VITE_FIREBASE_EMULATOR_HOST=$(ipconfig getifaddr en0) 

pnpm run dev
```

## Architecture

[ChatOS.excalidraw](Excalidraw.priv/ChatOS.excalidraw.md)

![[Excalidraw.priv/ChatOS.excalidraw.svg]]
%%[[Excalidraw.priv/ChatOS.excalidraw.md|🖋 Edit in Excalidraw]], and the [[Excalidraw.priv/ChatOS.excalidraw.dark.svg|dark exported image]]%%