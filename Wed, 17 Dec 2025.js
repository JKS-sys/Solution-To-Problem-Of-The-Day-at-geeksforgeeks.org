// Wed, 17 Dec 2025,

// POTD question was https://www.geeksforgeeks.org/problems/overlapping-intervals--170633/1

// Overlapping Intervals
// Difficulty: Medium Accuracy: 57.41% Submissions: 120K+ Points: 4 Average Time: 20m
// Given an array of Intervals arr[][], where arr[i] = [starti, endi]. The task is to merge all of the overlapping Intervals.

// Examples:

// Input: arr[][] = [[1, 3], [2, 4], [6, 8], [9, 10]]
// Output: [[1, 4], [6, 8], [9, 10]]
// Explanation: In the given intervals we have only two overlapping intervals here, [1, 3] and [2, 4] which on merging will become [1, 4]. Therefore we will return [[1, 4], [6, 8], [9, 10]].
// Input: arr[][] = [[6, 8], [1, 9], [2, 4], [4, 7]]
// Output: [[1, 9]]
// Explanation: In the given intervals all the intervals overlap with the interval [1, 9]. Therefore we will return [1, 9].
// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// 0 ≤ starti ≤ endi ≤ 10^6
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(1)

class Solution {
  mergeOverlap(arr) {
    if (arr.length <= 1) return arr;

    arr.sort((a, b) => a[0] - b[0]);

    const result = [];

    let current = arr[0];

    for (let i = 1; i < arr.length; i++) {
      const next = arr[i];

      if (current[1] >= next[0]) {
        current[1] = Math.max(current[1], next[1]);
      } else {
        result.push(current);
        current = next;
      }
    }

    result.push(current);

    return result;
  }
}
