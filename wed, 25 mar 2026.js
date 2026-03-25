class Solution {
  /**
   * Finds all vertices that minimize the height when chosen as root.
   *
   * @param {number} V - Number of vertices.
   * @param {number[][]} edges - List of undirected edges.
   * @returns {number[]} - List of root vertices that yield minimum height.
   */
  minHeightRoot(V, edges) {
    // Trivial case: single node
    if (V === 1) return [0];

    // Build adjacency list and compute degree of each vertex
    const adj = Array.from({ length: V }, () => []);
    const degree = new Array(V).fill(0);
    for (const [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
      degree[u]++;
      degree[v]++;
    }

    // Initialize queue with all leaves (degree == 1)
    const queue = [];
    for (let i = 0; i < V; i++) {
      if (degree[i] === 1) queue.push(i);
    }

    let remaining = V; // number of nodes not yet removed

    // Repeatedly remove leaves until at most 2 nodes remain
    while (remaining > 2) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const u = queue.shift();
        remaining--; // u is removed from the current tree
        for (const v of adj[u]) {
          degree[v]--; // remove edge u-v
          if (degree[v] === 1) {
            queue.push(v); // v becomes a leaf after removal
          }
        }
      }
    }

    // The remaining nodes in the queue are the centers
    return queue.sort((a, b) => a - b);
  }
}
