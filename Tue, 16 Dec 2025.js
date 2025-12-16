// Tue, 16 Dec 2025,

// POTD question was https://www.geeksforgeeks.org/problems/check-if-strings-are-rotations-of-each-other-or-not-1587115620/1

// Strings Rotations of Each Other
// Difficulty: Medium Accuracy: 43.83% Submissions: 328K+ Points: 4 Average Time: 15m
// You are given two strings s1 and s2, of equal lengths. The task is to check if s2 is a rotated version of the string s1.

// Note: A string is a rotation of another if it can be formed by moving characters from the start to the end (or vice versa) without rearranging them.

// Examples :

// Input: s1 = "abcd", s2 = "cdab"
// Output: true
// Explanation: After 2 right rotations, s1 will become equal to s2.
// Input: s1 = "aab", s2 = "aba"
// Output: true
// Explanation: After 1 left rotation, s1 will become equal to s2.
// Input: s1 = "abcd", s2 = "acbd"
// Output: false
// Explanation: Strings are not rotations of each other.

// Constraints:
// 1 ≤ s1.size(), s2.size() ≤ 105
// s1, s2 consists of lowercase English alphabets.

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */

class Solution {
  areRotations(s1, s2) {
    // quick check: different lengths means no rotation possible
    if (s1.length !== s2.length) {
      return false;
    }

    // the magic happens here: duplicate s1
    const temp = s1 + s1;

    // check if s2 appears as a substring
    return temp.includes(s2);
  }
}
