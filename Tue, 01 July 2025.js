// Tue, 01 July 2025

// Substrings of length k with k-1 distinct elements
// Difficulty: MediumAccuracy: 57.85%Submissions: 25K+Points: 4Average Time: 15m
// Given a string s consisting only lowercase alphabets and an integer k. Find the count of all substrings of length k which have exactly k-1 distinct characters.

// Examples:

// Input: s = "abcc", k = 2
// Output: 1
// Explaination: Possible substring of length k = 2 are,
// ab : 2 distinct characters
// bc : 2 distinct characters
// cc : 1 distinct characters
// Only one valid substring so, count is equal to 1.
// Input: "aabab", k = 3
// Output: 3
// Explaination: Possible substring of length k = 3 are,
// aab : 2 distinct charcters
// aba : 2 distinct characters
// bab : 2 distinct characters
// All these substring are valid so, the total count is equal to 3.
// Constrains:
// 1 ≤ s.size() ≤ 105
// 2 ≤ k ≤ 27
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  substrCount(s, k) {
    const n = s.length;
    if (n < k) return 0;

    const freq = new Array(26).fill(0);
    let distinct = 0;
    let count = 0;

    for (let i = 0; i < k; i++) {
      const index = s.charCodeAt(i) - 97;
      freq[index]++;
      if (freq[index] === 1) {
        distinct++;
      }
    }

    if (distinct === k - 1) {
      count++;
    }

    for (let i = 1; i <= n - k; i++) {
      const leftChar = s[i - 1];
      const leftIndex = leftChar.charCodeAt(0) - 97;
      freq[leftIndex]--;
      if (freq[leftIndex] === 0) {
        distinct--;
      }

      const rightChar = s[i + k - 1];
      const rightIndex = rightChar.charCodeAt(0) - 97;
      freq[rightIndex]++;
      if (freq[rightIndex] === 1) {
        distinct++;
      }

      if (distinct === k - 1) {
        count++;
      }
    }

    return count;
  }
}
