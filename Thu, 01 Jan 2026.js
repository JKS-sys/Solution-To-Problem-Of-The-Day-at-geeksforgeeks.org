// Thu, 01 Jan 2026,

// POTD question was https://www.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1

// Intersection in Y Shaped Lists

// Difficulty: Medium
// Accuracy: 44.67%
// Submissions: 314K+
// Points: 4
// Average Time: 45m

// You are given the heads of two non-empty singly linked lists, head1 and head2, that intersect at a certain point. Return that Node where these two linked lists intersect.

// Note: It is guaranteed that the intersected node always exists.
// In the custom input you have to give input for CommonList which pointed at the end of both head1 and head2 to form a Y-shaped linked list.

// Examples:

// Input: head1: 10 - 15 - 30, head2: 3 - 6 - 9 - 15 - 30
// Output: 15
// Explanation: From the above image, it is clearly seen that the common part is 15 - 30, whose starting point is 15.

// Input: head1: 4 - 1 - 8 - 5, head2: 5 - 6 - 1 - 8 - 5
// Output: 1
// Explanation: From the above image, it is clearly seen that the common part is 1 - 8 - 5, whose starting point is 1.

// Constraints:
// 2 ≤ total number of nodes ≤ 2*10^5
// -10^4 ≤ node.data ≤ 10^4

// Expected Complexities:
// Time Complexity: O(n + m)
// Auxiliary Space: O(1)

class Solution {
  intersectPoint(head1, head2) {
    if (!head1 || !head2) return null;

    let ptr1 = head1;
    let ptr2 = head2;

    // traverse until both pointers meet or both become null

    while (ptr1 !== ptr2) {
      // move pointers forward

      ptr1 = ptr1.next;
      ptr2 = ptr2.next;

      // if pointers meet, break

      if (ptr1 === ptr2) return ptr1;

      // if ptr1 reaches end, redirect to head2

      if (!ptr1) ptr1 = head2;

      // if ptr2 reaches end, redirect to head1

      if (!ptr2) ptr2 = head1;
    }

    return ptr1;
  }
}
