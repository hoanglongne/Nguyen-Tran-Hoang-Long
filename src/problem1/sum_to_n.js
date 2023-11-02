//First way: the basic, brute force way.
// This implementation uses a for loop to iterate from 1 to n, adding each number to the sum variable
function sum_to_n_a(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}
  
//Second way: recursive way
// This implementation uses a recursive approach to calculate the sum of the numbers from 1 to n. The base case is when n === 1, in which case the function simply returns 1. Otherwise, the function returns n + sum_to_n(n - 1), which is the sum of n and the sum of the numbers from 1 to n - 1
function sum_to_n_b(n) {
    if (n === 1) {
      return 1;
    }
    return n + sum_to_n_b(n - 1);
}

//Third way: mathematical approach way
function sum_to_n_c (n) {
    return (n * (n + 1)) / 2;
}
  
module.exports = {sum_to_n_a, sum_to_n_b, sum_to_n_c}
