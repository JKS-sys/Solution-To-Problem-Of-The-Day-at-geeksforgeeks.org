/**
 * @param Node root
 * @returns number
 */
class Solution {
  getSize(root) {
    // Base case: empty tree has size 0
    if (!root) return 0;
    // Size = 1 (current node) + size of left subtree + size of right subtree
    return 1 + this.getSize(root.left) + this.getSize(root.right);
  }
}
