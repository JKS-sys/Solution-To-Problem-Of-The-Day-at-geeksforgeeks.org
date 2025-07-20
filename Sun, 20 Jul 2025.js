// Sun, 20 Jul 2025,

// Count Numbers Containing Specific Digits
// Difficulty: MediumAccuracy: 65.5%Submissions: 878+Points: 4Average Time: 25m
// You are given an integer n representing the number of digits in a number, and an array arr[] containing digits from 0 to 9. Your have to count how many n-digit positive integers can be formed such that at least one digit from the array arr[] appears in the number.

// Examples:

// Input: n = 1, arr[] = [1, 2, 3]
// Output: 3
// Explanation: Only the single-digit numbers [1, 2, 3] satisfy the condition.
// Input: n = 2, arr[] = [3, 5]
// Output: 34
// Explanation: There are a total of 34  two digit numbers which contain atleast  one out of  [3, 5].
// Constraints:
//   1 ≤ n ≤ 9
//   1 ≤ arr.size() ≤ 10
//   0 ≤ arr[i] ≤ 9
// Expected Complexities
// Time Complexity: O(log n)
// Auxiliary Space: O(1)

/**
 * @param {number} n
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
  countValid(n, arr) {
    let total = 9 * Math.pow(10, n - 1);
    let forbidden = new Set(arr);
    let k = 10 - forbidden.size;
    let k0 = k;
    if (!forbidden.has(0)) {
      k0 = k - 1;
    }
    let totalInvalid = k0 * Math.pow(k, n - 1);
    return total - totalInvalid;
  }
}
