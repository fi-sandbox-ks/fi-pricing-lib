const SYMBOLS = { USD: '$', EUR: '€', GBP: '£' };

function formatPrice(amount, currency = 'USD') {
  const symbol = SYMBOLS[currency] || '';
  return `${symbol}${amount.toFixed(2)}`;
}

function formatPercentage(fraction) {
  return `${(fraction * 100).toFixed(1)}%`;
}

module.exports = { formatPrice, formatPercentage };
