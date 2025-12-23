// Tue, 23 Dec 2025,
// POTD was https://www.geeksforgeeks.org/problems/find-number-of-elements-in-range-a-b-for-each-query/1

// Elements in range [a, b]
// Difficulty: Medium Accuracy: 65.04% Submissions: 2K+ Points: 4

// Given an unsorted array arr[] and a 2D array queries[][] of size q, where each query is in the form of [a, b]. For each query, count how many elements in arr[] lie within the range [a, b], i.e., elements satisfying a ≤ x ≤ b.

// Return the results for all queries as a list of integers, where each integer corresponds to the count of elements in the respective query range.

// Examples:

// Input: arr[] = [1, 4, 2, 8, 5], queries[][] = [[1, 4], [3, 6], [0, 10]]
// Output: [3, 2, 5]
// Explanation: Query [1, 4]: Elements in range → [1, 4, 2] → Count = 3
// Query [3, 6]: Elements in range → [4, 5] → Count = 2
// Query [0, 10]: All elements → [1, 4, 2, 8, 5] → Count = 5

// Input: arr[] = [10, 20, 30, 40, 50], queries[][] = [[5, 15], [25, 45], [10, 50]]
// Output: [1, 2, 5]
// Explanation: Query [5, 15]: Elements in range → [10] → Count = 1
// Query [25, 45]: Elements in range → [30, 40] → Count = 2
// Query [10, 50]: Elements in range → [10, 20, 30, 40, 50] → Count = 5

// Constraints:
// 1 ≤ arr.size(), q ≤ 10^5
// 0 ≤ arr[i] ≤ 10^6
// 0 ≤ queries[i][0] ≤ queries[i][1] ≤ 10^6
// Expected Complexities
// Time Complexity: O(n log n + q log n)
// Auxiliary Space: O(1)

class Solution {
  cntInRange(arr, queries) {
    // sort the array

    arr.sort((a, b) => a - b);

    const result = [];

    // process each query

    for (const [a, b] of queries) {
      // find lower bound (first index where arr[i] >= a)

      let left = 0;
      let right = arr.length;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < a) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      const lowerBound = left;

      // find upper bound (first index where arr[i] > b)

      left = 0;
      right = arr.length;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= b) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      const upperBound = left;

      // count elements in range [a, b]

      result.push(upperBound - lowerBound);
    }

    return result;
  }
}
