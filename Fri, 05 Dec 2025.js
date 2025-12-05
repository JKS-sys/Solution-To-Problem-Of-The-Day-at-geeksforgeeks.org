// Fri, 05 Dec 2025,

// Walls Coloring II
// Difficulty: Hard Accuracy: 50.15% Submissions: 26K+ Points: 8
// You are given n walls arranged in a row, and each wall must be painted using one of the k available colors. The cost of painting ith wall with jth color is given by costs[i][j]. Your task is to determine the minimum total cost required to paint all the walls in such a way that no two adjacent walls share the same color. If it is impossible to paint the walls under this condition, you must return -1.

// Examples:

// Input: n = 4, k = 3,
// costs[][] = [[1, 5, 7],
//            [5, 8, 4],
//            [3, 2, 9],
//            [1, 2, 4]]

// Output: 8
// Explanation:
// Paint wall 0 with color 0. Cost = 1
// Paint wall 1 with color 2. Cost = 4
// Paint wall 2 with color 1. Cost = 2
// Paint wall 3 with color 0. Cost = 1
// Total Cost = 1 + 4 + 2 + 1 = 8
// Input: n = 5, k = 1,
// costs[][] = [[5],
//            [4],
//            [9],
//            [2],
//            [1]]
// Output: -1
// Explanation: It is not possible to color all the walls under the given conditions.
// Constraints:
// 0 ≤ n  ≤ 10^3
// 0 ≤ k  ≤ 10^3
// 1 ≤ costs[i][j]  ≤ 10^5
// Expected Complexities
// Time Complexity: O(n*k)
// Auxiliary Space: O(1)

class Solution {
  minCost(costs) {
    const n = costs.length;
    if (n === 0) return 0;
    const k = costs[0].length;

    if (k === 1 && n > 1) return -1;

    let prevMin = 0;
    let prevSecondMin = 0;
    let prevMinIndex = -1;

    for (let i = 0; i < n; i++) {
      let currMin = Infinity;
      let currSecondMin = Infinity;
      let currMinIndex = -1;

      for (let j = 0; j < k; j++) {
        let cost = costs[i][j];
        if (j === prevMinIndex) {
          cost += prevSecondMin;
        } else {
          cost += prevMin;
        }

        if (cost < currMin) {
          currSecondMin = currMin;
          currMin = cost;
          currMinIndex = j;
        } else if (cost < currSecondMin) {
          currSecondMin = cost;
        }
      }

      prevMin = currMin;
      prevSecondMin = currSecondMin;
      prevMinIndex = currMinIndex;
    }

    return prevMin;
  }
}
