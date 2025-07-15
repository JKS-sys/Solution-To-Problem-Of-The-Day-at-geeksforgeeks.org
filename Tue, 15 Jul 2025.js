// Tue, 15 Jul 2025,

// Divisible by 13
// Difficulty: MediumAccuracy: 50.33%Submissions: 2K+Points: 4
// Given a number represented as a string s (which may be very large), check whether it is divisible by 13 or not.

// Examples:

// Input : s = "2911285"
// Output : true
// Explanation: 2911285 ÷ 13 = 223945, which is a whole number with no remainder.
// Input : s = "27"
// Output : false
// Explanation: 27 / 13 ≈ 2.0769..., which is not a whole number (there is a remainder).
// Constraints:
// 1 ≤  s.size()  ≤ 105
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  divby13(s) {
    let remainder = 0;
    for (let i = 0; i < s.length; i++) {
      let digit = parseInt(s[i]);
      remainder = (remainder * 10 + digit) % 13;
    }
    return remainder === 0;
  }
}
