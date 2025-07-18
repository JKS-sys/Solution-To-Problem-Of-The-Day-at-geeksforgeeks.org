// Fri, 08 Jul 2025,

// LCM Triplet
// Difficulty: MediumAccuracy: 50.13%Submissions: 20K+Points: 4
// Given a number n. Find the maximum possible LCM that can be obtained by selecting three numbers less than or equal to n.
// Note : LCM stands for Lowest Common Multiple.

// Examples:

// Input: n = 9
// Output: 504
// Explanation: 504 is the maximum LCM that can be attained by any triplet of numbers less than or equal 9. The triplet which has this LCM is {7, 8, 9}.
// Input: n = 7
// Output: 210
// Explanation: 210 is the maximum LCM that can be attained by any triplet of numbers less than or equal 7. The triplet which has this LCM is {5, 6, 7}.
// Constraints:
// 1 ≤ n ≤ 103
// Expected Complexities
// Time Complexity: O(1)
// Auxiliary Space: O(1)

class Solution {
  gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  lcm(a, b) {
    return (a * b) / this.gcd(a, b);
  }

  lcm3(a, b, c) {
    const lcmAB = this.lcm(a, b);
    return this.lcm(lcmAB, c);
  }

  lcmTriplets(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 6;

    const cand1 = this.lcm3(n, n - 1, n - 2);
    const cand2 = this.lcm3(n, n - 1, n - 3);
    const cand3 = this.lcm3(n - 1, n - 2, n - 3);

    return Math.max(cand1, cand2, cand3);
  }
}
