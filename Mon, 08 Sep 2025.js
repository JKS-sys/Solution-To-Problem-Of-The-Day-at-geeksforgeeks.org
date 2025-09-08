// Mon, 08 Sep 2025,

// Merge Sort for Linked List
// Difficulty: MediumAccuracy: 74.76%Submissions: 82K+Points: 4Average Time: 30m
// You are given the head of a linked list. You have to sort the given linked list using Merge Sort.

// Examples:

// Input:

// Output: 10 -> 20 -> 30 -> 40 -> 50 -> 60
// Explanation: After sorting the given linked list, the resultant list will be:

// Input:

// Output: 2 -> 5 -> 8 -> 9
// Explanation: After sorting the given linked list, the resultant list will be:

// Constraints:
// 1 ≤ number of nodes ≤ 10^5
// 0 ≤ node->data ≤ 10^6
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

class Solution {
  mergeSort(head) {
    if (head === null || head.next === null) {
      return head;
    }
    let middle = this.getMiddle(head);
    let nextOfMiddle = middle.next;
    middle.next = null;

    let left = this.mergeSort(head);
    let right = this.mergeSort(nextOfMiddle);

    return this.merge(left, right);
  }
  getMiddle(head) {
    if (head === null) return null;
    let slow = head;
    let fast = head.next;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  merge(a, b) {
    if (a === null) return b;
    if (b === null) return a;

    let result;
    if (a.data <= b.data) {
      result = a;
      result.next = this.merge(a.next, b);
    } else {
      result = b;
      result.next = this.merge(a, b.next);
    }
    return result;
  }
}
