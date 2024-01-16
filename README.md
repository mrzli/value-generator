# Value generators

This project implements value generators. Mostly, it contains functions that generate iterable values.

## Installation

```bash
npm install --save @gmjs/value-generators
```

## Usage

You can use the generators in a standalone manner:

```ts
import { range } from '@gmjs/value-generators';

for (const i of range(0, 5)) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
```

You can also use them with the `applyFn` function from the `apply-function` package:

```ts
import { applyFn } from '@gmjs/apply-function';
import { map } from '@gmjs/value-transformers';
import { index } from '@gmjs/value-generators';

const output = applyFn(
  index(5),
  map((v: number) => v + 2),
);
console.log([...output]); // using spread operator to convert iterable to array
// [2, 3, 4, 5, 6]
```

## API

### Generators

#### `constant`

Generates an iterable that yields the same value over and over again. The value is specified as the first parameter.

It has an optional `count` parameter that specifies how many times the value should be yielded. If not specified, the generator will yield the value infinitely.

```ts
const output = constant(5, 3);
console.log([...output]);
// [5, 5, 5]
```

#### `index`

Generates an iterable that yields the index of each value.

It has an optional `count` parameter that specifies how many times the value should be yielded. If not specified, the generator will yield the value infinitely.

```ts
const output = index(3);
console.log([...output]);
// [0, 1, 2]
```

#### `ones`

Generates an iterable that yields the value `1` over and over again.

It has an optional `count` parameter that specifies how many times the value should be yielded. If not specified, the generator will yield the value infinitely.

```ts
const output = ones(3);
console.log([...output]);
// [1, 1, 1]
```

#### `range`

Generates an iterable that yields a range of values.

The first parameter defined the `from` (starting) value, the second parameter defines the `to` (limit) value. The `to` value is not included in the range, meaning that the generator can potentially yield values in `[from, to)`.

It has an optional `step` parameter that specifies the step size. If not specified, the step size is `1`. Step size can be negative, in which case the generator can potentially yield values in `(to, from]` range, again starting with the `from` value.

```ts
const output = range(0, 5);
console.log([...output]);
// [0, 1, 2, 3, 4]
```

```ts
const output = range(1, 6, 2);
console.log([...output]);
// [1, 3, 5]
```

```ts
const output = range(5, 0, -1);
console.log([...output]);
// [5, 4, 3, 2, 1]
```

#### `zeros`

Generates an iterable that yields the value `0` over and over again.

It has an optional `count` parameter that specifies how many times the value should be yielded. If not specified, the generator will yield the value infinitely.

```ts
const output = zeros(3);
console.log([...output]);
// [0, 0, 0]
```
