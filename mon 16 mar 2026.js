class Solution {
  countAllPaths(root, k) {
    let result = 0;
    // map stores frequency of prefix sums along the current path
    const prefixSumMap = new Map();
    // base case: empty path (sum 0) appears once
    prefixSumMap.set(0, 1);

    const dfs = (node, currentSum) => {
      if (!node) return;

      // include current node in the running sum
      currentSum += node.data;

      // number of paths ending at this node that sum to k
      const target = currentSum - k;
      if (prefixSumMap.has(target)) {
        result += prefixSumMap.get(target);
      }

      // add current sum to map before going deeper
      prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);

      // recurse left and right
      dfs(node.left, currentSum);
      dfs(node.right, currentSum);

      // backtrack: remove current sum from map
      const count = prefixSumMap.get(currentSum) - 1;
      if (count === 0) {
        prefixSumMap.delete(currentSum);
      } else {
        prefixSumMap.set(currentSum, count);
      }
    };

    dfs(root, 0);
    return result;
  }
}
