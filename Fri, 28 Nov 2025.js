// Fri, 28 Nov 2025,

// Subset XOR
// Difficulty: Medium Accuracy: 79.36% Submissions: 718 Points: 4
// Given an positive integer n, find a subset of numbers from 1 to n (inclusive), where each number can be used at most once, such that:

// The XOR of all elements in the subset is exactly n.
// The size of the subset is as large as possible.
// If multiple such subsets exist, choose the lexicographically smallest one.
// Lexicographical Order : A subset A[] is lexicographically smaller than subset B[] if at the first index where they differ, A[i] < B[i] (based on character ASCII/Unicode values).
// If all elements match but one subset ends earlier, the shorter subset is considered smaller.

// Examples:

// Input: n = 4
// Output: [1, 2, 3, 4]
// Explanation: We choose all the elements from 1 to 4. Its xor value is equal to n. This is the maximum possible size of the subset.
// Input: n = 3
// Output: [1, 2]
// Explanation: 1 ^ 2 = 3, This is the smallest lexicographical answer possible with maximum size of subset i.e 2.

// Constraints:
// 1 ≤ n ≤ 10^5

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  subsetXOR(n) {
    let totalXOR = this.xorUpToN(n);

    if (totalXOR === n) {
      let result = [];
      for (let i = 1; i <= n; i++) {
        result.push(i);
      }
      return result;
    }

    let remove = totalXOR ^ n;
    let result = [];
    for (let i = 1; i <= n; i++) {
      if (i !== remove) {
        result.push(i);
      }
    }
    return result;
  }

  xorUpToN(n) {
    switch (n % 4) {
      case 0:
        return n;
      case 1:
        return 1;
      case 2:
        return n + 1;
      case 3:
        return 0;
    }
  }
}
