// Thu, 03 Jul 2025,

// Longest Substring with K Uniques
// Difficulty: MediumAccuracy: 34.65%Submissions: 201K+Points: 4
// You are given a string s consisting only lowercase alphabets and an integer k. Your task is to find the length of the longest substring that contains exactly k distinct characters.

// Note : If no such substring exists, return -1.

// Examples:

// Input: s = "aabacbebebe", k = 3
// Output: 7
// Explanation: The longest substring with exactly 3 distinct characters is "cbebebe", which includes 'c', 'b', and 'e'.
// Input: s = "aaaa", k = 2
// Output: -1
// Explanation: There's no substring with 2 distinct characters.
// Input: s = "aabaaab", k = 2
// Output: 7
// Explanation: The entire string "aabaaab" has exactly 2 unique characters 'a' and 'b', making it the longest valid substring.
// Constraints:
// 1 ≤ s.size() ≤ 105
// 1 ≤ k ≤ 26
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
class Solution {
  longestKSubstr(s, k) {
    let left = 0;
    let distinctCount = 0;
    let maxLen = -1;
    let charMap = new Map();

    for (let right = 0; right < s.length; right++) {
      // Add the current character at the right pointer to the map
      if (!charMap.has(s[right])) {
        charMap.set(s[right], 1);
        distinctCount++;
      } else {
        charMap.set(s[right], charMap.get(s[right]) + 1);
      }

      // If distinct characters exceed k, shrink the window from the left
      while (distinctCount > k && left <= right) {
        // Reduce the count of the character at the left pointer
        const currentCount = charMap.get(s[left]);
        charMap.set(s[left], currentCount - 1);

        // If the count drops to zero, remove the character and decrement distinctCount
        if (currentCount - 1 === 0) {
          distinctCount--;
          charMap.delete(s[left]);
        }
        left++;
      }

      // After adjusting the window, if distinct characters are exactly k, update max length
      if (distinctCount === k) {
        const currentLength = right - left + 1;
        if (currentLength > maxLen) {
          maxLen = currentLength;
        }
      }
    }

    return maxLen;
  }
}
