---
title: "53 garden-astro"
date: 2023-07-02
slug: 100daysofcode-r3-53-garden-astro
publish: true
---

Create a link resolver script and hook with Github fetch integration & dev.ts script. It uses `gray-matter` to read each of the entries and check if each markdown link points to other web pages (after filter non-published pages), then overwrite the link with working slugs.

- Link to Day 52 should work -> [52 - garden-astro - add tailwind](1-Projects/100DaysOfCode-R3/52%20-%20garden-astro%20-%20add%20tailwind.md)
- Link to [homepage](/) should work on website (not working on Obsidian since it does not link to a file)
- Link to [other websites](https://narze.live) should still work since it starts with `http`
