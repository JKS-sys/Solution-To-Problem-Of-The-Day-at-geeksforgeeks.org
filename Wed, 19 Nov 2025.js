// Wed, 19 Nov 2025,

// Path With Minimum Effort
// Difficulty: Medium Accuracy: 53.13% Submissions: 55K+ Points: 4 Average Time: 25m

// You are given a 2D array mat[][], of size n*m. Your task is to find the minimum possible path cost from the top-left cell (0, 0) to the bottom-right cell (n-1, m-1) by moving up, down, left, or right between adjacent cells.

// Note: The cost of a path is defined as the maximum absolute difference between the values of any two consecutive cells along that path.

// Examples:

// Input: mat[][] = [[7, 2, 6, 5],
//                [3, 1, 10, 8]]
// Output: 4
// Explanation: The route of [7, 3, 1, 2, 6, 5, 8] has a minimum value of maximum absolute difference between any two consecutive cells in the route, i.e., 4.

// Input: mat[][] = [[2, 2, 2, 1],
//                [8, 1, 2, 7],
//                [2, 2, 2, 8],
//                [2, 1, 4, 7],
//                [2, 2, 2, 2]]
// Output: 0
// Explanation: The route of [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] has a minimum value of maximum absolute difference between any two consecutive cells in the route, i.e., 0.

// Constraints:
// 1 ≤ n, m ≤ 100
// 0 ≤ mat[i][j] ≤ 10^6
// Expected Complexities
// Time Complexity: O(n * m log (n * m))
// Auxiliary Space: O(n * m)

class Solution {
  minCostPath(mat) {
    const n = mat.length;
    const m = mat[0].length;

    if (n === 1 && m === 1) return 0;

    const dirs = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    const dist = Array(n)
      .fill()
      .map(() => Array(m).fill(Number.MAX_SAFE_INTEGER));
    dist[0][0] = 0;

    const pq = [[0, 0, 0]];

    while (pq.length > 0) {
      let minIndex = 0;
      for (let i = 1; i < pq.length; i++) {
        if (pq[i][0] < pq[minIndex][0]) {
          minIndex = i;
        }
      }
      const [currentEffort, row, col] = pq[minIndex];
      pq.splice(minIndex, 1);

      if (row === n - 1 && col === m - 1) {
        return currentEffort;
      }

      if (currentEffort > dist[row][col]) continue;

      for (const [dr, dc] of dirs) {
        const newRow = row + dr;
        const newCol = col + dc;

        if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < m) {
          const effort = Math.max(
            currentEffort,
            Math.abs(mat[row][col] - mat[newRow][newCol])
          );

          if (effort < dist[newRow][newCol]) {
            dist[newRow][newCol] = effort;
            pq.push([effort, newRow, newCol]);
          }
        }
      }
    }

    return dist[n - 1][m - 1];
  }
}
