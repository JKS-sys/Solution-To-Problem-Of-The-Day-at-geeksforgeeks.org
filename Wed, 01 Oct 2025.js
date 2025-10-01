// Wed, 01 Oct 2025,

// All Unique Permutations of an array
// Difficulty: MediumAccuracy: 52.85%Submissions: 44K+Points: 4Average Time: 15m
// Given an array arr[] that may contain duplicates. Find all possible distinct permutations of the array in sorted order.
// Note: A sequence A is greater than sequence B if there is an index i for which Aj = Bj for all j<i and Ai > Bi.

// Examples:

// Input: arr[] = [1, 3, 3]
// Output: [[1, 3, 3], [3, 1, 3], [3, 3, 1]]
// Explanation: These are the only possible distinct permutations for the given array.
// Input: arr[] = [2, 3]
// Output: [[2, 3], [3, 2]]
// Explanation: These are the only possible distinct permutations for the given array.
// Constraints:
// 1 ≤ arr.size() ≤ 9
// Expected Complexities
// Time Complexity: O(n! * n)
// Auxiliary Space: O(n)

class Solution {
  uniquePerms(arr) {
    const result = [];
    arr.sort((a, b) => a - b);
    const frequencyMap = new Map();

    for (const num of arr) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    function backtrack(currentPath, freqMap, n) {
      if (currentPath.length === n) {
        result.push([...currentPath]);
        return;
      }

      for (const [num, count] of freqMap) {
        if (count > 0) {
          currentPath.push(num);
          freqMap.set(num, count - 1);

          backtrack(currentPath, freqMap, n);

          currentPath.pop();
          freqMap.set(num, count);
        }
      }
    }

    backtrack([], frequencyMap, arr.length);
    return result;
  }
}
