// Mon, 14 Jul 2025,

// Cutting Binary String
// Difficulty: MediumAccuracy: 49.71%Submissions: 31K+Points: 4
// You are given a binary string s consisting only of characters '0' and '1'. Your task is to split this string into the minimum number of non-empty substrings such that:

// Each substring represents a power of 5 in decimal (e.g., 1, 5, 25, 125, ...).
// No substring should have leading zeros.
// Return the minimum number of such pieces the string can be divided into.
// Note: If it is not possible to split the string in this way, return -1.

// Examples:

// Input: s = "101101101"
// Output: 3
// Explanation: The string can be split into three substrings: "101", "101", and "101", each of which is a power of 5 with no leading zeros.
// Input: s = "1111101"
// Output: 1
// Explanation: The string can be split into one binary string "1111101" which is 125 in decimal and a power of 5 with no leading zeros.
// Input: s = "00000"
// Output: -1
// Explanation: There is no substring that can be split into power of 5.
// Constraints:
// 1 ≤ s.size() ≤ 30
// Expected Complexities
// Time Complexity: O(n^2)
// Auxiliary Space: O(n)

/**
 * @param {string} s
 * @returns {number}
 */
class Solution {
  cuts(s) {
    const maxVal = Math.pow(2, 30);
    const powerSet = new Set();
    let p = 1;
    let maxLen = 0;
    while (p <= maxVal) {
      const binStr = p.toString(2);
      powerSet.add(binStr);
      if (binStr.length > maxLen) {
        maxLen = binStr.length;
      }
      p *= 5;
    }

    const n = s.length;
    const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
      for (let j = i - 1; j >= 0; j--) {
        const len = i - j;
        if (len > maxLen) {
          break;
        }
        if (s[j] === "0") {
          continue;
        }
        const substr = s.substring(j, i);
        if (powerSet.has(substr)) {
          if (dp[j] !== Number.MAX_SAFE_INTEGER) {
            dp[i] = Math.min(dp[i], dp[j] + 1);
          }
        }
      }
    }

    return dp[n] === Number.MAX_SAFE_INTEGER ? -1 : dp[n];
  }
}
