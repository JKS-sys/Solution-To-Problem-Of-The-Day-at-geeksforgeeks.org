// Wed, 13 Aug 2025,

// Tywin's War Strategy
// Difficulty: EasyAccuracy: 36.68%Submissions: 7K+Points: 2
// You are given an array arr[] of size n, where arr[i] represents the number of soldiers in the i-th troop. You are also given an integer k. A troop is considered "lucky" if its number of soldiers is a multiple of k. Find the minimum total number of soldiers to add across all troops so that at least ⌈n / 2⌉ troops become lucky.

// Examples:

// Input: arr = [5, 6, 3, 2, 1], k = 2
// Output: 1
// Explanation: By adding 1 soldier for the troop with 1 soldier, we get [5, 6, 3, 2, 2]. Now 3 out of 5 troops (6, 2, and 2) are multiples of 2 that satisfy the requirement.
// Input: arr = [3, 5, 6, 7, 9, 10], k = 4
// Output: 4
// Explanation: We need at least 3 lucky troops since ⌈6 / 2⌉ = 3. Currently, no troop is divisible by 4.
// Add 1 soldier for troop 3 → 4,
// Add 2 for troop 6 → 8,
// Add 1 for troop 7 → 8.
// New array: [4, 5, 8, 8, 9, 10] with 3 lucky troops (4, 8, 8).
// Total soldiers added = 4.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ k ≤ 105
// 1 ≤ arr[i] ≤ 105
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
  minSoldiers(arr, k) {
    const n = arr.length;
    const required = Math.ceil(n / 2);
    const costs = [];
    for (let i = 0; i < n; i++) {
      const remainder = arr[i] % k;
      if (remainder === 0) {
        costs.push(0);
      } else {
        costs.push(k - remainder);
      }
    }
    costs.sort((a, b) => a - b);
    let total = 0;
    for (let i = 0; i < required; i++) {
      total += costs[i];
    }
    return total;
  }
}
