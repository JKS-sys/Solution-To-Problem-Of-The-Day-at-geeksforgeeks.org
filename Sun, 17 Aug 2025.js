// Sun, 17 Aug 2025,

// Sort by Absolute Difference
// Difficulty: MediumAccuracy: 27.77%Submissions: 48K+Points: 4Average Time: 5m
// You are given a number x and array arr[]. Your task is to rearrange the elements of the array according to the absolute difference with x, i.e., an element having minimum difference comes first, and so on.
// Note: If two or more elements are at equal distances arrange them in the same sequence as in the given array.

// Examples:

// Input: x = 7, arr[] = [10, 5, 3, 9, 2]
// Output: [5, 9, 10, 3, 2]
// Explanation: Sorting the numbers according to the absolute difference with 7, we have array elements as 5, 9, 10, 3, 2.
// Input: x = 6, arr[] = [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]
// Explanation: Sorting the numbers according to the absolute difference with 6, we have array elements as 5, 4, 3, 2, 1.
// Constraints:
// 1 ≤ x ≤ 105
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 105
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(1)

/**
 * @param {number[]} arr
 * @param {number} x
 * @return {void}
 */

class Solution {
  rearrange(arr, x) {
    arr.sort((a, b) => Math.abs(a - x) - Math.abs(b - x));
  }
}
