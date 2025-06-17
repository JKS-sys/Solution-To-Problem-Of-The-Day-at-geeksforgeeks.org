// Tue, 17 Jun 2025

// Coin Piles
// Difficulty: MediumAccuracy: 20.51%Submissions: 24K+Points: 4Average Time: 20m
// You are given an array arr[] of integers, where each element represents the number of coins in a pile. You are also given an integer k.
// Your task is to remove the minimum number of coins such that the absolute difference between the number of coins in any two remaining piles is at most k.

// Note: You can also remove a pile by removing all the coins of that pile.

// Examples:

// Input: arr[] = [2, 2, 2, 2], k = 0
// Output: 0
// Explanation: For any two piles the difference in the number of coins is <= 0. So no need to remove any coin.
// Input: arr[] = [1, 5, 1, 2, 5, 1], k = 3
// Output : 2
// Explanation: If we remove one coin each from both the piles containing 5 coins, then for any two piles the absolute difference in the number of coins is <= 3.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 104
// 0 ≤ k ≤ 104

class Solution {
  minimumCoins(arr, k) {
    if (arr.length === 0) return 0;
    let sorted = arr.slice().sort((a, b) => a - b);
    let n = arr.length;
    let prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      prefix[i + 1] = prefix[i] + sorted[i];
    }
    let total_sum = prefix[n];
    let max_val = sorted[n - 1];

    let candidate_x = new Set();
    candidate_x.add(0);
    candidate_x.add(max_val);
    for (let a of arr) {
      candidate_x.add(a);
      let candidate = a - k;
      if (candidate >= 0) {
        candidate_x.add(candidate);
      }
    }
    let candidate_arr = Array.from(candidate_x);
    candidate_arr.sort((a, b) => a - b);

    const lower_bound = (arr, x) => {
      let low = 0;
      let high = arr.length;
      while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < x) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return low;
    };

    const upper_bound = (arr, x) => {
      let low = 0;
      let high = arr.length;
      while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] <= x) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return low;
    };

    let min_cost = total_sum;

    for (let x of candidate_arr) {
      let i = lower_bound(sorted, x);
      let j = upper_bound(sorted, x + k);

      let count1 = i;
      let sum1 = prefix[i];
      let count3 = n - j;
      let sum3 = prefix[n] - prefix[j];
      let cost = sum1 + (sum3 - (x + k) * count3);

      if (cost < min_cost) {
        min_cost = cost;
      }
    }

    return min_cost;
  }
}
