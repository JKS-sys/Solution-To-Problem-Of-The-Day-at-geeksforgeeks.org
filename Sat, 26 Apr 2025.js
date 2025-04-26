// Is Binary Tree Heap
// Difficulty: MediumAccuracy: 34.41%Submissions: 116K+Points: 4
// You are given a binary tree, and the task is to determine whether it satisfies the properties of a max-heap.

// A binary tree is considered a max-heap if it satisfies the following conditions:

// Completeness: Every level of the tree, except possibly the last, is completely filled, and all nodes are as far left as possible.
// Max-Heap Property: The value of each node is greater than or equal to the values of its children.
// Examples:

// Input: root[] = [97, 46, 37, 12, 3, 7, 31, 6, 9]

// Output: true
// Explanation: The tree is complete and satisfies the max-heap property.
// Input: root[] = [97, 46, 37, 12, 3, 7, 31, N, 2, 4]

// Output: false
// Explanation: The tree is not complete and does not follow the Max-Heap Property, hence it is not a max-heap.
// Constraints:
// 1 ≤ number of nodes ≤ 103
// 1 ≤ node->data ≤ 103

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
    if (obj.isHeap(root)) {
      console.log("true");
    } else {
      console.log("false");
    }

    console.log("~");
  }
}

// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

// User function Template for javascript

/**
 * @param {Node} root
 * @returns {boolean}
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
  isHeap(root) {
    // Check if the tree is a complete binary tree
    if (root === null) return true; // Handles edge case, though constraints say nodes >=1

    let queue = [];
    queue.push({ node: root, index: 0 });
    let count = 0;
    let maxIndex = 0;

    // Traverse the tree to calculate count and maxIndex
    while (queue.length > 0) {
      const { node, index } = queue.shift();
      count++;
      maxIndex = Math.max(maxIndex, index);

      // Enqueue left child with its calculated index
      if (node.left !== null) {
        queue.push({ node: node.left, index: 2 * index + 1 });
      }

      // Enqueue right child with its calculated index
      if (node.right !== null) {
        queue.push({ node: node.right, index: 2 * index + 2 });
      }
    }

    // Check if the tree is complete
    const isComplete = count === maxIndex + 1;
    if (!isComplete) {
      return false;
    }

    // Check if the tree satisfies max-heap property
    queue = [root];
    while (queue.length > 0) {
      const node = queue.shift();

      // Check left child
      if (node.left !== null) {
        if (node.data < node.left.data) {
          return false;
        }
        queue.push(node.left);
      }

      // Check right child
      if (node.right !== null) {
        if (node.data < node.right.data) {
          return false;
        }
        queue.push(node.right);
      }
    }

    // Both conditions are satisfied
    return true;
  }
}
