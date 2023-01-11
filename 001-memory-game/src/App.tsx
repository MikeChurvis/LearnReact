import { useState } from "react";
import { shuffle, concatToSelf } from "./utils";
import { Card } from "./components/card";

function App() {
  const [cardNumbers] = useState<number[]>(
    shuffle(concatToSelf([1, 2, 3, 4, 5, 6, 7, 8]))
  );

  const [cardsRevealed, setCardsRevealed] = useState(
    Array<boolean>(cardNumbers.length).fill(false)
  );

  function handleCardStateChange(cardIndex: number, newState: boolean) {
    const newCardsRevealed = [...cardsRevealed];
    newCardsRevealed[cardIndex] = newState;
    setCardsRevealed(newCardsRevealed);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "50em" }}>
        <h1>Memory Game</h1>
        <p style={{ maxWidth: "72ch" }}>
          Click a card to flip it over and see its number. Click a second card
          to see its number too. If the two numbers are different, both cards
          will flip back number-side down. If the numbers match, the cards will
          stay number-side up.
        </p>
        <p>
          <strong>When all cards are number-side up, you win!</strong>
        </p>
        <div
          id="memory-game-container"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {cardNumbers.map((value, index) => {
            return (
              <Card
                key={index}
                index={index}
                value={value}
                revealed={cardsRevealed[index]}
                cardInteractionHandler={handleCardStateChange}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
