---
title: "Reasons you should write tests"
---

## 1. You don't want your user to be your tester

The least happy way to test is to let your users test it. Because they'll be sure to complain, or just quit using your product altogether. Even if they reach out to you, you have to figure out why it failed. Don't hope that your users will explain the issues thoroughly. They'll simply said "It couldn't be used" or "It was broken."

But with tests, they'll be the loyal users which do as what you want them to do, and they'll raise The Red Flag for every failing case. The more tests you have, the more powerful your testing army will be.

## 2. Legacy code sucks, and you are writing them

Even if you're using the "best practices" today. There're no guarantee that they will still be the same in the (near) future. The framework or the language version will change. The future you, which certainly will have more experience than today, will want to change or refactor these "legacy code". Without tests, you'll be scared to change even the code is written with your own hand. Your team won't ever touch the code if they don't break. And if they do break, they'll be badly "hot-fixed" and be even more untouchable.

Having tests will make anybody be able to change the code whenever they want, upgrade dependencies, refactor, or even change the design pattern to the better one they just learned. Which is the good thing as the code will "grow" with you and won't be left alone, which is sad. Nothing is perfect, and your code is, too.

## 3. Tests are the documentation

I don't write docs. But many times I can learn how to use methods & interfaces by reading and following the test cases. Some languages like Python or Elixir have the thing called [Doctest](https://en.wikipedia.org/wiki/Doctest) that is the test generated from the docs.

## 4. Test now or never

Many people say "I will add tests later", that time never comes.

## 5. Testing code improves your application code, and vise versa

Specifically to TDD practice, you write minimum test first, and minimum code to make test pass. Then you write more tests, then add or modify code to make all tests pass. Then refactor, if needed. You'll see that each iteration of Red-Green-Refactor will gradually improve the code and the tests. Writing only the code cannot improve the code itself, and it will likely to make it spaghetti-code.