---
title: "60 - Setup Linux VM on Digitalocean"
date: 2023-07-11
slug: 100daysofcode-r3-60-setup-linux-vm-on-digitalocean
publish: true
tags:
- 
draft: true
---

## Livestream

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/1HN6Sh4Shvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Chose Ubuntu 22.10 with 2GB Ram & 2 AMD CPUs as it can be [scaled up](https://docs.digitalocean.com/products/droplets/how-to/resize/) later, and [upgrade to newer OS](https://docs.digitalocean.com/products/droplets/how-to/kernel/upgrade) if needed

## Components

Here are what I planned to install to this machine

- [x] [Setup non-root user](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04#step-2-creating-a-new-user) 
    ```shell
    adduser narze
    usermod -aG sudo narze
    ```
    - Copy ssh key from root to user [ref](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04#if-the-root-account-uses-ssh-key-authentication)
    ```shell
    rsync --archive --chown=narze:narze ~/.ssh /home/narze
    ```
- [ ] Docker, maybe Kubernetes cluster (k3s or k0s or microk8s or whatever people use in 2023)
    - [ ] Chose microk8s since it's from Canonical (Ubuntu) 
        - See [comparison](https://microk8s.io/compare)
        - MicroK8s pronounced "Micro-Kates"
        - `sudo snap install microk8s --classic`
- [x] Tailscale so that I can connect to it without remembering the IP?
    - `curl -fsSL https://tailscale.com/install.sh | sh`
    - [ ] Setup ssh alias and add it to my dotfiles
- [ ] Setup [my dotfiles](https://github.com/narze/dotfiles)
- [ ] VSCode remote
- [ ] Firewall