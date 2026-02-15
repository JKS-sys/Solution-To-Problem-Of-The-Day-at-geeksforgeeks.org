class Solution {
  /**
   * @param {number[]} arr - Array of chocolate packets
   * @param {number} m - Number of students
   * @returns {number} - Minimum possible difference
   */
  findMinDiff(arr, m) {
    // Edge case: if there are no students or not enough packets
    if (m === 0 || arr.length === 0) return 0;

    // Step 1: sort the array
    arr.sort((a, b) => a - b);

    let minDiff = Infinity;

    // Step 2: slide a window of size m over the sorted array
    for (let i = 0; i + m - 1 < arr.length; i++) {
      const currentDiff = arr[i + m - 1] - arr[i];
      if (currentDiff < minDiff) {
        minDiff = currentDiff;
      }
    }

    return minDiff;
  }
}
