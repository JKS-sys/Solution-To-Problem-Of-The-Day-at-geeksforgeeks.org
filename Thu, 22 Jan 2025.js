// Thu, 22 Jan 2025,

// POTD question was https://www.geeksforgeeks.org/problems/sum-of-subarray-ranges/1

// Sum of Subarray Ranges

// Difficulty: Medium
// Accuracy: 47.55%
// Submissions: 8K+
// Points: 4
// Average Time: 30m

// Given an integer array arr[], the range of a subarray is defined as the difference between the largest and smallest elements within that subarray. Your task is to return the sum of the ranges of all possible subarrays in the array.

// Note: It is guaranteed that the result will fit within a 32-bit integer.

// Examples:

// Input: arr[] = [1, 2, 3]
// Output: 4
// Explanation: The 6 subarray of arr are the following :
// [1], range = largest - smallest = 1 - 1 = 0
// [2], range = largest - smallest = 2 - 2 = 0
// [3], range = largest - smallest = 3 - 3 = 0
// [1, 2], range = largest - smallest = 2 - 1 = 1
// [2, 3], range = largest - smallest = 3 - 2 = 1
// [1, 2, 3], range = largest - smallest = 3 - 1 = 2
// Sum of all ranges is 0 + 0 + 0 + 1 + 1 + 2 = 4

// Input: arr[] = [-32, 0, -2, 72]
// Output: 318
// Explanation:
// [-32], range = largest - smallest = -32 - (-32) = 0
// [-32, 0], range = largest - smallest = 0 - (-32) = 32
// [-32, 0, -2], range = largest - smallest = 0 - (-32) = 32
// [-32, 0, -2, 72], range= largest - smallest = 72 - (-32) = 104
// [0], range = largest - smallest = 0 - 0 = 0
// [0, -2], range = largest - smallest = 0 - (-2) = 2
// [0, -2, 72], range = largest - smallest = 72 - (-2) = 74
// [-2], range = largest - smallest = -2 - (-2) = 0
// [-2, 72], range = largest - smallest = 72 - (-2) = 74
// [72], range = largest - smallest = 72 - 72 = 0
// Sum of all ranges is 0 + 32 + 32 + 104 + 0 + 2 + 74 + 0 + 74 + 0 = 318

// Constraints:
// 1 ≤ arr.size() ≤ 10^6
// 10^-9 ≤ arr[i] ≤ 10^9

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  subarrayRanges(arr) {
    const n = arr.length;

    // Function to compute sum of maximums or minimums

    const computeSum = (isMax) => {
      const stack = [];
      const left = new Array(n).fill(0);
      const right = new Array(n).fill(0);

      // Calculate left boundaries

      for (let i = 0; i < n; i++) {
        while (
          stack.length > 0 &&
          (isMax
            ? arr[stack[stack.length - 1]] <= arr[i]
            : arr[stack[stack.length - 1]] >= arr[i])
        ) {
          stack.pop();
        }
        left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
        stack.push(i);
      }

      // Clear stack

      stack.length = 0;

      // Calculate right boundaries

      for (let i = n - 1; i >= 0; i--) {
        while (
          stack.length > 0 &&
          (isMax
            ? arr[stack[stack.length - 1]] < arr[i]
            : arr[stack[stack.length - 1]] > arr[i])
        ) {
          stack.pop();
        }
        right[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
        stack.push(i);
      }

      // Calculate total sum

      let sum = 0;
      for (let i = 0; i < n; i++) {
        sum += arr[i] * left[i] * right[i];
      }
      return sum;
    };

    // Total sum = sum of all maximums - sum of all minimums

    return computeSum(true) - computeSum(false);
  }
}
