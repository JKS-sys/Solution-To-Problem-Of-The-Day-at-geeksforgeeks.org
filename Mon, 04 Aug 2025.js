// Mon, 04 Aug 2025,

// Maximum sum Rectangle
// Difficulty: HardAccuracy: 49.78%Submissions: 41K+Points: 8
// Given a 2D matrix mat[][] with dimensions n×m. Find the maximum possible sum of any submatrix within the given matrix.

// Examples:

// Input: mat[][] = [[1, 2, -1, -4, -20], [-8, -3, 4, 2, 1], [3, 8, 10, 1, 3], [-4, -1, 1, 7, -6]]
// Output: 29
// Explanation: The matrix is as follows and the green rectangle denotes the maximum sum rectangle which is equal to 29.

// Input: mat[][] = [[-1, -2], [-3, -4]]
// Output: -1
// Explanation: Taking only the first cell is the optimal choice.
// Constraints:
// 1 ≤ n, m ≤ 300
// -1000 ≤ mat[i][j] ≤ 1000
// Expected Complexities
// Time Complexity: O(n * m^2)
// Auxiliary Space: O(n)

/**
 * @param {number[][]} mat
 * @return {number}
 */

class Solution {
  maxRectSum(mat) {
    const n = mat.length;
    if (n === 0) return 0;
    const m = mat[0].length;
    let maxSum = -Infinity;

    for (let left = 0; left < m; left++) {
      let temp = new Array(n).fill(0);
      for (let right = left; right < m; right++) {
        for (let i = 0; i < n; i++) {
          temp[i] += mat[i][right];
        }

        let current = temp[0];
        let currentMax = temp[0];
        for (let i = 1; i < n; i++) {
          current = Math.max(temp[i], current + temp[i]);
          currentMax = Math.max(currentMax, current);
        }

        if (currentMax > maxSum) {
          maxSum = currentMax;
        }
      }
    }

    return maxSum;
  }
}
