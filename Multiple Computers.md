---
title: "Multiple Computers"
---

# Benefits from having multiple computers
To be clear, this doesn't mean to using multiple computers at the same time. In this context is to having multiple instances of similar computers at more than one place like your home, your office, in the cloud, etc.

I [use][1] macOS to work & play with code. I try to make all of my computers' file structure, apps and tools be exactly the same. Here's why.

## Portability
Having the same computers means I don't have to bring all the work home with me. In the past I used Dropbox to share the code among them and continue working at home with a PC. Nowadays I just push them on any Git repositories and pull it from another machine to start working. In the near future I think I can even code on the cloud easily with online tools like [CodeSandbox][2] or [GitHub Codespaces][3].

## Integrity
Since I have the copy for tools & all the work I have. I can restore them on any computer at will. Even if my Macbook dies right now, I will have no worries about data and I will be ready in a few hours on a new Macbook.

## Getting better as developer
To maintain the state of having multiple ready-to-work machines is not simple. You have to keep building & improving the workflow. The [Dotfiles][4] script should work on every computers you have including the newer ones. Adding new tools or apps means updating these files, and run against all of your computers. I maintained my dotfiles for years, reworked them countless times, moved Oh-My-Zsh to ZPlug, realized that ZPlug is [very slow][5] and changed to Zinit, restarting everything from scratch, adding Ansible, switched to [Dotbot][6], and so on. I have learned many things in the process of making the dotfiles useful for me and maybe someone else who have forked my code.

[1]: https://monosor.com/uses
[2]: https://codesandbox.io
[3]: https://github.com/features/codespaces
[4]: https://github.com/narze/dotfiles
[5]: https://jdhao.github.io/2019/10/08/zsh_plugin_managers_compare/
[6]: https://github.com/anishathalye/dotbot