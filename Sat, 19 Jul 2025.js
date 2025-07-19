// Sat, 19 Jul 2025,

// Count Unique Vowel Strings
// Difficulty: MediumAccuracy: 57.76%Submissions: 1K+Points: 4
// You are given a lowercase string s, determine the total number of distinct strings that can be formed using the following rules:

// Identify all unique vowels (a, e, i, o, u) present in the string.
// For each distinct vowel, choose exactly one of its occurrences from s. If a vowel appears multiple times, each occurrence represents a unique selection choice.
// Generate all possible permutations of the selected vowels. Each unique arrangement counts as a distinct string.
// Return the total number of such distinct strings.

// Examples:

// Input: s = "aeiou"
// Output: 120
// Explanation: Each vowel appears once, so the number of different strings can form is 5! = 120.
// Input: s = "ae"
// Output: 2
// Explanation: Pick a and e, make all orders → "ae", "ea".
// Input: s = "aacidf"
// Output: 4
// Explanation: Vowels in s are 'a' and 'i', Pick each 'a' once with a single 'i', make all orders → "ai", "ia", "ai", "ia".
// Constraints:
// 1 ≤ s.size() ≤ 100
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

// @param {string}
// @return {number}
class Solution {
  vowelCount(s) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const countMap = new Map();
    for (let char of s) {
      if (vowels.has(char)) {
        countMap.set(char, (countMap.get(char) || 0) + 1);
      }
    }
    const distinctCount = countMap.size;
    if (distinctCount === 0) {
      return 0;
    }
    let product = 1;
    for (let count of countMap.values()) {
      product *= count;
    }
    let fact = 1;
    for (let i = 1; i <= distinctCount; i++) {
      fact *= i;
    }
    return product * fact;
  }
}
