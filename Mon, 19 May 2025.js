// Mon, 19 May 2025,

// Predecessor and Successor
// Difficulty: MediumAccuracy: 47.36%Submissions: 137K+Points: 4
// You are given root node of the BST and an integer key. You need to find the in-order successor and predecessor of the given key. If either predecessor or successor is not found, then set it to NULL.

// Note:- In an inorder traversal the number just smaller than the target is the predecessor and the number just greater than the target is the successor.

// Examples :

// Input: root[] = [8, 1, 9, N, 4, N, 10, 3, N, N, N], key = 8

// Output: 4 9
// Explanation: In the given BST the inorder predecessor of 8 is 4 and inorder successor of 8 is 9.
// Input: root[] = [10, 2, 11, 1, 5, N, N, N, N, 3, 6, N, 4, N, N], key = 11

// Output: 10 -1
// Explanation: In given BST, the inorder predecessor of 11 is 10 whereas it does not have any inorder successor.
// Input: root[] = [2, 1, 3], key = 3

// Output: 2 -1
// Explanation: In given BST, the inorder predecessor of 3 is 2 whereas it does not have any inorder successor.
// Constraints:
// 1 <= no. of nodes <= 105
// 1 <= node->data <= 106
// 1 <= key <= 106

//{ Driver Code Starts
const readline = require("readline");

// Node structure for BST
class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

// Function to build a BST from a level-order representation
function buildTree(values) {
  if (values.length === 0 || values[0] === "N") return null;

  const root = new Node(parseInt(values[0]));
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < values.length) {
    const currNode = queue.shift();

    if (values[i] !== "N") {
      currNode.left = new Node(parseInt(values[i]));
      queue.push(currNode.left);
    }
    i++;

    if (i >= values.length) break;

    if (values[i] !== "N") {
      currNode.right = new Node(parseInt(values[i]));
      queue.push(currNode.right);
    }
    i++;
  }
  return root;
}

// Main script to handle input and process test cases
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  const t = parseInt(inputLines[0]);
  let index = 1;

  for (let test = 0; test < t; test++) {
    const treeInput = inputLines[index++].split(" ");
    const key = parseInt(inputLines[index++]);

    const root = buildTree(treeInput);
    const solution = new Solution();
    let [pre, suc] = solution.findPreSuc(root, key);

    // Print results
    if (pre !== null) process.stdout.write(pre.data + " ");
    else process.stdout.write("-1 ");

    if (suc !== null) console.log(suc.data);
    else console.log(-1);

    console.log("~");
  }
});

// } Driver Code Ends

/*BST Node
class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
} */

class Solution {
  findPreSuc(root, key) {
    let predecessor = null;
    let successor = null;
    let current = root;

    while (current !== null) {
      if (current.data < key) {
        // Update predecessor and move to the right child
        predecessor = current;
        current = current.right;
      } else if (current.data > key) {
        // Update successor and move to the left child
        successor = current;
        current = current.left;
      } else {
        // Found the key node
        // Find predecessor as max in left subtree
        if (current.left !== null) {
          let temp = current.left;
          while (temp.right !== null) {
            temp = temp.right;
          }
          predecessor = temp;
        }
        // Find successor as min in right subtree
        if (current.right !== null) {
          let temp = current.right;
          while (temp.left !== null) {
            temp = temp.left;
          }
          successor = temp;
        }
        break; // Exit the loop once key is found
      }
    }

    return [predecessor, successor];
  }
}
