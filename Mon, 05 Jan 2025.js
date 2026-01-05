// Mon, 05 Jan 2025,

// POTD question was https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1

// Max Sum Subarray of size K

// Difficulty: Easy
// Accuracy: 49.6%
// Submissions: 231K+
// Points: 2

// Given an array of integers arr[] and a number k. Return the maximum sum of a subarray of size k.

// Note: A subarray is a contiguous part of any given array.

// Examples:

// Input: arr[] = [100, 200, 300, 400], k = 2
// Output: 700
// Explanation: arr2 + arr3 = 700, which is maximum.

// Input: arr[] = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
// Output: 39
// Explanation: arr1 + arr2 + arr3 + arr4 = 39, which is maximum.

// Input: arr[] = [100, 200, 300, 400], k = 1
// Output: 400
// Explanation: arr3 = 400, which is maximum.

// Constraints:
// 1 ≤ arr.size() ≤ 10^6
// 1 ≤ arr[i] ≤ 10^6
// 1 ≤ k ≤ arr.size()

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  maxSubarraySum(arr, k) {
    // If array length is less than k, return 0 or handle appropriately

    if (arr.length < k) return 0;

    let currentSum = 0;

    // Calculate sum of first k elements

    for (let i = 0; i < k; i++) {
      currentSum += arr[i];
    }

    let maxSum = currentSum;

    // Slide the window from k to end of array

    for (let i = k; i < arr.length; i++) {
      // Add the next element and subtract the first element of previous window

      currentSum = currentSum + arr[i] - arr[i - k];

      // Update maxSum if currentSum is greater

      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }

    return maxSum;
  }
}
