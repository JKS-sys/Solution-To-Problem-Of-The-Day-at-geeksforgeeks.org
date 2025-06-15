// Sun, 15 Jun 2025,

// Smallest Divisor
// Difficulty: MediumAccuracy: 50.74%Submissions: 12K+Points: 4Average Time: 25m
// Given an integer array arr[] and an integer k (where k ≥ arr.length), find the smallest positive integer divisor such that the sum of the ceiling values of each element in arr[] divided by this divisor is less than or equal to k.

// Examples:

// Input: arr[] = [1, 2, 5, 9], k = 6
// Output: 5
// Explanation: 5 is the smallest divisor having sum of quotients (1 + 1 + 1 + 2 = 5) less than or equal to 6.
// Input: arr[] = [1, 1, 1, 1], k = 4
// Output: 1
// Explanation: 1 is the smallest divisor having sum of quotients (1 + 1 + 1 + 1 = 4) less than or equal to 4.
// Constraints:
// 1  ≤  arr.size()  ≤ 105
// 1  ≤  arr[i]  ≤ 106
// arr.size()  ≤ k  ≤ 106

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
  smallestDivisor(arr, k) {
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxVal) {
        maxVal = arr[i];
      }
    }
    let low = 1;
    let high = maxVal;

    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      let total = 0;
      let valid = true;
      for (let num of arr) {
        total += Math.ceil(num / mid);
        if (total > k) {
          valid = false;
          break;
        }
      }
      if (valid) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    return low;
  }
}
