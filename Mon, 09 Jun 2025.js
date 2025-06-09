// Mon, 09 Jun 2025,

// BST with Dead End
// Difficulty: MediumAccuracy: 35.99%Submissions: 85K+Points: 4
// You are given a Binary Search Tree (BST) containing unique positive integers greater than 0.

// Your task is to determine whether the BST contains a dead end.

// Note: A dead end is a leaf node in the BST such that no new node can be inserted in the BST at or below this node while maintaining the BST property and the constraint that all node values must be > 0.

// Examples:

// Input: root[] = [8, 5, 9, 2, 7, N, N, 1]

// Output: true
// Explanation: Node 1 is a Dead End in the given BST.
// Input: root[] = [8, 7, 10, 2, N, 9, 13]

// Output: true
// Explanation: Node 9 is a Dead End in the given BST.
// Constraints:
// 1 <= number of nodes <= 3000
// 1 <= node->data <= 105

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @return {boolean}
 */

class Solution {
  isDeadEnd(root) {
    if (!root) return false;
    const stack = [[root, 0, Infinity]];

    while (stack.length > 0) {
      const [node, low, high] = stack.pop();

      if (!node.left && !node.right) {
        if (node.data - low <= 1 && high - node.data <= 1) {
          return true;
        }
      }

      if (node.right) {
        stack.push([node.right, node.data, high]);
      }
      if (node.left) {
        stack.push([node.left, low, node.data]);
      }
    }

    return false;
  }
}
