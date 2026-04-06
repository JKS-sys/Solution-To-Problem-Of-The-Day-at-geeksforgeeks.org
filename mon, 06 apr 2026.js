class Node {
  constructor(freq, index, data = null, left = null, right = null) {
    this.freq = freq;
    this.index = index;
    this.data = data; // character
    this.left = left;
    this.right = right;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    this.heap.push(node);
    this._heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown(0);
    return min;
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this._compare(this.heap[index], this.heap[parentIndex]) < 0) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  _heapifyDown(index) {
    const size = this.heap.length;
    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (
        left < size &&
        this._compare(this.heap[left], this.heap[smallest]) < 0
      ) {
        smallest = left;
      }
      if (
        right < size &&
        this._compare(this.heap[right], this.heap[smallest]) < 0
      ) {
        smallest = right;
      }

      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[index],
        ];
        index = smallest;
      } else {
        break;
      }
    }
  }

  _compare(a, b) {
    if (a.freq !== b.freq) return a.freq - b.freq;
    return a.index - b.index;
  }
}

class Solution {
  preOrder(root, ans, curr) {
    if (root === null) return;

    // Leaf node
    if (root.left === null && root.right === null) {
      if (curr === "") curr = "0";
      ans.push(curr);
      return;
    }

    this.preOrder(root.left, ans, curr + "0");
    this.preOrder(root.right, ans, curr + "1");
  }

  huffmanCodes(s, f) {
    const n = s.length;

    // Create min-heap
    const pq = new MinHeap();
    for (let i = 0; i < n; i++) {
      const node = new Node(f[i], i, s[i]);
      pq.push(node);
    }

    // Single character case
    if (n === 1) {
      return ["0"];
    }

    // Build Huffman tree
    while (pq.size() >= 2) {
      const left = pq.pop();
      const right = pq.pop();

      const newFreq = left.freq + right.freq;
      const newIndex = Math.min(left.index, right.index);
      const newNode = new Node(newFreq, newIndex, null, left, right);

      pq.push(newNode);
    }

    // Get root
    const root = pq.pop();

    // Preorder traversal to get codes
    const ans = [];
    this.preOrder(root, ans, "");

    return ans;
  }
}
