// Thu, 07 Aug 2025

// Difference Check
// Difficulty: MediumAccuracy: 68.83%Submissions: 1K+Points: 4
// Given an array arr[] of time strings in 24-hour clock format "HH:MM:SS", return the minimum difference in seconds between any two time strings in the arr[].
// The clock wraps around at midnight, so the time difference between "23:59:59" and "00:00:00" is 1 second.

// Examples:

// Input: arr[] = ["12:30:15", "12:30:45"]
// Output: 30
// Explanation: The minimum time difference is 30 seconds.
// Input: arr[] = ["00:00:01", "23:59:59", "00:00:05"]
// Output: 2
// Explanation: The time difference is minimum between "00:00:01" and "23:59:59".
// Constraints:
// 2 ≤ arr.size() ≤ 105
// arr[i] is in "HH:MM:SS" format.
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

/**
 * @param {string} arr
 * @returns {number}
 */

class Solution {
  minDifference(arr) {
    const totalSecondsInDay = 24 * 3600;
    const n = arr.length;
    if (n > totalSecondsInDay) {
      return 0;
    }

    const buckets = new Array(totalSecondsInDay).fill(false);
    for (const timeStr of arr) {
      const parts = timeStr.split(":");
      const hours = parseInt(parts[0], 10);
      const minutes = parseInt(parts[1], 10);
      const seconds = parseInt(parts[2], 10);
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;

      if (buckets[totalSeconds]) {
        return 0;
      }
      buckets[totalSeconds] = true;
    }

    const secondsArr = [];
    for (let i = 0; i < totalSecondsInDay; i++) {
      if (buckets[i]) {
        secondsArr.push(i);
      }
    }

    const m = secondsArr.length;
    let minDiff = totalSecondsInDay;
    for (let i = 0; i < m - 1; i++) {
      const diff = secondsArr[i + 1] - secondsArr[i];
      if (diff < minDiff) {
        minDiff = diff;
      }
    }

    const wrap = totalSecondsInDay - (secondsArr[m - 1] - secondsArr[0]);
    if (wrap < minDiff) {
      minDiff = wrap;
    }

    return minDiff;
  }
}
