// Wed, 31 Dec 2025,

// POTD question was https://www.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1

// Palindrome Linked List

// Difficulty: Medium
// Accuracy: 41.48%
// Submissions: 379K+
// Points: 4
// Average Time: 20m

// You are given the head of a singly linked list of positive integers. You have to check if the given linked list is palindrome or not.

// Examples:

// Input: head = 1 - 2 - 1 - 1 - 2 - 1
// Output: true
// Explanation: The given linked list is 1 - 2 - 1 - 1 - 2 - 1, which is a palindrome.

// Input: head = 10 - 20 - 30 - 40 - 50
// Output: false
// Explanation: The given linked list is 10 - 20 - 30 - 40 - 50, which is not a palindrome.

// Constraints:
// 1 ≤ number of nodes ≤ 10^5
// 0 ≤ node.data ≤ 10^3

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  isPalindrome(head) {
    if (head === null || head.next === null) {
      return true;
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let prev = null;
    let current = slow;

    while (current !== null) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    let firstHalf = head;
    let secondHalf = prev;

    while (secondHalf !== null) {
      if (firstHalf.data !== secondHalf.data) {
        return false;
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }

    current = prev;
    prev = null;
    while (current !== null) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    return true;
  }
}
