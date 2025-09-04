// Thu, 04 Sep 2025,

// Linked List Group Reverse
// Difficulty: HardAccuracy: 57.08%Submissions: 257K+Points: 8Average Time: 30m
// You are given the head of a Singly linked list. You have to reverse every k node in the linked list and return the head of the modified list.
// Note: If the number of nodes is not a multiple of k then the left-out nodes at the end, should be considered as a group and must be reversed.

// Examples:

// Input: k = 2,

// Output: 2 -> 1 -> 4 -> 3 -> 6 -> 5
// Explanation: Linked List is reversed in a group of size k = 2.

// Input: k = 4,

// Output: 4 -> 3 -> 2 -> 1 -> 6 -> 5
// Explanation: Linked List is reversed in a group of size k = 4.

// Constraints:
// 1 ≤ size of linked list ≤ 105
// 0 ≤ node->data ≤ 106
// 1 ≤ k ≤ size of linked list
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

function printList(head) {
  let curr = head;
  while (curr !== null) {
    process.stdout.write(curr.data.toString());
    if (curr.next !== null) {
      process.stdout.write(" -> ");
    }
    curr = curr.next;
  }
}
class Solution {
  reverseKGroup(head, k) {
    if (head === null) {
      return head;
    }

    let curr = head;
    let newHead = null;
    let tail = null;

    while (curr !== null) {
      let groupHead = curr;
      let prev = null;
      let nextNode = null;
      let count = 0;

      // Reverse the nodes in the current group
      while (curr !== null && count < k) {
        nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
        count++;
      }
      // If newHead is null, set it to the
      // last node of the first group
      if (newHead === null) {
        newHead = prev;
      }
      // Connect the previous group to the
      // current reversed group
      if (tail !== null) {
        tail.next = prev;
      }
      // Move tail to the end of the
      // reversed group
      tail = groupHead;
    }

    return newHead;
  }
}
