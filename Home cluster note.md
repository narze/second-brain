# Install argocd-autopilot on raspi k3s
- Create blank git repo e.g. https://github.com/narze/home-cluster
- Create Github Personal Access Token https://github.com/settings/tokens/new
- Install argocd-autopilot `brew install argocd-autopilot`

```
export GIT_TOKEN=your_github_pat
export GIT_REPO=https://github.com/narze/home-cluster

argocd-autopilot repo bootstrap
```

- Wait for argocd to be setup
```
watch kubectl get pods -n argocd
```

# argocd & argocd-autopilot does not officially support arm64 arch yet!

F this shit

# References 
- https://www.arthurkoziel.com/setting-up-argocd-with-helm - Blog post to install argocd with helm and manage itself
- https://github.com/thspinto/rpi-cluster - An example to get it work with Raspberry pi (uses custom built image `alinbalutoiu/argocd`)
- https://blog.alexellis.io/test-drive-k3s-on-raspberry-pi/
- https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/routing-to-tunnel/kubernetes