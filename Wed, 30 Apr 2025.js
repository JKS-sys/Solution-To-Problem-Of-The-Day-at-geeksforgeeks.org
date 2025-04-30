// Find length of Loop
// Difficulty: EasyAccuracy: 44.26%Submissions: 248K+Points: 2Average Time: 30m
// Given the head of a linked list, determine whether the list contains a loop. If a loop is present, return the number of nodes in the loop, otherwise return 0.

// Note: 'c' is the position of the node which is the next pointer of the last node of the linkedlist. If c is 0, then there is no loop.

// Examples:

// Input: head: 25 → 14 → 19 → 33 → 10 → 21 → 39 → 90 → 58 → 45, c = 4
// Output: 7
// Explanation: The loop is from 33 to 45. So length of loop is 33 → 10 → 21 → 39 → 90 → 58 → 45 = 7.
// The number 33 is connected to the last node of the linkedlist to form the loop because according to the input the 4th node from the beginning(1 based indexing)
// will be connected to the last node in the LinkedList.

// Input: head: 0 → 1 → 2 → 3, c = 0
// Output: 0
// Explanation: There is no loop.

// Constraints:
// 1 ≤ no. of nodes ≤ 106
// 0 ≤ node.data ≤ 106
// 0 ≤ c ≤ n-1

//{ Driver Code Starts
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
    .map((string) => string.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function printList(head) {
  let temp = head;
  let s = "";
  while (temp !== null) {
    s += temp.data + " ";
    temp = temp.next;
  }
  console.log(s);
}

function loopHere(head, tail, position) {
  if (position === 0) return;
  let walk = head;
  for (let i = 1; i < position; i++) walk = walk.next;
  tail.next = walk;
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let input_ar1 = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let head = new Node(input_ar1[0]);
    let tail = head;
    for (let j = 1; j < input_ar1.length; j++) {
      tail.next = new Node(input_ar1[j]);
      tail = tail.next;
    }
    let k = parseInt(readLine());
    loopHere(head, tail, k);
    let obj = new Solution();
    console.log(obj.countNodesinLoop(head));
    console.log("~");
  }
}

// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

// User function Template for javascript

/**
 * @param {Node} head
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/
// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

class Solution {
  // Function to find the length of a loop in the linked list.
  countNodesinLoop(head) {
    // Edge case: empty list or single node without a loop
    if (head === null || head.next === null) return 0;

    let slow = head;
    let fast = head;
    let hasLoop = false;

    // Step 1: Detect loop using Floyd's Tortoise and Hare algorithm
    while (fast !== null && fast.next !== null) {
      slow = slow.next; // Move slow pointer by one step
      fast = fast.next.next; // Move fast pointer by two steps

      // If slow and fast meet, a loop exists
      if (slow === fast) {
        hasLoop = true;
        break;
      }
    }

    // If no loop is detected, return 0
    if (!hasLoop) return 0;

    // Step 2: Count the number of nodes in the loop
    let count = 1; // Start count at 1 since we're already at the meeting node
    let ptr = slow.next; // Start from the next node of the meeting point

    // Traverse the loop until we come back to the meeting node
    while (ptr !== slow) {
      count++;
      ptr = ptr.next;
    }

    return count;
  }
}
