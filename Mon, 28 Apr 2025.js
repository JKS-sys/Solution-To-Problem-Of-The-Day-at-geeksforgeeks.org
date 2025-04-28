// Given a binary tree with a value associated with each node. Your task is to select a subset of nodes such that the sum of their values is maximized, with the condition that no two selected nodes are directly connected that is, if a node is included in the subset, neither its parent nor its children can be included.

// Examples:

// Input: root[] = [11, 1, 2]

// Output: 11
// Explanation: The maximum sum is obtained by selecting the node 11.

// Input: root[] = [1, 2, 3, 4, N, 5, 6]

// Output: 16
// Explanation: The maximum sum is obtained by selecting the nodes 1, 4, 5, and 6, which are not directly connected to each other. Their total sum is 16.

//{ Driver Code Starts
//Initial Template for javascript
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
    console.log(obj.getMaxSum(root));

    console.log("~");
  }
}
// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

// User function Template for javascript

/**
 * @param {Node} root
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
  // Function to return the maximum sum of non-adjacent nodes.
  getMaxSum(root) {
    if (!root) return 0;

    const stack = [];
    const dp = new Map(); // Maps nodes to [include, exclude]

    stack.push([root, false]);

    while (stack.length > 0) {
      const [node, processed] = stack.pop();

      if (!node) continue;

      if (!processed) {
        // Push the node back with processed set to true
        stack.push([node, true]);
        // Push right child first so left is processed first (stack is LIFO)
        if (node.right) stack.push([node.right, false]);
        if (node.left) stack.push([node.left, false]);
      } else {
        let left = [0, 0];
        let right = [0, 0];

        // Retrieve values from left child if present
        if (node.left) left = dp.get(node.left);
        // Retrieve values from right child if present
        if (node.right) right = dp.get(node.right);

        // Calculate include and exclude for the current node
        const include = node.data + left[1] + right[1];
        const exclude =
          Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

        // Store the computed values in the map
        dp.set(node, [include, exclude]);
      }
    }

    // Get the result for the root and return the maximum of include and exclude
    const result = dp.get(root);
    return Math.max(result[0], result[1]);
  }
}
