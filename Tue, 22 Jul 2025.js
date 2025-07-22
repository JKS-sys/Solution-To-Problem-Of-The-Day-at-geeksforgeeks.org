// Tue, 22 Jul 2025,

// Smallest Positive Missing
// Difficulty: MediumAccuracy: 25.13%Submissions: 432K+Points: 4
// You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.

// Note: Positive number starts from 1. The array can have negative integers too.

// Examples:

// Input: arr[] = [2, -3, 4, 1, 1, 7]
// Output: 3
// Explanation: Smallest positive missing number is 3.
// Input: arr[] = [5, 3, 2, 5, 1]
// Output: 4
// Explanation: Smallest positive missing number is 4.
// Input: arr[] = [-8, 0, -1, -4, -3]
// Output: 1
// Explanation: Smallest positive missing number is 1.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// -106 ≤ arr[i] ≤ 106
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
  missingNumber(arr) {
    const n = arr.length;
    let i = 0;
    while (i < n) {
      let num = arr[i];
      if (num >= 1 && num <= n) {
        let targetIndex = num - 1;
        if (arr[targetIndex] !== num) {
          [arr[i], arr[targetIndex]] = [arr[targetIndex], arr[i]];
          continue;
        }
      }
      i++;
    }
    for (let j = 0; j < n; j++) {
      if (arr[j] !== j + 1) {
        return j + 1;
      }
    }
    return n + 1;
  }
}
