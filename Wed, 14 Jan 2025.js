// Wed, 14 Jan 2025,

// POTD question was https://www.geeksforgeeks.org/problems/police-and-thieves--141631/1

// Police and Thieves

// Difficulty: Medium
// Accuracy: 34.03%
// Submissions: 48K+
// Points: 4

// Given an array arr[], where each element contains either a 'P' for policeman or a 'T' for thief. Find the maximum number of thieves that can be caught by the police.

// Keep in mind the following conditions:
// Each policeman can catch only one thief.
// A policeman cannot catch a thief who is more than k units away from him.

// Examples:

// Input: arr[] = ['P', 'T', 'T', 'P', 'T'], k = 1
// Output: 2
// Explanation: Maximum 2 thieves can be caught. First policeman catches first thief and second police man can catch either second or third thief.

// Input: arr[] = ['T', 'T', 'P', 'P', 'T', 'P'], k = 2
// Output: 3
// Explanation: Maximum 3 thieves can be caught.

// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// 1 ≤ k ≤ 1000
// arr[i] = 'P' or 'T'

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  catchThieves(arr, k) {
    const n = arr.length;
    let result = 0;

    // Initialize pointers for police and thief indices

    let p = 0,
      t = 0;

    // Find first police and first thief

    while (p < n && arr[p] !== "P") p++;
    while (t < n && arr[t] !== "T") t++;

    while (p < n && t < n) {
      // Check if current police can catch current thief

      if (Math.abs(p - t) <= k) {
        result++;

        // Move both to next positions

        p++;
        t++;
        while (p < n && arr[p] !== "P") p++;
        while (t < n && arr[t] !== "T") t++;
      }

      // If thief is too far behind police, move to next thief
      else if (t < p) {
        t++;
        while (t < n && arr[t] !== "T") t++;
      }

      // If police is too far behind thief, move to next police
      else {
        p++;
        while (p < n && arr[p] !== "P") p++;
      }
    }

    return result;
  }
}
