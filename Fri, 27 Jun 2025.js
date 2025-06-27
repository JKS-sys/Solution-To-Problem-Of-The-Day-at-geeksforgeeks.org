// Fri, 27 Jun 2025,

// Mobile numeric keypad
// Difficulty: MediumAccuracy: 32.6%Submissions: 61K+Points: 4Average Time: 30m
// There is a standard numeric keypad on a mobile phone. You can press the current button or any button that is directly above, below, to the left, or to the right of it. For example, if you press 5, then pressing 2, 4, 6, or 8 is allowed. However, diagonal movements and pressing the bottom row corner buttons (* and #) are not allowed.

// Given an integer n, determine how many unique sequences of length n can be formed by pressing buttons on the keypad, starting from any digit.

// Examples :

// Input: n = 1
// Output: 10
// Explanation: Possible 1-digit numbers follow keypad moves - From 0 → 0, 1 → 1, 2 → 2 and so on, total 10 valid combinations are possible.
// Input: n = 2
// Output: 36
// Explanation: Possible 2-digit numbers follow keypad moves -
// From 0 → 00, 08 (2),
// From 1 → 11, 12, 14 (3),
// From 3 → 33, 32, 36 (3), and so on,
// total 36 valid combinations are possible.
// Constraints:
// 1 ≤ n ≤ 15

/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
  getCount(n) {
    if (n === 1) {
      return 10;
    }
    const adj = [
      [0, 8], // 0
      [1, 2, 4], // 1
      [1, 2, 3, 5], // 2
      [2, 3, 6], // 3
      [1, 4, 5, 7], // 4
      [2, 4, 5, 6, 8], // 5
      [3, 5, 6, 9], // 6
      [4, 7, 8], // 7
      [0, 5, 7, 8, 9], // 8
      [6, 8, 9], // 9
    ];
    let dp = new Array(10).fill(1);
    for (let i = 2; i <= n; i++) {
      let newDp = new Array(10).fill(0);
      for (let j = 0; j < 10; j++) {
        for (let neighbor of adj[j]) {
          newDp[j] += dp[neighbor];
        }
      }
      dp = newDp;
    }
    return dp.reduce((a, b) => a + b, 0);
  }
}
