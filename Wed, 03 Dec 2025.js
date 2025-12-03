// Wed, 03 Dec 2025,

// POTD was https://www.geeksforgeeks.org/problems/travelling-salesman-problem2732/1

// Travelling Salesman Problem
// Difficulty: Hard Accuracy: 46.35% Submissions: 31K+ Points: 8 Average Time: 25m
// Given a 2d matrix cost[][] of size n where cost[i][j] denotes the cost of moving from city i to city j. Your task is to complete a tour from city 0 (0-based index) to all other cities such that you visit each city exactly once and then at the end come back to city 0 at minimum cost.

// Examples:

// Input: cost[][] = [[0, 111],
//                 [112, 0]]
// Output: 223
// Explanation: We can visit 0->1->0 and cost = 111 + 112.
// Input: cost[][] = [[0, 1000, 5000],
//                 [5000, 0, 1000],
//                 [1000, 5000, 0]]
// Output: 3000
// Explanation: We can visit 0->1->2->0 and cost = 1000 + 1000 + 1000 = 3000
// Constraints:
// 1 ≤ cost.size() ≤ 15
// 0 ≤ cost[i][j] ≤ 10^4
// Expected Complexities
// Time Complexity: O(n^2 * 2^n)
// Auxiliary Space: O(n * 2^n)

class Solution {
  tsp(cost) {
    const n = cost.length;
    const INF = Number.MAX_SAFE_INTEGER;

    // dp[mask][i] = min cost
    const dp = Array(1 << n)
      .fill()
      .map(() => Array(n).fill(INF));

    dp[1][0] = 0;

    for (let mask = 1; mask < 1 << n; mask++) {
      for (let i = 0; i < n; i++) {
        if (!(mask & (1 << i))) continue;
        if (dp[mask][i] === INF) continue;

        for (let j = 0; j < n; j++) {
          if (mask & (1 << j)) continue;
          const newMask = mask | (1 << j);
          dp[newMask][j] = Math.min(dp[newMask][j], dp[mask][i] + cost[i][j]);
        }
      }
    }

    const allMask = (1 << n) - 1;
    let result = INF;

    for (let i = 0; i < n; i++) {
      if (dp[allMask][i] !== INF) {
        result = Math.min(result, dp[allMask][i] + cost[i][0]);
      }
    }

    return result;
  }
}
