// Sun, 01 Jun 2025,

// Count pairs Sum in matrices
// Difficulty: EasyAccuracy: 45.66%Submissions: 47K+Points: 2
// Given two matrices mat1[][] and mat2[][] of size n x n, where the elements in each matrix are arranged in strictly ascending order. Specifically, each row is sorted from left to right, and the last element of a row is smaller than the first element of the next row.
// You're given a target value x, your task is to find and count all pairs {a, b} such that a is from mat1 and b is from mat2 where the sum of a + b is equal to x.

// Examples:

// Input: n = 3, x = 21,
// mat1[][] = [[1, 5, 6], [8, 10, 11], [15, 16, 18]],
// mat2[][] = [[2, 4, 7], [9, 10, 12], [13, 16, 20]]
// OUTPUT: 4
// Explanation: The pairs whose sum is found to be 21 are (1, 20), (5, 16), (8, 13) and (11, 10).
// Input: n = 2, x = 10,
// mat1[][] = [[1, 2], [3, 4]]
// mat2[][] = [[4, 5], [6, 7]]
// Output: 2
// Explanation: The pairs whose sum found to be 10 are (4, 6) and (3, 7).
// Constraints:
// 1 ≤ n ≤ 100
// 1 ≤ x ≤ 105
// 1 ≤ mat1[i][j] , mat2[i][j] ≤ 105

/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @param {number} x
 * @returns {number}
 */

class Solution {
  countPairs(mat1, mat2, x) {
    const n = mat1.length;
    const total = n * n;
    let left = 0;
    let right = total - 1;
    let count = 0;

    while (left < total && right >= 0) {
      const i1 = Math.floor(left / n);
      const j1 = left % n;
      const a = mat1[i1][j1];

      const i2 = Math.floor(right / n);
      const j2 = right % n;
      const b = mat2[i2][j2];

      const sum = a + b;

      if (sum === x) {
        let count1 = 0;
        const temp1 = a;
        while (left < total) {
          const i = Math.floor(left / n);
          const j = left % n;
          if (mat1[i][j] === temp1) {
            count1++;
            left++;
          } else {
            break;
          }
        }

        let count2 = 0;
        const temp2 = b;
        while (right >= 0) {
          const i = Math.floor(right / n);
          const j = right % n;
          if (mat2[i][j] === temp2) {
            count2++;
            right--;
          } else {
            break;
          }
        }

        count += count1 * count2;
      } else if (sum < x) {
        left++;
      } else {
        right--;
      }
    }

    return count;
  }
}
