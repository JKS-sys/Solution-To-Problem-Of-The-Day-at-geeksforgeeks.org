// Tue, 10 Jun 2025,

// Exactly one swap
// Difficulty: MediumAccuracy: 46.03%Submissions: 10K+Points: 4
// Given a string s, return the number of distinct strings that can be obtained by exactly one swap of two different indices (i < j).

// Examples:

// Input: s = "geek"
// Output: 6
// Explanation: After one swap, There are only 6 distinct strings possible.(i.e "egek","eegk","geek","geke","gkee" and "keeg")
// Input: s = "aaaa"
// Output: 1
// Explanation: Only one distinct string is possible after one swap(i.e "aaaa")
// Constraints:
// 2 ≤ s.size() ≤ 104

/**
 * @param {string} S
 * @returns {number}
 */
class Solution {
  countStrings(s) {
    const n = s.length;
    const total = (n * (n - 1)) / 2;
    const freq = new Map();
    for (const char of s) {
      freq.set(char, (freq.get(char) || 0) + 1);
    }
    let same = 0;
    let hasDup = false;
    for (const count of freq.values()) {
      if (count > 1) {
        hasDup = true;
        same += Math.floor((count * (count - 1)) / 2);
      }
    }
    return total - same + (hasDup ? 1 : 0);
  }
}
