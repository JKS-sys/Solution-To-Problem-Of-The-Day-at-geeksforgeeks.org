// Wed, 16 Jul 2025,

// Nine Divisors
// Difficulty: MediumAccuracy: 35.58%Submissions: 16K+Points: 4
// Given a positive integer n, you need to count the numbers less than or equal to n having exactly 9 divisors.

// Examples :

// Input: n = 100
// Output: 2
// Explanation: Numbers which have exactly 9 divisors are 36 and 100.
// Input: n = 200
// Output: 3
// Explanation: Numbers which have exactly 9 divisors are 36, 100, 196.
// Constraints:
// 1 ≤ n ≤ 109
// Expected Complexities
// Time Complexity: O(sqrt(n) * log(log(sqrt(n))))
// Auxiliary Space: O(sqrt(n))

/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
  countNumbers(n) {
    if (n < 36) {
      return 0;
    }
    const limit_int = Math.floor(Math.sqrt(n));
    const primes = this.getPrimes(limit_int);
    let count = 0;

    for (const p of primes) {
      const eighth = Math.pow(p, 8);
      if (eighth <= n) {
        count++;
      } else {
        break;
      }
    }

    let j = primes.length - 1;
    for (let i = 0; i < primes.length; i++) {
      const p = primes[i];
      if (p > limit_int) {
        break;
      }
      const max_q = Math.floor(limit_int / p);
      while (j > i && primes[j] > max_q) {
        j--;
      }
      if (j <= i) {
        break;
      }
      count += j - i;
    }

    return count;
  }

  getPrimes(max_sieve) {
    if (max_sieve < 2) {
      return [];
    }
    const isPrime = new Array(max_sieve + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i * i <= max_sieve; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= max_sieve; j += i) {
          isPrime[j] = false;
        }
      }
    }
    const primes = [];
    for (let i = 2; i <= max_sieve; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }
    return primes;
  }
}
