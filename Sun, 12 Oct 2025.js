// Sun, 12 Oct 2025,

// Distribute Candies
// Difficulty: HardAccuracy: 63.24%Submissions: 31K+Points: 8
// You are given the root of a binary tree with n nodes, where each node contains a certain number of candies, and the total number of candies across all nodes is n. In one move, you can select any two adjacent nodes and transfer one candy from one node to the other. The transfer can occur between a parent and child in either direction.

// The task is to determine the minimum number of moves required to ensure that every node in the tree has exactly one candy.

// Note: The testcases are framed such that it is always possible to achieve a configuration in which every node has exactly one candy, after some moves.

// Examples:

// Input: root = [5, 0, 0, N, N, 0, 0]

// Output: 6
// Explanation:
// Move 1 candy from root to left child
// Move 1 candy from root to right child
// Move 1 candy from right child to root->right->left node
// Move 1 candy from root to right child
// Move 1 candy from right child to root->right->right node
// Move 1 candy from root to right child
// so, total 6 moves required.
// Input: root = [2, 0, 0, N, N, 3, 0]

// Output: 4
// Explanation:
// Move 1 candy from root to left child
// Move 1 candy from root->right->left node to root->right node
// Move 1 candy from root->right node to root->right->right node
// Move 1 candy from root->right->left node to root->right node
// so, total 4 moves required.
// Constraints:
// 1 ≤ n ≤ 3*10^3
// 0 ≤ Node->data ≤ n
// The sum of all Node->data = n
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(h)

class Solution {
  distCandy(root) {
    let moves = 0;

    const dfs = (node) => {
      if (!node) return 0;

      const leftImbalance = dfs(node.left);
      const rightImbalance = dfs(node.right);

      moves += Math.abs(leftImbalance) + Math.abs(rightImbalance);

      return node.data - 1 + leftImbalance + rightImbalance;
    };

    dfs(root);
    return moves;
  }
}
