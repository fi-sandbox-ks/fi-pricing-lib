/* Intentionally left without tests: exchange rates below are placeholders
   pending a live FX feed, not stable enough to assert on yet -- see
   README "Development". */
const STATIC_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
};

function convert(amount, fromCurrency, toCurrency) {
  const fromRate = STATIC_RATES[fromCurrency];
  const toRate = STATIC_RATES[toCurrency];
  if (!fromRate || !toRate) {
    throw new Error(`Unsupported currency pair: ${fromCurrency} -> ${toCurrency}`);
  }
  const amountInUsd = amount / fromRate;
  return Math.round(amountInUsd * toRate * 100) / 100;
}

module.exports = { convert, STATIC_RATES };
