class Solution {
  maxSumSubarray(arr) {
    let noSkip = arr[0]; // max sum ending here with no deletion
    let oneSkip = arr[0]; // max sum ending/active with at most one deletion
    let ans = arr[0];

    for (let i = 1; i < arr.length; i++) {
      const x = arr[i];
      const prevNoSkip = noSkip;
      const prevOneSkip = oneSkip;

      // Either skip current element, or extend previous one-skip subarray
      oneSkip = Math.max(prevNoSkip, prevOneSkip + x);

      // Standard Kadane's: either start new subarray or extend
      noSkip = Math.max(x, prevNoSkip + x);

      ans = Math.max(ans, noSkip, oneSkip);
    }

    return ans;
  }
}
