// https://www.geeksforgeeks.org/problems/maximize-number-of-1s0905/1

class Solution {
  maxOnes(arr, k) {
    let left = 0;
    let maxLength = 0;
    let zeroCount = 0;

    for (let right = 0; right < arr.length; right++) {
      // If current element is 0, increment zero count
      if (arr[right] === 0) {
        zeroCount++;
      }

      // If zero count exceeds k, shrink window from left
      while (zeroCount > k) {
        if (arr[left] === 0) {
          zeroCount--;
        }
        left++;
      }

      // Update maximum length
      maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
  }
}
