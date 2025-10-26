// Sun, 26 Oct 2025,

// Minimum Cost of ropes
// Difficulty: MediumAccuracy: 42.73%Submissions: 258K+Points: 4
// Given an array, arr[] of rope lengths, connect all ropes into a single rope with the minimum total cost. The cost to connect two ropes is the sum of their lengths.

// Examples:

// Input: arr[] = [4, 3, 2, 6]
// Output: 29
// Explanation: First connect 2 and 3 to get [4, 5, 6] with a cost of 5, then connect 4 and 5 to get [9, 6] with a cost of 9, and finally connect 9 and 6 to get one rope with a cost of 15, giving a total minimum cost of 29. Any other order, such as connecting 4 and 6 first, results in a higher total cost of 38.
// Input: arr[] = [4, 2, 7, 6, 9]
// Output: 62
// Explanation: First, connect ropes 4 and 2, which makes the array [6, 7, 6, 9]. Cost of this operation 4 + 2 = 6. Next, add ropes 6 and 6, which results in [12, 7, 9]. Cost of this operation 6 + 6 = 12. Then, add 7 and 9, which makes the array [12,16]. Cost of this operation 7 + 9 = 16. And finally, add these two which gives [28]. Hence, the total cost is 6 + 12 + 16 + 28 = 62.
// Input: arr[] = [10]
// Output: 0
// Explanation: Since there is only one rope, no connections are needed, so the cost is 0.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 104
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    this.heap.push(val);
    this._heapifyUp();
  }
  extractMin() {
    if (this.heap.length === 0) return null;
    let min = this.heap[0];
    let end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this._heapifyDown();
    }
    return min;
  }
  _heapifyUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] > this.heap[idx]) {
        [this.heap[parent], this.heap[idx]] = [
          this.heap[idx],
          this.heap[parent],
        ];
        idx = parent;
      } else break;
    }
  }
  _heapifyDown() {
    let idx = 0,
      len = this.heap.length;
    while (true) {
      let left = 2 * idx + 1,
        right = 2 * idx + 2,
        smallest = idx;
      if (left < len && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < len && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (smallest !== idx) {
        [this.heap[idx], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[idx],
        ];
        idx = smallest;
      } else break;
    }
  }
}

// Your main solution method
class Solution {
  minCost(arr) {
    if (arr.length <= 1) return 0;
    let heap = new MinHeap();
    for (let num of arr) heap.insert(num);

    let total = 0;
    while (heap.heap.length > 1) {
      let first = heap.extractMin();
      let second = heap.extractMin();
      let sum = first + second;
      total += sum;
      heap.insert(sum);
    }
    return total;
  }
}
