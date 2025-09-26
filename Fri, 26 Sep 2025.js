// Fri, 26 Sep 2025,

// Rotate Deque By K
// Difficulty: EasyAccuracy: 77.0%Submissions: 14K+Points: 2
// You are given a deque dq[] (double-ended queue) containing non-negative integers, along with two positive integer type and k. The task is to rotate the deque circularly by k positions.
// There are two types of rotation operations:

// Right Rotation (Clockwise): If type = 1, rotate the deque to the right. This means moving the last element to the front, and repeating the process k times.

// Left Rotation (Anti-Clockwise): If type = 2, rotate the deque to the left. This means moving the first element to the back, and repeating the process k times.
// Examples:

// Input: dq = [1, 2, 3, 4, 5, 6], type = 1, k = 2
// Output: [5, 6, 1, 2, 3, 4]
// Explanation: The type is 1 and k is 2. So, we need to right rotate dequeue by 2 times.
// In first right rotation we get [6, 1, 2, 3, 4, 5].
// In second right rotation we get [5, 6, 1, 2, 3, 4].
// Input: dq = [10, 20, 30, 40, 50], type = 2, k = 3
// Output: [40, 50, 10, 20, 30]
// Explanation: The type is 2 and k is 3. So, we need to left rotate dequeue by 3 times.
// In first left rotation we get [20, 30, 40, 50, 10].
// In second left rotation we get [30, 40, 50, 10, 20].
// In third left rotation we get [40, 50, 10, 20, 30].
// Constraints:
// 1 ≤ dq.size() ≤ 10^5
// 1 ≤ k ≤ 10^5
// 1 ≤ type ≤ 2
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  rotateDeque(dq, type, k) {
    const n = dq.len();
    if (n === 0) return;

    k = k % n;
    if (k === 0) return;

    const arr = [];
    while (dq.len() > 0) {
      arr.push(dq.getFront());
      dq.popFront();
    }

    if (type === 1) {
      const rotated = [...arr.slice(n - k), ...arr.slice(0, n - k)];
      for (const val of rotated) {
        dq.pushBack(val);
      }
    } else {
      const rotated = [...arr.slice(k), ...arr.slice(0, k)];
      for (const val of rotated) {
        dq.pushBack(val);
      }
    }
  }
}
