// Tue, 12 Aug 2025,

// Shop in Candy Store
// Difficulty: MediumAccuracy: 45.43%Submissions: 85K+Points: 4
// In a candy store, there are different types of candies available and prices[i] represent the price of  ith types of candies. You are now provided with an attractive offer.
// For every candy you buy from the store, you can get up to k other different candies for free. Find the minimum and maximum amount of money needed to buy all the candies.
// Note: In both cases, you must take the maximum number of free candies possible during each purchase.

// Examples :

// Input: prices[] = [3, 2, 1, 4], k = 2
// Output: [3, 7]
// Explanation: As according to the offer if you buy one candy you can take at most two more for free. So in the first case, you buy the candy worth 1 and takes candies worth 3 and 4 for free, also you need to buy candy worth 2. So min cost: 1+2 = 3. In the second case, you can buy the candy worth 4 and takes candies worth 1 and 2 for free, also you need to buy candy worth 3. So max cost: 3+4 = 7.
// Input: prices[] = [3, 2, 1, 4, 5], k = 4
// Output: [1, 5]
// Explanation: For minimimum cost buy the candy with the cost 1 and get all the other candies for free. For maximum cost buy the candy with the cost 5 and get all other candies for free.
// Constraints:
// 1 ≤ prices.size() ≤ 105
// 0 ≤ k ≤ prices.size()
// 1 ≤ prices[i] ≤ 104
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(1)

/**
 * @param {number[]} prices
 * @param {number} k
 * @returns {number[]}
 */
class Solution {
  minMaxCandy(prices, k) {
    prices.sort((a, b) => a - b);
    let n = prices.length;
    let minCost = 0;
    let maxCost = 0;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
      minCost += prices[left];
      left++;
      right -= k;
    }

    left = 0;
    right = n - 1;

    while (left <= right) {
      maxCost += prices[right];
      right--;
      left += k;
    }

    return [minCost, maxCost];
  }
}
