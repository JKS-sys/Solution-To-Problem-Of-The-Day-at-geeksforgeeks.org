class Solution {
  minWindow(s, p) {
    // If pattern is longer than string, impossible
    if (s.length < p.length) return "";

    // Frequency of characters in p (only lowercase letters)
    const pCount = new Array(26).fill(0);
    for (let ch of p) {
      pCount[ch.charCodeAt(0) - 97]++;
    }

    // Number of distinct characters needed
    let required = 0;
    for (let cnt of pCount) {
      if (cnt > 0) required++;
    }

    // Sliding window
    const windowCount = new Array(26).fill(0);
    let left = 0,
      right = 0;
    let formed = 0; // how many distinct characters are satisfied
    let ans = [Infinity, 0, 0]; // [length, start, end]

    while (right < s.length) {
      // Add character at 'right' to the window
      const idxRight = s.charCodeAt(right) - 97;
      windowCount[idxRight]++;
      if (windowCount[idxRight] === pCount[idxRight]) {
        formed++;
      }

      // Try to shrink the window from the left while it is still valid
      while (left <= right && formed === required) {
        // Update answer if this window is smaller
        const curLen = right - left + 1;
        if (curLen < ans[0]) {
          ans[0] = curLen;
          ans[1] = left;
          ans[2] = right;
        }

        // Remove character at 'left' from the window
        const idxLeft = s.charCodeAt(left) - 97;
        windowCount[idxLeft]--;
        if (windowCount[idxLeft] < pCount[idxLeft]) {
          formed--;
        }
        left++;
      }

      right++;
    }

    // If no window found
    if (ans[0] === Infinity) return "";

    // Return the smallest window (substring)
    return s.substring(ans[1], ans[2] + 1);
  }
}
