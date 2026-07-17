class Solution {
  /**
   * @param {number} n
   * @param {number} sum
   * @return {number}
   */
  countWays(n, sum) {
    // The maximum possible sum of n digits is 9*n.
    if (sum > 9 * n) return -1;

    // dp[i][s] = number of i-digit numbers with digit sum s
    const dp = Array.from({ length: n + 1 }, () => new Array(sum + 1).fill(0));

    // Base case: 1-digit numbers (cannot start with 0)
    for (let d = 1; d <= 9; d++) {
      if (d <= sum) {
        dp[1][d] = 1;
      }
    }

    // Fill DP table for lengths 2 to n
    for (let i = 2; i <= n; i++) {
      for (let s = 1; s <= sum; s++) {
        for (let d = 0; d <= 9; d++) {
          if (s >= d) {
            dp[i][s] += dp[i - 1][s - d];
          }
        }
      }
    }

    const result = dp[n][sum];
    return result > 0 ? result : -1;
  }
}
