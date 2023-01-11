function concatToSelf<Type>(array: Type[]) {
  return array.concat(array);
}

function shuffle<Type>(array: Type[]) {
  const randomIndices = array.map((value) => {
    return { value: value, randomIndex: Math.random() };
  });

  randomIndices.sort((a, b) => a.randomIndex - b.randomIndex);

  return randomIndices.map((value) => value.value);
}

export { concatToSelf, shuffle };
