class Solution {
  maxDotProduct(a, b) {
    const n = a.length;
    const m = b.length;
    // dp[j] will store the maximum dot product using the first i elements of a
    // and the first j elements of b. Initialised with -Infinity for j > 0.
    const dp = new Array(m + 1).fill(-Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
      const aVal = a[i - 1];
      // We can only match up to min(i, m) elements of b when considering first i of a.
      const limit = Math.min(i, m);
      // Update backwards to use the values from the previous row (i-1).
      for (let j = limit; j >= 1; j--) {
        const matchVal = dp[j - 1] + aVal * b[j - 1];
        if (matchVal > dp[j]) {
          dp[j] = matchVal;
        }
      }
    }

    return dp[m];
  }
}
