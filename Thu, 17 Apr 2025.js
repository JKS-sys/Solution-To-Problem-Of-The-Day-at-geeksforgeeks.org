// Minimum Weight Cycle
// Difficulty: HardAccuracy: 76.2%Submissions: 4K+Points: 8
// Given an undirected, weighted graph with V vertices numbered from 0 to V-1 and E edges, represented by a 2d array edges[][], where edges[i] = [u, v, w] represents the edge between the nodes u and v having w edge weight.
// Your task is to find the minimum weight cycle in this graph.

// Examples:

// Input: V = 5, edges[][] = [[0, 1, 2], [1, 2, 2], [1, 3, 1], [1, 4, 1], [0, 4, 3], [2, 3, 4]]

// Output: 6
// Explanation:

// Minimum-weighted cycle is  0 → 1 → 4 → 0 with a total weight of 6(2 + 1 + 3)
// Input: V = 5, edges[][] = [[0, 1, 3], [1, 2, 2], [0, 4, 1], [1, 4, 2], [1, 3, 1], [3, 4, 2], [2, 3, 3]]

// Output: 5
// Explanation:

// Minimum-weighted cycle is  1 → 3 → 4 → 1 with a total weight of 5(1 + 2 + 2)
// Constraints:
// 1 ≤ V ≤ 100
// 1 ≤ E = edges.size() ≤ 103
// 1 ≤ edges[i][j] ≤ 100

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

// youtube:
//   channel: "https://www.youtube.com/@JKS-sys"
//   content: "Covers a variety of topics including Data Structures, Algorithms, and Competitive Programming."
//   topics:
//     - "Tutorials on various programming languages and frameworks"
//     - "Live coding sessions and problem-solving strategies"
//     - "Interviews with industry experts and coding competitions"
//     - "Tips and tricks for improving coding skills and interview preparation"
//     - "Collaborations with other YouTubers and coding communities"
//     - "Engaging with the audience through Q&A sessions and feedback"
//     - "Sharing personal experiences and insights on the tech industry"
//     - "Exploring new technologies and trends in the programming world"
//     - "Providing resources and recommendations for further learning"
//     - "Encouraging viewers to participate in coding challenges and competitions"
//     - "Building a community of like-minded individuals passionate about coding and technology"
//     - "Sharing success stories and achievements of viewers who have benefited from the channel"
//     - "Creating a positive and supportive environment for learning and growth"
//     - "Encouraging viewers to share their own coding journeys and experiences"
//     - "Fostering a culture of collaboration and knowledge sharing among viewers"
//     - "Promoting diversity and inclusion in the tech community"
//     - "Encouraging viewers to give back to the community through mentorship and support"
//     - "Sharing resources and opportunities for networking and career growth"
//     - "Encouraging viewers to stay curious and keep learning"
//     - "Sharing tips for maintaining a healthy work-life balance in the tech industry"
//     - "Encouraging viewers to pursue their passions and interests in technology"
// ---

//{ Driver Code Starts
// Initial Template for javascript

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const t = parseInt(input[idx++]);

  for (let test = 0; test < t; test++) {
    const V = parseInt(input[idx++]);
    const E = parseInt(input[idx++]);

    let edges = [];

    for (let i = 0; i < E; i++) {
      const [u, v, w] = input[idx++].split(" ").map(Number);
      edges.push([u, v, w]);
      edges.push([v, u, w]); // Undirected
    }

    const obj = new Solution();
    const res = obj.findMinCycle(V, edges);

    console.log(res);
  }
});
// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.
class Solution {
  findMinCycle(V, edges) {
    let minCycle = Infinity;
    const E = edges.length / 2; // Each original edge is stored twice

    // Iterate over each original edge
    for (let i = 0; i < E; i++) {
      // Get the two entries of the original edge
      const edge1 = edges[2 * i];
      const edge2 = edges[2 * i + 1];
      const u = edge1[0];
      const v = edge1[1];
      const w = edge1[2];

      // Build adjacency list excluding the current original edge (both directions)
      const adj = Array.from({ length: V }, () => []);
      for (let j = 0; j < edges.length; j++) {
        // Skip the two entries of the current original edge
        if (j === 2 * i || j === 2 * i + 1) {
          continue;
        }
        const [a, b, weight] = edges[j];
        adj[a].push([b, weight]);
      }

      // Compute shortest path from u to v using Dijkstra's algorithm
      const distance = this.dijkstra(adj, u, v);

      // If a path exists, calculate the cycle weight and update minCycle
      if (distance !== Infinity) {
        const cycleWeight = distance + w;
        if (cycleWeight < minCycle) {
          minCycle = cycleWeight;
        }
      }
    }

    // If no cycle found, return -1 (though per problem statement, cycles exist)
    return minCycle === Infinity ? -1 : minCycle;
  }

  // Dijkstra's algorithm to find shortest path from start to end
  dijkstra(adj, start, end) {
    const V = adj.length;
    const dist = new Array(V).fill(Infinity);
    const visited = new Array(V).fill(false);
    dist[start] = 0;

    for (let i = 0; i < V; i++) {
      let u = -1;
      // Find the unvisited node with the smallest distance
      for (let j = 0; j < V; j++) {
        if (!visited[j] && (u === -1 || dist[j] < dist[u])) {
          u = j;
        }
      }

      // If no unvisited node found with finite distance, break
      if (u === -1 || dist[u] === Infinity) {
        break;
      }

      visited[u] = true;

      // Early exit if we've reached the end node
      if (u === end) {
        break;
      }

      // Update distances for adjacent nodes
      for (const [v, weight] of adj[u]) {
        if (dist[v] > dist[u] + weight) {
          dist[v] = dist[u] + weight;
        }
      }
    }

    return dist[end];
  }
}
