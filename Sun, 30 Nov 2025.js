// Sun, 30 Nov 2025,

// Count of distinct substrings
// Difficulty: Medium Accuracy: 40.21% Submissions: 29K+ Points: 4
// Given a string s consisting of lowercase English characters, determine the total number of distinct non-empty substrings present in the string. A substring is defined as a contiguous block of characters within the string.

// Two substrings are considered distinct if their contents differ, even if they originate from different positions in the string.

// Note: The empty substring is not counted.

// Examples :

// Input: s = "ababa"
// Output: 9
// Explanation: All distinct substrings of "ababa" are: "a", "b", "ab", "ba", "aba", "bab", "abab", "baba", "ababa".
// Input: s = "aaa"
// Output: 3
// Explanation: The distinct substrings of "aaa" are: "a", "aa", "aaa".
// Constraints:
// 1 ≤ s.size() ≤ 3000
// Expected Complexities
// Time Complexity: O(n^2)
// Auxiliary Space: O(n^2)

class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
  }
}

class Solution {
  countSubs(s) {
    let count = 0;
    const root = new TrieNode();

    for (let i = 0; i < s.length; i++) {
      let current = root;

      for (let j = i; j < s.length; j++) {
        const index = s.charCodeAt(j) - 97;

        if (current.children[index] === null) {
          current.children[index] = new TrieNode();
          count++;
        }

        current = current.children[index];
      }
    }

    return count;
  }
}
