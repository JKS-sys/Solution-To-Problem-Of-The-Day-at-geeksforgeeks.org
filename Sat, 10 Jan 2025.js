// Sat, 10 Jan 2025,

// POTD question was https://www.geeksforgeeks.org/problems/count-number-of-substrings4528/1

// Substrings with K Distinct

// Difficulty: Medium
// Accuracy: 20.46%
// Submissions: 181K+
// Points: 4
// Average Time: 20m

// You are given a string s consisting of lowercase characters and an integer k. You have to count all possible substrings that have exactly k distinct characters.

// Examples:

// Input: s = "abc", k = 2
// Output: 2
// Explanation: Possible substrings are ["ab", "bc"]

// Input: s = "aba", k = 2
// Output: 3
// Explanation: Possible substrings are ["ab", "ba", "aba"]

// Input: s = "aa", k = 1
// Output: 3
// Explanation: Possible substrings are ["a", "a", "aa"]

// Constraints:
// 1 ≤ s.size() ≤ 10^6
// 1 ≤ k ≤ 26

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  countSubstr(s, k) {
    // Helper function to count substrings with at most k distinct characters

    const countAtMostK = (k) => {
      if (k === 0) return 0;

      let count = 0;
      let left = 0;
      const freq = new Array(26).fill(0);
      let distinct = 0;

      for (let right = 0; right < s.length; right++) {
        const charIndex = s.charCodeAt(right) - 97; // 'a' is 97

        if (freq[charIndex] === 0) {
          distinct++;
        }
        freq[charIndex]++;

        // Shrink window if we have more than k distinct characters

        while (distinct > k) {
          const leftCharIndex = s.charCodeAt(left) - 97;
          freq[leftCharIndex]--;
          if (freq[leftCharIndex] === 0) {
            distinct--;
          }
          left++;
        }

        // All substrings ending at 'right' with left boundary from 'left' to 'right'

        // have at most k distinct characters

        count += right - left + 1;
      }

      return count;
    };

    // Number of substrings with exactly k distinct characters

    // = (substrings with at most k distinct) - (substrings with at most k-1 distinct)

    return countAtMostK(k) - countAtMostK(k - 1);
  }
}
