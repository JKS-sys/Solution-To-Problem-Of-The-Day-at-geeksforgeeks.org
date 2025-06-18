// Wed, 18 Jun 2025,

// Find all possible palindromic partitions of a String
// Difficulty: MediumAccuracy: 61.47%Submissions: 21K+Points: 4Average Time: 30m
// Given a string s, find all possible ways to partition it such that every substring in the partition is a palindrome.

// Examples:

// Input: s = "geeks"
// Output: [[g, e, e, k, s], [g, ee, k, s]]
// Explanation: [g, e, e, k, s] and [g, ee, k, s] are the only partitions of "geeks" where each substring is a palindrome.
// Input: s = "abcba"
// Output: [[a, b, c, b, a], [a, bcb, a], [abcba]]
// Explanation: [a, b, c, b, a], [a, bcb, a] and [abcba] are the only partitions of "abcba" where each substring is a palindrome.
// Constraints:
// 1 ≤ s.size() ≤ 20

/**
 * @param {string} S
 * @return {string[][]}
 */
class Solution {
  palinParts(s) {
    let result = [];
    let current = [];

    const isPalindrome = (str, start, end) => {
      while (start < end) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
      }
      return true;
    };

    const backtrack = (start) => {
      if (start === s.length) {
        result.push([...current]);
        return;
      }
      for (let end = start; end < s.length; end++) {
        if (isPalindrome(s, start, end)) {
          current.push(s.substring(start, end + 1));
          backtrack(end + 1);
          current.pop();
        }
      }
    };

    backtrack(0);
    return result;
  }
}
