---
title: "Create, review, and merge GitHub Pull Requests from command line only"
---

Now you can manage all the GitHub pull request workflows from using only the command line via it's [official CLI][1]. Use homebrew command to install on macOS.

```shell
brew install gh
```

## Creating PR

```shell
gh pr create
```

You will be prompt to enter information such as PR title, description, then you'll get the PR number to view on web, or you can open on browser by using the `view` command with `-w` flag.

```shell
gh pr view -w
```

## Reviewing PR

To review any pull requests, the first step is to checkout the code to review. You can get the PR number from web, or using this command to list all the PRs.

```shell
gh pr list

Showing 1 of 1 open pull request in narze/thank-u-nextjs

#1  feat: replace @tailwindcssinjs/macro with twin.macro  twin-macro
```

Then checkout the code for reviewing.

```shell
gh pr checkout 1
```

After reviewing, take action to the PR, and choose to comment, approve, or request changes.

```shell
gh pr review

? What kind of review do you want to give?  [Use arrows to move, type to filter]
> Comment
  Approve
  Request changes
```

## Merging PR
To merge a PR, simply use `gh pr merge`, and choose the merge method.

```shell
gh pr merge

? What merge method would you like to use?  [Use arrows to move, type to filter]
> Create a merge commit
  Rebase and merge
  Squash and merge
```

Alternatively you can reject and close the PR without merging.

```shell
gh pr close
```

## Closing

You can also use other subcommands like `release`, `repo`, `alias`, and many more. Type only `gh` to see all available commands.