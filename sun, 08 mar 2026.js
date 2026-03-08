class Solution {
  pythagoreanTriplet(arr) {
    const maxVal = Math.max(...arr);
    const freq = new Array(maxVal + 1).fill(0);
    for (const num of arr) freq[num]++;

    for (let i = 1; i <= maxVal; i++) {
      if (freq[i] === 0) continue;
      for (let j = i; j <= maxVal; j++) {
        if (freq[j] === 0) continue;
        const c2 = i * i + j * j;
        const c = Math.sqrt(c2);
        const cInt = Math.floor(c);
        if (cInt * cInt === c2 && cInt <= maxVal && freq[cInt] > 0) {
          // Check if we have enough occurrences for each value
          if (i === j && i === cInt) {
            if (freq[i] >= 3) return true;
          } else if (i === j) {
            if (freq[i] >= 2) return true;
          } else if (i === cInt) {
            if (freq[i] >= 2) return true;
          } else if (j === cInt) {
            if (freq[j] >= 2) return true;
          } else {
            return true; // all distinct, each at least once
          }
        }
      }
    }
    return false;
  }
}
