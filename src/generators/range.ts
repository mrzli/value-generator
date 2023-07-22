export function range(
  from: number,
  to: number,
  step = 1
): Iterable<number> {
  const iterable = function* (): Iterable<number> {
    let value = from;
    while (!isBreakCondition(value, to, step)) {
      yield value;
      value += step;
    }
  };
  return iterable();
}

function isBreakCondition(value: number, to: number, step: number): boolean {
  return step > 0 ? value >= to : value <= to;
}
