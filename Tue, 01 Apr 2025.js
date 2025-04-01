// DFS of Graph
// Difficulty: EasyAccuracy: 63.07%Submissions: 324K+Points: 2Average Time: 5m
// Given a connected undirected graph represented by a 2-d adjacency list adj[][], where each adj[i] represents the list of vertices connected to vertex i. Perform a Depth First Search (DFS) traversal starting from vertex 0, visiting vertices from left to right as per the given adjacency list, and return a list containing the DFS traversal of the graph.

// Note: Do traverse in the same order as they are in the given adjacency list.

// Examples:

// Input: adj[][] = [[2, 3, 1], [0], [0, 4], [0], [2]]

// Output: [0, 2, 4, 3, 1]
// Explanation: Starting from 0, the DFS traversal proceeds as follows:
// Visit 0 → Output: 0
// Visit 2 (the first neighbor of 0) → Output: 0, 2
// Visit 4 (the first neighbor of 2) → Output: 0, 2, 4
// Backtrack to 2, then backtrack to 0, and visit 3 → Output: 0, 2, 4, 3
// Finally, backtrack to 0 and visit 1 → Final Output: 0, 2, 4, 3, 1
// Input: adj[][] = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]]

// Output: [0, 1, 2, 3, 4]
// Explanation: Starting from 0, the DFS traversal proceeds as follows:
// Visit 0 → Output: 0
// Visit 1 (the first neighbor of 0) → Output: 0, 1
// Visit 2 (the first neighbor of 1) → Output: 0, 1, 2
// Visit 3 (the first neighbor of 2) → Output: 0, 1, 2, 3
// Backtrack to 2 and visit 4 → Final Output: 0, 1, 2, 3, 4
// Constraints:
// 1 ≤ adj.size() ≤ 104
// 1 ≤ adj[i][j] ≤ 104

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
  let testcases = parseInt(readLine());
  while (testcases-- > 0) {
    let V = parseInt(readLine());
    let adj = [];

    for (let i = 0; i < V; i++) {
      let input = readLine();
      let node = input ? input.split(" ").map(Number) : [];
      adj.push(node);
    }

    let obj = new Solution();
    let ans = obj.dfs(adj);
    console.log(ans.join(" "));
    console.log("~");
  }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[][]} adj
 * @returns {number[]}
 */

// My name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

class Solution {
  dfs(adj) {
    const n = adj.length;
    const visited = new Array(n).fill(false);
    const result = [];
    const stack = [[0, 0]]; // Each entry is [currentNode, currentIndex]

    while (stack.length > 0) {
      const [currentNode, currentIndex] = stack.pop();

      // If the node hasn't been visited yet, mark it as visited and add to the result
      if (!visited[currentNode]) {
        visited[currentNode] = true;
        result.push(currentNode);
      }

      // If we've checked all neighbors of the current node, continue to the next item in the stack
      if (currentIndex >= adj[currentNode].length) {
        continue;
      }

      // Push the current node back into the stack with the next index to process subsequent neighbors
      stack.push([currentNode, currentIndex + 1]);

      // Get the next neighbor to process based on the current index
      const nextNeighbor = adj[currentNode][currentIndex];

      // If the neighbor hasn't been visited, push it into the stack to process its neighbors
      if (!visited[nextNeighbor]) {
        stack.push([nextNeighbor, 0]);
      }
    }

    return result;
  }
}
