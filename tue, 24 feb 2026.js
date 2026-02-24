class Solution {
  equalSumSpan(a1, a2) {
    const n = a1.length;
    // prefix sum of differences a1[i] - a2[i]
    let prefix = 0;
    // map to store first occurrence of each prefix sum
    const firstOccurrence = new Map();
    firstOccurrence.set(0, -1); // empty prefix before index 0
    let maxLen = 0;

    for (let i = 0; i < n; i++) {
      // update prefix sum with current difference
      prefix += a1[i] - a2[i];

      if (firstOccurrence.has(prefix)) {
        // same prefix sum found -> subarray from (firstOcc+1) to i has zero sum
        const len = i - firstOccurrence.get(prefix);
        if (len > maxLen) maxLen = len;
      } else {
        // first time we see this prefix sum
        firstOccurrence.set(prefix, i);
      }
    }

    return maxLen;
  }
}
