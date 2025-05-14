// Wed, 14 May 2025

// Look and Say Pattern
// Difficulty: MediumAccuracy: 62.54%Submissions: 33K+Points: 4
// Given an integer n. Return the nth row of the following look-and-say pattern.
// 1
// 11
// 21
// 1211
// 111221
// Look-and-Say Pattern:

// To generate a member of the sequence from the previous member, read off the digits of the previous member, counting the number of digits in groups of the same digit. For example:

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// 1211 is read off as "one 1, one 2, then two 1s" or 111221.
// 111221 is read off as "three 1s, two 2s, then one 1" or 312211.
// Examples:

// Input: n = 5
// Output: 111221
// Explanation: The 5th row of the given pattern will be 111221.
// Input: n = 3
// Output: 21
// Explanation: The 3rd row of the given pattern will be 21.

// Constraints:
// 1 ≤ n ≤ 30

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
    let obj = new Solution();
    let ans = obj.countAndSay(n);
    console.log(ans);

    console.log("~");
  }
}

// } Driver Code Ends

/**
 * @param {number} n
 * @returns {string}
 */

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.

class Solution {
  countAndSay(n) {
    // Base case: when n is 1, return "1"
    if (n === 1) {
      return "1";
    }

    // Initialize the sequence with the first term "1"
    let currentStr = "1";

    // Generate each term from 2 to n
    for (let i = 2; i <= n; i++) {
      currentStr = this.generateNextTerm(currentStr);
    }

    // Return the nth term
    return currentStr;
  }

  // Helper function to generate the next term in the sequence
  generateNextTerm(s) {
    let nextTerm = ""; // Initialize the next term string
    let currentDigit = s[0]; // Track the current digit being counted
    let count = 1; // Count the occurrences of the current digit

    // Iterate through each character starting from the second
    for (let j = 1; j < s.length; j++) {
      if (s[j] === currentDigit) {
        // If the current character is the same as the tracked digit, increment count
        count++;
      } else {
        // If different, append the count and digit to the next term
        nextTerm += count.toString() + currentDigit;
        currentDigit = s[j]; // Update the current digit to the new character
        count = 1; // Reset count for the new digit
      }
    }

    // Append the last counted digits to the next term
    nextTerm += count.toString() + currentDigit;

    return nextTerm;
  }
}
