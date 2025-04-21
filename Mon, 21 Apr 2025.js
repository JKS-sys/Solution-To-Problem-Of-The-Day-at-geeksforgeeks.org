// Missing in Array
// Difficulty: EasyAccuracy: 29.59%Submissions: 1.4MPoints: 2Average Time: 15m
// You are given an array arr[] of size n - 1 that contains distinct integers in the range from 1 to n (inclusive). This array represents a permutation of the integers from 1 to n with one element missing. Your task is to identify and return the missing element.

// Examples:

// Input: arr[] = [1, 2, 3, 5]
// Output: 4
// Explanation: All the numbers from 1 to 5 are present except 4.
// Input: arr[] = [8, 2, 4, 5, 3, 7, 1]
// Output: 6
// Explanation: All the numbers from 1 to 8 are present except 6.
// Input: arr[] = [1]
// Output: 2
// Explanation: Only 1 is present so the missing element is 2.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ arr.size() + 1

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
    .map((string) => string.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let input_ar1 = readLine()
      .split(" ")
      .map((x) => parseInt(x));

    let arr = input_ar1;

    let obj = new Solution();
    console.log(obj.missingNum(arr));
    console.log("~");
  }
}
// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837.
/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
  missingNum(arr) {
    // Calculate the value of n, which is the largest of the array plus one
    // because the array is missing exactly one element from the range 1 to n
    const n = arr.length + 1;

    // The expected sum of numbers from 1 to n using the formula n*(n+1)/2
    const expectedSum = (n * (n + 1)) / 2;

    // Calculate the actual sum of the elements in the array using reduce
    // The reduce function iterates through each element, accumulating the sum
    const actualSum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    // The missing number is difference between the expected sum and the actual sum
    return expectedSum - actualSum;
  }
}
