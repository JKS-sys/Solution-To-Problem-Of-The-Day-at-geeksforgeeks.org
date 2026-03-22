class Solution {
  /**
   * @param {number[][]} mat
   * @returns {number}
   */
  orangesRot(mat) {
    const rows = mat.length;
    const cols = mat[0].length;

    // Queue for BFS (stores [row, col] of rotten oranges)
    const queue = [];
    let freshCount = 0;

    // Initialize: collect all rotten oranges and count fresh oranges
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (mat[i][j] === 2) {
          queue.push([i, j]);
        } else if (mat[i][j] === 1) {
          freshCount++;
        }
      }
    }

    // If no fresh oranges, no time needed
    if (freshCount === 0) return 0;

    // Directions: up, down, left, right
    const dirs = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    let time = -1; // will be incremented for each BFS level

    while (queue.length > 0) {
      time++;
      const levelSize = queue.length;
      for (let i = 0; i < levelSize; i++) {
        const [x, y] = queue.shift();
        for (const [dx, dy] of dirs) {
          const nx = x + dx;
          const ny = y + dy;
          if (
            nx >= 0 &&
            nx < rows &&
            ny >= 0 &&
            ny < cols &&
            mat[nx][ny] === 1
          ) {
            // Rot the fresh orange
            mat[nx][ny] = 2;
            freshCount--;
            queue.push([nx, ny]);
          }
        }
      }
    }

    // If all fresh oranges are rotten, return time; else -1
    return freshCount === 0 ? time : -1;
  }
}
