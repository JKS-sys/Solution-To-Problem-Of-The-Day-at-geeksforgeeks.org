// Thu, 26 Jun 2025,

// Game with String
// Difficulty: MediumAccuracy: 53.96%Submissions: 65K+Points: 4Average Time: 15m
// Given a string s consisting of lowercase alphabets and an integer k, your task is to find the minimum possible value of the string after removing exactly k characters.

// The value of the string is defined as the sum of the squares of the frequencies of each distinct character present in the string.

// Examples :

// Input: s = "abbccc", k = 2
// Output: 6
// Explaination: We remove two 'c' to get the value as 12 + 22 + 12 = 6 or We remove one 'b' and one 'c' to get the value 12 + 12 + 22 = 6.
// Input: s = "aaab", k = 2
// Output: 2
// Explaination: We remove two 'a'. Now we get the value as 12 + 12 = 2.
// Constraints:
// 0 ≤ k ≤ s.length() ≤ 105

/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
class Solution {
  minValue(s, k) {
    const freq = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      const charCode = s.charCodeAt(i) - 97;
      freq[charCode]++;
    }

    const heap = [];
    for (let count of freq) {
      if (count > 0) {
        heap.push(count);
      }
    }
    let heap_size = heap.length;

    if (heap_size === 0) return 0;

    for (let i = Math.floor(heap_size / 2) - 1; i >= 0; i--) {
      this.heapify(heap, heap_size, i);
    }

    for (let i = 0; i < k; i++) {
      if (heap_size === 0) break;

      heap[0]--;
      if (heap[0] === 0) {
        [heap[0], heap[heap_size - 1]] = [heap[heap_size - 1], heap[0]];
        heap_size--;
        if (heap_size > 0) {
          this.heapify(heap, heap_size, 0);
        }
      } else {
        this.heapify(heap, heap_size, 0);
      }
    }

    let result = 0;
    for (let i = 0; i < heap_size; i++) {
      result += heap[i] * heap[i];
    }
    return result;
  }

  heapify(arr, n, i) {
    let current = i;
    while (true) {
      const left = 2 * current + 1;
      const right = 2 * current + 2;
      let largest = current;

      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
      if (largest === current) {
        break;
      }
      [arr[current], arr[largest]] = [arr[largest], arr[current]];
      current = largest;
    }
  }
}
