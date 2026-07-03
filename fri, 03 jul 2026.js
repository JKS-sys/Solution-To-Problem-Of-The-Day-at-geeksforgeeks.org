class Solution {
  waysToIncreaseLCSBy1(s1, s2) {
    const n1 = s1.length,
      n2 = s2.length;

    // pre[i][j] = LCS of s1[0..i-1] and s2[0..j-1]
    const pre = Array.from({ length: n1 + 1 }, () => new Array(n2 + 1).fill(0));
    for (let i = 1; i <= n1; i++) {
      for (let j = 1; j <= n2; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          pre[i][j] = pre[i - 1][j - 1] + 1;
        } else {
          pre[i][j] = Math.max(pre[i - 1][j], pre[i][j - 1]);
        }
      }
    }

    // suf[i][j] = LCS of s1[i..n1-1] and s2[j..n2-1]
    const suf = Array.from({ length: n1 + 1 }, () => new Array(n2 + 1).fill(0));
    for (let i = n1 - 1; i >= 0; i--) {
      for (let j = n2 - 1; j >= 0; j--) {
        if (s1[i] === s2[j]) {
          suf[i][j] = suf[i + 1][j + 1] + 1;
        } else {
          suf[i][j] = Math.max(suf[i + 1][j], suf[i][j + 1]);
        }
      }
    }

    const L = pre[n1][n2];
    let count = 0;

    // try inserting at every position i (0..n1) every lowercase letter
    for (let i = 0; i <= n1; i++) {
      for (let cCode = 97; cCode <= 122; cCode++) {
        const c = String.fromCharCode(cCode);
        let maxVal = L;
        for (let j = 0; j < n2; j++) {
          if (s2[j] === c) {
            const val = pre[i][j] + 1 + suf[i][j + 1];
            if (val > maxVal) maxVal = val;
          }
        }
        if (maxVal === L + 1) {
          count++;
        }
      }
    }
    return count;
  }
}
