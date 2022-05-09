---
title: "Installing Ruby 2.6 on M1 Mac"
---

# Ruby
Install with `RUBY_CFLAGS`
```shell
RUBY_CFLAGS=-DUSE_FFI_CLOSURE_ALLOC asdf install ruby 2.6.5
```

# FFI
Fix outdated version `ffi` with exports provided from `brew info libffi`

```shell
export LDFLAGS="-L/opt/homebrew/opt/libffi/lib"
export CPPFLAGS="-I/opt/homebrew/opt/libffi/include"
export PKG_CONFIG_PATH="/opt/homebrew/opt/libffi/lib/pkgconfig"

gem install ffi # or bundle install in your project which includes ffi
```

# V8
Libv8 may need python 2 to be installed
```shell
asdf plugin add python
asdf install python 2.7.18
asdf shell python 2.7.18

gem install libv8 # or bundle install in your project which includes libv8 / miniracer
```