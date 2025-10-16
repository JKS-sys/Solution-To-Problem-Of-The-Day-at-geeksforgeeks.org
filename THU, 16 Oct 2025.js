// THU, 16 Oct 2025,

// Remove BST keys outside given range
// Difficulty: MediumAccuracy: 61.24%Submissions: 10K+Points: 4
// Given the root of a Binary Search Tree (BST) and two integers l and r, remove all the nodes whose values lie outside the range [l, r].

// Note: The modified tree should also be BST.

// Examples:

// Input: root = [6, -13, 14, N, -8, 13, 15, N, N, 7], l = -10, r = 13

// Output: [6, -8, 13, N, N, 7]
// Explanation: All the nodes outside the range [-10, 13] are removed and the modified tree is a valid BST.

// Input: root = [14, 4, 16, 2, 8, 15, N, -8, 3, 7, 10], l = 2, r = 6

// Output: [4, 2, N, N, 3]
// Explanation: All the nodes outside the range [2, 6] are removed and the modified tree is a valid BST.

// Constraints:
// 1 ≤ number of nodes ≤ 10^4
// 1 ≤ node->data ≤ 10^4
// 1 ≤ l ≤ r ≤ 10^4
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  removekeys(root, l, r) {
    if (root === null) return null;

    if (root.data < l) {
      return this.removekeys(root.right, l, r);
    }

    if (root.data > r) {
      return this.removekeys(root.left, l, r);
    }

    root.left = this.removekeys(root.left, l, r);
    root.right = this.removekeys(root.right, l, r);

    return root;
  }
}
