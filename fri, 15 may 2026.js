class Solution {
  optimalKeys(n) {
    // Base cases: For 1 to 6 keystrokes, simply pressing 'A' each time is optimal.
    if (n <= 6) return n;

    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= 6; i++) {
      dp[i] = i;
    }

    // For i >= 7, the optimal strategy is to use Ctrl+A, Ctrl+C followed by multiple Ctrl+V's.
    // It has been proven that we only need to consider:
    // - Pressing Ctrl+V twice (multiply by 3) using 4 more keystrokes (i-4)
    // - Pressing Ctrl+V three times (multiply by 4) using 5 more keystrokes (i-5)
    for (let i = 7; i <= n; i++) {
      dp[i] = Math.max(dp[i - 4] * 3, dp[i - 5] * 4);
    }

    return dp[n];
  }
}
