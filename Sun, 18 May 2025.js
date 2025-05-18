// Sun, 18 May 2025

// Given a binary tree and the task is to find the spiral order traversal of the tree and return the list containing the elements.
// Spiral order Traversal mean: Starting from level 0 for root node, for all the even levels we print the node's value from right to left and for all the odd levels we print the node's value from left to right.
// For below tree, function should return [1, 2, 3, 4, 5, 6, 7]

// Examples:

// Input: root = [1, 3, 2]

// Output: [1, 3, 2]
// Explanation: Start with root (1), print level 0 (right to left), then level 1 (left to right).
// Input: root = [10, 20, 30, 40, 60]

// Output: [10, 20, 30, 60, 40]
// Explanation: Start with root (10), print level 0 (right to left), level 1 (left to right), and continue alternating.
// Input: root = [1, 2, N, 4]

// Output: [1, 2, 4]
// Explanation: Start with root (1), then level 1 (left to right), then level 2 (right to left).
// Constraints:
// 1 <= number of nodes <= 105
// 0 <= node->data <= 105

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

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buildTree(str) {
  // Corner Case
  if (str.length === 0 || str[0] === "N") return null;

  // Create the root of the tree
  let root = new Node(parseInt(str[0]));

  // Push the root to the queue
  let queue = [];
  let start = 0;
  queue.push(root);

  // Starting from the second element
  let i = 1;
  while (queue.length !== start && i < str.length) {
    // Get and remove the front of the queue
    let currNode = queue[start];
    start++;

    // Get the current node's value from the string
    let currVal = str[i];

    // If the left child is not null
    if (currVal !== "N") {
      // Create the left child for the current node
      currNode.left = new Node(parseInt(currVal));

      // Push it to the queue
      queue.push(currNode.left);
    }

    // For the right child
    i++;
    if (i >= str.length) break;
    currVal = str[i];

    // If the right child is not null
    if (currVal !== "N") {
      // Create the right child for the current node
      currNode.right = new Node(parseInt(currVal));

      // Push it to the queue
      queue.push(currNode.right);
    }
    i++;
  }

  return root;
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input_ar1 = readLine().split(" ");
    let root = buildTree(input_ar1);
    let obj = new Solution();
    let res = obj.findSpiral(root);
    let s = "";
    for (let i = 0; i < res.length; i++) {
      s += res[i] + " ";
    }
    console.log(s);

    console.log("~");
  }
}
// } Driver Code Ends

/**
 * @param {Node} root
 * @returns {number[]}
 */
/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
} */

class Solution {
  findSpiral(root) {
    // If the tree is empty, return an empty array
    if (!root) return [];

    // Initialize the result array
    const result = [];

    // Use two stacks: one for even levels and one for odd levels
    let stackEven = [];
    let stackOdd = [];

    // Start with the root in the even level stack (level 0 is even)
    stackEven.push(root);

    // Track the current level (starting at 0)
    let currentLevel = 0;

    // Process nodes while either stack has elements
    while (stackEven.length > 0 || stackOdd.length > 0) {
      // Temporary array to hold current level's node values
      const currentLevelList = [];

      if (currentLevel % 2 === 0) {
        // Process even level: right to left
        while (stackEven.length > 0) {
          // Pop the last element from stackEven
          const node = stackEven.pop();
          // Add node's value to current level list
          currentLevelList.push(node.data);

          // Push right child first, then left to stackOdd (to ensure next level is left to right)
          if (node.right) stackOdd.push(node.right);
          if (node.left) stackOdd.push(node.left);
        }
      } else {
        // Process odd level: left to right
        while (stackOdd.length > 0) {
          // Pop the last element from stackOdd
          const node = stackOdd.pop();
          // Add node's value to current level list
          currentLevelList.push(node.data);

          // Push left child first, then right to stackEven (to ensure next level is right to left)
          if (node.left) stackEven.push(node.left);
          if (node.right) stackEven.push(node.right);
        }
      }

      // Add current level's values to the result array
      result.push(...currentLevelList);

      // Move to the next level
      currentLevel++;
    }

    // Return the final result array
    return result;
  }
}
