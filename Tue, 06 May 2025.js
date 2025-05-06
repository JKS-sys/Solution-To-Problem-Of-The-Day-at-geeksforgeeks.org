// Left View of Binary Tree
// Difficulty: EasyAccuracy: 33.74%Submissions: 551K+Points: 2Average Time: 20m
// You are given the root of a binary tree. Your task is to return the left view of the binary tree. The left view of a binary tree is the set of nodes visible when the tree is viewed from the left side.

// If the tree is empty, return an empty list.

// Examples :

// Input: root[] = [1, 2, 3, 4, 5, N, N]

// Output: [1, 2, 4]
// Explanation: From the left side of the tree, only the nodes 1, 2, and 4 are visible.

// Input: root[] = [1, 2, 3, N, N, 4, N, N, 5, N, N]

// Output: [1, 2, 4, 5]
// Explanation: From the left side of the tree, the nodes 1, 2, 4, and 5 are visible.

// Input: root[] = [N]
// Output: []
// Constraints:
// 0 <= number of nodes <= 106
// 0 <= node -> data <= 105

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
    let res = obj.leftView(root);
    let s = "";
    if (res.length === 0) {
      s += "[]";
    }
    for (let i = 0; i < res.length; i++) {
      if (!isNaN(res[i])) s += res[i] + " ";
    }
    console.log(s);

    console.log("~");
  }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {Node} root
 * @returns {number[]}
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

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

class Solution {
  leftView(root) {
    // Initialize the result array
    let result = [];
    // If the tree is empty, return empty result
    if (root === null) return result;

    // Start with the root node as the current level
    let currentLevel = [root];

    // Process each level until there are no more nodes
    while (currentLevel.length > 0) {
      // Add the first node of the current level to the result (leftmost node)
      result.push(currentLevel[0].data);

      // Prepare the next level by collecting all children of current nodes
      let nextLevel = [];
      for (let node of currentLevel) {
        // Add left child first, then right child to maintain level order
        if (node.left !== null) {
          nextLevel.push(node.left);
        }
        if (node.right !== null) {
          nextLevel.push(node.right);
        }
      }

      // Move to the next level
      currentLevel = nextLevel;
    }

    // Return the final left view result
    return result;
  }
}
