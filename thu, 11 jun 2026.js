class Solution {
  findIndex(s) {
    // Count total closing brackets in the string
    let totalClose = 0;
    for (let ch of s) {
      if (ch === ")") totalClose++;
    }

    let open = 0;
    let close = totalClose;

    // Check split at index 0
    if (open === close) return 0;

    // Iterate over each character, moving it from the right part to the left part
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
        open++;
      } else {
        close--;
      }
      // After moving s[i], the split point is i + 1
      if (open === close) {
        return i + 1;
      }
    }

    // Fallback (should not be reached as k = n is checked in the loop)
    return s.length;
  }
}
