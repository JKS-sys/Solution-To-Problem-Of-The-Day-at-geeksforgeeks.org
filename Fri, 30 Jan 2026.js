// Fri, 30 Jan 2026,

// POTD question was https://www.geeksforgeeks.org/problems/interleave-the-first-half-of-the-queue-with-second-half/1

// Interleave the First Half of the Queue with Second Half
// Difficulty: MediumAccuracy: 62.41%Submissions: 24K+Points: 4Average Time: 20m

// Given a queue q[] of even size. Your task is to rearrange the queue by interleaving its first half with the second half.

// Interleaving is the process of mixing two sequences by alternating their elements while preserving their relative order.
// In other words, Interleaving means place the first element from the first half and then first element from the 2nd half and again second element from the first half and then second element from the 2nd half and so on....

// Examples:

// Input: q[] = [2, 4, 3, 1]
// Output: [2, 3, 4, 1]
// Explanation: We place the first element of the first half 2 and after that
// place the first element of second half 3 and after that repeat
// the same process one more time so the resulting queue will be [2, 3, 4, 1]

// Input: q[] = [3, 5]
// Output: [3, 5]
// Explanation: We place the first element of the first half 3 and first element
// of the second half 5 so the resulting queue is [3, 5]

// Constraints:
// 1 ≤ queue.size() ≤ 103
// 1 ≤ queue[i] ≤ 105
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  rearrangeQueue(q) {
    if (q.len() <= 2) return;

    const n = q.len();
    const half = Math.floor(n / 2);
    const stack = [];

    // Step 1: Push first half to stack
    for (let i = 0; i < half; i++) {
      const val = q.peek();
      q.dequeue();
      stack.push(val);
    }

    // Step 2: Enqueue stack elements back to queue
    while (stack.length > 0) {
      q.enqueue(stack.pop());
    }

    // Step 3: Move second half to front
    for (let i = 0; i < half; i++) {
      const val = q.peek();
      q.dequeue();
      q.enqueue(val);
    }

    // Step 4: Push first half to stack again
    for (let i = 0; i < half; i++) {
      const val = q.peek();
      q.dequeue();
      stack.push(val);
    }

    // Step 5: Interleave elements
    while (stack.length > 0) {
      // Take from stack (first half)
      q.enqueue(stack.pop());
      // Take from queue (second half)
      const val = q.peek();
      q.dequeue();
      q.enqueue(val);
    }
  }
}
