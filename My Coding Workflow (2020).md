---
title: "My Coding Workflow (2020)"
---

## Rule of Thumb

-   Almost everything I do start with command line interface. Now I use [Kitty](https://github.com/kovidgoyal/kitty) with Zsh. [Here are my Dotfiles](https://github.com/narze/dotfiles)
-   Since I have 3 macOS machines (2 Macbooks & 1 Hackintosh desktop), I sync my non-dotfiles with [Syncthing](https://syncthing.net/) and have a backup NAS at home.

## Jumping around in command line

-   I use [Zoxide](https://github.com/ajeetdsouza/zoxide) to remember paths I use often, eg. run `z dot` to change directory into `/Code/narze/dotfiles` since I previously access it.

## Start / continue working on GitHub projects

All my code stays in `~/Code/` of every machines I have. Sometimes I have to switch the machine or I left my main Macbook at work. I use [`ghq`](https://github.com/x-motemen/ghq) to clone & navigate the repositories. You can configure this tool to use GitLab as well.

If I want to clone github.com/narze/dotfiles, I use the command :

```
ghq get -l -p narze/dotfiles
```

The code will be cloned to `~/Code/github.com/narze/dotfiles` and automatically `cd` me into it (If already cloned will just run `cd`.)

## Text Editor

Strangely, I'm still using VSCode instead of Vim/Emacs

## Git

For commands I use, see [How I git](https://monosor.com/how-i-git)

For commit messages I used [Gitmoji](https://gitmoji.carloscuesta.me/). But changed to [Conventional Commits](https://www.conventionalcommits.org/).

My new repos will use `main` rather than `master` default branch name.