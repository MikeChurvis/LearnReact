import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [numberHistory, setNumberHistory] = useState<number[]>([]);

  function incrementNumber() {
    setNumber((previousNumber) => previousNumber + 1);
  }

  function decrementNumber() {
    setNumber((previousNumber) => previousNumber - 1);
  }

  function addNumberToHistory(numberToAdd: number) {
    setNumberHistory([numberToAdd, ...numberHistory]);
  }

  useEffect(() => {
    addNumberToHistory(number);
  }, [number]);

  return (
    <main>
      <h1>Number: {number}</h1>
      <button onClick={decrementNumber}>Decrement</button>
      <button onClick={incrementNumber}>Increment</button>
      <h2>Most recent numbers:</h2>
      <ul>
        {numberHistory.map((previousNumber, index, array) => {
          return <li key={index}>{previousNumber}</li>;
        })}
      </ul>
    </main>
  );
}

export default App;
