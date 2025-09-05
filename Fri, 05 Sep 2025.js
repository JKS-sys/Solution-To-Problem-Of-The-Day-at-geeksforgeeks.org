// Fri, 05 Sep 2025,

// Sort a linked list of 0s, 1s and 2s
// Difficulty: MediumAccuracy: 60.75%Submissions: 267K+Points: 4Average Time: 30m
// Given the head of a linked list where nodes can contain values 0s, 1s, and 2s only. Your task is to rearrange the list so that all 0s appear at the beginning, followed by all 1s, and all 2s are placed at the end.

// Examples:

// Input: head = 1 → 2 → 2 → 1 → 2 → 0 → 2 → 2

// Output: 0 → 1 → 1 → 2 → 2 → 2 → 2 → 2
// Explanation: All the 0s are segregated to the left end of the linked list, 2s to the right end of the list, and 1s in between. The final list will be:

// Input: head = 2 → 2 → 0 → 1

// Output: 0 → 1 → 2 → 2
// Explanation: After arranging all the 0s, 1s and 2s in the given format, the output will be:

// Constraints:
// 1 ≤ no. of nodes ≤ 106
// 0 ≤ node->data ≤ 2
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  segregate(head) {
    let zeroDummy = new Node(0);
    let oneDummy = new Node(0);
    let twoDummy = new Node(0);
    let zero = zeroDummy;
    let one = oneDummy;
    let two = twoDummy;
    let curr = head;
    while (curr !== null) {
      let next = curr.next;
      curr.next = null;

      if (curr.data === 0) {
        zero.next = curr;
        zero = zero.next;
      } else if (curr.data === 1) {
        one.next = curr;
        one = one.next;
      } else if (curr.data === 2) {
        two.next = curr;
        two = two.next;
      }

      curr = next;
    }

    one.next = twoDummy.next;
    zero.next = oneDummy.next;

    return zeroDummy.next;
  }
}
