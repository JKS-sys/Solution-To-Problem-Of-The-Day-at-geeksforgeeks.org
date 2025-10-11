// Sat, 11 Oct 2025,

// Maximum path sum
// Difficulty: MediumAccuracy: 42.92%Submissions: 109K+Points: 4Average Time: 45m
// Given the root of a binary tree, your task is to find the maximum path sum. The path may start and end at any node in the tree.

// Examples:

// Input: root[] = [10, 2, 10, 20, 1, N, -25, N, N, N, N, 3, 4]
// Output: 42
// Explanation: Max path sum is represented using green colour nodes in the above binary tree.

// Input: root[] = [-17, 11, 4, 20, -2, 10]
// Output: 31
// Explanation: Max path sum is represented using green colour nodes in the above binary tree.

// Constraints:
// 1 ≤ number of nodes ≤ 10^3
// -10^4 ≤ node->data ≤ 10^4
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(h)

class Solution {
  findMaxSum(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;

    const dfs = (node) => {
      if (!node) return 0;

      const leftMax = Math.max(0, dfs(node.left));
      const rightMax = Math.max(0, dfs(node.right));

      maxSum = Math.max(maxSum, node.data + leftMax + rightMax);

      return node.data + Math.max(leftMax, rightMax);
    };

    dfs(root);
    return maxSum;
  }
}
