// https://www.geeksforgeeks.org/problems/happiest-triplet2921/1

class Solution {
  smallestDiff(a, b, c) {
    // Sort all arrays
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
    c.sort((x, y) => x - y);

    let i = 0,
      j = 0,
      k = 0;
    const n = a.length;

    // Initialize with first triplet
    let minDiff = Infinity;
    let bestSum = Infinity;
    let result = [];

    while (i < n && j < n && k < n) {
      const current = [a[i], b[j], c[k]];
      const currentMin = Math.min(a[i], b[j], c[k]);
      const currentMax = Math.max(a[i], b[j], c[k]);
      const diff = currentMax - currentMin;
      const sum = a[i] + b[j] + c[k];

      // Check if current triplet is better
      if (diff < minDiff || (diff === minDiff && sum < bestSum)) {
        minDiff = diff;
        bestSum = sum;
        result = [...current];
      }

      // Move the pointer pointing to the smallest element
      if (a[i] === currentMin) {
        i++;
      } else if (b[j] === currentMin) {
        j++;
      } else {
        k++;
      }
    }

    // Sort result in decreasing order
    result.sort((x, y) => y - x);
    return result;
  }
}
