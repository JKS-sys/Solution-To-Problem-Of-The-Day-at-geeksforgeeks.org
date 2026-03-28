class Solution {
  /**
   * Finds all articulation points in an undirected graph.
   * @param {number} V - Number of vertices.
   * @param {number[][]} edges - List of edges [u, v].
   * @returns {number[]} Sorted list of articulation points, or [-1] if none.
   */
  articulationPoints(V, edges) {
    // Build adjacency list
    const adj = Array.from({ length: V }, () => []);
    for (const [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }

    const disc = new Array(V).fill(-1); // discovery time
    const low = new Array(V).fill(-1); // low-link value
    const visited = new Array(V).fill(false);
    let time = 0;
    const articulationSet = new Set();

    const dfs = (u, parent) => {
      visited[u] = true;
      disc[u] = low[u] = time++;
      let children = 0;

      for (const v of adj[u]) {
        if (!visited[v]) {
          children++;
          dfs(v, u);
          low[u] = Math.min(low[u], low[v]);

          // Non‑root articulation point condition
          if (parent !== -1 && low[v] >= disc[u]) {
            articulationSet.add(u);
          }
        } else if (v !== parent) {
          // Back edge
          low[u] = Math.min(low[u], disc[v]);
        }
      }

      // Root articulation point condition
      if (parent === -1 && children > 1) {
        articulationSet.add(u);
      }
    };

    // Handle disconnected graph
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        dfs(i, -1);
      }
    }

    const result = Array.from(articulationSet).sort((a, b) => a - b);
    return result.length === 0 ? [-1] : result;
  }
}
class Solution {
  /**
   * Finds all articulation points in an undirected graph.
   * @param {number} V - Number of vertices.
   * @param {number[][]} edges - List of edges [u, v].
   * @returns {number[]} Sorted list of articulation points, or [-1] if none.
   */
  articulationPoints(V, edges) {
    // Build adjacency list
    const adj = Array.from({ length: V }, () => []);
    for (const [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }

    const disc = new Array(V).fill(-1); // discovery time
    const low = new Array(V).fill(-1); // low-link value
    const visited = new Array(V).fill(false);
    let time = 0;
    const articulationSet = new Set();

    const dfs = (u, parent) => {
      visited[u] = true;
      disc[u] = low[u] = time++;
      let children = 0;

      for (const v of adj[u]) {
        if (!visited[v]) {
          children++;
          dfs(v, u);
          low[u] = Math.min(low[u], low[v]);

          // Non‑root articulation point condition
          if (parent !== -1 && low[v] >= disc[u]) {
            articulationSet.add(u);
          }
        } else if (v !== parent) {
          // Back edge
          low[u] = Math.min(low[u], disc[v]);
        }
      }

      // Root articulation point condition
      if (parent === -1 && children > 1) {
        articulationSet.add(u);
      }
    };

    // Handle disconnected graph
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        dfs(i, -1);
      }
    }

    const result = Array.from(articulationSet).sort((a, b) => a - b);
    return result.length === 0 ? [-1] : result;
  }
}
