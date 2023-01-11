import { useState } from "react";

function useCounter(initialNumber: number) {
  const [currentNumber, setCurrentNumber] = useState(initialNumber);
  const [previousNumbers, setPreviousNumbers] = useState<number[]>([]);

  function changeCurrentNumber(byAmount: number) {
    const newNumber = currentNumber + byAmount;
    setCurrentNumber(newNumber);
    setPreviousNumbers([newNumber, ...previousNumbers]);
  }

  function undoLastChange() {
    if (previousNumbers.length < 1) return;

    setCurrentNumber(previousNumbers[0]);
    setPreviousNumbers(previousNumbers.slice(1));
  }

  return {
    currentNumber,
    changeCurrentNumber,
    previousNumbers,
    undoLastChange,
  };
}

export { useCounter };
