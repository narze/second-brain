---
title: "77 ChatOS - Trying encryption libraries"
date: 2023-08-04
slug: 100daysofcode-r3-77-chatos-trying-encryption-libraries
publish: true
tags:
- 
draft: true
---

<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnarze%2Fposts%2Fpfbid0yLYZ1se1Xm589oCcBiqGv99KnsddP4AyUjQZ7PfvEZC9bdKsTZNaL8Wwb6hqHxPLl&show_text=true&width=500" width="500" height="576" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

## Livestream

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/4EM8BWhr3Fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Libraries
- **Themis** https://www.cossacklabs.com/themis [Github](https://github.com/cossacklabs/themis)
    - [Bear app case study]([https://www.cossacklabs.com/case-studies/bear/](https://www.cossacklabs.com/case-studies/bear))
- **TweetNaCl.js** https://www.npmjs.com/package/tweetnacl
    - https://tweetnacl.js.org/#/box

## Resources
- Keybase Book - Crypto Chat https://book.keybase.io/docs/chat/crypto
- [Google Cloud - Security Key Management]([https://cloud.google.com/security-key-management](https://cloud.google.com/security-key-management)

Key features to use on ChatOS:
- Works on browser
- User can choose any passphrase, long or short
- End-to-end encryption (Firebase admin cannot decrypt the content)
- Preferrably 1-key
- Not too slow