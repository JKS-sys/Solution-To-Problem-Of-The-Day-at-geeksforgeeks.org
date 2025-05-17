// Sat, 17 May 2025

// Sort the given array after applying the given equation
// Difficulty: MediumAccuracy: 34.44%Submissions: 13K+Points: 4
// Given an integer array arr[] sorted in ascending order, along with three integers: A, B, and C. The task is to transform each element x in the array using the quadratic function A*(x2) + B*x + C. After applying this transformation to every element, return the modified array in sorted order.

// Examples:

// Input: arr[] = [-4, -2, 0, 2, 4], A = 1, B = 3, C = 5
// Output: [3, 5, 9, 15, 33]
// Explanation: After applying f(x) = 1*(x2)+ 3*x + 5 to each x, we get [9, 3, 5, 15, 33]. After sorting this array, the array becomes [3, 5, 9, 15, 33].
// Input: arr[] = [-3, -1, 2, 4], A = -1, B = 0, C = 0
// Output: [-16, -9, -4, -1]
// Explanation: After applying f(x) = -1*(x2) + 0*x + 0 to each x, we get [ -9, -1, -4, -16 ]. After sorting this array, the array becomes  [-16, -9, -4, -1].
// Constraints:
// 1 ≤ arr.size() ≤ 106
// -103 ≤ arr[i], A, B, C ≤ 103

//{ Driver Code Starts
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", () => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());

  while (t-- > 0) {
    // Read array from one line
    let arr = readLine().split(" ").map(Number);

    // Read a, b, c from different lines
    let a = parseInt(readLine());
    let b = parseInt(readLine());
    let c = parseInt(readLine());

    let obj = new Solution();
    let ans = obj.sortArray(arr, a, b, c);

    console.log(ans.join(" "));
    console.log("~");
  }
}
// } Driver Code Ends

class Solution {
  sortArray(arr, A, B, C) {
    // Handle the case where A is 0 (linear function)
    if (A === 0) {
      if (B === 0) {
        // All elements are C
        return new Array(arr.length).fill(C);
      } else {
        // Apply linear transformation
        const transformed = arr.map((x) => B * x + C);
        // Reverse if B is negative to sort in ascending order
        return B > 0 ? transformed : transformed.reverse();
      }
    }

    // Calculate the vertex x0 of the quadratic function
    const x0 = -B / (2 * A);
    // Find the split index where elements transition from <=x0 to >x0
    const splitIndex = this.findSplitIndex(arr, x0);

    // Split the array into left and right parts
    const left = arr.slice(0, splitIndex);
    const right = arr.slice(splitIndex);

    // Apply the quadratic transformation to both parts
    const transformedLeft = left.map((x) => A * x * x + B * x + C);
    const transformedRight = right.map((x) => A * x * x + B * x + C);

    // Process based on the direction of the parabola
    if (A > 0) {
      // Left part is decreasing, reverse to make it increasing
      transformedLeft.reverse();
    } else {
      // Right part is decreasing, reverse to make it increasing
      transformedRight.reverse();
    }

    // Merge the two sorted arrays
    return this.mergeSorted(transformedLeft, transformedRight);
  }

  // Binary search to find the first index where element > x0
  findSplitIndex(arr, x0) {
    let low = 0,
      high = arr.length;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] > x0) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }

  // Merge two sorted arrays into one sorted array
  mergeSorted(arr1, arr2) {
    const result = [];
    let i = 0,
      j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    // Append remaining elements from arr1
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    // Append remaining elements from arr2
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
  }
}
