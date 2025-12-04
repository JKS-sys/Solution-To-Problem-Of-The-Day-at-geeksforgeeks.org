// Thu, 04 Dec 2025,

// Optimal binary search tree
// Difficulty: Hard Accuracy: 50.02% Submissions: 12K+ Points: 8
// You are given a set of distinct keys in sorted order, which is represent by keys[]. Each key ki represents a data record that is accessed during a seach operation. For all the keys, you are also given a frequency array freq[], which denotes how many times key ki is searched for.
// The cost of accessing a key in a binary search tree is calculated by multiplying its access frequency by the level at which it appears in the tree. Therefore different arrangements of keys in the BST gives different total search costs.

// Your task is to calculate the minimum total search cost required to construct a binary search tree containing all the keys.

// Note: Consider the root of the BST is at level 1.

// Examples:

// Input: keys[] = [10, 12], freq[] = [34, 50]
// Output: 118
// Explaination: There can be following two possible BSTs

// The cost of tree I is 34*1 + 50*2 = 134
// The cost of tree II is 50*1 + 34*2 = 118
// Input: keys[] = [10, 12, 20], freq[] = [34, 8, 50]
// Output: 142
// Explaination: There can be many possible BSTs

// Among all possible BSTs,
// cost of the 5th BST is minimum.
// Cost of this BST is 1*50 + 2*34 + 3*8 = 142
// Constraints:
// 1 ≤ keys.size() = freq.size() ≤ 100
// 1 ≤ keys[i], freq[i] ≤ 10^4
// Expected Complexities
// Time Complexity: O(n^3)
// Auxiliary Space: O(n^2)

class Solution {
  minCost(keys, freq) {
    const n = keys.length;
    if (n === 0) return 0;
    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
      dp[i] = new Array(n).fill(0);
    }
    const prefixSum = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      prefixSum[i] = prefixSum[i - 1] + freq[i - 1];
    }
    const getSum = (i, j) => {
      return prefixSum[j + 1] - prefixSum[i];
    };
    for (let i = 0; i < n; i++) {
      dp[i][i] = freq[i];
    }
    for (let length = 2; length <= n; length++) {
      for (let i = 0; i <= n - length; i++) {
        const j = i + length - 1;
        dp[i][j] = Number.MAX_SAFE_INTEGER;
        const sum = getSum(i, j);
        for (let k = i; k <= j; k++) {
          let cost = sum;

          if (k > i) {
            cost += dp[i][k - 1]; // left subtree cost
          }

          if (k < j) {
            cost += dp[k + 1][j]; // right subtree cost
          }

          dp[i][j] = Math.min(dp[i][j], cost);
        }
      }
    }

    return dp[0][n - 1];
  }
}
