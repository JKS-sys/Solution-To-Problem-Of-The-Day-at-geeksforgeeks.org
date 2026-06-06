class Solution {
  /**
   * @param {number} n
   * @param {number} m
   * @returns {number}
   */
  numOfWays(n, m) {
    // Total ways to place two distinct knights on different squares
    const totalCells = n * m;
    const totalPlacements = totalCells * (totalCells - 1);

    // Number of ways the knights can attack each other (ordered pairs)
    // Knight moves consist of two types of L-shapes:
    // (2,1) type and (1,2) type. Each has 4 symmetric directions.
    const a = Math.max(0, n - 2) * Math.max(0, m - 1);
    const b = Math.max(0, n - 1) * Math.max(0, m - 2);
    const attackingPairs = 4 * (a + b);

    return totalPlacements - attackingPairs;
  }
}
