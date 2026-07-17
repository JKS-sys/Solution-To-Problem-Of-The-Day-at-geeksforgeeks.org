class Solution {
  maxDiffSubArrays(arr) {
    const n = arr.length;

    // Arrays to store the max and min subarray sums from left
    const leftMax = new Array(n);
    const leftMin = new Array(n);

    // Kadane's algorithm from left
    let maxEnding = arr[0];
    let minEnding = arr[0];
    leftMax[0] = arr[0];
    leftMin[0] = arr[0];

    for (let i = 1; i < n; i++) {
      maxEnding = Math.max(arr[i], maxEnding + arr[i]);
      leftMax[i] = Math.max(leftMax[i - 1], maxEnding);

      minEnding = Math.min(arr[i], minEnding + arr[i]);
      leftMin[i] = Math.min(leftMin[i - 1], minEnding);
    }

    // Arrays to store the max and min subarray sums from right
    const rightMax = new Array(n);
    const rightMin = new Array(n);

    maxEnding = arr[n - 1];
    minEnding = arr[n - 1];
    rightMax[n - 1] = arr[n - 1];
    rightMin[n - 1] = arr[n - 1];

    for (let i = n - 2; i >= 0; i--) {
      maxEnding = Math.max(arr[i], maxEnding + arr[i]);
      rightMax[i] = Math.max(rightMax[i + 1], maxEnding);

      minEnding = Math.min(arr[i], minEnding + arr[i]);
      rightMin[i] = Math.min(rightMin[i + 1], minEnding);
    }

    // Find the maximum absolute difference
    let ans = 0;
    for (let i = 0; i < n - 1; i++) {
      const cand1 = Math.abs(leftMax[i] - rightMin[i + 1]);
      const cand2 = Math.abs(rightMax[i + 1] - leftMin[i]);
      ans = Math.max(ans, cand1, cand2);
    }

    return ans;
  }
}
