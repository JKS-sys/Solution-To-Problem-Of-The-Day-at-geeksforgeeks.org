// Mon, 01 Sep 2025,

// Sum of Mode
// Difficulty: HardAccuracy: 59.43%Submissions: 1K+Points: 8Average Time: 20m
// Given an array arr[] of positive integers and an integer k. You have to find the sum of the modes of all the subarrays of size k.
// Note: The mode of a subarray is the element that occurs with the highest frequency. If multiple elements have the same highest frequency, the smallest such element is considered the mode.

// Examples:

// Input: arr[] = [1, 2, 3, 2, 5, 2, 4, 4], k = 3
// Output: 13
// Explanation: The mode of each k size subarray is [1, 2, 2, 2, 2, 4] and sum of all modes is 13.
// Input: arr[] = [1, 2, 1, 3, 5], k = 2
// Output: 6
// Explanation: The mode of each k size subarray is [1, 1, 1, 3] and sum of all modes is 6.
// Constraints:
// 1 ≤ k ≤ arr.size() ≤105
// 1 ≤ arr[i] ≤ 105
// Expected Complexities
// Time Complexity: O(n log k)
// Auxiliary Space: O(k)

class Solution {
  sumOfModes(arr, k) {
    const M = 100000;
    let n = arr.length;
    let freq = new Uint32Array(M + 1).fill(0);
    let treeSize = 2 * M;
    let treeMaxFreq = new Uint32Array(treeSize + 1);
    let treeMinVal = new Uint32Array(treeSize + 1);

    for (let x = 1; x <= M; x++) {
      let idx = M + x - 1;
      treeMinVal[idx] = x;
    }

    const updateTree = (x, newFreq) => {
      let p = M + x - 1;
      treeMaxFreq[p] = newFreq;
      p = p >> 1;
      while (p >= 1) {
        let left = p * 2;
        let right = p * 2 + 1;
        if (treeMaxFreq[left] > treeMaxFreq[right]) {
          treeMaxFreq[p] = treeMaxFreq[left];
          treeMinVal[p] = treeMinVal[left];
        } else if (treeMaxFreq[right] > treeMaxFreq[left]) {
          treeMaxFreq[p] = treeMaxFreq[right];
          treeMinVal[p] = treeMinVal[right];
        } else {
          treeMaxFreq[p] = treeMaxFreq[left];
          treeMinVal[p] = Math.min(treeMinVal[left], treeMinVal[right]);
        }
        p = p >> 1;
      }
    };

    for (let i = 0; i < k; i++) {
      let x = arr[i];
      freq[x]++;
      updateTree(x, freq[x]);
    }

    let total = treeMinVal[1];

    for (let i = k; i < n; i++) {
      let xRemove = arr[i - k];
      freq[xRemove]--;
      updateTree(xRemove, freq[xRemove]);

      let xAdd = arr[i];
      freq[xAdd]++;
      updateTree(xAdd, freq[xAdd]);

      total += treeMinVal[1];
    }

    return total;
  }
}
