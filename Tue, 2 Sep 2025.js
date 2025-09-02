// Tue, 2 Sep 2025,

// Swap Kth nodes from ends
// Difficulty: MediumAccuracy: 35.5%Submissions: 64K+Points: 4Average Time: 45m
// Given the head of a singly linked list and an integer k. Swap the kth node (1-based index) from the beginning and the kth node from the end of the linked list. Return the head of the final formed list and if it's not possible to swap the nodes return the original list.

// Examples:

// Input: k = 1,

// Output: 5 -> 2 -> 3 -> 4 -> 1
// Explanation: Here k = 1, hence after swapping the 1st node from the beginning and end the new list will be 5 -> 2 -> 3 -> 4 -> 1.

// Input: k = 2,

// Output: 5 -> 9 -> 8 -> 5 -> 10 -> 3
// Explanation: Here k = 2, hence after swapping the 2nd node from the beginning and end the new list will be 5 -> 9 -> 8 -> 5 -> 10 -> 3.

// Constraints:
// 1 ≤ list size ≤ 104
// 1 ≤ node->data ≤ 106
// 1 ≤ k ≤ 104
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  swapKth(head, k) {
    if (head === null) return null;
    let node1 = head;
    let count = 1;
    while (count < k && node1 !== null) {
      node1 = node1.next;
      count++;
    }
    if (node1 === null) return head;

    let node2 = head;
    let temp = node1;
    while (temp.next !== null) {
      node2 = node2.next;
      temp = temp.next;
    }

    const tempData = node1.data;
    node1.data = node2.data;
    node2.data = tempData;

    return head;
  }
}
