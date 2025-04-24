// Unique Number III
// Difficulty: MediumAccuracy: 49.87%Submissions: 53K+Points: 4Average Time: 20m
// Given an array of integers arr[] where, every element appears thrice except for one which occurs once.
// Find that element which occurs once.

// Examples:

// Input: arr[] = [1, 10, 1, 1]
// Output: 10
// Explanation: 10 occurs once in the array while the other element 1 occurs thrice.
// Input: arr[] = [3, 2, 1, 34, 34, 1, 2, 34, 2, 1]
// Output: 3
// Explanation: All elements except 3 occurs thrice in the array.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// arr.size() % 3 = 1
// -109 ≤ arr[i] ≤ 109

//{ Driver Code Starts
// Initial Template for javascript

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => string.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    const arr = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let ans = obj.getSingle(arr);
    console.log(ans);
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
  getSingle(arr) {
    let result = 0;
    // Iterate over each bit from 0 to 31 (32-bit integer)
    for (let bit = 0; bit < 32; bit++) {
      let sum = 0;
      // Calculate sum of bits at current position for all numbers
      for (const num of arr) {
        sum += (num >> bit) & 1;
      }
      // If sum modulo 3 is 1, set the bit in the result
      if (sum % 3 === 1) {
        result |= 1 << bit;
      }
    }
    return result;
  }
}
