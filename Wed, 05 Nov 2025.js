// Wed, 05 Nov 2025,

// Get Minimum Squares
// Difficulty: Medium Accuracy: 45.22% Submissions: 43K+ Points: 4
// Given a positive integer n, find the minimum number of perfect squares (square of an integer) that sum up to n.

// Note: Every positive integer can be expressed as a sum of square numbers since 1 is a perfect square, and any number can be represented as 1*1 + 1*1 + 1*1 + ....

// Examples:

// Input: n = 100
// Output: 1
// Explanation: 10 * 10 = 100
// Input: n = 6
// Output: 3
// Explanation = 1 * 1 + 1 * 1 + 2 * 2 = 6
// Constraints:
// 1 ≤ n ≤ 10^4
// Expected Complexities
// Time Complexity: O(sqrt(n))
// Auxiliary Space: O(1)

class Solution {
  minSquares(n) {
    if (this.isPerfectSquare(n)) return 1;

    for (let i = 1; i * i <= n; i++) {
      if (this.isPerfectSquare(n - i * i)) {
        return 2;
      }
    }

    let temp = n;
    while (temp % 4 === 0) {
      temp /= 4;
    }
    if (temp % 8 !== 7) {
      return 3;
    }

    return 4;
  }

  isPerfectSquare(x) {
    const root = Math.floor(Math.sqrt(x));
    return root * root === x;
  }
}
