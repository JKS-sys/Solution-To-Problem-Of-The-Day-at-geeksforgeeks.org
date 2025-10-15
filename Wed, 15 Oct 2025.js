// Wed, 15 Oct 2025

// k-th Smallest in BST
// Difficulty: MediumAccuracy: 43.53%Submissions: 149K+Points: 4Average Time: 40m
// Given the root of a BST and an integer k, the task is to find the kth smallest element in the BST. If there is no kth smallest element present then return -1.

// Examples:

// Input: root = [20, 8, 22, 4, 12, N, N, N, N, 10, 14], k = 3

// Output: 10
// Explanation: 10 is the 3rd smallest element in the BST.
// Input: root = [2, 1, 3], k = 5

// Output: -1
// Explanation: There is no 5th smallest element in the BST as the size of BST is 3.
// Constraints:
// 1 ≤ number of nodes, k ≤ 10^4
// 1 ≤ node->data ≤ 10^4
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(h)

class Solution {
  kthSmallest(root, k) {
    let stack = [];
    let current = root;
    let count = 0;

    while (current !== null || stack.length > 0) {
      while (current !== null) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      count++;

      if (count === k) {
        return current.data;
      }

      current = current.right;
    }

    return -1;
  }
}
