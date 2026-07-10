class Solution {
  getCount(n) {
    // count all odd divisors of n
    let count = 1;
    let temp = n;

    // remove all factors of 2
    while (temp % 2 === 0) {
      temp = Math.floor(temp / 2);
    }

    // count odd prime factors
    for (let i = 3; i * i <= temp; i += 2) {
      if (temp % i === 0) {
        let exp = 0;
        while (temp % i === 0) {
          temp = Math.floor(temp / i);
          exp++;
        }
        count *= exp + 1;
      }
    }

    // if remaining temp is an odd prime > 1
    if (temp > 1) {
      count *= 2;
    }

    // subtract 1 to exclude the single-term representation (n = n)
    return count - 1;
  }
}
