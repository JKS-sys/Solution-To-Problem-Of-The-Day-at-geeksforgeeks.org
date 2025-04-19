// Given an array arr[] of non-negative integers of size n. Find the maximum possible XOR between two numbers present in the array.

// Examples:

// Input: arr[] = [25, 10, 2, 8, 5, 3]
// Output: 28
// Explanation: The maximum possible XOR is 5 ^ 25 = 28.
// Input: arr[] = [1, 2, 3, 4, 5, 6, 7]
// Output: 7
// Explanation : The maximum possible XOR is 1 ^ 6 = 7.

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
    let n = parseInt(readLine());
    let arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.maxXOR(arr);
    console.log(res);

    console.log("~");
  }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */
// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

class Solution {
  maxXOR(arr) {
    let maxXor = 0; // Initialize the maximum XOR result to 0
    let mask = 0; // Initialize mask to accumulate bits from highest to lowest

    // Iterate from the highest bit (19th) down to the 0th bit
    for (let i = 19; i >= 0; i--) {
      // Update the mask to include the current bit
      mask |= 1 << i;

      // Create a new set to store the prefixes of numbers using the current mask
      const prefixes = new Set();

      // Calculate the candidate maximum XOR by setting the current bit in maxXor
      const candidate = maxXor | (1 << i);

      // Generate prefixes for each number in the array using the current mask
      for (const num of arr) {
        prefixes.add(num & mask);
      }

      // Check if there exists two prefixes whose XOR equals the candidate value
      for (const prefix of prefixes) {
        if (prefixes.has(prefix ^ candidate)) {
          // Update maxXor if the candidate can be achieved
          maxXor = candidate;
          break;
        }
      }
    }

    // Return the maximum XOR value found
    return maxXor;
  }
}
