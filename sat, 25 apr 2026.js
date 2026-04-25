class Solution {
  /**
   * @param {number[]} arr
   * @returns {number[]}
   */
  reducePairs(arr) {
    const stack = [];

    for (let x of arr) {
      let collide = true; // whether x should be pushed after handling collisions

      // While there is a possible collision with the top of the stack
      while (
        stack.length &&
        ((stack[stack.length - 1] > 0 && x < 0) ||
          (stack[stack.length - 1] < 0 && x > 0))
      ) {
        const top = stack[stack.length - 1];
        const absTop = Math.abs(top);
        const absX = Math.abs(x);

        if (absTop > absX) {
          // Top wins, x is destroyed
          collide = false;
          break;
        } else if (absTop < absX) {
          // x wins, destroy top and continue checking with the new top
          stack.pop();
          // keep collide = true, continue while loop with same x
        } else {
          // Equal absolute values → both destroyed
          stack.pop();
          collide = false;
          break;
        }
      }

      if (collide) {
        stack.push(x);
      }
    }

    return stack;
  }
}
