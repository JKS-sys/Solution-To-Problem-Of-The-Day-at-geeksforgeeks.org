// Sat, 20 Dec 2025,

// POTD question was https://www.geeksforgeeks.org/problems/search-insert-position-of-k-in-a-sorted-array/1

// Search insert position of K in a sorted array
// Difficulty: Easy Accuracy: 38.99% Submissions: 89K+ Points: 2

// Given a sorted array arr[] (0-index based) of distinct integers and an integer k, find the index of k if it is present in the arr[]. If not, return the index where k should be inserted to maintain the sorted order.

// Examples :

// Input: arr[] = [1, 3, 5, 6], k = 5
// Output: 2
// Explanation: Since 5 is found at index 2 as arr[2] = 5, the output is 2.

// Input: arr[] = [1, 3, 5, 6], k = 2
// Output: 1
// Explanation: The element 2 is not present in the array, but inserting it at index 1 will maintain the sorted order.

// Input: arr[] = [2, 6, 7, 10, 14], k = 15
// Output: 5
// Explanation: The element 15 is not present in the array, but inserting it after index 4 will maintain the sorted order.

// Constraints:
// 1 ≤ arr.size() ≤ 10^4
// -10^3 ≤ arr[i] ≤ 10^3
// -10^3 ≤ k ≤ 10^3
// Expected Complexities
// Time Complexity: O(log n)
// Auxiliary Space: O(1)

class Solution {
  searchInsertK(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    let ans = arr.length;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (arr[mid] >= k) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return ans;
  }
}
