class Solution {
  exitPoint(mat) {
    const n = mat.length;
    const m = mat[0].length;
    // Directions: 0 = right, 1 = down, 2 = left, 3 = up
    const dirs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    let i = 0,
      j = 0,
      dir = 0;

    while (true) {
      // If current cell is 1, turn right and mark it as 0
      if (mat[i][j] === 1) {
        mat[i][j] = 0;
        dir = (dir + 1) % 4;
      }

      // Next cell coordinates
      const ni = i + dirs[dir][0];
      const nj = j + dirs[dir][1];

      // If next step takes us out of the matrix, current cell is exit point
      if (ni < 0 || ni >= n || nj < 0 || nj >= m) {
        return [i, j];
      }

      // Move to next cell
      i = ni;
      j = nj;
    }
  }
}
