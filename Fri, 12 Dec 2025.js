// Fri, 12 Dec 2025,

// Transpose of Matrix
// Difficulty: Easy Accuracy: 66.5% Submissions: 121K+ Points: 2 Average Time: 20m
// You are given a square matrix of size n x n. Your task is to find the transpose of the given matrix.
// The transpose of a matrix is obtained by converting all the rows to columns and all the columns to rows.

// Examples :

// Input: mat[][] = [[1, 1, 1, 1],
//                 [2, 2, 2, 2],
//                 [3, 3, 3, 3],
//                 [4, 4, 4, 4]]
// Output: [[1, 2, 3, 4],
//        [1, 2, 3, 4],
//        [1, 2, 3, 4],
//        [1, 2, 3, 4]]
// Explanation: Converting rows into columns and columns into rows.
// Input: mat[][] =  [[1, 2],
//                  [9, -2]]
// Output: [[1, 9],
//         [2, -2]]
// Explanation: Converting rows into columns and columns into rows.
// Constraints:
// 1 ≤ n ≤ 10^3
// -10^9 ≤ mat[i][j] ≤10^9
// Expected Complexities
// Time Complexity: O(n^2)
// Auxiliary Space: O(1)

class Solution {
  transpose(mat) {
    const n = mat.length;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
      }
    }

    return mat;
  }
}
