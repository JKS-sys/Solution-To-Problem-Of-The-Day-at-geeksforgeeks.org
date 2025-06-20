// Fri, 20 Jun 2025,

// Group Balls by Sequence
// Difficulty: MediumAccuracy: 39.45%Submissions: 2K+Points: 4
// You are given an array arr[] of positive integers, where each element arr[i] represents the number written on the i-th ball, and a positive integer k.
// Your task is to determine whether it is possible to rearrange all the balls into groups such that:

// Each group contains exactly k balls.
// The numbers in each group are consecutive integers
// Examples:

// Input: arr[] = [10, 1, 2, 11], k = 2
// Output: true
// Explanation: The hand can be rearranged as [1, 2], [10, 11]. There are two groups of size 2. Each group has 2 consecutive cards.
// Input: arr[] = [7, 8, 9, 10, 11], k = 2
// Output: false
// Explanation: The hand cannot be rearranged into groups of 2, since there are 5 cards, and 5 cards cannot be divided into groups of 2.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 0 ≤ arr[i] ≤ 105
// 1 ≤ k ≤ 103

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
  validgroup(arr, k) {
    const n = arr.length;
    if (n % k !== 0) {
      return 0;
    }

    const freq = new Map();
    for (const num of arr) {
      freq.set(num, (freq.get(num) || 0) + 1);
    }

    const keys = Array.from(freq.keys()).sort((a, b) => a - b);

    for (const x of keys) {
      const count = freq.get(x);
      if (count === 0) continue;

      for (let i = 0; i < k; i++) {
        const next = x + i;
        if (!freq.has(next) || freq.get(next) < count) {
          return 0;
        }
        freq.set(next, freq.get(next) - count);
      }
    }

    return 1;
  }
}
