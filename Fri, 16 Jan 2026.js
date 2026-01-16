// Fri, 16 Jan 2026,

// POTD question was https://www.geeksforgeeks.org/problems/minimum-sprinklers/1

// Minimum Number of Workers

// Difficulty: Medium
// Accuracy: 61.02%
// Submissions: 996+
// Points: 4

// You are given an array arr[], where arr[i] denotes the range of working hours a person at position i can cover.

// If arr[i] ≠ -1, the person at index i can work and cover the time interval [i - arr[i], i + arr[i]].
// If arr[i] = -1, the person is unavailable and cannot cover any time.

// The task is to find the minimum number of people required to cover the entire working day from 0 to n - 1. If it is not possible to fully cover the day, return -1.

// Examples:

// Input: arr[] = [1, 2, 1, 0]
// Output: 1
// Explanation: The person at index 1 can cover the interval [-1, 3]. After adjusting to valid bounds, this becomes [0, 3], which fully covers the entire working day 0 to n -1. Therefore, only 1 person is required to cover the whole day.

// Input: arr[] = [2, 3, 4, -1, 2, 0, 0, -1, 0]
// Output: -1
// Explanation: Persons up to index 2 cover interval [0…6], but working hour 7 cannot be cover as arr[7] = -1, Since the 7th hour cannot be covered by any person, it is impossible to cover the full working day.

// Input: arr[] = [0, 1, 0, -1]
// Output: -1
// Explanation: The last hour cannot be covered by any person, so it is impossible to cover the full working day.

// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// -1 ≤ arr[i] ≤ arr.size()

// Expected Complexities:
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

class Solution {
  minMen(arr) {
    const n = arr.length;
    const intervals = [];

    // Step 1: Create valid intervals

    for (let i = 0; i < n; i++) {
      if (arr[i] !== -1) {
        const start = Math.max(0, i - arr[i]);
        const end = Math.min(n - 1, i + arr[i]);
        if (start <= end) {
          intervals.push([start, end]);
        }
      }
    }

    // If no intervals or can't cover from 0

    if (intervals.length === 0) return -1;

    // Step 2: Sort intervals by start time

    intervals.sort((a, b) => a[0] - b[0]);

    // Step 3: Greedy algorithm

    let count = 0;
    let currentPos = 0;
    let i = 0;

    while (currentPos < n) {
      let maxEnd = currentPos - 1;
      let found = false;

      // Find interval that starts at or before currentPos and extends farthest

      while (i < intervals.length && intervals[i][0] <= currentPos) {
        maxEnd = Math.max(maxEnd, intervals[i][1]);
        i++;
        found = true;
      }

      // If no interval can cover currentPos

      if (!found || maxEnd < currentPos) {
        return -1;
      }

      // Select this interval

      count++;
      currentPos = maxEnd + 1;
    }

    return count;
  }
}
