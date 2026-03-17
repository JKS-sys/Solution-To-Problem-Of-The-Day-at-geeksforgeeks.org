class Solution {
  /**
   * @param {Node} root - Root of the binary tree
   * @param {number} target - Value of the target node
   * @return {number} - Minimum time to burn the whole tree
   */
  minTime(root, target) {
    if (!root) return 0;

    // Map to store parent of each node
    const parent = new Map();
    let targetNode = null;

    // DFS to build parent map and locate the target node
    const stack = [root];
    parent.set(root, null);
    while (stack.length) {
      const node = stack.pop();
      if (node.data === target) targetNode = node;

      if (node.right) {
        parent.set(node.right, node);
        stack.push(node.right);
      }
      if (node.left) {
        parent.set(node.left, node);
        stack.push(node.left);
      }
    }

    // If target not found (should not happen as per problem), return 0
    if (!targetNode) return 0;

    // BFS from the target node
    const queue = [{ node: targetNode, dist: 0 }];
    let front = 0; // pointer for efficient queue
    const visited = new Set();
    visited.add(targetNode);

    let maxDist = 0;

    while (front < queue.length) {
      const { node, dist } = queue[front++];
      maxDist = Math.max(maxDist, dist);

      // Spread to left child
      if (node.left && !visited.has(node.left)) {
        visited.add(node.left);
        queue.push({ node: node.left, dist: dist + 1 });
      }
      // Spread to right child
      if (node.right && !visited.has(node.right)) {
        visited.add(node.right);
        queue.push({ node: node.right, dist: dist + 1 });
      }
      // Spread to parent
      const par = parent.get(node);
      if (par && !visited.has(par)) {
        visited.add(par);
        queue.push({ node: par, dist: dist + 1 });
      }
    }

    return maxDist;
  }
}
