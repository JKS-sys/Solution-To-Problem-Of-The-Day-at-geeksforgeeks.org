// Fri, 25 Jul 2025,

// Max Circular Subarray Sum
// Difficulty: HardAccuracy: 29.37%Submissions: 170K+Points: 8Average Time: 25m
// You are given a circular array arr[] of integers, find the maximum possible sum of a non-empty subarray. In a circular array, the subarray can start at the end and wrap around to the beginning. Return the maximum non-empty subarray sum, considering both non-wrapping and wrapping cases.

// Examples:

// Input: arr[] = [8, -8, 9, -9, 10, -11, 12]
// Output: 22
// Explanation: Starting from the last element of the array, i.e, 12, and moving in a circular fashion, we have max subarray as 12, 8, -8, 9, -9, 10, which gives maximum sum as 22.
// Input: arr[] = [10, -3, -4, 7, 6, 5, -4, -1]
// Output: 23
// Explanation: Maximum sum of the circular subarray is 23. The subarray is [7, 6, 5, -4, -1, 10].
// Input: arr[] = [5, -2, 3, 4]
// Output: 12
// Explanation: The circular subarray [3, 4, 5] gives the maximum sum of 12.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// -104 ≤ arr[i] ≤ 104
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

/*
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
  maxCircularSum(arr) {
    let n = arr.length;
    if (n === 0) return 0;

    let maxCurr = arr[0];
    let minCurr = arr[0];
    let maxSum = arr[0];
    let minSum = arr[0];
    let total = arr[0];

    for (let i = 1; i < n; i++) {
      total += arr[i];
      maxCurr = Math.max(arr[i], maxCurr + arr[i]);
      maxSum = Math.max(maxSum, maxCurr);
      minCurr = Math.min(arr[i], minCurr + arr[i]);
      minSum = Math.min(minSum, minCurr);
    }

    if (maxSum < 0) {
      return maxSum;
    }

    return Math.max(maxSum, total - minSum);
  }
}
