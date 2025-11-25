// Sat, 22 Nov 2025,

// Minimum Operations to Connect Hospitals
// Difficulty: Medium Accuracy: 60.42% Submissions: 5K+ Points: 4
// You are given an undirected network of V hospitals numbered from 0 to V - 1, represented as a 2D array edges[][], where each element edges[i] = [u, v] denotes a direct connection between hospital u and hospital v.
// In one operation, you are allowed to remove any existing link and reconnect it between two hospitals that are currently not directly or indirectly connected.

// Your task is to determine the minimum number of operations required to make sure that all hospitals become connected, either directly or indirectly, using the given links.

// Note: If it is impossible to connect all hospitals into a single network, return -1.

// Examples:

// Input: V = 4, E = 3, edges[][] = [[0, 1], [0, 2], [1, 2]]
// Output: 1
// Explanation: Remove the connection between hospitals 1 and 2 and connect the hospitals 1 and 3.

// Input: V = 5, E = 4, edges[][] = [[0, 1], [0, 2], [2, 3], [3, 4]]
// Output: 0
// Explanation: All hospitals are already connected directly or indirectly. No rearrangement of connections is required.

// Constraints:
// 1 ≤ V ≤ 10^3
// 0 ≤ E ≤ V*(V-1)/2
// 0 ≤ edges[i][0], edges[i][1] < V
// Expected Complexities
// Time Complexity: O(V + E)
// Auxiliary Space: O(V + E)

class Solution {
  minConnect(V, edges) {
    const adj = new Array(V).fill(0).map(() => []);
    for (const [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }
    const visited = new Array(V).fill(false);
    const components = [];
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        const component = [];
        const stack = [i];
        visited[i] = true;
        while (stack.length > 0) {
          const node = stack.pop();
          component.push(node);
          for (const neighbor of adj[node]) {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              stack.push(neighbor);
            }
          }
        }
        components.push(component);
      }
    }
    if (components.length === 1) {
      return 0;
    }
    const totalEdgesNeeded = V - 1;
    const currentEdges = edges.length;
    if (currentEdges < totalEdgesNeeded) {
      return -1;
    }
    let redundantEdges = 0;
    for (const component of components) {
      const size = component.length;
      let edgesInComponent = 0;
      const nodeSet = new Set(component);
      for (const node of component) {
        for (const neighbor of adj[node]) {
          if (nodeSet.has(neighbor) && node < neighbor) {
            edgesInComponent++;
          }
        }
      }
      redundantEdges += edgesInComponent - (size - 1);
    }
    const operationsNeeded = components.length - 1;
    if (redundantEdges >= operationsNeeded) {
      return operationsNeeded;
    } else {
      return -1;
    }
  }
}
4;
