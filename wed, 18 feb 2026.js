/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
  inversionCount(arr) {
    // Create a temporary array for merging
    const temp = new Array(arr.length);
    // Call the recursive merge sort function that counts inversions
    return this.mergeSortAndCount(arr, temp, 0, arr.length - 1);
  }

  // Recursively splits the array and returns inversion count
  mergeSortAndCount(arr, temp, left, right) {
    let count = 0;
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      count += this.mergeSortAndCount(arr, temp, left, mid);
      count += this.mergeSortAndCount(arr, temp, mid + 1, right);
      count += this.mergeAndCount(arr, temp, left, mid, right);
    }
    return count;
  }

  // Merges two sorted halves and counts cross inversions
  mergeAndCount(arr, temp, left, mid, right) {
    let i = left; // index for left subarray
    let j = mid + 1; // index for right subarray
    let k = left; // index for temporary array
    let invCount = 0;

    while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) {
        temp[k++] = arr[i++];
      } else {
        // arr[i] > arr[j] → all remaining left elements are greater
        invCount += mid - i + 1;
        temp[k++] = arr[j++];
      }
    }

    // Copy remaining elements from left half
    while (i <= mid) {
      temp[k++] = arr[i++];
    }

    // Copy remaining elements from right half
    while (j <= right) {
      temp[k++] = arr[j++];
    }

    // Copy back from temp to original array
    for (let idx = left; idx <= right; idx++) {
      arr[idx] = temp[idx];
    }

    return invCount;
  }
}
