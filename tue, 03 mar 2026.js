class Solution {
  totalElements(arr) {
    let left = 0;
    const countMap = new Map();
    let maxLen = 0;

    for (let right = 0; right < arr.length; right++) {
      // Add current element to the window
      countMap.set(arr[right], (countMap.get(arr[right]) || 0) + 1);

      // Shrink window if more than two distinct elements
      while (countMap.size > 2) {
        const leftVal = arr[left];
        countMap.set(leftVal, countMap.get(leftVal) - 1);
        if (countMap.get(leftVal) === 0) {
          countMap.delete(leftVal);
        }
        left++;
      }

      // Update maximum length
      maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
  }
}
