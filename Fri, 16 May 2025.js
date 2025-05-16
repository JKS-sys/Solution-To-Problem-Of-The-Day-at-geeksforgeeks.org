// Fri, 16 May 2025

// Smallest range in K lists
// Difficulty: HardAccuracy: 43.21%Submissions: 30K+Points: 8Average Time: 40m
// Given a 2d integer array arr[][] of size k*n, where each row is sorted in ascending order. Your task is to find the smallest range [l, r] that includes at least one element from each of the k lists. If more than one such ranges are found, return the first one.

// Examples:

// Input: n = 5, k = 3, arr[][] = [[4, 7, 9, 12, 15], [0, 8, 10, 14, 20], [6, 12, 16, 30, 50]]
// Output: [6, 8]
// Explanation: Smallest range is formed by  number 7 from the first list, 8 from second list and 6 from the third list.
// Input: n = 5, k = 3, arr[][] = [[1, 3, 5, 7, 9], [0, 2, 4, 6, 8], [2, 3, 5, 7, 11]]
// Output: [1, 2]
// Explanation: Smallest range is formed by number 1 present in first list and 2 is present in both 2nd and 3rd list.
// Input: n = 2, k = 3, arr[][] = [[2, 4], [1, 7], [20, 40]]
// Output: [4, 20]
// Explanation: Smallest range is formed by number 4 from the first list, 7 from second list and 20 from the third list.
// Constraints:
// 1 <= k, n <= 500
// 0 <= arr[ i ] <= 105

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

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let n = parseInt(readLine());
    let k = parseInt(readLine());

    let arr = [];
    for (let j = 0; j < k; j++) {
      let input_line = readLine()
        .split(" ")
        .map((x) => parseInt(x));
      let row = new Array(n);
      for (let l = 0; l < n; l++) {
        row[l] = input_line[l];
      }
      arr.push(row);
    }

    let obj = new Solution();
    let res = obj.findSmallestRange(arr);
    let s = "";
    for (let it of res) s += it + " ";
    console.log(s.trim());
    console.log("~");
  }
}

// } Driver Code Ends

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */

class Solution {
  findSmallestRange(arr) {
    class MinHeap {
      constructor() {
        this.heap = [];
      }

      insert(element) {
        this.heap.push(element);
        this.bubbleUp(this.heap.length - 1);
      }

      bubbleUp(index) {
        while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          if (this.heap[parentIndex].value <= this.heap[index].value) break;
          [this.heap[parentIndex], this.heap[index]] = [
            this.heap[index],
            this.heap[parentIndex],
          ];
          index = parentIndex;
        }
      }

      extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
          this.heap[0] = end;
          this.sinkDown(0);
        }
        return min;
      }

      sinkDown(index) {
        const length = this.heap.length;
        while (true) {
          const leftChildIdx = 2 * index + 1;
          const rightChildIdx = 2 * index + 2;
          let smallest = index;

          if (
            leftChildIdx < length &&
            this.heap[leftChildIdx].value < this.heap[smallest].value
          ) {
            smallest = leftChildIdx;
          }
          if (
            rightChildIdx < length &&
            this.heap[rightChildIdx].value < this.heap[smallest].value
          ) {
            smallest = rightChildIdx;
          }
          if (smallest === index) break;
          [this.heap[index], this.heap[smallest]] = [
            this.heap[smallest],
            this.heap[index],
          ];
          index = smallest;
        }
      }

      peek() {
        return this.heap[0];
      }

      size() {
        return this.heap.length;
      }
    }

    const k = arr.length;
    if (k === 0) return [];
    const n = arr[0].length;

    const heap = new MinHeap();
    let currentMax = -Infinity;

    // Insert the first element from each list into the heap and track the maximum
    for (let i = 0; i < k; i++) {
      const val = arr[i][0];
      heap.insert({ value: val, listIndex: i, elementIndex: 0 });
      currentMax = Math.max(currentMax, val);
    }

    // Initialize the best range with the first possible range
    let bestStart = heap.peek().value;
    let bestEnd = currentMax;
    let minRangeLength = bestEnd - bestStart;

    while (true) {
      // Extract the smallest element currently in the heap
      const minNode = heap.extractMin();

      // Check if we can get the next element from the same list
      if (minNode.elementIndex + 1 >= n) {
        break; // No more elements in this list, exit loop
      }

      const nextElementIndex = minNode.elementIndex + 1;
      const nextListIndex = minNode.listIndex;
      const nextVal = arr[nextListIndex][nextElementIndex];

      // Insert the next element into the heap
      heap.insert({
        value: nextVal,
        listIndex: nextListIndex,
        elementIndex: nextElementIndex,
      });

      // Update currentMax if the new element is larger
      if (nextVal > currentMax) {
        currentMax = nextVal;
      }

      // Calculate the current range details
      const currentMin = heap.peek().value;
      const currentRangeLength = currentMax - currentMin;

      // Update the best range if current range is smaller or same length but starts earlier
      if (
        currentRangeLength < minRangeLength ||
        (currentRangeLength === minRangeLength && currentMin < bestStart)
      ) {
        bestStart = currentMin;
        bestEnd = currentMax;
        minRangeLength = currentRangeLength;
      }
    }

    return [bestStart, bestEnd];
  }
}
