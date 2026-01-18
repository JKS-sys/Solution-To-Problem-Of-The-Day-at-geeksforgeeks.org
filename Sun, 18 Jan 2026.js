// Sun, 18 Jan 2026,

// POTD question was https://www.geeksforgeeks.org/problems/next-element-with-greater-frequency--170637/1

// Next Element with Greater Frequency

// Difficulty: Medium
// Accuracy: 60.4%
// Submissions: 24K+
// Points: 4

// Given an array arr[] of integers, for each element, find the first element to its right that has a higher frequency than the current element.
// If no such element exists, return -1 for that position.

// Examples:

// Input: arr[] = [2, 1, 1, 3, 2, 1]
// Output: [1, -1, -1, 2, 1, -1]
// Explanation: Frequencies: 1 → 3 times, 2 → 2 times, 3 → 1 time.
// For arr[0] = 2, the next element 1 has a higher frequency → 1.
// For arr[1] and arr[2], no element to the right has a higher frequency → -1.
// For arr[3] = 3, the next element 2 has a higher frequency → 2.
// For arr[4] = 2, the next element 1 has a higher frequency → 1.
// For arr[5] = 1, no elements to the right → -1.

// Input: arr[] = [5, 1, 5, 6, 6]
// Output: [-1, 5, -1, -1, -1]
// Explanation: Frequencies: 1 → 1 time, 5 → 2 times, 6 → 2 times.
// For arr[0] and arr[2], no element to the right has a higher frequency → -1.
// For arr[1] = 1, the next element 5 has a higher frequency → 5.
// For arr[3] and arr[4], no element to the right has a higher frequency → -1.

// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// 1 ≤ arr[i] ≤ 10^5

class Solution {
  nextFreqGreater(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1);

    // Step 1: Calculate frequencies

    const freq = new Map();
    for (const num of arr) {
      freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Step 2: Use stack to find next element with greater frequency

    const stack = [];

    // Traverse from right to left

    for (let i = n - 1; i >= 0; i--) {
      const currentFreq = freq.get(arr[i]);

      // Remove elements from stack with frequency <= current frequency

      while (
        stack.length > 0 &&
        freq.get(arr[stack[stack.length - 1]]) <= currentFreq
      ) {
        stack.pop();
      }

      // If stack has elements, top element has higher frequency

      if (stack.length > 0) {
        result[i] = arr[stack[stack.length - 1]];
      }

      // Push current index

      stack.push(i);
    }

    return result;
  }
}
