/**
 * @param {number} level
 * @param {number} pos
 * @return {string}
 */
class Solution {
  profession(level, pos) {
    // The profession flips every time we move to a right child.
    // In the path from root (level 1, position 1) to the target node,
    // a right move occurs exactly when the corresponding bit in (pos-1) is 1.
    let n = pos - 1;
    let flips = 0;

    // Count set bits in (pos - 1)
    while (n > 0) {
      flips += n & 1;
      n >>= 1;
    }

    // Even flips -> Engineer, odd flips -> Doctor
    return flips % 2 === 0 ? "Engineer" : "Doctor";
  }
}
