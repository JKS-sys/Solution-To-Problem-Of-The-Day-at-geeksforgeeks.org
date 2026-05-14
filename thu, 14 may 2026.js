/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */

class Solution {
  search(a, b) {
    const n = a.length;
    const m = b.length;

    // Build the LPS (Longest Prefix Suffix) array for pattern b
    const lps = new Array(m).fill(0);
    let len = 0; // length of the previous longest prefix suffix
    let i = 1;

    while (i < m) {
      if (b[i] === b[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len !== 0) {
          len = lps[len - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }

    const result = [];
    i = 0; // index for a
    let j = 0; // index for b

    while (i < n) {
      if (a[i] === b[j]) {
        i++;
        j++;
      }

      if (j === m) {
        // Pattern found, record start index
        result.push(i - j);
        j = lps[j - 1];
      } else if (i < n && a[i] !== b[j]) {
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          i++;
        }
      }
    }

    return result;
  }
}
