---
title: "55 - garden-astro"
date: 2023-07-04
slug: 100daysofcode-r3-55-garden-astro
publish: true
tags:
- 100DaysOfCode
- digital-garden
- garden-astro
- Astro
---

## Moving websites

Switch https://garden.narze.live too use garden-astro instead, here is the image of the old site which uses [Quartz](https://github.com/jackyzha0/quartz) ![](1-Projects/100DaysOfCode-R3/attachments/55%20-%20garden-astro.png)
The old website is moved to [garden-quartz.narze.live](https://garden-quartz.narze.live)

## Webring logo

Add webring logo to the site following these [instructions](https://github.com/wonderfulsoftware/webring#%E0%B8%A3%E0%B9%88%E0%B8%A7%E0%B8%A1%E0%B8%A7%E0%B8%87)

```html
<a href="https://webring.wonderful.software#garden.narze.live" title="วงแหวนเว็บ" style="width: 32px; display: block; margin: 0 auto;">
    <img
        alt="วงแหวนเว็บ"
        width="32"
        height="32"
        src="https://webring.wonderful.software/webring.white.svg"
    />
</a>
```

---

## Add RSS feed

The RSS feed can be easily added using `@astrojs/rss`  https://docs.astro.build/en/guides/rss/#setting-up-astrojsrss