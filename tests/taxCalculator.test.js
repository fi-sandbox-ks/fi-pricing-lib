const { taxRateFor, calculateTax, calculateTotalWithTax } = require('../src/taxCalculator');

describe('taxCalculator', () => {
  test('returns the known region rate', () => {
    expect(taxRateFor('US')).toBe(0.0725);
  });

  test('falls back to the default rate for an unknown region', () => {
    expect(taxRateFor('MARS')).toBe(0.15);
  });

  test('calculates the tax amount', () => {
    expect(calculateTax(100, 'EU')).toBe(20);
  });

  test('calculates the total with tax', () => {
    expect(calculateTotalWithTax(100, 'EU')).toBe(120);
  });
});
