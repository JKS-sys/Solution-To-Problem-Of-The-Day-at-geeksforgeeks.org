// Given a Directed Acyclic Graph (DAG) of V (0 to V-1) vertices and E edges represented as a 2D list of edges[][], where each entry edges[i] = [u, v] denotes an directed edge u -> v. Return topological sort for the given graph.

// Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u -> v, vertex u comes before v in the ordering.
// Note: As there are multiple Topological orders possible, you may return any of them. If your returned Topological sort is correct then the output will be true else false.

// Examples:

// Input: V = 4, E = 3, edges[][] = [[3, 0], [1, 0], [2, 0]]

// Output: true
// Explanation: The output true denotes that the order is valid. Few valid Topological orders for the given graph are:
// [3, 2, 1, 0]
// [1, 2, 3, 0]
// [2, 3, 1, 0]
// Input: V = 6, E = 6, edges[][] = [[1, 3], [2, 3], [4, 1], [4, 0], [5, 0], [5,2]]

// Output: true
// Explanation: The output true denotes that the order is valid. Few valid Topological orders for the graph are:
// [4, 5, 0, 1, 2, 3]
// [5, 2, 4, 0, 1, 3]

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

function check(V, res, adj) {
  if (V != res.length) return 0;
  let map = new Array(V);
  map.fill(-1);
  for (let i = 0; i < V; i++) {
    map[res[i]] = i;
  }
  for (let i = 0; i < V; i++) {
    for (const v of adj[i]) {
      if (map[i] > map[v]) return 0;
    }
  }
  return 1;
}

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
      let adj = new Array(V);
      for (let i = 0; i < V; i++) {
        adj[i] = new Array();
      }

      for (let i = 0; i < E; i++) {
        let [u, v] = input[index++].split(" ").map(Number);
        edges.push([u, v]);
        adj[u].push(v);
      }

      let obj = new Solution();
      let res = obj.topoSort(V, edges);
      if (check(V, res, adj)) {
        console.log("true");
      } else {
        console.log("false");
      }
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
 * @returns {number[]}
 */
// Hello, my name is Jagadeesh Kumar   S. You can contact me at +91 73972 85837.
class Solution {
  topoSort(V, edges) {
    // Create adjacency list and in-degree array
    const adj = new Array(V).fill().map(() => []);
    const inDegree = new Array(V).fill(0);

    // Populate adjacency list and calculate in-degrees
    for (const [u, v] of edges) {
      adj[u].push(v);
      inDegree[v]++;
    }

    // Initialize queue with all nodes of in-degree zero
    const queue = [];
    for (let i = 0; i < V; i++) {
      if (inDegree[i] === 0) {
        queue.push(i);
      }
    }

    const topoOrder = [];
    while (queue.length > 0) {
      const u = queue.shift();
      topoOrder.push(u);

      // Decrement in-degree of all adjacent nodes
      for (const v of adj[u]) {
        inDegree[v]--;
        if (inDegree[v] === 0) {
          queue.push(v);
        }
      }
    }

    return topoOrder;
  }
}
