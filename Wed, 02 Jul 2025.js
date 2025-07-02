// Wed, 02 Jul 2025,

// Longest subarray with Atmost two distinct integers
// Difficulty: MediumAccuracy: 47.98%Submissions: 109K+Points: 4Average Time: 30m
// Given an array arr[] consisting of positive integers, your task is to find the length of the longest subarray that contains at most two distinct integers.

// Examples:

// Input: arr[] = [2, 1, 2]
// Output: 3
// Explanation: The entire array [2, 1, 2] contains at most two distinct integers (2 and 1). Hence, the length of the longest subarray is 3.
// Input: arr[] = [3, 1, 2, 2, 2, 2]
// Output: 5
// Explanation: The longest subarray containing at most two distinct integers is [1, 2, 2, 2, 2], which has a length of 5.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 105
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
  totalElements(arr) {
    let left = 0;
    let maxLen = 0;
    let distinct = 0;
    let freqMap = {};

    for (let right = 0; right < arr.length; right++) {
      let num = arr[right];
      if (freqMap[num]) {
        freqMap[num]++;
      } else {
        freqMap[num] = 1;
        distinct++;
      }

      while (distinct > 2) {
        let leftNum = arr[left];
        freqMap[leftNum]--;
        if (freqMap[leftNum] === 0) {
          distinct--;
          delete freqMap[leftNum];
        }
        left++;
      }

      maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
  }
}
