---
title: "50 - garden-astro - Add image & link support"
date: 2023-06-28
slug: 100daysofcode-r3-50-garden-astro-add-image-and-link-support
publish: true
---

Normal Image looks like this in Obsidian

`![If you see the image rendered correctly, your Remark plugin is working](1-Projects/100DaysOfCode-R3/attachments/Pasted%20image%2020230628223134.png)`

![](1-Projects/100DaysOfCode-R3/attachments/Pasted%20image%2020230628223134.png)

![](1-Projects/100DaysOfCode-R3/attachments/Pasted%20image%2020230628232312.png)

If you see the images above rendered correctly, your Remark plugin is working.

It is an absolute path from the root folder, so to make it render on Astro I have to copy the image to Astro, and also modify the resulting link to `/public/path-to-image`, I plan to create a [Remark](https://github.com/remarkjs/remark) plugin to modify the image & href links.
