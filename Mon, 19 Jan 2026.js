// Mon, 19 Jan 2026,

// POTD question was https://www.geeksforgeeks.org/problems/remove-k-digits/1

// Remove K Digits

// Difficulty: Medium
// Accuracy: 26.8%
// Submissions: 78K+
// Points: 4

// Given a non-negative integer s represented as a string and an integer k, remove exactly k digits from the string so that the resulting number is the smallest possible, while maintaining the relative order of the remaining digits.

// Note: The resulting number must not contain any leading zeros.
// If the resulting number is an empty string after the removal, return "0".

// Examples:

// Input: s = "4325043", k = 3
// Output: 2043
// Explanation: Remove the three digits 4, 3, and 5 to form the new number "2043" which is smallest among all possible removal.

// Input: s = "765028321", k = 5
// Output: 221
// Explanation: Remove the five digits 7, 6, 5, 8 and 3 to form the new number "0221". Since we are not supposed to keep leading 0s, we get "221".

// Constraints:
// 1 ≤ k ≤ |s| ≤ 10^6

// Expected Complexities:
// Time Complexity: O(n + k)
// Auxiliary Space: O(n)

class Solution {
  removeKdig(s, k) {
    // Edge case: if we need to remove all digits

    if (k === s.length) return "0";

    const stack = [];

    for (let i = 0; i < s.length; i++) {
      const digit = s[i];

      // While we can remove digits (k > 0), stack is not empty,

      // and current digit is smaller than the top of stack

      while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
        stack.pop();
        k--;
      }

      stack.push(digit);
    }

    // If we still have digits to remove (when all digits were in non-decreasing order)

    // Remove from the end (right side) as they are the largest

    while (k > 0) {
      stack.pop();
      k--;
    }

    // Build the result string from stack

    let result = "";
    for (let digit of stack) {
      result += digit;
    }

    // Remove leading zeros

    let i = 0;
    while (i < result.length && result[i] === "0") {
      i++;
    }

    result = result.substring(i);

    // If result is empty, return "0"

    return result === "" ? "0" : result;
  }
}
