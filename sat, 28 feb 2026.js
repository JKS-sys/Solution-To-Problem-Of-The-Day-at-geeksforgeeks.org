class Solution {
  findClosestPair(arr1, arr2, x) {
    let i = 0;
    let j = arr2.length - 1;
    let bestDiff = Infinity;
    let bestPair = [];

    while (i < arr1.length && j >= 0) {
      const sum = arr1[i] + arr2[j];
      const diff = Math.abs(sum - x);

      if (diff < bestDiff) {
        bestDiff = diff;
        bestPair = [arr1[i], arr2[j]];
      }

      if (sum < x) {
        i++; // need a larger sum
      } else if (sum > x) {
        j--; // need a smaller sum
      } else {
        // exact match found, break early
        break;
      }
    }

    return bestPair;
  }
}
