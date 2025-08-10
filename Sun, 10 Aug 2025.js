// Sun, 10 Aug 2025,

// Palindrome SubStrings
// Difficulty: HardAccuracy: 45.8%Submissions: 48K+Points: 8Average Time: 30m
// Given a string s, count all palindromic sub-strings present in the string. The length of the palindromic sub-string must be greater than or equal to 2.

// Note: A substring is palindromic if it reads the same forwards and backwards.

// Examples:

// Input: s = "abaab"
// Output: 3
// Explanation: All palindromic substrings (of length > 1) are: "aba", "aa", "baab".
// Input: s = "aaa"
// Output: 3
// Explanation: All palindromic substrings (of length > 1) are: "aa", "aa", "aaa".
// Input: s = "abbaeae"
// Output: 4
// Explanation: All palindromic substrings (of length > 1) are: "bb", "abba", "aea", "eae".
// Constraints:
// 2 ≤ s.size() ≤ 5 * 103
// s contains only lowercase english characters
// Expected Complexities
// Time Complexity: O(n^2)
// Auxiliary Space: O(1)

/**
 * @param {string} s
 * @returns {number}
 */
class Solution {
  countPS(s) {
    let n = s.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
      let l = i - 1;
      let r = i + 1;
      while (l >= 0 && r < n && s[l] === s[r]) {
        count++;
        l--;
        r++;
      }
      l = i;
      r = i + 1;
      while (l >= 0 && r < n && s[l] === s[r]) {
        count++;
        l--;
        r++;
      }
    }
    return count;
  }
}
