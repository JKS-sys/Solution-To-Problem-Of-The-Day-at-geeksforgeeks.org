class Solution {
  /**
   * @param {number} n
   * @param {number} k
   * @returns {number}
   */
  countStrings(n, k) {
    const MOD = 1000000007;
    // If k is larger than the maximum possible adjacent 1 pairs, return 0
    if (k > n - 1) return 0;

    // dp[i][j][last] – strings of length i, j adjacent 1 pairs, ending with 'last' (0 or 1)
    const dp = Array.from({ length: n + 1 }, () =>
      Array.from({ length: k + 1 }, () => [0, 0]),
    );

    // Base case: length 1 strings
    dp[1][0][0] = 1;
    dp[1][0][1] = 1;

    for (let i = 1; i < n; i++) {
      for (let j = 0; j <= k; j++) {
        const cur0 = dp[i][j][0];
        const cur1 = dp[i][j][1];
        if (cur0 === 0 && cur1 === 0) continue;

        // Append '0'
        dp[i + 1][j][0] = (dp[i + 1][j][0] + cur0 + cur1) % MOD;

        // Append '1' after '0'
        dp[i + 1][j][1] = (dp[i + 1][j][1] + cur0) % MOD;

        // Append '1' after '1' -> increases the number of adjacent 1's by 1
        if (j + 1 <= k) {
          dp[i + 1][j + 1][1] = (dp[i + 1][j + 1][1] + cur1) % MOD;
        }
      }
    }

    return (dp[n][k][0] + dp[n][k][1]) % MOD;
  }
}
