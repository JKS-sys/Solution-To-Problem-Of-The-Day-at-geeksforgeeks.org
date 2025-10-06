// Mon, 06 Oct 2025,

// The Knight's tour problem
// Difficulty: MediumAccuracy: 66.57%Submissions: 766+Points: 4
// You are given a n × n chessboard with a Knight starting at the top-left corner (0, 0). Your task is to determine a valid Knight's Tour, where the Knight visits every square exactly once, following the standard movement rules of a chess Knight.

// You have to return the order in which each cell is visited. If a solution exists, print the sequence of numbers representing the order of visited squares. If no solution is possible, return -1.

// Note: You can return any valid ordering, if it is correct the driver code will print true else it will print false.

// Examples:

// Input: n = 5
// Output: true
// Explanation: A possible Knight's Tour in a 5x5 chessboard is given below where Each number represents the step at which the Knight visits that cell, starting from (0, 0) as step 0.
// [[0, 11, 2, 17, 20],
//  [3, 16, 19, 12, 7],
//  [10, 1, 6, 21, 18],
//  [15, 4, 23, 8, 13],
//  [24, 9, 14, 5, 22]]
// Input: n = 4
// Output: true
// Explanation: For n = 4, it is not possible for a valid Knight's Tour so you have to return -1.
// Constraints:
// 1 ≤ n ≤ 6
// Expected Complexities
// Time Complexity: O(8 ^ (n * n) )
// Auxiliary Space: O(n^2)

class Solution {
  knightTour(n) {
    if (n === 2 || n === 3 || n === 4) return [];
    if (n === 1) return [[0]];

    const dx = [2, 1, -1, -2, -2, -1, 1, 2];
    const dy = [1, 2, 2, 1, -1, -2, -2, -1];

    const board = Array.from({ length: n }, () => Array(n).fill(-1));

    board[0][0] = 0;

    const solve = (x, y, moveCount) => {
      if (moveCount === n * n) {
        return true;
      }

      for (let i = 0; i < 8; i++) {
        const nextX = x + dx[i];
        const nextY = y + dy[i];

        if (
          nextX >= 0 &&
          nextX < n &&
          nextY >= 0 &&
          nextY < n &&
          board[nextX][nextY] === -1
        ) {
          board[nextX][nextY] = moveCount;

          if (solve(nextX, nextY, moveCount + 1)) {
            return true;
          }

          board[nextX][nextY] = -1;
        }
      }
      return false;
    };

    if (solve(0, 0, 1)) {
      return board;
    }

    return [];
  }
}
