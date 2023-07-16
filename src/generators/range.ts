export function range(
  from: number,
  to: number,
  stepFinal = 1
): Iterable<number> {
  const iterable = function* (): Iterable<number> {
    let value = from;
    while (!isBreakCondition(value, to, stepFinal)) {
      yield value;
      value += stepFinal;
    }
  };
  return iterable();
}

function isBreakCondition(value: number, to: number, step: number): boolean {
  return step > 0 ? value >= to : value <= to;
}
