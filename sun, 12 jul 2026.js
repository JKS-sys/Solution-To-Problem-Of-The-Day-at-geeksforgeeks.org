/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
  maxAmount(arr, k) {
    const MOD = 1000000007;

    // Find the maximum ticket count to set the upper bound for binary search
    let maxVal = 0;
    for (let a of arr) {
      if (a > maxVal) maxVal = a;
    }

    // Binary search for the threshold price T
    let low = 0,
      high = maxVal;
    while (low < high) {
      let mid = Math.floor((low + high + 1) / 2);
      let cnt = 0;
      for (let a of arr) {
        if (a >= mid) {
          cnt += a - mid + 1;
          if (cnt >= k) break; // early exit
        }
      }
      if (cnt >= k) {
        low = mid;
      } else {
        high = mid - 1;
      }
    }

    let T = low;
    let countGT = 0; // number of tickets with price > T
    let sumGT = 0; // total revenue from tickets with price > T

    for (let a of arr) {
      if (a > T) {
        let cnt = a - T;
        countGT += cnt;
        // sum of arithmetic progression: a + (a-1) + ... + (T+1)
        sumGT += ((a + T + 1) * cnt) / 2;
      }
    }

    // Add the remaining tickets at price T to reach exactly k tickets
    let result = sumGT + (k - countGT) * T;
    return result % MOD;
  }
}
