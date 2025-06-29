// Sun, 29 Jun 2025,

// Split Array Largest Sum
// Difficulty: HardAccuracy: 58.9%Submissions: 51K+Points: 8
// Given an array arr[] and an integer k, divide the array into k contiguous subarrays such that the maximum sum among these subarrays is minimized. Find this minimum possible maximum sum.

// Examples:

// Input: arr[] = [1, 2, 3, 4], k = 3
// Output: 4
// Exaplanation: Optimal Split is [1, 2], [3], [4]. Maximum sum of all subarrays is 4, which is minimum possible for 3 splits.
// Input: arr[] = [1, 1, 2], k = 2
// Output: 2
// Exaplanation: Splitting the array as [1, 1] and [2] is optimal. This results in a maximum sum subarray of 2.
// Constraints:
// 1 ≤ k ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 104
// Expected Complexities
// Time Complexity: O(n*log(sum))
// Auxiliary Space: O(1)

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
  splitArray(arr, k) {
    let low = Math.max(...arr);
    let high = arr.reduce((a, b) => a + b, 0);

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (this.isFeasible(arr, k, mid)) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }

  isFeasible(arr, k, threshold) {
    let count = 1;
    let currentSum = 0;

    for (let num of arr) {
      if (currentSum + num > threshold) {
        count++;
        currentSum = num;
        if (count > k) {
          return false;
        }
      } else {
        currentSum += num;
      }
    }
    return true;
  }
}
