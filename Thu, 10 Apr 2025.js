// Given a 2D array houses[][], consisting of n 2D coordinates {x, y} where each coordinate represents the location of each house, the task is to find the minimum cost to connect all the houses of the city.

// The cost of connecting two houses is the Manhattan Distance between the two points (xi, yi) and (xj, yj) i.e., |xi – xj| + |yi – yj|, where |p| denotes the absolute value of p.

// Examples :

// Input: n = 5 houses[][] = [[0, 7], [0, 9], [20, 7], [30, 7], [40, 70]]
// Output: 105
// Explanation:
// Connect house 1 (0, 7) and house 2 (0, 9) with cost = 2
// Connect house 1 (0, 7) and house 3 (20, 7) with cost = 20
// Connect house 3 (20, 7) with house 4 (30, 7) with cost = 10
// At last, connect house 4 (30, 7) with house 5 (40, 70) with cost 73.
// All the houses are connected now.
// The overall minimum cost is 2 + 10 + 20 + 73 = 105.

// Input: n = 4 houses[][] = [[0, 0], [1, 1], [1, 3], [3, 0]]
// Output: 7
// Explanation:
// Connect house 1 (0, 0) with house 2 (1, 1) with cost = 2
// Connect house 2 (1, 1) with house 3 (1, 3) with cost = 2
// Connect house 1 (0, 0) with house 4 (3, 0) with cost = 3
// The overall minimum cost is 3 + 2 + 2 = 7.

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
// Position this line where user code will be pasted.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
let currentLine = 0;

rl.on("line", function (line) {
  inputLines.push(line.trim());
});

rl.on("close", function () {
  let t = parseInt(inputLines[currentLine++]);

  for (let test = 0; test < t; test++) {
    let n = parseInt(inputLines[currentLine++]);
    let edges = [];

    for (let i = 0; i < n; i++) {
      let temp = inputLines[currentLine++].split(" ").map(Number);
      edges.push(temp);
    }

    let obj = new Solution();
    console.log(obj.minCost(edges));
    console.log("~");
  }
});
// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.
// User function Template for javascript

class Solution {
  minCost(houses) {
    const n = houses.length;
    if (n === 0) return 0;

    // Generate all possible edges between houses with their Manhattan distances
    const edges = [];
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = Math.abs(houses[i][0] - houses[j][0]);
        const dy = Math.abs(houses[i][1] - houses[j][1]);
        edges.push({ u: i, v: j, weight: dx + dy });
      }
    }

    // Sort edges by weight in ascending order
    edges.sort((a, b) => a.weight - b.weight);

    // Initialize Union-Find structure
    const uf = new UnionFind(n);
    let totalCost = 0;
    let edgesUsed = 0;

    // Process each edge in sorted order to build the MST
    for (const edge of edges) {
      if (edgesUsed === n - 1) break; // MST is complete when n-1 edges are used
      const u = edge.u;
      const v = edge.v;
      const weight = edge.weight;
      if (uf.find(u) !== uf.find(v)) {
        uf.union(u, v);
        totalCost += weight;
        edgesUsed++;
      }
    }

    return totalCost;
  }
}

// Union-Find (Disjoint Set Union) data structure with path compression and union by rank
class UnionFind {
  constructor(size) {
    this.parent = new Array(size);
    this.rank = new Array(size).fill(0);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  find(u) {
    if (this.parent[u] !== u) {
      this.parent[u] = this.find(this.parent[u]); // Path compression
    }
    return this.parent[u];
  }

  union(u, v) {
    const rootU = this.find(u);
    const rootV = this.find(v);
    if (rootU === rootV) return false; // Already connected

    // Union by rank
    if (this.rank[rootU] > this.rank[rootV]) {
      this.parent[rootV] = rootU;
    } else if (this.rank[rootU] < this.rank[rootV]) {
      this.parent[rootU] = rootV;
    } else {
      this.parent[rootV] = rootU;
      this.rank[rootU]++;
    }
    return true;
  }
}
