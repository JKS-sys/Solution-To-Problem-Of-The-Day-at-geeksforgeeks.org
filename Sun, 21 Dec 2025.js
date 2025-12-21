// Sun, 21 Dec 2025,

// POTD question was https://www.geeksforgeeks.org/problems/count-x-in-range-of-a-sorted-array/1

// Count X in Range of a Sorted Array
// Difficulty: Medium Accuracy: 59.49% Submissions: 2K+ Points: 4

// You are given a sorted array arr[] and a 2D array queries[][], where queries[i] represents a query in the form [l, r, x]. For each query, count how many times the number x appears in the subarray arr[l...r] (inclusive).

// Examples:

// Input: arr[] = [1, 2, 2, 4, 5, 5, 5, 8], queries[][] = [[0, 7, 5], [1, 2, 2], [0, 3, 7]]
// Output: [3, 2, 0]
// Explanation:
// Query [0, 7, 5] → elements from index 0 to 7 are [1, 2, 2, 4, 5, 5, 5, 8].
// Number 5 occurs 3 times.
// Query [1, 2, 2] → subarray is [2, 2], and 2 occurs 2 times.
// Query [0, 3, 7] → subarray is [1, 2, 2, 4], and 7 is not present.

// Input: arr[] = [1, 3, 3, 3, 6, 7, 8], queries[][] = [[0, 3, 3], [4, 6, 3], [1, 5, 6]]
// Output: [3, 0, 1]
// Explanation:
// Query [0, 3, 3] → subarray [1, 3, 3, 3], and 3 appears 3 times.
// Query [4, 6, 3] → subarray [6, 7, 8], 3 not found.
// Query [1, 5, 6] → subarray [3, 3, 3, 6, 7], and 6 occurs 1 time.

// Constraints:
// 1 ≤ arr.size(), queries.size() ≤ 105
// 1 ≤ arr[i], x ≤ 106
// 0 ≤ l ≤ r < arr.size()
// Expected Complexities
// Time Complexity: O(q * log(n))
// Auxiliary Space: O(1)

class Solution {
  countXInRange(arr, queries) {
    const result = [];

    for (const [l, r, x] of queries) {
      let first = -1;
      let left = l,
        right = r;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === x) {
          first = mid;
          right = mid - 1;
        } else if (arr[mid] < x) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }

      if (first === -1) {
        result.push(0);
        continue;
      }

      let last = first;
      (left = first), (right = r);

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === x) {
          last = mid;
          left = mid + 1;
        } else if (arr[mid] < x) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }

      result.push(last - first + 1);
    }

    return result;
  }
}
