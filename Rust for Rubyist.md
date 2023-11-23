---
title: "Rust for Rubyist"
---

I'm learning basic [Rust][1]. As a veteran Rubyist with OOP skill, Rust is like another world to me. So I'll try to list the key differences and terminalogies in each language side by side.

| Ruby   | Rust | Note |
| :-------------: | :----------: | :-------: |
| Class/Module | Type/Trait   | Traits are more like Interfaces |
| `rake`   | `cargo` |
| Gems | Crates |
| - | Macros | Ruby has Metaprogramming, but I don't think it's the same. |
| `def` | `fn` |
| `print "#{var}"` | `println!("{}", var)` | Does Rust have string interpolation within quotes? | |
| String | Char / String / String Slices |
| `#` | `//` | Comments in Rust are like in JavaScript/C |
| Array | Array / Vector | Array in Rust mostly be immutable, Vector can be mutable with `mut` |
| `nil` | `Option<Some, None>` | I like the `Option` thing in Rust |
| `case when` | `match` | Better pattern matching in Rust! |
| block { \|x\| x } | closure ( \|x\| x ) |
| No semicolons | Semicolons (almost) |
| Duck Typing | Static Typing | Wait for Ruby 3! |

I will add more when I read all essential docs and start making [something][2] with Rust.

[1]: https://www.rust-lang.org/
[2]: /toward-a-more-useful-thai-keyboard-layout