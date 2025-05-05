// Mon, 05 May 2025

// Search in an almost Sorted Array
// Difficulty: MediumAccuracy: 56.16%Submissions: 4K+Points: 4Average Time: 20m
// Given a sorted integer array arr[] consisting of distinct elements, where some elements of the array are moved to either of the adjacent positions, i.e. arr[i] may be present at arr[i-1] or arr[i+1].
// Given an integer target.  You have to return the index ( 0-based ) of the target in the array. If target is not present return -1.

// Examples:

// Input: arr[] = [10, 3, 40, 20, 50, 80, 70], target = 40
// Output: 2
// Explanation: Index of 40 in the given array is 2.
// Input: arr[] = [10, 3, 40, 20, 50, 80, 70], target = 90
// Output: -1
// Explanation: 90 is not present in the array.
// Input: arr[] = [-20], target = -20
// Output: 0
// Explanation: -20 is the only element present in the array.
// Constraints:
// 1 <= arr.size() <= 105
// -109 <= arr[i] <= 109

//{ Driver Code Starts
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

// Position this line where user code will be pasted.

function main() {
  let t = parseInt(readLine()); // Number of test cases
  while (t-- > 0) {
    let arr = readLine()
      .split(" ")
      .map((x) => parseInt(x)); // Read the array
    let target = parseInt(readLine()); // Read the target

    const sln = new Solution();
    const ans = sln.findTarget(arr, target);
    console.log(ans);
    console.log("~");
  }
}

// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837

// User function Template for javascript
class Solution {
  findTarget(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      // Check if current mid is the target
      if (arr[mid] === target) {
        return mid;
      }
      // Check left adjacent element if within bounds
      if (mid > 0 && arr[mid - 1] === target) {
        return mid - 1;
      }
      // Check right adjacent element if within bounds
      if (mid < arr.length - 1 && arr[mid + 1] === target) {
        return mid + 1;
      }

      // Decide which half to search next
      if (arr[mid] > target) {
        // Target can't be in the right half, adjust high to mid - 2
        high = mid - 2;
      } else {
        // Target can't be in the left half, adjust low to mid + 2
        low = mid + 2;
      }
    }

    // Target not found
    return -1;
  }
}
