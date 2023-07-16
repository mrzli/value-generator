export function index(count?: number): Iterable<number> {
  const iterable = function* (): Iterable<number> {
    let i = 0;
    while (true) {
      if (count !== undefined && i >= count) {
        break;
      }
      yield i++;
    }
  };
  return iterable();
}
