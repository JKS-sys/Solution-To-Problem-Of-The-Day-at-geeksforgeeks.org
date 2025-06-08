// Sun, 08 Jun 2025,

// Sum-string
// Difficulty: HardAccuracy: 50.56%Submissions: 34K+Points: 8
// Given a string s consisting of digits, determine whether it can be classified as a sum-string.

// A sum-string is a string that can be split into two or more non-empty substrings such that:

// The rightmost substring is equal to the sum of the two substrings immediately before it (interpreted as integers).

// This condition must apply recursively to the substrings before it.

// The rightmost substring (and any number in the sum) must not contain leading zeroes, unless the number is exactly '0'.
// Examples:

// Input: s = "12243660"
// Output: true
// Explanation: The string can be split as {"12", "24", "36", "60"} where each number is the sum of the two before it:
// 24 = 12 + 12, 36 = 12 + 24, and 60 = 24 + 36. Hence, it is a sum-string.
// Input: s = "1111112223"
// Output: true
// Explanation: Split the string as {"1", "111", "112", "223"}, where:
// 112 = 1 + 111 and 223 = 111 + 112. Hence, it follows the sum-string rule.
// Input: s = "123456"
// Output: false
// Explanation: There is no valid split of the string such that each part satisfies the sum-string property recursively.
// Constraints:
// 1 <= s.size() <= 100
// String consists of characters from '0' to '9'.

class Solution {
  isSumString(s) {
    const n = s.length;
    if (n < 3) return false;

    const check = (prev1, prev2, rem) => {
      if (rem === "") return true;
      let next;
      try {
        next = (BigInt(prev1) + BigInt(prev2)).toString();
      } catch (e) {
        return false;
      }
      if (rem.startsWith(next)) {
        return check(prev2, next, rem.substring(next.length));
      }
      return false;
    };

    for (let i = 1; i < n; i++) {
      const a = s.substring(0, i);
      if (a[0] === "0" && a.length > 1) continue;

      for (let j = i + 1; j < n; j++) {
        const b = s.substring(i, j);
        if (b[0] === "0" && b.length > 1) continue;

        const rem = s.substring(j);
        if (check(a, b, rem)) {
          return true;
        }
      }
    }
    return false;
  }
}
