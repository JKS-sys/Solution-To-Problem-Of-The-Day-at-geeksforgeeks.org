// Given a connected undirected graph represented by adjacency list, adjList[][] with n nodes, having a distinct label from 0 to n-1, where each adj[i] represents the list of vertices connected to vertex i.

// Create a clone of the graph, where each node in the graph contains an integer val and an array (neighbors) of nodes, containing nodes that are adjacent to the current node.

// class Node {
//     val: integer
//     neighbors: List[Node]
// }
// Your task is to complete the function cloneGraph( ) which takes a starting node of the graph as input and returns the copy of the given node as a reference to the cloned graph.

// Note: If you return a correct copy of the given graph, then the driver code will print true; and if an incorrect copy is generated or when you return the original node, the driver code will print false.

// Examples :

// Input: n = 4, adjList[][] = [[1, 2], [0, 2], [0, 1, 3], [2]]
// Output: true
// Explanation:

// As the cloned graph is identical to the original one the driver code will print true.
// Input: n = 3, adjList[][] = [[1, 2], [0], [0]]
// Output: true
// Explanation:

// As the cloned graph is identical to the original one the driver code will print true.

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

// Define Node class
class Node {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function bfs(src) {
  const ans = [];
  const visited = new Set();
  const queue = [src];
  visited.add(src);

  while (queue.length > 0) {
    const u = queue.shift();
    ans.push(u);

    for (const v of u.neighbors) {
      if (!visited.has(v)) {
        visited.add(v);
        queue.push(v);
      }
    }
  }

  return ans;
}

// Check if the clone is a deep copy
function checkedClone(prev, new1) {
  const prevAns = bfs(prev);
  const newAns = bfs(new1);
  for (let i = 0; i < prevAns.length; i++) {
    if (prevAns[i] === newAns[i]) return false;
  }
  return true;
}

// Input simulation (Node.js)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let index = 0;
  const t = parseInt(input[index++]);
  for (let test = 0; test < t; test++) {
    const n = parseInt(input[index++]);
    const v = new Array(n);
    for (let i = 0; i < n; i++) {
      v[i] = new Node(i);
    }

    const sol = new Solution();
    for (let i = 0; i < n; i++) {
      const arr = input[index++].split(" ").filter((s) => s !== "");
      const li = arr.map((s) => v[parseInt(s)]);
      v[i].neighbors = li;
    }

    const prev = bfs(v[0]);
    const ans = sol.cloneGraph(v[0]);
    const now = bfs(ans);
    console.log(checkedClone(v[0], ans) ? "true" : "false");
    console.log("~");
  }
});
// } Driver Code Ends

// User function Template for javascript
/*
class Node {
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}
*/
// Hello. My name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.
class Solution {
  cloneGraph(node) {
    // Handle edge where the input node is null
    if (node === null) return null;

    // Create a map to keeptrack of visited nodes and their clones
    const visited = new Map();

    // Create the clone of the given starting node
    const cloneRoot = new Node(node.val);
    // Map the original node to its clone
    visited.set(node, cloneRoot);

    // Initialize a queue for BFS and enqueue the riginal node
    const queue = [node];

    // Process all nodes in the queue
    while (queue.length > 0) {
      // Dequeue the front node frpm the queue
      const currentNode = queue.shift();

      // Iterate over all neighbors of the current node
      for (const neighbor of currentNode.neighbors) {
        // If the neighbor hasn't been cloned yet
        if (!visited.has(neighbor)) {
          // Create a clone of the neighbor
          const cloneNeighbor = new Node(neighbor.val);
          // Map the original neighbor to its clone
          visited.set(neighbor, cloneNeighbor);
          // Enqueue the original neighbor for processing its neighbors
          queue.push(neighbor);
        }

        // Retrieve the clone of the current node
        const currentClone = visited.get(currentNode);
        // Retrieve the clone of the neighbor and add it to the current clone's neighbors
        currentClone.neighbors.push(visited.get(neighbor));
      }
    }

    // Return the clone of the starting node
    return cloneRoot;
  }
}
