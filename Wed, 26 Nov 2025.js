// Wed, 26 Nov 2025,

// AND In Range
// Difficulty: Medium Accuracy: 33.68% Submissions: 4K+ Points: 4
// You are given two integers l and r. Find the result after applying the series of Bitwise AND ( & ) operation on every natural number between the range l to r (including both).

// Examples:

// Input: l = 8, r = 13
// Output: 8
// Explanation:
// 8 AND 9 AND 10 AND 11 AND 12 AND 13 = 8.
// Input: l = 2, r = 3
// Output: 2
// Explanation: 2 AND 3 = 2.
// Constraints:
// 1 ≤ l ≤ r ≤ 10^9
// Expected Complexities
// Time Complexity: O(log l)
// Auxiliary Space: O(1)

class Solution {
  andInRange(l, r) {
    // Keep removing the rightmost set bit from r until r <= l
    while (l < r) {
      r = r & (r - 1);
    }
    return r;
  }
}
