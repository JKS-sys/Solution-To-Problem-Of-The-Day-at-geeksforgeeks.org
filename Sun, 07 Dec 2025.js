// Sun, 07 Dec 2025,

// Number of distinct subsequences
// Difficulty: Hard Accuracy: 30.43% Submissions: 70K+ Points: 8
// Given a string str consisting of lowercase english alphabets, the task is to find the number of distinct subsequences of the string
// Note: Answer can be very large, so, ouput will be answer modulo 109+7.

// Examples:

// Input: str = "gfg"
// Output: 7
// Explanation:
// The seven distinct subsequences are "", "g", "f", "gf", "fg", "gg" and "gfg" .
// Input: str = "ggg"
// Output: 4
// Explanation:
// The four distinct subsequences are "", "g", "gg", "ggg".

// Constraints:
// 1 ≤ |str| ≤ 10^5
// str contains lower case English alphabets

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  distinctSubseq(str) {
    const MOD = 1000000007;
    const n = str.length;

    let dp = 1;

    const last = new Array(26).fill(0);

    for (let i = 0; i < n; i++) {
      const index = str.charCodeAt(i) - "a".charCodeAt(0);
      const prev = dp;

      dp = (2 * dp - last[index] + MOD) % MOD;

      last[index] = prev;
    }
    return dp;
  }
}
