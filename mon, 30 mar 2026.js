class Solution {
  /**
   * @param {number[][]} houses
   * @returns {number}
   */
  minCost(houses) {
    const n = houses.length;
    if (n === 0) return 0;

    const visited = new Array(n).fill(false);
    const minDist = new Array(n).fill(Infinity);
    minDist[0] = 0;
    let totalCost = 0;

    for (let i = 0; i < n; i++) {
      // Find the unvisited node with the smallest minDist
      let u = -1;
      for (let j = 0; j < n; j++) {
        if (!visited[j] && (u === -1 || minDist[j] < minDist[u])) {
          u = j;
        }
      }

      visited[u] = true;
      totalCost += minDist[u];

      // Update distances to other unvisited nodes
      for (let v = 0; v < n; v++) {
        if (!visited[v]) {
          const cost =
            Math.abs(houses[u][0] - houses[v][0]) +
            Math.abs(houses[u][1] - houses[v][1]);
          if (cost < minDist[v]) {
            minDist[v] = cost;
          }
        }
      }
    }

    return totalCost;
  }
}
