/**
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */
class Solution {
  countWays(n, m) {
    const MOD = 1000000007;
    // dp[i] = number of ways to tile an i × m floor
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1; // empty floor

    for (let i = 1; i <= n; i++) {
      // Place a horizontal tile in the top row
      dp[i] = dp[i - 1];
      // Or place m vertical tiles covering an m × m block
      if (i >= m) {
        dp[i] = (dp[i] + dp[i - m]) % MOD;
      }
    }

    return dp[n];
  }
}
