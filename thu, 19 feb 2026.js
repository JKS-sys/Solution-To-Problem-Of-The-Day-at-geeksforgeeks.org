class Solution {
  missingRange(arr, low, high) {
    // Create a set for O(1) lookups
    const present = new Set(arr);
    const result = [];

    // Check each number in the inclusive range [low, high]
    for (let i = low; i <= high; i++) {
      if (!present.has(i)) {
        result.push(i);
      }
    }

    return result;
  }
}
