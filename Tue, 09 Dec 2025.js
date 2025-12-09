// Tue, 09 Dec 2025,
// POTD question was https://www.geeksforgeeks.org/problems/find-duplicates-in-an-array/1

// Array Duplicates
// Difficulty: Easy Accuracy: 18.95% Submissions: 873K+ Points: 2 Average Time: 20m
// Given an array arr[] of size n, containing elements from the range 1 to n, and each element appears at most twice, return an array of all the integers that appears twice.

// Note: You can return the elements in any order but the driver code will print them in sorted order.

// Examples:

// Input: arr[] = [2, 3, 1, 2, 3]
// Output: [2, 3]
// Explanation: 2 and 3 occur more than once in the given array.
// Input: arr[] = [3, 1, 2]
// Output: []
// Explanation: There is no repeating element in the array, so the output is empty.
// Constraints:
// 1 ≤ n ≤ 10^6
// 1 ≤ arr[i] ≤ n
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
  findDuplicates(arr) {
    const duplicates = [];
    const n = arr.length;

    for (let i = 0; i < arr.length; i++) {
      // step 1: Find where this number "lives" in the array
      const position = Math.abs(arr[i]) - 1;

      // Step 2: Check if this number's home is already marked
      if (arr[position] < 0) {
        // If it's marked, we found a duplicate!
        duplicates.push(position + 1);
      }

      // Step 3: Mark this number's home(even if we found a duplicate)
      arr[position] = -Math.abs(arr[position]);
    }
    return duplicates;
  }
}
