class Solution {
  minInsAndDel(a, b) {
    // Step 1: Filter array a to keep only elements present in b.
    const setB = new Set(b);
    const filtered = [];
    for (const x of a) {
      if (setB.has(x)) {
        filtered.push(x);
      }
    }

    // Step 2: Find length of Longest Increasing Subsequence (LIS) in filtered array.
    // Since b is sorted and has distinct elements, the common subsequence must be strictly increasing.
    const tails = [];
    for (const x of filtered) {
      let left = 0,
        right = tails.length;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (tails[mid] < x) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      if (left === tails.length) {
        tails.push(x);
      } else {
        tails[left] = x;
      }
    }
    const lis = tails.length;

    // Step 3: Min operations = deletions from a + insertions from b
    // deletions = a.length - lis
    // insertions = b.length - lis
    return a.length + b.length - 2 * lis;
  }
}
