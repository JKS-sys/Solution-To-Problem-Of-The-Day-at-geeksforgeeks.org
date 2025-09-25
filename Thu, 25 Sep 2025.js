// Thu, 25 Sep 2025,

// Generate Binary Numbers
// Difficulty: EasyAccuracy: 67.48%Submissions: 60K+Points: 2
// Given a number n. The task is to generate all binary numbers with decimal values from 1 to n.

// Examples:

// Input: n = 4
// Output: ["1", "10", "11", "100"]
// Explanation: Binary numbers from 1 to 4 are 1, 10, 11 and 100.
// Input: n = 6
// Output: ["1", "10", "11", "100", "101", "110"]
// Explanation: Binary numbers from 1 to 6 are 1, 10, 11, 100, 101 and 110.
// Constraints:
// 1 ≤ n ≤ 10^6
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  generateBinary(n) {
    const result = [];
    const queue = [];

    queue.push("1");

    for (let i = 0; i < n; i++) {
      const current = queue.shift();
      result.push(current);

      queue.push(current + "0");
      queue.push(current + "1");
    }

    return result;
  }
}
