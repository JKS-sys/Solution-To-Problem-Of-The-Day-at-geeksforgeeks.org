class Solution {
  topView(root) {
    // queue for BFS: stores { node, horizontalDistance }
    const queue = [{ node: root, hd: 0 }];
    let front = 0;

    // map from horizontal distance to node value (first encountered)
    const map = {};
    let minHD = 0,
      maxHD = 0;

    while (front < queue.length) {
      const { node, hd } = queue[front++];

      // if this horizontal distance is seen for the first time, record it
      if (map[hd] === undefined) {
        map[hd] = node.data;
        // update the range of horizontal distances
        if (hd < minHD) minHD = hd;
        if (hd > maxHD) maxHD = hd;
      }

      // enqueue left and right children with updated HD
      if (node.left) queue.push({ node: node.left, hd: hd - 1 });
      if (node.right) queue.push({ node: node.right, hd: hd + 1 });
    }

    // collect results in order from leftmost to rightmost HD
    const result = [];
    for (let i = minHD; i <= maxHD; i++) {
      result.push(map[i]);
    }
    return result;
  }
}
