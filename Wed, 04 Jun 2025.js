// Wed, 04 Jun 2025,

// LCS of three strings
// Difficulty: MediumAccuracy: 48.52%Submissions: 73K+Points: 4
// Given three strings s1, s2, and s3 containing uppercase letters, lowercase letters, and digits, find the length of longest common sub-sequence in all three given strings.

// Examples:

// Input: s1 = "geeks", s2 = "geeksfor", s3 = "geeksforgeeks"
// Output: 5
// Explanation: "geeks"is the longest common subsequence with length 5.
// Input: s1 = "abcd1e2", s2 = "bc12ea", s3 = "bd1ea"
// Output: 3
// Explanation:  Longest common subsequence is "b1e" i.e. length = 3.
// Constraints:
// 1  ≤  s1.size(), s2.size(), s3.size()  ≤  100

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */

class Solution {
  lcsOf3(s1, s2, s3) {
    const n1 = s1.length;
    const n2 = s2.length;
    const n3 = s3.length;

    let dp = new Array(n1 + 1);
    for (let i = 0; i <= n1; i++) {
      dp[i] = new Array(n2 + 1);
      for (let j = 0; j <= n2; j++) {
        dp[i][j] = new Array(n3 + 1).fill(0);
      }
    }

    for (let i = 1; i <= n1; i++) {
      for (let j = 1; j <= n2; j++) {
        for (let k = 1; k <= n3; k++) {
          if (s1[i - 1] === s2[j - 1] && s1[i - 1] === s3[k - 1]) {
            dp[i][j][k] = dp[i - 1][j - 1][k - 1] + 1;
          } else {
            dp[i][j][k] = Math.max(
              dp[i - 1][j][k],
              dp[i][j - 1][k],
              dp[i][j][k - 1]
            );
          }
        }
      }
    }

    return dp[n1][n2][n3];
  }
}
