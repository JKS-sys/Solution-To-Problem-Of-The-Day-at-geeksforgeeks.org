// Thu, 17 Jul 2025,

// Power of k in factorial of n
// Difficulty: MediumAccuracy: 36.16%Submissions: 2K+Points: 4
// Given two positive integers n and k, determine the highest value of x such that kx divides n! (n factorial) completely (i.e., n % (kx) == 0).

// Examples :

// Input: n = 7, k = 2
// Output: 4
// Explanation: 7! = 5040, and 24 = 16 is the highest power of 2 that divides 5040.
// Input: n = 10, k = 9
// Output: 2
// Explanation: 10! = 3628800, and 9² = 81 is the highest power of 9 that divides 3628800.
// Constraints:
// 1 ≤ n ≤ 105
// 2 ≤ k ≤ 105
// Expected Complexities
// Time Complexity: O(sqrt(k) + m * log n), m = number of distinct prime factors in k
// Auxiliary Space: O(m), m = number of distinct prime factors in k

class Solution {
  maxKPower(n, k) {
    let factors = new Map();
    let temp = k;
    for (let i = 2; i * i <= temp; i++) {
      while (temp % i === 0) {
        factors.set(i, (factors.get(i) || 0) + 1);
        temp = Math.floor(temp / i);
      }
    }
    if (temp > 1) {
      factors.set(temp, (factors.get(temp) || 0) + 1);
    }

    let ans = Infinity;
    for (let [p, exp] of factors) {
      let count = 0;
      let power = p;
      while (power <= n) {
        count += Math.floor(n / power);
        power *= p;
      }
      let candidate = Math.floor(count / exp);
      if (candidate < ans) {
        ans = candidate;
      }
    }
    return ans;
  }
}
