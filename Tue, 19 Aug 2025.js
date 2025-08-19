// Tue, 19 Aug 2025,

// Farthest Smaller Right
// Difficulty: MediumAccuracy: 46.13%Submissions: 2K+Points: 4
// You are given an array arr[]. For each element at index i (0-based indexing), find the farthest index j to the right (i.e., j > i) such that arr[j] < arr[i]. If no such index exists for a given position, return -1 for that index. Return the resulting array of answers.

// Examples:

// Input: arr[] = [2, 5, 1, 3, 2]
// Output: [2, 4, -1, 4, -1]
// Explanation: arr[0] = 2: Farthest smaller element to the right is arr[2] = 1.
// arr[1] = 5: Farthest smaller element to the right is arr[4] = 2.
// arr[2] = 1: No smaller element to the right → -1.
// arr[3] = 3: Farthest smaller element to the right is arr[4] = 2.
// arr[4] = 2: No elements to the right → -1.
// Input: arr[] = [2, 3, 5, 4, 1]
// Output: [4, 4, 4, 4, -1]
// Explanation: arr[4] is the farthest smallest element to the right for arr[0], arr[1], arr[2] and arr[3].
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ 106
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

/**
@param {number[]}
@returns {number[]}
*/

class Solution {
  farMin(arr) {
    const n = arr.length;
    if (n === 0) return [];
    // Coordinate compression
    let unique = Array.from(new Set(arr));
    unique.sort((a, b) => a - b);
    let valToIdx = new Map();
    unique.forEach((val, idx) => valToIdx.set(val, idx + 1)); // 1-based

    const size = unique.length;
    let bit = new Array(size + 2).fill(-1); // 1-based
    let ans = new Array(n).fill(-1);
    // BIT helpers
    function update(idx, val) {
      while (idx <= size) {
        if (val > bit[idx]) {
          bit[idx] = val;
        }
        idx += idx & -idx;
      }
    }
    function query(idx) {
      let res = -1;
      while (idx > 0) {
        if (bit[idx] > res) res = bit[idx];
        idx -= idx & -idx;
      }
      return res;
    }

    for (let i = n - 1; i >= 0; i--) {
      let valIdx = valToIdx.get(arr[i]);
      if (valIdx > 1) {
        ans[i] = query(valIdx - 1);
      }
      update(valIdx, i);
    }
    return ans;
  }
}
