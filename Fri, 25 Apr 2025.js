// Majority Element
// Difficulty: MediumAccuracy: 27.82%Submissions: 705K+Points: 4Average Time: 59m
// Given an array arr[]. Find the majority element in the array. If no majority element exists, return -1.

// Note: A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.

// Examples:

// Input: arr[] = [1, 1, 2, 1, 3, 5, 1]
// Output: 1
// Explanation: Since, 1 is present more than 7/2 times, so it is the majority element.
// Input: arr[] = [7]
// Output: 7
// Explanation: Since, 7 is single element and present more than 1/2 times, so it is the majority element.
// Input: arr[] = [2, 13]
// Output: -1
// Explanation: Since, no element is present more than 2/2 times, so there is no majority element.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 105

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
    console.log(obj.majorityElement(arr));
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
  majorityElement(arr) {
    // Step 1: Find a candidate using Boyer-Moore Voting Algorithm
    let candidate;
    let count = 0;

    // Iterate through each element in the array to find the candidate
    for (const num of arr) {
      // If the count is zero, set the current element as the new candidate
      if (count === 0) {
        candidate = num;
      }
      // Increment count if the current element matches the candidate, else decrement
      count += num === candidate ? 1 : -1;
    }

    // Step 2: Verify if the candidate is the actual majority element
    let actualCount = 0;
    // Iterate through the array again to count occurrences of the candidate
    for (const num of arr) {
      if (num === candidate) {
        actualCount++;
      }
    }

    // Check if the candidate's count is more than half the array's length
    if (actualCount > arr.length / 2) {
      return candidate;
    } else {
      return -1;
    }
  }
}
