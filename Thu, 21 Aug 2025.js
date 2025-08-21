// Thu, 21 Aug 2025,

// Maximize the minimum difference between k elements
// Difficulty: MediumAccuracy: 71.31%Submissions: 6K+Points: 4
// Given an array arr[] of integers and an integer k, select k elements from the array such that the minimum absolute difference between any two of the selected elements is maximized. Return this maximum possible minimum difference.

// Examples:

// Input: arr[] = [2, 6, 2, 5], k = 3
// Output: 1
// Explanation: 3 elements out of 4 elements are to be selected with a minimum difference as large as possible. Selecting 2, 2, 5 will result in minimum difference as 0. Selecting 2, 5, 6 will result in minimum difference as 6 - 5 = 1.
// Input: arr[] = [1, 4, 9, 0, 2, 13, 3], k = 4
// Output: 4
// Explanation: Selecting 0, 4, 9, 13 will result in minimum difference of 4, which is the largest minimum difference possible.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 106
// 2 ≤ k ≤ arr.size()

// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(1)

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
  maxMinDiff(arr, k) {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    let low = 0;
    let high = arr[n - 1] - arr[0];

    const canWePlace = (d) => {
      let count = 1;
      let last = arr[0];
      for (let i = 1; i < n; i++) {
        if (arr[i] - last >= d) {
          count++;
          last = arr[i];
          if (count >= k) return true;
        }
      }
      return count >= k;
    };

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (canWePlace(mid)) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return high;
  }
}
