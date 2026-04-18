/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
  maxOnes(arr) {
    let totalOnes = 0;
    let maxGain = 0;
    let currentGain = 0;

    for (let val of arr) {
      // Count total ones in original array
      if (val === 1) {
        totalOnes++;
      }

      // Transform: 0 -> +1 gain if flipped, 1 -> -1 gain if flipped
      const gain = val === 0 ? 1 : -1;

      // Kadane's algorithm to find max subarray sum of gains
      currentGain = Math.max(gain, currentGain + gain);
      maxGain = Math.max(maxGain, currentGain);
    }

    // If maxGain is negative, we are better off not flipping (gain = 0)
    // But maxGain will be at least 0 if we include empty subarray,
    // because currentGain resets to 0 if negative? Actually we didn't reset to 0.
    // In Kadane's, we use Math.max(gain, currentGain + gain).
    // If all gains are -1 (all 1s), currentGain starts at -1, then max(-1, -1-1=-2) = -1, so maxGain = -1.
    // But we can choose not to flip, so gain should be 0. So we take max(0, maxGain).
    maxGain = Math.max(0, maxGain);

    return totalOnes + maxGain;
  }
}
