// Wed, 24 Dec 2025,

// POTD question was https://www.geeksforgeeks.org/problems/count-elements-less-than-or-equal-to-k-in-a-sorted-rotated-array/1

// Count elements less than or equal to k in a sorted rotated array
// Difficulty: Medium Accuracy: 65.29% Submissions: 2K+ Points: 4 Average Time: 15m

// Given a sorted array arr[] containing distinct positive integers that has been rotated at some unknown pivot, and a value x. Your task is to count the number of elements in the array that are less than or equal to x.

// Examples:

// Input: arr[] = [4, 5, 8, 1, 3], x = 6
// Output: 4
// Explanation: 1, 3, 4 and 5 are less than 6, so the count of all elements less than 6 is 4.

// Input: arr[] = [6, 10, 12, 15, 2, 4, 5], x = 14
// Output: 6
// Explanation: All elements except 15 are less than 14, so the count of all elements less than 14 is 6.

// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// 0 ≤ arr[i], x ≤ 10^9

// Expected Complexities
// Time Complexity: O(log n)
// Auxiliary Space: O(1)

// Solution:
class Solution {
  countLessEqual(arr, x) {
    const n = arr.length;

    // find pivot (minimum element index)

    let pivot = 0;
    let left = 0,
      right = n - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < arr[0]) {
        pivot = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // helper function to find last index with value <= x in sorted array

    const findLastLessOrEqual = (start, end) => {
      let result = -1;
      while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] <= x) {
          result = mid;
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
      return result;
    };

    // search in both halves

    const idx1 = findLastLessOrEqual(pivot, n - 1);
    const idx2 = findLastLessOrEqual(0, pivot - 1);

    let count = 0;
    if (idx1 !== -1) count += idx1 - pivot + 1;
    if (idx2 !== -1) count += idx2 + 1;

    return count;
  }
}
