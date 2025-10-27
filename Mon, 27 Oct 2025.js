// Mon, 27 Oct 2025,

// Find K Smallest Sum Pairs
// Difficulty: Medium Accuracy: 53.08% Submissions: 1K+ Points: 4
// Given two integer arrays arr1[] and arr2[] sorted in ascending order and an integer k, your task is to find k pairs with the smallest sums, such that one element of each pair belongs to arr1[] and the other belongs to arr2[].

// Return the list of these k pairs, where each pair is represented as [arr1[i], arr2[j]].

// Note: You can return any possible k pairs with the smallest sums, the driver code will print true if it is correct else it will print false.

// Examples:

// Input: arr1[] = [1, 7, 11], arr2[] = [2, 4, 6], k = 3
// Output: true
// Explanation: All possible combinations of elements from the two arrays are:
// [1, 2], [1, 4], [1, 6], [7, 2], [7, 4], [7, 6], [11, 2], [11, 4], [11, 6].
// Among these, the three pairs with the minimum sums are [1, 2], [1, 4], [1, 6].
// Input: arr1[] = [1, 3], arr2[] = [2, 4] k = 2
// Output: true
// Explanation: All possible combinations are [1, 2], [1, 4], [3, 2], [3, 4].
// Among these, the two pairs with the minimum sums are [1, 2], [3, 2].
// Constraints:
// 1 ≤ arr1.size(), arr2.size() ≤ 5*10^4
// 1 ≤ arr1[i], arr2[j] ≤ 10^9
// 1 ≤ k ≤ 10^3
// Expected Complexities
// Time Complexity: O(k*log k)
// Auxiliary Space: O(k)

class Solution {
  kSmallestPair(arr1, arr2, k) {
    const n = arr1.length;
    const m = arr2.length;

    const heap = [];

    for (let i = 0; i < Math.min(n, k); i++) {
      heap.push([arr1[i] + arr2[0], i, 0]);
    }

    const minHeap = {
      push: (val) => {
        heap.push(val);
        heap.sort((a, b) => a[0] - b[0]);
      },
      pop: () => heap.shift(),
      size: () => heap.length,
    };

    const result = [];

    while (k-- > 0 && minHeap.size() > 0) {
      const [sum, i, j] = minHeap.pop();
      result.push([arr1[i], arr2[j]]);

      if (j + 1 < m) {
        minHeap.push([arr1[i] + arr2[j + 1], i, j + 1]);
      }
    }

    return result;
  }
}
