// Wed, 23 Jul 2025,

// Sum of Subarrays
// Difficulty: MediumAccuracy: 23.85%Submissions: 29K+Points: 4
// Given an array arr[], find the sum of all the subarrays of the given array.

// Note: It is guaranteed that the total sum will fit within a 32-bit integer range.

// Examples:

// Input: arr[] = [1, 2, 3]
// Output: 20
// Explanation: All subarray sums are: [1] = 1, [2] = 2, [3] = 3, [1, 2] = 3, [2, 3] = 5, [1, 2, 3] = 6. Thus total sum is 1 + 2 + 3 + 3 + 5 + 6 = 20.
// Input: arr[] = [1, 3]
// Output: 8
// Explanation: All subarray sums are: [1] = 1, [3] = 3, [1, 3] = 4. Thus total sum is 1 + 3 + 4 = 8.
// Constraints :
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 104
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  subarraySum(arr) {
    let n = arr.length;
    let totalSum = 0;
    for (let i = 0; i < n; i++) {
      totalSum += arr[i] * (i + 1) * (n - i);
    }
    return totalSum;
  }
}
