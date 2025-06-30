// Mon, 30 Jun 2025,

// Max min Height
// Difficulty: HardAccuracy: 62.86%Submissions: 18K+Points: 8
// Given a garden with n flowers planted in a row, that is represented by an array arr[], where arr[i] denotes the height of the ith flower.You will water them for k days. In one day you can water w continuous flowers. Whenever you water a flower its height increases by 1 unit. You have to maximize the minimum height of all flowers after  k days of watering.

// Examples:

// Input: arr[] = [2, 3, 4, 5, 1], k = 2, w = 2
// Output: 2
// Explanation: The minimum height after watering is 2.
// Day 1: Water the last two flowers -> arr becomes [2, 3, 4, 6, 2]
// Day 2: Water the last two flowers -> arr becomes [2, 3, 4, 7, 3]
// Input: arr[] = [5, 8], k = 5, w = 1
// Output: 9
// Explanation: The minimum height after watering is 9.
// Day 1 - Day 4: Water the first flower -> arr becomes [9, 8]
// Day 5: Water the second flower -> arr becomes [9, 9]
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ w ≤ arr.size()
// 1 ≤ k ≤ 105
// 1 ≤ arr[i] ≤ 109
// Expected Complexities
// Time Complexity: O(n log m)
// Auxiliary Space: O(n)

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} w
 * @returns {number}
 */
class Solution {
  maxMinHeight(arr, k, w) {
    let minVal = Math.min(...arr);
    let low = minVal;
    let high = minVal + k;

    const canAchieve = (x) => {
      let n = arr.length;
      let water = new Array(n).fill(0);
      let current = 0;
      let daysUsed = 0;

      for (let i = 0; i < n; i++) {
        current += water[i];
        let effectiveHeight = arr[i] + current;
        if (effectiveHeight < x) {
          let needed = x - effectiveHeight;
          daysUsed += needed;
          if (daysUsed > k) {
            return false;
          }
          current += needed;
          if (i + w < n) {
            water[i + w] -= needed;
          }
        }
      }
      return true;
    };

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (canAchieve(mid)) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return high;
  }
}
