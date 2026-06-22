class Solution {
  maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
      // Number of bars strictly between left and right
      const distance = right - left - 1;
      // Height is limited by the shorter bar
      const area = Math.min(height[left], height[right]) * distance;
      maxArea = Math.max(maxArea, area);

      // Move the pointer pointing to the shorter bar
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }

    return maxArea;
  }
}
