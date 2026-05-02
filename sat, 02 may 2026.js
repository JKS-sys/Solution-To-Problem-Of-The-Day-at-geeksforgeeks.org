/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
  findPosition(n) {
    // Edge case: n must be positive and have exactly one set bit
    if (n <= 0 || (n & (n - 1)) !== 0) {
      return -1;
    }

    // Find position of the only set bit (1-indexed from LSB)
    // Using bit manipulation: position = 32 - number of leading zeros
    return 32 - Math.clz32(n);
  }
}
