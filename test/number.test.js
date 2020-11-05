import { keep2Decimals } from '../src/index.js'

test('keep2Decimals => .00', () => {
  expect(keep2Decimals(1.24454636, "round")).toBe(1.24)
})