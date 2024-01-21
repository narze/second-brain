I saw this game from ads, downloaded it, then got hooked.
The game is very simple, you have multiple glasses/bottles/jugs/tubes/etc. (I'll call them tubes) with multiple colors of water/sand, you can then transfer it to other tubes until they are all sorted

Ground rules:
- You can transfer 1 color at a time
- You cannot transfer a color into a different color
- You can transfer to an empty tube with any color since it's empty

After playing it for quite some time (300+ levels) I think I should make my own version as the one I'm currently playing is...
- Full of ads. When I want to reset I see ads. When I pass a level, sometimes I see ads. Even when I'm playing it has an ad on the bottom of the screen.
- It's too easy, at level 300 it still have only 13 tubes (2 empty ones). I want more but don't know when I'll achieve that, maybe 500?
- The "pouring" animation is slow, it takes like a second each time. It looks nice but should be faster, or even instant.
- It's made in Unity, and somehow it drains battery, maybe if I make it run on web it should use less energy.

Most of all I can make this a fun project using Svelte! Here are the rough plan.

- Make the game mechanic with plain TypeScript, may use TDD to prevent bugs.
- Use Svelte store to persist game state, player stats, and settings
- Make it PWA so that it can be played offline