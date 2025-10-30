// Thu, 30 Oct 2025,

// Replace O's with X's
// Difficulty: MediumAccuracy: 34.0%Submissions: 125K+Points: 4Average Time: 20m
// You are given a grid[][] of size n*m, where every element is either 'O' or 'X'. You have to replace all 'O' or a group of 'O' with 'X' that are surrounded by 'X'.

// A 'O' (or a set of 'O') is considered to be surrounded by 'X' if there are 'X' at locations just below, just above, just left and just right of it.

// Examples:

// Input:
// grid[][] = [['X', 'X', 'X', 'X'],
//           ['X', 'O', 'X', 'X'],
//           ['X', 'O', 'O', 'X'],
//           ['X', 'O', 'X', 'X'],
//           ['X', 'X', 'O', 'O']]
// Output:
// [['X', 'X', 'X', 'X'],
// ['X', 'X', 'X', 'X'],
// ['X', 'X', 'X', 'X'],
// ['X', 'X', 'X', 'X'],
// ['X', 'X', 'O', 'O']]
// Explanation: We only changed those 'O' that are surrounded by 'X'
// Input:
// grid[][] = [['X', 'O', 'X', 'X'],
//           ['X', 'O', 'X', 'X'],
//           ['X', 'O', 'O', 'X'],
//           ['X', 'O', 'X', 'X'],
//           ['X', 'X', 'O', 'O']]
// Output:
// [['X', 'O', 'X', 'X'],
// ['X', 'O', 'X', 'X'],
// ['X', 'O', 'O', 'X'],
// ['X', 'O', 'X', 'X'],
// ['X', 'X', 'O', 'O']]
// Explanation: There's no 'O' that's surround by 'X'.
// Input:
// grid[][] = [['X', 'X', 'X'],
//           ['X', 'O', 'X'],
//           ['X', 'X', 'X']]
// Output:
// [['X', 'X', 'X'],
// ['X', 'X', 'X'],
// ['X', 'X', 'X']]
// Explanation: There's only one 'O' that's surround by 'X'.
// Constraints:
// 1 ≤ grid.size() ≤ 100
// 1 ≤ grid[0].size() ≤ 100
// Expected Complexities
// Time Complexity: O(n * m)
// Auxiliary Space: O(n * m)

class Solution {
  fill(grid) {
    if (!grid || grid.length === 0) return;

    const n = grid.length;
    const m = grid[0].length;

    for (let j = 0; j < m; j++) {
      if (grid[0][j] === "O") this.dfs(grid, 0, j);
      if (grid[n - 1][j] === "O") this.dfs(grid, n - 1, j);
    }

    for (let i = 0; i < n; i++) {
      if (grid[i][0] === "O") this.dfs(grid, i, 0);
      if (grid[i][m - 1] === "O") this.dfs(grid, i, m - 1);
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === "O") {
          grid[i][j] = "X";
        } else if (grid[i][j] === "#") {
          grid[i][j] = "O";
        }
      }
    }
  }

  dfs(grid, i, j) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] !== "O"
    ) {
      return;
    }

    grid[i][j] = "#";

    this.dfs(grid, i + 1, j);
    this.dfs(grid, i - 1, j);
    this.dfs(grid, i, j + 1);
    this.dfs(grid, i, j - 1);
  }
}
