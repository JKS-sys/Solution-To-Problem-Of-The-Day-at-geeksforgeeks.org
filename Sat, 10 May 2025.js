// Sat, 10 May 2025

// Longest Subarray with Majority Greater than K
// Difficulty: MediumAccuracy: 50.15%Submissions: 2K+Points: 4
// Given an array arr[] and an integer k, the task is to find the length of longest subarray in which the count of elements greater than k is more than the count of elements less than or equal to k.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 1], k = 2
// Output: 3
// Explanation: The subarray [2, 3, 4] or [3, 4, 1] satisfy the given condition, and there is no subarray of length 4 or 5 which will hold the given condition, so the answer is 3.
// Input: arr[] = [6, 5, 3, 4], k = 2
// Output: 4
// Explanation: In the subarray [6, 5, 3, 4], there are 4 elements > 2 and 0 elements <= 2, so it is the longest subarray.
// Constraints:
// 1 <= arr.size() <= 106
// 1 <= arr[i] <= 106
// 0 <= k <= 106

//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Initial Template for javascript
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
    let input_ar0 = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let k = input_ar0[0];
    let obj = new Solution();
    console.log(obj.longestSubarray(arr, k));
    console.log("~");
  }
}
// } Driver Code Ends

// Hello, my name is Jagadeesh Kumar   S. You contact me at +91 73972 85837

//Back-end complete function Template for javascript
class Solution {
  longestSubarray(arr, k) {
    let n = arr.length;
    let prefIdx = new Map();
    let sum = 0,
      res = 0;

    // Traverse through all subarrays
    for (let i = 0; i < n; i++) {
      // Consider arr[i] <= k as -1 and arr[i] > k as +1
      sum += arr[i] > k ? 1 : -1;

      // make an entry for sum if it is not present
      // in the hash map
      if (!prefIdx.has(sum)) {
        prefIdx.set(sum, i);
      }
    }

    // If all elements are smaller than k, return 0
    if (prefIdx.has(-n)) {
      return 0;
    }

    prefIdx.set(-n, n);

    // For each sum i, update prefIdx[i] with
    // min(prefIdx[-n], prefIdx[-n+1] .... pref[i])
    for (let i = -n + 1; i <= n; i++) {
      if (!prefIdx.has(i)) {
        prefIdx.set(i, prefIdx.get(i - 1));
      } else {
        prefIdx.set(i, Math.min(prefIdx.get(i), prefIdx.get(i - 1)));
      }
    }

    // To find the longest subarray with sum > 0 ending at i,
    // we need left-most occurrence of s' such that s' < s.
    sum = 0;
    for (let i = 0; i < n; i++) {
      sum += arr[i] > k ? 1 : -1;
      if (sum > 0) res = i + 1;
      else res = Math.max(res, i - prefIdx.get(sum - 1));
    }
    return res;
  }
}
