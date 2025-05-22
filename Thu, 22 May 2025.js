// Thu, 22 May 2025,

// Minimum Deletions
// Difficulty: MediumAccuracy: 58.8%Submissions: 58K+Points: 4
// Given a string s, write a program to delete the minimum number of characters from the string so that the resultant string is a palindrome, while maintaining the order of characters.

// Examples:

// Input: s = "aebcbda"
// Output: 2
// Explanation: Remove characters 'e' and 'd'.
// Input: s = "geeksforgeeks"
// Output: 8
// Explanation: To make "geeksforgeeks" a palindrome, the longest palindromic subsequence is "eefee" (length 5). The minimum deletions are:
// 13 (length of s) - 5 = 8.
// Constraints:
// 1 ≤ s.size() ≤ 103

/**
 * @param {string} S
 * @returns {number}
 */

class Solution {
  minDeletions(s) {
    const n = s.length;
    if (n === 0) return 0; // Edge case for empty string

    // Create a DP table to store lengths of longest palindromic subsequence
    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
      dp[i] = new Array(n).fill(0);
      dp[i][i] = 1; // Each single character is a palindrome of length 1
    }

    // Fill the DP table for substrings of length 2 to n
    for (let l = 2; l <= n; l++) {
      // l is the length of the substring
      for (let i = 0; i <= n - l; i++) {
        const j = i + l - 1; // Ending index of the current substring

        if (s[i] === s[j]) {
          // If the first and last characters are the same
          if (l === 2) {
            // Substring of length 2 with same characters
            dp[i][j] = 2;
          } else {
            // Add 2 (for the two characters) and the LPS of the inner substring
            dp[i][j] = 2 + dp[i + 1][j - 1];
          }
        } else {
          // Take the maximum LPS by excluding either the first or last character
          dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
        }
      }
    }

    // The minimal deletions required is total length minus the length of the LPS
    return n - dp[0][n - 1];
  }
}
