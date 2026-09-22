const { applyPercentageDiscount, applyFlatDiscount, bestDiscount } = require('../src/discountEngine');

describe('discountEngine', () => {
  test('applies a percentage discount', () => {
    expect(applyPercentageDiscount(100, 10)).toBe(90);
  });

  test('rejects an out-of-range percentage', () => {
    expect(() => applyPercentageDiscount(100, 150)).toThrow(RangeError);
  });

  test('applies a flat discount, never negative', () => {
    expect(applyFlatDiscount(10, 50)).toBe(0);
  });

  test('picks the better discount', () => {
    expect(bestDiscount(100, 10, 5)).toBe(90);
  });
});
