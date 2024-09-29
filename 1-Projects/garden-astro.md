# Workflow

- Write notes in Obsidian app
- Non-private notes will be synced to Github `narze/second-brain` via Obsidian Git plugin
- On update, `narze/second-brain` will trigger another repo `narze/garden-astro` via Github Actions
- `narze/garden-astro` runs another Github Actions to fetch notes from `narze/second-brain`, filter only notes marked to be published, post-process, then commit changes
- Vercel then picks up committed changes and deploy to https://garden.narze.live
# TODOs
- [ ] Fix slow Github fetching (Maybe optional or async fetch after server started?)
- [x] Add reaction button
- [ ] Image with caption (lightbox?)
- [ ] Change theme color to `#ff8552` & `.bg-zinc-900` (similar to https://narze.live)
- [ ] Add share button 
- [ ] Tag description page
- [ ] Graph page (Obsidian like)
- [ ] ~~scrollbar color~~
- [x] Optional comment section (Facebook)
- [x] Check syntax highlighting ✅ 2023-08-17
- [x] Exclude post from feed with `no_feed: true` 📅 2023-08-09 ✅ 2023-08-09
- [x] Change front page design 📅 2023-08-09 ✅ 2023-08-09
- [x] Pagination https://docs.astro.build/en/core-concepts/routing/#pagination ✅ 2023-08-09
    - [ ] Refactor `index.astro` & `page/[page].astro`
- [ ] Fix theme error on changing page (Maybe it caused by Web Navigation API?) ![](1-Projects/attachments/garden-astro.png)