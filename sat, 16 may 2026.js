/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
  findSmallest(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // `res` represents the smallest positive integer
    // that we cannot form with the processed elements.
    // Initially, we can form sums from 1 to res-1 (empty range).
    let res = 1;

    for (let i = 0; i < arr.length; i++) {
      // If the current element is greater than `res`,
      // we have found a gap: `res` cannot be formed.
      if (arr[i] > res) {
        return res;
      }
      // Otherwise, we can form all sums up to res + arr[i] - 1
      // so the new unformable smallest integer becomes res + arr[i].
      res += arr[i];
    }

    return res;
  }
}
