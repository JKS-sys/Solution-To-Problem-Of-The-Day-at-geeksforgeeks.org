class Solution {
  largestSwap(s) {
    // Convert the string to an array for easy swapping
    const arr = s.split("");
    const n = arr.length;

    // Track the maximum digit and its rightmost index in the suffix
    let maxDigit = arr[n - 1];
    let maxIndex = n - 1;

    // Store the best (leftmost) swap candidate
    let best_i = -1,
      best_j = -1;

    // Scan from right to left
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] < maxDigit) {
        // Current position can be improved by swapping with the current max
        best_i = i;
        best_j = maxIndex;
      } else if (arr[i] > maxDigit) {
        // Found a new maximum – update (keeping the rightmost occurrence)
        maxDigit = arr[i];
        maxIndex = i;
      }
      // If equal, we keep the existing maxIndex (rightmost)
    }

    // Perform the swap if a beneficial one exists
    if (best_i !== -1) {
      [arr[best_i], arr[best_j]] = [arr[best_j], arr[best_i]];
    }

    return arr.join("");
  }
}
