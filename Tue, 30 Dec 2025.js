// Tue, 30 Dec 2025,

// POTD question was https://www.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1

// Add Numbers in Linked Lists

// Difficulty: Medium
// Accuracy: 34.52%
// Submissions: 368K+
// Points: 4
// Average Time: 30m

// You are given the head of two singly linked lists head1 and head2 representing two non-negative integers. You have to return the head of the linked list representing the sum of these two numbers.

// Note: There can be leading zeros in the input lists, but there should not be any leading zeros in the output list.

// Examples:

// Input: head1 = 3 -> 2 -> 1, head2 = 9 -> 9 -> 9
// Output: 2 -> 2 -> 1 -> 1
// Explanation: Given numbers are 123 and 999. Their sum is 1122.

// Input: head1 = 3 -> 6, head2 = 7
// Output: 0 -> 7
// Explanation: Given numbers are 63 and 7. Their sum is 70.

// Constraints:
// 1 ≤ Number of nodes in head1, head2 ≤ 10^5
// 0 ≤ node->data ≤ 9

// Expected Complexities:
// Time Complexity: O(n + m)
// Auxiliary Space: O(1)

class Solution {
  addTwoLists(head1, head2) {
    // helper function to reverse a linked list

    const reverseList = (head) => {
      let prev = null;
      let current = head;
      while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      return prev;
    };

    // helper function to remove leading zeros

    const removeLeadingZeros = (head) => {
      while (head !== null && head.data === 0 && head.next !== null) {
        head = head.next;
      }
      return head;
    };

    // reverse both lists to start from least significant digit

    let l1 = reverseList(head1);
    let l2 = reverseList(head2);

    let dummy = new Node(0);
    let current = dummy;
    let carry = 0;

    // add digits one by one

    while (l1 !== null || l2 !== null || carry > 0) {
      let sum = carry;

      if (l1 !== null) {
        sum += l1.data;
        l1 = l1.next;
      }

      if (l2 !== null) {
        sum += l2.data;
        l2 = l2.next;
      }

      carry = Math.floor(sum / 10);
      current.next = new Node(sum % 10);
      current = current.next;
    }

    // reverse the result to get correct order

    let result = reverseList(dummy.next);

    // remove leading zeros

    result = removeLeadingZeros(result);

    return result;
  }
}
