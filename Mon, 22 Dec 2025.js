// Mon, 22 Dec 2025,

// POTD question was https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1

// Row with max 1s
// Difficulty: Medium Accuracy: 33.09% Submissions: 366K+ Points: 4

// You are given a 2D binary array arr[][] consisting of only 1s and 0s. Each row of the array is sorted in non-decreasing order. Your task is to find and return the index of the first row that contains the maximum number of 1s. If no such row exists, return -1.

// Note:

//     The array follows 0-based indexing.
//     The number of rows and columns in the array are denoted by n and m respectively.

// Examples:

// Input: arr[][] = [[0,1,1,1], [0,0,1,1], [1,1,1,1], [0,0,0,0]]
// Output: 2
// Explanation: Row 2 contains the most number of 1s (4 1s). Hence, the output is 2.

// Input: arr[][] = [[0,0], [1,1]]
// Output: 1
// Explanation: Row 1 contains the most number of 1s (2 1s). Hence, the output is 1.

// Input: arr[][] = [[0,0], [0,0]]
// Output: -1
// Explanation: No row contains any 1s, so the output is -1.

// Constraints:
// 1 ≤ arr.size(), arr[i].size() ≤ 10^3
// 0 ≤ arr[i][j] ≤ 1
// Expected Complexities
// Time Complexity: O(n + m)
// Auxiliary Space: O(1)

class Solution {
  rowWithMax1s(arr) {
    const n = arr.length;
    const m = arr[0].length;

    let maxRowIndex = -1;
    let col = m - 1;

    // start from top-right corner

    for (let row = 0; row < n; row++) {
      // move left until we find a 0 or reach start

      while (col >= 0 && arr[row][col] === 1) {
        col--;
        maxRowIndex = row;
      }
    }

    return maxRowIndex;
  }
}
