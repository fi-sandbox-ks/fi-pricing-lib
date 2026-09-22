const { formatPrice, formatPercentage } = require('../src/priceFormatter');

describe('priceFormatter', () => {
  test('formats USD by default', () => {
    expect(formatPrice(9.5)).toBe('$9.50');
  });

  test('formats a known currency symbol', () => {
    expect(formatPrice(10, 'EUR')).toBe('€10.00');
  });

  test('falls back to no symbol for an unknown currency', () => {
    expect(formatPrice(10, 'JPY')).toBe('10.00');
  });

  test('formats a percentage', () => {
    expect(formatPercentage(0.1)).toBe('10.0%');
  });
});
