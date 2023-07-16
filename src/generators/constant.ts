export function constant<T>(value: T, count?: number): Iterable<T> {
  const iterable = function* (): Iterable<T> {
    let index = 0;
    while (true) {
      if (count !== undefined && index++ >= count) {
        break;
      }
      yield value;
    }
  };
  return iterable();
}

export function zeros(count?: number): Iterable<number> {
  return constant(0, count);
}

export function ones(count?: number): Iterable<number> {
  return constant(1, count);
}
