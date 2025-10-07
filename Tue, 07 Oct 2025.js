// Tue, 07 Oct 2025,

// Bottom View of Binary Tree
// Difficulty: MediumAccuracy: 54.18%Submissions: 326K+Points: 4Average Time: 45m
// You are given the root of a binary tree, and your task is to return its bottom view. The bottom view of a binary tree is the set of nodes visible when the tree is viewed from the bottom.

// Note: If there are multiple bottom-most nodes for a horizontal distance from the root, then the latter one in the level order traversal is considered.

// Examples :

// Input: root = [1, 2, 3, 4, 5, N, 6]

// Output: [4, 2, 5, 3, 6]
// Explanation: The Green nodes represent the bottom view of below binary tree.

// Input: root = [20, 8, 22, 5, 3, 4, 25, N, N, 10, 14, N, N, 28, N]

// Output: [5, 10, 4, 28, 25]
// Explanation: The Green nodes represent the bottom view of below binary tree.

// Constraints:
// 1 ≤ number of nodes ≤ 10^5
// 1 ≤ node->data ≤ 10^5
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  bottomView(root) {
    if (!root) return [];

    const hdNodeMap = new Map();

    let queue = [];
    queue.push([root, 0]);

    let minHd = 0,
      maxHd = 0;

    while (queue.length > 0) {
      const [node, hd] = queue.shift();
      hdNodeMap.set(hd, node.data);

      if (hd < minHd) minHd = hd;
      if (hd > maxHd) maxHd = hd;

      if (node.left) {
        queue.push([node.left, hd - 1]);
      }
      if (node.right) {
        queue.push([node.right, hd + 1]);
      }
    }

    let result = [];
    for (let hd = minHd; hd <= maxHd; hd++) {
      result.push(hdNodeMap.get(hd));
    }
    return result;
  }
}
