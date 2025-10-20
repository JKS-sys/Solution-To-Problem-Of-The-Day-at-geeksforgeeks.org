// Mon, 20 Oct 2025,

// Number of BST From Array
// Difficulty: HardAccuracy: 87.55%Submissions: 503+Points: 8
// You are given an integer array arr[] containing distinct elements.

// Your task is to return an array where the ith element denotes the number of unique BSTs formed when arr[i] is chosen as the root.

// Examples :

// Input: arr[] = [2, 1, 3]
// Output: [1, 2, 2]
// Explanation:
// 4
// Input: arr[] = [2, 1]
// Ouput: [1, 1]
// Constraints:
// 1 ≤ arr.size() ≤ 6
// 1 ≤ arr[i] ≤ 15
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

class Solution {
  countBSTs(arr) {
    const n = arr.length;
    const result = new Array(n).fill(0);

    const sorted = [...arr].sort((a, b) => a - b);
    const indexMap = new Map();
    sorted.forEach((val, idx) => indexMap.set(val, idx));

    const catalan = this.precomputeCatalan(n);

    for (let i = 0; i < n; i++) {
      const pos = indexMap.get(arr[i]);
      const smallerCount = pos;
      const largerCount = n - pos - 1;

      result[i] = catalan[smallerCount] * catalan[largerCount];
    }

    return result;
  }

  precomputeCatalan(maxN) {
    const catalan = new Array(maxN + 1).fill(0);
    catalan[0] = 1;

    for (let i = 1; i <= maxN; i++) {
      for (let j = 0; j < i; j++) {
        catalan[i] += catalan[j] * catalan[i - j - 1];
      }
    }

    return catalan;
  }
}
