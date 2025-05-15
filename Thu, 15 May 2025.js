// Thu, 15 May 2025

// Substrings with same first and last characters
// Difficulty: EasyAccuracy: 50.0%Submissions: 15K+Points: 2
// Given a string s consisting of lowercase characters, the task is to find the count of all substrings that start and end with the same character.

// Examples:

// Input: s = "abcab"
// Output: 7
// Explanation: There are 7 substrings where the first and last characters are the same: "a", "abca", "b", "bcab", "c", "a", and "b"
// Input: s = "aba"
// Output: 4
// Explanation: There are 4 substrings where the first and last characters are the same: "a", "aba", "b", "a"
// Constraints:
// 1 <= |s| <= 104
// s contains lower case english alphabets

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
    let s = readLine().trim();
    let obj = new Solution();
    let res = obj.countSubstring(s);
    console.log(res);

    console.log("~");
  }
}
// } Driver Code Ends

/**
 * @param {string} s
 * @return {number}
 */

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837

class Solution {
  countSubstring(s) {
    // Create a map to store the frequency of each character
    const frequencyMap = new Map();

    // Populate the frequency map by iterating over each character in the string
    for (const char of s) {
      frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    // Initialize the total count of valid substrings
    let totalCount = 0;

    // Iterate over each character and its count in the frequency map
    for (const [char, count] of frequencyMap) {
      // For each character, calculate the number of valid substrings using the formula (count * (count + 1)) / 2
      // This formula accounts for all substrings starting and ending with the same character:
      // - Single-character substrings: count
      // - Multi-character substrings: count choose 2 (combinations of positions)
      totalCount += (count * (count + 1)) / 2;
    }

    // Return the total count of valid substrings
    return totalCount;
  }
}
