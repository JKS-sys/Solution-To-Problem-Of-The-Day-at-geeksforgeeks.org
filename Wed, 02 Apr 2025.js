// BFS of graph
// Difficulty: EasyAccuracy: 44.09%Submissions: 470K+Points: 2Average Time: 10m
// Given a connected undirected graph represented by a 2-d adjacency list adj[][], where each adj[i] represents the list of vertices connected to vertex i. Perform a Breadth First Search (BFS) traversal starting from vertex 0, visiting vertices from left to right according to the given adjacency list, and return a list containing the BFS traversal of the graph.

// Note: Do traverse in the same order as they are in the given adjacency list.

// Examples:

// Input: adj[][] = [[2, 3, 1], [0], [0, 4], [0], [2]]

// Output: [0, 2, 3, 1, 4]
// Explanation: Starting from 0, the BFS traversal will follow these steps:
// Visit 0 → Output: 0
// Visit 2 (first neighbor of 0) → Output: 0, 2
// Visit 3 (next neighbor of 0) → Output: 0, 2, 3
// Visit 1 (next neighbor of 0) → Output: 0, 2, 3,
// Visit 4 (neighbor of 2) → Final Output: 0, 2, 3, 1, 4
// Input: adj[][] = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]]

// Output: [0, 1, 2, 3, 4]
// Explanation: Starting from 0, the BFS traversal proceeds as follows:
// Visit 0 → Output: 0
// Visit 1 (the first neighbor of 0) → Output: 0, 1
// Visit 2 (the next neighbor of 0) → Output: 0, 1, 2
// Visit 3 (the first neighbor of 2 that hasn't been visited yet) → Output: 0, 1, 2, 3
// Visit 4 (the next neighbor of 2) → Final Output: 0, 1, 2, 3, 4

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
// Initial Template for JavaScript
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => string.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    const V = parseInt(readLine());

    let adj = new Array(V).fill().map(() => []);

    for (let j = 0; j < V; j++) {
      let neighbors = readLine().split(" ").map(Number);
      if (neighbors.length === 1 && neighbors[0] === "") continue;
      adj[j] = neighbors;
    }

    let obj = new Solution();
    let ans = obj.bfs(adj);

    console.log(ans.join(" "));
    console.log("~");
  }
}

// } Driver Code Ends

// My name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

// User function Template for javascript
class Solution {
  // Function to return Breadth First Search Traversal of the given graph.
  bfs(adj) {
    const V = adj.length; // Number of vertices
    const visited = new Array(V).fill(false); // Track visited vertices
    const queue = []; // Queue for BFS traversal
    let index = 0; // Pointer to track the current position in the queue
    const result = []; // To store the BFS traversal order

    // Start BFS from vertex 0
    queue.push(0);
    visited[0] = true;
    result.push(0);

    // Process all nodes in the queue
    while (index < queue.length) {
      const current = queue[index];
      index++; // Move to the next element in the queue

      // Iterate over all adjacent vertices of the current vertex
      for (const neighbor of adj[current]) {
        // If the neighbor hasn't been visited, process it
        if (!visited[neighbor]) {
          visited[neighbor] = true; // Mark as visited
          result.push(neighbor); // Add to result
          queue.push(neighbor); // Enqueue the neighbor
        }
      }
    }

    return result;
  }
}
