class Solution {
  minCost(heights, cost) {
    const n = heights.length;
    let totalWeight = 0;
    let minH = Infinity,
      maxH = -Infinity;

    // find total weight, min and max height
    for (let i = 0; i < n; i++) {
      totalWeight += cost[i];
      minH = Math.min(minH, heights[i]);
      maxH = Math.max(maxH, heights[i]);
    }

    const target = totalWeight / 2; // threshold for weighted median

    // binary search for smallest H such that sum_{height[i] <= H} cost[i] >= target
    let lo = minH,
      hi = maxH;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      let leftWeight = 0;
      for (let i = 0; i < n; i++) {
        if (heights[i] <= mid) leftWeight += cost[i];
      }
      if (leftWeight >= target) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    const medianH = lo; // a weighted median (not necessarily unique)

    // helper to compute total cost for a specific target height H
    const computeCost = (H) => {
      let totalCost = 0;
      for (let i = 0; i < n; i++) {
        totalCost += cost[i] * Math.abs(heights[i] - H);
      }
      return totalCost;
    };

    // evaluate at median and its neighbors to guarantee minimum integer height
    let ans = computeCost(medianH);
    if (medianH - 1 >= minH) ans = Math.min(ans, computeCost(medianH - 1));
    if (medianH + 1 <= maxH) ans = Math.min(ans, computeCost(medianH + 1));

    return ans;
  }
}
