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
    - degit