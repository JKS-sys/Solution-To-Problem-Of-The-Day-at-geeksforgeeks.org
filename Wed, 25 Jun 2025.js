// Wed, 25 Jun 2025,

// Check if frequencies can be equal
// Difficulty: MediumAccuracy: 16.67%Submissions: 122K+Points: 4
// Given a string s consisting only lowercase alphabetic characters, check whether it is possible to remove at most one character such that the  frequency of each distinct character in the string becomes same. Return true if it is possible; otherwise, return false.

// Examples:

// Input: s = "xyyz"
// Output: true
// Explanation: Removing one 'y' will make frequency of each distinct character to be 1.
// Input: s = "xyyzz"
// Output: true
// Explanation: Removing one 'x' will make frequency of each distinct character to be 2.
// Input: s = "xxxxyyzz"
// Output: false
// Explanation: Frequency can not be made same by removing at most one character.
// Constraints:
// 1 ≤ s.size() ≤ 105

/**
 * @param {string} s
 * @return {boolean}
 */
class Solution {
  sameFreq(s) {
    let charFreq = new Map();
    for (let char of s) {
      charFreq.set(char, (charFreq.get(char) || 0) + 1);
    }

    let countMap = new Map();
    for (let count of charFreq.values()) {
      countMap.set(count, (countMap.get(count) || 0) + 1);
    }

    if (countMap.size === 1) {
      return true;
    }

    if (countMap.size > 2) {
      return false;
    }

    let keys = Array.from(countMap.keys());
    let minKey = Math.min(...keys);
    let maxKey = Math.max(...keys);

    if (maxKey - minKey === 1 && countMap.get(maxKey) === 1) {
      return true;
    }

    if (minKey === 1 && countMap.get(minKey) === 1) {
      return true;
    }

    return false;
  }
}
