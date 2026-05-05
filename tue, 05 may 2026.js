/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
  sumXOR(arr) {
    const n = arr.length;
    if (n < 2) return 0;

    let total = 0;
    // arr[i] <= 10^5 < 2^17, so we check bits 0 to 16
    for (let bit = 0; bit < 17; bit++) {
      let countSet = 0;
      for (let i = 0; i < n; i++) {
        if ((arr[i] >> bit) & 1) {
          countSet++;
        }
      }
      const countUnset = n - countSet;
      total += countSet * countUnset * (1 << bit);
    }
    return total;
  }
}
