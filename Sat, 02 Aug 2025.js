// Sat, 02 Aug 2025

// Longest Subarray with Majority Greater than K
// Difficulty: MediumAccuracy: 52.63%Submissions: 17K+Points: 4
// Given an array arr[] and an integer k, the task is to find the length of longest subarray in which the count of elements greater than k is more than the count of elements less than or equal to k.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 1], k = 2
// Output: 3
// Explanation: The subarray [2, 3, 4] or [3, 4, 1] satisfy the given condition, and there is no subarray of length 4 or 5 which will hold the given condition, so the answer is 3.
// Input: arr[] = [6, 5, 3, 4], k = 2
// Output: 4
// Explanation: In the subarray [6, 5, 3, 4], there are 4 elements > 2 and 0 elements <= 2, so it is the longest subarray.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ 106
// 0 ≤ k ≤ 106
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  longestSubarray(arr, k) {
    const n = arr.length;
    if (n === 0) return 0;

    const prefix = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      prefix[i] = prefix[i - 1] + (arr[i - 1] > k ? 1 : -1);
    }

    const stack = [];
    stack.push(0);

    for (let i = 1; i <= n; i++) {
      if (prefix[i] < prefix[stack[stack.length - 1]]) {
        stack.push(i);
      }
    }

    let ans = 0;
    for (let j = n; j >= 0; j--) {
      while (stack.length > 0 && prefix[stack[stack.length - 1]] < prefix[j]) {
        ans = Math.max(ans, j - stack.pop());
      }
    }

    return ans;
  }
}
