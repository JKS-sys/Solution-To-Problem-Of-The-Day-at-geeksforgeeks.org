// Thu, 08 Jan 2025,

// POTD question was https://www.geeksforgeeks.org/problems/count-subarray-with-k-odds/1

// Count Subarray with K Odds

// Difficulty: Medium
// Accuracy: 53.77%
// Submissions: 9K+
// Points: 4
// Average Time: 20m

// You are given an array arr[] of positive integers and an integer k. You have to count the number of subarrays that contain exactly k odd numbers.

// Examples:

// Input: arr[] = [2, 5, 6, 9], k = 2
// Output: 2
// Explanation: There are 2 subarrays with 2 odds: [2, 5, 6, 9] and [5, 6, 9].

// Input: arr[] = [2, 2, 5, 6, 9, 2, 11], k = 2
// Output: 8
// Explanation: There are 8 subarrays with 2 odds: [2, 2, 5, 6, 9], [2, 5, 6, 9], [5, 6, 9], [2, 2, 5, 6, 9, 2], [2, 5, 6, 9, 2], [5, 6, 9, 2], [6, 9, 2, 11] and [9, 2, 11].

// Constraints:
// 1 ≤ k ≤ arr.size() ≤ 10^5
// 1 ≤ arr[i] ≤ 10^9

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  countSubarrays(arr, k) {
    // Helper function to count subarrays with at most k odd numbers

    const countAtMostKOdds = (arr, k) => {
      if (k < 0) return 0;

      let count = 0;
      let left = 0;
      let oddCount = 0;

      for (let right = 0; right < arr.length; right++) {
        // If current element is odd, increment oddCount

        if (arr[right] % 2 === 1) {
          oddCount++;
        }

        // Shrink window if we have more than k odds

        while (oddCount > k) {
          if (arr[left] % 2 === 1) {
            oddCount--;
          }
          left++;
        }

        // All subarrays ending at right with start from left to right are valid

        count += right - left + 1;
      }

      return count;
    };

    // Count exactly k odds = (at most k odds) - (at most k-1 odds)

    return countAtMostKOdds(arr, k) - countAtMostKOdds(arr, k - 1);
  }
}
