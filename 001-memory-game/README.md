# Memory Game

There is a list of cards. Each card has two sides: one is blank, the other has a number. All cards start number-side down; you cannot see the number.

Click a card to flip it over and see its number. Then, click another card to see its number. If the numbers on the cards match, the cards will remain number-side up; these cards have been *revealed*. If not, they'll both flip back down to their blank side.

When all cards are revealed, you win the game.

## Stack

Current:
- Vite
- React
- TS

Planned:
- Tailwind

## Notes

The game controller is an object exposed through a custom hook. It is the single source of truth for the game's state and the single point of control for the game's actions. This strikes me as a reasonable approach, and it is functional, but I should consult my Game Design Patterns book to see if there's a better way.
