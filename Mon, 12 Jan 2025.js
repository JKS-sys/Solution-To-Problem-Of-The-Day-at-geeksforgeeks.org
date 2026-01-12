// Mon, 12 Jan 2025,

// POTD question was https://www.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k3101/1

// K Sized Subarray Maximum

// Difficulty: Medium
// Accuracy: 26.04%
// Submissions: 419K+
// Points: 4

// Given an array arr[] of positive integers and an integer k. You have to find the maximum value for each contiguous subarray of size k. Return an array of maximum values corresponding to each contiguous subarray.

// Examples:

// Input: arr[] = [1, 2, 3, 1, 4, 5, 2, 3, 6], k = 3
// Output: [3, 3, 4, 5, 5, 5, 6]
// Explanation:
// 1st contiguous subarray [1, 2, 3], max = 3
// 2nd contiguous subarray [2, 3, 1], max = 3
// 3rd contiguous subarray [3, 1, 4], max = 4
// 4th contiguous subarray [1, 4, 5], max = 5
// 5th contiguous subarray [4, 5, 2], max = 5
// 6th contiguous subarray [5, 2, 3], max = 5
// 7th contiguous subarray [2, 3, 6], max = 6

// Input: arr[] = [5, 1, 3, 4, 2], k = 1
// Output: [5, 1, 3, 4, 2]
// Explanation: When k = 1, each element in the array is its own subarray, so the output is simply the same array

// Constraints:
// 1 ≤ arr.size() ≤ 10^6
// 1 ≤ k ≤ arr.size()
// 0 ≤ arr[i] ≤ 10^9

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(k)

class Solution {
  maxOfSubarrays(arr, k) {
    const result = [];
    const deque = [];
    let front = 0;

    for (let i = 0; i < arr.length; i++) {
      // Remove indices from front that are out of current window

      while (deque.length > front && deque[front] <= i - k) {
        front++;
      }

      // Remove indices from back whose values are less than current element

      while (deque.length > front && arr[deque[deque.length - 1]] < arr[i]) {
        deque.pop();
      }

      // Add current index to the back

      deque.push(i);

      // Add maximum of current window to result

      if (i >= k - 1) {
        result.push(arr[deque[front]]);
      }
    }

    return result;
  }
}
