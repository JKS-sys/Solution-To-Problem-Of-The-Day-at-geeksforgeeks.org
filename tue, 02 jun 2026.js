class Solution {
  sumDiffPairs(arr, k) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    const n = arr.length;

    // If there are less than 2 elements, no pair can be formed
    if (n < 2) return 0;

    // dp[i] stores the maximum sum of valid pairs from arr[0] to arr[i]
    const dp = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
      // If the current and previous element can form a valid pair
      if (arr[i] - arr[i - 1] < k) {
        const pairSum = arr[i] + arr[i - 1];
        // Option 1: skip current element
        // Option 2: pair current with previous and add dp[i-2]
        dp[i] = Math.max(dp[i - 1], (i >= 2 ? dp[i - 2] : 0) + pairSum);
      } else {
        // Cannot pair current with previous, carry forward the best sum
        dp[i] = dp[i - 1];
      }
    }

    return dp[n - 1];
  }
}
