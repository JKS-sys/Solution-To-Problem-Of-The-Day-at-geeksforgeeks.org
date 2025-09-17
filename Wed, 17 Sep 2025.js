// Wed, 17 Sep 2025,

// Decode the string
// Difficulty: MediumAccuracy: 44.28%Submissions: 65K+Points: 4Average Time: 10m
// Given an encoded string s, decode it by expanding the pattern k[substring], where the substring inside brackets is written k times. k is guaranteed to be a positive integer, and encodedString contains only lowercase english alphabets. Return the final decoded string.

// Note: The test cases are generated so that the length of the output string will never exceed 105 .

// Examples:

// Input: s = "3[b2[ca]]"
// Output: "bcacabcacabcaca"
// Explanation:
// Inner substring “2[ca]” breakdown into “caca”.
// Now, new string becomes “3[bcaca]”
// Similarly “3[bcaca]” becomes “bcacabcacabcaca” which is final result.
// Input: s = "3[ab]"
// Output: "ababab"
// Explanation: The substring "ab" is repeated 3 times giving "ababab".
// Constraints:
// 1 ≤ |s| ≤ 10^5
// 1 ≤ k ≤ 100
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  decodedString(s) {
    let stack = [];
    let currentString = "";
    let currentNumber = 0;

    for (let char of s) {
      if (char === "[") {
        // Push the current string and number onto the stack
        stack.push(currentString);
        stack.push(currentNumber);
        // Reset the current string and number
        currentString = "";
        currentNumber = 0;
      } else if (char === "]") {
        // Pop the number and the previous string from the stack
        let num = stack.pop();
        let prevString = stack.pop();
        // Repeat the current string and append it to the previous string
        currentString = prevString + currentString.repeat(num);
      } else if (!isNaN(char)) {
        // Handle multi-digit numbers
        currentNumber = currentNumber * 10 + parseInt(char);
      } else {
        // Append the character to the current string
        currentString += char;
      }
    }

    return currentString;
  }
}
