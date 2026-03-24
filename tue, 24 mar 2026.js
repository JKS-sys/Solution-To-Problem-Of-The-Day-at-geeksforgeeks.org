class Solution {
  /**
   * @param {number} n - number of courses
   * @param {number[][]} prerequisites - list of prerequisite pairs [x, y] meaning y must be taken before x
   * @returns {boolean} - true if all courses can be finished, false otherwise
   */
  canFinish(n, prerequisites) {
    // Build adjacency list and indegree array
    const adj = Array.from({ length: n }, () => []);
    const indegree = new Array(n).fill(0);

    for (const [x, y] of prerequisites) {
      adj[y].push(x); // edge y -> x
      indegree[x]++;
    }

    // Queue for BFS (Kahn's algorithm) using two pointers to avoid O(n) shifts
    const queue = [];
    for (let i = 0; i < n; i++) {
      if (indegree[i] === 0) {
        queue.push(i);
      }
    }

    let head = 0;
    let processed = 0;

    while (head < queue.length) {
      const u = queue[head++];
      processed++;

      for (const v of adj[u]) {
        indegree[v]--;
        if (indegree[v] === 0) {
          queue.push(v);
        }
      }
    }

    // If we processed all nodes, no cycle exists
    return processed === n;
  }
}
