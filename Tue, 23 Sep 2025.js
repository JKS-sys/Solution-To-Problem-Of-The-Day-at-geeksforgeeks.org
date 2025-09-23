// Tue, 23 Sep 2025,

// Queue Reversal
// Difficulty: EasyAccuracy: 77.98%Submissions: 145K+Points: 2
// Given a queue q containing integer elements, your task is to reverse the queue.

// Examples:

// Input: q[] = [5, 10, 15, 20, 25]
// Output: [25, 20, 15, 10, 5]
// Explanation: After reversing the given elements of the queue, the resultant queue will be 25 20 15 10 5.
// Input: q[] = [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]
// Explanation: After reversing the given elements of the queue, the resultant queue will be 5 4 3 2 1.
// Constraints:
// 1 ≤ q.size() ≤ 10^3
// 0 ≤ q[i] ≤ 10^5
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  reverseQueue(q) {
    if (Array.isArray(q)) {
      q.reverse();
      return;
    }

    const stack = [];
    let size = 0;

    if (q.size && typeof q.size === "function") {
      size = q.size();
    } else if (q.length !== undefined) {
      size = q.length;
    }

    for (let i = 0; i < size; i++) {
      if (typeof q.dequeue === "function") {
        stack.push(q.dequeue());
      }
    }

    for (let i = stack.length - 1; i >= 0; i--) {
      if (typeof q.enqueue === "function") {
        q.enqueue(stack[i]);
      }
    }
  }
}
