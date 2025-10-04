// Sat, 04 Oct 2025,

// Expression Add Operators
// Difficulty: HardAccuracy: 61.49%Submissions: 22K+Points: 8Average Time: 40m
// Given a string s that contains only digits (0-9) and an integer target, return all possible strings by inserting the binary operator ' + ', ' - ', and/or ' * ' between the digits of s such that the resultant expression evaluates to the target value.

// Note:

// Operands in the returned expressions should not contain leading zeros. For example, 2 + 03 is not allowed whereas 20 + 3 is fine.
// It is allowed to not insert any of the operators.
// Driver code will print the final list of strings in lexicographically smallest order.
// Examples:

// Input: s = "124", target = 9
// Output: ["1+2*4"]
// Explanation: The valid expression that evaluate to 9 is 1 + 2 * 4
// Input: s = "125", target = 7
// Output: ["1*2+5", "12-5"]
// Explanation: The two valid expressions that evaluate to 7 are 1 * 2 + 5 and 12 - 5.
// Input: s = "12", target = 12
// Output: ["12"]
// Explanation: s itself matches the target. No other expressions are possible.
// Input: s = "987612", target = 200
// Output: []
// Explanation: There are no expressions that can be created from "987612" to evaluate to 200.
// Constraints:
// 1 ≤ s.size() ≤ 9
// s consists of only digits (0-9).
// -2^31 ≤ target ≤ 2^31-1
// Expected Complexities
// Time Complexity: O(4 ^ n)
// Auxiliary Space: O(n)

class Solution {
  findExpr(s, target) {
    const result = [];

    const backtrack = (index, path, value, last) => {
      if (index === s.length) {
        if (value === target) {
          result.push(path);
        }
        return;
      }

      for (let i = index; i < s.length; i++) {
        if (i > index && s[index] === "0") break;

        const currentStr = s.substring(index, i + 1);
        const currentNum = parseInt(currentStr);

        if (index === 0) {
          backtrack(i + 1, currentStr, currentNum, currentNum);
        } else {
          backtrack(
            i + 1,
            path + "+" + currentStr,
            value + currentNum,
            currentNum
          );

          backtrack(
            i + 1,
            path + "-" + currentStr,
            value - currentNum,
            -currentNum
          );

          backtrack(
            i + 1,
            path + "*" + currentStr,
            value - last + last * currentNum,
            last * currentNum
          );
        }
      }
    };

    backtrack(0, "", 0, 0);
    return result;
  }
}
