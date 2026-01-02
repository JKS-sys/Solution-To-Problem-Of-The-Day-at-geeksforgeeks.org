// Fri, 02 Jan 2025,

// POTD question was https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1

// Sort 0s, 1s and 2s

// Difficulty: Medium
// Accuracy: 50.58%
// Submissions: 831K+
// Points: 4
// Average Time: 10m

// Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.

// Note: You need to solve this problem without utilizing the built-in sort function.

// Examples:

// Input: arr[] = [0, 1, 2, 0, 1, 2]
// Output: [0, 0, 1, 1, 2, 2]
// Explanation: 0s, 1s and 2s are segregated into ascending order.

// Input: arr[] = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
// Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
// Explanation: 0s, 1s and 2s are segregated into ascending order.

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?

// Constraints:
// 1 ≤ arr.size() ≤ 10^6
// 0 ≤ arr[i] ≤ 2

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  sort012(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
      if (arr[mid] === 0) {
        // Swap arr[mid] and arr[low]

        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
      } else if (arr[mid] === 1) {
        mid++;
      } else {
        // arr[mid] === 2

        // Swap arr[mid] and arr[high]

        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
      }
    }
  }
}
