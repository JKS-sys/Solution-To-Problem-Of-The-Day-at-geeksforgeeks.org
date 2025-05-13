// Tue, 13 May 2025

// nCr
// Difficulty: MediumAccuracy: 14.82%Submissions: 322K+Points: 4
// Given two integer values n and r, the task is to find the value of Binomial Coefficient nCr

// A binomial coefficient nCr can be defined as the coefficient of xr in the expansion of (1 + x)n that gives the number of ways to choose r objects from a set of n objects without considering the order.
// The binomial coefficient nCr is calculated as : C(n,r) = n! / r! * (n-r) !
// Note: If r is greater than n, return 0.
// It is guaranteed that the value of nCr will fit within a 32-bit integer.

// Examples:

// Input: n = 5, r = 2
// Output: 10
// Explaination: The value of 5C2 is calculated as 5!/(5−2)!*2! = 5!/3!*2! = 10.
// Input: n = 2, r = 4
// Output: 0
// Explaination: Since r is greater than n, thus 2C4 = 0
// Input: n = 5, r = 0
// Output: 1
// Explaination: The value of 5C0 is calculated as 5!/(5−0)!*0! = 5!/5!*0! = 1.
// Constraints:
// 1 ≤ n ≤ 100
// 1 ≤ r ≤ 100

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

function printList(res, n) {
  let s = "";
  for (let i = 0; i < n; i++) {
    s += res[i];
    s += " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    const n = parseInt(readLine()); // Fixed: add readLine() to get input for n
    const r = parseInt(readLine()); // Fixed: add readLine() to get input for r
    let obj = new Solution();
    let res = obj.nCr(n, r);
    console.log(res);
    console.log("~");
  }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

class Solution {
  // Method to calculate nCr (Binomial Coefficient)
  nCr(n, r) {
    // Check if r is greater than n, return 0 as per the problem statement
    if (r > n) {
      return 0;
    }

    // Handle cases where r is 0 or equal to n, both result in 1
    if (r === 0 || r === n) {
      return 1;
    }

    // Optimize by using the smaller value of r and (n - r) to reduce iterations
    r = Math.min(r, n - r);

    // Initialize the result as 1. This will hold the intermediate and final results
    let result = 1;

    // Iterate from 1 to r, computing the product step by step
    for (let i = 1; i <= r; i++) {
      // The numerator part of the coefficient (n - r + i)
      // Multiply the current result by the numerator part
      // Then divide by i to maintain the correct intermediate value
      // Since binomial coefficients are integers, this division will always result in an integer
      result = (result * (n - r + i)) / i;
    }

    // Return the computed binomial coefficient as an integer
    return result;
  }
}
