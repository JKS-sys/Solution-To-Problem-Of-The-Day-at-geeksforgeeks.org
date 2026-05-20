/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {boolean}
 */

class Solution {
  isProduct(arr, target) {
    // Convert target to BigInt to handle values up to 10^18 safely
    const targetB = BigInt(target);

    // If target is 0, we just need at least one zero in the array
    // because any number multiplied by 0 gives 0.
    if (targetB === 0n) {
      for (let num of arr) {
        if (num === 0) return true;
      }
      return false;
    }

    const seen = new Set();

    for (let num of arr) {
      const x = BigInt(num);

      // Zero cannot produce a non-zero target
      if (x === 0n) continue;

      // Check if x divides target exactly
      if (targetB % x === 0n) {
        const needed = targetB / x;
        // If the required multiplier was already seen, we found a pair
        if (seen.has(needed)) {
          return true;
        }
      }

      seen.add(x);
    }

    return false;
  }
}
