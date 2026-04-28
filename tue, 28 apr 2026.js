/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

class Solution {
  longestSubstr(s, k) {
    // frequency array for 26 uppercase English letters
    const counts = new Array(26).fill(0);
    let maxFreq = 0; // max frequency of any single character in the current window
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
      // expand window to the right
      const idx = s.charCodeAt(right) - 65; // 'A' is 65
      counts[idx]++;
      maxFreq = Math.max(maxFreq, counts[idx]);

      // if the window is invalid (needs more than k changes), shrink from the left
      // note: even if maxFreq is stale (character with maxFreq left the window),
      // this condition safely shrinks the window without affecting the final answer
      while (right - left + 1 - maxFreq > k) {
        const leftIdx = s.charCodeAt(left) - 65;
        counts[leftIdx]--;
        left++;
      }

      // update the longest valid window length seen so far
      maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
  }
}
