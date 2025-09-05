// Sat, 06 Sep 2025,

// Find length of Loop
// Difficulty: MediumAccuracy: 44.26%Submissions: 278K+Points: 4Average Time: 30m
// Given the head of a linked list, determine whether the list contains a loop. If a loop is present, return the number of nodes in the loop, otherwise return 0.

// Note: Internally, pos(1 based index) is used to denote the position of the node that tail's next pointer is connected to. If pos = 0, it means the last node points to null, indicating there is no loop. Note that pos is not passed as a parameter.

// Examples:

// Input: pos = 2,

// Output: 4
// Explanation: There exists a loop in the linked list and the length of the loop is 4.
// Input: pos = 3,

// Output: 3
// Explanation: The loop is from 19 to 10. So length of loop is 19 → 33 → 10 = 3.
// Input: pos = 0,

// Output: 0
// Explanation: There is no loop.
// Constraints:
// 1 ≤ number of nodes ≤ 105
// 1 ≤ node->data ≤ 104
// 0 ≤ pos < number of nodes
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  lengthOfLoop(head) {
    if (!head || !head.next) return 0;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        let count = 1;
        fast = fast.next;
        while (fast !== slow) {
          count++;
          fast = fast.next;
        }
        return count;
      }
    }

    return 0;
  }
}
