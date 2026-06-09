class Solution {
  /**
   * @param {number} k
   * @param {number[]} seats
   * @returns {boolean}
   */
  canSeatAllPeople(k, seats) {
    const n = seats.length;
    let lastOne = -1;
    let maxNew = 0;

    for (let i = 0; i < n; i++) {
      if (seats[i] === 1) {
        if (lastOne !== -1) {
          // Adjacent occupied seats -> invalid
          if (i - lastOne === 1) return false;
          // Gap between two 1's
          const gap = i - lastOne - 1;
          if (gap > 0) {
            maxNew += Math.floor((gap - 1) / 2);
          }
        } else {
          // Left gap (start to first 1)
          maxNew += Math.floor(i / 2);
        }
        lastOne = i;
      }
    }

    if (lastOne === -1) {
      // No occupied seats
      maxNew = Math.ceil(n / 2);
    } else {
      // Right gap (last 1 to end)
      maxNew += Math.floor((n - 1 - lastOne) / 2);
    }

    return maxNew >= k;
  }
}
