![](1-Projects/100DaysOfCode-R3/attachments/Pasted%20image%2020230615003800.png)
- Planned to add timer, but getting stuck on how to render Svelte component dynamically
    - Use `<svelte:component this={Component[key]} />`
    - `Component[key]` has type `typeof SvelteComponent`
- Change to large type component instead, just rendering a larger text