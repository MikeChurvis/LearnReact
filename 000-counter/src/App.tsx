import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  function incrementNumber() {
    setNumber((previousNumber) => previousNumber + 1);
  }

  function decrementNumber() {
    setNumber((previousNumber) => previousNumber - 1);
  }

  useEffect(() => {
    console.log(number);
  }, [number]);

  return (
    <main>
      <h1>Number: {number}</h1>
      <button onClick={decrementNumber}>Decrement</button>
      <button onClick={incrementNumber}>Increment</button>
    </main>
  );
}

export default App;
