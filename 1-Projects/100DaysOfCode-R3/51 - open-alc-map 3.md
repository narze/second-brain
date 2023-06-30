---
title: "51 - open-alc-map"
date: 2023-06-29
slug: 100daysofcode-r3-51-open-alc-map
publish: true
draft: true
---

- Upgrade to Svelte v4
- Move data to yaml format
    - Read file in raw format `import data from "./file.yaml?raw"`
    - Use `yaml` package to parse `parse(data)`
- Change logo to circle
    - Use svg `mask`
```html
<image
    href={getBrandImage(node.id)}
    x={node.x - 20}
    y={node.y - 20}
    height="40"
    width="40"
    mask="url(#image-mask)"
/>

<mask id="image-mask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
    <circle cx="0.5" cy="0.5" r="0.5" fill="white" />
</mask>
```
- Show data on click
- Add more entries

