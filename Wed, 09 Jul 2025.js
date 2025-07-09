// Wed, 09 Jul 2025,

// Sum of subarray minimum
// Difficulty: MediumAccuracy: 46.92%Submissions: 11K+Points: 4Average Time: 30m
// Given an array arr[] of positive integers, find the total sum of the minimum elements of every possible subarrays.

// Note: It is guaranteed that the total sum will fit within a 32-bit unsigned integer.

// Examples:

// Input: arr[] = [3, 1, 2, 4]
// Output: 17
// Explanation: Subarrays are [3], [1], [2], [4], [3, 1], [1, 2], [2, 4], [3, 1, 2], [1, 2, 4], [3, 1, 2, 4]. Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1. Sum of all these is 17.
// Input: arr[] = [71, 55, 82, 55]
// Output: 593
// Explanation: The sum of the minimum of all the subarrays is 593.
// Constraints:
// 1 ≤ arr.size() ≤ 3*104
// 1 ≤ arr[i] ≤ 103
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  sumSubMins(arr) {
    const n = arr.length;
    const left = new Array(n).fill(-1);
    const right = new Array(n).fill(n);
    let stackL = [];
    let stackR = [];

    for (let i = 0; i < n; i++) {
      while (stackL.length > 0 && arr[stackL[stackL.length - 1]] >= arr[i]) {
        stackL.pop();
      }
      if (stackL.length > 0) {
        left[i] = stackL[stackL.length - 1];
      }
      stackL.push(i);
    }

    for (let i = n - 1; i >= 0; i--) {
      while (stackR.length > 0 && arr[stackR[stackR.length - 1]] > arr[i]) {
        stackR.pop();
      }
      if (stackR.length > 0) {
        right[i] = stackR[stackR.length - 1];
      }
      stackR.push(i);
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
      const count = (i - left[i]) * (right[i] - i);
      sum += arr[i] * count;
    }

    return sum;
  }
}
