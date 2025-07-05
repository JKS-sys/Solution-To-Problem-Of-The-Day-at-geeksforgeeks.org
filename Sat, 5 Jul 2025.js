// Sat, 5 Jul 2025,

// Max Score from Subarray Mins
// Difficulty: MediumAccuracy: 43.26%Submissions: 119K+Points: 4
// You are given an array arr[] of integers. Your task is to select any two indices i and j such that i < j. From the subarray arr[i...j], find the smallest and second smallest elements. Add these two numbers to get the score of that subarray.

// Your goal is to return the maximum score that can be obtained from any subarray of arr[] with length at least 2.

// Examples :

// Input: arr[] = [4, 3, 5, 1]
// Output: 8
// Explanation: All subarrays with at least 2 elements and find the two smallest numbers in each:
// [4, 3] → 3 + 4 = 7
// [4, 3, 5] → 3 + 4 = 7
// [4, 3, 5, 1] → 1 + 3 = 4
// [3, 5] → 3 + 5 = 8
// [3, 5, 1] → 1 + 3 = 4
// [5, 1] → 1 + 5 = 6
// Maximum Score is 8.
// Input: arr[] = [1, 2, 3]
// Output: 5
// Explanation: All subarray with at least 2 elements and find the two smallest numbers in each:
// [1, 2] → 1 + 2 = 3
// [1, 2, 3] → 1 + 2 = 3
// [2, 3] → 2 + 3 = 5
// Maximum Score is 5
// Constraints:
// 2 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 106

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
  maxSum(arr) {
    let maxScore = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      let currentSum = arr[i] + arr[i + 1];
      if (currentSum > maxScore) {
        maxScore = currentSum;
      }
    }
    return maxScore;
  }
}
