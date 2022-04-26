---
title: "Paperang on MacOS"
---

PoC with github.com/tinyprinter/python-paperang
- `brew install llvm@11`
- `LLVM_CONFIG="/opt/homebrew/Cellar/llvm@11/11.1.0_4/bin/llvm-config" pip3 install llvmlite`
  - _May have to change 11.1.0_4_
- ghq get -l -p https://github.com/tinyprinter/python-paperang
- `pip3 install -r requirements.txt`
- Stuck on `lightblue` ... (No luck on Mac M1)
  - ![](Pasted%20image%2020220426091500.png)