/**
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
class Solution {
  isPower(x, y) {
    // If x is 1, the only power of 1 is 1 itself.
    if (x === 1) {
      return y === 1;
    }

    // Repeatedly divide y by x while it's divisible.
    while (y % x === 0) {
      y /= x;
    }

    // If y has been reduced to 1, it was a perfect power of x.
    return y === 1;
  }
}
