// Fri, 31 Oct 2025,

// Shortest Cycle
// Difficulty: Hard Accuracy: 71.09% Submissions: 657 Points: 8
// You are given an undirected connected graph with V vertices numbered from 0 to V-1 and E edges, represented as a 2D array edges[][], where each element edges[i] = [u, v] represents an undirected edge between vertex u and v.
// Find the length of the shortest cycle in the graph. If the graph does not contain any cycle, return -1.

// Note: A cycle is a path that starts and ends at the same vertex without repeating any edge or vertex (except the start/end vertex). The shortest cycle is the one with the minimum number of edges.

// Examples

// Input: V = 7, E = 8, edges[][] = [[0, 5], [0, 6], [5, 1], [6, 1], [6, 2], [2, 3], [3, 4], [1, 4]]

// Output: 4
// Explanation: Possible cycles are:
// 0 → 5 → 1 → 6 → 0 (length = 4)
// 1 → 4 → 3 → 2 → 6 → 1 (length = 5)
// The smallest one is 0 → 5 → 1 → 6 → 0, with length 4.
// Input: V = 7, E = 9, edges[][] = [[0, 5], [0, 6], [1, 2], [1, 4], [1, 5], [1, 6], [2, 6], [2, 3], [3, 4]]

// Output: 3
// Explanation: Possible cycles include:
// 1 → 2 → 6 → 1 (length = 3)
// 1 → 2 → 3 → 4 → 1 (length = 4)
// 0 → 5 → 1 → 6 → 0 (length = 4)
// The smallest one is 1 → 2 → 6 → 1, with length 3.
// Constraints:
// 1 ≤ V ≤ 10^3
// 0 ≤ E ≤ 10^3
// 0 ≤ edges[i][0], edges[i][1] < V
// Expected Complexities
// Time Complexity: O(V * (V + E))
// Auxiliary Space: O(V)

class Solution {
  shortCycle(V, edges) {
    const graph = Array.from({ length: V }, () => []);
    for (const [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
    }

    let res = Infinity;

    for (let start = 0; start < V; start++) {
      const dist = Array(V).fill(-1);
      const parent = Array(V).fill(-1);
      dist[start] = 0;
      const queue = [];
      queue.push(start);

      while (queue.length) {
        const u = queue.shift();
        for (const v of graph[u]) {
          if (dist[v] === -1) {
            dist[v] = dist[u] + 1;
            parent[v] = u;
            queue.push(v);
          } else if (parent[u] !== v && parent[v] !== u) {
            // Cycle detected, update shortest cycle length
            const cycle_len = dist[u] + dist[v] + 1;
            if (cycle_len < res) {
              res = cycle_len;
            }
          }
        }
      }
    }

    return res === Infinity ? -1 : res;
  }
}
