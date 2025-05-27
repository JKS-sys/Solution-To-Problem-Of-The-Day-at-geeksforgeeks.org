Tue, 27 May 2025,

Print leaf nodes from preorder traversal of BST
Difficulty: MediumAccuracy: 47.26%Submissions: 24K+Points: 4
Given a preorder traversal of a BST, find the leaf nodes of the tree without building the tree.


Examples:

Input: preorder[] = [5, 2, 10]
Output: [2, 10]
Explaination: 

2 and 10 are the leaf nodes as shown in the figure.
Input: preorder[] = [4, 2, 1, 3, 6, 5]
Output: [1, 3, 5]
Explaination: 

1, 3 and 5 are the leaf nodes as shown in the figure.
Input: preorder[] = [8, 2, 5, 10, 12]
Output: [5, 12]
Explaination: 

5 and 12 are the leaf nodes as shown in the figure.

Constraints:
1 ≤ preorder.size() ≤ 103
1 ≤ preorder[i] ≤ 103

/**
 * @param {number[]} preorder
 * @returns {number[]}
 */

class Solution {
leafNodes(preorder) {
        const leaves = [];
        if (preorder.length === 0) return leaves;
        const stack = [[0, preorder.length - 1]];
        
        while (stack.length > 0) {
            const [start, end] = stack.pop();
            if (start > end) continue;
            
            if (start === end) {
                leaves.push(preorder[start]);
                continue;
            }
            
            const rootVal = preorder[start];
            let j = start + 1;
            while (j <= end && preorder[j] < rootVal) {
                j++;
            }
            
            const leftStart = start + 1;
            const leftEnd = j - 1;
            const rightStart = j;
            const rightEnd = end;
            
            const isLeaf = (leftStart > leftEnd) && (rightStart > rightEnd);
            
            if (isLeaf) {
                leaves.push(rootVal);
            } else {
                stack.push([rightStart, rightEnd]);
                stack.push([leftStart, leftEnd]);
            }
        }
        
        return leaves;
    }
}