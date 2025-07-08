// Tue, 08 Jul 2025

// Next element with greater frequency
// Difficulty: MediumAccuracy: 68.63%Submissions: 8K+Points: 4
// Given an array arr[] of integers, for each element, find the closest element to its right that has a higher frequency than the current element.
// If no such element exists, return -1 for that position.

// Examples:

// Input: arr[] = [2, 1, 1, 3, 2, 1]
// Output: [1, -1, -1, 2, 1, -1]
// Explanation: Frequencies: 1 → 3 times, 2 → 2 times, 3 → 1 time.
// For arr[0] = 2, the next element 1 has a higher frequency → 1.
// For arr[1] and arr[2], no element to the right has a higher frequency → -1.
// For arr[3] = 3, the next element 2 has a higher frequency → 2.
// For arr[4] = 2, the next element 1 has a higher frequency → 1.
// For arr[5] = 1, no elements to the right → -1.
// Input: arr[] = [5, 1, 5, 6, 6]
// Output: [-1, 5, -1, -1, -1]
// Explanation: Frequencies: 1 → 1 time, 5 → 2 times, 6 → 2 times.
// For arr[0] and arr[2], no element to the right has a higher frequency → -1.
// For arr[1] = 1, the next element 5 has a higher frequency → 5.
// For arr[3] and arr[4], no element to the right has a higher frequency → -1.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 105
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  findGreater(arr) {
    const n = arr.length;
    if (n === 0) return [];

    const MAX_SIZE = 100001;
    let freqArr = new Array(MAX_SIZE).fill(0);

    for (let num of arr) {
      freqArr[num]++;
    }

    let res = new Array(n).fill(-1);
    let stack = [];

    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0) {
        let topIndex = stack[stack.length - 1];
        if (freqArr[arr[topIndex]] <= freqArr[arr[i]]) {
          stack.pop();
        } else {
          break;
        }
      }

      if (stack.length > 0) {
        res[i] = arr[stack[stack.length - 1]];
      }

      stack.push(i);
    }

    return res;
  }
}
