// Fri, 11 Jul 2025,

// Trail of ones
// Difficulty: MediumAccuracy: 51.16%Submissions: 34K+Points: 4
// Given an integer n, the task is to count the number of binary strings of length n that contains at least one pair of consecutive 1's.
// Note: A binary string is a sequence made up of only 0's and 1's.

// Examples:

// Input: n = 2
// Output: 1
// Explanation: There are 4 strings of length 2, the strings are 00, 01, 10, and 11. Only the string 11 has consecutive 1's.
// Input: n = 3
// Output: 3
// Explanation: There are 8 strings of length 3, the strings are 000, 001, 010, 011, 100, 101, 110 and 111. The strings with consecutive 1's are 011, 110 and 111.
// Input: n = 5
// Output: 19
// Explanation: There are 19 strings having at least one pair of consecutive 1's.
// Constraints:
// 2 ≤ n ≤ 30
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

/**
 * @param number n
 * @returns number
 */
class Solution {
  countConsec(n) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < n + 2; i++) {
      let next = a + b;
      a = b;
      b = next;
    }
    const totalStrings = 1 << n;
    return totalStrings - a;
  }
}
