// Sun, 21 Sep 2025,

// Max rectangle
// Difficulty: HardAccuracy: 36.43%Submissions: 119K+Points: 8Average Time: 35m
// You are given a 2D binary matrix mat[ ][ ], where each cell contains either 0 or 1. Your task is to find the maximum area of a rectangle that can be formed using only 1's within the matrix.

// Examples:

// Input: mat[][] = [[0, 1, 1, 0],
//                 [1, 1, 1, 1],
//                 [1, 1, 1, 1],
//                 [1, 1, 0, 0]]
// Output: 8
// Explanation: The largest rectangle with only 1’s is from (1, 0) to (2, 3) which is
// [1, 1, 1, 1]
// [1, 1, 1, 1]
// and area is 4 * 2 = 8.
// Input: mat[][] = [[0, 1, 1],
//                 [1, 1, 1],
//                 [0, 1, 1]]
// Output: 6
// Explanation: The largest rectangle with only 1’s is from (0, 1) to (2, 2) which is
// [1, 1]
// [1, 1]
// [1, 1]
// and area is 2 * 3 = 6.
// Constraints:
// 1 ≤ mat.size(), mat[0].size() ≤1000
// 0 ≤ mat[][] ≤1
// Expected Complexities
// Time Complexity: O(n * m)
// Auxiliary Space: O(m)

class Solution {
  maxArea(mat) {
    const rows = mat.length;
    if (rows === 0) return 0;
    const cols = mat[0].length;
    let height = new Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (mat[i][j] === 1) {
          height[j]++;
        } else {
          height[j] = 0;
        }
      }
      let currentMax = this.largestRectangleArea(height);
      if (currentMax > maxArea) {
        maxArea = currentMax;
      }
    }
    return maxArea;
  }

  largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;
    let n = heights.length;

    for (let i = 0; i < n; i++) {
      while (
        stack.length > 0 &&
        heights[stack[stack.length - 1]] >= heights[i]
      ) {
        let topIndex = stack.pop();
        let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, heights[topIndex] * width);
      }
      stack.push(i);
    }

    while (stack.length > 0) {
      let topIndex = stack.pop();
      let width = stack.length === 0 ? n : n - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, heights[topIndex] * width);
    }

    return maxArea;
  }
}
