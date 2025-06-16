// Mon, 16 Jun 2025,

// Equalize the Towers
// Difficulty: MediumAccuracy: 42.9%Submissions: 4K+Points: 4
// You are given an array heights[] representing the heights of towers and another array cost[] where each element represents the cost of modifying the height of respective tower.

// The goal is to make all towers of same height by either adding or removing blocks from each tower.
// Modifying the height of tower (add or remove) 'i' by 1 unit costs cost[i].
// Return the minimum cost to equalize the heights of all towers.

// Examples:

// Input: heights[] = [1, 2, 3], cost[] = [10, 100, 1000]
// Output: 120
// Explanation: The heights can be equalized by either "Removing one block from 3 and adding one in 1" or "Adding two blocks in 1 and adding one in 2". Since the cost of operation in tower 3 is 1000, the first process would yield 1010 while the second one yields 120.
// Input: heights[] = [7, 1, 5], cost[] = [1, 1, 1]
// Output: 6
// Explanation: The minimum cost to equalize the towers is 6, achieved by setting all towers to height 5.
// Constraints:
// 1 ≤ heights.size() = cost.size() ≤ 105
// 1 ≤ heights[i] ≤ 104
// 1 ≤ cost[i] ≤ 103

/**
 * @param {number[]} heights
 * @param {number} cost
 * @returns {number}
 */
class Solution {
  minCost(heights, cost) {
    const n = heights.length;
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push({ h: heights[i], c: cost[i] });
    }
    arr.sort((a, b) => a.h - b.h);

    let prefixCost = new Array(n + 1).fill(0);
    let prefixProd = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      prefixCost[i + 1] = prefixCost[i] + arr[i].c;
      prefixProd[i + 1] = prefixProd[i] + arr[i].h * arr[i].c;
    }

    let suffixCost = new Array(n + 1).fill(0);
    let suffixProd = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
      suffixCost[i] = suffixCost[i + 1] + arr[i].c;
      suffixProd[i] = suffixProd[i + 1] + arr[i].h * arr[i].c;
    }

    let minCost = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < n; j++) {
      let left = arr[j].h * prefixCost[j] - prefixProd[j];
      let right = suffixProd[j + 1] - arr[j].h * suffixCost[j + 1];
      let total = left + right;
      if (total < minCost) {
        minCost = total;
      }
    }

    return minCost;
  }
}
