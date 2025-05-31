// Sat, 31 May 2025,

// Kth element in Matrix
// Difficulty: MediumAccuracy: 61.42%Submissions: 62K+Points: 4Average Time: 35m
// Given a matrix mat[][] of size n*n, where each row and column is sorted in non-decreasing order. Find the kth smallest element in the matrix.

// Examples:
// Input: n = 4, mat[][] = [[16, 28, 60, 64], [22, 41, 63, 91], [27, 50, 87, 93], [36, 78, 87, 94]], k = 3
// Output: 27
// Explanation: 27 is the 3rd smallest element.
// Input: n = 4, mat[][] = [[10, 20, 30, 40], [15, 25, 35, 45], [24, 29, 37, 48], [32, 33, 39, 50]], k = 7
// Output: 30
// Explanation: 30 is the 7th smallest element.
// Constraints:
// 1 <= n <= 500
// 1 <= mat[i][j] <= 10000
// 1 <= k <= n*n

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @returns {number}
 */

class Solution {
  kthSmallest(matrix, k) {
    const n = matrix.length;
    let low = matrix[0][0];
    let high = matrix[n - 1][n - 1];

    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      let count = this.countLessEqual(matrix, mid);
      if (count < k) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }

  countLessEqual(matrix, mid) {
    const n = matrix.length;
    let count = 0;
    let row = 0;
    let col = n - 1;

    while (row < n && col >= 0) {
      if (matrix[row][col] <= mid) {
        count += col + 1;
        row++;
      } else {
        col--;
      }
    }
    return count;
  }
}
