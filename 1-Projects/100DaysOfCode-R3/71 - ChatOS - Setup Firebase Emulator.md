---
title: "71 - ChatOS - Setup Firebase Emulator"
date: 2023-07-24
slug: 100daysofcode-r3-71-chatos-setup-firebase-emulator
publish: true
tags:
- #100DaysOfCode 
- #ChatOS
draft: true
---

## Livestream

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/NB2st_z-2_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

https://firebase.google.com/docs/emulator-suite

Setup Firebase CLI & emulator

```shell
curl -sL firebase.tools | bash

# Choose Emulators, and other services you'd like to use e.g. Firestore, Auth
firebase init

# Start emulators
firebase emulators:start
```

Then, connect the app to emulator in your Firebase initialization step. You can add condition to connect to the emulator.

```javascript
import { getAuth, connectAuthEmulator } from 'firebase/auth';

export const auth = getAuth(app);

// Connect to Firebase Emulator only in development
if (process.env.NODE_ENV === 'development') {
	connectAuthEmulator(auth, 'http://localhost:9099');
}
```

Then try logging in, instead of redirecting to Google login, you'll see this page.

![](1-Projects/100DaysOfCode-R3/attachments/71%20-%20ChatOS%20-%20Setup%20Firebase%20Emulator.png)

Then add new account and fill in user information, or auto generate it.

![](1-Projects/100DaysOfCode-R3/attachments/71%20-%20ChatOS%20-%20Setup%20Firebase%20Emulator-1.png)