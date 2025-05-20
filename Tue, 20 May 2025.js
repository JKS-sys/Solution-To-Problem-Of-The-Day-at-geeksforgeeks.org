// Tue, 20 May 2025

// Burning Tree
// Difficulty: HardAccuracy: 53.53%Submissions: 108K+Points: 8
// Given a binary tree and a target node, determine the minimum time required to burn the entire tree if the target node is set on fire. In one second, the fire spreads from a node to its left child, right child, and parent.
// Note: The tree contains unique values.

// Examples :

// Input: root[] = [1, 2, 3, 4, 5, 6, 7], target = 2

// Output: 3
// Explanation: Initially 2 is set to fire at 0 sec
// At 1 sec: Nodes 4, 5, 1 catches fire.
// At 2 sec: Node 3 catches fire.
// At 3 sec: Nodes 6, 7 catches fire.
// It takes 3s to burn the complete tree.
// Input: root[] = [1, 2, 3, 4, 5, N, 7, 8, N, 10], target = 10

// Output: 5
// Explanation: Initially 2 is set to fire at 0 sec
// At 1 sec: Node 5 catches fire.
// At 2 sec: Node 2 catches fire.
// At 3 sec: Nodes 1 and 4 catches fire.
// At 4 sec: Node 3 and 8 catches fire.
// At 5 sec: Node 7 catches fire.
// It takes 5s to burn the complete tree.
// Constraints:
// 1 ≤ number of nodes ≤ 105
// 1 ≤ node->data ≤ 105

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
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

function buildTree(str) {
  // Corner Case
  if (str.length === 0 || str[0] == "N") return null;

  // Creating vector of strings from input
  // string after spliting by space
  let ip = new Array();

  let ip_str = str.split(" ");

  for (let i = 0; i < ip_str.length; i++) ip.push(ip_str[i]);

  // Create the root of the tree
  let root = new Node(parseInt(ip[0]));

  // Push the root to the queue
  let queue = new Array();
  queue.push(root);

  // Starting from the second element
  let i = 1;
  while (queue.length !== 0 && i < ip.length) {
    // Get and remove the front of the queue
    let currNode = queue[0];
    queue.shift();

    // Get the current node's value from the string
    let currVal = ip[i];

    // If the left child is not null
    if (currVal != "N") {
      // Create the left child for the current node
      currNode.left = new Node(parseInt(currVal));

      // Push it to the queue
      queue.push(currNode.left);
    }

    // For the right child
    i++;
    if (i >= ip.length) break;
    currVal = ip[i];

    // If the right child is not null
    if (currVal != "N") {
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
  for (let i = 0; i < t; i++) {
    let s_tree = readLine().trim();
    let target = parseInt(readLine());
    let root = buildTree(s_tree);
    let obj = new Solution();

    let res = obj.minTime(root, target);
    console.log(res);

    console.log("~");
  }
}

// } Driver Code Ends

/*
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}  */

/**
 * @param {Node} root
 * @param {number} target
 * @return {number}
 */
class Solution {
  minTime(root, target) {
    // Step 1: Find the target node in the tree
    const targetNode = this.findTargetBFS(root, target);
    if (!targetNode) return 0; // If target not found (though problem states it exists)

    // Step 2: Build a parent map to track each node's parent
    const parentMap = this.buildParentMap(root);

    // Step 3: Perform BFS to calculate the minimum time to burn the entire tree
    const queue = [];
    const visited = new Set();
    queue.push(targetNode);
    visited.add(targetNode);

    let time = 0;

    while (queue.length > 0) {
      const levelSize = queue.length;
      let hasBurned = false;

      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();

        // Check left child
        if (currentNode.left && !visited.has(currentNode.left)) {
          visited.add(currentNode.left);
          queue.push(currentNode.left);
          hasBurned = true;
        }

        // Check right child
        if (currentNode.right && !visited.has(currentNode.right)) {
          visited.add(currentNode.right);
          queue.push(currentNode.right);
          hasBurned = true;
        }

        // Check parent node
        const parent = parentMap.get(currentNode);
        if (parent && !visited.has(parent)) {
          visited.add(parent);
          queue.push(parent);
          hasBurned = true;
        }
      }

      // Increment time if any nodes were burned in this level
      if (hasBurned) {
        time++;
      }
    }

    return time;
  }

  // Helper function to find the target node using BFS
  findTargetBFS(root, target) {
    if (!root) return null;
    const queue = [root];
    while (queue.length > 0) {
      const node = queue.shift();
      if (node.key === target) return node;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return null;
  }

  // Helper function to build a parent map for all nodes
  buildParentMap(root) {
    const parentMap = new Map();
    const queue = [root];
    while (queue.length > 0) {
      const node = queue.shift();
      if (node.left) {
        parentMap.set(node.left, node);
        queue.push(node.left);
      }
      if (node.right) {
        parentMap.set(node.right, node);
        queue.push(node.right);
      }
    }
    return parentMap;
  }
}
