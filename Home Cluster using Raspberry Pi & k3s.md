---
title: "Home Cluster using Raspberry Pi & k3s"
---

https://github.com/narze/home-cluster

https://excalidraw.com/#json=eXF2jbv8OrgyJQrg_Ymb3,Geu3XCWt52SBzpS2TMClXw

![](Images/Home%20Cluster%20Architecture.png)
# Setting up from scratch
- Raspberry Pi 4 + Ubuntu
  - Install Ubuntu 20.04 64bit instead of raspbian (32bit)
    - [Changing Raspbian to 64 bit mode won't work](https://blog.differentpla.net/blog/2021/12/20/upgrading-raspios-to-arm64)
  - Configure Wifi (Use Raspi Imager)
  - Find pi's ip with `arp -na`
  - Configure SSH
    - sudo dpkg --configure -a
    - sudo apt install avahi-daemon
      - to enable `raspberrypi.local` instead of ip
  - Prepare for k3sup with [visudo](https://github.com/alexellis/k3sup#pre-requisites-for-k3sup-servers-and-agents) & follow tutorial https://github.com/alexellis/k3sup#-micro-tutorial-for-raspberry-pi-2-3-or-4-
    - Edit /boot/firmware/cmdline.txt (Ubuntu-specific)
      - Add `cgroup_enable=cpuset cgroup_memory=1 cgroup_enable=memory`
      - Reboot once
- Install `k3sup` on your host `brew install k3sup`
- Install k3s on Raspberry pi
  - `k3sup install --host raspberrypi.local --user pi --ssh-key ~/.ssh/id_ed25519 --context home-cluster-pi --merge --local-path ~/.kube/config`
- Access your cluster `kubectx home-cluster-pi && kubectl get nodes`
- Install Argocd-autopilot
```shell
brew install argocd-autopilot
export GIT_REPO=https://github.com/narze/home-cluster
export GIT_TOKEN=ghp_PcZ...IP0 (Your Github PAT with repo scope)
argocd-autopilot repo bootstrap
```

# Logging into my home lab from new host
- Use k3sup install with `--skip-install`
```shell
k3sup install --skip-install --host raspberrypi.local --user pi --ssh-key ~/.ssh/id_ed25519 --context home-cluster-pi --merge --local-path ~/.kube/config

kubectx home-cluster-pi
```


## How to develop Node.js apps on local & preview on pi k8s


## ArgoCD Autopilot
- brew install argocd-autopilot
- export GIT_REPO=https://github.com/narze/home-cluster
- export GIT_TOKEN=ghp_PcZ...IP0 (Your Github PAT with repo scope)
- argocd-autopilot repo bootstrap


## RPi self update
- sudo -i
- rpi-update

## Change RPi to arm 64 bit instead of arm7l
- Install Ubuntu 20.04 64bit instead of raspbian...

## Networking with Tailscale
- Installing Tailscale on Ubuntu https://tailscale.com/kb/1039/install-ubuntu-2004/
Links
- https://blog.dsb.dev/posts/accessing-my-k3s-cluster-from-anyøwhere-with-tailscale/

## Exposing services with Cloudflare Tunnel
https://developers.cloudflare.com/cloudflare-one/tutorials/many-cfd-one-tunnel/


# References
- https://rpi4cluster.com
- https://blog.differentpla.net/blog/2020/02/06/k3s-raspi-intro/


## Keywords
- k8s@home
- k3s
  - k3sup
 - Helm chart
 - sops & age
 - [kubernetes](https://github.com/topics/kubernetes "Topic: kubernetes") [helm](https://github.com/topics/helm "Topic: helm") [sops](https://github.com/topics/sops "Topic: sops") [gitops](https://github.com/topics/gitops "Topic: gitops") [active-project](https://github.com/topics/active-project "Topic: active-project") [argocd](https://github.com/topics/argocd "Topic: argocd") [k3s](https://github.com/topics/k3s "Topic: k3s") [helm-secrets](https://github.com/topics/helm-secrets "Topic: helm-secrets") [k8s-at-home](https://github.com/topics/k8s-at-home "Topic: k8s-at-home") [home-cluster](https://github.com/topics/home-cluster "Topic: home-cluster")
 - What's next
   - Telegram bot
   - Deploy Rails website
   - 