---
title: "Wasm"
created: 2022-11-19 00:34
date: 2022-11-19
---

- Wasm Dev Guide https://webassembly.org/getting-started/developers-guide/
  - AssemblyScript (ts-like) https://www.assemblyscript.org/introduction.html
  - Rust to Wasm https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm
  - Run wasm with JS https://developer.mozilla.org/en-US/docs/WebAssembly/Loading_and_running
    - `WebAssembly.instantiateStreaming()` https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming
- WASI - https://github.com/bytecodealliance/wasmtime/blob/main/docs/WASI-intro.md
  - Use the compiled wasm as a CLI application / in Node.js with system interface
- Runtimes
  - Run with [wasmtime](https://wasmtime.dev) (Runtime for wasm)
  - [Wasmer](https://wasmer.io/wasmer-vs-wasmtime) claims that it's faster & better than wasm
    - `asdf plugin add wasmer && asdf install wasmer latest`
    - [Wapm](https://wapm.io) - Wasm package manager (which comes with wasmer)
    - `wax` ~ nodejs's npx but it's wasm (example: `wax quickjs`)
  - There's also [WasmEdge](https://github.com/WasmEdge/WasmEdge) runtime
    - Supports compiling JavaScript https://wasmedge.org/book/en/write_wasm/js.html
  - [Wasm3](https://github.com/wasm3/wasm3)
  - [WAVM](https://wavm.github.io/)
- [Wasm runtimes compared](https://blog.logrocket.com/webassembly-runtimes-compared)
- https://github.com/appcypher/awesome-wasm-runtimes
- [Javy](https://github.com/Shopify/javy) - JS to Wasm toolchain (it can [compile js to wasm](https://github.com/Shopify/javy#compiling-to-webassembly))
- [Learning WebAssembly Series (Blog)](https://blog.ttulka.com/learning-webassembly-series/?ref=hackernoon.com)
- [Wasm Ecosystem Mind Mapping](https://coggle.it/diagram/YgSRKkMks4i53-Ps/t/webassembly-icon-wasm-webassembly)
- Misc
    - [Essential Guide to Image Processing with WebAssembly](https://hackernoon.com/essential-guide-to-image-processing-with-webassembly-q11u33hq)
    - Wasm-4 (Game Engine) https://wasm4.org
    - [Awesome Wasm Tools](https://github.com/vshymanskyy/awesome-wasm-tools)