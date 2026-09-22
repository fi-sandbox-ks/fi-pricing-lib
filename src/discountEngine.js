function applyPercentageDiscount(amount, percentage) {
  if (percentage < 0 || percentage > 100) {
    throw new RangeError('percentage must be between 0 and 100');
  }
  return round2(amount * (1 - percentage / 100));
}

function applyFlatDiscount(amount, flatAmount) {
  return round2(Math.max(0, amount - flatAmount));
}

function bestDiscount(amount, percentage, flatAmount) {
  const byPercentage = applyPercentageDiscount(amount, percentage);
  const byFlat = applyFlatDiscount(amount, flatAmount);
  return Math.min(byPercentage, byFlat);
}

function round2(value) {
  return Math.round(value * 100) / 100;
}

module.exports = { applyPercentageDiscount, applyFlatDiscount, bestDiscount };
