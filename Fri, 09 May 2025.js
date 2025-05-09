// Fri, 09 May 2025

// Largest number in K swaps
// Difficulty: MediumAccuracy: 18.84%Submissions: 104K+Points: 4Average Time: 30m
// Given a number k and string s of digits denoting a positive integer, build the largest number possible by performing swap operations on the digits of s at most k times.

// Examples :

// Input: s = "1234567", k = 4
// Output: 7654321
// Explanation: Three swaps can make the input 1234567 to 7654321, swapping 1 with 7, 2 with 6 and finally 3 with 5.
// Input: s = "3435335", k = 3
// Output: 5543333
// Explanation: Three swaps can make the input 3435335 to 5543333, swapping 3 with 5, 4 with 5 and finally 3 with 4.
// Input: s = "1034", k = 2
// Output: 4301
// Explanation: Two swaps can make the input 1034 to 4301, swapping 1 with 4 and finally 0 with 3.
// Constraints:
// 1 ≤ s.size() ≤ 15
// 1 ≤ k ≤ 7

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
    let k = parseInt(readLine());
    let str = readLine();
    let obj = new Solution();
    console.log(obj.findMaximumNum(str, k));

    console.log("~");
  }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837

class Solution {
  // Function to find the largest number after k swaps.
  findMaximumNum(s, k) {
    let maxNum = s;
    const arr = s.split("");

    const dfs = (pos, swapsLeft) => {
      // Update maxNum if current configuration is greater
      const current = arr.join("");
      if (current > maxNum) {
        maxNum = current;
      }

      // If no swaps left or we've processed all positions, stop
      if (swapsLeft === 0 || pos >= arr.length) {
        return;
      }

      // Find the maximum digit from current position onward
      let maxDigit = arr[pos];
      for (let i = pos + 1; i < arr.length; i++) {
        if (arr[i] > maxDigit) {
          maxDigit = arr[i];
        }
      }

      // If the maximum digit is not greater than current, no need to swap
      if (maxDigit === arr[pos]) {
        dfs(pos + 1, swapsLeft);
        return;
      }

      // Explore all positions where maxDigit occurs
      for (let i = pos + 1; i < arr.length; i++) {
        if (arr[i] === maxDigit) {
          // Swap
          [arr[pos], arr[i]] = [arr[i], arr[pos]];
          dfs(pos + 1, swapsLeft - 1);
          // Backtrack
          [arr[pos], arr[i]] = [arr[i], arr[pos]];
        }
      }
    };

    dfs(0, k);
    return maxNum;
  }
}
