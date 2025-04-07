// Given a Directed Graph with V vertices (Numbered from 0 to V-1) and E edges, check whether it contains any cycle or not.
// The graph is represented as a 2D vector edges[][], where each entry edges[i] = [u, v] denotes an edge from verticex u to v.

// Examples:

// Input: V = 4, edges[][] = [[0, 1], [1, 2], [2, 3], [3, 3]]

// Output: true
// Explanation: 3 -> 3 is a cycle
// Input: V = 3, edges[][] = [[0, 1], [1, 2]]

// Output: false
// Explanation: no cycle in the graph

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
      let ans = obj.isCyclic(V, edges);
      console.log(ans ? "true" : "false");
    }
  });
}

main();
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {boolean}
 */
// My name is Jagadeesh Kumar   S
// You contact me at +91 73972 85837
class Solution {
  // Function to detect cycle in a directed graph.
  isCyclic(V, edges) {
    // Create adjacency list and in-degree array
    const adj = Array.from({ length: V }, () => []);
    const inDegree = new Array(V).fill(0);

    // Populate adjacency list and in-degree array based on edges
    for (const [u, v] of edges) {
      adj[u].push(v);
      inDegree[v]++;
    }

    // Initialize queue with nodes having zero in-degree
    const queue = [];
    let front = 0; // Pointer to track the front of the queue for efficient dequeuing
    for (let i = 0; i < V; i++) {
      if (inDegree[i] === 0) {
        queue.push(i);
      }
    }

    let count = 0; // Count of processed nodes

    // Process nodes in the queue
    while (front < queue.length) {
      const u = queue[front];
      front++;
      count++;
      // Decrement in-degree of each neighbor and enqueue if in-degree becomes zero
      for (const v of adj[u]) {
        inDegree[v]--;
        if (inDegree[v] === 0) {
          queue.push(v);
        }
      }
    }

    // If not all nodes are processed, a cycle exists
    return count !== V;
  }
}
