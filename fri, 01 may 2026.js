class Solution {
  /**
   * @param {number[]} arr - input stream
   * @param {number} k - kth largest to find
   * @returns {number[]} - list of kth largest after each insertion
   */
  kthLargest(arr, k) {
    const result = [];
    const minHeap = []; // array representing a min‑heap

    const heapSize = () => minHeap.length;
    const heapTop = () => minHeap[0];

    const heapPush = (val) => {
      minHeap.push(val);
      let idx = minHeap.length - 1;
      // bubble up
      while (idx > 0) {
        const parent = Math.floor((idx - 1) / 2);
        if (minHeap[parent] <= minHeap[idx]) break;
        [minHeap[parent], minHeap[idx]] = [minHeap[idx], minHeap[parent]];
        idx = parent;
      }
    };

    const heapPop = () => {
      if (minHeap.length === 0) return null;
      const min = minHeap[0];
      const last = minHeap.pop();
      if (minHeap.length > 0) {
        minHeap[0] = last;
        let idx = 0;
        const n = minHeap.length;
        while (true) {
          let left = 2 * idx + 1;
          let right = 2 * idx + 2;
          let smallest = idx;
          if (left < n && minHeap[left] < minHeap[smallest]) smallest = left;
          if (right < n && minHeap[right] < minHeap[smallest]) smallest = right;
          if (smallest === idx) break;
          [minHeap[smallest], minHeap[idx]] = [minHeap[idx], minHeap[smallest]];
          idx = smallest;
        }
      }
      return min;
    };

    for (const num of arr) {
      if (heapSize() < k) {
        heapPush(num);
      } else if (num > heapTop()) {
        heapPop();
        heapPush(num);
      }
      // After each insertion, if we have exactly k elements, the top is the kth largest
      if (heapSize() === k) {
        result.push(heapTop());
      } else {
        result.push(-1);
      }
    }
    return result;
  }
}
