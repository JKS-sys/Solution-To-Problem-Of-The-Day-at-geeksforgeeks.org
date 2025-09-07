// Sun, 07 Sep 2025,

// Merge K sorted linked lists
// Difficulty: MediumAccuracy: 57.01%Submissions: 113K+Points: 4Average Time: 60m
// Given an array arr[] of n sorted linked lists of different sizes. Your task is to merge all these lists into a single sorted linked list and return the head of the merged list.

// Examples:

// Input:

// Output: 1 -> 2 -> 3 -> 4 -> 7 -> 8 -> 9
// Explanation: The arr[] has 3 sorted linked list of size 3, 3, 1.
// 1st list: 1 -> 3 -> 7
// 2nd list: 2 -> 4 -> 8
// 3rd list: 9
// The merged list will be:

// Input:

// Output: 1 -> 3 -> 4 -> 5 -> 6 -> 8
// Explanation: The arr[] has 3 sorted linked list of size 2, 1, 3.
// 1st list: 1 -> 3
// 2nd list: 8
// 3rd list: 4 -> 5 -> 6
// The merged list will be:

// Constraints
// 1 ≤ total no. of nodes ≤ 105
// 1 ≤ node->data ≤ 103
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

class Solution {
  mergeKLists(arr) {
    if (arr.length === 0) return null;
    let interval = 1;
    while (interval < arr.length) {
      for (let i = 0; i < arr.length - interval; i += interval * 2) {
        arr[i] = this.mergeTwo(arr[i], arr[i + interval]);
      }
      interval *= 2;
    }
    return arr[0];
  }

  mergeTwo(l1, l2) {
    let dummy = new Node(0);
    let tail = dummy;
    while (l1 !== null && l2 !== null) {
      if (l1.data < l2.data) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }
    if (l1 !== null) tail.next = l1;
    if (l2 !== null) tail.next = l2;
    return dummy.next;
  }
}
