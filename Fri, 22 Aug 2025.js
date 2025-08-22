// Fri, 22 Aug 2025,

// Median in a row-wise sorted Matrix
// Difficulty: HardAccuracy: 55.05%Submissions: 150K+Points: 8
// Given a row-wise sorted matrix mat[][] of size n*m, where the number of rows and columns is always odd. Return the median of the matrix.

// Examples:

// Input: mat[][] = [[1, 3, 5],
//                 [2, 6, 9],
//                 [3, 6, 9]]
// Output: 5
// Explanation: Sorting matrix elements gives us [1, 2, 3, 3, 5, 6, 6, 9, 9]. Hence, 5 is median.
// Input: mat[][] = [[2, 4, 9],
//                 [3, 6, 7],
//                 [4, 7, 10]]
// Output: 6
// Explanation: Sorting matrix elements gives us [2, 3, 4, 4, 6, 7, 7, 9, 10]. Hence, 6 is median.
// Input: mat = [[3], [4], [8]]
// Output: 4
// Explanation: Sorting matrix elements gives us [3, 4, 8]. Hence, 4 is median.
// Constraints:
// 1 ≤ n, m ≤ 400
// 1 ≤ mat[i][j] ≤ 2000
// Expected Complexities
// Time Complexity: O(n log m * log(maxVal – minVal))
// Auxiliary Space: O(1)

/**
 * @param {number[][]} mat
 * @returns {number}
 */

class Solution {
  median(mat) {
    const n = mat.length;
    const m = mat[0].length;
    const required = Math.floor((n * m + 1) / 2);

    let low = Number.MAX_SAFE_INTEGER;
    let high = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
      low = Math.min(low, mat[i][0]);
      high = Math.max(high, mat[i][m - 1]);
    }

    const countInRow = (row, target) => {
      let left = 0,
        right = row.length - 1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (row[mid] <= target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      return left;
    };

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      let count = 0;
      for (let i = 0; i < n; i++) {
        count += countInRow(mat[i], mid);
      }
      if (count < required) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return low;
  }
}
