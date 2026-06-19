class Solution {
  optimalArray(arr) {
    const n = arr.length;
    const ans = new Array(n);
    ans[0] = 0;

    let cost = 0;
    let medianIdx = 0; // index of the current median

    for (let i = 1; i < n; i++) {
      // When i is odd, prefix length (i+1) is even -> median index stays the same.
      // When i is even, prefix length becomes odd -> median index moves right by 1.
      if (i % 2 === 0) {
        medianIdx++;
      }
      cost += Math.abs(arr[i] - arr[medianIdx]);
      ans[i] = cost;
    }

    return ans;
  }
}
