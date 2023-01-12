import { useEffect, useState } from "react";
import { shuffle } from "../utils";

interface Card {
  readonly number: number;
  isRevealed: boolean;
}

interface MemoryGameController {
  cards: Card[];
  selectedCardIndexes: number[];
  checkGameIsWon: () => boolean;
  interactWithCard: (id: number) => void;
  resetGame: () => void;
}

/**
 *
 * @param numberOfNumbersToMatch The number of numbers that are shown on cards. There will be twice as many cards as this number.
 */
function useMemoryGameController(
  numberOfNumbersToMatch: number
): MemoryGameController {
  console.assert(numberOfNumbersToMatch > 0);

  const [cards, setCards] = useState(generateCards(numberOfNumbersToMatch));
  const [selectedCardIndexes, setSelectedCardIndexes] = useState<number[]>([]);

  function interactWithCard(cardIndex: number) {
    if (cardIndex < 0 || cardIndex >= cards.length) {
      console.error(
        `${cardIndex} is out of bounds for the cards array, which contains ${cards.length} cards.`
      );
      return;
    }

    // If a selected card is interacted with, deselect it.
    if (selectedCardIndexes.includes(cardIndex)) {
      setSelectedCardIndexes(
        selectedCardIndexes.filter(
          (selectedIndex) => selectedIndex !== cardIndex
        )
      );

      return;
    }

    // Don't allow selection of a revealed card.
    if (cards[cardIndex].isRevealed) return;

    switch (selectedCardIndexes.length) {
      case 0:
        // Select your first card.
        setSelectedCardIndexes([cardIndex]);
        break;
      case 1:
        // Select your second card.
        setSelectedCardIndexes([selectedCardIndexes[0], cardIndex]);
        break;
      case 2:
        // Deselect all selected cards, and select a new first card.
        setSelectedCardIndexes([cardIndex]);
        break;
      default:
        throw Error(
          `selectedCards.length === ${selectedCardIndexes.length}. It should be between 0 and 2 inclusive. The game state is invalid.`
        );
    }
  }

  function resetGame() {
    setCards(generateCards(numberOfNumbersToMatch));
    setSelectedCardIndexes([]);
  }

  // If the two selected cards match, reveal them.
  useEffect(() => {
    if (selectedCardIndexes.length !== 2) return;

    const [cardA, cardB] = selectedCardIndexes.map((index) => cards[index]);

    if (cardA.number !== cardB.number) return;

    cardA.isRevealed = true;
    cardB.isRevealed = true;

    const newCards = [...cards];
    newCards[selectedCardIndexes[0]] = cardA;
    newCards[selectedCardIndexes[1]] = cardB;

    setCards(newCards);
  }, [selectedCardIndexes]);

  function checkGameIsWon() {
    return cards.every((card) => card.isRevealed);
  }

  return {
    cards,
    selectedCardIndexes,
    interactWithCard,
    checkGameIsWon,
    resetGame,
  };
}

function generateCards(numbersToMatch: number): Card[] {
  let numbersForCards = Array<null>(numbersToMatch)
    .fill(null)
    .map((_, index) => index + 1);

  // Make two of each number and shuffle them up.
  numbersForCards = shuffle(numbersForCards.concat(numbersForCards));

  const cards = numbersForCards.map((number, index) => {
    return { number, isRevealed: false };
  });

  return cards;
}

export { useMemoryGameController };
export type { Card, MemoryGameController };
