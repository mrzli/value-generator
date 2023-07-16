import { describe, expect, it } from '@jest/globals';
import { index } from './index-generator';
import { getFirstNItems } from './test-util';

describe('index-generator', () => {
  describe('index()', () => {
    it("without 'count'", () => {
      const actual = getFirstNItems(index(), 5);
      const expected = [0, 1, 2, 3, 4];
      expect(actual).toEqual(expected);
    });

    it("with 'count'", () => {
      const actual = [...index(5)];
      const expected = [0, 1, 2, 3, 4];
      expect(actual).toEqual(expected);
    });
  });
});
