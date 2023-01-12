/**
 * @param array an array of anything.
 * @returns a copy of the array with its elements put in random order.
 */
export function shuffle<Type>(array: Type[]) {
  const randomIndices = array.map((value) => {
    return { value: value, randomIndex: Math.random() };
  });
  randomIndices.sort((a, b) => a.randomIndex - b.randomIndex);

  return randomIndices.map((value) => value.value);
}
