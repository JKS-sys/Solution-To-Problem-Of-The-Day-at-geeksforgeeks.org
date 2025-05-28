// Wed, 28 May 2025,

// Find rectangle with corners as 1
// Difficulty: MediumAccuracy: 64.09%Submissions: 8K+Points: 4
// Given an n x m binary matrix mat[][] containing only 0s and 1s, determine if there exists a rectangle within the matrix such that all four corners of the rectangle are 1. If such a rectangle exists, return true; otherwise, return false.

// Example:

// Input: mat[][] =
// [[1, 0, 0, 1, 0],
// [0, 0, 1, 0, 1],
// [0, 0, 0, 1, 0],
// [1, 0, 1, 0, 1]]
// Output: true
// Explanation: Valid corners are at index (1,2), (1,4), (3,2), (3,4)
// Input:mat[][] =
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]
// Output: false
// Explanation: There are no valid corners.
// Constraints:
// 1 <= n, m <= 200
// 0 <= mat[i] <= 1

/**
 * @param {number[][]} mat
 * @returns {boolean}
 */

class Solution {
  ValidCorner(mat) {
    // Use a Set to keep track of column pairs encountered in previous rows
    const columnPairs = new Set();

    // Iterate through each row in the matrix
    for (const row of mat) {
      // Collect all column indices where the value is 1
      const cols = [];
      for (let j = 0; j < row.length; j++) {
        if (row[j] === 1) {
          cols.push(j);
        }
      }

      // Need at least two 1s to form a pair
      if (cols.length < 2) {
        continue;
      }

      // Sort the columns to ensure pairs are ordered (i, j) where i < j
      cols.sort((a, b) => a - b);

      // Check all pairs in the current row against existing pairs
      for (let a = 0; a < cols.length - 1; a++) {
        for (let b = a + 1; b < cols.length; b++) {
          const i = cols[a];
          const j = cols[b];
          const key = `${i},${j}`;

          // If this pair exists in the set, a rectangle is found
          if (columnPairs.has(key)) {
            return true;
          }
        }
      }

      // Add all pairs from the current row to the set
      for (let a = 0; a < cols.length - 1; a++) {
        for (let b = a + 1; b < cols.length; b++) {
          const i = cols[a];
          const j = cols[b];
          const key = `${i},${j}`;
          columnPairs.add(key);
        }
      }
    }

    // No rectangle found after checking all rows
    return false;
  }
}
