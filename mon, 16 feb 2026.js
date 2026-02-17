class Solution {
  canAttend(arr) {
    // Sort meetings by start time
    arr.sort((a, b) => a[0] - b[0]);

    // Check for any overlap
    for (let i = 1; i < arr.length; i++) {
      if (arr[i][0] < arr[i - 1][1]) {
        return false; // Overlap found
      }
    }
    return true; // No overlaps
  }
}
