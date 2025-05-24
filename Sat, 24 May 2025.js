// Sat, 24 May 2025,

// Sum of all substrings of a number
// Difficulty: MediumAccuracy: 38.11%Submissions: 59K+Points: 4
// Given an integer s represented as a string, the task is to get the sum of all possible sub-strings of this string.

// Note: The number may have leading zeros.
// It is guaranteed that the total sum will fit within a 32-bit signed integer.

// Examples:

// Input: s = "6759"
// Output: 8421
// Explanation:
// Sum = 6 + 7 + 5 + 9 + 67 + 75 + 59 + 675 + 759 + 6759 = 8421
// Input: s = "421"
// Output: 491
// Explanation:
// Sum = 4 + 2 + 1 + 42 + 21 + 421 = 491
// Constraints:
// 1 <= |s| <= 9

/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
  sumSubstrings(s) {
    const n = s.length;
    let totalSum = 0;

    for (let i = 0; i < n; i++) {
      // Convert current character to its numeric value
      const digit = parseInt(s.charAt(i), 10);

      // Calculate the exponent part: 10^(n - i)
      const power = Math.pow(10, n - i);

      // Sum part is (10^(n - i) - 1) / 9, which is the sum of 10^0 to 10^(n-i-1)
      const sumPart = (power - 1) / 9;

      // Contribution from the current digit is digit * (number of starting positions) * sumPart
      const contribution = digit * (i + 1) * sumPart;

      // Add the contribution to the total sum
      totalSum += contribution;
    }

    return totalSum;
  }
}
