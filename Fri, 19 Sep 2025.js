// Fri, 19 Sep 2025,

// Min Add to Make Parentheses Valid
// Difficulty: MediumAccuracy: 73.56%Submissions: 2K+Points: 4
// You are given a string s consisting only of the characters '(' and ')'. Your task is to determine the minimum number of parentheses (either '(' or ')') that must be inserted at any positions to make the string s a valid parentheses string.

// A parentheses string is considered valid if:

// Every opening parenthesis '(' has a corresponding closing parenthesis ')'.
// Every closing parenthesis ')' has a corresponding opening parenthesis '('.
// Parentheses are properly nested.
// Examples:

// Input: s = "(()("
// Output: 2
// Explanation: There are two unmatched '(' at the end, so we need to add two ')' to make the string valid.
// Input: s = ")))"
// Output: 3
// Explanation: Three '(' need to be added at the start to make the string valid.
// Input: s = ")()()"
// Output: 1
// Explanation: The very first ')' is unmatched, so we need to add one '(' at the beginning.
// Constraints:
// 1 ≤ s.size() ≤ 105
// s[i] ∈ { '(' , ')' }
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  minParentheses(s) {
    let additions = 0;
    let balance = 0;

    for (let char of s) {
      if (char === "(") {
        balance++;
      } else {
        balance--;
      }

      if (balance < 0) {
        additions++;
        balance = 0;
      }
    }

    return additions + balance;
  }
}
