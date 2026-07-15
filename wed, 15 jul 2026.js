class Solution {
  bitonic(arr) {
    let n = arr.length;
    if (n <= 1) return n;

    let maxLen = 1;
    let i = 0;

    while (i < n - 1) {
      let start = i;

      // Find non-decreasing part
      while (i < n - 1 && arr[i] <= arr[i + 1]) {
        i++;
      }
      let peak = i;

      // Find non-increasing part
      while (i < n - 1 && arr[i] >= arr[i + 1]) {
        i++;
      }

      // Backtrack to the start of the last plateau in the decreasing part.
      // This ensures the next bitonic subarray can correctly start from here.
      let end = i;
      while (end > peak && arr[end] === arr[end - 1]) {
        end--;
      }

      maxLen = Math.max(maxLen, i - start + 1);
      i = end; // move to the start of the next possible bitonic sequence
    }

    return maxLen;
  }
}
