class Solution {
  binarySearchable(arr) {
    let count = 0;

    const dfs = (l, r, low, high) => {
      if (l > r) return;
      const mid = Math.floor((l + r) / 2);

      if (arr[mid] > low && arr[mid] < high) {
        count++;
      }

      // left subtree: mid is a right ancestor -> tighten upper bound
      dfs(l, mid - 1, low, Math.min(high, arr[mid]));
      // right subtree: mid is a left ancestor -> tighten lower bound
      dfs(mid + 1, r, Math.max(low, arr[mid]), high);
    };

    dfs(0, arr.length - 1, -Infinity, Infinity);
    return count;
  }
}
