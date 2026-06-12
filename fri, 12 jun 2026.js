/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
class Solution {
  kSubstr(s, k) {
    const n = s.length;
    // If the string length is not a multiple of k,
    // it's impossible to form a repetition of a k-length substring.
    if (n % k !== 0) return false;

    const m = n / k; // number of blocks
    // If there is only one block, it's already a repetition.
    if (m === 1) return true;

    const freq = new Map();
    // Count frequencies of each block of length k
    for (let i = 0; i < n; i += k) {
      const block = s.substring(i, i + k);
      freq.set(block, (freq.get(block) || 0) + 1);
    }

    // Check if any block appears at least m-1 times.
    // In that case, we can replace the (at most one) different block.
    for (const count of freq.values()) {
      if (count >= m - 1) return true;
    }

    return false;
  }
}
