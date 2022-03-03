---
title: "ghq"
---

In all of my 3 Macs, I store all of my code within `~/Code` to make it persistent and easy to use across the machines. I use [`ghq`](https://github.com/x-motemen/ghq) (A [git](How%20I%20git%20in%202020.md) tool) to manage the inner structure.

To use `ghq`, simply run it anywhere in the terminal with your desired Github repository `user/repo` eg.

```shell
$ ghq get narze/thank-u-next-js
```

If the code is not on your machine yet. The command will clone [narze/thank-u-next-js](https://github.com/narze/thank-u-next-js) to `~/Code/github.com/narze/thank-u-nextjs`. (Default root path is `~/ghq` but you can override it in your [gitconfig](https://github.com/narze/dotfiles/blob/master/etc/gitconfig#L12).)

I make a [command line alias](https://monosor.com/command-line-aliases) and add `-l` parameter (`look`) to change the path after cloning, and `-p` to clone with SSH url for using with private Github repositories.

```shell
alias gq='ghq get -l -p'
```

So, for instance, I can just type `gq narze/narze.github.io` in a new terminal session and start writing articles right away!