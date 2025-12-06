// Sat, 06 Dec 2025,

// Optimal Strategy For A Game
// Difficulty: Medium Accuracy: 49.03% Submissions: 93K+ Points: 4
// You are given an integer array arr[] of size n. The array elements represent n coins of values v1, v2, ....vn.
// You play against an opponent in an alternating way. In each turn, a player selects either the first or last coin from the row, removes it from the row permanently, and receives the coin's value.
// You need to determine the maximum possible amount of money you can win if you go first.
// Note: Both the players are playing optimally.

// Examples:

// Input: arr[] = [5, 3, 7, 10]
// Output: 15
// Explanation: The user collects the maximum value as 15(10 + 5). It is guaranteed that we cannot get more than 15 by any possible moves.
// Input: arr[] = [8, 15, 3, 7]
// Output: 22
// Explanation: The user collects the maximum value as 22(7 + 15). It is guaranteed that we cannot get more than 22 by any possible moves.
// Constraints:
// 2 <= n <= 10^3
// 1 <= arr[i] <= 10^6
// Expected Complexities
// Time Complexity: O(n^2)
// Auxiliary Space: O(n^2)

class Solution {
  maximumAmount(arr) {
    const n = arr.length;

    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
      dp[i] = new Array(n).fill(0);
    }

    for (let gap = 0; gap < n; gap++) {
      for (let i = 0, j = gap; j < n; i++, j++) {
        if (gap === 0) {
          dp[i][j] = arr[i];
        } else if (gap === 1) {
          dp[i][j] = Math.max(arr[i], arr[j]);
        } else {
          const pickLeft = arr[i] + Math.min(dp[i + 2][j], dp[i + 1][j - 1]);

          const pickRight = arr[j] + Math.min(dp[i + 1][j - 1], dp[i][j - 2]);

          dp[i][j] = Math.max(pickLeft, pickRight);
        }
      }
    }

    return dp[0][n - 1];
  }
}
