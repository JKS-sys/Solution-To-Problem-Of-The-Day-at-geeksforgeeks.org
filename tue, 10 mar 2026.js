class Solution {
  countSubarrays(arr) {
    const n = arr.length;
    const nextSmaller = new Array(n).fill(n);
    const stack = [];

    // Compute next strictly smaller element to the right
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }
      if (stack.length) {
        nextSmaller[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }

    // Sum up the number of valid subarrays starting at each index
    let total = 0;
    for (let i = 0; i < n; i++) {
      total += nextSmaller[i] - i;
    }
    return total;
  }
}
