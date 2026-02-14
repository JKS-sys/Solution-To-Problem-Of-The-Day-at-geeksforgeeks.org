class Solution {
  minTime(arr, k) {
    // Helper function to check if a given max time T is feasible
    const canPartition = (T) => {
      let paintersNeeded = 1; // start with one painter
      let currentSum = 0;

      for (let length of arr) {
        // A single board longer than T is impossible
        if (length > T) return false;

        // If adding this board exceeds T, start a new painter
        if (currentSum + length > T) {
          paintersNeeded++;
          currentSum = length;
        } else {
          currentSum += length;
        }
      }

      return paintersNeeded <= k;
    };

    // Binary search bounds
    let low = Math.max(...arr); // at least the largest board
    let high = arr.reduce((a, b) => a + b, 0); // sum of all boards (one painter)

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (canPartition(mid)) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    return low;
  }
}
