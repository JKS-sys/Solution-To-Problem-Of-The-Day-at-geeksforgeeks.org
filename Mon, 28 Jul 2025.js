// Mon, 28 Jul 2025,

// Make Matrix Beautiful
// Difficulty: MediumAccuracy: 64.75%Submissions: 57K+Points: 4Average Time: 20m
// A beautiful matrix is defined as a square matrix in which the sum of elements in every row and every column is equal. Given a square matrix mat[][], your task is to determine the minimum number of operations required to make the matrix beautiful.
// In one operation, you are allowed to increment the value of any single cell by 1.

// Examples:

// Input: mat[][] = [[1, 2],
//                 [3, 4]]
// Output: 4
// Explanation:
// Increment value of cell(0, 0) by 3,
// Increment value of cell(0, 1) by 1.
// Matrix after the operations: [[4, 3],
//                             [3, 4]]
// Here, sum of each row and column is 7.
// Hence total 4 operation are required.
// Input: mat[][] = [[1, 2, 3],
//                 [4, 2, 3],
//                 [3, 2, 1]]
// Output: 6
// Explanation:
// Increment value of cell(0, 0) by 1,
// Increment value of cell(0, 1) by 2,
// Increment value of cell(2, 1) by 1,
// Increment value of cell(2, 2) by 2.
// Matrix after the operations: [[2, 4, 3],
//                             [4, 2, 3],
//                             [3, 3, 3]]
// Here, sum of each row and column is 9.
// Hence total 6 operation are required.
// Constraints:
// 1 ≤ mat.size() ≤ 900
// 0 ≤ mat[i][j] ≤ 106
// Expected Complexities
// Time Complexity: O(n^2)
// Auxiliary Space: O(1)

/**
 * @param {number[][]} mat
 * @returns {number}
 */
class Solution {
  balanceSums(mat) {
    const n = mat.length;
    let totalSum = 0;
    let maxRow = 0;
    let colSum = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      let rowSum = 0;
      for (let j = 0; j < n; j++) {
        totalSum += mat[i][j];
        rowSum += mat[i][j];
        colSum[j] += mat[i][j];
      }
      if (rowSum > maxRow) {
        maxRow = rowSum;
      }
    }

    let maxCol = 0;
    for (let j = 0; j < n; j++) {
      if (colSum[j] > maxCol) {
        maxCol = colSum[j];
      }
    }

    let S0 = Math.max(maxRow, maxCol);
    return n * S0 - totalSum;
  }
}
