class Solution {
  /**
   * @param {number} x - Max tasks for Machine A
   * @param {number} y - Max tasks for Machine B
   * @param {number[]} a - Profit array for Machine A
   * @param {number[]} b - Profit array for Machine B
   * @returns {number} - Maximum total profit
   */
  maxProfit(x, y, a, b) {
    const n = a.length;
    // base profit if all tasks done by A
    const sumA = a.reduce((acc, val) => acc + val, 0);

    // difference array: extra profit if task is moved to B
    const d = [];
    for (let i = 0; i < n; i++) {
      d.push(b[i] - a[i]);
    }
    // sort descending to pick the best tasks for B
    d.sort((p, q) => q - p);

    // constraints on number of tasks assigned to B
    const L = Math.max(0, n - x); // at least L tasks must be on B
    const R = y; // at most R tasks can be on B

    // count how many diffs are strictly positive
    let pos = 0;
    while (pos < n && d[pos] > 0) pos++;

    // optimal number of tasks to assign to B
    const k = Math.min(R, Math.max(L, pos));

    // add the k largest differences to the base profit
    let extraProfit = 0;
    for (let i = 0; i < k; i++) {
      extraProfit += d[i];
    }

    return sumA + extraProfit;
  }
}
