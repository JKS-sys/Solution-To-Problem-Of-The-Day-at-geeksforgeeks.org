/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
  minSwaps(arr) {
    const n = arr.length;

    // Count total number of 1s
    let totalOnes = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] === 1) totalOnes++;
    }

    // If there are no 1s, return -1
    if (totalOnes === 0) return -1;

    // Find maximum number of 1s in any window of size totalOnes
    let currentOnes = 0;
    // Initialize the first window
    for (let i = 0; i < totalOnes; i++) {
      if (arr[i] === 1) currentOnes++;
    }

    let maxOnes = currentOnes;

    // Slide the window
    for (let i = totalOnes; i < n; i++) {
      // Remove the leftmost element of the previous window
      if (arr[i - totalOnes] === 1) currentOnes--;
      // Add the new element
      if (arr[i] === 1) currentOnes++;

      if (currentOnes > maxOnes) {
        maxOnes = currentOnes;
      }
    }

    // Minimum swaps = zeros in the best window = window size - max ones in window
    return totalOnes - maxOnes;
  }
}
