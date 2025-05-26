// Mon, 26 May 2025,

// Insert in Sorted Circular Linked List
// Difficulty: MediumAccuracy: 25.56%Submissions: 123K+Points: 4Average Time: 20m
// Given a sorted circular linked list, the task is to insert a new node in this circular linked list so that it remains a sorted circular linked list.

// Examples:

// Input: head = 1->2->4, data = 2
// Output: 1->2->2->4
// Explanation: We can add 2 after the second node.

// Input: head = 1->4->7->9, data = 5
// Output: 1->4->5->7->9
// Explanation: We can add 5 after the second node.

// Constraints:
// 2 <= number of nodes <= 106
// 0 <= node->data <= 106
// 0 <= data <= 106

/**
 * @param {Node} head
 * @param {number} data
 * @returns {Node}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
} */

class Solution {
  sortedInsert(head, data) {
    // Create the new node as a plain object
    const newNode = { data: data, next: null };

    // If the list is empty, the new node points to itself and becomes the head
    if (!head) {
      newNode.next = newNode;
      return newNode;
    }

    let current = head;

    // Traverse the circular list to find the correct insertion position
    while (true) {
      // Check if the current node is the right place to insert the new node
      if (
        (current.data <= data && data <= current.next.data) ||
        // If we've looped back to the head, insert here (end of list)
        current.next === head
      ) {
        break;
      }

      // Move to the next node in the list
      current = current.next;
    }

    // Insert the new node after the current node
    newNode.next = current.next;
    current.next = newNode;

    // If the new node's data is smaller than the head's data, update the head to the new node
    if (data < head.data) {
      head = newNode;
    }

    // Return the updated head of the list
    return head;
  }
}
