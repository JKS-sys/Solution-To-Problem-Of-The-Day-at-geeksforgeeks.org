// Mon, 26 Jan 2026,

// POTD question was https://www.geeksforgeeks.org/problems/generate-permutations-of-an-array/1

// Generate Permutations of an Array

// Difficulty: Medium
// Accuracy: 87.68%
// Submissions: 3K+
// Points: 4

// Given an array arr[] of unique elements. Generate all possible permutations of the elements in the array.

// Note: You can return the permutations in any order, the driver code will print them in sorted order.

// Examples:

// Input: arr[] = [1, 2, 3]
// Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
// Explanation: There are 6 possible permutations (3! = 6) of the array.

// Input: arr[] = [1, 3]
// Output: [[1, 3], [3, 1]]
// Explanation: There are 2 possible permutations (2! = 2) of the array.

// Constraints:
// 1 ≤ arr.size() ≤ 9

// Expected Complexities:
// Time Complexity: O(n! * n)
// Auxiliary Space: O(n)

class Solution {
  permuteDist(arr) {
    const result = [];

    // Helper function for backtracking

    function backtrack(start) {
      // If we've reached the end, add a copy of the current array to results

      if (start === arr.length) {
        result.push([...arr]);
        return;
      }

      // Swap current index with each index from start to end

      for (let i = start; i < arr.length; i++) {
        // Swap elements at positions start and i

        [arr[start], arr[i]] = [arr[i], arr[start]];

        // Recurse on the next position

        backtrack(start + 1);

        // Backtrack: swap back to original state

        [arr[start], arr[i]] = [arr[i], arr[start]];
      }
    }

    // Start backtracking from index 0

    backtrack(0);
    return result;
  }
}
