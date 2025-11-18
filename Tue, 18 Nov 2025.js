// Tue, 18 Nov 2025,

// Number of Ways to Arrive at Destination
// Difficulty: Medium Accuracy: 61.13% Submissions: 80K+ Points: 4 Average Time: 30m

// You are given an undirected weighted graph with V vertices numbered from 0 to V-1 and E edges, represented as a 2D array edges[][], where edges[i] = [ui, vi, timei] means that there is an undirected edge between nodes ui and vi that takes timei minutes to reach.
// Your task is to return in how many ways you can travel from node 0 to node V - 1 in the shortest amount of time.

// Examples:

// Input: V = 4, edges[][] = [[0, 1, 2], [1, 2, 3], [0, 3, 5], [1, 3, 3], [2, 3, 4]]

// Output: 2
// Explanation: The shortest path from 0 to 3 is 5.
// Two ways to reach 3 in 5 minutes are:
// 0 -> 3
// 0 -> 1 -> 3
// Input: V = 6, edges[][] = [[0, 2, 3], [0, 4, 2], [0, 5, 7], [2, 3, 1], [2, 5, 5], [5, 3, 3], [5, 1, 4], [1, 4, 1], [4, 5, 5]]

// Output: 4
// Explanation: The shortest path from 0 to 5 is 7.
// Four ways to reach 5 in 7 minutes are:
// 0 -> 5
// 0 -> 4 -> 5
// 0 -> 4 -> 1 -> 5
// 0 -> 2 -> 3 -> 5

// Constraints:
// 1 ≤ V ≤ 200
// V - 1 ≤ edges.size() ≤ V * (V - 1) / 2
// 0 ≤ ui, vi ≤ V - 1
// 1 ≤ timei ≤ 10^5
// ui != vi
// Expected Complexities
// Time Complexity: O(V + E * log E)
// Auxiliary Space: O(V + E)

class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }
  bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent][1] > this.heap[index][1]) {
        [this.heap[parent], this.heap[index]] = [
          this.heap[index],
          this.heap[parent],
        ];
        index = parent;
      } else {
        break;
      }
    }
  }
  sinkDown(index) {
    const length = this.heap.length;
    while (true) {
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let swap = null;
      let element = this.heap[index];

      if (leftChild < length && this.heap[leftChild][1] < element[1]) {
        swap = leftChild;
      }

      if (rightChild < length) {
        if (
          (swap === null && this.heap[rightChild][1] < element[1]) ||
          (swap !== null && this.heap[rightChild][1] < this.heap[leftChild][1])
        ) {
          swap = rightChild;
        }
      }
      if (swap === null) break;
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

class Solution {
  countPaths(V, edges) {
    const adj = new Array(V).fill(null).map(() => []);
    for (const [u, v, time] of edges) {
      adj[u].push([v, time]);
      adj[v].push([u, time]);
    }
    const dist = new Array(V).fill(Number.MAX_SAFE_INTEGER);
    const ways = new Array(V).fill(0);
    dist[0] = 0;
    ways[0] = 1;
    const minHeap = new MinHeap();
    minHeap.push([0, 0]);
    const MOD = 1e9 + 7;
    while (!minHeap.isEmpty()) {
      const [node, time] = minHeap.pop();
      if (time > dist[node]) continue;
      for (const [neighbor, edgeTime] of adj[node]) {
        const newTime = time + edgeTime;
        if (newTime < dist[neighbor]) {
          dist[neighbor] = newTime;
          ways[neighbor] = ways[node];
          minHeap.push([neighbor, newTime]);
        } else if (newTime === dist[neighbor]) {
          ways[neighbor] = (ways[neighbor] + ways[node]) % MOD;
        }
      }
    }
    return ways[V - 1];
  }
}
