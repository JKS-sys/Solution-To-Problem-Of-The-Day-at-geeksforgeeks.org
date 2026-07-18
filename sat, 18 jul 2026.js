class Solution {
  findWays(matrix, k) {
    const MOD = 1000000007;
    const n = matrix.length;
    const m = matrix[0].length;

    // Count total ones for early exit
    let totalOnes = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === 1) totalOnes++;
      }
    }
    if (totalOnes < k) return 0;
    if (k === 1) return totalOnes > 0 ? 1 : 0;

    // R[i] = rightmost column containing 1 in row i (-1 if none)
    const R = new Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
      for (let j = m - 1; j >= 0; j--) {
        if (matrix[i][j] === 1) {
          R[i] = j;
          break;
        }
      }
    }

    // B[j] = bottommost row containing 1 in column j (-1 if none)
    const B = new Array(m).fill(-1);
    for (let j = 0; j < m; j++) {
      for (let i = n - 1; i >= 0; i--) {
        if (matrix[i][j] === 1) {
          B[j] = i;
          break;
        }
      }
    }

    // minRow[r][c] = smallest i >= r such that row i has a 1 in columns c..m-1
    const minRow = Array.from({ length: n }, () => new Array(m).fill(n));
    for (let c = 0; c < m; c++) {
      let nxt = n;
      for (let r = n - 1; r >= 0; r--) {
        if (R[r] >= c) nxt = r;
        minRow[r][c] = nxt;
      }
    }

    // minCol[r][c] = smallest j >= c such that column j has a 1 in rows r..n-1
    const minCol = Array.from({ length: n }, () => new Array(m).fill(m));
    for (let r = 0; r < n; r++) {
      let nxt = m;
      for (let c = m - 1; c >= 0; c--) {
        if (B[c] >= r) nxt = c;
        minCol[r][c] = nxt;
      }
    }

    // dpPrev[r][c] = ways when 0 cuts remain (final piece must contain a 1)
    let dpPrev = Array.from({ length: n }, () => new Array(m).fill(0));
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < m; c++) {
        dpPrev[r][c] = minRow[r][c] < n ? 1 : 0;
      }
    }

    // DP for t = 1 .. k-1 cuts remaining
    for (let t = 1; t < k; t++) {
      // rowSuffix[c][r] = sum of dpPrev[i][c] for i = r .. n-1
      const rowSuffix = Array.from({ length: m }, () =>
        new Array(n + 1).fill(0),
      );
      for (let c = 0; c < m; c++) {
        for (let r = n - 1; r >= 0; r--) {
          rowSuffix[c][r] = (rowSuffix[c][r + 1] + dpPrev[r][c]) % MOD;
        }
      }

      // colSuffix[r][c] = sum of dpPrev[r][j] for j = c .. m-1
      const colSuffix = Array.from({ length: n }, () =>
        new Array(m + 1).fill(0),
      );
      for (let r = 0; r < n; r++) {
        for (let c = m - 1; c >= 0; c--) {
          colSuffix[r][c] = (colSuffix[r][c + 1] + dpPrev[r][c]) % MOD;
        }
      }

      const dpCurr = Array.from({ length: n }, () => new Array(m).fill(0));
      for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
          let ways = 0;

          // Horizontal cut: remove top piece rows r..r'
          const rMin = minRow[r][c];
          if (rMin <= n - 2) {
            ways = (ways + rowSuffix[c][rMin + 1]) % MOD;
          }

          // Vertical cut: remove left piece cols c..c'
          const cMin = minCol[r][c];
          if (cMin <= m - 2) {
            ways = (ways + colSuffix[r][cMin + 1]) % MOD;
          }

          dpCurr[r][c] = ways;
        }
      }
      dpPrev = dpCurr;
    }

    return dpPrev[0][0];
  }
}
