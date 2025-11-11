// Tue, 11 Nov 2025,

// Shortest Common Supersequence
// Difficulty: Medium Accuracy: 55.62% Submissions: 135K+ Points: 4
// Given two strings s1 and s2, find the length of the smallest string which has both s1 and s2 as its sub-sequences.
// Note: s1 and s2 can have both uppercase and lowercase English letters.

// Examples:

// Input: s1 = "geek", s2 = "eke"
// Output: 5
// Explanation: String "geeke" has both string "geek" and "eke" as subsequences.
// Input: s1 = "AGGTAB", s2 = "GXTXAYB"
// Output: 9
// Explanation: String "AGXGTXAYB" has both string "AGGTAB" and "GXTXAYB" as subsequences.
// Input: s1 = "geek", s2 = "ek"
// Output: 4
// Explanation: String "geek" has both string "geek" and "ek" as subsequences.
// Constraints:
// 1 ≤ s1.size(), s2.size() ≤ 500
// Expected Complexities
// Time Complexity: O(n * m)
// Auxiliary Space: O(m)

class Solution {
  minSuperSeq(s1, s2) {
    const m = s1.length;
    const n = s2.length;

    let prev = new Array(n + 1).fill(0);
    let curr = new Array(n + 1).fill(0);

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          curr[j] = 1 + prev[j - 1];
        } else {
          curr[j] = Math.max(prev[j], curr[j - 1]);
        }
      }
      [prev, curr] = [curr, prev];
    }

    const lcsLength = prev[n];

    return m + n - lcsLength;
  }
}
