// Tue, 30 Sep 2025,

// Generate all binary strings
// Difficulty: MediumAccuracy: 63.9%Submissions: 39K+Points: 4Average Time: 20m
// Given an integer n. You need to generate all the binary strings of n characters representing bits.

// Note: Return the strings in  ascending order.

// Examples:

// Input: n = 2
// Output: [00, 01, 10, 11]
// Explanation: As each position can be either 0 or 1, the total possible combinations are 4.
// Input: n = 3
// Output: [000, 001, 010, 011, 100, 101, 110, 111]
// Explanation: As each position can be either 0 or 1, the total possible combinations are 8.
// Constraints:
// 1 ≤ n ≤ 2^0
// Expected Complexities
// Time Complexity: O(n * 2^n)
// Auxiliary Space: O(n)

class Solution {
  binstr(n) {
    const result = [];
    function generate(current) {
      if (current.length === n) {
        result.push(current);
        return;
      }
      generate(current + "0");
      generate(current + "1");
    }
    generate("");
    return result;
  }
}
