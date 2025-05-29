// Thu, 29 May 2025,

// Sum of nodes on the longest path
// Difficulty: MediumAccuracy: 52.39%Submissions: 114K+Points: 4
// Given a binary tree root[], you need to find the sum of the nodes on the longest path from the root to any leaf node. If two or more paths have the same length, the path with the maximum sum of node values should be considered.

// Examples:

// Input: root[] = [4, 2, 5, 7, 1, 2, 3, N, N, 6, N]

// Output: 13
// Explanation:

// The highlighted nodes (4, 2, 1, 6) above are part of the longest root to leaf path having sum = (4 + 2 + 1 + 6) = 13
// Input: root[] = [1, 2, 3, 4, 5, 6, 7]

// Output: 11
// Explanation:

// The longest root-to-leaf path is 1 -> 3 -> 7, with sum 11.
// Input: root[] = [10, 5, 15, 3, 7, N, 20, 1]

// Output: 19
// Explanation:

// The longest root-to-leaf path is 10 -> 5 -> 3 -> 1 with a sum of 10 + 5 + 3 + 1 = 19.
// Constraints:
// 1 <= number of nodes <= 106
// 0 <= node->data <= 104

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
 * @return {number}
 */

class Solution {
  sumOfLongRootToLeafPath(root) {
    if (root === null) return 0;
    let stack = [[root, 1, root.data]];
    let maxSum = 0;
    let maxLen = 0;

    while (stack.length > 0) {
      let [node, depth, currentSum] = stack.pop();

      if (node.left === null && node.right === null) {
        if (depth > maxLen) {
          maxLen = depth;
          maxSum = currentSum;
        } else if (depth === maxLen) {
          if (currentSum > maxSum) {
            maxSum = currentSum;
          }
        }
      }

      if (node.right) {
        stack.push([node.right, depth + 1, currentSum + node.right.data]);
      }
      if (node.left) {
        stack.push([node.left, depth + 1, currentSum + node.left.data]);
      }
    }

    return maxSum;
  }
}
