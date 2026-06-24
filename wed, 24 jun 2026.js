class Solution {
  shortestDist(mat) {
    const n = mat.length;
    // Solution matrix to store the path (1 if cell is part of the path)
    const sol = Array.from({ length: n }, () => new Array(n).fill(0));
    // Memoization: cells from which no path to destination exists
    const fail = Array.from({ length: n }, () => new Array(n).fill(false));

    function dfs(i, j) {
      // Reached destination
      if (i === n - 1 && j === n - 1) {
        sol[i][j] = 1;
        return true;
      }

      // Out of bounds or blocked cell
      if (i >= n || j >= n || mat[i][j] === 0) {
        return false;
      }

      // Already known to be a dead end
      if (fail[i][j]) {
        return false;
      }

      const maxJump = mat[i][j];

      // Try jumps in increasing order of length.
      // For the same length, try RIGHT first, then DOWN.
      for (let k = 1; k <= maxJump; k++) {
        // Jump right by k steps
        const nj = j + k;
        if (nj < n && mat[i][nj] !== 0) {
          if (dfs(i, nj)) {
            sol[i][j] = 1;
            return true;
          }
        }

        // Jump down by k steps
        const ni = i + k;
        if (ni < n && mat[ni][j] !== 0) {
          if (dfs(ni, j)) {
            sol[i][j] = 1;
            return true;
          }
        }
      }

      // No valid move from this cell – mark as dead end
      fail[i][j] = true;
      return false;
    }

    if (dfs(0, 0)) {
      return sol;
    } else {
      return [[-1]];
    }
  }
}
