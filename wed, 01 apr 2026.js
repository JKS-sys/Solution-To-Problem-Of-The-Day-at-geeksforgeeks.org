class Solution {
  countStrings(n) {
    // Base cases
    if (n === 1) return 2;
    if (n === 2) return 3;

    // DP arrays: a[i] = count ending with 0, b[i] = count ending with 1
    let a = new Array(n + 1);
    let b = new Array(n + 1);
    a[1] = 1; // "0"
    b[1] = 1; // "1"

    for (let i = 2; i <= n; i++) {
      a[i] = a[i - 1] + b[i - 1]; // append 0 to any string of length i-1
      b[i] = a[i - 1]; // append 1 only to strings ending with 0
    }

    return a[n] + b[n];
  }
}
