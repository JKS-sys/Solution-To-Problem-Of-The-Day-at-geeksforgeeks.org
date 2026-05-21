/**
 * @param {number} n
 * @return {boolean}
 */
class Solution {
  isBitSet(n) {
    // A number has all bits set if it is of the form (2^k - 1)
    // For n > 0, (n & (n + 1)) === 0 iff n is all ones.
    // Explicitly return false for n == 0.
    return n !== 0 && (n & (n + 1)) === 0;
  }
}
