/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */

class Solution {
  maxPathSum(a, b) {
    let i = 0,
      j = 0;
    let sum1 = 0,
      sum2 = 0;
    let result = 0;
    const n = a.length,
      m = b.length;

    // Traverse both arrays
    while (i < n && j < m) {
      if (a[i] < b[j]) {
        sum1 += a[i];
        i++;
      } else if (b[j] < a[i]) {
        sum2 += b[j];
        j++;
      } else {
        // Common element found
        result += Math.max(sum1, sum2) + a[i];
        sum1 = 0;
        sum2 = 0;
        i++;
        j++;
      }
    }

    // Add remaining elements of array a
    while (i < n) {
      sum1 += a[i];
      i++;
    }

    // Add remaining elements of array b
    while (j < m) {
      sum2 += b[j];
      j++;
    }

    // Add the maximum of the last segments
    result += Math.max(sum1, sum2);

    return result;
  }
}
