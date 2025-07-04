// Fri, 04 Jul 2025,

// Subarrays With At Most K Distinct Integers
// Difficulty: MediumAccuracy: 73.76%Submissions: 2K+Points: 4
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
// 1 ≤ arr.size() ≤ 2*104
// 1 ≤ k ≤ 2*104
// 1 ≤ arr[i] ≤ 109
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(k)

class Solution {
  countAtMostK(arr, k) {
    const n = arr.length;
    let left = 0;
    let distinct = 0;
    const freq = new Map();
    let count = 0;

    for (let right = 0; right < n; right++) {
      const num = arr[right];
      freq.set(num, (freq.get(num) || 0) + 1);
      if (freq.get(num) === 1) {
        distinct++;
      }

      while (distinct > k) {
        const leftNum = arr[left];
        freq.set(leftNum, freq.get(leftNum) - 1);
        if (freq.get(leftNum) === 0) {
          distinct--;
        }
        left++;
      }

      count += right - left + 1;
    }

    return count;
  }
}
