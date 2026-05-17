class Solution {
  makeBeautiful(arr) {
    const stack = [];
    for (let num of arr) {
      // Check if stack is non-empty and signs differ
      // (num >= 0) is true for non-negative (including 0), false for negative
      if (stack.length > 0 && stack[stack.length - 1] >= 0 !== num >= 0) {
        stack.pop(); // remove the pair
      } else {
        stack.push(num);
      }
    }
    return stack;
  }
}
