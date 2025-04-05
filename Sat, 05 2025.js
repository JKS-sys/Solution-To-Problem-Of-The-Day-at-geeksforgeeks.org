// Given a grid of size n*m (n is the number of rows and m is the number of columns in the grid) consisting of 'W's (Water) and 'L's (Land). Find the number of islands.

// Note: An island is either surrounded by water or the boundary of a grid and is formed by connecting adjacent lands horizontally or vertically or diagonally i.e., in all 8 directions.

// Examples:

// Input: grid[][] = [['L', 'L', 'W', 'W', 'W'], ['W', 'L', 'W', 'W', 'L'], ['L', 'W', 'W', 'L', 'L'], ['W', 'W', 'W', 'W', 'W'], ['L', 'W', 'L', 'L', 'W']]
// Output: 4
// Explanation:
// The image below shows all the 4 islands in the grid.

// Input: grid[][] = [['W', 'L', 'L', 'L', 'W', 'W', 'W'], ['W', 'W', 'L', 'L', 'W', 'L', 'W']]
// Output: 2
// Expanation:
// The image below shows 2 islands in the grid.

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

    let grid = [];
    for (let j = 0; j < n; j++) {
      grid.push(readLine().split(" "));
    }

    let obj = new Solution();
    let ans = obj.numIslands(grid);
    console.log(ans);
    console.log("~");
  }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string[][]} grid
 * @returns {number}
 */
class Solution {
  numIslands(grid) {
    // If the grid is empty, return 0
    if (grid.length === 0 || grid[0].length === 0) {
      return 0;
    }

    const n = grid.length; // Number of rows
    const m = grid[0].length; // Number of columns
    let count = 0; // Initialize island count

    // Define all 8 possible directions to move from a cell
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    // Iterate through each cell in the grid
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        // If the cell is land ('L'), start BFS
        if (grid[i][j] === "L") {
          count++; // Increment island count

          // BFS queue initialized with current cell's coordinates
          let queue = [[i, j]];
          grid[i][j] = "W"; // Mark current cell as visited

          let front = 0; // Pointer to track the front of the queue

          // Process all cells in the queue
          while (front < queue.length) {
            const [x, y] = queue[front];
            front++;

            // Check all 8 directions
            for (const [dx, dy] of directions) {
              const newX = x + dx;
              const newY = y + dy;

              // Check if new coordinates are within grid bounds
              if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
                // If adjacent cell is unvisited land, mark and enqueue it
                if (grid[newX][newY] === "L") {
                  grid[newX][newY] = "W"; // Mark as visited
                  queue.push([newX, newY]);
                }
              }
            }
          }
        }
      }
    }

    return count; // Return the total number of islands
  }
}
