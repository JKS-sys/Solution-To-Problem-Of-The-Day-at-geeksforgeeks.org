class Solution {
  countKdivPairs(arr, k) {
    // freq[i] stores the count of numbers seen so far with remainder i modulo k
    const freq = new Array(k).fill(0);
    let pairs = 0;

    for (let num of arr) {
      const rem = num % k;
      // The complement remainder that would make (rem + complement) % k == 0
      const complement = (k - rem) % k;
      pairs += freq[complement];
      freq[rem]++;
    }

    return pairs;
  }
}
