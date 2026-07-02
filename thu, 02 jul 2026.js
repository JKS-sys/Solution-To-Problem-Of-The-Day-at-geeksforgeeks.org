class Solution {
  divisibleByK(arr, k) {
    // If k is 1, any non-empty subset sum is divisible by 1
    if (k === 1) return true;

    // dp[r] indicates if there is a subset with sum % k === r
    let dp = new Array(k).fill(false);

    for (let num of arr) {
      let mod = num % k;
      // A single element subset that is directly divisible by k
      if (mod === 0) return true;

      // Create the next state based on the previous state
      let new_dp = new Array(k).fill(false);

      // Copy existing achievable remainders
      for (let r = 0; r < k; r++) {
        if (dp[r]) new_dp[r] = true;
      }

      // Subset consisting of only the current number
      new_dp[mod] = true;

      // Add current number to all previously achievable subsets
      for (let r = 0; r < k; r++) {
        if (dp[r]) {
          new_dp[(r + mod) % k] = true;
        }
      }

      dp = new_dp;

      // Early exit if we found a valid subset
      if (dp[0]) return true;
    }

    return false;
  }
}
