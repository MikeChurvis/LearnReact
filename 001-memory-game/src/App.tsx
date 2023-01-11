function App() {
  const cardNumbers: number[] = shuffleArray(
    concatenateToSelf([1, 2, 3, 4, 5, 6, 7, 8])
  );

  return (
    <>
      <h1>Memory Game</h1>
      <p>
        Click a card to flip it over and see its number. Click a second card to
        see its number too. If the two numbers are different, both cards will
        flip back number-side down. If the numbers match, the cards will stay
        number-side up.
      </p>
      <p>
        <strong>When all cards are number-side up, you win!</strong>
      </p>
      <div id="memory-game-container">
        {cardNumbers.map((value, index) => {
          return <div key={index}>{value}</div>;
        })}
      </div>
    </>
  );
}

function concatenateToSelf<Type>(array: Type[]): Type[] {
  return [...array, ...array];
}

function shuffleArray<Type>(array: Type[]): Type[] {
  let randomIndices = array.map((value) => {
    return { value: value, randomIndex: Math.random() };
  });

  randomIndices.sort((a, b) => a.randomIndex - b.randomIndex);

  const outputArray = randomIndices.map((value) => value.value);

  return outputArray;
}

export default App;
