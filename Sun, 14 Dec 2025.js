// Sun, 14 Dec 2025,

// POTD question was https://www.geeksforgeeks.org/problems/2d-submatrix-sum-queries/1

// 2D Submatrix Sum Queries
// Difficulty: Medium Accuracy: 74.1% Submissions: 3K+ Points: 4 Average Time: 20m
// Given a 2D integer matrix mat[][] and a list of queries queries[][], your task is to answer a series of submatrix sum queries.

// Each query is represented as a list [r1, c1, r2, c2], where:

// (r1, c1) is the top-left coordinate of the submatrix
// (r2, c2) is the bottom-right coordinate of the submatrix (both inclusive)
// Your task is to return a list of integers, the sum of elements within the specified submatrix for each query.

// Examples:

// Input: mat[][] = [[1, 2, 3], queries[][] = [[0, 0, 1, 1], [1, 0, 2, 2]]
//                 [1, 1, 0],
//                 [4, 2, 2]]
// Output: [5, 10]
// Explanation:
// Query 1 selects submatrix [[1, 2], [1, 1]] → sum = 5.
// Query 2 selects submatrix [[1, 1, 0], [4, 2, 2]] → sum = 10.
// Input: mat[][] = [[1, 1, 1], queries[][] = [[1, 1, 2, 2], [0, 0, 2, 2], [0, 2, 2, 2]]
//                 [1, 1, 1],
//                 [1, 1, 1]]
// Output: [4, 9, 3]
// Explanation:
// Query 1 selects submatrix [[1, 1], [1, 1]] → sum = 4.
// Query 2 selects submatrix [[1, 1, 1], [1, 1, 1], [1, 1, 1]] → sum = 9.
// Query 3 selects submatrix [[1], [1], [1]] → sum = 3.
// Constraints:
// 1 ≤ n × m, q ≤ 10^5
// 0 ≤ mat[i][j] ≤ 10^4
// 0 ≤ r1 ≤ r2 ≤ n - 1
// 0 ≤ c1 ≤ c2 ≤ m - 1
// Expected Complexities
// Time Complexity: O(n × m + q)
// Auxiliary Space: O(1)

class Solution {
  prefixSum2D(mat, queries) {
    const n = mat.length;
    const m = mat[0].length;

    for (let i = 0; i < n; i++) {
      for (let j = 1; j < m; j++) {
        mat[i][j] += mat[i][j - 1];
      }
    }

    for (let j = 0; j < m; j++) {
      for (let i = 1; i < n; i++) {
        mat[i][j] += mat[i - 1][j];
      }
    }

    const result = [];
    for (const query of queries) {
      const [r1, c1, r2, c2] = query;

      const D = mat[r2][c2];
      const B = r1 > 0 ? mat[r1 - 1][c2] : 0;
      const C = c1 > 0 ? mat[r2][c1 - 1] : 0;
      const A = r1 > 0 && c1 > 0 ? mat[r1 - 1][c1 - 1] : 0;

      result.push(D - B - C + A);
    }

    return result;
  }
}
