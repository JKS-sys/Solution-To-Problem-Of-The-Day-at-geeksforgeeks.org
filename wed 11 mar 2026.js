class Solution {
  sumSubMins(arr) {
    const n = arr.length;
    const prev = new Array(n).fill(-1);
    const next = new Array(n).fill(n);
    const stack = [];

    // Previous smaller (strictly less)
    for (let i = 0; i < n; i++) {
      while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }
      if (stack.length) prev[i] = stack[stack.length - 1];
      stack.push(i);
    }

    // Next smaller or equal (to handle duplicates)
    stack.length = 0;
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
        stack.pop();
      }
      if (stack.length) next[i] = stack[stack.length - 1];
      stack.push(i);
    }

    let total = 0;
    for (let i = 0; i < n; i++) {
      const leftCount = i - prev[i];
      const rightCount = next[i] - i;
      total += arr[i] * leftCount * rightCount;
    }
    return total;
  }
}
