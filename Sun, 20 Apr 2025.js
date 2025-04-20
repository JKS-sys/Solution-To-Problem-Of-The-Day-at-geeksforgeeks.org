// Find Only Repetitive Element from 1 to n-1
// Difficulty: EasyAccuracy: 66.05%Submissions: 3K+Points: 2
// Given an array arr[] of size n, filled with numbers from 1 to n-1 in random order. The array has only one repetitive element. Your task is to find the repetitive element.

// Note: It is guaranteed that there is a repeating element present in the array.

// Examples:

// Input: arr[] = [1, 3, 2, 3, 4]
// Output: 3
// Explanation: The number 3 is the only repeating element.
// Input: arr[] = [1, 5, 1, 2, 3, 4]
// Output: 1
// Explanation: The number 1 is the only repeating element.
// Input: arr[] = [1, 1]
// Output: 1
// Explanation: The array is of size 2 with both elements being 1, making 1 the repeating element.
// Constraints:
// 2 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ n-1

//{ Driver Code Starts
// Initial Template for JavaScript
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
    let arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));

    let obj = new Solution();
    let ans = obj.findDuplicate(arr);
    console.log(ans);
    console.log("~");
  }
}

// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
  findDuplicate(arr) {
    const n = arr.length;
    // Calclate the sum of all elements in the array
    const sum = arr.reduce((acc, val) => acc + val, 0);
    // Calculate the expected sum of numbers from 1 to n-1
    const expectedSum = ((n - 1) * n) / 2;
    // The duplicate is the difference between actual sum and expected sum
    return sum - expectedSum;
  }
}
