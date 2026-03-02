class Solution {
  maxWater(arr) {
    let left = 0;
    let right = arr.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;

    while (left < right) {
      if (arr[left] < arr[right]) {
        // water on left side is limited by leftMax
        if (arr[left] >= leftMax) {
          leftMax = arr[left];
        } else {
          water += leftMax - arr[left];
        }
        left++;
      } else {
        // water on right side is limited by rightMax
        if (arr[right] >= rightMax) {
          rightMax = arr[right];
        } else {
          water += rightMax - arr[right];
        }
        right--;
      }
    }
    return water;
  }
}
