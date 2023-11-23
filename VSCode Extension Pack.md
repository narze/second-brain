---
title: "VSCode Extension Pack"
date: 2023-01-01
slug: vscode-extension-pack
publish: true
tags:
- 
---

1. Install Yeoman & `generator-code`
    ```shell
    npm install -g yo generator-code
    ```
1. Bootstrap VSCode extension pack 
    ```shell
    yo code
    # Choose "New Extension Pack"
    ```
1. Edit `package.json` -> `extensionPack`
1. Publish
   ```shell
   vsce publish
   ```