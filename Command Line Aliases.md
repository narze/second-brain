---
title: "Command Line Aliases"
---

I extensively use command line to navigate stuff and run commands, so I keep track of commands I ran often, then make aliases to reduce them

```shell
zsh_stats () {
	fc -l 1 | \
	  awk '{CMD[$2]++;count++;}END { for (a in CMD)print CMD[a] " " CMD[a]/count*100 "% " a;}' | \
	  grep -v "./" | \
	  column -c3 -s " " -t | \
	  sort -nr | nl | head -n20
}
```

This command will output the top 20 commands I use, here is the result.

```
     1	598  29.9%   s
     2	205  10.25%  yarn
     3	183  9.15%   p
     4	123  6.15%   m
     5	62   3.1%    gp
     6	44   2.2%    n
     7	44   2.2%    gl
     8	42   2.1%    v
     9	42   2.1%    gaa
    10	32   1.6%    z
    11	31   1.55%   cd
    12	30   1.5%    gco
    13	29   1.45%   gr
    14	28   1.4%    c.
    15	24   1.2%    ls
    16	22   1.1%    rm
    17	21   1.05%   npm
    18	20   1%      g
    19	19   0.95%   lt
    20	17   0.85%   l
```

Many commands are from `git`, such as `s` is aliased to `git status -sb`, `p` to `git add -A -N && git add -p`, and `m` is `git commit -m`. These save me a couple hundred of keystrokes every day.

You can see most of my alises in the [Dotfiles](https://github.com/narze/dotfiles/blob/master/zsh/config/00_aliases.zsh). But I recommend you to build it yourself within `.bashrc` or `.zshrc` first. Since copying from other people will make it confusing and hard to memorize.