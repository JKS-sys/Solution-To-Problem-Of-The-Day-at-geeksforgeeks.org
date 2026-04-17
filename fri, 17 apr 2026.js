/**
 * @param {string} s
 * @returns {boolean}
 */
class Solution {
  canFormPalindrome(s) {
    // Array to count frequency of each character (only lowercase letters)
    const freq = new Array(26).fill(0);

    // Count frequencies
    for (let i = 0; i < s.length; i++) {
      freq[s.charCodeAt(i) - 97]++; // 'a'.charCodeAt(0) = 97
    }

    // Count characters with odd frequency
    let oddCount = 0;
    for (let i = 0; i < 26; i++) {
      if (freq[i] % 2 !== 0) {
        oddCount++;
      }
    }

    // A string can form a palindrome if at most one character has odd frequency
    return oddCount <= 1;
  }
}
