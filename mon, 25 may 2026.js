class Solution {
  checkElements(start, end, arr) {
    const n = arr.length;
    const rangeSize = end - start + 1;

    // If the range has more elements than the array, it's impossible to contain all.
    if (rangeSize > n) return false;

    // Place every number within [start, end] at its "correct" index (value - start)
    for (let i = 0; i < n; i++) {
      while (arr[i] >= start && arr[i] <= end && arr[i] - start !== i) {
        const correctIdx = arr[i] - start;
        // Safety check (all elements are distinct, so this won't happen, but it's harmless)
        if (arr[correctIdx] === arr[i]) break;
        // Swap arr[i] and arr[correctIdx]
        [arr[i], arr[correctIdx]] = [arr[correctIdx], arr[i]];
      }
    }

    // Verify that the first rangeSize elements are exactly start, start+1, ..., end
    for (let i = 0; i < rangeSize; i++) {
      if (arr[i] !== start + i) return false;
    }
    return true;
  }
}
