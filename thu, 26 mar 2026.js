class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.sinkDown(0);
    }
    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp(index) {
    const node = this.heap[index];
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIdx];
      if (node.dist >= parent.dist) break;
      this.heap[parentIdx] = node;
      this.heap[index] = parent;
      index = parentIdx;
    }
  }

  sinkDown(index) {
    const length = this.heap.length;
    const node = this.heap[index];
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let swap = null;
      let leftChild, rightChild;

      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild.dist < node.dist) swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && rightChild.dist < node.dist) ||
          (swap !== null && rightChild.dist < leftChild.dist)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = node;
      index = swap;
    }
  }
}

class Solution {
  countPaths(V, edges) {
    const MOD = 1000000007;
    const adj = Array.from({ length: V }, () => []);
    for (const [u, v, w] of edges) {
      adj[u].push([v, w]);
      adj[v].push([u, w]);
    }

    const dist = new Array(V).fill(Infinity);
    const ways = new Array(V).fill(0);
    dist[0] = 0;
    ways[0] = 1;

    const heap = new MinHeap();
    heap.push({ dist: 0, node: 0 });

    while (!heap.isEmpty()) {
      const { dist: d, node: u } = heap.pop();
      if (d > dist[u]) continue; // stale entry

      for (const [v, w] of adj[u]) {
        const nd = d + w;
        if (nd < dist[v]) {
          dist[v] = nd;
          ways[v] = ways[u];
          heap.push({ dist: nd, node: v });
        } else if (nd === dist[v]) {
          ways[v] = (ways[v] + ways[u]) % MOD;
        }
      }
    }

    return ways[V - 1] % MOD;
  }
}
