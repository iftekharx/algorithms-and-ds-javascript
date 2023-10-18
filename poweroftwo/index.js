function isPowerOfTwoBitwise(n) {
  if (n < 1) {
    return false;
  }
  // AND of n and n-1 returns 0 always in binary
  // O(1)
  return (n & (n - 1)) === 0;
}
// function isPowerof2(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// }
// // O(log n)
// console.log(isPowerof2(16));
// console.log(isPowerof2(5));
