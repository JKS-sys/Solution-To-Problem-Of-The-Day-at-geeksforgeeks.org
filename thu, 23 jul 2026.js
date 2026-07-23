/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
  preOrder(root) {
    const result = [];

    function traverse(node) {
      if (!node) return;
      result.push(node.data); // Visit root
      traverse(node.left); // Visit left subtree
      traverse(node.right); // Visit right subtree
    }

    traverse(root);
    return result;
  }
}
