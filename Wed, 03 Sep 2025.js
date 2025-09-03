// Wed, 03 Sep 2025,

// Reverse a Doubly Linked List
// Difficulty: EasyAccuracy: 70.38%Submissions: 192K+Points: 2Average Time: 15m
// You are given the head of a doubly linked list. You have to reverse the doubly linked list and return its head.

// Examples:

// Input:

// Output: 5 <-> 4 <-> 3
// Explanation: After reversing the given doubly linked list the new list will be 5 <-> 4 <-> 3.

// Input:

// Output: 196 <-> 59 <-> 122 <-> 75
// Explanation: After reversing the given doubly linked list the new list will be 196 <-> 59 <-> 122 <-> 75.

// Constraints:
// 1 ≤ number of nodes ≤ 106
// 0 ≤ node->data ≤ 104
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  reverse(head) {
    let current = head;
    let temp = null;

    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp !== null) {
      head = temp.prev;
    }

    return head;
  }
}
