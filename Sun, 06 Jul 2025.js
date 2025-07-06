// Sun, 06 Jul 2025,

// Maximum Sum Combination
// Difficulty: MediumAccuracy: 49.69%Submissions: 80K+Points: 4Average Time: 30m
// You are given two integer arrays a[] and b[] of equal size. A sum combination is formed by adding one element from a[] and one from b[], using each index pair (i, j) at most once. Return the top k maximum sum combinations, sorted in non-increasing order.

// Examples:

// Input: a[] = [3, 2], b[] = [1, 4], k = 2
// Output: [7, 6]
// Explanation: Possible sums: 3 + 1 = 4, 3 + 4 = 7, 2 + 1 = 3, 2 + 4 = 6, Top 2 sums are 7 and 6.
// Input: a[] = [1, 4, 2, 3], b[] = [2, 5, 1, 6], k = 3
// Output: [10, 9, 9]
// Explanation: The top 3 maximum possible sums are : 4 + 6 = 10, 3 + 6 = 9, and 4 + 5 = 9
// Constraints:
// 1 ≤ a.size() = b.size() ≤ 105
// 1 ≤ k ≤ a.size()
// 1 ≤ a[i], b[i] ≤ 104
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

class Solution {
  topKSumPairs(a, b, k) {
    class MinHeap {
      constructor() {
        this.heap = [];
      }
      push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
      }
      bubbleUp(index) {
        while (index > 0) {
          const parent = Math.floor((index - 1) / 2);
          if (this.heap[parent][0] <= this.heap[index][0]) break;
          [this.heap[parent], this.heap[index]] = [
            this.heap[index],
            this.heap[parent],
          ];
          index = parent;
        }
      }
      pop() {
        if (this.heap.length === 0) return null;
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
          this.heap[0] = last;
          this.sinkDown(0);
        }
        return top;
      }
      sinkDown(index) {
        const n = this.heap.length;
        while (index < n) {
          const left = 2 * index + 1;
          const right = 2 * index + 2;
          let smallest = index;
          if (left < n && this.heap[left][0] < this.heap[smallest][0]) {
            smallest = left;
          }
          if (right < n && this.heap[right][0] < this.heap[smallest][0]) {
            smallest = right;
          }
          if (smallest === index) break;
          [this.heap[index], this.heap[smallest]] = [
            this.heap[smallest],
            this.heap[index],
          ];
          index = smallest;
        }
      }
      size() {
        return this.heap.length;
      }
    }

    a.sort((x, y) => y - x);
    b.sort((x, y) => y - x);
    const n = a.length;
    const heap = new MinHeap();
    const visited = new Set();
    const result = [];

    const firstSum = a[0] + b[0];
    heap.push([-firstSum, 0, 0]);
    visited.add("0,0");

    for (let i = 0; i < k; i++) {
      if (heap.size() === 0) break;
      const top = heap.pop();
      const [negSum, i_index, j_index] = top;
      const sum = -negSum;
      result.push(sum);

      const ni1 = i_index + 1;
      const nj1 = j_index;
      const key1 = `${ni1},${nj1}`;
      if (ni1 < n && !visited.has(key1)) {
        visited.add(key1);
        const newSum = a[ni1] + b[nj1];
        heap.push([-newSum, ni1, nj1]);
      }

      const ni2 = i_index;
      const nj2 = j_index + 1;
      const key2 = `${ni2},${nj2}`;
      if (nj2 < n && !visited.has(key2)) {
        visited.add(key2);
        const newSum = a[ni2] + b[nj2];
        heap.push([-newSum, ni2, nj2]);
      }
    }

    return result;
  }
}
