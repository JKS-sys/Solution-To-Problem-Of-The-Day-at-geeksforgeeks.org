class Solution {
  derangeCount(n) {
    if (n === 1) return 0;
    let prev2 = 1; // !0
    let prev1 = 0; // !1
    for (let i = 2; i <= n; i++) {
      let curr = (i - 1) * (prev1 + prev2);
      prev2 = prev1;
      prev1 = curr;
    }
    return prev1;
  }
}
