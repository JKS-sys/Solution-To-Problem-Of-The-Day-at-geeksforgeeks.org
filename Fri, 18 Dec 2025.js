// Fri, 18 Dec 2025,

// POTD question was https://www.geeksforgeeks.org/problems/sort-in-specific-order2422/1

// Sort in specific order
// Difficulty: Medium Accuracy: 52.55% Submissions: 47K+ Points: 4
// Given an array arr[] of positive integers. Your have to sort them so that the first part of the array contains odd numbers sorted in descending order, and the rest of the portion contains even numbers sorted in ascending order.

// Examples:

// Input: arr[] = [1, 2, 3, 5, 4, 7, 10]
// Output: [7, 5, 3, 1, 2, 4, 10]
// Explanation: 7, 5, 3, 1 are odd numbers in descending order and 2, 4, 10 are even numbers in ascending order.
// Input: arr[] = [0, 4, 5, 3, 7, 2, 1]
// Output: [7, 5, 3, 1, 0, 2, 4]
// Explanation: 7, 5, 3, 1 are odd numbers in descending order and 0, 2, 4 are even numbers in ascending order.
// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// 0 ≤ arri ≤ 10^9
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(1)

/**
 * @param {number[]} arr
 * @returns {void}
 */

class Solution {
  sortIt(arr) {
    // custom comparator for the sort
    arr.sort((a, b) => {
      const aOdd = a % 2 !== 0;
      const bOdd = b % 2 !== 0;

      // if both are odd, sort in descending order
      if (aOdd && bOdd) {
        return b - a;
      }

      // if both are even, sort in ascending order
      if (!aOdd && !bOdd) {
        return a - b;
      }

      // if one is odd and one is even, odd comes first
      return aOdd ? -1 : 1;
    });

    return arr;
  }
}
