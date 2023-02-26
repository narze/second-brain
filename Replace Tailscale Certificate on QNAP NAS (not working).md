---
title: "Replace Tailscale Certificate on QNAP NAS"
created: 2023-02-22 22:28
date: 2023-02-27
draft: true
---

- SSH to nas
```shell
ssh admin@nas-host
```
- Generate certificate with `tailscale cert`
```shell
tailscale cert foo.bar.ts.net
```
- `cat *.crt` then copy the certificate plaintext to save into your local machine (It should end with `-----END CERTIFICATE-----` without blank lines)
- Login to NAS, go to Control Panel -> System -> Security -> SSL Certificate & Private Key ![](attachments/Pasted%20image%2020230222223229.png)
- Import the `.crt` file
  - ERROR: Root certificate not valid


![](attachments/Pasted%20image%2020230223133451.png)