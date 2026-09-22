/* Intentionally left without tests: tiered bulk-pricing thresholds are
   still pending sign-off, values here are a draft -- see README
   "Development". */
const TIERS = [
  { minQuantity: 100, discountPercentage: 15 },
  { minQuantity: 50, discountPercentage: 10 },
  { minQuantity: 20, discountPercentage: 5 },
];

function tierFor(quantity) {
  return TIERS.find((tier) => quantity >= tier.minQuantity) || null;
}

function applyBulkPricing(unitPrice, quantity) {
  const tier = tierFor(quantity);
  const subtotal = unitPrice * quantity;
  if (!tier) {
    return subtotal;
  }
  return subtotal * (1 - tier.discountPercentage / 100);
}

module.exports = { tierFor, applyBulkPricing, TIERS };
