// Mon, 21 Jul 2025,

// Count the Coprimes
// Difficulty: HardAccuracy: 40.63%Submissions: 1K+Points: 8
// You are given an array arr[] of positive integers. Your task is to count the number of pairs (i, j) such that:

// 0 ≤ i < j ≤ n-1
// gcd(arr[i], arr[j]) = 1
// In other words, count the number of unordered pairs of indices (i, j) where the elements at those positions are co-prime.

// Examples:

// Input: arr[] = [1, 2, 3]
// Output: 3
// Explanation: (0,1), (0,2), (1,2) are the pair of indices where gcd(arr[i], arr[j]) = 1
// Input: arr[] = [4, 8, 3, 9]
// Output: 4
// Explanation: (0,2), (0,3), (1,2), (1,3) are the pair of indices where gcd(arr[i], arr[j]) = 1
// Constraints:
// 2 ≤ arr.size() ≤ 104
// 1 ≤ arr[i] ≤ 104
// Expected Complexities
// Time Complexity: O(n + M*log M), where M = max(arr[i])
// Auxiliary Space: O(M), where M = max(arr[i])

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
  cntCoprime(arr) {
    const n = arr.length;
    const M = Math.max(...arr);
    const freq = new Array(M + 1).fill(0);
    for (const num of arr) {
      freq[num]++;
    }

    const mu = new Array(M + 1).fill(1);
    const is_prime = new Array(M + 1).fill(true);
    const primes = [];
    is_prime[0] = false;
    is_prime[1] = false;
    mu[1] = 1;

    for (let i = 2; i <= M; i++) {
      if (is_prime[i]) {
        primes.push(i);
        mu[i] = -1;
      }
      for (let j = 0; j < primes.length && i * primes[j] <= M; j++) {
        const p = primes[j];
        is_prime[i * p] = false;
        if (i % p === 0) {
          mu[i * p] = 0;
          break;
        } else {
          mu[i * p] = -mu[i];
        }
      }
    }

    const count_d = new Array(M + 1).fill(0);
    for (let d = 1; d <= M; d++) {
      for (let j = d; j <= M; j += d) {
        count_d[d] += freq[j];
      }
    }

    let ans = 0;
    for (let d = 1; d <= M; d++) {
      const cnt = count_d[d];
      const pairs = (cnt * (cnt - 1)) / 2;
      ans += mu[d] * pairs;
    }

    return ans;
  }
}
