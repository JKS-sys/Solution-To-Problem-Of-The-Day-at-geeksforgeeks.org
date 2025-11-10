// Mon, 10 Nov 2025,

// Stock Buy and Sell with Cooldown
// Difficulty: Medium Accuracy: 52.86% Submissions: 9K+ Points: 4 Average Time: 20m
// Given an array arr[], where the ith element of arr[] represents the price of a stock on the ith day (all prices are non-negative integers). Find the maximum profit you can make by buying and selling stocks such that after selling a stock, you cannot buy again on the next day (i.e., there is a one-day cooldown).

// Examples:

// Input: arr[] = [0, 2, 1, 2, 3]
// Output: 3
// Explanation: You first buy on day 1, sell on day 2 then cool down, then buy on day 4, and sell on day 5. The total profit earned is (2-0) + (3-2) = 3, which is the maximum achievable profit.
// Input:  arr[] = [3, 1, 6, 1, 2, 4]
// Output: 7
// Explanation: You first buy on day 2 and sell on day 3 then cool down, then again you buy on day 5 and then sell on day 6. Clearly, the total profit earned is (6-1) + (4-2) = 7, which is the maximum achievable profit.
// Constraint:
// 1 ≤ arr.size() ≤ 10^5
// 1 ≤ arr[i] ≤ 10^4
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  maxProfit(arr) {
    if (arr.length <= 1) return 0;

    let hold = -arr[0];
    let sold = 0;
    let rest = 0;

    for (let i = 1; i < arr.length; i++) {
      const prevHold = hold;
      const prevSold = sold;
      const prevRest = rest;

      hold = Math.max(prevHold, prevRest - arr[i]);

      sold = prevHold + arr[i];

      rest = Math.max(prevRest, prevSold);
    }

    return Math.max(sold, rest);
  }
}
