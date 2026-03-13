class Solution {
  /**
   * @param {number[]} arr - binary array
   * @param {number} k - length of subarray to flip
   * @returns {number} minimum operations or -1
   */
  kBitFlips(arr, k) {
    const n = arr.length;
    let flips = 0; // total operations performed
    const queue = new Array(n); // stores indices where a flip started
    let head = 0,
      tail = 0; // pointers for the queue

    for (let i = 0; i < n; i++) {
      // remove flips that no longer affect the current index
      while (head < tail && queue[head] <= i - k) {
        head++;
      }

      // number of active flips affecting i
      const active = tail - head;
      // current value after applying previous flips
      const currentVal = arr[i] ^ (active & 1); // flip if active is odd

      // need to flip a window starting at i
      if (currentVal === 0) {
        // if the window would go out of bounds, it's impossible
        if (i > n - k) return -1;
        flips++;
        queue[tail++] = i; // record the start of this flip
      }
    }

    return flips;
  }
}
