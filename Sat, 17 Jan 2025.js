// Sat, 17 Jan 2025,

// POTD question was https://www.geeksforgeeks.org/problems/expression-contains-redundant-bracket-or-not/1

// Expression Contains Redundant Bracket or Not

// Difficulty: Medium
// Accuracy: 48.71%
// Submissions: 35K+
// Points: 4

// Given a string of balanced expression s, check if it contains a redundant parenthesis or not. A set of parenthesis are redundant if the same sub-expression is surrounded by unnecessary or multiple brackets.

// Note: Expression may contain + , - , *, and / operators. Given expression is valid and there are no white spaces present.

// Examples:

// Input: s = "((a+b))"
// Output: true
// Explanation: ((a+b)) can reduced to (a+b).

// Input: s = "(a+(b)/c)"
// Output: true
// Explanation: (a+(b)/c) can reduced to (a+b/c) because b is surrounded by () which is redundant.

// Input: s = "(a+b+(c+d))"
// Output: false
// Explanation:(a+b+(c+d)) doesn't have any redundant or multiple brackets.

// Constraints:
// 1 ≤ |s| ≤ 10^5

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  checkRedundancy(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
      let ch = s[i];

      if (ch !== ")") {
        stack.push(ch);
      } else {
        let hasOperator = false;

        while (stack.length > 0 && stack[stack.length - 1] !== "(") {
          let top = stack.pop();

          if (top === "+" || top === "-" || top === "*" || top === "/") {
            hasOperator = true;
          }
        }

        stack.pop();

        if (!hasOperator) {
          return true;
        }
      }
    }

    while (stack.length > 0) {
      if (stack.pop() === "(") {
        return true;
      }
    }

    return false;
  }
}
