import { describe, expect, it } from '@jest/globals';
import { getFirstNItems } from './test-util';
import { constant, ones, zeros } from './constant';

describe('constant', () => {
  describe('constant()', () => {
    it("without 'count'", () => {
      const actual = getFirstNItems(constant(2), 5);
      const expected = [2, 2, 2, 2, 2];
      expect(actual).toEqual(expected);
    });

    it("with 'count'", () => {
      const actual = [...constant(2, 5)];
      const expected = [2, 2, 2, 2, 2];
      expect(actual).toEqual(expected);
    });
  });

  describe('zeros()', () => {
    it("without 'count'", () => {
      const actual = getFirstNItems(zeros(), 5);
      const expected = [0, 0, 0, 0, 0];
      expect(actual).toEqual(expected);
    });

    it("with 'count'", () => {
      const actual = [...zeros(5)];
      const expected = [0, 0, 0, 0, 0];
      expect(actual).toEqual(expected);
    });
  });

  describe('ones()', () => {
    it("without 'count'", () => {
      const actual = getFirstNItems(ones(), 5);
      const expected = [1, 1, 1, 1, 1];
      expect(actual).toEqual(expected);
    });

    it("with 'count'", () => {
      const actual = [...ones(5)];
      const expected = [1, 1, 1, 1, 1];
      expect(actual).toEqual(expected);
    });
  });
});
