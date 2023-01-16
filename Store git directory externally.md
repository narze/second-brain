---
title: "Store git directory externally"
created: 2023-01-15 14:57
date: 2023-01-16
---

I'm using [Obsidian Git](https://github.com/denolehov/obsidian-git) to sync my [Digital Garden](Digital%20Garden.md) site to Github, and I also sync all the files including private ones to other Macs & iPad via iCloud Drive, too. However syncing `.git` folder on iCloud is a bad idea and will eventually cause `fatal: bad object HEAD`.

The solution I found is to [move `.git` out of iCloud Drive](https://josh.fail/2022/a-solution-for-git-repos-and-icloud). I followed that solution and that worked well in command line, by the way it won't work with Obsidian Git since it doesn't support setting `GIT_DIR` or using Direnv in Obsidian yet.

A searched more and [found](https://github.com/denolehov/obsidian-git/issues/55) that you can create `.git` as a text file instead, then use `gitdir:` option to redirect Git to use other path instead. So to redirect from `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/notebooks` to my git directory at `~/obsidian.git` I'll  have to set my `gitdir:` like so:

```
gitdir: ../../../../../obsidian.git
```