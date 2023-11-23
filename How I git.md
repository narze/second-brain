---
title: "How I git"
---

Inspired by [this post](https://daniel.haxx.se/blog/2020/11/09/this-is-how-i-git), this is my take on how I use git.

## Command line!

Using Sourcetree is so 2010 😜 Some people said to me that they can choose only the files they want to stage and commit. Hold my beer!

## Enter `git add --patch`

This lesser-known command will make you select "hunks" interactively, for example:

```shell
diff --git a/test/pages/index.test.tsx b/test/pages/index.test.tsx
index d85854b..2b10a47 100644
--- a/test/pages/index.test.tsx
+++ b/test/pages/index.test.tsx
@@ -35,6 +35,18 @@ beforeEach(() => {
   )
 })

+const renderWithProvider = (
+  ui,
+  { providerProps = { value: providerValue }, ...renderOptions } = {}
+) => {
+  return render(
+    <AuthProvider>
+      <StatsProvider {...providerProps}>{ui}</StatsProvider>
+    </AuthProvider>,
+    renderOptions
+  )
+}
+
 describe('Home page', () => {
   it('renders title', () => {
     const { asFragment, getByText } = renderWithProvider(<Home />, {})
(1/3) Stage this hunk [y,n,q,a,d,j,J,g,/,e,?]?
```

It will describe each file in diffs like above, then ask you if you want to stage the given hunk using `y`, or skip it with `n`. You can view all available commands with `?`.

```shell
(1/3) Stage this hunk [y,n,q,a,d,j,J,g,/,e,?]? ?
y - stage this hunk
n - do not stage this hunk
q - quit; do not stage this hunk or any of the remaining ones
a - stage this hunk and all later hunks in the file
d - do not stage this hunk or any of the later hunks in the file
g - select a hunk to go to
/ - search for a hunk matching the given regex
j - leave this hunk undecided, see next undecided hunk
J - leave this hunk undecided, see next hunk
e - manually edit the current hunk
? - print help
```

I often use `y`, `n`, `q`, `a`, `d`, `s`.

I use this command alone so often I make the [one-letter alias](https://monosor.com/command-line-alias) out of it.

```shell
alias p='git add -A -N && git add -p'
```

`git add -A -N` is needed if you want to patch new (unstaged) files. [Ref.](https://thoughtbot.com/blog/intent-to-add)

## Other commands

I have many [git aliases](https://github.com/narze/dotfiles/blob/master/zsh/config/00_aliases.zsh#L17), but these are ones that I use the most.

-   `g` (just `git`)
-   `s` (git status)
-   `m` (git commit -m)
-   `gl` (git pull)
-   `gp` (git push)
-   `gm` (git merge)
-   `gam` (git commit --amend --no-edit)
-   `gco` (git checkout)
    -   `gco -` : Switch to previous branch
-   [`ghq`](https://monosor.com/manage-all-the-git-repos-with-ghq)
-   `gh` : [GitHub CLI](https://github.com/cli/cli)
    -   `gh repo view -w` : Open current repo on github.com
    -   `gh pr checkout 123` : Checkout Pull Request #123