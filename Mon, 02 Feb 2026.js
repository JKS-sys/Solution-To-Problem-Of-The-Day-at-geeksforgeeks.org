// Mon, 02 Feb 2026,

// POTD question was https://www.geeksforgeeks.org/problems/max-circular-subarray-sum-1587115620/1

// Max Circular Subarray Sum
// Difficulty: HardAccuracy: 29.37%Submissions: 189K+Points: 8Average Time: 25m

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

class Solution {
  maxCircularSum(arr) {
    // Edge case: if array is empty
    if (arr.length === 0) return 0;

    // Case 1: Maximum sum without wrapping (normal Kadane's algorithm)
    let maxKadane = this.kadane(arr);

    // Case 2: Maximum sum with wrapping
    // For wrapping case, we find total sum and minimum subarray sum
    // Maximum wrapping sum = total sum - minimum subarray sum
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
      totalSum += arr[i];
    }

    // Invert the array to find minimum subarray sum using Kadane
    let invertedArr = [];
    for (let i = 0; i < arr.length; i++) {
      invertedArr.push(-arr[i]);
    }

    let maxInverted = this.kadane(invertedArr);
    let minSubarraySum = -maxInverted;

    // Calculate maximum wrapping sum
    // Special case: if all numbers are negative, minSubarraySum equals totalSum
    // In that case, we should return maxKadane (largest single element)
    let maxWrapping =
      minSubarraySum === totalSum ? maxKadane : totalSum - minSubarraySum;

    // Return the maximum of both cases
    return Math.max(maxKadane, maxWrapping);
  }

  // Standard Kadane's algorithm to find maximum subarray sum
  kadane(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];

    for (let i = 1; i < arr.length; i++) {
      maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
  }
}
