// Tue, 25 Nov 2025,

// Game of XOR
// Difficulty: Medium Accuracy: 50.77% Submissions: 41K+ Points: 4
// You are given an integer array arr[]. The value of a subarray is defined as the bitwise XOR of all elements in that subarray.
// Your task is to compute the bitwise XOR of the values of all possible subarrays of arr[].

// Examples:

// Input: arr[] = [1, 2, 3]
// Output: 2
// Explanation:
// xor[1] = 1
// xor[1, 2] = 3
// xor[2, 3] = 1
// xor[1, 2, 3] = 0
// xor[2] = 2
// xor[3] = 3
// Result : 1 ^ 3 ^ 1 ^ 0 ^ 2 ^ 3 = 2
// Input: arr[] = [1, 2]
// Output: 0
// Explanation:
// xor[1] = 1
// xor[1, 2] = 3
// xor[2] = 2
// Result : 1 ^ 3 ^ 2 = 0
// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// 0 ≤ arr[i] ≤ 10^9
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
  subarrayXor(arr) {
    const n = arr.length;

    // If array length is even, result is always 0
    if (n % 2 === 0) {
      return 0;
    }

    // If array length is odd, result is XOR of elements at even indices
    let result = 0;
    for (let i = 0; i < n; i += 2) {
      result ^= arr[i];
    }

    return result;
  }
}
