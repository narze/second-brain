---
title: asdf - The Ultimate Version Manager
slug: asdf-the-ultimate-version-manager
publish: true
tags:
  - notes
draft: false
no_feed: true
---
Due to the differences of the dependencies of your projects (and others on GitHub.) Now it's pretty normal to have multiple versions of programming languages like Python, Node.js, or even PHP, installed on your system. There're some tools like `pyenv`, `rbenv`, `nvm`, and many more, but most of them can work with only one language per tool, so you have to remember all of their commands if you work on multiple languages.

Enter [`asdf`][https://asdf-vm.com], the universal version manager which works with most languages, and even cover some tools like [Vim][asdf-vim]!

Since `asdf` is just a shell script with extensible plugin system. Installation is strightforward, [follow the instructions][install] to install it to the system. eg. If you use macOS:

```shell
brew install coreutils curl git # Dependencies
brew install asdf
```

Don't forget to add `asdf` to your shell.

```shell
# zsh
echo -e "\n. $(brew --prefix asdf)/asdf.sh" >> ~/.zshrc

# bash
echo -e "\n. $(brew --prefix asdf)/asdf.sh" >> ~/.bash_profile

# fish
echo -e "\nsource "(brew --prefix asdf)"/asdf.fish" >> ~/.config/fish/config.fish
```

Restart the shell. Now you're ready to add plugins! Firstly, list all the plugins.

```shell
asdf plugin list all

# You'll see something like this
...
ripgrep                       https://gitlab.com/wt0f/asdf-ripgrep.git
rke                           https://github.com/particledecay/asdf-rke.git
rlwrap                        https://github.com/asdf-community/asdf-rlwrap.git
ruby                         *https://github.com/asdf-vm/asdf-ruby.git
rust                         *https://github.com/code-lever/asdf-rust.git
saml2aws                      https://github.com/elementalvoid/asdf-saml2aws.git
sbcl                          https://github.com/smashedtoatoms/asdf-sbcl.git
sbt                           https://github.com/bram2000/asdf-sbt.git
scala                         https://github.com/mtatheonly/asdf-scala.git
scenery                       https://github.com/skyzyx/asdf-scenery.git
...
```

I want to use Rust! So add Rust plugin.

```shell
asdf plugin add rust
```

Then, list all Rust versions.

```shell
asdf list all rust # or asdf latest rust to get only latest version

# Output
...
1.43.1
1.44.0
1.44.1
1.45.0
1.45.1
1.45.2
1.46.0
1.47.0
```

Choose the version and install it.

```shell
asdf install rust 1.47.0
```

Set the version and you're done!

```shell
# Local (will create .tool-versions in current directory)
asdf local rust 1.47.0

# Global (will create ~/.tool-versions)
asdf global rust 1.47.0

# Shell (Set the version to current shell session)
asdf shell rust 1.47.0
```

Sometimes after installing new version or other command line executables which uses languages in asdf, you must run `reshim` once to recreate shims and make the executables working.

```shell
asdf reshim [language]
```

Note: Some languages (like [Node.js][asdf-nodejs]) has some requirements before install. So you should look on the plugin's homepage before installing any plugins for the first time.

[asdf]: https://asdf-vm.com
[asdf-vim]: https://github.com/tsuyoshicho/asdf-vim
[install]: https://asdf-vm.com/#/core-manage-asdf
[rust-for-rubyist]: /rust-for-rubyist
[asdf-nodejs]: https://github.com/asdf-vm/asdf-nodejs#install