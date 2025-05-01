// Pascal Triangle
// Difficulty: MediumAccuracy: 23.68%Submissions: 119K+Points: 4Average Time: 20m
// Given a positive integer n, return the nth row of pascal's triangle.
// Pascal's triangle is a triangular array of the binomial coefficients formed by summing up the elements of previous row.

// File:PascalTriangleAnimated2.gif

// Examples:

// Input: n = 4
// Output: [1, 3, 3, 1]
// Explanation: 4th row of pascal's triangle is [1, 3, 3, 1].
// Input: n = 5
// Output: [1, 4, 6, 4, 1]
// Explanation: 5th row of pascal's triangle is [1, 4, 6, 4, 1].
// Input: n = 1
// Output: [1]
// Explanation: 1st row of pascal's triangle is [1].
// Constraints:
// 1 ≤ n ≤ 20

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

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let N = parseInt(readLine());
    let obj = new Solution();
    let res = obj.nthRowOfPascalTriangle(N);
    printArray(res, res.length);

    console.log("~");
  }
}
// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

// User function Template for javascript

/**
 * @param {number} n
 * @return {number[]}
 */

class Solution {
  nthRowOfPascalTriangle(n) {
    // Calculate the row index in 0-based terms (since input is 1-based)
    const m = n - 1;
    // Initialize the row array with the first element as 1
    const row = new Array(m + 1);
    row[0] = 1;

    // Iterate to compute each element in the row
    for (let i = 1; i <= m; i++) {
      // Each element is calculated using the formula derived from binomial coefficient properties
      // C(m, i) = C(m, i-1) * (m - i + 1) / i
      row[i] = (row[i - 1] * (m - i + 1)) / i;
    }

    return row;
  }
}
