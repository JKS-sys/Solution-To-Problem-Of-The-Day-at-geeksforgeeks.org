// Fri, 29 Aug 2025,

// Smallest window containing all characters
// Difficulty: HardAccuracy: 30.19%Submissions: 183K+Points: 8Average Time: 30m
// Given two strings s and p. Find the smallest substring in s consisting of all the characters (including duplicates) of the string p. Return empty string in case no such substring is present.
// If there are multiple such substring of the same length found, return the one with the least starting index.

// Examples:

// Input: s = "timetopractice", p = "toc"
// Output: "toprac"
// Explanation: "toprac" is the smallest substring in which "toc" can be found.
// Input: s = "zoomlazapzo", p = "oza"
// Output: "apzo"
// Explanation: "apzo" is the smallest substring in which "oza" can be found.
// Input: s = "zoom", p = "zooe"
// Output: ""
// Explanation: No substring is present containing all characters of p.
// Constraints:
// 1 ≤ s.length(), p.length() ≤ 106
// s, p consists of lowercase english letters
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

/**
 * @param {string} s
 * @param {string} p
 * @return {string}
 **/

class Solution {
  smallestWindow(s, p) {
    if (p.length > s.length) return "";
    const hash = new Array(26).fill(0);
    const a = "a".charCodeAt(0);
    for (let i = 0; i < p.length; i++) {
      const index = p.charCodeAt(i) - a;
      hash[index]++;
    }

    let count = 0;
    let left = 0;
    let minLen = Infinity;
    let minStart = 0;

    for (let right = 0; right < s.length; right++) {
      const rightChar = s[right];
      const rightIndex = rightChar.charCodeAt(0) - a;
      hash[rightIndex]--;
      if (hash[rightIndex] >= 0) {
        count++;
      }

      while (count === p.length) {
        if (right - left + 1 < minLen) {
          minLen = right - left + 1;
          minStart = left;
        }
        const leftChar = s[left];
        const leftIndex = leftChar.charCodeAt(0) - a;
        hash[leftIndex]++;
        if (hash[leftIndex] > 0) {
          count--;
        }
        left++;
      }
    }

    if (minLen === Infinity) return "";
    return s.substring(minStart, minStart + minLen);
  }
}
