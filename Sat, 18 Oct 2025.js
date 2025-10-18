// Sat, 18 Oct 2025,

// Median of BST
// Difficulty: MediumAccuracy: 27.43%Submissions: 99K+Points: 4
// You are given the root of a Binary Search Tree, find the median of it.

// Let the nodes of the BST, when written in ascending order (inorder traversal), be represented as V1, V2, V3, …, Vn, where n is the total number of nodes in the BST.

// If number of nodes are even: return V(n/2)
// If number of nodes are odd: return V((n+1)/2)
// Examples:

// Input: root = [20, 8, 22, 4, 12, N, N, N, N, 10, 14]
// 2
// Output: 12
// Explanation: The inorder of given BST is 4, 8, 10, 12, 14, 20, 22. Here, n = 7, so, here median will be ((7+1)/2)th value, i.e., 4th value, i.e, 12.
// Input: root = [5, 4, 8, 1]
// 1
// Output: 4
// Explanation: The inorder of given BST is 1, 4, 5, 8. Here, n = 4(even), so, here median will be (4/2)th value, i.e., 2nd value, i.e, 4.
// Constraints:
// 1 ≤ number of nodes ≤ 10^5
// 1 ≤ node.data ≤  10^5
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  findMedian(root) {
    let count = 0;
    let current = root;

    while (current !== null) {
      if (current.left === null) {
        count++;
        current = current.right;
      } else {
        let predecessor = current.left;
        while (predecessor.right !== null && predecessor.right !== current) {
          predecessor = predecessor.right;
        }

        if (predecessor.right === null) {
          predecessor.right = current;
          current = current.left;
        } else {
          predecessor.right = null;
          count++;
          current = current.right;
        }
      }
    }

    let medianPos;
    if (count % 2 === 1) {
      medianPos = (count + 1) / 2;
    } else {
      medianPos = count / 2;
    }

    let currentCount = 0;
    let medianValue = -1;
    current = root;

    while (current !== null) {
      if (current.left === null) {
        currentCount++;
        if (currentCount === medianPos) {
          medianValue = current.data;
          break;
        }
        current = current.right;
      } else {
        let predecessor = current.left;
        while (predecessor.right !== null && predecessor.right !== current) {
          predecessor = predecessor.right;
        }

        if (predecessor.right === null) {
          predecessor.right = current;
          current = current.left;
        } else {
          predecessor.right = null;
          currentCount++;
          if (currentCount === medianPos) {
            medianValue = current.data;
            break;
          }
          current = current.right;
        }
      }
    }

    return medianValue;
  }
}
