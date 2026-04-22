/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
class Solution {
  findMean(arr, queries) {
    const n = arr.length;
    // Build prefix sum array
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      prefix[i + 1] = prefix[i] + arr[i];
    }

    const result = [];
    for (const [l, r] of queries) {
      const sum = prefix[r + 1] - prefix[l];
      const count = r - l + 1;
      result.push(Math.floor(sum / count));
    }
    return result;
  }
}
