---
title: "My Dotfiles (2020)"
---

I keep updating my [Dotfiles](https://github.com/narze/dotfiles) to sync all of my Mac machines. Dotfiles are configuration files on the system which can be edit and share as a plain text. They're called "dotfiles" because they typically have leading `.` to make them hidden from the file system by default. Dotfiles can be built from scratch, or using tools like [rcm](https://github.com/thoughtbot/rcm), [Dotbot](https://github.com/anishathalye/dotbot), or even [Ansible](https://www.ansible.com/). Having shared Dotfiles availble on GitHub means I can setup a new Mac with all the apps I want using only a few commands. I use `make` command which calls Dotbot to install things for me, including :

-   Install essential package managers
    -   [Homebrew](https://brew.sh/) package manager for both command line tools and GUI apps (casks)
    -   [mas](https://github.com/mas-cli/mas) for apps in Mac App Store
    -   [asdf](http://asdf-vm.com/) for managing multiple programming languages with multiple versions
-   Symlink all the dotfiles to `~` :
    -   Zsh : [`.zshrc`](https://github.com/narze/dotfiles/blob/master/zsh/zshrc) with [Zinit](https://github.com/zdharma/zinit), an ultra-fast Zsh plugin manager (Much faster than Oh-My-Zsh!)
    -   [Powerlevel10k](https://github.com/romkatv/powerlevel10k)
    -   [Yabai](https://github.com/koekeishiya/yabai) - The only working tiling window manager for macOS.
    -   Tmux : Use gpakosz's [`.tmux`](https://github.com/gpakosz/.tmux) with [Tmuxinator](https://github.com/tmuxinator/tmuxinator) to manage complex Tmux sessions
    -   [Karabiner Elements](https://karabiner-elements.pqrs.org/) : The ultimate keyboard customizing app which I have been using for so many years. However, I use [Goku](https://github.com/yqrashawn/GokuRakuJoudo) to generate the Karabiner JSON file from the [.edn format](https://github.com/narze/dotfiles/blob/master/etc/karabiner.edn)
-   For some GUI apps which does not support Dotfiles, I sync their settings with [mackup](https://github.com/lra/mackup) with [Syncthing](https://syncthing.net/).