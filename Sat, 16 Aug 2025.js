// Sat, 16 Aug 2025,

// Form the Largest Number
// Difficulty: MediumAccuracy: 37.82%Submissions: 173K+Points: 4
// Given an array of integers arr[] representing non-negative integers, arrange them so that after concatenating all of them in order, it results in the largest possible number. Since the result may be very large, return it as a string.

// Examples:

// Input: arr[] = [3, 30, 34, 5, 9]
// Output: 9534330
// Explanation: Given numbers are [3, 30, 34, 5, 9], the arrangement [9, 5, 34, 3, 30] gives the largest value.
// Input: arr[] = [54, 546, 548, 60]
// Output: 6054854654
// Explanation: Given numbers are [54, 546, 548, 60], the arrangement [60, 548, 546, 54] gives the largest value.
// Input: arr[] = [3, 4, 6, 5, 9]
// Output: 96543
// Explanation: Given numbers are [3, 4, 6, 5, 9], the arrangement [9, 6, 5, 4, 3] gives the largest value.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 105
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

/**
 * @param {number[]} arr
 * @returns {String}
 */

class Solution {
  findLargest(arr) {
    const strArr = arr.map(String);

    strArr.sort((a, b) => {
      const option1 = a + b;
      const option2 = b + a;
      if (option1 > option2) {
        return -1;
      } else if (option1 < option2) {
        return 1;
      } else {
        return 0;
      }
    });

    const result = strArr.join("");

    if (result[0] === "0") {
      return "0";
    }

    return result;
  }
}
