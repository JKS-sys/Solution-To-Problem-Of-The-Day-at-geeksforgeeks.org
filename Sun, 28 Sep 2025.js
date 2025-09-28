// Sun, 28 Sep 2025,

// Longest Bounded-Difference Subarray
// Difficulty: MediumAccuracy: 58.27%Submissions: 22K+Points: 4
// Given an array of positive integers arr[] and a non-negative integer x, the task is to find the longest sub-array where the absolute difference between any two elements is not greater than x.
// If multiple such subarrays exist, return the one that starts at the smallest index.

// Examples:

// Input: arr[] = [8, 4, 5, 6, 7], x = 3
// Output: [4, 5, 6, 7]
// Explanation: The sub-array described by index [1..4], i.e. [4, 5, 6, 7]
// contains no two elements whose absolute differnce is greater than 3.
// Input: arr[] = [1, 10, 12, 13, 14], x = 2
// Output: [12, 13, 14]
// Explanation: The sub-array described by index [2..4], i.e. [12, 13, 14]
// contains no two elements whose absolute differnece is greater than 2.
// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// 1 ≤ arr[i] ≤ 10^9
// 0 ≤ x ≤ 10^9
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  longestSubarray(arr, x) {
    if (arr.length === 0) return [];

    let n = arr.length;
    let maxDeque = [];
    let minDeque = [];

    let left = 0;
    let maxLength = 0;
    let bestStart = 0;

    for (let right = 0; right < n; right++) {
      while (
        maxDeque.length > 0 &&
        arr[maxDeque[maxDeque.length - 1]] <= arr[right]
      ) {
        maxDeque.pop();
      }
      maxDeque.push(right);

      while (
        minDeque.length > 0 &&
        arr[minDeque[minDeque.length - 1]] >= arr[right]
      ) {
        minDeque.pop();
      }
      minDeque.push(right);

      while (arr[maxDeque[0]] - arr[minDeque[0]] > x) {
        if (maxDeque[0] === left) maxDeque.shift();
        if (minDeque[0] === left) minDeque.shift();
        left++;
      }

      let currentLength = right - left + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        bestStart = left;
      }
    }

    return arr.slice(bestStart, bestStart + maxLength);
  }
}
