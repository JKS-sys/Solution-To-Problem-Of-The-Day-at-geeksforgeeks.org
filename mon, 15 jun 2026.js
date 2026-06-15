class Solution {
  minimumCost(cost, w) {
    const n = cost.length;
    // dp[j] = minimum cost to get exactly j kg of oranges
    const INF = Infinity;
    const dp = new Array(w + 1).fill(INF);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
      const weight = i; // packet size = i kg
      const price = cost[i - 1]; // cost of this packet
      if (price === -1) continue; // not available

      for (let j = weight; j <= w; j++) {
        if (dp[j - weight] !== INF) {
          dp[j] = Math.min(dp[j], dp[j - weight] + price);
        }
      }
    }

    return dp[w] === INF ? -1 : dp[w];
  }
}
