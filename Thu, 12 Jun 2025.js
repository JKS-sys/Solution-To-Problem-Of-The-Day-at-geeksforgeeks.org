// Thu, 12 Jun 2025,

// K closest elements
// Difficulty: MediumAccuracy: 15.96%Submissions: 74K+Points: 4Average Time: 30m
// You are given a sorted array arr[] of unique integers, an integer k, and a target value x. Return exactly k elements from the array closest to x, excluding x if it exists.

// An element a is closer to x than b if:

// |a - x| < |b - x|, or

// |a - x| == |b - x| and a > b (i.e., prefer the larger element if tied)

// Return the k closest elements in order of closeness.

// Examples:

// Input: arr[] = [1, 3, 4, 10, 12], k = 2, x = 4
// Output: 3 1
// Explanation: 4 is excluded, Closest elements to 4 are: 3 (1), 1 (3). So, the 2 closest elements are: 3 1
// Input: arr[] = [12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56], k = 4, x = 35
// Output: 39 30 42 45
// Explanation: First closest element to 35 is 39.
// Second closest element to 35 is 30.
// Third closest element to 35 is 42.
// And fourth closest element to 35 is 45.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ k ≤ arr.size()
// 1 ≤ x ≤ 106
// 1 ≤ arr[i] ≤ 106

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

class Solution {
  printKClosest(arr, k, x) {
    const n = arr.length;
    let low = 0;
    let high = n - 1;
    let pos = n;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] >= x) {
        pos = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    let left, right;
    if (pos < n && arr[pos] === x) {
      left = pos - 1;
      right = pos + 1;
    } else {
      left = pos - 1;
      right = pos;
    }

    const res = [];
    while (k > 0) {
      if (left >= 0 && right < n) {
        const diffLeft = Math.abs(arr[left] - x);
        const diffRight = Math.abs(arr[right] - x);
        if (diffLeft < diffRight) {
          res.push(arr[left]);
          left--;
        } else if (diffLeft > diffRight) {
          res.push(arr[right]);
          right++;
        } else {
          res.push(arr[right]);
          right++;
        }
      } else if (left >= 0) {
        res.push(arr[left]);
        left--;
      } else if (right < n) {
        res.push(arr[right]);
        right++;
      } else {
        break;
      }
      k--;
    }

    return res;
  }
}
