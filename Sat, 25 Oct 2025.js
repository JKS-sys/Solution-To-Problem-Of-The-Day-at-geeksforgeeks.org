// Sat, 25 Oct 2025,

// Minimum Steps to Halve Sum
// Difficulty: MediumAccuracy: 57.28%Submissions: 1K+Points: 4
// Given an array arr[], find the minimum number of operations required to make the sum of its elements less than or equal to half of the original sum. In one operation, you may replace any element with half of its value (with floating-point precision).

// Examples:

// Input: arr[] = [8, 6, 2]
// Output: 3
// Explanation: Initial sum = (8 + 6 + 2) = 16, half = 8
// Halve 8 → arr[] = [4, 6, 2], sum = 12 (still 12 > 8)
// Halve 6 → arr[] = [4, 3, 2], sum = 9 (still 9 > 8)
// Halve 2 → arr[] = [4, 3, 1], sum = 8.
// Input: arr[] = [9, 1, 2]
// Output: 2
// Explanation: Initial sum = 12, half = 6
// Halve 9 → arr[] = [4.5, 1, 2], sum = 7.5 (still > 6)
// Halve 4.5 → arr[] = [2.25, 1, 2], sum = 5.25 ≤ 6
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 104
// Expected Complexities
// Time Complexity: O(n + k*log(n))
// Auxiliary Space: O(n)

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    this._siftUp();
  }
  pop() {
    const top = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length) {
      this.heap[0] = end;
      this._siftDown();
    }
    return top;
  }
  _siftUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.heap[p] >= this.heap[i]) break;
      [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
      i = p;
    }
  }
  _siftDown() {
    let i = 0,
      l = this.heap.length;
    while (true) {
      let left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;
      if (left < l && this.heap[left] > this.heap[largest]) largest = left;
      if (right < l && this.heap[right] > this.heap[largest]) largest = right;
      if (largest === i) break;
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      i = largest;
    }
  }
}

class Solution {
  minoperations(arr) {
    let sum = arr.reduce((a, b) => a + b, 0),
      target = sum / 2,
      ops = 0;
    let heap = new MaxHeap();
    for (let v of arr) heap.push(v);
    while (sum > target) {
      let maxVal = heap.pop();
      let half = maxVal / 2;
      sum -= maxVal - half;
      heap.push(half);
      ops++;
    }
    return ops;
  }
}
