// Mon, 03 Nov 2025,

// Safe States
// Difficulty: Medium Accuracy: 55.52% Submissions: 73K+ Points: 4 Average Time: 20m
// Given a directed graph with V vertices numbered from 0 to V-1 and E directed edges, represented as a 2D array edges[][], where each element edges[i] = [u, v] represents a directed edge from vertex u to vertex v. Return all Safe Nodes of the graph.
// A vertex with no outgoing edges is called a terminal node. A vertex is considered safe if every path starting from it eventually reaches a terminal node.

// Examples:

// Input: V = 5, E = 6, edges[][] = [[1, 0], [1, 2], [1, 3], [1, 4], [2, 3], [3, 4]]

// Output: [0, 1, 2, 3, 4]
// Explanation: 4 and 0 is the terminal node, and all the paths from 1, 2, 3 lead to terminal node, i.e., 4.
// Input: V = 4, E = 3, edges[][] = [[1, 2], [2, 3], [3, 2]]

// Output: [0]
// Explanation: 0 is the terminal node, and no other node than 0 leads to 0.
// Constraints:
// 1 ≤ V ≤ 10^5
// 0 ≤ E ≤ 10^5
// 0 ≤ edges[i][0], edges[i][1] < V

class Solution {
  safeNodes(V, edges) {
    const adj = new Array(V).fill(0).map(() => []);
    const inDegree = new Array(V).fill(0);

    for (const [u, v] of edges) {
      adj[v].push(u);
      inDegree[u]++;
    }

    const queue = [];
    for (let i = 0; i < V; i++) {
      if (inDegree[i] === 0) {
        queue.push(i);
      }
    }

    const safe = new Array(V).fill(false);

    while (queue.length > 0) {
      const node = queue.shift();
      safe[node] = true;

      for (const neighbor of adj[node]) {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      }
    }

    const result = [];
    for (let i = 0; i < V; i++) {
      if (safe[i]) {
        result.push(i);
      }
    }

    return result;
  }
}
