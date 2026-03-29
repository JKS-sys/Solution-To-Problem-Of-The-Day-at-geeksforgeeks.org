class Solution {
  /**
   * @param {number} diff
   * @param {number[]} arr
   * @returns {number}
   */
  countPartitions(arr, diff) {
    const total = arr.reduce((sum, num) => sum + num, 0);
    const target = (total + diff) / 2;

    // If target is not an integer or negative, no solution.
    if (target !== Math.floor(target) || target < 0) {
      return 0;
    }

    // dp[s] = number of subsets that sum to s
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (const num of arr) {
      // Iterate backwards to avoid using the same element multiple times
      for (let s = target; s >= num; s--) {
        dp[s] += dp[s - num];
      }
    }

    return dp[target];
  }
}
