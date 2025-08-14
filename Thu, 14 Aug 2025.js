// Thu, 14 Aug 2025,

// Count Reverse Pairs
// Difficulty: HardAccuracy: 49.01%Submissions: 10K+Points: 8
// You are given an array arr[ ] of positive integers, find the count of reverse pairs. A pair of indices (i, j) is said to be a reverse pair if both the following conditions are met:
//    1.  0 ≤ i < j < arr.size()
//    2.  arr[i] > 2 * arr[j]

// Examples:

// Input: arr[] = [3, 2, 4, 5, 1, 20]
// Output: 3
// Explanation:
// The Reverse pairs are
// (0, 4), arr[0] = 3, arr[4] = 1, 3 > 2*1
// (2, 4), arr[2] = 4, arr[4] = 1, 4 > 2*1
// (3, 4), arr[3] = 5, arr[4] = 1, 5 > 2*1
// Input: arr[] = [5, 4, 3, 2, 2]
// Output: 2
// Explanation:
// The Reverse pairs are
// (0, 3), arr[0] = 5, arr[3] = 2, 5 > 2*2
// (0, 4), arr[0] = 5, arr[4] = 2, 5 > 2*2
// Constraints:
// 1 ≤ arr.size() ≤ 5*104
// 1 ≤ arr[i] ≤ 109
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(n)

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
  countRevPairs(arr) {
    return this.mergeSort(arr, 0, arr.length - 1);
  }

  mergeSort(arr, l, r) {
    if (l >= r) return 0;
    let mid = Math.floor((l + r) / 2);
    let count = this.mergeSort(arr, l, mid) + this.mergeSort(arr, mid + 1, r);
    let j = mid + 1;
    for (let i = l; i <= mid; i++) {
      while (j <= r && arr[i] > 2 * arr[j]) {
        j++;
      }
      count += j - (mid + 1);
    }
    this.merge(arr, l, mid, r);
    return count;
  }

  merge(arr, l, mid, r) {
    let leftArr = arr.slice(l, mid + 1);
    let rightArr = arr.slice(mid + 1, r + 1);
    let i = 0,
      j = 0,
      k = l;
    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
    }
    while (i < leftArr.length) {
      arr[k] = leftArr[i];
      i++;
      k++;
    }
    while (j < rightArr.length) {
      arr[k] = rightArr[j];
      j++;
      k++;
    }
  }
}
