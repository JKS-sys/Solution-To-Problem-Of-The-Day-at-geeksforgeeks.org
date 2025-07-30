// Wed, 30 Jul 2025,

// Subarrays with sum K
// Difficulty: MediumAccuracy: 49.74%Submissions: 82K+Points: 4
// Given an unsorted array arr[] of integers, find the number of subarrays whose sum exactly equal to a given number k.

// Examples:

// Input: arr[] = [10, 2, -2, -20, 10], k = -10
// Output: 3
// Explaination: Subarrays: arr[0...3], arr[1...4], arr[3...4] have sum exactly equal to -10.
// Input: arr[] = [9, 4, 20, 3, 10, 5], k = 33
// Output: 2
// Explaination: Subarrays: arr[0...2], arr[2...4] have sum exactly equal to 33.
// Input: arr[] = [1, 3, 5], k = 0
// Output: 0
// Explaination: No subarray with 0 sum.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// -103 ≤ arr[i] ≤ 103
// -105 ≤ k ≤ 105
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  cntSubarrays(arr, k) {
    let count = 0;
    let prefixSum = 0;
    const map = new Map();
    map.set(0, 1);

    for (let i = 0; i < arr.length; i++) {
      prefixSum += arr[i];
      if (map.has(prefixSum - k)) {
        count += map.get(prefixSum - k);
      }
      map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
  }
}
