/**
 * You would need to generate 1 billion elements
 * in the span of 1 milisecond to have a 1 in 10 million chance
 * of a key collision.
 */
export function generateID(): string {
  const thisMoment = Date.now().toString();
  const largeRandomHex = Math.floor(Math.random() * Math.pow(10, 16)).toString(
    16
  );
  return `${thisMoment}-${largeRandomHex}`;
}
