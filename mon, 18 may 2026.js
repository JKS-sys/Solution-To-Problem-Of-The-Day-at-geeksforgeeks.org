/**
 * @param {number} n
 * @return {number}
 */

class Solution {
  maxSum(n) {
    // dp[i] will store the maximum sum for value i
    let dp = new Array(n + 1).fill(0);

    // Base case: dp[0] = 0 (already set)
    for (let i = 1; i <= n; i++) {
      // The value if we don't break i at all
      let noBreak = i;
      // The value if we break i into three parts and take their optimal sums
      let breakSum =
        dp[Math.floor(i / 2)] + dp[Math.floor(i / 3)] + dp[Math.floor(i / 4)];
      // Take the maximum of the two
      dp[i] = Math.max(noBreak, breakSum);
    }

    return dp[n];
  }
}
