// Sat, 08 Nov 2025,

// Number of paths in a matrix with k coins
// Difficulty: Medium Accuracy: 16.96% Submissions: 58K+ Points: 4
// You are given a matrix mat[][] of size n x m, where each of its cells contains some coins. Count the number of ways to collect exactly k coins while moving from the top left cell of the matrix to the bottom right cell.
// From a cell (i, j), you can only move to cell (i+1, j) or (i, j+1).

// Note: It is guaranteed that the answer will not exceed 32-bit integer limits.

// Examples:

// Input: k = 12, mat[] = [[1, 2, 3],
//                       [4, 6, 5],
//                       [3, 2, 1]]
// Output: 2
// Explanation: There are 2 possible paths with exactly 12 coins, (1 + 2 + 6 + 2 + 1) and (1 + 2 + 3 + 5 + 1).
// Input: k = 16, mat[] = [[1, 2, 3],
//                       [4, 6, 5],
//                       [9, 8, 7]]
// Output: 0
// Explanation: There are no possible paths that lead to sum = 16.
// Constraints:
// 1 ≤ k ≤ 100
// 1 ≤ n, m ≤ 100
// 0 ≤ mat[i][j] ≤ 200
// Expected Complexities
// Time Complexity: O(n * m * k)
// Auxiliary Space: O(n * m * k)

class Solution {
  numberOfPath(mat, k) {
    const n = mat.length;
    const m = mat[0].length;

    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
      dp[i] = new Array(m);
      for (let j = 0; j < m; j++) {
        dp[i][j] = new Array(k + 1).fill(0);
      }
    }

    if (mat[0][0] <= k) {
      dp[0][0][mat[0][0]] = 1;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const currentCoin = mat[i][j];

        for (let sum = 0; sum <= k; sum++) {
          if (dp[i][j][sum] > 0) {
            if (j + 1 < m) {
              const newSum = sum + mat[i][j + 1];
              if (newSum <= k) {
                dp[i][j + 1][newSum] += dp[i][j][sum];
              }
            }

            if (i + 1 < n) {
              const newSum = sum + mat[i + 1][j];
              if (newSum <= k) {
                dp[i + 1][j][newSum] += dp[i][j][sum];
              }
            }
          }
        }
      }
    }

    return dp[n - 1][m - 1][k];
  }
}
