// Sun, 11 Jan 2025,

// POTD question was https://www.geeksforgeeks.org/problems/minimum-window-subsequence/1

// Minimum Window Subsequence

// Difficulty: Medium
// Accuracy: 49.43%
// Submissions: 17K+
// Points: 4
// Average Time: 45m

// You are given two strings, s1 and s2. Your task is to find the smallest substring in s1 such that s2 appears as a subsequence within that substring.

// The characters of s2 must appear in the same sequence within the substring of s1.
// If there are multiple valid substrings of the same minimum length, return the one that appears first in s1.
// If no such substring exists, return an empty string.

// Note: Both the strings contain only lowercase english letters.

// Examples:

// Input: s1 = "geeksforgeeks", s2 = "eksrg"
// Output: "eksforg"
// Explanation: "eksforg" satisfies all required conditions. s2 is its subsequence and it is smallest and leftmost among all possible valid substrings of s1.

// Input: s1 = "abcdebdde", s2 = "bde"
// Output: "bcde"
// Explanation:  "bcde" and "bdde" are two substring of s1 where s2 occurs as subsequence but "bcde" occur first so we return that.

// Input: s1 = "ad", s2 = "b"
// Output: ""
// Explanation: There is no substring exists.

// Constraints:
// 1 ≤ s1.length ≤ 10^4
// 1 ≤ s2.length ≤ 50

// Expected Complexities:
// Time Complexity: O(n * m)
// Auxiliary Space: O(n * m)

class Solution {
  minWindow(s1, s2) {
    const m = s1.length;
    const n = s2.length;

    // dp[i][j] stores the starting index in s1 of the minimum window

    // ending at position i-1 that contains s2[0..j-1] as subsequence

    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
      dp[i] = new Array(n + 1).fill(-1);
    }

    // Initialize: empty s2 can be found starting at any position

    for (let i = 0; i <= m; i++) {
      dp[i][0] = i;
    }

    // Fill DP table
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          // If characters match, check previous state

          dp[i][j] = dp[i - 1][j - 1];
        } else {
          // If characters don't match, carry over from s1[i-1]

          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    // Find the minimum window

    let minLength = Infinity;
    let start = -1;

    for (let i = 1; i <= m; i++) {
      if (dp[i][n] !== -1) {
        const windowLength = i - dp[i][n];
        if (windowLength < minLength) {
          minLength = windowLength;
          start = dp[i][n];
        }
      }
    }

    return minLength === Infinity ? "" : s1.substring(start, start + minLength);
  }
}
