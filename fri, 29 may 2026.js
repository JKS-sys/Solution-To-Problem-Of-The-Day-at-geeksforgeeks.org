class Solution {
  validGroups(s) {
    const n = s.length;
    const maxSum = 9 * n;
    // prefix[i] = sum of first i digits
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      prefix[i + 1] = prefix[i] + (s.charCodeAt(i) - 48);
    }
    // dp[i][sum] = number of ways to split prefix of length i ending with a group of sum 'sum'
    const dp = Array.from({ length: n + 1 }, () =>
      new Array(maxSum + 1).fill(0),
    );
    dp[0][0] = 1;
    for (let i = 0; i < n; i++) {
      for (let lastSum = 0; lastSum <= maxSum; lastSum++) {
        const ways = dp[i][lastSum];
        if (ways === 0) continue;
        for (let j = i + 1; j <= n; j++) {
          const sumSub = prefix[j] - prefix[i];
          if (sumSub >= lastSum) {
            dp[j][sumSub] += ways;
          }
        }
      }
    }
    let ans = 0;
    for (let sum = 0; sum <= maxSum; sum++) {
      ans += dp[n][sum];
    }
    return ans;
  }
}
