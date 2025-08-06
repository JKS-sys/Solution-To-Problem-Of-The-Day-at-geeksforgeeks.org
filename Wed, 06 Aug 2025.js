// Wed, 06 Aug 2025,

// Roman Number to Integer
// Difficulty: EasyAccuracy: 43.31%Submissions: 191K+Points: 2Average Time: 20m
// Given a string s in Roman number format, your task is to convert it to an integer. Various symbols and their values are given below.
// Note: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000

// Examples:

// Input: s = "IX"
// Output: 9
// Explanation: IX is a Roman symbol which represents 10 – 1 = 9.
// Input: s = "XL"
// Output: 40
// Explanation: XL is a Roman symbol which represents 50 – 10 = 40.
// Input: s = "MCMIV"
// Output: 1904
// Explanation: M is 1000, CM is 1000 – 100 = 900, and IV is 4. So we have total as 1000 + 900 + 4 = 1904.
// Constraints:
// 1 ≤ roman number ≤ 3999
// s[i] belongs to [I, V, X, L, C, D, M]
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
  romanToDecimal(s) {
    const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let total = 0;
    let prev = 0;

    for (let i = s.length - 1; i >= 0; i--) {
      const current = map[s[i]];
      if (current < prev) {
        total -= current;
      } else {
        total += current;
      }
      prev = current;
    }

    return total;
  }
}
