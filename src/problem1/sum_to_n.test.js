const {sum_to_n_a, sum_to_n_b, sum_to_n_c} = require('./sum_to_n');

test('sum_to_n() returns the correct sum for positive integers', () => {
  expect(sum_to_n_a(1)).toBe(1);
  expect(sum_to_n_a(5)).toBe(15);
  expect(sum_to_n_a(10)).toBe(55);
});
test('sum_to_n() returns the correct sum for positive integers', () => {
  expect(sum_to_n_b(1)).toBe(1);
  expect(sum_to_n_b(5)).toBe(15);
  expect(sum_to_n_b(10)).toBe(55);
});
test('sum_to_n() returns the correct sum for positive integers', () => {
  expect(sum_to_n_c(1)).toBe(1);
  expect(sum_to_n_c(5)).toBe(15);
  expect(sum_to_n_c(10)).toBe(55);
});