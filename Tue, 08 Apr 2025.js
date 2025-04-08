// Bridge edge in a graph
// Difficulty: MediumAccuracy: 34.61%Submissions: 55K+Points: 4
// Given an undirected graph with V vertices numbered from 0 to V-1 and E edges, represented by 2d array edges[][], where edges[i]=[u,v] represents the edge between the vertices u and v. Determine whether a specific edge between two vertices (c, d) is a bridge.

// Note:

// An edge is called a bridge if removing it increases the number of connected components of the graph.
// if there’s only one path between c and d (which is the edge itself), then that edge is a bridge.
// Examples :

// Input:

// c = 1, d = 2
// Output: true
// Explanation: From the graph, we can clearly see that blocking the edge 1-2 will result in disconnection of the graph.
// Hence, it is a Bridge.
// Input:

// c = 0, d = 2
// Output: false
// Explanation:

// Blocking the edge between nodes 0 and 2 won't affect the connectivity of the graph.
// So, it's not a Bridge Edge. All the Bridge Edges in the graph are marked with a blue line in the above image.
// Constraints:
// 1 ≤ V, E ≤ 105
// 0 ≤ c, d ≤ V-1

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

// Position this line where user code will be pasted.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
let currentLine = 0;

rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  let t = parseInt(inputLines[currentLine++]);

  for (let test = 0; test < t; test++) {
    let V = parseInt(inputLines[currentLine++]);
    let E = parseInt(inputLines[currentLine++]);

    let edges = [];
    for (let i = 0; i < E; i++) {
      let [u, v] = inputLines[currentLine++].split(" ").map(Number);
      edges.push([u, v]);
    }

    let c = parseInt(inputLines[currentLine++]);
    let d = parseInt(inputLines[currentLine++]);

    let obj = new Solution();
    let result = obj.isBridge(V, edges, c, d);

    console.log(result ? "true" : "false");
    console.log("~");
  }
});

// } Driver Code Ends

class Solution {
  // My name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.
  isBridge(V, edges, c, d) {
    // Count the number of edges between c and d
    let count_edges = 0;
    for (const edge of edges) {
      const [u, v] = edge;
      if ((u === c && v === d) || (u === d && v === c)) {
        count_edges++;
      }
    }

    // If there's not exactly one edge, it's not a bridge
    if (count_edges !== 1) {
      return false;
    }

    // Build the adjacency list excluding the edge (c, d)
    const adj = new Array(V).fill().map(() => []);
    for (const edge of edges) {
      const [u, v] = edge;
      if ((u === c && v === d) || (u === d && v === c)) {
        continue;
      }
      adj[u].push(v);
      adj[v].push(u);
    }

    // Check if c and d are connected in the modified graph using BFS
    const visited = new Array(V).fill(false);
    const queue = [c];
    visited[c] = true;
    let found = false;
    let front = 0;

    while (front < queue.length) {
      const node = queue[front++];
      if (node === d) {
        found = true;
        break;
      }
      for (const neighbor of adj[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    // If not found, the edge is a bridge
    return !found;
  }
}
