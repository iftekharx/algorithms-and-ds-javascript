function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}
// O(n) time complexity
console.log(factorial(5));
