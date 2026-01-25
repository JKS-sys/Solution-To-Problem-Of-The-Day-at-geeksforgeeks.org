// Sun, 25 Jan 2026,

// POTD question was https://www.geeksforgeeks.org/problems/valid-number-of-parenthesis/1

// Number of Valid Parentheses

// Difficulty: Medium
// Accuracy: 76.44%
// Submissions: 1K+
// Points: 4
// Average Time: 30m

// You are given a number n, your task is to find the number of all the valid parentheses expressions of that length using only "(" and ")" brackets.

// An input string of parentheses is valid if:
// Open brackets must be closed in correct order.
// Every close bracket has a corresponding open bracket.

// For example - "()()" or "(())" are valid while ")()(" or "))((" are invalid parentheses expressions.

// Examples:

// Input: n = 2
// Output: 1
// Explanation: There is only one possibe valid expressions of length 2 i.e., "()".

// Input: n = 4
// Output: 2
// Explanation: Possibe valid expressions of length 4 are "(())" and "()()".

// Input: n = 6
// Output: 5
// Explanation: Possibe valid expressions of length 6 are "((()))", "(())()", "()(())", "()()()" and "(()())".

// Constraints:
// 1 ≤ n ≤ 20

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  findWays(n) {
    // If n is odd, no valid parentheses can be formed

    if (n % 2 !== 0) return 0;

    // Number of pairs

    const k = n / 2;

    // Calculate Catalan number using formula: C(k) = (2k)! / (k! * (k+1)!)

    // But to avoid overflow, we compute it iteratively

    // Using: C(k) = (2(2k-1)/(k+1)) * C(k-1)

    let catalan = 1;

    for (let i = 1; i <= k; i++) {
      // C(i) = C(i-1) * 2 * (2*i - 1) / (i + 1)

      catalan = (catalan * 2 * (2 * i - 1)) / (i + 1);
    }

    return catalan;
  }
}
