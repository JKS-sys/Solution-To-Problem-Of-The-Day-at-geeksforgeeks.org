// https://www.geeksforgeeks.org/problems/max-sum-in-the-configuration/1

class Solution {
  maxSum(arr) {
    const n = arr.length;

    // Calculate initial sum S0 and total sum
    let totalSum = 0;
    let currentSum = 0;

    for (let i = 0; i < n; i++) {
      totalSum += arr[i];
      currentSum += i * arr[i];
    }

    // The initial sum is our current maximum
    let maxSum = currentSum;

    // Try all rotations
    for (let i = 1; i < n; i++) {
      // Calculate next sum using recurrence relation
      // The element that moves from last to first is arr[n-i]
      currentSum = currentSum + totalSum - n * arr[n - i];

      // Update maximum
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }

    return maxSum;
  }
}
