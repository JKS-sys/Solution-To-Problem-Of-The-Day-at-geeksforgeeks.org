// Fri, 09 Jan 2025,

// Subarrays With At Most K Distinct Integers

// Difficulty: Medium
// Accuracy: 62.09%
// Submissions: 17K+
// Points: 4

// You are given an array arr[] of positive integers and an integer k, find the number of subarrays in arr[] where the count of distinct integers is at most k.

// Note: A subarray is a contiguous part of an array.

// Examples:

// Input: arr[] = [1, 2, 2, 3], k = 2
// Output: 9
// Explanation: Subarrays with at most 2 distinct elements are: [1], [2], [2], [3], [1, 2], [2, 2], [2, 3], [1, 2, 2] and [2, 2, 3].

// Input: arr[] = [1, 1, 1], k = 1
// Output: 6
// Explanation: Subarrays with at most 1 distinct element are: [1], [1], [1], [1, 1], [1, 1] and [1, 1, 1].

// Input: arr[] = [1, 2, 1, 1, 3, 3, 4, 2, 1], k = 2
// Output: 24
// Explanation: There are 24 subarrays with at most 2 distinct elements.

// Constraints:
// 1 ≤ arr.size() ≤ 2*10^4
// 1 ≤ k ≤ 2*10^4
// 1 ≤ arr[i] ≤ 10^9

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(k)

class Solution {
  countAtMostK(arr, k) {
    let n = arr.length;
    let left = 0;
    let count = 0;
    let freq = new Map();

    for (let right = 0; right < n; right++) {
      // Add current element to frequency map

      freq.set(arr[right], (freq.get(arr[right]) || 0) + 1);

      // Shrink window if distinct elements exceed k

      while (freq.size > k) {
        let leftElement = arr[left];
        freq.set(leftElement, freq.get(leftElement) - 1);
        if (freq.get(leftElement) === 0) {
          freq.delete(leftElement);
        }
        left++;
      }

      // Count all subarrays ending at 'right'

      count += right - left + 1;
    }

    return count;
  }
}
