// Sat, 15 Nov 2025,

// Minimum Cost to Cut a Stick of length N
// Difficulty: Hard Accuracy: 84.01% Submissions: 552+ Points: 8

// You are given a wooden stick of length n, labeled from 0 to n. You are also given an integer array cuts[], where each element cuts[i] represents a position along the stick at which you can make a cut.
// Each cut costs an amount equal to the length of the stick being cut at that moment. After performing a cut, the stick is divided into two smaller sticks.
// You can perform the cuts in any order. Your task is to determine the minimum total cost required to perform all the cuts.

// Example:

// Input: n = 10, cuts[] = [2, 4, 7]
// Output: 20
// Explanation:

// If we cut the stick in the order [4, 2, 7], the cost will be 10 + 4 + 6 = 20, which is the minimum total cost.
// Input: n = 8, cuts[] = [1, 6, 3, 5]
// Output: 19
// Explanation: If we cut the stick in the order [3, 6, 1, 5], the cost will be 8 + 5 + 3 + 3 = 19, which is the minimum total cost.
// Constraints:
// 2 ≤ n ≤ 10^6
// 1 ≤ cuts[i] ≤ n - 1
// 1 ≤ cuts.size() ≤ 100
// Expected Complexities
// Time Complexity: O(m^3), m = cuts.size()
// Auxiliary Space: O(m^2)

class Solution {
  minCutCost(n, cuts) {
    cuts.push(0);
    cuts.push(n);

    cuts.sort((a, b) => a - b);

    const m = cuts.length;

    const dp = new Array(m);
    for (let i = 0; i < m; i++) {
      dp[i] = new Array(m).fill(0);
    }

    for (let l = 2; l < m; l++) {
      for (let i = 0; i < m - l; i++) {
        const j = i + l;
        dp[i][j] = Number.MAX_SAFE_INTEGER;

        for (let k = i + 1; k < j; k++) {
          const cost = cuts[j] - cuts[i] + dp[i][k] + dp[k][j];
          dp[i][j] = Math.min(dp[i][j], cost);
        }
      }
    }

    return dp[0][m - 1];
  }
}
