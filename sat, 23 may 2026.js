class Solution {
  toSumTree(root) {
    // Helper function to transform tree and return original subtree sum
    const transform = (node) => {
      if (node === null) return 0;

      // Recursively get original sum of left and right subtrees
      let leftSum = transform(node.left);
      let rightSum = transform(node.right);

      // Store original value before changing
      let oldVal = node.data;

      // Update node's value to sum of left and right subtrees
      node.data = leftSum + rightSum;

      // Return total sum of original subtree
      return oldVal + leftSum + rightSum;
    };

    transform(root);
  }
}
