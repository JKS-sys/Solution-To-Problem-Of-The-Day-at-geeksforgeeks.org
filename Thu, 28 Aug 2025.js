// Thu, 28 Aug 2025,

// Maximize Number of 1's
// Difficulty: MediumAccuracy: 39.46%Submissions: 60K+Points: 4Average Time: 20m
// Given a binary array arr[] containing only 0s and 1s and an integer k, you are allowed to flip at most k 0s to 1s. Find the maximum number of consecutive 1's that can be obtained in the array after performing the operation at most k times.

// Examples:

// Input: arr[] = [1, 0, 1], k = 1
// Output: 3
// Explanation: By flipping the zero at index 1, we get the longest subarray from index 0 to 2 containing all 1’s.
// Input: arr[] = [1, 0, 0, 1, 0, 1, 0, 1], k = 2
// Output: 5
// Explanation: By flipping the zeroes at indices 4 and 6, we get the longest subarray from index 3 to 7 containing all 1’s.
// Input: arr[] = [1, 1], k = 2
// Output: 2
// Explanation: Since the array is already having the max consecutive 1's, hence we dont need to perform any operation. Hence the answer is 2.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ k ≤ arr.size()
// 0 ≤ arr[i] ≤ 1
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
  maxOnes(arr, k) {
    let left = 0;
    let zeroCount = 0;
    let max = 0;
    const n = arr.length;

    for (let right = 0; right < n; right++) {
      if (arr[right] === 0) {
        zeroCount++;
      }
      while (zeroCount > k) {
        if (arr[left] === 0) {
          zeroCount--;
        }
        left++;
      }
      max = Math.max(max, right - left + 1);
    }

    return max;
  }
}
