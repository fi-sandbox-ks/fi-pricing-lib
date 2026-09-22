# fi-pricing-lib

Sample pricing calculation library -- Node.js, no runtime dependencies.
Used as the medium-size, medium-coverage sample project in the
`fi-sandbox` GitHub/Azure DevOps integration sandbox.

## Structure

- `src/discountEngine.js` -- percentage/flat discount calculations
- `src/taxCalculator.js` -- region-based tax rates
- `src/priceFormatter.js` -- currency/percentage display formatting
- `src/currencyConverter.js` -- static-rate currency conversion
- `src/bulkPricingRules.js` -- tiered bulk-pricing thresholds

## Development

```bash
npm install
npm test -- --coverage
```

`src/currencyConverter.js` and `src/bulkPricingRules.js` are intentionally
left without unit tests (see the comment at the top of each file) -- the
exchange rates and pricing tiers in both are drafts pending sign-off and
not stable enough to assert on yet.
