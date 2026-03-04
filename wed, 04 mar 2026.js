class Solution {
  maxSubarrayXOR(arr, k) {
    const n = arr.length;
    if (n === 0 || k === 0) return 0; // not expected by constraints

    // XOR of the first window
    let currentXor = 0;
    for (let i = 0; i < k; ++i) {
      currentXor ^= arr[i];
    }
    let maxXor = currentXor;

    // slide the window
    for (let i = k; i < n; ++i) {
      // remove arr[i-k] and add arr[i]
      currentXor ^= arr[i] ^ arr[i - k];
      if (currentXor > maxXor) {
        maxXor = currentXor;
      }
    }
    return maxXor;
  }
}
