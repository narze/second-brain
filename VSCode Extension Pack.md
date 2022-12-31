---
title: "VSCode Extension Pack"
created: 2022-12-31 18:37
date: 2023-01-01
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