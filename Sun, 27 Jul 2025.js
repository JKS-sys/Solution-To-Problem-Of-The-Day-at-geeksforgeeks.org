// Sun, 27 Jul 2025,

// Set Matrix Zeros
// Difficulty: MediumAccuracy: 52.54%Submissions: 43K+Points: 4
// You are given a 2D matrix mat[][] of size n x m. The task is to modify the matrix such that if mat[i][j] is 0, all the elements in the i-th row and j-th column are set to 0.

// Examples:

// Input:

// Output:

// Explanation: mat[1][1] = 0, so all elements in row 1 and column 1 are updated to zeroes.
// Input:

// Output:

// Explanation: mat[0][0] and mat[0][3] are 0s, so all elements in row 0, column 0 and column 3 are updated to zeroes.
// Constraints:
// 1 ≤ n, m ≤ 500
// - 231 ≤ mat[i][j] ≤ 231 - 1
// Expected Complexities
// Time Complexity: O(n * m)
// Auxiliary Space: O(1)

class Solution {
  setMatrixZeroes(mat) {
    const n = mat.length;
    if (n === 0) return;
    const m = mat[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    for (let j = 0; j < m; j++) {
      if (mat[0][j] === 0) {
        firstRowZero = true;
        break;
      }
    }

    for (let i = 0; i < n; i++) {
      if (mat[i][0] === 0) {
        firstColZero = true;
        break;
      }
    }

    for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
        if (mat[i][j] === 0) {
          mat[i][0] = 0;
          mat[0][j] = 0;
        }
      }
    }

    for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
        if (mat[i][0] === 0 || mat[0][j] === 0) {
          mat[i][j] = 0;
        }
      }
    }

    if (firstRowZero) {
      for (let j = 0; j < m; j++) {
        mat[0][j] = 0;
      }
    }

    if (firstColZero) {
      for (let i = 0; i < n; i++) {
        mat[i][0] = 0;
      }
    }
  }
}
