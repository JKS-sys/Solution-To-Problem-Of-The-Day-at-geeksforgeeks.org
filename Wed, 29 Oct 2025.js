// Wed, 29 Oct 2025,

// Graph Diameter
// Difficulty: MediumAccuracy: 68.96%Submissions: 668+Points: 4
// You are given an undirected graph with V vertices numbered from 0 to V-1 and E edges, represented as a 2D array edges[][], where each element edges[i] = [u, v] represents an undirected edge between vertex u and vertex v. Find the diameter of the graph.
// The diameter of a graph (sometimes called the width) is the number of edges on the longest path between two vertices in the graph.

// Examples :

// Input: V = 6, E = 5, edges[][] = [[0, 1], [0, 4], [1, 3], [1, 2], [2, 5]]

// Output: 4
// Explanation: The longest path in the graph is from vertices 4 to vertices 5 (4 -> 0 -> 1 -> 2 -> 5).
// Input: V = 7, E = 6, edges[][] = [[0, 2], [0, 4], [0, 3], [3, 1], [3, 5], [1, 6]]

// Output: 4
// Explanation: The longest path in the graph is from vertices 2 to vertices 6 (2 -> 0 -> 3 -> 1 -> 6).
// Constraints:
// 2 ≤ V ≤  105
// 1 ≤ E ≤  V - 1
// 0 ≤ edges[i][0], edges[i][1] < V
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  diameter(V, edges) {
    const adj = new Array(V).fill(0).map(() => []);

    for (const [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }

    let farthestNode = 0;
    let maxDist = 0;

    const dfs = (node, parent, dist) => {
      if (dist > maxDist) {
        maxDist = dist;
        farthestNode = node;
      }

      for (const neighbor of adj[node]) {
        if (neighbor !== parent) {
          dfs(neighbor, node, dist + 1);
        }
      }
    };

    dfs(0, -1, 0);

    maxDist = 0;

    dfs(farthestNode, -1, 0);

    return maxDist;
  }
}
