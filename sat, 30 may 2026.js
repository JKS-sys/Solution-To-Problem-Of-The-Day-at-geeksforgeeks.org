class Solution {
  replaceElements(arr) {
    // code here
    const n = arr.length;
    if (n === 0) return;

    // Keep track of the original previous element
    let prev = arr[0]; // original arr[0]

    for (let i = 0; i < n - 1; i++) {
      // Save current original value for next iteration
      let temp = arr[i];

      if (i === 0) {
        // First element: arr[0] ^ arr[1]
        arr[i] = arr[i] ^ arr[i + 1];
      } else {
        // Middle elements: arr[i-1] ^ arr[i+1]
        arr[i] = prev ^ arr[i + 1];
      }

      // Update prev to be original arr[i] for the next step
      prev = temp;
    }

    // Last element: arr[n-2] ^ arr[n-1] (original values)
    // At this point, prev holds original arr[n-2]
    arr[n - 1] = prev ^ arr[n - 1];
  }
}
