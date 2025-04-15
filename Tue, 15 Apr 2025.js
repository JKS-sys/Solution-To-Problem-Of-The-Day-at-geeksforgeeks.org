// Given an weighted graph with V vertices numbered from 0 to V-1 and E edges, represented by a 2d array edges[][], where edges[i] = [u, v, w] represents a direct edge from node u to v having w edge weight. You are also given a source vertex src.

// Your task is to compute the shortest distances from the source to all other vertices. If a vertex is unreachable from the source, its distance should be marked as 108. Additionally, if the graph contains a negative weight cycle, return [-1] to indicate that shortest paths cannot be reliably computed.

//{ Driver Code Starts
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
    let V = parseInt(readLine());
    let E = parseInt(readLine());

    let edges = new Array(E);
    for (let j = 0; j < E; j++) {
      let inputLine = readLine().split(" ").map(Number);
      edges[j] = [inputLine[0], inputLine[1], inputLine[2]];
    }

    let S = parseInt(readLine());

    let obj = new Solution();
    let res = obj.bellmanFord(V, edges, S);

    console.log(res.join(" "));
    console.log("~");
  }
}

// } Driver Code Ends

// User function Template for javascript
/**
 * Function to implement Bellman Ford
 * @param {number} V
 * @param {number[][]} edges
 * @param {number} src
 * @returns {number[]}
 */
// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.
class Solution {
  bellmanFord(V, edges, src) {
    // Initialize the distance array with Infinity and set source to 0
    let distance = new Array(V).fill(Infinity);
    distance[src] = 0;

    // Relax all edges V-1 times
    for (let i = 0; i < V - 1; i++) {
      for (const edge of edges) {
        const u = edge[0];
        const v = edge[1];
        const w = edge[2];
        // Check if we can relax the edge
        if (distance[u] !== Infinity && distance[v] > distance[u] + w) {
          distance[v] = distance[u] + w;
        }
      }
    }

    // Check for negative weight cycles
    let hasNegativeCycle = false;
    for (const edge of edges) {
      const u = edge[0];
      const v = edge[1];
      const w = edge[2];
      if (distance[u] !== Infinity && distance[v] > distance[u] + w) {
        // If we can still relax the edge, there's a negative cycle
        hasNegativeCycle = true;
        break;
      }
    }

    if (hasNegativeCycle) {
      return [-1];
    }

    // Replace unreachable nodes (Infinity) with 100000000 (1e8)
    for (let i = 0; i < V; i++) {
      if (distance[i] === Infinity) {
        distance[i] = 100000000;
      }
    }

    return distance;
  }
}
