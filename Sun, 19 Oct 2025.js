// Sun, 19 Oct 2025,

// K closest Values
// Difficulty: MediumAccuracy: 84.91%Submissions: 698+Points: 4
// Given the root of a Binary Search Tree, a target value, and an integer k. Your task is to find the k values in the BST that are closest to the target.

// The closest value is taken by choosing the one that gives minimum absolute difference from target.

// Note: In case two values have same absolute difference from target, choose the smaller one. The target may or may not be present in BST.
// You can return the values in any order the driver code will print them in sorted order only.

// Examples:

// Input: root = [20, 8, 22, 4, 12, N, N, N, N, 10, 14], target = 17, k = 3

// Output: [14, 20, 12]
// Explanation: Absolute difference of 17 wrt 14 and 20 is 3 and 3, but we choose the smaller value in case of same absolute difference. So, 14 coes first and then 20. Then, 12 and 22 have same absolute difference, i.e., 5 from 17. But we choose the smaller value, i.e., 12.

// Input: root = [5, 4, 8, 1], target = 5, k = 2

// Output: [5, 4]
// Explanation: The absolute difference of 5 wrt 5 is 0, and for 4, the absolute difference is 1.

// Constraints:
// 1 ≤ number of nodes, k ≤ 10^4
// 1 ≤ node->data, target ≤ 10^4
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  getKClosest(root, target, k) {
    const values = [];
    this.inOrderTraversal(root, values);

    let left = 0;
    let right = values.length - 1;
    let insertPos = 0;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (values[mid] < target) {
        left = mid + 1;
        insertPos = left;
      } else {
        right = mid - 1;
        insertPos = mid;
      }
    }

    const result = [];
    let l = insertPos - 1;
    let r = insertPos;

    while (result.length < k && (l >= 0 || r < values.length)) {
      if (l < 0) {
        result.push(values[r]);
        r++;
      } else if (r >= values.length) {
        result.push(values[l]);
        l--;
      } else {
        const diffL = Math.abs(values[l] - target);
        const diffR = Math.abs(values[r] - target);

        if (diffL < diffR || (diffL === diffR && values[l] < values[r])) {
          result.push(values[l]);
          l--;
        } else {
          result.push(values[r]);
          r++;
        }
      }
    }

    return result;
  }

  inOrderTraversal(node, result) {
    if (!node) return;
    this.inOrderTraversal(node.left, result);
    result.push(node.data);
    this.inOrderTraversal(node.right, result);
  }
}
