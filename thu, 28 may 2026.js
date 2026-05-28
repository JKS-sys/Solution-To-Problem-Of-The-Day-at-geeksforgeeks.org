class Solution {
  verticalSum(root) {
    if (!root) return [];

    const sumMap = new Map(); // HD -> sum
    let minHD = 0,
      maxHD = 0;

    // BFS queue storing node and its horizontal distance
    const queue = [{ node: root, hd: 0 }];

    while (queue.length > 0) {
      const { node, hd } = queue.shift();

      // Add current node's value to its vertical line sum
      sumMap.set(hd, (sumMap.get(hd) || 0) + node.data);

      // Track horizontal distance boundaries
      minHD = Math.min(minHD, hd);
      maxHD = Math.max(maxHD, hd);

      // Traverse left and right subtrees
      if (node.left) queue.push({ node: node.left, hd: hd - 1 });
      if (node.right) queue.push({ node: node.right, hd: hd + 1 });
    }

    // Build result from leftmost to rightmost vertical line
    const result = [];
    for (let i = minHD; i <= maxHD; i++) {
      result.push(sumMap.get(i));
    }
    return result;
  }
}
