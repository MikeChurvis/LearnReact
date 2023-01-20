import { useCounter } from "./hooks/useCounter";

function App() {
  const {
    currentNumber,
    changeCurrentNumber,
    previousNumbers,
    undoLastChange,
  } = useCounter(0);

  return (
    <main className="container">
      <hgroup>
        <h1>Counter</h1>
        <p>Number: {currentNumber}</p>
      </hgroup>
      <div className="grid">
        <button onClick={() => changeCurrentNumber(-1)}>Decrement</button>
        <button onClick={() => changeCurrentNumber(1)}>Increment</button>
      </div>
      <div>
        <button disabled={previousNumbers.length < 1} onClick={undoLastChange}>
          Undo
        </button>
      </div>
      <h2>Most recent numbers:</h2>
      <ul>
        {previousNumbers.map((previousNumber, index) => {
          return <li key={index}>{previousNumber}</li>;
        })}
      </ul>
    </main>
  );
}

export default App;
