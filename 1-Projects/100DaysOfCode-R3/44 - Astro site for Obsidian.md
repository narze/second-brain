---
title: "44 - Astro site for Obsidian"
date: 2023-07-03
slug: 100daysofcode-r3-44-astro-site-for-obsidian
tags:
- #Astro
- #Digital-Garden
- #100DaysOfCode
---

Wishlist
- [Markdown support](https://docs.astro.build/en/guides/markdown-content)
- Edit from Obsidian and/or VSCode, sync with Git
    - Nice to haves
        - web editor
        - Link to github
- Selectively published (i.e. with `published_at` frontmatter)
- Allow code island as `.astro` / `.svelte` / `.tsx`
- Links are converted from [wikilinks] in markdown to `<a>` tag
    - Hide private links
- Graph view

Writing strategies
- Write md/mdx from Obsidian -> Git push to narze/second-brain -> Pulled into narze/garden -> Published in narze/garden
- Edit .astro from VSCode -> Git push to narze/garden -> Published
- Git submodule?
    - It has problems with some files, maybe use a script to filter files?
    - [x] degit
        - If developed locally, notes from Obsidian should be auto-sync without push and `degit`
        - Maybe use `watch` or soft link?

Concerns
- Should we use flattened path (44.md) instead of retaining paths from Obsidian? (/1-projects/100DaysOfCode-R3/44.md)
    - Pros
        - Clean
        - Folder structure not leaked
    - Cons
        - Hard to add links?
    - _Verdict_: retain path & use `slug:` in frontmatter if you want it flattened
