class Solution {
  largestBst(root) {
    let maxSize = 0;

    function dfs(node) {
      if (!node) {
        return { isBST: true, size: 0, min: Infinity, max: -Infinity };
      }

      const left = dfs(node.left);
      const right = dfs(node.right);

      if (
        left.isBST &&
        right.isBST &&
        left.max < node.key &&
        node.key < right.min
      ) {
        // Current subtree is a BST
        const size = left.size + right.size + 1;
        const min = Math.min(left.min, node.key);
        const max = Math.max(right.max, node.key);
        maxSize = Math.max(maxSize, size);
        return { isBST: true, size, min, max };
      } else {
        // Not a BST – propagate the largest BST size from children
        const size = Math.max(left.size, right.size);
        // min/max are irrelevant here, but we return dummy values
        return { isBST: false, size, min: -Infinity, max: Infinity };
      }
    }

    dfs(root);
    return maxSize;
  }
}
