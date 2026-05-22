/**
 * @param {number[][]} grid
 * @return {number}
 */
class Solution {
  cntOnes(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const queue = [];

    // Enqueue all boundary 1s and mark them as visited (set to 0)
    for (let i = 0; i < n; i++) {
      if (grid[i][0] === 1) {
        grid[i][0] = 0;
        queue.push([i, 0]);
      }
      if (m > 1 && grid[i][m - 1] === 1) {
        grid[i][m - 1] = 0;
        queue.push([i, m - 1]);
      }
    }
    for (let j = 0; j < m; j++) {
      if (grid[0][j] === 1) {
        grid[0][j] = 0;
        queue.push([0, j]);
      }
      if (n > 1 && grid[n - 1][j] === 1) {
        grid[n - 1][j] = 0;
        queue.push([n - 1, j]);
      }
    }

    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    let idx = 0;
    // BFS to mark all 1s connected to the boundary
    while (idx < queue.length) {
      const [r, c] = queue[idx++];
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < n && nc >= 0 && nc < m && grid[nr][nc] === 1) {
          grid[nr][nc] = 0; // mark as visited
          queue.push([nr, nc]);
        }
      }
    }

    // Count remaining 1s (isolated from the boundary)
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 1) count++;
      }
    }
    return count;
  }
}
