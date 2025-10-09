// Thu, 09 Oct 2025,

// Postorder Traversal
// Difficulty: EasyAccuracy: 74.96%Submissions: 133K+Points: 2Average Time: 15m
// Given the root of a Binary Tree, your task is to return its Postorder Traversal.

// Note: A postorder traversal first visits the left child (including its entire subtree), then visits the right child (including its entire subtree), and finally visits the node itself.

// Examples:

// Input: root = [19, 10, 8, 11, 13]

// Output: [11, 13, 10, 8, 19]
// Explanation: The postorder traversal of the given binary tree is [11, 13, 10, 8, 19].
// Input: root = [11, 15, N, 7]

// Output: [7, 15, 11]
// Explanation: The postorder traversal of the given binary tree is [7, 15, 11].
// Constraints:
// 1 ≤ number of nodes ≤ 3*10^4
// 0 ≤ node->data ≤ 10^5
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  postOrder(root) {
    const result = [];
    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.data);
    }
    traverse(root);
    return result;
  }
}
