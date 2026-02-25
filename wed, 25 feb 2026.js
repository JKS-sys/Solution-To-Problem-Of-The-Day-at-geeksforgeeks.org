class Solution {
  longestSubarray(arr, k) {
    const n = arr.length;
    const offset = n; // to shift prefix sums into non‑negative range
    const size = 2 * n + 1; // number of possible prefix values
    const INF = n + 1; // larger than any valid index

    // firstOcc[val] = earliest index where prefix sum = val - offset
    let firstOcc = new Array(size).fill(INF);
    let pref = new Array(n + 1); // prefix sums, pref[0] = 0
    pref[0] = 0;
    firstOcc[offset] = 0; // prefix sum 0 appears at index 0

    // compute prefix sums and record first occurrences
    for (let i = 1; i <= n; i++) {
      const delta = arr[i - 1] > k ? 1 : -1;
      pref[i] = pref[i - 1] + delta;
      const idx = pref[i] + offset;
      if (firstOcc[idx] === INF) {
        firstOcc[idx] = i;
      }
    }

    // cumulative minimum over the value domain
    let cumMin = new Array(size);
    cumMin[0] = firstOcc[0];
    for (let v = 1; v < size; v++) {
      cumMin[v] = Math.min(cumMin[v - 1], firstOcc[v]);
    }

    let maxLen = 0;
    // for each right endpoint j (1 … n) find the best left endpoint
    for (let j = 1; j <= n; j++) {
      const s = pref[j];
      const idx = s + offset; // index corresponding to s
      if (idx > 0) {
        // there exist values < s
        const bestLeft = cumMin[idx - 1];
        if (bestLeft < j) {
          maxLen = Math.max(maxLen, j - bestLeft);
        }
      }
    }

    return maxLen;
  }
}
