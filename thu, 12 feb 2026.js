class Solution {
  maxMinHeight(arr, k, w) {
    const n = arr.length;

    // binary search bounds
    let lo = Math.min(...arr); // minimum possible answer
    let hi = Math.max(...arr) + k; // maximum possible answer

    // feasibility check for a target minimum height H
    const canAchieve = (H) => {
      // subtract array: at index i, we remove 'sub[i]' from cur
      const sub = new Array(n + 1).fill(0);
      let cur = 0; // current active increments
      let totalOps = 0; // total days used so far

      for (let i = 0; i < n; i++) {
        // remove increments that expire at this position
        cur -= sub[i];

        const curHeight = arr[i] + cur;
        if (curHeight < H) {
          const need = H - curHeight;
          totalOps += need;
          if (totalOps > k) return false;

          // start new windows as far right as possible while covering i
          const start = Math.min(i, n - w);
          cur += need;

          const expireAt = start + w;
          if (expireAt < n) {
            sub[expireAt] += need;
          }
        }
      }
      return true;
    };

    // binary search for the highest H that is feasible
    while (lo < hi) {
      // use upper‑mid to avoid infinite loop
      const mid = Math.floor((lo + hi + 1) / 2);
      if (canAchieve(mid)) {
        lo = mid;
      } else {
        hi = mid - 1;
      }
    }
    return lo;
  }
}
