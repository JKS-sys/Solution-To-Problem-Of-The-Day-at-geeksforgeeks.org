class Solution {
  countBSTs(arr) {
    // Precompute Catalan numbers up to 6 (since n ≤ 6)
    const catalan = [1, 1, 2, 5, 14, 42, 132];
    const n = arr.length;
    const result = [];

    for (let i = 0; i < n; i++) {
      let left = 0,
        right = 0;
      // Count elements smaller and larger than arr[i]
      for (let j = 0; j < n; j++) {
        if (arr[j] < arr[i]) left++;
        else if (arr[j] > arr[i]) right++;
      }
      result.push(catalan[left] * catalan[right]);
    }
    return result;
  }
}
