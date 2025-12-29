// Mon, 29 Dec 2025,

// POTD question was https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1

// K-th Element of Two Arrays

// Difficulty: Medium
// Accuracy: 37.4%
// Submissions: 382K+
// Points: 4
// Average Time: 15m

// Given two sorted arrays a[] and b[] and an element k, the task is to find the element that would be at the kth position of the combined sorted array.

// Examples:

// Input: a[] = [2, 3, 6, 7, 9], b[] = [1, 4, 8, 10], k = 5
// Output: 6
// Explanation: The final combined sorted array would be [1, 2, 3, 4, 6, 7, 8, 9, 10]. The 5th element of this array is 6.

// Input: a[] = [1, 4, 8, 10, 12], b[] = [5, 7, 11, 15, 17], k = 6
// Output: 10
// Explanation: Combined sorted array is [1, 4, 5, 7, 8, 10, 11, 12, 15, 17]. The 6th element of this array is 10.

// Constraints:
// 1 ≤ a.size(), b.size() ≤ 10^6
// 1 ≤ k ≤ a.size() + b.size()
// 0 ≤ a[i], b[i] ≤ 10^8

// Expected Complexities:
// Time Complexity: O(log(min(a, b)))
// Auxiliary Space: O(1)

class Solution {
  kthElement(a, b, k) {
    // ensure a is the smaller array for binary search

    if (a.length > b.length) {
      return this.kthElement(b, a, k);
    }

    const m = a.length;
    const n = b.length;

    let low = Math.max(0, k - n);
    let high = Math.min(k, m);

    while (low <= high) {
      const cut1 = Math.floor((low + high) / 2);
      const cut2 = k - cut1;

      // handle edge cases for cuts

      const left1 = cut1 === 0 ? Number.MIN_SAFE_INTEGER : a[cut1 - 1];
      const left2 = cut2 === 0 ? Number.MIN_SAFE_INTEGER : b[cut2 - 1];
      const right1 = cut1 === m ? Number.MAX_SAFE_INTEGER : a[cut1];
      const right2 = cut2 === n ? Number.MAX_SAFE_INTEGER : b[cut2];

      // check if we found the correct partition

      if (left1 <= right2 && left2 <= right1) {
        // the k-th element is the max of left elements

        return Math.max(left1, left2);
      }
      // if too many elements from a, move cut left
      else if (left1 > right2) {
        high = cut1 - 1;
      }

      // if too few elements from a, move cut right
      else {
        low = cut1 + 1;
      }
    }

    return -1;
  }
}
