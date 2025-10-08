// Wed, 08 Oct 2025,

// Construct Tree from Preorder & Postorder
// Difficulty: MediumAccuracy: 89.41%Submissions: 652+Points: 4
// Given two arrays pre[] and post[] that represent the preorder and postorder traversals of a full binary tree. Your task is to construct the binary tree and return its root.

// Note:  Full Binary Tree is a binary tree where every node has either 0 or 2 children. The preorder and postorder traversals contain unique values, and every value present in the preorder traversal is also found in the postorder traversal.

// Examples:

// Input: pre[] = [1, 2, 4, 8, 9, 5, 3, 6, 7], post[] = [8, 9, 4, 5, 2, 6, 7, 3, 1]
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Explanation: The tree will look like

// Input: pre[] = [1, 2, 4, 5, 3, 6, 7] , post[] = [4, 5, 2, 6, 7, 3, 1]
// Output: [1, 2, 3, 4, 5, 6, 7]
// Explanation: The tree will look like

// Constraints:
// 1 ≤ number of nodes ≤ 10^3
// 1 ≤ pre[i], post[i] ≤ 10^4
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  constructTree(pre, post) {
    const n = pre.length;
    const postIndex = new Map();

    for (let i = 0; i < n; i++) {
      postIndex.set(post[i], i);
    }

    const build = (preStart, preEnd, postStart, postEnd) => {
      if (preStart > preEnd) return null;

      const root = new Node(pre[preStart]);

      if (preStart === preEnd) return root;

      const leftRootVal = pre[preStart + 1];
      const leftRootIndex = postIndex.get(leftRootVal);

      const leftSize = leftRootIndex - postStart + 1;

      root.left = build(
        preStart + 1,
        preStart + leftSize,
        postStart,
        leftRootIndex
      );
      root.right = build(
        preStart + leftSize + 1,
        preEnd,
        leftRootIndex + 1,
        postEnd - 1
      );

      return root;
    };

    return build(0, n - 1, 0, n - 1);
  }
}
