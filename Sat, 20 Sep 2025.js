// Sat, 20 Sep 2025,

// Longest Subarray Length
// Difficulty: MediumAccuracy: 30.24%Submissions: 2K+Points: 4
// You are given an array of integers arr[]. Your task is to find the length of the longest subarray such that all the elements of the subarray are smaller than or equal to the length of the subarray.

// Examples:

// Input: arr[] = [1, 2, 3]
// Output: 3
// Explanation: The longest subarray is the entire array itself, which has a length of 3. All elements in the subarray are less than or equal to 3.
// Input: arr[] = [6, 4, 2, 5]
// Output: 0
// Explanation: There is no subarray where all elements are less than or equal to the length of the subarray. The longest subarray is empty, which has a length of 0.
// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// 1 ≤ arr[i] ≤ 10^9
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  longestSubarray(arr) {
    const n = arr.length;
    const left = new Array(n).fill(-1);
    const right = new Array(n).fill(n);
    let stack = [];

    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        left[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }

    stack = [];
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        right[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
      const L = right[i] - left[i] - 1;
      if (arr[i] <= L) {
        ans = Math.max(ans, L);
      }
    }

    return ans;
  }
}
