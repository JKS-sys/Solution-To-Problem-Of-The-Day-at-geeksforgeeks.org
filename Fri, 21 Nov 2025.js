// Fri, 21 Nov 2025,

// Shortest Path Using Atmost One Curved Edge
// Difficulty: Hard Accuracy: 59.43% Submissions: 19K+ Points: 8
// Given an undirected, connected graph with V vertices numbered from 0 to V-1 and E double-edges, represented as a 2D array edges[][]. Each double-edge is represented by a tuple (x, y, w1, w2), which indicates that there are two edges between vertices x and y: a straight edge with weight w1 and a curved edge with weight w2.

// You are given two vertices a and b and you have to go from a to b through a series of edges such that in the entire path, you can use at most 1 curved edge. Your task is to find the shortest path from a to b satisfying the above condition.
// If no such path exists that satisfies this restriction, return -1.

// Note: It is guaranteed that the shortest path value will fit in a 32-bit integer.

// Examples:

// Input: V = 4, E = 4, a = 1, b = 3, edges[][] = [[0, 1, 1, 4], [0, 2, 2, 4], [0, 3, 3, 1], [1, 3, 6, 5]]

// Output: 2
// Explanation:
// We can follow the path 1 -> 0 -> 3, this gives a distance of 1+3 = 4 if we follow all straight paths. But we can take the curved path  from 0 -> 3, which costs 1. This will result in a cost of 1 + 1 = 2.
// Input: V = 2, E = 1, a = 0, b = 1, edges[][] = [[0, 1, 4, 1]]

// Output: 1
// Explanation:
// Take the curved path from 0 to 1 which costs 1.
// Constraints:
// 1 ≤ V ≤ 10^6
// 0 ≤ E ≤ 10^6
// 0 ≤ a, b ≤ V - 1
// 0 ≤ edges[i][0], edges[i][1] ≤ V-1
// 0 ≤ edges[i][2], edges[i][3] ≤ 10^4
// Expected Complexities
// Time Complexity: O((V + E) * log(V))
// Auxiliary Space: O(V + E)

class Solution {
  constructor() {
    this.INF = 1e9 + 1;
  }

  MinHeap = class {
    constructor() {
      this.heap = [];
    }
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
    left(i) {
      return 2 * i + 1;
    }
    right(i) {
      return 2 * i + 2;
    }
    swap(i, j) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
    }
    push(item) {
      this.heap.push(item);
      this.bubbleUp(this.heap.length - 1);
    }
    pop() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.sinkDown(0);
      return min;
    }
    bubbleUp(idx) {
      while (idx > 0) {
        const parent = this.parent(idx);
        if (this.heap[parent][0] <= this.heap[idx][0]) break;
        this.swap(parent, idx);
        idx = parent;
      }
    }
    sinkDown(idx) {
      const length = this.heap.length;
      while (true) {
        let left = this.left(idx);
        let right = this.right(idx);
        let smallest = idx;
        if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
          smallest = left;
        }
        if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
          smallest = right;
        }
        if (smallest === idx) break;
        this.swap(idx, smallest);
        idx = smallest;
      }
    }
    isEmpty() {
      return this.heap.length === 0;
    }
  };

  shortestPath(V, a, b, edges) {
    const adj = Array.from({ length: V }, () => []);

    for (const [u, v, w1, w2] of edges) {
      adj[u].push([v, w1, w2]);
      adj[v].push([u, w1, w2]);
    }

    const dist = Array.from({ length: V }, () => [this.INF, this.INF]);
    dist[a][0] = 0;
    dist[a][1] = 0;

    const pq = new this.MinHeap();
    pq.push([0, a, 0]);

    while (!pq.isEmpty()) {
      const [currDist, node, curvedUsed] = pq.pop();
      if (currDist > dist[node][curvedUsed]) continue;
      if (node === b) return currDist;

      for (const [neighbor, wStraight, wCurved] of adj[node]) {
        const newDistStraight = currDist + wStraight;
        if (newDistStraight < dist[neighbor][curvedUsed]) {
          dist[neighbor][curvedUsed] = newDistStraight;
          pq.push([newDistStraight, neighbor, curvedUsed]);
        }
        // Use curved edge only if none used so far
        if (curvedUsed === 0) {
          const newDistCurved = currDist + wCurved;
          if (newDistCurved < dist[neighbor][1]) {
            dist[neighbor][1] = newDistCurved;
            pq.push([newDistCurved, neighbor, 1]);
          }
        }
      }
    }

    const answer = Math.min(dist[b][0], dist[b][1]);
    return answer === this.INF ? -1 : answer;
  }
}
