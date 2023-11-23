---
title: "Use Git LFS to manage large files in Git repository"
---

I tried pushing a large file to GitHub and it gave the warning that I should use `Git LFS` to upload large files.

[Git LFS](https://git-lfs.github.com/) (Large File Storage) is a Git extension which will replace large files with text pointer, and store the files separately on the storage. This makes the repo size relatively small, and can be cloned/pushed with faster speed since the Git history does not include the whole file.

To use Git LFS, simply install the extension.

```shell
# Mac
brew install git-lfs
```

Then setup the extension to GitHub user account.

```shell
git lfs install
```

Next, in the repository, track the file with `track` subcommand.

```shell
git lfs track "*.psd" # Track all PSD files
```

After running `track`, it will create `.gitattributes` files which store the lfs settings. Make sure to add it too.

```shell
git add .gitattributes
```

Then commit, and push. You'll see the LFS upload progress.

```text
Uploading LFS objects:  75% (3/4), 158 MB | 129 KB/s 
```

If you want to migrate existing file which is already tracked, use `migrate immport`. Warning : The command will overwrite the whole tree! See other options [here](https://github.com/git-lfs/git-lfs/blob/master/docs/man/git-lfs-migrate.1.ronn).

```shell
git lfs migrate import --include-ref=main --include="*.psd"
```

## Caveat

GitHub has [limited LFS storage and bandwidth quota](https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-git-large-file-storage) at 1GB.