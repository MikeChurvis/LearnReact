/**
 * @param array an array of anything, e.g. [1, 2, 3].
 * @returns an array that's the original but repeated, e.g. [1, 2, 3, 1, 2, 3].
 */
function concatToSelf<Type>(array: Type[]) {
  return array.concat(array);
}

/**
 * @param array an array of anything.
 * @returns a copy of the array with its elements put in random order.
 */
function shuffle<Type>(array: Type[]) {
  const randomIndices = array.map((value) => {
    return { value: value, randomIndex: Math.random() };
  });
  randomIndices.sort((a, b) => a.randomIndex - b.randomIndex);

  return randomIndices.map((value) => value.value);
}

export { concatToSelf, shuffle };
