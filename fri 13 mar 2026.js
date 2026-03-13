class Solution {
  /**
   * @param {string} s
   * @returns {string[]}
   */
  generateIp(s) {
    const result = [];
    const n = s.length;

    // An IP address needs exactly 4 parts, each 1‑3 digits → total length 4‑12
    if (n < 4 || n > 12) return result;

    const backtrack = (start, parts) => {
      // If we already have 4 parts, check if we consumed the whole string
      if (parts.length === 4) {
        if (start === n) {
          result.push(parts.join("."));
        }
        return;
      }

      // Try to take 1, 2 or 3 digits for the next part
      for (let len = 1; len <= 3; len++) {
        if (start + len > n) break; // not enough characters left

        const segment = s.substring(start, start + len);

        // No leading zero unless the part is exactly "0"
        if (len > 1 && segment[0] === "0") continue;

        const num = parseInt(segment, 10);
        if (num <= 255) {
          parts.push(segment);
          backtrack(start + len, parts);
          parts.pop(); // backtrack
        }
      }
    };

    backtrack(0, []);
    return result;
  }
}
