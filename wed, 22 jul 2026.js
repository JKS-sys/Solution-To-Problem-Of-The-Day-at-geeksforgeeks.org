class Solution {
  minDeletions(arr) {
    // Length of Longest Strictly Increasing Subsequence (LIS)
    const n = arr.length;
    const tails = []; // tails[i] = smallest possible tail of increasing subsequence of length i+1

    for (let x of arr) {
      // Binary search: find first index where tails[index] >= x
      let left = 0,
        right = tails.length;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (tails[mid] < x) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      if (left === tails.length) {
        tails.push(x);
      } else {
        tails[left] = x;
      }
    }

    const lisLength = tails.length;
    return n - lisLength;
  }
}
