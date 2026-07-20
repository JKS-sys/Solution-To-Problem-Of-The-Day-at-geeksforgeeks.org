class Solution {
  processQueries(arr, queries) {
    const n = arr.length;
    const q = queries.length;
    const INF = Number.MAX_SAFE_INTEGER;

    // nextB[i] = smallest j >= i with arr[j] > arr[j+1], or INF if none
    const nextB = new Array(n).fill(INF);
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > arr[i + 1]) {
        nextB[i] = i;
      } else {
        nextB[i] = nextB[i + 1];
      }
    }

    // prevA[i] = largest j <= i with arr[j] < arr[j+1], or -1 if none
    const prevA = new Array(n).fill(-1);
    if (n > 1) {
      prevA[0] = arr[0] < arr[1] ? 0 : -1;
      for (let i = 1; i < n - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          prevA[i] = i;
        } else {
          prevA[i] = prevA[i - 1];
        }
      }
      prevA[n - 1] = prevA[n - 2];
    }

    const res = [];
    for (const [l, r] of queries) {
      if (l === r) {
        res.push(true);
      } else {
        const firstB = nextB[l];
        const lastA = prevA[r - 1];
        // Mountain is invalid iff there is a decrease followed later by an increase
        if (firstB <= r - 1 && lastA >= l && firstB <= lastA) {
          res.push(false);
        } else {
          res.push(true);
        }
      }
    }
    return res;
  }
}
