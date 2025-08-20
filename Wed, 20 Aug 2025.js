// Wed, 20 Aug 2025,

// Search in fully rotated sorted 2D matrix
// Difficulty: MediumAccuracy: 69.25%Submissions: 1K+Points: 4Average Time: 20m
// You are given a 2D matrix mat[][] of size n x m that was initially filled in the following manner:

// Each row is sorted in increasing order from left to right.
// The first element of every row is greater than the last element of the previous row.
// This implies that if the matrix is flattened row-wise, it forms a strictly sorted 1D array.
// Later, this sorted 1D array was rotated at some unknown pivot. The rotated array was then written back into the matrix row-wise to form the current matrix.

// Given such a matrix mat[][] and an integer x, determine whether x exists in the matrix.

// Examples:

// Input: x = 3,
// mat[][] = [[7, 8, 9, 10],
//           [11, 12, 13, 1],
//           [2, 3, 4, 5]]
// Output: true
// Explanation: 3 is located at the 3rd row and 2nd column.
// Input: x = 10,
// mat[][] = [[6, 7, 8],
//           [9, 1, 2],
//           [3, 4, 5]]
// Output: false
// Explanation: The value 10 does not exist in the matrix.
// Constraint:
// 1 ≤ n × m ≤ 105
// 1 ≤ mat[i][j], x ≤ 106

/**
 * @param {number[][]} mat
 * @param {number} x
 * @returns {boolean}
 */
class Solution {
  searchMatrix(mat, x) {
    const n = mat.length;
    const m = mat[0].length;
    let low = 0;
    let high = n * m - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const row = Math.floor(mid / m);
      const col = mid % m;
      const midVal = mat[row][col];

      if (midVal === x) {
        return true;
      }

      const lowVal = mat[Math.floor(low / m)][low % m];
      const highVal = mat[Math.floor(high / m)][high % m];

      if (lowVal <= midVal) {
        if (x >= lowVal && x < midVal) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else {
        if (x > midVal && x <= highVal) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
    }

    return false;
  }
}
