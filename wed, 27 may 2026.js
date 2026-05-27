/**
 * @param {string} s - binary string representing rooms with ('1') or without ('0') WiFi
 * @param {number} x - range of each WiFi router
 * @returns {boolean} - true if all rooms are covered, false otherwise
 */
class Solution {
  wifiRange(s, x) {
    let coveredUntil = -1;
    const n = s.length;

    for (let i = 0; i < n; i++) {
      if (s[i] === "1") {
        const start = Math.max(0, i - x);
        const end = Math.min(n - 1, i + x);

        // If there's a gap between the current coverage and the new router's start
        if (start > coveredUntil + 1) {
          return false;
        }

        // Extend the covered range as far right as possible
        coveredUntil = Math.max(coveredUntil, end);
      }
    }

    // Check if the last room is covered
    return coveredUntil === n - 1;
  }
}
