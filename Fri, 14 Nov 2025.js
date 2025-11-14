// Fri, 14 Nov 2025,

// Minimum Cost to Merge Stones
// Difficulty: Hard Accuracy: 44.88% Submissions: 2K+ Points: 8 Average Time: 45m

// Given an array stones[], where the ith element represents the number of stones in the ith pile.
// In one move, you can merge exactly k consecutive piles into a single pile, and the cost of this move is equal to the total number of stones in these k piles.
// Determine the minimum total cost required to merge all the piles into one single pile. If it is not possible to merge all piles into one according to the given rules, return -1.

// Examples:

// Input: stones[] = [1, 2, 3], k = 2
// Output: 9
// Explanation: Initially the array looks like [1, 2, 3].
// First, we merge first 2 stones, i.e., 1 and 2, array becomes [3, 3] and cost is 1 + 2 = 3.
// Then, we merge remaining stones, i.e., 3 and 3, array becomes [6] and the cost = 3 + 3 = 6.
// Total cost = 3 + 6 = 9.
// Input: stones[] = [1, 5, 3, 2, 4], k = 2
// Output: 35
// Explanation: Initially the array looks like [1, 5, 3, 2, 4].
// First, we merge 1 and 5, array becomes [6, 3, 2, 4] and cost is 1 + 5 = 6.
// Then, we merge 3 and 2, array becomes [6, 5, 4] and the cost = 3 + 2 = 5.
// Then, we merge 5 and 4, array becomes [6, 9] and the cost = 5 + 4 = 9.
// Finally, we merge 6 and 9, array becomes [15] and the cost = 6 + 9 = 15.
// Total cost = 6 + 5 + 9 + 15 = 35.
// Input: stones[] = [1, 5, 3, 2, 4], k = 4
// Output: -1
// Explanation: There is no possible way to combine the stones in piles of 4 to get 1 stone in the end.

// Constraints:
// 1 ≤ stones.size() ≤ 30
// 2 ≤ k ≤ 30
// 1 ≤ stones[i] ≤ 100

// Expected Complexities
// Time Complexity: O(n^3)
// Auxiliary Space: O(n^2)

class Solution {
  mergeStones(stones, k) {
    const n = stones.length;

    if ((n - 1) % (k - 1) !== 0) {
      return -1;
    }

    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      prefix[i + 1] = prefix[i] + stones[i];
    }

    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
      dp[i] = new Array(n).fill(0);
    }

    for (let length = k; length <= n; length++) {
      for (let i = 0; i + length <= n; i++) {
        const j = i + length - 1;

        dp[i][j] = Infinity;

        for (let mid = i; mid < j; mid += k - 1) {
          dp[i][j] = Math.min(dp[i][j], dp[i][mid] + dp[mid + 1][j]);
        }

        if ((length - 1) % (k - 1) === 0) {
          dp[i][j] += prefix[j + 1] - prefix[i];
        }
      }
    }

    return dp[0][n - 1];
  }
}
