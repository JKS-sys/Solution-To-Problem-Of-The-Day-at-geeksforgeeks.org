// Sun, 03 Aug 2025,

// ifference Array
// Difficulty: MediumAccuracy: 71.58%Submissions: 1K+Points: 4Average Time: 14m
// You are given a 2D integer matrix mat[][] of size n × m and a list of q operations opr[][]. Each operation is represented as an array [v, r1, c1, r2, c2], where:

// v is the value to be added
// (r1, c1) is the top-left cell of a submatrix
// (r2, c2) is the bottom-right cell of the submatrix (inclusive)
// For each of the q operations, add v to every element in the submatrix from (r1, c1) to (r2, c2). Return the final matrix after applying all operations.

// Examples:

// Input: mat[][] = [[1, 2, 3],  opr[][] = [[2, 0, 0, 1, 1], [-1, 1, 0, 2, 2]]
//                 [1, 1, 0],
//                 [4,-2, 2]]
// Output: [[3, 4, 3],
//         [2, 2, -1],
//         [3, -3, 1]]
// Explanation:

// Constraint:
// 1 ≤ n×m, q ≤ 105
// 0 ≤ r1 ≤ r2 ≤ n - 1
// 0 ≤ c1 ≤ c2 ≤ m - 1
// -104 ≤ mat[i][j], v ≤ 104
// Expected Complexities
// Time Complexity: O(n * m)
// Auxiliary Space: O(n * m)

/**
 * @param {number[][]} mat
 * @param {number[][]} opr
 * @returns {number[][]}
 */
class Solution {
  applyDiff2D(mat, opr) {
    const n = mat.length;
    const m = mat[0].length;
    const diff = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    for (const [v, r1, c1, r2, c2] of opr) {
      diff[r1][c1] += v;
      if (c2 + 1 <= m) diff[r1][c2 + 1] -= v;
      if (r2 + 1 <= n) diff[r2 + 1][c1] -= v;
      if (r2 + 1 <= n && c2 + 1 <= m) diff[r2 + 1][c2 + 1] += v;
    }

    for (let i = 0; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        diff[i][j] += diff[i][j - 1];
      }
    }

    for (let j = 0; j <= m; j++) {
      for (let i = 1; i <= n; i++) {
        diff[i][j] += diff[i - 1][j];
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        mat[i][j] += diff[i][j];
      }
    }

    return mat;
  }
}
