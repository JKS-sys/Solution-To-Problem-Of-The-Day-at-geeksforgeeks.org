// Given an undirected, weighted graph with V vertices numbered from 0 to V-1 and E edges, represented by 2d array edges[][], where edges[i]=[u, v, w] represents the edge between the nodes u and v having w edge weight.
// You have to find the shortest distance of all the vertices from the source vertex src, and return an array of integers where the ith element denotes the shortest distance between ith node and source vertex src.

// Note: The Graph is connected and doesn't contain any negative weight edge.

// Examples:

// Input: V = 3, edges[][] = [[0, 1, 1], [1, 2, 3], [0, 2, 6]], src = 2
// Output: [4, 3, 0]
// Explanation:

// Shortest Paths:
// For 2 to 0 minimum distance will be 4. By following path 2 -> 1 -> 0
// For 2 to 1 minimum distance will be 3. By following path 2 -> 1
// For 2 to 2 minimum distance will be 0. By following path 2 -> 2
// Input: V = 5, edges[][] = [[0, 1, 4], [0, 2, 8], [1, 4, 6], [2, 3, 2], [3, 4, 10]], src = 0
// Output: [0, 4, 8, 10, 10]
// Explanation:

// Shortest Paths:
// For 0 to 1 minimum distance will be 4. By following path 0 -> 1
// For 0 to 2 minimum distance will be 8. By following path 0 -> 2
// For 0 to 3 minimum distance will be 10. By following path 0 -> 2 -> 3
// For 0 to 4 minimum distance will be 10. By following path 0 -> 1 -> 4

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
//   - "Tutorials on various programming languages and frameworks"
//   - "Live coding sessions and problem-solving strategies"
//   - "Interviews with industry experts and coding competitions"
//   - "Tips and tricks for improving coding skills and interview preparation"
//   - "Collaborations with other YouTubers and coding communities"
//   - "Engaging with the audience through Q&A sessions and feedback"
//   - "Sharing personal experiences and insights on the tech industry"
//   - "Exploring new technologies and trends in the programming world"
//   - "Providing resources and recommendations for further learning"
//   - "Encouraging viewers to participate in coding challenges and competitions"
//   - "Building a community of like-minded individuals passionate about coding and technology"
//   - "Sharing success stories and achievements of viewers who have benefited from the channel"
//   - "Creating a positive and supportive environment for learning and growth"
//   - "Encouraging viewers to share their own coding journeys and experiences"
//   - "Fostering a culture of collaboration and knowledge sharing among viewers"
//   - "Promoting diversity and inclusion in the tech community"
//   - "Encouraging viewers to give back to the community through mentorship and support"
//   - "Sharing resources and opportunities for networking and career growth"
//   - "Encouraging viewers to stay curious and keep learning"
//   - "Sharing tips for maintaining a healthy work-life balance in the tech industry"
//   - "Encouraging viewers to pursue their passions and interests in technology"
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

    const src = parseInt(input[idx++]);

    const obj = new Solution();
    const res = obj.dijkstra(V, edges, src);

    console.log(res.join(" "));
    console.log("~");
  }
});
// } Driver Code Ends

// User function Template for javascript
class Solution {
  // Returns shortest distances from src to all other vertices
  dijkstra(V, edges, src) {
    // Build adjacency list using standard arrays for efficiency
    const adj = Array.from({ length: V }, () => []);
    for (const [u, v, w] of edges) {
      adj[u].push([v, w]);
    }

    // Initialize distances with Infinity and source to 0
    const dist = new Array(V).fill(Infinity);
    dist[src] = 0;

    // Optimized priority queue with 1-based indexing
    const pq = new PriorityQueue();
    pq.insert([0, src]);

    while (!pq.isEmpty()) {
      const [currentDist, u] = pq.extractMin();

      // Skip if a shorter path already exists
      if (currentDist > dist[u]) continue;

      // Process neighbors using a standard for loop
      const neighbors = adj[u];
      for (let i = 0; i < neighbors.length; i++) {
        const edge = neighbors[i];
        const v = edge[0];
        const w = edge[1];
        const newDist = currentDist + w;
        if (newDist < dist[v]) {
          dist[v] = newDist;
          pq.insert([newDist, v]);
        }
      }
    }

    return dist;
  }
}

// High-performance priority queue using 1-based heap indexing
class PriorityQueue {
  constructor() {
    this.heap = [null]; // Index 0 unused for faster bitwise operations
  }

  insert(element) {
    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    const element = this.heap[index];
    while (index > 1) {
      const parentIdx = index >> 1; // Faster than Math.floor
      if (this.heap[parentIdx][0] <= element[0]) break;
      this.heap[index] = this.heap[parentIdx];
      index = parentIdx;
    }
    this.heap[index] = element;
  }

  extractMin() {
    const min = this.heap[1];
    const last = this.heap.pop();
    if (this.heap.length > 1) {
      this.heap[1] = last;
      this.bubbleDown(1);
    }
    return min;
  }

  bubbleDown(index) {
    const element = this.heap[index];
    const length = this.heap.length;
    while (true) {
      const left = index << 1;
      const right = left + 1;
      let swapIdx = null;

      // Compare with left child
      if (left < length && this.heap[left][0] < element[0]) {
        swapIdx = left;
      }

      // Compare with right child (only if smaller than left)
      if (right < length) {
        if (
          (swapIdx === null && this.heap[right][0] < element[0]) ||
          (swapIdx !== null && this.heap[right][0] < this.heap[left][0])
        ) {
          swapIdx = right;
        }
      }

      if (swapIdx === null) break;

      // Perform the swap
      this.heap[index] = this.heap[swapIdx];
      index = swapIdx;
    }
    this.heap[index] = element;
  }

  isEmpty() {
    return this.heap.length === 1;
  }
}
