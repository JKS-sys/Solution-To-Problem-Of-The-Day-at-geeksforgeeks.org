// Thu, 13 Nov 2025,

// Interleaved Strings
// Difficulty: Medium Accuracy: 24.33% Submissions: 104K+ Points: 4 Average Time: 30m

// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
// Interleaving of two strings s1 and s2 is a way to mix their characters to form a new string s3, while maintaining the relative order of characters from s1 and s2. Conditions for interleaving:

// Characters from s1 must appear in the same order in s3 as they are in s1.
// Characters from s2 must appear in the same order in s3 as they are in s2.
// The length of s3 must be equal to the combined length of s1 and s2.
// Examples :

// Input: s1 = "AAB", s2 = "AAC", s3 = "AAAABC",
// Output: true
// Explanation: The string "AAAABC" has all characters of the other two strings and in the same order.
// Input: s1 = "AB", s2 = "C", s3 = "ACB",
// Output: true
// Explanation: s3 has all characters of s1 and s2 and retains order of characters of s1.
// Input: s1 = "YX", s2 = "X", s3 = "XXY"
// Output: false
// Explanation: "XXY " is not interleaved of "YX" and "X". The strings that can be formed are YXX and XYX
// Constraints:
// 1 ≤ s1.length, s2.length ≤ 300
// 1 ≤ s3.length ≤ 600
// Expected Complexities
// Time Complexity: O(n * m)
// Auxiliary Space: O(m)

class Solution {
  isInterleave(s1, s2, s3) {
    const n = s1.length;
    const m = s2.length;
    const k = s3.length;

    if (n + m !== k) {
      return false;
    }

    const memo = new Map();

    const dfs = (i, j, k) => {
      if (k === s3.length) {
        return i === s1.length && j === s2.length;
      }

      const key = `${i},${j}`;
      if (memo.has(key)) {
        return memo.get(key);
      }

      let result = false;

      if (i < s1.length && s1[i] === s3[k]) {
        result = result || dfs(i + 1, j, k + 1);
      }

      if (j < s2.length && s2[j] === s3[k]) {
        result = result || dfs(i, j + 1, k + 1);
      }

      memo.set(key, result);
      return result;
    };

    return dfs(0, 0, 0);
  }
}
