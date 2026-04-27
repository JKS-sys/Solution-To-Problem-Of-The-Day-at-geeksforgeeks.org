class Solution {
  smallestSubstring(s) {
    const n = s.length;
    let left = 0;
    let minLen = Infinity;
    // count of '0','1','2'
    const count = [0, 0, 0];

    for (let right = 0; right < n; right++) {
      const idx = s.charCodeAt(right) - 48; // '0' -> 0, '1' -> 1, '2' -> 2
      count[idx]++;

      // try to shrink the window from left while we still have all three
      while (count[0] > 0 && count[1] > 0 && count[2] > 0) {
        const len = right - left + 1;
        if (len < minLen) minLen = len;
        const leftIdx = s.charCodeAt(left) - 48;
        count[leftIdx]--;
        left++;
      }
    }

    return minLen === Infinity ? -1 : minLen;
  }
}
