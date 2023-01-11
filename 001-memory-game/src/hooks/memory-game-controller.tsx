import { useState } from "react";
import { shuffle, concatToSelf } from "../utils";

function useMemoryGameController() {
  const [cardNumbers] = useState<number[]>(
    shuffle(concatToSelf([1, 2, 3, 4, 5, 6, 7, 8]))
  );

  const [cardsRevealed, setCardsRevealed] = useState(
    Array<boolean>(cardNumbers.length).fill(false)
  );

  function revealCard(cardIndex: number, newState: boolean) {
    const newCardsRevealed = [...cardsRevealed];
    newCardsRevealed[cardIndex] = newState;
    setCardsRevealed(newCardsRevealed);
  }

  return { cardNumbers, cardsRevealed, revealCard };
}

export { useMemoryGameController };
