---
title: "QMK"
---

# Setup on Apple Silicon Macs
- Install qmk CLI `brew install qmk/qmk/qmk`
- Setup `qmk setup -H ~/Code/github.com/narze/qmk_firmware`
- Compile `qmk compile -kb <keyboard> -km default`
  - e.g. `qmk compile -kb planck/rev6 -km narze`
- Compile & Flash `qmk flash -kb planck/rev6 -km narze`