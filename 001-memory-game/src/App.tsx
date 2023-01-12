import { Card } from "./components/card";
import { useMemoryGameController } from "./hooks";

function App() {
  const {
    cards,
    selectedCardIndexes,
    interactWithCard,
    checkGameIsWon,
    resetGame,
  } = useMemoryGameController(8);

  const selectedCardsMatch =
    selectedCardIndexes.length === 2 &&
    cards[selectedCardIndexes[0]].number ===
      cards[selectedCardIndexes[1]].number;

  return (
    <div
      style={{
        display: "flex",
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
        <div>
          {selectedCardsMatch ? <span>Selected cards match.</span> : null}
        </div>
        <div
          id="memory-game-container"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                isRevealed={card.isRevealed}
                isSelected={selectedCardIndexes.includes(index)}
                number={card.number}
                onSelect={() => interactWithCard(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
