// Wed, 28 Jan 2026,

// https://www.geeksforgeeks.org/problems/count-the-subset-with-sum-equal-to-k/1

// Count Subset With Target Sum II
// Difficulty: MediumAccuracy: 36.88%Submissions: 9K+Points: 4

// Given an array arr[] and an integer k, find the count of subsets whose sum is equals to k.

// Note: It is guaranteed that the no of valid subsets will fit within a 32-bit integer.

// Examples:

// Input: arr[] = [1, 3, 2], k = 3
// Output: 2
// Explanation: The two subsets whose sum is equals to k are [1, 2] and [3].

// Input: arr[] = [4, 2, 3, 1, 2], k = 4
// Output: 3
// Explanation: The three subsets whose sum is equals to k are [4], [2, 2] and [3, 1].

// Input: arr[] = [10, 20, 30], k = 25
// Output: 0
// Explanation: No subsets exits with sum equals to k.

// Constraints:
// 1 ≤ arr.size() ≤ 40
// -107 ≤ arr[i], k ≤ 107
// Expected Complexities
// Time Complexity: O(2 ^ (n/2))
// Auxiliary Space: O(n)

class Solution {
  countSubset(arr, k) {
    const n = arr.length;
    const mid = Math.floor(n / 2);

    // Split array into two halves
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Generate all subset sums for the left half
    const leftSums = this.generateSubsetSums(left);

    // Generate and count frequencies for the right half
    const rightSumFreq = new Map();
    this.generateAndCount(right, rightSumFreq);

    let count = 0;

    // For each sum in left half, find complements in right half
    for (const leftSum of leftSums) {
      const needed = k - leftSum;
      if (rightSumFreq.has(needed)) {
        count += rightSumFreq.get(needed);
      }
    }

    return count;
  }

  // Generate all subset sums for an array (no frequencies, just unique sums with multiplicity)
  generateSubsetSums(arr) {
    const sums = [];
    const n = arr.length;

    // Use iterative approach (more efficient than recursion for JS)
    // Generate all 2^n subsets
    for (let mask = 0; mask < 1 << n; mask++) {
      let sum = 0;
      for (let i = 0; i < n; i++) {
        if (mask & (1 << i)) {
          sum += arr[i];
        }
      }
      sums.push(sum);
    }

    return sums;
  }

  // Generate subset sums and store their frequencies
  generateAndCount(arr, freqMap) {
    const n = arr.length;

    // Generate all 2^n subsets
    for (let mask = 0; mask < 1 << n; mask++) {
      let sum = 0;
      for (let i = 0; i < n; i++) {
        if (mask & (1 << i)) {
          sum += arr[i];
        }
      }
      freqMap.set(sum, (freqMap.get(sum) || 0) + 1);
    }
  }
}
