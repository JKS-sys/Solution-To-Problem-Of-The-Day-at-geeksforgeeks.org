// Thu, 05 Jun 2025,

// Given a Directed Acyclic Graph (DAG) with V nodes labeled from 0 to V-1, and a list of directed edges, count the total number of distinct paths from a given start node to a destination node. Each edge is represented as edges[i] = [u, v], indicating a directed edge from u to v.

// Examples :

// Input: edges[][] = [[0,1], [0,3], [2,0], [2,1], [1,3]], V = 4, src = 2, dest = 3
// Output: 3
// Explanation: There are three ways to reach at 3 from 2. These are: 2 -> 1 -> 3, 2 -> 0 -> 3 and 2 -> 0 -> 1 -> 3.
// Print-all-paths-1
// Input: edges[][] = [[0,1], [1,2], [1,3], [2,3]], V = 4, src = 0, dest = 3
// Output: 2
// Explanation: There is two way to reach at 3 from 0 that is : 0 -> 1 -> 2 -> 3 and 0 -> 1 -> 3.
// Print-all-paths-2
// Constraints:
// 2  ≤  V  ≤  103
// 1  ≤   E = edges.size()  ≤  (V * (V - 1)) / 2

// User function Template for javascript
/**
 * @param {number[][]} edges
 * @param {number} V
 * @param {number} src
 * @param {number} dest
 * @returns {number}
 */

class Solution {
  // Function to count the number of paths from src to dest.
  countPaths(edges, V, src, dest) {
    let adj = Array.from({ length: V }, () => []);
    let indegree = new Array(V).fill(0);

    for (let [u, v] of edges) {
      adj[u].push(v);
      indegree[v]++;
    }

    let dp = new Array(V).fill(0);
    dp[dest] = 1;

    let topoOrder = [];
    let queue = [];
    let front = 0;

    for (let i = 0; i < V; i++) {
      if (indegree[i] === 0) {
        queue.push(i);
      }
    }

    while (front < queue.length) {
      let u = queue[front++];
      topoOrder.push(u);
      for (let v of adj[u]) {
        indegree[v]--;
        if (indegree[v] === 0) {
          queue.push(v);
        }
      }
    }

    for (let i = topoOrder.length - 1; i >= 0; i--) {
      let u = topoOrder[i];
      if (u === dest) continue;
      for (let v of adj[u]) {
        dp[u] += dp[v];
      }
    }

    return dp[src];
  }
}
