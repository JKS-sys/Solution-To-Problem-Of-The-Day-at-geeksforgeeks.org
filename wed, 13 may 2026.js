class Solution {
  findMotherVertex(V, edges) {
    // Build adjacency list
    const adj = Array.from({ length: V }, () => []);
    for (const [u, v] of edges) {
      adj[u].push(v);
    }

    // First pass: find a candidate mother vertex
    const visited = new Array(V).fill(false);
    let candidate = -1;

    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        // BFS from i
        const queue = [i];
        visited[i] = true;
        let front = 0;
        while (front < queue.length) {
          const u = queue[front++];
          for (const v of adj[u]) {
            if (!visited[v]) {
              visited[v] = true;
              queue.push(v);
            }
          }
        }
        candidate = i; // last vertex that started a BFS
      }
    }

    // Second pass: verify that the candidate can reach all vertices
    const visited2 = new Array(V).fill(false);
    const queue = [candidate];
    visited2[candidate] = true;
    let front = 0;
    let count = 1;

    while (front < queue.length) {
      const u = queue[front++];
      for (const v of adj[u]) {
        if (!visited2[v]) {
          visited2[v] = true;
          queue.push(v);
          count++;
        }
      }
    }

    return count === V ? candidate : -1;
  }
}
