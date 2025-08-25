// Mon, 25 Aug 2025,

// Maximize median after doing k addition operation
// Difficulty: MediumAccuracy: 36.5%Submissions: 1K+Points: 4Average Time: 20m
// Given an array arr[] consisting of positive integers and an integer k. You are allowed to perform at most k operations, where in each operation, you can increment any one element of the array by 1.

// Determine the maximum possible median of the array that can be achieved after performing at most k such operations.

// Examples:

// Input: arr[] = [1, 3, 4, 5], k = 3
// Output: 5
// Explanation: We can add +2 to the second element and +1 to the third element to get the array [1, 5, 5, 5]. After sorting, the array remains [1, 5, 5, 5]. Since the length is even, the median is (5 + 5) / 2 = 5.
// Input: arr[] = [1, 3, 6, 4, 2], k = 10
// Output: 7
// Explanation: After applying operations optimally, we can transform the array to [1, 3, 7, 7, 7] (one possible way). Sorted array becomes [1, 3, 7, 7, 7]. Since the length is odd, the median is the middle element 7.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i], k ≤ 109
// Expected Complexities
// Time Complexity: O(n * log k)
// Auxiliary Space: O(1)

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

function isPossible(arr, target, k) {
  let n = arr.length;
  if (n % 2 === 1) {
    // for odd-sized array, consider elements from
    // middle to end
    for (let i = Math.floor(n / 2); i < n; ++i) {
      if (arr[i] < target) k -= target - arr[i];
    }
  } else {
    // for even-sized array, handle two middle
    // elements separately
    if (arr[n / 2] <= target) {
      k -= target - arr[n / 2];
      k -= target - arr[n / 2 - 1];
    } else {
      k -= 2 * target - (arr[n / 2] + arr[n / 2 - 1]);
    }
    // process remaining elements to the right
    for (let i = n / 2 + 1; i < n; ++i) {
      if (arr[i] < target) k -= target - arr[i];
    }
  }
  return k >= 0;
}
class Solution {
  maximizeMedian(arr, k) {
    arr.sort((a, b) => a - b);
    let n = arr.length;
    // compute initial median floor if even length
    let iniMedian = arr[Math.floor(n / 2)];
    if (n % 2 === 0) {
      iniMedian += arr[n / 2 - 1];
      iniMedian = Math.floor(iniMedian / 2);
    }
    let low = iniMedian,
      high = iniMedian + k;
    let bestMedian = iniMedian;
    // binary search to find maximum
    // achievable median
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (isPossible(arr, mid, k)) {
        bestMedian = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return bestMedian;
  }
}
