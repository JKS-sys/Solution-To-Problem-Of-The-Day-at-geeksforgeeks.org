class Solution {
  minToggle(arr) {
    const n = arr.length;
    // prefixOnes[i] = number of 1s in arr[0..i-1]
    const prefixOnes = new Array(n + 1);
    prefixOnes[0] = 0;
    for (let i = 0; i < n; i++) {
      prefixOnes[i + 1] = prefixOnes[i] + arr[i];
    }

    // suffixZeros[i] = number of 0s in arr[i..n-1]
    const suffixZeros = new Array(n + 1);
    suffixZeros[n] = 0;
    for (let i = n - 1; i >= 0; i--) {
      suffixZeros[i] = suffixZeros[i + 1] + (arr[i] === 0 ? 1 : 0);
    }

    let minToggles = Infinity;
    for (let i = 0; i <= n; i++) {
      const toggles = prefixOnes[i] + suffixZeros[i];
      if (toggles < minToggles) {
        minToggles = toggles;
      }
    }

    return minToggles;
  }
}
