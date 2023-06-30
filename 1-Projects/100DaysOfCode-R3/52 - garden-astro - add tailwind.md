---
title: "52 - garden-astro - add tailwind"
date: 2023-06-30
slug: 100daysofcode-r3-52-garden-astro-add-tailwind
publish: true
---

- `pnpm astro add tailwind`
- `pnpm install -D @tailwindcss/typography` 
- Add dark mode with switch [ref.](https://www.kevinzunigacuellar.com/blog/dark-mode-in-astro)
```html
<script is:inline>
  const theme = (() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  })();

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
  window.localStorage.setItem("theme", theme);
</script>
```
- Wrap everything into layout
```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
    <DarkModeScript />
	</head>
	<body class="flex flex-col h-[100svh] bg-white dark:bg-slate-800 text-black dark:text-white">
		<Header title={SITE_TITLE} />
		<main>
            <slot />
		</main>
		<Footer />
	</body>
</html>
```