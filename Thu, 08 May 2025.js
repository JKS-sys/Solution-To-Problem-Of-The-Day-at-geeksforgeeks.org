// Thu, 08 May 2025

// Missing element of AP
// Difficulty: MediumAccuracy: 34.32%Submissions: 45K+Points: 4
// Given a sorted array arr[] that represents an Arithmetic Progression (AP) with exactly one missing element, find the missing number.

// Note: An element will always exist that, upon inserting into a sequence forms Arithmetic progression. If the given sequence already forms a valid complete AP, return the (n+1)-th element that would come next in the sequence.

// Examples:

// Input: arr[] = [2, 4, 8, 10, 12, 14]
// Output: 6
// Explanation: Actual AP should be 2, 4, 6, 8, 10, 12, 14.
// Input: arr[] = [1, 6, 11, 16, 21, 31]
// Output: 26
// Explanation: Actual AP should be 1, 6, 11, 16, 21, 26, 31.
// Input: arr[] = [4, 7, 10, 13, 16]
// Output: 19
// Explanation: Since the sequence already forms a valid AP, the next element after 16 in the sequence would be 19. Therefore, the output is 19.
// Constraints:
// 2 <= arr.size() <= 105
// 0 <= arr[i] <= 2*107

//{ Driver Code Starts
// Initial Template for javascript

"use strict";
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (t) => {
  const solution = new Solution();
  let linesRead = 0;

  rl.on("line", (input) => {
    if (linesRead === parseInt(t)) {
      rl.close();
      return;
    }

    linesRead++;
    const arr = input.trim().split(/\s+/).map(Number);
    console.log(solution.findMissing(arr));
    console.log("~");
  });
});
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */
// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837

class Solution {
  findMissing(arr) {
    const n = arr.length;

    // Check if the array is a complete AP
    let commonDiff = arr[1] - arr[0];
    let isCompleteAP = true;

    for (let i = 1; i < n - 1; i++) {
      if (arr[i + 1] - arr[i] !== commonDiff) {
        isCompleteAP = false;
        break;
      }
    }

    if (isCompleteAP) {
      // The array is a valid AP, return the next element
      return arr[n - 1] + commonDiff;
    }

    // Calculate the correct common difference
    const totalDifference = arr[n - 1] - arr[0];
    const correctDiff = totalDifference / n;

    // Find where the difference is twice the correctDiff
    for (let i = 0; i < n - 1; i++) {
      if (arr[i + 1] - arr[i] > correctDiff) {
        return arr[i] + correctDiff;
      }
    }

    // According to problem constraints, this line should never be reached
    return -1;
  }
}
