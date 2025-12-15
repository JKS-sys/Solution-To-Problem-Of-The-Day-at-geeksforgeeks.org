// Mon, 15 Dec 2025,

// POTD Question was https://www.geeksforgeeks.org/problems/count-indices-to-balance-even-and-odd-sums/1

// Count Indices to Balance Even and Odd Sums
// Difficulty: Medium Accuracy: 70.95% Submissions: 2K+ Points: 4
// Given an array arr[], count the number of indices such that deleting the element at that index and shifting all elements after it one position left results in an array where the sum of elements at even indices equals the sum at odd indices.

// Examples:

// Input: arr[] = [2, 1, 6, 4]
// Output: 1
// Explaination: After removing arr[1], the resulting array will be [2, 6, 4] the sums of elements at odd index is arr[1] = 6 and the sum of elements at even index is arr[0] + arr[2] = 6.
// Input: arr[] = [1, 1, 1]
// Output: 3
// Explaination: Removing any element makes the sum of odd and even indexed elements equal.

// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// 0 ≤ arr[i] ≤ 10^4

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  cntWays(arr) {
    const n = arr.length;

    let totalEven = 0,
      totalOdd = 0;
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        totalEven += arr[i];
      } else {
        totalOdd += arr[i];
      }
    }

    let leftEven = 0,
      leftOdd = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
      const leftDiff = leftEven - leftOdd;
      const totalDiff = totalEven - totalOdd;
      const C = i % 2 === 0 ? arr[i] : -arr[i];

      if (2 * leftDiff - totalDiff + C === 0) {
        count++;
      }

      if (i % 2 === 0) {
        leftEven += arr[i];
      } else {
        leftOdd += arr[i];
      }
    }

    return count;
  }
}
