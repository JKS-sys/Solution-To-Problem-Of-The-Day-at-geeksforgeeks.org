// Sun, 22 Jun 2025,

// Largest Divisible Subset
// Difficulty: MediumAccuracy: 43.48%Submissions: 9K+Points: 4Average Time: 20m
// Given an array arr[] of distinct positive integers. Your task is to find the largest subset such that for every pair of elements (x, y) in the subset, either x divides y or y divides x.
// Note : If multiple subsets of the same maximum length exist, return the one that is lexicographically greatest, after sorting the subset in ascending order.

// Examples:

// Input: arr[] = [1, 16, 7, 8, 4]
// Output: [1, 4, 8, 16]
// Explanation: The largest divisible subset is [1, 4, 8, 16], where each element divides the next one. This subset is already the lexicographically greatest one.
// Input: arr[] = [2, 4, 3, 8]
// Output: [2, 4, 8]
// Explanation: The largest divisible subset is [2, 4, 8], where each element divides the next one. This subset is already the lexicographically greatest one.
// Constraint:
// 1 ≤ arr.size() ≤ 103
// 1  ≤ arr[i] ≤ 109

class Solution {
  largestSubset(arr) {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    const dp = new Array(n).fill(1);
    const chains = new Array(n);
    let best = [];

    const lexGreater = (a, b) => {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return a[i] > b[i];
        }
      }
      return false;
    };

    for (let i = 0; i < n; i++) {
      chains[i] = [arr[i]];

      for (let j = 0; j < i; j++) {
        if (arr[i] % arr[j] === 0) {
          const newLength = dp[j] + 1;
          if (newLength > dp[i]) {
            dp[i] = newLength;
            chains[i] = [...chains[j], arr[i]];
          } else if (newLength === dp[i]) {
            const candidate = [...chains[j], arr[i]];
            if (lexGreater(candidate, chains[i])) {
              chains[i] = candidate;
            }
          }
        }
      }

      if (dp[i] > best.length) {
        best = chains[i];
      } else if (dp[i] === best.length) {
        if (lexGreater(chains[i], best)) {
          best = chains[i];
        }
      }
    }

    return best;
  }
}
