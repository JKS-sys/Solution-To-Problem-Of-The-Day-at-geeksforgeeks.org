// Wed, 07 Jan 2025,

// POTD question was https://www.geeksforgeeks.org/problems/count-distinct-elements-in-every-window/1

// Count Distinct Elements in Every Window

// Difficulty: Medium
// Accuracy: 41.83%
// Submissions: 168K+
// Points: 4
// Average Time: 20m

// Given an integer array arr[] and a number k. Find the count of distinct elements in every window of size k in the array.

// Examples:

// Input: arr[] = [1, 2, 1, 3, 4, 2, 3], k = 4
// Output: [3, 4, 4, 3]
// Explanation:
// First window is [1, 2, 1, 3], count of distinct numbers is 3.
// Second window is [2, 1, 3, 4] count of distinct numbers is 4.
// Third window is [1, 3, 4, 2] count of distinct numbers is 4.
// Fourth window is [3, 4, 2, 3] count of distinct numbers is 3.

// Input: arr[] = [4, 1, 1], k = 2
// Output: [2, 1]
// Explanation:
// First window is [4, 1], count of distinct numbers is 2.
// Second window is [1, 1], count of distinct numbers is 1.

// Input: arr[] = [1, 1, 1, 1, 1], k = 3
// Output: [1, 1, 1]
// Explanation: Every window of size 3 in the array [1, 1, 1, 1, 1], contains only the element 1, so the number of distinct elements in each window is 1.

// Constraints:
// 1 ≤ k ≤ arr.size() ≤ 10^5
// 1 ≤ arr[i] ≤ 10^5

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(k)

class Solution {
  countDistinct(arr, k) {
    const result = [];
    const freq = new Map();
    const n = arr.length;

    // Handle edge case where k > arr length

    if (k > n) {
      return result;
    }

    // First window

    for (let i = 0; i < k; i++) {
      freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
    }
    result.push(freq.size);

    // Slide the window

    for (let i = k; i < n; i++) {
      // Remove the element going out of window

      const outElement = arr[i - k];
      const count = freq.get(outElement);
      if (count === 1) {
        freq.delete(outElement);
      } else {
        freq.set(outElement, count - 1);
      }

      // Add the new element coming into window

      const inElement = arr[i];
      freq.set(inElement, (freq.get(inElement) || 0) + 1);

      // Record distinct count for current window

      result.push(freq.size);
    }

    return result;
  }
}
