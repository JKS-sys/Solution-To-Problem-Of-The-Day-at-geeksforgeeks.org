class Solution {
  countIncreasing(arr) {
    let n = arr.length;
    if (n < 2) return 0; // no subarray of size >=2 possible

    let total = 0;
    let len = 1; // length of current strictly increasing run

    for (let i = 1; i < n; i++) {
      if (arr[i] > arr[i - 1]) {
        len++; // extend the run
      } else {
        len = 1; // start a new run
      }

      if (len >= 2) {
        total += len - 1; // new subarrays ending at i
      }
    }

    return total;
  }
}
