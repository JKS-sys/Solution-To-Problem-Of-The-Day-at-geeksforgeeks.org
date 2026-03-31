class Solution {
  /**
   * @param {number[]} arr - array of stock prices
   * @param {number} k - transaction fee per trade
   * @returns {number} - maximum profit
   */
  maxProfit(arr, k) {
    let cash = 0; // profit when not holding stock
    let hold = -arr[0]; // profit when holding stock (bought at arr[0])

    for (let i = 1; i < arr.length; i++) {
      const price = arr[i];
      // Option 1: sell the stock we hold (if any) -> cash becomes hold + price - fee
      // Option 2: do nothing, keep cash
      const newCash = Math.max(cash, hold + price - k);
      // Option 1: buy a stock using cash -> hold becomes cash - price
      // Option 2: do nothing, keep hold
      const newHold = Math.max(hold, cash - price);
      cash = newCash;
      hold = newHold;
    }
    return cash;
  }
}
