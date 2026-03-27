class Solution {
  /**
   * @param {number[][]} grid
   * @returns {number}
   */
  maxChocolate(grid) {
    const n = grid.length;
    const m = grid[0].length;

    // dpPrev[c1][c2] = max chocolates up to previous row with robot1 at c1, robot2 at c2
    let dpPrev = Array.from({ length: m }, () => Array(m).fill(-Infinity));

    // Initial positions on row 0
    const start1 = 0;
    const start2 = m - 1;
    dpPrev[start1][start2] =
      grid[0][start1] + (start1 === start2 ? 0 : grid[0][start2]);

    // Process rows 1 to n-1
    for (let row = 1; row < n; row++) {
      let dpCurr = Array.from({ length: m }, () => Array(m).fill(-Infinity));

      for (let c1 = 0; c1 < m; c1++) {
        for (let c2 = 0; c2 < m; c2++) {
          const currentValue = grid[row][c1] + (c1 === c2 ? 0 : grid[row][c2]);

          // Try all 9 possible previous positions (from previous row)
          for (let d1 = -1; d1 <= 1; d1++) {
            const p1 = c1 + d1;
            if (p1 < 0 || p1 >= m) continue;

            for (let d2 = -1; d2 <= 1; d2++) {
              const p2 = c2 + d2;
              if (p2 < 0 || p2 >= m) continue;

              if (dpPrev[p1][p2] !== -Infinity) {
                const total = dpPrev[p1][p2] + currentValue;
                if (total > dpCurr[c1][c2]) {
                  dpCurr[c1][c2] = total;
                }
              }
            }
          }
        }
      }

      dpPrev = dpCurr;
    }

    // Find the maximum among all positions on the last row
    let ans = 0;
    for (let c1 = 0; c1 < m; c1++) {
      for (let c2 = 0; c2 < m; c2++) {
        if (dpPrev[c1][c2] > ans) ans = dpPrev[c1][c2];
      }
    }
    return ans;
  }
}
