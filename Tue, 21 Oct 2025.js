// Tue, 21 Oct 2025,

// Top K Frequent in Array
// Difficulty: MediumAccuracy: 40.23%Submissions: 101K+Points: 4Average Time: 30m
// Given a non-empty integer array arr[]. Your task is to find and return the top k elements which have the highest frequency in the array.

// Note: If two numbers have the same frequency, the larger number should be given the higher priority.

// Examples:

// Input: arr[] = [3, 1, 4, 4, 5, 2, 6, 1], k = 2
// Output: [4, 1]
// Explanation: Frequency of 4 is 2 and frequency of 1 is 2, these two have the maximum frequency and 4 is larger than 1.
// Input: arr[] = [7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9], k = 4
// Output: [5, 11, 7, 10]
// Explanation: Frequency of 5 is 3, frequency of 11 is 2, frequency of 7 is 2, frequency of 10 is 1.
// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// 1 ≤ arr[i] ≤ 10^5
// 1 ≤ k ≤ no. of distinct elements
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

class Solution {
  topKFreq(arr, k) {
    const freqMap = new Map();
    for (const num of arr) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const freqArray = Array.from(freqMap.entries());

    freqArray.sort((a, b) => {
      if (a[1] === b[1]) {
        return b[0] - a[0];
      }
      return b[1] - a[1];
    });

    const result = [];
    for (let i = 0; i < k; i++) {
      result.push(freqArray[i][0]);
    }

    return result;
  }
}
