class Solution {
  verticalOrder(root) {
    if (!root) return [];

    const map = new Map(); // hd -> array of node values
    const queue = []; // BFS queue { node, hd }
    let front = 0;

    queue.push({ node: root, hd: 0 });
    let minHd = 0,
      maxHd = 0;

    while (front < queue.length) {
      const { node, hd } = queue[front];
      front++;

      // Append current node's value to its vertical column
      if (!map.has(hd)) map.set(hd, []);
      map.get(hd).push(node.data);

      // Enqueue children with updated HD
      if (node.left) {
        queue.push({ node: node.left, hd: hd - 1 });
        minHd = Math.min(minHd, hd - 1);
      }
      if (node.right) {
        queue.push({ node: node.right, hd: hd + 1 });
        maxHd = Math.max(maxHd, hd + 1);
      }
    }

    // Collect columns from leftmost to rightmost
    const result = [];
    for (let hd = minHd; hd <= maxHd; hd++) {
      if (map.has(hd)) {
        result.push(map.get(hd));
      }
    }
    return result;
  }
}
