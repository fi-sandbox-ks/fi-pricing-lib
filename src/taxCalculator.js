const TAX_RATES = {
  US: 0.0725,
  EU: 0.20,
  UK: 0.20,
  DEFAULT: 0.15,
};

function taxRateFor(region) {
  return TAX_RATES[region] ?? TAX_RATES.DEFAULT;
}

function calculateTax(amount, region) {
  const rate = taxRateFor(region);
  return round2(amount * rate);
}

function calculateTotalWithTax(amount, region) {
  return round2(amount + calculateTax(amount, region));
}

function round2(value) {
  return Math.round(value * 100) / 100;
}

module.exports = { taxRateFor, calculateTax, calculateTotalWithTax, TAX_RATES };
