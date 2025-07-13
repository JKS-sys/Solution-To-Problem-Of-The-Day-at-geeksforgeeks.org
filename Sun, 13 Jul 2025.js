// Sun, 13 Jul 2025,

// Maximum sum of elements not part of LIS
// Difficulty: MediumAccuracy: 27.55%Submissions: 5K+Points: 4
// Given an array arr[] of positive integers, your task is to find the maximum possible sum of all elements that are not part of the Longest Increasing Subsequence (LIS).

// Examples:

// Input: arr[] = [4, 6, 1, 2, 3, 8]
// Output: 10
// Explanation: The elements which are not in LIS is 4 and 6.
// Input: arr[] = [5, 4, 3, 2, 1]
// Output: 14
// Explanation: The elements which are not in LIS is 5, 4, 3 and 2.
// Constraints:
// 1 ≤ arr.size() ≤ 103
// 1 ≤ arr[i] ≤ 105
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

class Solution {
  nonLisMaxSum(arr) {
    let n = arr.length;
    let total = arr.reduce((a, b) => a + b, 0);

    // dp[i] = [length, minSum] of LIS ending at index i
    let dp = arr.map((val) => [1, val]);

    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
          let newLen = dp[j][0] + 1;
          let newSum = dp[j][1] + arr[i];

          if (newLen > dp[i][0] || (newLen === dp[i][0] && newSum < dp[i][1])) {
            dp[i] = [newLen, newSum];
          }
        }
      }
    }

    let maxLen = Math.max(...dp.map((x) => x[0]));
    let minSum = Math.min(
      ...dp.filter((x) => x[0] === maxLen).map((x) => x[1])
    );

    return total - minSum;
  }
}
