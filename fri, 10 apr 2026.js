class Solution {
  find3Numbers(arr) {
    const n = arr.length;
    if (n < 3) return [];

    let first = arr[0]; // smallest element seen so far
    let second = Infinity; // smallest element that is > first and appears after it
    let firstForSecond = null; // the 'first' that pairs with the current 'second'

    for (let i = 1; i < n; i++) {
      const x = arr[i];

      // If we find a number greater than second, we have the triplet
      if (x > second) {
        return [firstForSecond, second, x];
      }
      // If x is between first and second, update second (and remember the first that goes with it)
      else if (x > first && x < second) {
        second = x;
        firstForSecond = first;
      }
      // If x is smaller than current first, update first (potential better first for future)
      else if (x < first) {
        first = x;
      }
    }

    return []; // no triplet found
  }
}
