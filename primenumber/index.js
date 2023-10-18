// a prime number is a natural number greater than 1
//that is not a product  of two smaller natural numbers
// isPrime(4) false, isPrime(5) true

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
// O(sqrt(n))
console.log(isPrime(5));
console.log(isPrime(4));
