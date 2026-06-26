class Solution {
  /**
   * Counts the number of subsequences of s1 that are equal to s2.
   * @param {string} s1
   * @param {string} s2
   * @return {number} Total count modulo 1e9+7
   */
  countWays(s1, s2) {
    const MOD = 1000000007;
    const n = s1.length;
    const m = s2.length;

    // dp[j] = number of ways to form s2[0..j-1] using processed prefix of s1
    const dp = new Array(m + 1).fill(0);
    dp[0] = 1; // empty subsequence matches empty target

    for (let i = 0; i < n; i++) {
      const char = s1[i];
      // Traverse backwards to use the previous row's values
      for (let j = m; j >= 1; j--) {
        if (char === s2[j - 1]) {
          dp[j] = (dp[j] + dp[j - 1]) % MOD;
        }
      }
    }

    return dp[m];
  }
}
