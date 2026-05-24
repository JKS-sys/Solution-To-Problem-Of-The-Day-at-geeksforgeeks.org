/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
  coin(arr) {
    // The greedy strategy of always picking the larger of the two ends
    // ensures that the smallest element is never removed (unless both ends
    // are equal to the minimum, but then one minimum still remains).
    // Therefore the last remaining coin is always the minimum of the array.
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
}
