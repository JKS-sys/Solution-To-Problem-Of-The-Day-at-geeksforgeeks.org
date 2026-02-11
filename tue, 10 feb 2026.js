class Solution {
  kokoEat(arr, k) {
    // Find the maximum pile size to set the upper bound for binary search
    let maxPile = Math.max(...arr);

    let low = 1,
      high = maxPile;
    let answer = maxPile; // worst-case: eat entire max pile per hour

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      // Calculate total hours needed with speed = mid
      let hours = 0;
      for (let pile of arr) {
        hours += Math.ceil(pile / mid);
        // Early exit if already exceed k (optional optimization)
        if (hours > k) break;
      }

      if (hours <= k) {
        // feasible, try smaller speed
        answer = mid;
        high = mid - 1;
      } else {
        // not feasible, need larger speed
        low = mid + 1;
      }
    }

    return answer;
  }
}
