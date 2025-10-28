// Tue, 28 Oct 2025,

// Distance of nearest cell having 1
// Difficulty: MediumAccuracy: 47.7%Submissions: 108K+Points: 4Average Time: 20m
// Given a binary grid[][], where each cell contains either 0 or 1, find the distance of the nearest 1 for every cell in the grid.
// The distance between two cells (i1, j1)  and (i2, j2) is calculated as |i1 - i2| + |j1 - j2|.
// You need to return a matrix of the same size, where each cell (i, j) contains the minimum distance from grid[i][j] to the nearest cell having value 1.

// Note: It is guaranteed that there is at least one cell with value 1 in the grid.

// Examples

// Input: grid[][] = [[0, 1, 1, 0],
//                 [1, 1, 0, 0],
//                 [0, 0, 1, 1]]
// Output: [[1, 0, 0, 1],
//         [0, 0, 1, 1],
//         [1, 1, 0, 0]]
// Explanation: The grid is -

// - 0's at (0,0), (0,3), (1,2), (1,3), (2,0) and (2,1) are at a distance of 1 from 1's at (0,1), (0,2), (0,2), (2,3), (1,0) and (1,1) respectively.

// Input: grid[][] = [[1, 0, 1],
//                 [1, 1, 0],
//                 [1, 0, 0]]
// Output: [[0, 1, 0],
//         [0, 0, 1],
//         [0, 1, 2]]
// Explanation: The grid is -

// - 0's at (0,1), (1,2), (2,1) and (2,2) are at a  distance of 1, 1, 1 and 2 from 1's at (0,0), (0,2), (2,0) and (1,1) respectively.

// Constraints:
// 1 ≤ grid.size() ≤ 200
// 1 ≤ grid[0].size() ≤ 200
// Expected Complexities
// Time Complexity: O(n * m)
// Auxiliary Space: O(n * m)

class Solution {
  nearest(grid) {
    const n = grid.length;
    const m = grid[0].length;

    const dist = new Array(n);
    for (let i = 0; i < n; i++) {
      dist[i] = new Array(m).fill(-1);
    }

    const queue = [];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 1) {
          dist[i][j] = 0;
          queue.push([i, j]);
        }
      }
    }

    const directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];

    let front = 0;
    while (front < queue.length) {
      const [i, j] = queue[front];
      front++;

      for (const [di, dj] of directions) {
        const ni = i + di;
        const nj = j + dj;

        if (ni >= 0 && ni < n && nj >= 0 && nj < m && dist[ni][nj] === -1) {
          dist[ni][nj] = dist[i][j] + 1;
          queue.push([ni, nj]);
        }
      }
    }

    return dist;
  }
}
