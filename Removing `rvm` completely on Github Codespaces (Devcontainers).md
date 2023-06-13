## Inspection
- Default codespaces uses [Devcontainer universal image](https://github.com/devcontainers/images/tree/main/src/universal)
- It uses [Ruby](https://github.com/devcontainers/images/blob/main/src/universal/.devcontainer/devcontainer.json#L40) as a [feature](https://containers.dev/features)
    - It [installs rvm](https://github.com/devcontainers/features/blob/main/src/ruby/install.sh) and [sets ENVs](https://github.com/devcontainers/features/blob/main/src/ruby/devcontainer-feature.json#L29-L32) in container

## Fixes
- Run script to uninstall rvm completely
    - `sudo rvm uninstall`
- Unset hardcoded ENVs
    - `unset RUBY_VERSION RUBY_ROOT RUBY_HOME GEM_HOME GEM_PATH MY_RUBY_HOME`
- Remove `/rvm/` from the PATH
    - `export PATH=$(echo $PATH | tr ':' '\n' | grep -v '/rvm/' | tr '\n' ':' | sed 's/:$//')`
- Force init rbenv
    - `eval "$(rbenv init - zsh)"`
