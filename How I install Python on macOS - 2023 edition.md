---
title: How I install Python in 2023
date: 2023-12-15
slug: how-i-install-python-in-2023
publish: true
tags: 
draft: false
no_feed: false
---
Prerequisite: [`asdf`](asdf%20-%20The%20Ultimate%20Version%20Manager.md)

- Add python plugin & install [`miniforge3`](https://conda-forge.org/miniforge) (as of writing it includes python 3.10.12)

```bash
asdf plugin add python
asdf install python miniforge3-latest
asdf global python miniforge3-latest
```

- Install [`pipx`](pipx.pypa.io)

```bash
python -m pip install --user pipx
```

- Install [poetry](https://python-poetry.org) using `pipx`

```bash
pipx install poetry
```

- Start project with `poetry new`

```bash
poetry new poetry-demo
```