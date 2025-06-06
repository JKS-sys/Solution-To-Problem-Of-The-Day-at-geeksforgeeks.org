// Fri, 06 Jun 2025,

// Search Pattern (Rabin-Karp Algorithm)
// Difficulty: MediumAccuracy: 34.53%Submissions: 73K+Points: 4Average Time: 20m
// Given two strings:

// A text string in which you want to search.
// A pattern string that you are looking for within the text.
// Return all positions (1-based indexing) where the pattern occurs as a substring in the text. If the pattern does not occur, return an empty list.

// All characters in both strings are lowercase English letters (a to z).

// Examples:

// Input: text = "birthdayboy", pattern = "birth"
// Output: [1]
// Explanation: The string "birth" occurs at index 1 in text.
// Input: text = "geeksforgeeks", pattern = "geek"
// Output: [1, 9]
// Explanation: The string "geek" occurs twice in text, one starts are index 1 and the other at index 9.
// Constraints:
// 1<= text.size() <=5*105
// 1<= pattern.size() <= text.size()

/**
 * @param {string} pat
 * @param {string} txt
 * @returns {number[]}
 */

class Solution {
  search(pat, txt) {
    const n = txt.length;
    const m = pat.length;

    // Quick edge case check
    if (m === 0 || m > n) return [];

    // Build LPS array inline for better performance
    const lps = new Array(m);
    lps[0] = 0;
    let len = 0,
      i = 1;

    // Compute LPS array
    while (i < m) {
      if (pat[i] === pat[len]) {
        lps[i++] = ++len;
      } else if (len) {
        len = lps[len - 1];
      } else {
        lps[i++] = 0;
      }
    }

    // Search using KMP
    const res = [];
    i = 0;
    let j = 0;

    while (i < n) {
      if (pat[j] === txt[i]) {
        i++;
        j++;
      }

      if (j === m) {
        res.push(i - m + 1);
        j = lps[j - 1];
      } else if (i < n && pat[j] !== txt[i]) {
        j ? (j = lps[j - 1]) : i++;
      }
    }

    return res;
  }
}

// Alternative: Simple brute force with early termination (sometimes faster for small patterns)
class SolutionBruteForce {
  search(pat, txt) {
    const n = txt.length;
    const m = pat.length;
    const res = [];

    if (m === 0 || m > n) return res;

    for (let i = 0; i <= n - m; i++) {
      let j;
      for (j = 0; j < m; j++) {
        if (txt[i + j] !== pat[j]) break;
      }
      if (j === m) res.push(i + 1);
    }

    return res;
  }
}

// Alternative: Built-in indexOf method (often highly optimized)
class SolutionBuiltIn {
  search(pat, txt) {
    const res = [];
    let pos = 0;

    while ((pos = txt.indexOf(pat, pos)) !== -1) {
      res.push(pos + 1);
      pos++;
    }

    return res;
  }
}
