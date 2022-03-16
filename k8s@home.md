---
title: "k8s@home"
---

# Logging into my home lab
- `brew install k3sup`
- Get kubeconfig on a new machine
  - `ssh-copy-id pi@raspberrypi.local`, enter password
  - `k3sup install --skip-install --host raspberrypi.local --user pi --ssh-key ~/.ssh/id_ed25519`
  - Merge into default kubeconfig file [ref](https://medium.com/@jacobtomlinson/how-to-merge-kubernetes-kubectl-config-files-737b61bd517d)
    - Backup: `cp ~/.kube/config ~/.kube/config.bak`
    - `export KUBECONFIG=$HOME/.kube/config:$(pwd)/kubeconfig`
    - `kubectl config view --flatten > /tmp/new_kubeconfig`
    - `mv /tmp/new_kubeconfig ~/.kube/config`
    - Rename default context to pi: `kubectl config rename-context default pi`
    - Verify: `kubectx pi && kubens default && kubectl get pods`


## How to develop Node.js apps on local & preview on pi k8s

