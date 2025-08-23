// Sat, 23 Aug 2025,

// Allocate Minimum Pages
// Difficulty: MediumAccuracy: 35.51%Submissions: 317K+Points: 4Average Time: 35m
// Given an array arr[] of integers, where each element arr[i] represents the number of pages in the i-th book. You also have an integer k representing the number of students. The task is to allocate books to each student such that:

// Each student receives atleast one book.
// Each student is assigned a contiguous sequence of books.
// No book is assigned to more than one student.
// The objective is to minimize the maximum number of pages assigned to any student. In other words, out of all possible allocations, find the arrangement where the student who receives the most pages still has the smallest possible maximum.

// Note: If it is not possible to allocate books to all students, return -1.

// Examples:

// Input: arr[] = [12, 34, 67, 90], k = 2
// Output: 113
// Explanation: Allocation can be done in following ways:
// => [12] and [34, 67, 90] Maximum Pages = 191
// => [12, 34] and [67, 90] Maximum Pages = 157
// => [12, 34, 67] and [90] Maximum Pages = 113.
// The third combination has the minimum pages assigned to a student which is 113.
// Input: arr[] = [15, 17, 20], k = 5
// Output: -1
// Explanation: Since there are more students than total books, it's impossible to allocate a book to each student.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ arr[i], k ≤ 103
// Expected Complexities
// Time Complexity: O( n × log(sum(arr)))
// Auxiliary Space: O(1)

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
  findPages(arr, k) {
    const n = arr.length;
    if (k > n) return -1;

    let low = Math.max(...arr);
    let high = arr.reduce((acc, val) => acc + val, 0);
    let result = high;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (this.isFeasible(arr, k, mid)) {
        result = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return result;
  }

  isFeasible(arr, k, mid) {
    let students = 1;
    let currentSum = 0;

    for (let pages of arr) {
      if (currentSum + pages > mid) {
        students++;
        currentSum = pages;
        if (students > k) return false;
      } else {
        currentSum += pages;
      }
    }
    return true;
  }
}
