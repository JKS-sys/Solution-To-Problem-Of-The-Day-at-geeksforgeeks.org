// Mon, 22 Sep 2025,

// Max of min for every window size
// Difficulty: HardAccuracy: 42.9%Submissions: 72K+Points: 8Average Time: 45m
// You are given an integer array arr[], the task is to find the maximum of minimum values for every window size k where 1≤ k ≤ arr.size().

// For each window size k, consider all contiguous subarrays of length k, determine the minimum element in each subarray, and then take the maximum among all these minimums.

// Return the results as an array, where the element at index i represents the answer for window size i+1.

// Examples :

// Input: arr[] = [10, 20, 30, 50, 10, 70, 30]
// Output: [70, 30, 20, 10, 10, 10, 10]
// Explanation:
// Window size 1: minimums are [10, 20, 30, 50, 10, 70, 30], maximum of minimums is 70.
// Window size 2: minimums are [10, 20, 30, 10, 10, 30], maximum of minimums is 30.
// Window size 3: minimums are [10, 20, 10, 10, 10], maximum of minimums is 20.
// Window size 4–7: minimums are [10, 10, 10, 10], maximum of minimums is 10.
// Input: arr[] = [10, 20, 30]
// Output: [30, 20, 10]
// Explanation:
// Window size 1: minimums of  [10], [20], [30], maximum of minimums is 30.
// Window size 2: minimums of [10, 20], [20,30], maximum of minimums is 20.
// Window size 3: minimums of [10,20,30], maximum of minimums is 10.
// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// 1 ≤ arr[i] ≤ 10^6
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)
class Solution {
  maxOfMins(arr) {
    const n = arr.length;
    const left = new Array(n).fill(-1);
    const right = new Array(n).fill(n);
    let stack = [];

    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        left[i] = stack[stack.length - 1];
      } else {
        left[i] = -1;
      }
      stack.push(i);
    }

    stack = [];
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        right[i] = stack[stack.length - 1];
      } else {
        right[i] = n;
      }
      stack.push(i);
    }

    const ans = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      const len = right[i] - left[i] - 1;
      if (arr[i] > ans[len]) {
        ans[len] = arr[i];
      }
    }

    for (let i = n - 1; i >= 1; i--) {
      if (ans[i] < ans[i + 1]) {
        ans[i] = ans[i + 1];
      }
    }

    return ans.slice(1, n + 1);
  }
}
