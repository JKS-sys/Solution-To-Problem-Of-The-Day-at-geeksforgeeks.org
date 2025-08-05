// Tue, 05 Aug 2025,

// Palindrome Sentence
// Difficulty: EasyAccuracy: 50.04%Submissions: 25K+Points: 2
// Given a single string s, the task is to check if it is a palindrome sentence or not.
// A palindrome sentence is a sequence of characters, such as word, phrase, or series of symbols that reads the same backward as forward after converting all uppercase letters to lowercase and removing all non-alphanumeric characters (including spaces and punctuation).

// Examples:

// Input: s = "Too hot to hoot"
// Output: true
// Explanation: If we remove all non-alphanumeric characters and convert all uppercase letters to lowercase, string s will become "toohottohoot" which is a palindrome.
// Input: s = "Abc 012..## 10cbA"
// Output: true
// Explanation: If we remove all non-alphanumeric characters and convert all uppercase letters to lowercase, string s will become "abc01210cba" which is a palindrome.
// Input: s = "ABC $. def01ASDF"
// Output: false
// Explanation: The processed string becomes "abcdef01asdf", which is not a palindrome.
// Constraints:
// 1 ≤ s.length() ≤ 106
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

/**
 * @param {string} s
 * @returns {boolean}
 */
class Solution {
  isPalinSent(s) {
    const isAlphaNum = (c) => {
      return (
        (c >= "a" && c <= "z") ||
        (c >= "A" && c <= "Z") ||
        (c >= "0" && c <= "9")
      );
    };

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      while (left < right && !isAlphaNum(s[left])) {
        left++;
      }
      while (left < right && !isAlphaNum(s[right])) {
        right--;
      }

      if (left < right) {
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
          return false;
        }
        left++;
        right--;
      }
    }

    return true;
  }
}
