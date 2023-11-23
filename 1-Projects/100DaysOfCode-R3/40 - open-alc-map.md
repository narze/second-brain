- Initialized kaogeek/open-alc-map
- Try to import svg from @svg-maps/thailand
- In Vite, import SVG using `?raw` suffix
```js
import SVG from '@svg-maps/thailand/thailand.svg?raw' 
```
- But then you cannot create interaction with each svg path in Svelte...
- Better copy them and create a Svelte component
- Use [`panzoom`](https://www.npmjs.com/package/@karczewski_piotr/panzoom) to support svg panning, zooming & click/touch handling
- Misc
    - Found https://observablehq.com, can create Python Notebook but using javascript, interesting...