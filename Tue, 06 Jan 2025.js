// Tue, 06 Jan 2025,

// POTD question was Max XOR Subarray of size K

// Difficulty: Medium
// Accuracy: 70.74%
// Submissions: 2K+
// Points: 4
// Average Time: 15m

// Given an array of integers arr[] and a number k. Return the maximum XOR of a subarray of size k.

// Note: A subarray is a contiguous part of any given array.

// Examples:

// Input: arr[] = [2, 5, 8, 1, 1, 3], k = 3
// Output: 15
// Explanation: arr[0] ^ arr[1] ^ arr[2] = 15, which is maximum.

// Input: arr[] = [1, 2, 4, 5, 6], k = 2
// Output: 6
// Explanation: arr[1] ^ arr[2] = 6, which is maximum.

// Constraints:
// 1 ≤ arr.size() ≤ 10^6
// 0 ≤ arr[i] ≤ 10^6
// 1 ≤ k ≤ arr.size()

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  maxSubarrayXOR(arr, k) {
    let n = arr.length;

    // Calculate XOR of first window of size k

    let currentXOR = 0;
    for (let i = 0; i < k; i++) {
      currentXOR ^= arr[i];
    }

    let maxXOR = currentXOR;

    // Slide the window

    for (let i = 0; i < n - k; i++) {
      // Remove arr[i] and add arr[i+k]

      currentXOR ^= arr[i];
      currentXOR ^= arr[i + k];
      maxXOR = Math.max(maxXOR, currentXOR);
    }

    return maxXOR;
  }
}
