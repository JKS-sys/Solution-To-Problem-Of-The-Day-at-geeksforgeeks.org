// Fri, 08 Aug 2025,

// Longest Prefix Suffix
// Difficulty: HardAccuracy: 27.91%Submissions: 151K+Points: 8
// Given a string s, of lowercase english alphabets, find the length of the longest prefix which is also a suffix.
// Note: Prefix and suffix can be overlapping but they should not be equal to the entire string.

// Examples :

// Input: s = "abab"
// Output: 2
// Explanation: The string "ab" is the longest prefix and suffix.
// Input: s = "aabcdaabc"
// Output: 4
// Explanation: The string "aabc" is the longest prefix and suffix.
// Input: s = "aaaa"
// Output: 3
// Explanation: "aaa" is the longest prefix and suffix.
// Constraints:
// 1 ≤ s.size() ≤ 106
// s contains only lowercase English alphabets.
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
  getLPSLength(s) {
    const n = s.length;
    if (n === 0) return 0;
    let lps = new Array(n).fill(0);
    let len = 0;
    let i = 1;
    while (i < n) {
      if (s[i] === s[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len > 0) {
          len = lps[len - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
    return lps[n - 1];
  }
}
