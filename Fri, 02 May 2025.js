// Bitonic Point
// Difficulty: EasyAccuracy: 58.67%Submissions: 138K+Points: 2Average Time: 15m
// Given an array of integers arr[] that is first strictly increasing and then maybe strictly decreasing, find the bitonic point, that is the maximum element in the array.
// Bitonic Point is a point before which elements are strictly increasing and after which elements are strictly decreasing.

// Note: It is guaranteed that the array contains exactly one bitonic point.

// Examples:

// Input: arr[] = [1, 2, 4, 5, 7, 8, 3]
// Output: 8
// Explanation: Elements before 8 are strictly increasing [1, 2, 4, 5, 7] and elements after 8 are strictly decreasing [3].
// Input: arr[] = [10, 20, 30, 40, 50]
// Output: 50
// Explanation: Elements before 50 are strictly increasing [10, 20, 30 40] and there are no elements after 50.
// Input: arr[] = [120, 100, 80, 20, 0]
// Output: 120
// Explanation: There are no elements before 120 and elements after 120 are strictly decreasing [100, 80, 20, 0].
// Constraints:
// 3 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 106

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
  let i = 0;
  for (; i < t; i++) {
    let arr = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.findMaximum(arr);
    console.log(res);
    console.log("~");
  }
}
// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
  findMaximum(arr) {
    let low = 0;
    let high = arr.length - 1;

    // Binary search to find the peak (bitonic point)
    while (low < high) {
      // Calculate mid point
      const mid = Math.floor((low + high) / 2);

      // If mid element is less than the next element, peak is in right half
      if (arr[mid] < arr[mid + 1]) {
        low = mid + 1; // Move the lower bound up
      } else {
        // Otherwise, peak is in the left half (including mid)
        high = mid; // Move the upper bound down
      }
    }

    // At the end of loop, low and high converge to the peak index
    return arr[low];
  }
}
