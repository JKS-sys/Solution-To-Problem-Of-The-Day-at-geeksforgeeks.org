class Solution {
  noOfWays(m, n, x) {
    // Edge cases: sum out of possible range
    if (x < n || x > n * m) return 0;

    // dpPrev[j] = ways with previous number of dice to get sum j
    let dpPrev = new Array(x + 1).fill(0);
    dpPrev[0] = 1; // 0 dice, sum 0

    for (let i = 1; i <= n; i++) {
      let dpCurr = new Array(x + 1).fill(0);
      // Minimum sum with i dice is i, maximum is i*m, but we only care up to x
      for (let j = i; j <= Math.min(x, i * m); j++) {
        for (let k = 1; k <= m; k++) {
          if (j - k >= 0) {
            dpCurr[j] += dpPrev[j - k];
          }
        }
      }
      dpPrev = dpCurr;
    }

    return dpPrev[x];
  }
}
