// Thu, 18 Sep 2025,

// Next Greater Element in Circular Array
// Difficulty: MediumAccuracy: 56.97%Submissions: 60K+Points: 4
// Given a circular integer array arr[], the task is to determine the next greater element (NGE) for each element in the array.

// The next greater element of an element arr[i] is the first element that is greater than arr[i] when traversing circularly. If no such element exists, return -1 for that position.

// Note: Since the array is circular, after reaching the last element, the search continues from the beginning until we have looked at all elements once.

// Examples:

// Input: arr[] = [1, 3, 2, 4]
// Output: [3, 4, 4, -1]
// Explanation:
// The next greater element for 1 is 3.
// The next greater element for 3 is 4.
// The next greater element for 2 is 4.
// The next greater element for 4 does not exist, so return -1.
// Input: arr[] = [0, 2, 3, 1, 1]
// Output: [2, 3, -1, 2, 2]
// Explanation:
// The next greater element for 0 is 2.
// The next greater element for 2 is 3.
// The next greater element for 3 does not exist, so return -1.
// The next greater element for 1 is 2 (from circular traversal).
// The next greater element for 1 is 2 (from circular traversal).
// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// 0 ≤ arr[i] ≤ 10^6
// Expected Complexities
// Time Complexity: O(n)

class Solution {
  nextGreater(arr) {
    const n = arr.length;
    const res = new Array(n).fill(-1); // Initialize result with -1
    const stack = [];

    // Traverse the array twice to account for circularity
    for (let i = 2 * n - 1; i >= 0; i--) {
      const idx = i % n;
      // Pop smaller or equal elements from stack
      while (stack.length && arr[stack[stack.length - 1]] <= arr[idx]) {
        stack.pop();
      }
      // Assign next greater if stack is not empty (first pass)
      if (stack.length && i < n) {
        res[idx] = arr[stack[stack.length - 1]];
      }
      // Push this index onto stack for future comparisons
      stack.push(idx);
    }
    return res;
  }
}
