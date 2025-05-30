// Fri, 30 May 2025,

// Closest Neighbour in BST
// Difficulty: EasyAccuracy: 36.98%Submissions: 51K+Points: 2
// Given the root of a binary search tree and a number k, find the greatest number in the binary search tree that is less than or equal to k.

// Examples:

// Input: root = [10, 7, 15, 2, 8, 11, 16], k = 14

// Output: 11
// Explanation: The greatest element in the tree which is less than or equal to 14, is 11.
// Input: root = [5, 2, 12, 1, 3, 9, 21, N, N, N, N, N, N, 19, 25], k = 24

// Output: 21
// Explanation: The greatest element in the tree which is less than or equal to 24, is 21.
// Input: root = [5, 2, 12, 1, 3, 9, 21, N, N, N, N, N, N, 19, 25], k = 4

// Output: 3
// Explanation: The greatest element in the tree which is less than or equal to 4, is 3.
// Constraints:
// 1 <= number of nodes <= 105
// 1 <= node->data, k <= 105
// All nodes are unique in the BST

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
} */

/**
 * @param {Node} root
 * @param {number} k
 * @return {number}
 */

class Solution {
  findMaxFork(root, k) {
    // Initialize candidate to -1, indicating no valid candidate found yet.
    let candidate = -1;
    // Start traversal from the root.
    let curr = root;

    // Traverse the tree while current node is not null.
    while (curr !== null) {
      // If current node's data equals k, return k immediately as it is the greatest possible value.
      if (curr.data === k) {
        return k;
      }
      // If current node's data is less than k, update candidate and move to the right subtree.
      else if (curr.data < k) {
        candidate = Math.max(candidate, curr.data);
        curr = curr.right;
      }
      // If current node's data is greater than k, move to the left subtree.
      else {
        curr = curr.left;
      }
    }

    // Return the best candidate found, or -1 if none exists.
    return candidate;
  }
}
