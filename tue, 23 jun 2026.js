class Solution {
  // Returns the sum of squares from 1^2 to n^2
  sumSquares(n) {
    return (n * (n + 1) * (2 * n + 1)) / 6;
  }

  maxPeopleDefeated(p) {
    // Find the maximum n such that sum_{i=1}^{n} i^2 <= p
    // Upper bound estimate: n^3 / 3 <= p  =>  n <= cbrt(3p)
    let low = 0;
    let high = Math.floor(Math.cbrt(3 * p)) + 1; // safe upper bound

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (this.sumSquares(mid) <= p) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    // high is the largest valid n
    return high;
  }
}
