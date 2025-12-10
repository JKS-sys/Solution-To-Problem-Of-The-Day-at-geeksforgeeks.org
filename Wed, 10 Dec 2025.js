// Wed, 10 Dec 2025,

// Missing And Repeating
// Difficulty: Easy Accuracy: 24.83% Submissions: 660K+ Points: 2 Average Time: 30m
// Given an unsorted array arr[] of size n, containing elements from the range 1 to n, it is known that one number in this range is missing, and another number occurs twice in the array, find both the duplicate number and the missing number.

// Examples:

// Input: arr[] = [2, 2]
// Output: [2, 1]
// Explanation: Repeating number is 2 and the missing number is 1.
// Input: arr[] = [1, 3, 3]
// Output: [3, 2]
// Explanation: Repeating number is 3 and the missing number is 2.
// Input: arr[] = [4, 3, 6, 2, 1, 1]
// Output: [1, 5]
// Explanation: Repeating number is 1 and the missing number is 5.
// Constraints:
// 2 ≤ n ≤ 10^6
// 1 ≤ arr[i] ≤ n
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
  findTwoElement(arr) {
    const n = arr.length;
    let duplicate = -1;
    let missing = -1;

    for (let i = 0; i < n; i++) {
      const index = Math.abs(arr[i]) - 1;

      if (arr[index] < 0) {
        duplicate = Math.abs(arr[i]);
      } else {
        arr[index] = -arr[index];
      }
    }

    for (let i = 0; i < n; i++) {
      if (arr[i] > 0) {
        missing = i + 1;
        break;
      }
    }

    return [duplicate, missing];
  }
}
