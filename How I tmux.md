---
title: "How I tmux"
---

I'm a fan of [tmux](https://github.com/tmux/tmux). However, I hardly use `tmux` alone without these tools.

## [.tmux](https://github.com/gpakosz/.tmux)

I good tmux config for starter. Easy to use, and powerful. Powerline is included.

## [Tmuxnator](https://github.com/tmuxinator/tmuxinator)

I don't like to detach and attach sessions or use [`tmux-resurrect`](https://github.com/tmux-plugins/tmux-resurrect) / [`tmux-continuum`](https://github.com/tmux-plugins/tmux-continuum). I like to start a project with the same set of commands every time. So I use [Tmuxinator](https://github.com/tmuxinator/tmuxinator) to manage sessions with Yaml-formatted config instead.

This is the sample config for Tmuxinator, which runs 3 instances of `yarn` at once.

```yaml
windows:
  - editor:
       layout: main-vertical
       panes:
         - 
         - yarn run e2e
         - yarn run test
   - server:
       layout: main-vertical
       panes: 
         - yarn run dev
```

## My Key Bindings

I didn't use `Ctrl-A` or `Ctrl-B` as prefix like other people. I rebind the prefix to `Ctrl-;` instead (It is `Ctrl-O` on [Colemak DHm](https://monosor.com/colemak-mod-dhm)). Moreover, I use Ctrl + vim movement keys to switch windows & panes.

See my current config [here](https://github.com/narze/.tmux/blob/master/.tmux.conf.local).