class Solution {
  findLargest(arr) {
    // Convert numbers to strings for comparison
    const nums = arr.map(String);

    // Sort using a custom comparator:
    // place a before b if a+b > b+a
    nums.sort((a, b) => {
      const order1 = a + b;
      const order2 = b + a;
      // If order1 > order2, a should come before b => return negative
      // Using localeCompare on reversed strings achieves the same
      return order2.localeCompare(order1);
    });

    // After sorting, if the largest number is "0", the whole result is "0"
    if (nums[0] === "0") return "0";

    // Build the final string
    return nums.join("");
  }
}
