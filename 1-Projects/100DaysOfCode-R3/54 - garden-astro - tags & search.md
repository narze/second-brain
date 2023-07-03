---
title: "54 - garden-astro - tags & search"
date: 2023-07-03
slug: 100daysofcode-r3-54-garden-astro-tags-search
publish: true
tags:
    - Astro
    - Digital Garden
    - 100DaysOfCode
draft: true
---

## Add tags

Start by adding type schema in Astro's `config.ts`
```typescript
const secondBrain = defineCollection({
  schema: z.object({
    ...
    tags: z.array(z.string()).optional(),
  }),
})
```

Then the tags will be available in Astro layout file

```typescript
// Post.astro
const { title, date, draft, updated, filepath, tags } = Astro.props
```

#issue Degit blows up
```
09:11:04 PM [build] Waiting for the github-fetch integration...
 error   zlib: unexpected end of file
  File:
    /Users/narze/Code/github.com/narze/garden-astro/node_modules/.pnpm/degit@2.8.4/node_modules/degit/dist/index-688c5d50.js:1322:22
  Code:
    1321 |       Buffer.concat = OriginalBufferConcat;
    > 1322 |       this[_onError](new ZlibError(err));
           |                      ^
```
Solution : Clear degit cache `rm -rf ~/.degit` [ref.](https://github.com/Rich-Harris/degit/issues/313) (Cannot use `tiged` since it does not support typescript)

Maybe we should move to Octokit in the near future...



