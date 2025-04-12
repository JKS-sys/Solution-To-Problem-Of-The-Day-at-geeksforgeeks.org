// You are given a 2D grid image[][] of size n*m, where each image[i][j] represents the color of a pixel in the image. Also provided a coordinate(sr, sc) representing the starting pixel (row and column) and a new color value newColor.

// Your task is to perform a flood fill starting from the pixel (sr, sc), changing its color to newColor and the color of all the connected pixels that have the same original color. Two pixels are considered connected if they are adjacent horizontally or vertically (not diagonally) and have the same original color.

// Examples:

// Input: image[][] = [[1, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]], sr = 1, sc = 2, newColor = 2

// Output: [[2, 2, 2, 0], [0, 2, 2, 2], [1, 0, 2, 2]]

// Explanation: Starting from pixel (1, 2) with value 1, flood fill updates all connected pixels (up, down, left, right) with value 1 to 2, resulting in [[2, 2, 2, 0], [0, 2, 2, 2], [1, 0, 2, 2]].
// Input: image[][] = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, newColor = 2
// Output: [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
// Explanation: From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected by a path of the same color as the starting pixel are colored with the new color.Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
// Input: image[][] = [[0, 1, 0], [0, 1, 0]], sr = 0, sc = 1, newColor = 0
// Output: [[0, 0, 0], [0, 0, 0]]
// Explanation: Starting from pixel (0, 1) with value 1, flood fill changes all 4-directionally connected pixels with value 1 to 0, resulting in [[0, 0, 0], [0, 0, 0]]

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

// youtube:
//   channel: "https://www.youtube.com/@JKS-sys"
//   content: "Covers a variety of topics including Data Structures, Algorithms, and Competitive Programming."
//   - "Tutorials on various programming languages and frameworks"
//   - "Live coding sessions and problem-solving strategies"
//   - "Interviews with industry experts and coding competitions"
//   - "Tips and tricks for improving coding skills and interview preparation"
//   - "Collaborations with other YouTubers and coding communities"
//   - "Engaging with the audience through Q&A sessions and feedback"
//   - "Sharing personal experiences and insights on the tech industry"
//   - "Exploring new technologies and trends in the programming world"
//   - "Providing resources and recommendations for further learning"
//   - "Encouraging viewers to participate in coding challenges and competitions"
//   - "Building a community of like-minded individuals passionate about coding and technology"
//   - "Sharing success stories and achievements of viewers who have benefited from the channel"
//   - "Creating a positive and supportive environment for learning and growth"
//   - "Encouraging viewers to share their own coding journeys and experiences"
//   - "Fostering a culture of collaboration and knowledge sharing among viewers"
//   - "Promoting diversity and inclusion in the tech community"
//   - "Encouraging viewers to give back to the community through mentorship and support"
//   - "Sharing resources and opportunities for networking and career growth"
//   - "Encouraging viewers to stay curious and keep learning"
//   - "Sharing tips for maintaining a healthy work-life balance in the tech industry"
//   - "Encouraging viewers to pursue their passions and interests in technology"
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

function printArray(res) {
  for (let i = 0; i < res.length; i++) {
    if (res[i].length > 0) {
      let s = "";
      for (let j = 0; j < res[i].length; j++) {
        s += res[i][j] + " ";
      }
      console.log(s);
    }
  }
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let m = parseInt(readLine());
    let arr = [];
    let obj = new Solution();
    for (let i = 0; i < n; i++) {
      let input_line = readLine().split(" ");
      arr.push(input_line);
    }
    let sr = parseInt(readLine());
    let sc = parseInt(readLine());
    let newColor = parseInt(readLine());
    let ans = obj.floodFill(arr, sr, sc, newColor);
    printArray(ans);

    console.log("~");
  }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} m
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @returns {number[][]}
 */
// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.
class Solution {
  floodFill(arr, sr, sc, newColor) {
    // Convert each element in the input array from string to number
    const image = arr.map((row) => row.map(Number));

    // Get the original color of the starting pixel
    const originalColor = image[sr][sc];

    // If the new color is the same as the original, no changes are needed
    if (originalColor === newColor) {
      return image;
    }

    // Get the dimensions of the image
    const n = image.length;
    const m = image[0].length;

    // Initialize the queue with the starting pixel coordinates
    const queue = [[sr, sc]];
    image[sr][sc] = newColor; // Update the starting pixel to the new color

    // Define the four possible directions to move (up, down, left, right)
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    // Use a pointer to track the current position in the queue for efficient BFS
    let front = 0;

    // Process each pixel in the queue
    while (front < queue.length) {
      const [r, c] = queue[front];
      front++;

      // Explore all four directions
      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        // Check if the new coordinates are within the image bounds
        if (nr >= 0 && nr < n && nc >= 0 && nc < m) {
          // Check if the pixel has the original color and update it
          if (image[nr][nc] === originalColor) {
            image[nr][nc] = newColor;
            queue.push([nr, nc]); // Enqueue the new pixel for further processing
          }
        }
      }
    }

    // Return the modified image
    return image;
  }
}
