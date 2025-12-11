// Thu, 11 Dec 2025,

// POTD question was https://www.geeksforgeeks.org/problems/construct-an-array-from-its-pair-sum-array/1

// Construct an array from its pair-sum array
// Difficulty: Easy Accuracy: 44.55% Submissions: 2K+ Points: 2 Average Time: 10m
// Given a pair-sum array arr[] construct the original array. A pair-sum array for an array is the array that contains sum of all pairs in ordered form, i.e., arr[0] is sum of res[0] and res[1], arr[1] is sum of res[0] and res[2] and so on.

// Note: If the size of original array res[] is n, then the size of pair-sum array arr[] would be n * (n -1) /2. We may assume that the pair-sum array arr[] is appropriate in size.
// Note that, if the original array is correct then the driver code will print true, else false;

// Examples:

// Input: arr[] = [4, 5, 3]
// Output: true
// Explanation: A valid original array is [3, 1, 2], pairwise sums are (3 + 1), (3 + 2) and (1 + 2).
// Input: arr[] = [3]
// Output: true
// Explanation: One of the valid original array is [1, 2].
// Constraints:
// 1 ≤ n ≤ 10^3
// 1 ≤ arr[i] ≤ 10^9
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  constructArr(arr) {
    const m = arr.length;

    if (m === 1) {
      return [1, arr[0] - 1];
    }

    const n = Math.floor((1 + Math.sqrt(1 + 8 * m)) / 2);

    const res = new Array(n);

    res[0] = Math.floor((arr[0] + arr[1] - arr[n - 1]) / 2);

    for (let i = 1; i < n; i++) {
      res[i] = arr[i - 1] - res[0];
    }

    return res;
  }
}
