// Mon, 24 Nov 2025,

// Second Best Minimum Spanning Tree
// Difficulty: Medium Accuracy: 49.36% Submissions: 1K+ Points: 4

// Given an undirected graph of V vertices numbered from (0 to V-1) and E edges represented by a 2D array edges[][], where each edges[i] contains three integers [u, v, w], representing an undirected edge from u to v, having weight w.
// Your task is to find the weight of the second best minimum spanning tree of the given graph.
// A second best MST is defined as the minimum-weight spanning tree whose total weight is strictly greater than the weight of the minimum spanning tree.

// Note: If no such second best MST exists, return -1.

// Examples:

// Input: V = 5, E = 7, edges[][] = [[0, 1, 4], [0, 2, 3], [1, 2, 1], [1, 3, 5], [2, 4, 10], [2, 3, 7], [3, 4, 2]]
// Output: 12
// Explanation:

// Input: V = 5, E = 4, edges[][] = [[0, 1, 2], [1, 2, 3], [2, 3, 4], [3, 4, 5]]
// Output: -1
// Explanation: No second best MST exists for this graph.

// Constraints:
// 1 ≤ V ≤ 100
// V-1 ≤ E ≤ V*(V-1)/2
// 0 ≤ edges[i][2] ≤ 10^3

// Expected Complexities
// Time Complexity: O(V * E)
// Auxiliary Space: O(V + E)

class DSU {
  constructor(n) {
    this.parent = [...Array(n).keys()];
    this.rank = Array(n).fill(0);
  }
  find(x) {
    return (this.parent[x] =
      this.parent[x] === x ? x : this.find(this.parent[x]));
  }
  union(x, y) {
    let a = this.find(x),
      b = this.find(y);
    if (a === b) return false;
    if (this.rank[a] < this.rank[b]) this.parent[a] = b;
    else if (this.rank[a] > this.rank[b]) this.parent[b] = a;
    else {
      this.parent[b] = a;
      this.rank[a]++;
    }
    return true;
  }
}

class Solution {
  secondMST(V, edges) {
    edges.sort((a, b) => a[2] - b[2]);
    let mst = [],
      weight = 0,
      dsu = new DSU(V);

    for (let i = 0; i < edges.length; i++) {
      let [u, v, w] = edges[i];
      if (dsu.union(u, v)) {
        mst.push(i);
        weight += w;
      }
    }

    if (mst.length !== V - 1) return -1;

    let second = Infinity;
    for (let idx of mst) {
      let dsu2 = new DSU(V),
        w2 = 0,
        cnt = 0;
      for (let i = 0; i < edges.length; i++) {
        if (i === idx) continue;
        let [u, v, w] = edges[i];
        if (dsu2.union(u, v)) {
          w2 += w;
          cnt++;
        }
      }
      if (cnt === V - 1 && w2 > weight) second = Math.min(second, w2);
    }

    return second === Infinity ? -1 : second;
  }
}
