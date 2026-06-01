class Solution {
  findMaxProduct(arr) {
    const MOD = 1000000007;
    const n = arr.length;

    // Single element: product is just that element
    if (n === 1) {
      return arr[0] % MOD; // preserves sign, e.g., -1 % MOD = -1
    }

    let negCount = 0;
    let posCount = 0;
    let zeroCount = 0;
    let maxNeg = -Infinity; // largest negative (closest to zero)

    for (let x of arr) {
      if (x > 0) {
        posCount++;
      } else if (x < 0) {
        negCount++;
        if (x > maxNeg) maxNeg = x;
      } else {
        zeroCount++;
      }
    }

    // All elements are zero
    if (posCount === 0 && negCount === 0) {
      return 0;
    }

    // Only one negative, no positives
    if (posCount === 0 && negCount === 1) {
      if (zeroCount > 0) return 0; // we can pick 0 instead of the negative
      return maxNeg % MOD; // must pick the single negative
    }

    // Otherwise we can form a non-negative product
    let product = 1;
    let skipped = false; // to remove exactly one copy of maxNeg when negCount is odd

    for (let x of arr) {
      if (x === 0) continue; // zeros would make the product zero, so skip them
      if (x < 0 && negCount % 2 === 1 && !skipped && x === maxNeg) {
        skipped = true; // skip the largest negative to make total negatives even
        continue;
      }
      product = (product * Math.abs(x)) % MOD;
    }

    return product % MOD;
  }
}
