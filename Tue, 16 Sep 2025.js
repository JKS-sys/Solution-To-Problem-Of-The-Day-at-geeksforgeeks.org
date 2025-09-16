// Tue, 16 Sep 2025,

// Postfix Evaluation
// Difficulty: MediumAccuracy: 63.04%Submissions: 123K+Points: 4
// You are given an array of strings arr[] that represents a valid arithmetic expression written in Reverse Polish Notation (Postfix Notation). Your task is to evaluate the expression and return an integer representing its value.

// Note: A postfix expression is of the form operand1 operand2 operator (e.g., "a b +").
// And the division operation between two integers always computes the floor value, i.e floor(5 / 3) = 1 and floor(-5 / 3) = -2.
// It is guaranteed that the result of the expression and all intermediate calculations will fit in a 32-bit signed integer.

// Examples:

// Input: arr[] = ["2", "3", "1", "*", "+", "9", "-"]
// Output: -4
// Explanation: If the expression is converted into an infix expression, it will be 2 + (3 * 1) – 9 = 5 – 9 = -4.
// Input: arr[] = ["2", "3", "^", "1", "+"]
// Output: 9
// Explanation: If the expression is converted into an infix expression, it will be 2 ^ 3 + 1 = 8 + 1 = 9.
// Constraints:
// 3 ≤ arr.size() ≤ 10^3
// arr[i] is either an operator: "+", "-", "*", "/" or "^", or an integer in the range [-104, 104]
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  evaluatePostfix(arr) {
    let stack = [];
    for (let token of arr) {
      if (
        token === "+" ||
        token === "-" ||
        token === "*" ||
        token === "/" ||
        token === "^"
      ) {
        let b = stack.pop();
        let a = stack.pop();
        let res;
        switch (token) {
          case "+":
            res = a + b;
            break;
          case "-":
            res = a - b;
            break;
          case "*":
            res = a * b;
            break;
          case "/":
            res = Math.floor(a / b);
            break;
          case "^":
            if (b < 0) {
              if (a === 1) {
                res = 1;
              } else if (a === -1) {
                res = b % 2 === 0 ? 1 : -1;
              } else {
                res = 0;
              }
            } else {
              res = 1;
              for (let j = 0; j < b; j++) {
                res *= a;
              }
            }
            break;
        }
        stack.push(res);
      } else {
        stack.push(parseInt(token));
      }
    }
    return stack[0];
  }
}
