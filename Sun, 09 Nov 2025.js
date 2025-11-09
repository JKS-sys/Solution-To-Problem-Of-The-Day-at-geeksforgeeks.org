// Sun, 09 Nov 2025,

// Chocolate Pickup II
// Difficulty: Hard Accuracy: 69.11% Submissions: 554 Points: 8
// You are given a square matrix mat[][] of size n × n, where each cell represents either a blocked cell or a cell containing some chocolates. If mat[i][j] equals -1, then the cell is blocked and cannot be visited. Otherwise, mat[i][j] represents the number of chocolates present in that cell.
// The task is to determine the maximum number of chocolates a robot can collected by starting from the top-left cell (0, 0), moving to the bottom-right cell (n-1, n-1), and then returning back to (0, 0).
// While moving from (0, 0) to (n-1, n-1), the robot can move only in the right (i, j+1) or downward (i+1, j) directions. On the return journey from (n-1, n-1) to (0, 0), it can move only in the left (i, j-1) or upward (i-1, j) directions.

// Note: After collecting chocolates from a cell (i, j), that cell becomes empty, meaning mat[i][j] becomes 0 for next visit. If there is no valid path from (0, 0) to (n-1, n-1) or for the return trip, the result should be 0.

// Example:

// Input: mat[][] = [[0, 1, -1],
//                 [1, 1, -1],
//                 [1, 1, 2]]
// Output: 7
// Explanation:

// One of the optimal paths is to move from (0,0) -> (1,0) -> (2,0) -> (2,1) -> (2,2) while going forward, and then from (2,2) -> (2,1) -> (1,1) -> (0,1) -> (0,0) while coming back. The total number of chocolates collected is 7.
// Input: mat[][] = [[1, 1, 0],
//                [1, 1, 1],
//                [0, 1, 1]]
// Output: 7
// Explanation:

// One of the optimal paths is to move from (0,0) -> (1,0) -> (2,0) -> (2,1) -> (2,2) while going forward, and then from (2,2) -> (1,2) -> (1,1) -> (0,1) -> (0,0) while coming back. The total number of chocolates collected is 7.
// Input: mat[][] = [[1, 0, -1],
//                 [2, -1, -1],
//                 [1, -1, 3]]
// Output: 0
// Explanation:

// It is impossible to reach the bottom-right cell (2,2) from (0,0) because every route is blocked. Since the destination cannot be reached, the total chocolates collected is 0.
// Constraint:
// 1 ≤ n ≤ 50
// -1 ≤ mat[i][j] ≤ 100
// Expected Complexities
// Time Complexity: O(n^3)
// Auxiliary Space: O(n^3)

class Solution {
  chocolatePickup(mat) {
    const n = mat.length;

    if (mat[0][0] === -1 || mat[n - 1][n - 1] === -1) {
      return 0;
    }

    const dp = new Array(2 * n);
    for (let steps = 0; steps < 2 * n; steps++) {
      dp[steps] = new Array(n);
      for (let i = 0; i < n; i++) {
        dp[steps][i] = new Array(n).fill(-Infinity);
      }
    }

    dp[0][0][0] = mat[0][0];

    for (let steps = 1; steps <= 2 * (n - 1); steps++) {
      for (let r1 = 0; r1 < n; r1++) {
        const c1 = steps - r1;
        if (c1 < 0 || c1 >= n || mat[r1][c1] === -1) continue;

        for (let r2 = 0; r2 < n; r2++) {
          const c2 = steps - r2;
          if (c2 < 0 || c2 >= n || mat[r2][c2] === -1) continue;

          let chocolates = mat[r1][c1];
          if (r1 !== r2 || c1 !== c2) {
            chocolates += mat[r2][c2];
          }

          let maxPrev = -Infinity;

          if (r1 > 0 && r2 > 0)
            maxPrev = Math.max(maxPrev, dp[steps - 1][r1 - 1][r2 - 1]);

          if (r1 > 0 && c2 > 0)
            maxPrev = Math.max(maxPrev, dp[steps - 1][r1 - 1][r2]);

          if (c1 > 0 && r2 > 0)
            maxPrev = Math.max(maxPrev, dp[steps - 1][r1][r2 - 1]);

          if (c1 > 0 && c2 > 0)
            maxPrev = Math.max(maxPrev, dp[steps - 1][r1][r2]);

          if (maxPrev !== -Infinity) {
            dp[steps][r1][r2] = maxPrev + chocolates;
          }
        }
      }
    }

    const result = dp[2 * (n - 1)][n - 1][n - 1];
    return result === -Infinity ? 0 : Math.max(0, result);
  }
}
