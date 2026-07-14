/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
  find(arr) {
    // The process reduces to x_new = 2*x - arr[i] every step.
    // Working backwards, the minimal required value at each step
    // is ceil((required_next + arr[i]) / 2).
    let ans = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      ans = Math.ceil((ans + arr[i]) / 2);
    }
    return ans;
  }
}
