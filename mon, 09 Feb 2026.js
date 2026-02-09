// https://www.geeksforgeeks.org/problems/rotation4723/1

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
  findKRotation(arr) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;

    // If array is not rotated at all
    if (arr[0] < arr[n - 1]) {
      return 0;
    }

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let next = (mid + 1) % n;
      let prev = (mid + n - 1) % n;

      // Check if mid is the minimum element
      // Minimum element is smaller than both its neighbors
      if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
        return mid;
      }

      // Decide which half to search
      if (arr[mid] <= arr[high]) {
        // Right half is sorted, so minimum is in left half
        high = mid - 1;
      } else if (arr[mid] >= arr[low]) {
        // Left half is sorted, so minimum is in right half
        low = mid + 1;
      }
    }

    return 0;
  }
}
