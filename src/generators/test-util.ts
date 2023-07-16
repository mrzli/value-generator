export function getFirstNItems(
  iterable: Iterable<number>,
  n: number
): readonly number[] {
  const result: number[] = [];
  let index = 0;
  for (const item of iterable) {
    if (index++ >= n) {
      return result;
    }
    result.push(item);
  }
  return result;
}
