// Articulation Point - II
// Difficulty: HardAccuracy: 55.15%Submissions: 12K+Points: 8Average Time: 30m
// You are given an undirected graph with V vertices and E edges. The graph is represented as a 2D array edges[][], where each element edges[i] = [u, v] indicates an undirected edge between vertices u and v.
// Your task is to return all the articulation points (or cut vertices) in the graph.
// An articulation point is a vertex whose removal, along with all its connected edges, increases the number of connected components in the graph.

// Note: The graph may be disconnected, i.e., it may consist of more than one connected component.
// If no such point exists, return {-1}.

// Examples :

// Input: V = 5, edges[][] = [[0, 1], [1, 4], [4, 3], [4, 2], [2, 3]]

// Output: [1, 4]
// Explanation: Removing the vertex 1 or 4 will disconnects the graph as-

// Input: V = 4, edges[][] = [[0, 1], [0, 2]]
// Output: [0]
// Explanation: Removing the vertex 0 will increase the number of disconnected components to 3.

// ---
// introduction:
//   name: "Jagadeesh Kumar S"
//   contact: "+91 73972 85837 | 33x23@pm.me"
//   description: "A problem-solving enthusiast passionate about coding challenges."

// technical_achievements:
//   - "Solved 100+ daily coding challenges on GeeksforGeeks"
//   - "Ranked in the top 130 on SRM Institute of Science and Technology's GeeksforGeeks leaderboard"
//   - "Maintained a 100+ day streak for Problem of the Day"

// github:
//   contributions: "Solutions available at https://github.com/JKS-sys/Solution-To-Problem-Of-The-Day-at-geeksforgeeks.org"
// ---

//{ Driver Code Starts
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  let idx = 0;
  let T = parseInt(input[idx++]);
  for (let t = 0; t < T; t++) {
    let V = parseInt(input[idx++]);
    let E = parseInt(input[idx++]);
    let edges = [];
    for (let i = 0; i < E; i++) {
      let [u, v] = input[idx++].split(" ").map(Number);
      edges.push([u, v]);
    }
    const obj = new Solution();
    let ans = obj.articulationPoints(V, edges);
    ans.sort((a, b) => a - b);
    console.log(ans.join(" "));
    console.log("~");
  }
});
// } Driver Code Ends

class Solution {
  // Hello. My name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.
  articulationPoints(V, edges) {
    // Build adjacency list
    const adj = Array.from({ length: V }, () => []);
    for (const [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }

    const disc = new Array(V).fill(-1);
    const low = new Array(V).fill(-1);
    const parent = new Array(V).fill(-1);
    const isArticulation = new Array(V).fill(false);
    let time = 0;

    const dfs = (u) => {
      disc[u] = low[u] = time;
      time++;
      let children = 0;

      for (const v of adj[u]) {
        if (disc[v] === -1) {
          parent[v] = u;
          children++;
          dfs(v);
          low[u] = Math.min(low[u], low[v]);

          // Check if current node is an articulation point for non-root
          if (parent[u] !== -1 && low[v] >= disc[u]) {
            isArticulation[u] = true;
          }
        } else if (v !== parent[u]) {
          // Back edge, update low value
          low[u] = Math.min(low[u], disc[v]);
        }
      }

      // Check if root node is an articulation point
      if (parent[u] === -1 && children > 1) {
        isArticulation[u] = true;
      }
    };

    for (let i = 0; i < V; i++) {
      if (disc[i] === -1) {
        dfs(i);
      }
    }

    const result = [];
    for (let i = 0; i < V; i++) {
      if (isArticulation[i]) {
        result.push(i);
      }
    }

    return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
  }
}
