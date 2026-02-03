/**
 * @param {number[]} prices
 * @returns {number}
 */
class Solution {
  maxProfit(prices) {
    // If there are less than 2 prices, no transaction can be made
    if (prices.length < 2) return 0;

    let minPrice = prices[0]; // Track the minimum price seen so far
    let maxProfit = 0; // Track the maximum profit found so far

    for (let i = 1; i < prices.length; i++) {
      // Calculate profit if we sell at current price (bought at minPrice)
      const currentProfit = prices[i] - minPrice;

      // Update maxProfit if current profit is higher
      maxProfit = Math.max(maxProfit, currentProfit);

      // Update minPrice if current price is lower
      minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
  }
}
