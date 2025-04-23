// Unique Number II
// Difficulty: MediumAccuracy: 36.9%Submissions: 155K+Points: 4Average Time: 15m
// Given an array arr[] containing 2*n + 2 positive numbers, out of which 2*n numbers exist in pairs whereas the other two number occur exactly once and are distinct. Find the other two numbers. Return the answer in increasing order.

// Examples:

// Input: arr[] = [1, 2, 3, 2, 1, 4]
// Output: [3, 4]
// Explanation: 3 and 4 occur exactly once.
// Input: arr[] = [2, 1, 3, 2]
// Output: [1, 3]
// Explanation: 1 and 3 occur exactly once.
// Input: arr[] = [2, 1, 3, 3]
// Output: [1, 2]
// Explanation: 1 and 2 occur exactly once.
// Constraints:
// 2 ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ 5 * 106
// arr.size() is even

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

function main() {
  let tc = parseInt(readLine());
  while (tc > 0) {
    let arr = readLine().split(" ").map(Number);
    // let k = parseInt(readLine());

    let obj = new Solution();
    let res = obj.singleNum(arr);

    console.log(res.join(" ")); // Print the array as a space-separated string
    tc--;
    console.log("~");
  }
}

// } Driver Code Ends
// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number[]}
 */

class Solution {
  singleNum(arr) {
    // Compute the XOR of all elements to get a ^ b where a and b are the unique numbers
    let xorAll = arr.reduce((acc, num) => acc ^ num, 0);

    // Find the rightmost set bit in xorAll, which helps in partitioning the numbers
    let mask = xorAll & -xorAll;

    // Initialize two groups to hold the XOR results of the partitioned numbers
    let group1 = 0,
      group2 = 0;

    // Partition the array into two groups based on the mask and XOR elements within each group
    for (let num of arr) {
      if (num & mask) {
        group2 ^= num; // XOR into group2 if the bit is set
      } else {
        group1 ^= num; // XOR into group1 if the bit is not set
      }
    }

    // Return the two unique numbers in increasing order
    return group1 < group2 ? [group1, group2] : [group2, group1];
  }
}
