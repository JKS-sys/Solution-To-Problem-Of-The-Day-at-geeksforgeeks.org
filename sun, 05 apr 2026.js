class Solution {
  /**
   * @param {number[]} arr
   * @param {number} target
   * @returns {number}
   */
  totalWays(arr, target) {
    const totalSum = arr.reduce((a, b) => a + b, 0);

    // If target is out of possible range or (target+totalSum) is odd, no solution
    if (
      target > totalSum ||
      target < -totalSum ||
      (target + totalSum) % 2 !== 0
    ) {
      return 0;
    }

    const subsetSum = (target + totalSum) / 2;
    // DP array: dp[s] = number of ways to achieve sum s
    const dp = new Array(subsetSum + 1).fill(0);
    dp[0] = 1; // one way to achieve sum 0: choose nothing

    for (const num of arr) {
      // iterate backwards to avoid reusing the same element multiple times
      for (let s = subsetSum; s >= num; s--) {
        dp[s] += dp[s - num];
      }
    }

    return dp[subsetSum];
  }
}
