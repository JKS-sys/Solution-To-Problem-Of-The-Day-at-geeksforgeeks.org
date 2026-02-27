class Solution {
  countSquare(mat, x) {
    const n = mat.length;
    const m = mat[0].length;

    // Build 2D prefix sum: prefix[i][j] = sum of mat[0..i-1][0..j-1]
    const prefix = Array.from({ length: n + 1 }, () =>
      new Array(m + 1).fill(0),
    );
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        prefix[i][j] =
          mat[i - 1][j - 1] +
          prefix[i - 1][j] +
          prefix[i][j - 1] -
          prefix[i - 1][j - 1];
      }
    }

    let count = 0;
    // Iterate over all top-left corners
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        // Try all possible square sizes
        const maxSize = Math.min(n - i, m - j);
        for (let k = 1; k <= maxSize; k++) {
          // Sum of square from (i,j) to (i+k-1, j+k-1)
          const sum =
            prefix[i + k][j + k] -
            prefix[i][j + k] -
            prefix[i + k][j] +
            prefix[i][j];
          if (sum === x) {
            count++;
          }
        }
      }
    }
    return count;
  }
}
