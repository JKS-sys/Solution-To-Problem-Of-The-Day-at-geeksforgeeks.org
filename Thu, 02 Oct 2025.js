// Thu, 02 Oct 2025,

// Unique K-Number Sum
// Difficulty: MediumAccuracy: 81.44%Submissions: 1K+Points: 4
// Given two integers n and k, the task is to find all valid combinations of k numbers that adds up to n based on the following conditions:

// Only numbers from the range [1, 9] used.
// Each number can only be used at most once.
// Note: You can return the combinations in any order, the driver code will print them in sorted order.

// Examples:

// Input: n = 9, k = 3
// Output: [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
// Explanation: There are three valid combinations of 3 numbers that sum to 9: [1 ,2, 6], [1, 3, 5] and [2, 3, 4].
// Input: n = 3, k = 3
// Output: []
// Explanation: It is not possible to pick 3 distinct numbers from 1 to 9 that sum to 3, so no valid combinations exist.
// Constraints:
// 1 ≤ n ≤ 50
// 1 ≤ k ≤ 9
// Expected Complexities
// Time Complexity: O(k * 2^9)
// Auxiliary Space: O(k)

class Solution {
  combinationSum(n, k) {
    const result = [];

    const backtrack = (start, currentCombination, currentSum) => {
      if (currentCombination.length === k && currentSum === n) {
        result.push([...currentCombination]);
        return;
      }

      if (currentCombination.length > k || currentSum > n) {
        return;
      }

      for (let i = start; i <= 9; i++) {
        currentCombination.push(i);
        currentSum += i;

        backtrack(i + 1, currentCombination, currentSum);

        currentCombination.pop();
        currentSum -= i;
      }
    };

    backtrack(1, [], 0);
    return result;
  }
}
