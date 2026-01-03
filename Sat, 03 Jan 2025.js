// Sat, 03 Jan 2025,

// POTD question was https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1

// Flattening a Linked List

// Difficulty: Medium
// Accuracy: 51.53%
// Submissions: 200K+
// Points: 4
// Average Time: 40m

// Given a linked list containing n head nodes where every node in the linked list contains two pointers:
// (i) next points to the next node in the list.
// (ii) bottom points to a sub-linked list where the current node is the head.

// Each of the sub-linked lists nodes and the head nodes are sorted in ascending order based on their data. Flatten the linked list such that all the nodes appear in a single level while maintaining the sorted order.

// Note:
// 1. ↓ represents the bottom pointer and → represents the next pointer.
// 2. The flattened list will be printed using the bottom pointer instead of the next pointer.

// Examples:

// Input:
// head = 5 -> 10 -> 19 -> 28
//       |     |      |     |
//       V     V      V     V
//       7     20     22    30
//       |     |      |
//       V     V      V
//       8     25     40
//       |             |
//       V             V
//       45            50

// Output: 5 - 7 - 8 - 10 - 19 - 20 - 22 - 28 - 30 - 40 - 45 - 50
// Explanation:
// Bottom pointer of 5 is pointing to 7.
// Bottom pointer of 7 is pointing to 8.
// Bottom pointer of 10 is pointing to 20 and so on.
// So, after flattening the linked list the sorted list will be
// 5 - 7 - 8 - 10 - 19 - 20 - 22 - 28 - 40 - 45.

// Input:
// head = 5 -> 10 -> 19 -> 28
//       |     |
//       V     V
//       7     8
//       |     |
//       V     V
//       30    22

// Output: 5 - 7 - 8 - 10 - 19 - 22 - 28 - 30 - 50
// Explanation:
// Bottom pointer of 5 is pointing to 7.
// Bottom pointer of 7 is pointing to 8.
// Bottom pointer of 8 is pointing to 30 and so on.
// So, after flattening the linked list the sorted list will be
// 5 - 7 - 8 - 10 - 19 - 22 - 28 - 30 - 50.

// Constraints:
// 0 ≤ n ≤ 100
// 1 ≤ number of nodes in sub-linked list(mi) ≤ 50
// 1 ≤ node.data ≤ 10^4

// Expected Complexities:
// Time Complexity: O(n * n * m)
// Auxiliary Space: O(n)

class Solution {
  // Helper function to merge two sorted linked lists

  merge(a, b) {
    // Create a dummy node

    let dummy = new Node(0);
    let temp = dummy;

    // Merge two sorted lists

    while (a !== null && b !== null) {
      if (a.data < b.data) {
        temp.bottom = a;
        temp = temp.bottom;
        a = a.bottom;
      } else {
        temp.bottom = b;
        temp = temp.bottom;
        b = b.bottom;
      }
    }

    // Attach the remaining nodes

    if (a !== null) {
      temp.bottom = a;
    } else {
      temp.bottom = b;
    }

    return dummy.bottom;
  }

  flatten(root) {
    // Base cases

    if (root === null || root.next === null) {
      return root;
    }

    // Recursively flatten the rest of the list

    root.next = this.flatten(root.next);

    // Merge current list with the flattened next list

    root = this.merge(root, root.next);

    return root;
  }
}
