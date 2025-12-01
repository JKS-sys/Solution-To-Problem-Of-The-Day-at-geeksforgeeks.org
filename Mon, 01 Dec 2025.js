// Mon, 01 Dec 2025,

// XOR Pairs less than K
// Difficulty: Medium Accuracy: 65.59% Submissions: 538+ Points: 4
// Given an array arr[] and an integer k, we need to count the number of pairs from the given array such that the Bitwise XOR of each pair is less than k.

// Examples:

// Input: arr = [1, 2, 3, 5], k = 5
// Output: 4
// Explanation: Bitwise XOR of all possible pairs that satisfy the given conditions are:
// arr[0] ^ arr[1] = 1 ^ 2 = 3
// arr[0] ^ arr[2] = 1 ^ 3 = 2
// arr[0] ^ arr[3] = 1 ^ 5 = 4
// arr[1] ^ arr[2] = 3 ^ 5 = 1
// Therefore, the required output is 4.
// Input: arr[] = [3, 5, 6, 8], k = 7
// Output: 3
// Explnation: Bitwise XOR of all possible pairs that satisfy the given conditions are:
// arr[0] ^ arr[1] = 6
// arr[0] ^ arr[2] = 5
// arr[1] ^ arr[2] = 3
// Therefore, the required output is 3.
// Constraints:
// 1 ≤ arr.size(), k ≤ 5*10^4
// 1 ≤ arr[i] ≤ 5*10^4
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  cntPairs(arr, k) {
    const trie = { count: 0, children: [null, null] };
    let totalPairs = 0;

    for (const num of arr) {
      totalPairs += this.countPairs(trie, num, k, 15);
      this.insert(trie, num, 15);
    }

    return totalPairs;
  }

  insert(node, num, bitPos) {
    if (bitPos < 0) return;

    const bit = (num >> bitPos) & 1;
    if (!node.children[bit]) {
      node.children[bit] = { count: 0, children: [null, null] };
    }
    node.children[bit].count++;
    this.insert(node.children[bit], num, bitPos - 1);
  }

  countPairs(node, num, k, bitPos) {
    if (!node || bitPos < 0) return 0;

    const numBit = (num >> bitPos) & 1;
    const kBit = (k >> bitPos) & 1;
    let count = 0;

    if (kBit === 1) {
      if (node.children[numBit]) {
        count += node.children[numBit].count;
      }
      if (node.children[1 - numBit]) {
        count += this.countPairs(node.children[1 - numBit], num, k, bitPos - 1);
      }
    } else {
      if (node.children[numBit]) {
        count += this.countPairs(node.children[numBit], num, k, bitPos - 1);
      }
    }

    return count;
  }
}
