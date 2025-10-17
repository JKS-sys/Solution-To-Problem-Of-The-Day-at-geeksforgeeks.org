// Fri, 17 Oct 2025,

// BST to greater sum tree
// Difficulty: MediumAccuracy: 66.73%Submissions: 16K+Points: 4
// Given the root of a  BST with unique node values, transform it into greater sum tree where each node contains sum of all nodes greater than that node.

// Examples:

// Input: root = [11, 2, 29, 1, 7, 15, 40, N, N, N, N, N, N, 35, N]

// Output: [119, 137, 75, 139, 130, 104, 0, N, N, N, N, N, N, 40, N]
// Explanation: Every node is replaced with the sum of nodes greater than itself.

// Input: root = [2, 1, 6, N, N, 3, 7]

// Output: [16, 18, 7, N, N, 13, 0]
// Explanation: Every node is replaced with the sum of nodes greater than itself.

// Constraints :
// 1 ≤ node->data ≤ 3*10^4
// 1 ≤ number of nodes ≤ 3*10^4
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  transformTree(root) {
    let sum = 0;

    const reverseInorder = (node) => {
      if (node === null) return;

      reverseInorder(node.right);

      const originalVal = node.data;

      node.data = sum;

      sum += originalVal;

      reverseInorder(node.left);
    };

    reverseInorder(root);
    return root;
  }
}
