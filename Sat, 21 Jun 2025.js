// Sat, 21 Jun 2025,

// Police and Thieves
// Difficulty: MediumAccuracy: 34.03%Submissions: 29K+Points: 4
// Given an array arr[], where each element contains either a 'P' for policeman or a 'T' for thief. Find the maximum number of thieves that can be caught by the police.
// Keep in mind the following conditions :

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
// 1 ≤ arr.size() ≤ 105
// 1 ≤ k ≤ 1000
// arr[i] = 'P' or 'T'

class Solution {
  catchThieves(arr, k) {
    const n = arr.length;
    const thieves = [];
    const police = [];
    for (let i = 0; i < n; i++) {
      if (arr[i] === "T") {
        thieves.push(i);
      } else if (arr[i] === "P") {
        police.push(i);
      }
    }
    let t = 0,
      p = 0;
    let count = 0;
    while (t < thieves.length && p < police.length) {
      if (Math.abs(thieves[t] - police[p]) <= k) {
        count++;
        t++;
        p++;
      } else if (thieves[t] < police[p]) {
        t++;
      } else {
        p++;
      }
    }
    return count;
  }
}
