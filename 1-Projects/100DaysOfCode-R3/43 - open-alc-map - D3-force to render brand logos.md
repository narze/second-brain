- Research more on [d3-force](https://d3js.org/d3-force) module
- Found 2 examples that did the same thing but different ways
    - [Use Svelte to create SVG & DOM](https://github.com/happybeing/d3-fdg-svelte/blob/master/src/NetworkGraphSvelteSVG.svelte)
    - [Use D3 to create SVG & DOM](https://github.com/happybeing/d3-fdg-svelte/blob/master/src/NetworkGraphD3SVG.svelte)
    - I chose the former one, since cannot [Thinking with Joins](https://bost.ocks.org/mike/join/) yet
- Confused with typings a bit
```typescript
	interface NodeDatum extends d3.SimulationNodeDatum {
		id: string;
		x: number;
		y: number;
		fx?: number;
		fy?: number;
		group: 'province' | 'brand';
	}

	interface LinkDatum extends d3.SimulationLinkDatum<NodeDatum> {
		source: string | NodeDatum;
		target: string | NodeDatum;
	}

	let simulation: d3.Simulation<NodeDatum, LinkDatum>;
```
- Turns out that d3-force will mutate the node & link data structure when running simulation, so [a custom type guard is needed](https://stackoverflow.com/a/43711425)
- Add provinces & brands as nodes, and add brand-province as links
- [Code](https://github.com/kaogeek/open-alc-map/pull/3)