class Solution {
  pushZerosToEnd(arr) {
    let j = 0; // position to place next non-zero
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        // swap arr[i] with arr[j] if they are different
        if (i !== j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        j++;
      }
    }
  }
}
