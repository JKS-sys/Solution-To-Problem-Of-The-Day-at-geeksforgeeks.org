// Mon, 29 Sep 2025,

// Maximum subarray sum 2
// Difficulty: HardAccuracy: 60.35%Submissions: 897+Points: 8
// You are given an array arr[] of integers and two integers a and b, You have to find the maximum possible sum of a contiguous subarray whose length is at least a and at most b.

// Examples:

// Input: arr[] = [4, 5, -1, -2, 6], a = 2, b = 4
// Output: 9
// Explanation: The subarray [4, 5] has length 2 and sum 9, which is the maximum among all subarrays of length between 2 and 4.
// Input: arr[] = [-1, 3, -1, -2, 5, 3, -5, 2, 2], a = 3, b = 5
// Output: 8
// Explanation: The subarray [3, -1, -2, 5, 3] has length 5 and sum 8, which is the maximum among all subarrays of length between 3 and 5.
// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// -10^5 ≤ arr[i] ≤ 10^5
// 1 ≤ a ≤ b ≤ arr.size()
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  maxSubarrSum(arr, a, b) {
    const n = arr.length;

    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      prefix[i + 1] = prefix[i] + arr[i];
    }

    let maxSum = -Infinity;
    const deque = [];

    for (let j = a; j <= n; j++) {
      while (
        deque.length > 0 &&
        prefix[deque[deque.length - 1]] >= prefix[j - a]
      ) {
        deque.pop();
      }
      deque.push(j - a);

      if (deque[0] < j - b) {
        deque.shift();
      }

      if (deque.length > 0) {
        maxSum = Math.max(maxSum, prefix[j] - prefix[deque[0]]);
      }
    }

    return maxSum;
  }
}
