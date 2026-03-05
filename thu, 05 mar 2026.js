class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @returns {number}
   */
  longestKSubstr(s, k) {
    const n = s.length;
    if (n === 0 || k === 0) return -1; // edge cases, though k>=1 by constraints

    const freq = new Map(); // character -> frequency in current window
    let left = 0;
    let maxLen = -1;

    for (let right = 0; right < n; right++) {
      // add current character to window
      const ch = s[right];
      freq.set(ch, (freq.get(ch) || 0) + 1);

      // shrink window until distinct count <= k
      while (freq.size > k) {
        const leftCh = s[left];
        freq.set(leftCh, freq.get(leftCh) - 1);
        if (freq.get(leftCh) === 0) {
          freq.delete(leftCh);
        }
        left++;
      }

      // if we have exactly k distinct characters, update answer
      if (freq.size === k) {
        maxLen = Math.max(maxLen, right - left + 1);
      }
    }

    return maxLen;
  }
}
