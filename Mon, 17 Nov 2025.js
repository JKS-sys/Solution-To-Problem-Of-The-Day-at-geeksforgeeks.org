// Mon, 17 Nov 2025,

// Max Sum Increasing Subsequence
// Difficulty: Medium Accuracy: 40.02% Submissions: 213K+ Points: 4 Average Time: 25m

// Given an array of positive integers arr[], find the maximum sum of a subsequence such that the elements of the subsequence form a strictly increasing sequence.
// In other words, among all strictly increasing subsequences of the array, return the one with the largest possible sum.

// Examples:

// Input: arr[] = [1, 101, 2, 3, 100]
// Output: 106
// Explanation: The maximum sum of an increasing sequence is obtained from [1, 2, 3, 100].
// Input: arr[] = [4, 1, 2, 3]
// Output: 6
// Explanation: The maximum sum of an increasing sequence is obtained from [1, 2, 3].
// Input: arr[] = [4, 1, 2, 4]
// Output: 7
// Explanation: The maximum sum of an increasing sequence is obtained from [1, 2, 4].

// Constraints:
// 1 ≤ arr.size() ≤ 10^3
// 1 ≤ arr[i] ≤ 10^5

// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

class Solution {
  maxSumIS(arr) {
    let n = arr.length;

    if (n === 0) return 0;

    let dp = new Array(n);

    for (let i = 0; i < n; i++) {
      dp[i] = arr[i];
    }

    let maxSum = arr[0];

    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
          dp[i] = Math.max(dp[i], dp[j] + arr[i]);
        }
      }
      maxSum = Math.max(maxSum, dp[i]);
    }

    return maxSum;
  }
}
