class Solution {
  // Helper: GCD for BigInt
  gcd(a, b) {
    while (b !== 0n) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  // Helper: LCM for BigInt
  lcm(a, b) {
    if (a === 0n || b === 0n) return 0n;
    return (a / this.gcd(a, b)) * b;
  }

  // Build segment tree
  build(tree, arr, node, start, end) {
    if (start === end) {
      tree[node] = BigInt(arr[start]);
      return;
    }
    const mid = (start + end) >> 1;
    this.build(tree, arr, node * 2 + 1, start, mid);
    this.build(tree, arr, node * 2 + 2, mid + 1, end);
    tree[node] = this.lcm(tree[node * 2 + 1], tree[node * 2 + 2]);
  }

  // Point update
  update(tree, node, start, end, idx, val) {
    if (start === end) {
      tree[node] = val;
      return;
    }
    const mid = (start + end) >> 1;
    if (idx <= mid) this.update(tree, node * 2 + 1, start, mid, idx, val);
    else this.update(tree, node * 2 + 2, mid + 1, end, idx, val);
    tree[node] = this.lcm(tree[node * 2 + 1], tree[node * 2 + 2]);
  }

  // Range LCM query
  query(tree, node, start, end, L, R) {
    if (R < start || L > end) return 1n; // identity for LCM
    if (L <= start && end <= R) return tree[node];
    const mid = (start + end) >> 1;
    const left = this.query(tree, node * 2 + 1, start, mid, L, R);
    const right = this.query(tree, node * 2 + 2, mid + 1, end, L, R);
    return this.lcm(left, right);
  }

  /**
   * @param {number[]} arr
   * @param {number[][]} queries
   * @return {number[]}
   */
  RangeLCMQuery(arr, queries) {
    const n = arr.length;
    const tree = new Array(4 * n);
    this.build(tree, arr, 0, 0, n - 1);

    const res = [];
    for (const q of queries) {
      if (q[0] === 1) {
        // Update type: [1, index, value]
        this.update(tree, 0, 0, n - 1, q[1], BigInt(q[2]));
      } else {
        // Query type: [2, L, R]
        const ans = this.query(tree, 0, 0, n - 1, q[1], q[2]);
        res.push(Number(ans)); // convert to Number as per expected return type
      }
    }
    return res;
  }
}
