/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
class Solution {
  countSpanTree(n, edges) {
    // For a single vertex, there is exactly one spanning tree (the trivial one)
    if (n === 1) return 1;

    // Build Laplacian matrix L (n x n)
    let L = Array(n)
      .fill()
      .map(() => Array(n).fill(0));
    for (let [u, v] of edges) {
      L[u][u]++;
      L[v][v]++;
      L[u][v]--;
      L[v][u]--;
    }

    // Remove last row and column to get (n-1) x (n-1) matrix M
    let M = Array(n - 1)
      .fill()
      .map(() => Array(n - 1).fill(0));
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        M[i][j] = L[i][j];
      }
    }

    // Compute determinant of M using Bareiss algorithm (exact integer arithmetic)
    let det = this.bareissDeterminant(M);
    return Number(det);
  }

  /**
   * Compute determinant of an integer matrix using Bareiss algorithm.
   * Returns BigInt determinant.
   */
  bareissDeterminant(matrix) {
    let n = matrix.length;
    // Convert to BigInt for exact arithmetic
    let A = matrix.map((row) => row.map((val) => BigInt(val)));
    let sign = 1n;
    let prevPivot = 1n; // corresponds to 'det' in standard Bareiss

    for (let k = 0; k < n - 1; k++) {
      // Find a pivot row with non-zero element in column k
      let pivotRow = k;
      while (pivotRow < n && A[pivotRow][k] === 0n) {
        pivotRow++;
      }
      if (pivotRow === n) {
        return 0n; // singular matrix
      }
      if (pivotRow !== k) {
        // Swap rows k and pivotRow
        [A[k], A[pivotRow]] = [A[pivotRow], A[k]];
        sign = -sign;
      }

      // Perform Bareiss transformation
      for (let i = k + 1; i < n; i++) {
        for (let j = k + 1; j < n; j++) {
          // A[i][j] = (A[i][j] * A[k][k] - A[i][k] * A[k][j]) / prevPivot
          let numerator = A[i][j] * A[k][k] - A[i][k] * A[k][j];
          A[i][j] = numerator / prevPivot;
        }
      }
      prevPivot = A[k][k];
    }
    // Determinant is sign * A[n-1][n-1] (for n>0)
    let result = sign * (n > 0 ? A[n - 1][n - 1] : 1n);
    return result;
  }
}
