function isPrime(n: number): boolean {
    // Prime numbers must be greater than 1
    if (n <= 1) {
        return false;
    }

    // Check divisibility up to the square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Found a divisor, not prime
        }
    }

    return true; // No divisors found, prime
}

// Example usage
console.log(isPrime(7));   // true
console.log(isPrime(25));  // false
console.log(isPrime(1));   // false
console.log(isPrime(29));  // true

