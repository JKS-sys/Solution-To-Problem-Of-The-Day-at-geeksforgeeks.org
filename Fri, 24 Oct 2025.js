// Fri, 24 Oct 2025,

// Split Array Subsequences
// Difficulty: MediumAccuracy: 44.16%Submissions: 841+Points: 4
// Given a sorted integer array arr[] and an integer k, determine if it is possible to split the array into one or more consecutive subsequences such that:

// Each subsequence consists of consecutive integers (each number is exactly one greater than the previous).
// Every subsequence has a length of at least k.
// Return true if such a split is possible, otherwise return false.

// Examples :

// Input: arr[] = [2, 2, 3, 3, 4, 5], k = 2
// Output: true
// Explanation: arr can be split into three subsequence of length k - [2, 3], [2, 3], [4, 5].
// Input: arr[] = [1, 1, 1, 1, 1], k = 4
// Output: false
// Explanation: It is impossible to split arr into consecutive increasing subsequences of length 4 or more.
// Constraints:
// 1 ≤ arr.size()  ≤ 105
// 1 ≤ arr[i] ≤ 105
// 1 ≤  k ≤  arr.size()
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

class Solution {
  isPossible(arr, k) {
    const count = new Map();
    const end = new Map();

    for (let num of arr) {
      count.set(num, (count.get(num) || 0) + 1);
    }

    for (let num of arr) {
      if (count.get(num) === 0) continue;

      count.set(num, count.get(num) - 1);

      if (end.get(num - 1) > 0) {
        end.set(num - 1, end.get(num - 1) - 1);
        end.set(num, (end.get(num) || 0) + 1);
      } else {
        let canBuild = true;
        for (let i = 1; i < k; i++) {
          if ((count.get(num + i) || 0) <= 0) {
            canBuild = false;
            break;
          }
        }
        if (!canBuild) return false;

        for (let i = 1; i < k; i++) {
          count.set(num + i, count.get(num + i) - 1);
        }
        end.set(num + k - 1, (end.get(num + k - 1) || 0) + 1);
      }
    }

    return true;
  }
}
