// Sat, 27 Dec 2025,

// POTD was https://www.geeksforgeeks.org/problems/kth-element-in-matrix/1

// Kth Smallest Element in a Matrix

// Difficulty: Medium
// Accuracy: 61.42%
// Submissions: 79K+
// Points: 4
// Average Time: 35m

// Given a matrix mat of size n*n, where each row and column is sorted in non-decreasing order. Find the kth smallest element in the matrix.

// Examples:

// Input: mat = [[16, 28, 60, 64],
//               [22, 41, 63, 91],
//               [27, 50, 87, 93],
//               [36, 78, 87, 94]]
//        k = 3
// Output: 27
// Explanation: 27 is the 3rd smallest element.

// Input: mat = [[10, 20, 30, 40],
//               [15, 25, 35, 45],
//               [24, 29, 37, 48],
//               [32, 33, 39, 50]]
//        k = 7
// Output: 30
// Explanation: 30 is the 7th smallest element.

// Constraints:
// 1 ≤ n ≤ 500
// 1 ≤ mat[i][j] ≤ 10^4
// 1 ≤ k ≤ n*n

// Expected Complexities:
// Time Complexity: O(n × log(max(mat) - min(mat)))
// Auxiliary Space: O(1)

class Solution {
  kthSmallest(mat, k) {
    const n = mat.length;

    let low = mat[0][0];
    let high = mat[n - 1][n - 1];

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      let count = 0;
      let row = 0;
      let col = n - 1;

      while (row < n && col >= 0) {
        if (mat[row][col] <= mid) {
          count += col + 1;
          row++;
        } else {
          col--;
        }
      }

      if (count < k) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return low;
  }
}
