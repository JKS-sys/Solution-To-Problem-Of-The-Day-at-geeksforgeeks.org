// Thu, 25 Dec 2025,

// POTD question was https://www.geeksforgeeks.org/problems/find-the-peak-element-in-a-2d-matrix/1

// Find the Peak Element in a 2D Matrix
// Difficulty: Medium Accuracy: 39.28% Submissions: 3K+ Points: 4

// Given a 2D matrix mat[][], identify any peak element within the matrix.

// An element is considered a peak if it is greater than or equal to its four immediate neighbors: top, bottom, left, and right. For corner and edge elements, any missing neighbors are treated as having a value of negative infinity.

// Note: A peak element is not necessarily the global maximum, it only needs to satisfy the condition relative to its adjacent elements. Multiple peak elements may exist, return any one of them.
// Note that the driver code will print true if you return the correct position of peak element, else it will print false.

// Examples:

// Input: mat[][] = [[10, 20, 15],
//                 [21, 30, 14],
//                  [7, 16, 32]]
// Output: true
// Explanation: One of the peak element is 30 at index (1, 1), which is greater than or equal to all its valid neighbors: Left = 21, Right = 14, Top = 20, Bottom = 16. So, it satisfies the peak condition. Alternatively, (2, 2) with value 32 also qualifies as a peak.

// Input: mat[][] = [[17, 7],
//                 [11, 10]]
// Output: true
// Explanation: 17 is the only peak element at index (0, 0). Its neighbors are: Right= 7, Bottom = 11. Since 17 is greater than or equal to both (and top/left are out of bounds), it qualifies as a peak element.

// Constraint:
// 1 ≤ n × m ≤ 10^6
// -10^6 ≤ mat[i][j] ≤ 10^6

// Expected Complexities
// Time Complexity: O(n log m)
// Auxiliary Space: O(1)

class Solution {
  findPeakGrid(mat) {
    const n = mat.length;
    const m = mat[0].length;

    let low = 0,
      high = m - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      // find row index of maximum element in column mid

      let maxRow = 0;
      for (let i = 1; i < n; i++) {
        if (mat[i][mid] > mat[maxRow][mid]) {
          maxRow = i;
        }
      }

      // get left and right neighbors (use -Infinity for out of bounds)

      const current = mat[maxRow][mid];
      const left = mid > 0 ? mat[maxRow][mid - 1] : -Infinity;
      const right = mid < m - 1 ? mat[maxRow][mid + 1] : -Infinity;

      // check if current element is a peak

      if (current >= left && current >= right) {
        return [maxRow, mid];
      }

      // move towards the larger neighbor
      else if (left > current) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    // this line should never be reached for valid inputs

    return [0, 0];
  }
}
