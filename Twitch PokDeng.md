---
title: "Twitch PokDeng"
---

- Active only when overlay is displayed `!pok activate` 
- Starting Phase
  - 15-30 seconds
  - !pok join [amount]
    - Max bet amount <= playerCoin / 5
  - Max players: 16
- Drawing Phase
  - 15-30s
  - Shuffle deck & give 2 cards to each player
    - ~~Player sees only their own cards (Use whisper, if possible)~~ Non-verified bot maybe cannot use whisper
  - If dealer Pok, show the hands, skip to Ending phase
  - If player not Pok, can choose to hold, or draw 1 more card with `!pok draw`
  - If dealer has less score (0-4) randomly draw 1 more card faced down
- Ending Phase
  - 15s
  - Show dealer's hand
  - Show status of each player (win, lose, deng)
  - Collect/give payment
  - Go back to starting phase again