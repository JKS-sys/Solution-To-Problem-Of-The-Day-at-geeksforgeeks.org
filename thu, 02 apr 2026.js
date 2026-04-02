class Solution {
  /**
   * @param {number} n - number of posts
   * @param {number} k - number of colors
   * @returns {number} - number of valid ways to paint the fence
   */
  countWays(n, k) {
    // Base cases
    if (n === 1) return k;
    if (n === 2) return k * k;

    // For n >= 3:
    // same[i] = ways where last two posts have the same color
    // diff[i] = ways where last two posts have different colors
    let same = k; // ways for 2 posts: both same
    let diff = k * (k - 1); // ways for 2 posts: different colors

    // Iterate from post 3 to n
    for (let i = 3; i <= n; i++) {
      let newSame = diff; // last two same -> previous two must be different
      let newDiff = (same + diff) * (k - 1); // last two different -> previous can be any, pick different color
      same = newSame;
      diff = newDiff;
    }

    // Total ways = same + diff
    return same + diff;
  }
}
