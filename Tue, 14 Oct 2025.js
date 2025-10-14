// Tue, 14 Oct 2025,

// Sum of Nodes in BST Range
// Difficulty: MediumAccuracy: 92.76%Submissions: 809+Points: 4
// Given the root of a Binary Search Tree and two integers l and r, the task is to find the sum of all nodes that lie between l and r, including both l and r.

// Examples

// Input: root = [22, 12, 30, 8, 20], l = 10, r = 22

// Output: 54
// Explanation: The nodes in the given Tree that lies in the range [10, 22] are {12, 20, 22}. Therefore, the sum of nodes is 12 + 20 + 22 = 54.
// Input: root = [8, 5, 11, 3, 6, N, 20], l = 11, r = 15

// Output: 11
// Explanation: The nodes in the given Tree that lies in the range [11, 15] is {11}. Therefore, the sum of node is 11.
// Constraints:
// 0 ≤ number of nodes ≤ 10^4
// 0 ≤ node->data ≤ 10^4
// 0 ≤ l ≤ r ≤ 10^4
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(h)

class Solution {
  nodeSum(root, l, r) {
    if (!root) return 0;

    let sum = 0;

    if (root.data >= l && root.data <= r) {
      sum += root.data;
      sum += this.nodeSum(root.left, l, r);
      sum += this.nodeSum(root.right, l, r);
    } else if (root.data < l) {
      sum += this.nodeSum(root.right, l, r);
    } else {
      sum += this.nodeSum(root.left, l, r);
    }

    return sum;
  }
}
