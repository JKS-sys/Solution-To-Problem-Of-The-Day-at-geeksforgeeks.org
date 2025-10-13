// Mon, 13 Oct 2025,

// Maximum Non-Adjacent Nodes Sum
// Difficulty: MediumAccuracy: 55.35%Submissions: 94K+Points: 4Average Time: 45m
// Given the root of a binary tree with integer values. Your task is to select a subset of nodes such that the sum of their values is maximized, with the condition that no two selected nodes are directly connected that is, if a node is included in the subset, neither its parent nor its children can be included.

// Examples:

// Input: root = [11, 1, 2]

// Output: 11
// Explanation: The maximum sum is obtained by selecting the node 11.

// Input: root = [1, 2, 3, 4, N, 5, 6]

// Output: 16
// Explanation: The maximum sum is obtained by selecting the nodes 1, 4, 5 and 6, which are not directly connected to each other. Their total sum is 16.

// Constraints:
// 1 ≤ number of nodes ≤ 10^4
// 1 ≤ node.data ≤ 10^5
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  getMaxSum(root) {
    const result = this.solve(root);
    return Math.max(result[0], result[1]);
  }

  solve(node) {
    if (!node) {
      return [0, 0];
    }

    const left = this.solve(node.left);
    const right = this.solve(node.right);

    const include = node.data + left[1] + right[1];

    const exclude = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    return [include, exclude];
  }
}
