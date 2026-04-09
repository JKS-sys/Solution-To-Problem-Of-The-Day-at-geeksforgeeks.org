class Solution {
  intersection(a, b) {
    const result = [];
    let i = 0,
      j = 0;
    const n = a.length,
      m = b.length;

    while (i < n && j < m) {
      if (a[i] === b[j]) {
        // Add to result only if it's not a duplicate of the last added element
        if (result.length === 0 || result[result.length - 1] !== a[i]) {
          result.push(a[i]);
        }
        i++;
        j++;
      } else if (a[i] < b[j]) {
        i++;
      } else {
        j++;
      }
    }
    return result;
  }
}
