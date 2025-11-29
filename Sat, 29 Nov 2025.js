// Sat, 29 Nov 2025,

// Count set bits
// Difficulty: Medium Accuracy: 35.77% Submissions: 246K+ Points: 4
// You are given a number n. Find the total count of set bits for all numbers from 1 to n (both inclusive).

// Examples :

// Input: n = 4
// Output: 5
// Explanation: For numbers from 1 to 4. for 1: 0 0 1 => 1 set bit, for 2: 0 1 0 => 1 set bit, for 3: 0 1 1 => 2 set bits, for 4: 1 0 0 => 1 set bit. Therefore, the total set bits are 5.
// Input: n = 17
// Output: 35
// Explanation: From numbers 1 to 17(both inclusive), the total number of set bits are 35.

// Constraints:
// 1 ≤ n ≤ 10^8

// Expected Complexities
// Time Complexity: O(log n)
// Auxiliary Space: O(1)

class Solution {
  countSetBits(N) {
    if (N === 0) return 0;

    let count = 0;
    let i = 0;

    while (1 << i <= N) {
      const period = 1 << (i + 1);

      const completePeriods = Math.floor(N / period);
      count += completePeriods * (1 << i);

      const remainder = N % period;
      if (remainder >= 1 << i) {
        count += remainder - (1 << i) + 1;
      }

      i++;
    }

    return count;
  }
}
