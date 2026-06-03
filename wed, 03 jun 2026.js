class Solution {
  // Helper: first index with value >= target
  lowerBound(arr, target) {
    let lo = 0,
      hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (arr[mid] < target) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  // Helper: first index with value > target
  upperBound(arr, target) {
    let lo = 0,
      hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (arr[mid] <= target) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  freqInRange(arr, queries) {
    // Map each value to a sorted list of indices where it appears
    const positions = new Map();
    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];
      if (!positions.has(val)) {
        positions.set(val, []);
      }
      positions.get(val).push(i);
    }

    const result = [];
    for (const [l, r, x] of queries) {
      const indices = positions.get(x);
      if (!indices) {
        result.push(0);
        continue;
      }
      const left = this.lowerBound(indices, l);
      const right = this.upperBound(indices, r);
      result.push(right - left);
    }
    return result;
  }
}
