// Given a matrix mat[][] of dimension n * m where each cell in the matrix can have values 0, 1 or 2 which has the following meaning:
// 0 : Empty cell
// 1 : Cell have fresh oranges
// 2 : Cell have rotten oranges

// We have to determine what is the earliest time after which all the oranges are rotten. A rotten orange at index (i, j) can rot other fresh orange at indexes (i-1, j), (i+1, j), (i, j-1), (i, j+1) (up, down, left and right) in a unit time.

// Note: Your task is to return the minimum time to rot all the fresh oranges. If not possible returns -1.

// Examples:

// Input: mat[][] = [[0, 1, 2], [0, 1, 2], [2, 1, 1]]
// Output: 1
// Explanation: Oranges at positions (0,2), (1,2), (2,0) will rot oranges at (0,1), (1,1), (2,2) and (2,1) in unit time.
// Input: mat[][] = [[2, 2, 0, 1]]
// Output: -1
// Explanation: Oranges at (0,0) and (0,1) can't rot orange at (0,3).
// Input: mat[][] = [[2, 2, 2], [0, 2, 0]]
// Output: 0
// Explanation: There is no fresh orange.

// ---
// introduction:
//   name: "Jagadeesh Kumar S"
//   contact: "+91 73972 85837 | 33x23@pm.me"
//   description: "A problem-solving enthusiast passionate about coding challenges."

// technical_achievements:
//   - "Solved 100+ daily coding challenges on GeeksforGeeks"
//   - "Ranked in the top 130 on SRM Institute of Science and Technology's GeeksforGeeks leaderboard"
//   - "Maintained a 100+ day streak for Problem of the Day"

// github:
//   contributions: "Solutions available at https://github.com/JKS-sys/Solution-To-Problem-Of-The-Day-at-geeksforgeeks.org"
// ---

//{ Driver Code Starts
// Initial Template for javascript
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let n = parseInt(readLine());
    let m = parseInt(readLine());
    let mat = new Array();
    for (let i = 0; i < n; i++) {
      let g = new Array();
      let input_line = readLine().split(" ");
      for (let j = 0; j < m; j++) {
        g.push(parseInt(input_line[j]));
      }
      mat.push(g);
    }

    let obj = new Solution();
    let ans = obj.orangesRotting(mat);
    if (ans == -0) ans = 0;
    console.log(ans);
    console.log("~");
  }
}

// } Driver Code Ends

/**
 * @param {number[][]} mat
 * @returns {number}
 */
// My name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.
class Solution {
  orangesRotting(mat) {
    const rows = mat.length;
    if (rows === 0) return 0; // Edge case: empty matrix
    const cols = mat[0].length;
    const queue = [];
    let fresh = 0;

    // Initialize queue with all initial rotten oranges and count fresh oranges
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (mat[i][j] === 2) {
          queue.push([i, j]);
        } else if (mat[i][j] === 1) {
          fresh++;
        }
      }
    }

    // If no fresh oranges, return 0 immediately
    if (fresh === 0) return 0;

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]; // Up, Down, Left, Right
    let time = 0;

    // Process each level of the BFS
    while (queue.length > 0) {
      const levelSize = queue.length;
      let hasRotten = false;

      for (let i = 0; i < levelSize; i++) {
        const [x, y] = queue.shift();

        // Explore all four directions
        for (const [dx, dy] of directions) {
          const nx = x + dx;
          const ny = y + dy;

          // Check if the adjacent cell is within bounds and is a fresh orange
          if (
            nx >= 0 &&
            nx < rows &&
            ny >= 0 &&
            ny < cols &&
            mat[nx][ny] === 1
          ) {
            mat[nx][ny] = 2; // Mark as rotten
            queue.push([nx, ny]);
            fresh--; // Decrease the count of fresh oranges
            hasRotten = true; // Mark that rotting happened in this level
          }
        }
      }

      // Increment time only if any oranges were rotten in this level
      if (hasRotten) {
        time++;
      }
    }

    // Check if all fresh oranges have been rotted
    return fresh === 0 ? time : -1;
  }
}
