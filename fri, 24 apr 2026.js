class Solution {
  visibleBuildings(arr) {
    let max = 0;
    let count = 0;
    for (let h of arr) {
      if (h >= max) {
        count++;
        max = h;
      }
    }
    return count;
  }
}
