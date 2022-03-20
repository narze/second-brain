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


# References
- https://rpi4cluster.com
- https://blog.differentpla.net/blog/2020/02/06/k3s-raspi-intro/