// Sort a linked list of 0s, 1s and 2s
// Difficulty: MediumAccuracy: 60.75%Submissions: 238K+Points: 4Average Time: 30m
// Given the head of a linked list where nodes can contain values 0s, 1s, and 2s only. Your task is to rearrange the list so that all 0s appear at the beginning, followed by all 1s, and all 2s are placed at the end.

// Examples:

// Input: head = 1 → 2 → 2 → 1 → 2 → 0 → 2 → 2

// Output: 0 → 1 → 1 → 2 → 2 → 2 → 2 → 2

// Explanation: All the 0s are segregated to the left end of the linked list, 2s to the right end of the list, and 1s in between.
// Input: head = 2 → 2 → 0 → 1

// Output: 0 → 1 → 2 → 2

// Explanation: After arranging all the 0s, 1s and 2s in the given format, the output will be 0 → 1 → 2 → 2.
// Constraints:
// 1 ≤ no. of nodes ≤ 106
// 0 ≤ node->data ≤ 2

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
    this.data = x;
    this.next = null;
  }
}

function printList(head) {
  let s = "";
  while (head) {
    s += head.data + " ";
    head = head.next;
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input_ar1 = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let head = new Node(input_ar1[0]);
    let tail = head;
    for (let i = 1; i < input_ar1.length; i++) {
      tail.next = new Node(input_ar1[i]);
      tail = tail.next;
    }

    let obj = new Solution();
    head = obj.segregate(head);
    printList(head);
    console.log("~");
  }
}
// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

// User function Template for javascript

/**
 * @param {Node} head
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
  // Function to sort a linked list of 0s, 1s and 2s.
  segregate(head) {
    // Create dummy nodes for 0, 1, and 2 lists to simplify node additions
    let zeroDummy = new Node(-1); // Dummy node for zeros
    let oneDummy = new Node(-1); // Dummy node for ones
    let twoDummy = new Node(-1); // Dummy node for twos

    // Tail pointers for each list to efficiently append nodes
    let zeroTail = zeroDummy;
    let oneTail = oneDummy;
    let twoTail = twoDummy;

    let current = head;
    while (current !== null) {
      // Save the next node before modifying current's next
      let nextNode = current.next;
      current.next = null; // Disconnect current node from the rest

      if (current.data === 0) {
        // Append to zeros list
        zeroTail.next = current;
        zeroTail = zeroTail.next;
      } else if (current.data === 1) {
        // Append to ones list
        oneTail.next = current;
        oneTail = oneTail.next;
      } else {
        // Append to twos list
        twoTail.next = current;
        twoTail = twoTail.next;
      }

      current = nextNode; // Move to the next node in the original list
    }

    // Link the three lists in order: zeros -> ones -> twos
    // If zeros exist, connect them to ones (or twos if no ones)
    zeroTail.next = oneDummy.next ? oneDummy.next : twoDummy.next;

    // If ones exist, connect their tail to twos
    if (oneDummy.next) {
      oneTail.next = twoDummy.next;
    }

    // Determine the new head of the list: check zeros first, then ones, then twos
    const newHead = zeroDummy.next || oneDummy.next || twoDummy.next;

    return newHead;
  }
}
