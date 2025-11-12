// Wed, 12 Nov 2025,

// Wildcard Pattern Matching
// Difficulty: Medium Accuracy: 31.13% Submissions: 89K+ Points: 4

// Given two strings pat and txt which may be of different sizes, You have to return true if the wildcard pattern i.e. pat, matches with txt else return false.

// The wildcard pattern pat can include the characters '?' and '*'.

// '?' – matches any single character.
// '*' – matches any sequence of characters (including the empty sequence).
// Note: The matching should cover the entire txt (not partial txt).

// Examples:

// Input: txt = "abcde", pat = "a?c*"
// Output: true
// Explanation: '?' matches with 'b' and '*' matches with "de".
// Input: txt = "baaabab", pat = "a*ab"
// Output: false
// Explanation: The pattern starts with a, but the text starts with b, so the pattern does not match the text.
// Input: txt = "abc", pat = "*"
// Output: true
// Explanation: '*' matches with whole text "abc".

// Constraints:
// 1 ≤ txt.size(), pat.size() ≤ 100

// Expected Complexities
// Time Complexity: O(n * m)
// Auxiliary Space: O(n * m)

class Solution {
  wildCard(txt, pat) {
    const n = txt.length;
    const m = pat.length;

    let prev = new Array(m + 1).fill(false);
    let curr = new Array(m + 1).fill(false);

    prev[0] = true;

    for (let j = 1; j <= m; j++) {
      if (pat[j - 1] === "*") {
        prev[j] = prev[j - 1];
      }
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 0; j <= m; j++) {
        if (j === 0) {
          curr[j] = false; // Empty pattern doesn't match non-empty text
        } else if (pat[j - 1] === "?" || pat[j - 1] === txt[i - 1]) {
          curr[j] = prev[j - 1];
        } else if (pat[j - 1] === "*") {
          curr[j] = curr[j - 1] || prev[j];
        } else {
          curr[j] = false;
        }
      }
      [prev, curr] = [curr, prev];
    }

    return prev[m];
  }
}
