---
title: "79 - ChatOS - Generate encryption key with PBKDF2"
date: 2023-08-07
slug: 100daysofcode-r3-79-chatos-generate-encryption-key-with-pbkdf2
publish: true
tags:
- encryption
- ChatOS
- 100DaysOfCode
- pbkdf2
draft: true
---

## Livestream

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/mObgce2vE7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

PBKDF2 will enable user to use their own passphrase, I'll use [`@noble/hashes`](https://www.npmjs.com/package/@noble/hashes) package since it's quite popular and have TypeScript support built-in.
