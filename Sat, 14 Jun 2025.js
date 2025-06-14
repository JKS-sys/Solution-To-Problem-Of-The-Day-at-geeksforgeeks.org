// Sat, 14 Jun 2025,

// Symmetric Tree
// Difficulty: EasyAccuracy: 44.96%Submissions: 165K+Points: 2Average Time: 20m
// Given the root of a binary tree, check whether it is symmetric, i.e., whether the tree is a mirror image of itself.

// A binary tree is symmetric if the left subtree is a mirror reflection of the right subtree.

// Examples:

// Input: root[] = [1, 2, 2, 3, 4, 4, 3]
//    ex-1_1
// Output: True
// Explanation: As the left and right half of the above tree is mirror image, tree is symmetric.
// Input: root[] = [1, 2, 2, N, 3, N, 3]
//    ex-2_1
// Output: False
// Explanation:  As the left and right half of the above tree is not the mirror image, tree is not symmetric.
// Constraints:
// 1  ≤ number of nodes ≤ 2000

/*
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @return {boolean}
 */

class Solution {
  // Recursive helper function to check if two subtrees are mirror images
  isSymmetric(root) {
    if (root === null) {
      return true;
    }

    // Two stacks to store nodes for comparison
    let s1 = [];
    let s2 = [];

    // Initialize the stacks with the
    // left and right subtrees
    s1.push(root.left);
    s2.push(root.right);

    while (s1.length > 0 && s2.length > 0) {
      // Get the current pair of nodes
      let node1 = s1.pop();
      let node2 = s2.pop();

      // If both nodes are null, continue to the next pair
      if (node1 === null && node2 === null) {
        continue;
      }

      // If one node is null and the other is not,
      // or the nodes' data do not match
      // then the tree is not symmetric
      if (node1 === null || node2 === null || node1.data !== node2.data) {
        return false;
      }

      // Push children of node1 and node2 in opposite order
      // Push left child of node1 and right child of node2
      s1.push(node1.left);
      s2.push(node2.right);

      // Push right child of node1 and left child of node2
      s1.push(node1.right);
      s2.push(node2.left);
    }

    // If both stacks are empty, the tree is symmetric
    return s1.length === 0 && s2.length === 0;
  }
}
