// Tue, 03 Jun 2025,

// Substrings with K Distinct
// Difficulty: MediumAccuracy: 20.46%Submissions: 154K+Points: 4Average Time: 20m
// Given a string consisting of lowercase characters and an integer k, the task is to count all possible substrings (not necessarily distinct) that have exactly k distinct characters.

// Examples :

// Input: s = "abc", k = 2
// Output: 2
// Explanation: Possible substrings are ["ab", "bc"]
// Input: s = "aba", k = 2
// Output: 3
// Explanation: Possible substrings are ["ab", "ba", "aba"]
// Input: s = "aa", k = 1
// Output: 3
// Explanation: Possible substrings are ["a", "a", "aa"]
// Constraints:
// 1 ≤ s.size() ≤ 106
// 1 ≤ k ≤ 26

// User function Template for javascript

/**
 * @param {string} str
 * @param {number} k
 * @return {number}
 */

class Solution {
  atMost(s, k) {
    if (k < 0) return 0;
    const n = s.length;
    let left = 0;
    let distinct = 0;
    let res = 0;
    const freq = new Array(26).fill(0);

    for (let right = 0; right < n; right++) {
      const idx = s.charCodeAt(right) - 97;
      if (freq[idx] === 0) distinct++;
      freq[idx]++;

      while (distinct > k) {
        const leftIdx = s.charCodeAt(left) - 97;
        freq[leftIdx]--;
        if (freq[leftIdx] === 0) distinct--;
        left++;
      }

      res += right - left + 1;
    }
    return res;
  }

  countSubstr(str, k) {
    return this.atMost(str, k) - this.atMost(str, k - 1);
  }
}
