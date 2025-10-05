// Sun, 5 Oct 2025,

// Rat in a Maze
// Difficulty: MediumAccuracy: 35.75%Submissions: 377K+Points: 4Average Time: 25m
// Consider a rat placed at position (0, 0) in an n x n square matrix maze[][]. The rat's goal is to reach the destination at position (n-1, n-1). The rat can move in four possible directions: 'U'(up), 'D'(down), 'L' (left), 'R' (right).

// The matrix contains only two possible values:

// 0: A blocked cell through which the rat cannot travel.
// 1: A free cell that the rat can pass through.
// Your task is to find all possible paths the rat can take to reach the destination, starting from (0, 0) and ending at (n-1, n-1), under the condition that the rat cannot revisit any cell along the same path. Furthermore, the rat can only move to adjacent cells that are within the bounds of the matrix and not blocked.
// If no path exists, return an empty list.

// Note: Return the final result vector in lexicographically smallest order.

// Examples:

// Input: maze[][] = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]]
// Output: ["DDRDRR", "DRDDRR"]
// Explanation: The rat can reach the destination at (3, 3) from (0, 0) by two paths - DRDDRR and DDRDRR, when printed in sorted order we get DDRDRR DRDDRR.
// Input: maze[][] = [[1, 0], [1, 0]]
// Output: []
// Explanation: No path exists as the destination cell (1, 1) is blocked.
// Input: maze[][] = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// Output: ["DDRR", "RRDD"]
// Explanation: The rat has two possible paths to reach the destination: DDRR and RRDD.
// Constraints:
// 2 ≤ n ≤ 5
// 0 ≤ maze[i][j] ≤ 1
// Expected Complexities
// Time Complexity: O(4 ^ (n * n))
// Auxiliary Space: O(n * n)

class Solution {
  ratInMaze(maze) {
    const n = maze.length;
    const result = [];

    if (maze[0][0] === 0 || maze[n - 1][n - 1] === 0) {
      return result;
    }

    const visited = Array(n)
      .fill()
      .map(() => Array(n).fill(false));

    this.dfs(maze, 0, 0, visited, "", result, n);

    result.sort();
    return result;
  }

  dfs(maze, i, j, visited, path, result, n) {
    if (i === n - 1 && j === n - 1) {
      result.push(path);
      return;
    }

    visited[i][j] = true;

    const directions = [
      [1, 0, "D"],
      [0, -1, "L"],
      [0, 1, "R"],
      [-1, 0, "U"],
    ];

    for (const [di, dj, move] of directions) {
      const ni = i + di;
      const nj = j + dj;

      if (
        ni >= 0 &&
        ni < n &&
        nj >= 0 &&
        nj < n &&
        maze[ni][nj] === 1 &&
        !visited[ni][nj]
      ) {
        this.dfs(maze, ni, nj, visited, path + move, result, n);
      }
    }

    visited[i][j] = false;
  }
}
