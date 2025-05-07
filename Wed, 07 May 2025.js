// Wed, 07 May 2025

// Root to Leaf Paths
// Difficulty: MediumAccuracy: 43.65%Submissions: 139K+Points: 4Average Time: 30m
// Given a Binary Tree, you need to find all the possible paths from the root node to all the leaf nodes of the binary tree.

// Note: The paths should be returned such that paths from the left subtree of any node are listed first, followed by paths from the right subtree.

// Examples:

// Input: root[] = [1, 2, 3, 4, 5, N, N]
// ex-3
// Output: [[1, 2, 4], [1, 2, 5], [1, 3]]
// Explanation: All the possible paths from root node to leaf nodes are: 1 -> 2 -> 4, 1 -> 2 -> 5 and 1 -> 3
// Input: root[] = [1, 2, 3]

// Output: [[1, 2], [1, 3]]
// Explanation: All the possible paths from root node to leaf nodes are: 1 -> 2 and 1 -> 3
// Input: root[] = [10, 20, 30, 40, 60, N, N]

// Output: [[10, 20, 40], [10, 20, 60], [10, 30]]
// Explanation: All the possible paths from root node to leaf nodes are: 10 -> 20 -> 40, 10 -> 20 -> 60 and 10 -> 30
// Constraints:
// 1 <= number of nodes <= 104
// 1 <= node->data <= 104

//{ Driver Code Starts

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

// printing binary tree inorder form
function inorder(root) {
  let s = "";

  function inorderUtil(node) {
    if (!node) {
      return;
    }
    inorderUtil(node.left);
    s += node.data;
    s += " ";
    inorderUtil(node.right);
  }

  inorderUtil(root);
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input_root = readLine().split(" ");
    let root = buildTree(input_root);

    let obj = new Solution();
    let res = obj.Paths(root);

    let S_res = "";
    for (let row of res) {
      let tmp = "";
      for (let col of row) {
        tmp += col;
        tmp += " ";
      }
      console.log(tmp);
    }

    console.log("~");
  }
}

// } Driver Code Ends

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
  /**
    * @param Node root

    * @returns number[][]
    */
  Paths(root) {
    const result = [];
    if (!root) return result;

    const helper = (node, path) => {
      // Add current node's value to the path
      path.push(node.data);

      // Check if current node is a leaf node
      if (!node.left && !node.right) {
        // Push a copy of the current path to the result
        result.push([...path]);
      } else {
        // Recursively process left child first to maintain order
        if (node.left) {
          helper(node.left, path);
        }
        // Then process right child
        if (node.right) {
          helper(node.right, path);
        }
      }

      // Backtrack: remove current node's value from path before returning to the parent call
      path.pop();
    };

    // Start the recursion with the root node and an empty path
    helper(root, []);

    return result;
  }
}
