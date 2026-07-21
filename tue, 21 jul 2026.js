/**
 * @param {string} s
 * @return {number}
 */
class Solution {
  maxIndexDifference(s) {
    const n = s.length;
    // bestReach[c] = maximum ending index reachable from some occurrence
    // of character c ('a'=0, ..., 'z'=25) that we have seen so far (to the right)
    const bestReach = new Array(26).fill(-1);
    let maxDiff = -1;

    // Scan from right to left
    for (let i = n - 1; i >= 0; i--) {
      const ch = s.charCodeAt(i) - 97; // 0 for 'a', 25 for 'z'
      let dp; // maximum ending index reachable starting from index i

      if (ch === 25) {
        // 'z' has no next character
        dp = i;
      } else {
        const nextBest = bestReach[ch + 1];
        dp = nextBest !== -1 ? nextBest : i;
      }

      // Update best reach for the current character
      if (dp > bestReach[ch]) {
        bestReach[ch] = dp;
      }

      // If this is 'a', update the maximum difference
      if (ch === 0) {
        const diff = dp - i;
        if (diff > maxDiff) {
          maxDiff = diff;
        }
      }
    }

    return maxDiff;
  }
}
