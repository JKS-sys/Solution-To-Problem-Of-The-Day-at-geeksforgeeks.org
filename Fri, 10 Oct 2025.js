// Fri, 10 Oct 2025,

// ZigZag Tree Traversal
// Difficulty: MediumAccuracy: 54.05%Submissions: 182K+Points: 4Average Time: 30m
// Given the root of a binary tree. You have to find the zig-zag level order traversal of the binary tree.
// Note: In zig zag traversal we traverse the nodes from left to right for odd-numbered levels, and from right to left for even-numbered levels.

// Examples:

// Input: root = [1, 2, 3, 4, 5, 6, 7]

// Output: [1, 3, 2, 4, 5, 6, 7]
// Explanation:
// Level 1 (left to right): [1]
// Level 2 (right to left): [3, 2]
// Level 3 (left to right): [4, 5, 6, 7]
// Final result: [1, 3, 2, 4, 5, 6, 7]
// Input: root = [7, 9, 7, 8, 8, 6, N, 10, 9]

// Output: [7, 7, 9, 8, 8, 6, 9, 10]
// Explanation:
// Level 1 (left to right): [7]
// Level 2 (right to left): [7, 9]
// Level 3 (left to right): [8, 8, 6]
// Level 4 (right to left): [9, 10]
// Final result: [7, 7, 9, 8, 8, 6, 9, 10]
// Constraints:
// 1 ≤ number of nodes ≤ 10^5
// 1 ≤ node->data ≤ 10^5
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  zigZagTraversal(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];
    let leftToRight = true;

    while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel = [];

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        currentLevel.push(node.data);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      if (leftToRight) {
        result.push(...currentLevel);
      } else {
        result.push(...currentLevel.reverse());
      }

      leftToRight = !leftToRight;
    }

    return result;
  }
}
