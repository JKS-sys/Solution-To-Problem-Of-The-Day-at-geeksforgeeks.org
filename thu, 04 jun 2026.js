/**
 * @param {string} s
 * @returns {number}
 */
class Solution {
    maxSubstring(s) {
        // Transform 0 -> +1 and 1 -> -1.
        // Problem becomes finding the maximum subarray sum (Kadane's algorithm).
        let maxSoFar = -Infinity;
        let currentMax = 0;
        
        for (const ch of s) {
            const val = ch === '0' ? 1 : -1;
            currentMax = Math.max(val, currentMax + val);
            maxSoFar = Math.max(maxSoFar, currentMax);
        }
        
        // If the maximum sum is negative, it means the string has only '1's.
        return maxSoFar < 0 ? -1 : maxSoFar;
    }
}