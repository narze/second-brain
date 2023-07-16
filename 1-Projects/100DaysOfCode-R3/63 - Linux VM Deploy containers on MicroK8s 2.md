---
title: "63 - Linux VM - Deploy containers on MicroK8s"
date: 2023-07-15
slug: 100daysofcode-r3-63-linux-vm-deploy-containers-on-microk8s
publish: true
tags:
- #microk8s
- #dagger
draft: true
---

(Continue from [60 - Setup Linux VM on Digitalocean](1-Projects/100DaysOfCode-R3/60%20-%20Setup%20Linux%20VM%20on%20Digitalocean.md))

## Livestream

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/PFlLpBuac70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## MicroK8s

Running a basic nginx container to test that the cluster is indeed working

```shell
microk8s start
microk8s kubectl create deployment nginx-webserver --image=nginx
microk8s kubectl expose deployment nginx-webserver --type="NodePort" --port 80
microk8s kubectl get svc nginx-webserver # See random exposed port and access on browser
```