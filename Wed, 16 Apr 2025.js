// You are given an weighted directed graph, represented by an adjacency matrix, dist[][] of size n x n, where dist[i][j] represents the weight of the edge from node i to node j. If there is no direct edge, dist[i][j] is set to a large value (i.e., 108) to represent infinity.
// The graph may contain negative edge weights, but it does not contain any negative weight cycles.

// Your task is to find the shortest distance between every pair of nodes i and j in the graph.

// Note: Modify the distances for every pair in place.

// Examples :

// Input: dist[][] = [[0, 4, 108, 5, 108], [108, 0, 1, 108, 6], [2, 108, 0, 3, 108], [108, 108, 1, 0, 2], [1, 108, 108, 4, 0]]

// Output: [[0, 4, 5, 5, 7], [3, 0, 1, 4, 6], [2, 6, 0, 3, 5], [3, 7, 1, 0, 2], [1, 5, 5, 4, 0]]

// Explanation: Each cell dist[i][j] in the output shows the shortest distance from node i to node j, computed by considering all possible intermediate nodes.
// Input: dist[][] = [[0, -1, 2], [1, 0, 108], [3, 1, 0]]

// Output: [[0, -1, 2], [1, 0, 3], [2, 1, 0]]

// Explanation: Each cell dist[i][j] in the output shows the shortest distance from node i to node j, computed by considering all possible intermediate nodes.
// From 2 to 0 shortest distance should be 2 by following path 2 -> 1 -> 0
// From 1 to 2 shortest distance should be 3 by following path 1 -> 0 -> 2
// Constraints:
// 1 ≤ dist.size() ≤ 100
// -1000 ≤ dist[i][j] ≤ 1000

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
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let N;
    N = parseInt(readLine());
    let matrix = [];
    for (let i = 0; i < N; ++i) {
      let row = readLine()
        .trim()
        .split(" ")
        .map((x) => parseInt(x));
      matrix.push(row);
    }
    let obj = new Solution();
    obj.floydWarshall(matrix);
    for (let i = 0; i < N; i++) {
      let s = "";
      for (let j = 0; j < N; j++) s += matrix[i][j] + " ";
      console.log(s);
    }

    console.log("~");
  }
}
// } Driver Code Ends

// User function template for javascript
/**
 * @param {number[][]} matrix
 * @returns {number}
 */
// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.
class Solution {
  floydWarshall(dist) {
    const n = dist.length;

    // Iterate over all possible intermediate nodes k
    for (let k = 0; k < n; k++) {
      // For each pair of nodes (i, j), check if the path through k is shorter
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          // Avoid potential overflow by ensuring intermediate paths are valid
          const throughK = dist[i][k] + dist[k][j];
          // Update the distance if the new path is shorter
          if (throughK < dist[i][j]) {
            dist[i][j] = throughK;
          }
        }
      }
    }
  }
}
