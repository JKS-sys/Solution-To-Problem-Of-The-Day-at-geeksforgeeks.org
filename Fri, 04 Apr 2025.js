// Undirected Graph Cycle
// Difficulty: MediumAccuracy: 30.13%Submissions: 541K+Points: 4Average Time: 20m
// Given an undirected graph with V vertices and E edges, represented as a 2D vector edges[][], where each entry edges[i] = [u, v] denotes an edge between vertices u and v, determine whether the graph contains a cycle or not.

// Examples:

// Input: V = 4, E = 4, edges[][] = [[0, 1], [0, 2], [1, 2], [2, 3]]
// Output: true
// Explanation:

// 1 -> 2 -> 0 -> 1 is a cycle.
// Input: V = 4, E = 3, edges[][] = [[0, 1], [1, 2], [2, 3]]
// Output: false
// Explanation:

// No cycle in the graph.
// Constraints:
// 1 ≤ V ≤ 105
// 1 ≤ E = edges.size() ≤ 105

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
// Initial Template for javascript
"use strict";

function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  readline.on("line", (line) => {
    input.push(line);
  });

  readline.on("close", () => {
    let index = 0;
    let tc = parseInt(input[index++]);
    while (tc-- > 0) {
      let V = parseInt(input[index++]);
      let E = parseInt(input[index++]);
      let edges = [];
      for (let i = 0; i < E; i++) {
        let [u, v] = input[index++].split(" ").map(Number);
        edges.push([u, v]);
      }

      let obj = new Solution();
      let ans = obj.isCycle(V, edges);
      console.log(ans ? "true" : "false");
      console.log("~");
    }
  });
}

main();
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {boolean}
 */

// My name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

class Solution {
  isCycle(V, edges) {
    // Initialize parent array where each node is its own parent initially
    const parent = new Array(V);
    // Initialize rank array to keep track of the depth of each tree for union by rank
    const rank = new Array(V).fill(0);
    for (let i = 0; i < V; i++) {
      parent[i] = i;
    }

    // Process each edge in the graph
    for (const [u, v] of edges) {
      // Find the root of the sets to which u and v belong
      const rootU = this.find(u, parent);
      const rootV = this.find(v, parent);

      // If both nodes have the same root, a cycle is detected
      if (rootU === rootV) {
        return true;
      }

      // Union the two sets if no cycle is detected
      this.union(rootU, rootV, parent, rank);
    }

    // If no cycle found after processing all edges
    return false;
  }

  // Find function with path compression
  find(x, parent) {
    if (parent[x] !== x) {
      parent[x] = this.find(parent[x], parent); // Path compression
    }
    return parent[x];
  }

  // Union function by rank
  union(x, y, parent, rank) {
    const rootX = x;
    const rootY = y;

    // Attach the smaller rank tree under the root of the higher rank tree
    if (rank[rootX] < rank[rootY]) {
      parent[rootX] = rootY;
    } else if (rank[rootY] < rank[rootX]) {
      parent[rootY] = rootX;
    } else {
      // If ranks are the same, arbitrarily choose one to be the parent and increment its rank
      parent[rootY] = rootX;
      rank[rootX]++;
    }
  }
}
