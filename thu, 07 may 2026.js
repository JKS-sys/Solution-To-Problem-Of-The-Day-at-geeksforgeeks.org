/*
Definition for Node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
  // Main function to check if root2 is a subtree of root1
  isSubTree(root1, root2) {
    if (!root2) return true; // empty tree is subtree of any tree
    if (!root1) return false; // non-empty tree can't be subtree of empty tree

    const serializedT = [];
    const serializedS = [];

    // Serialize both trees with preorder and null markers
    this._serialize(root1, serializedT);
    this._serialize(root2, serializedS);

    // Add delimiters to avoid false matches like "12" matching "2"
    const tStr = "," + serializedT.join(",") + ",";
    const sStr = "," + serializedS.join(",") + ",";

    // Use KMP for O(n + m) substring search
    return this._kmpSearch(tStr, sStr);
  }

  // Preorder serialization: node, left, right. null -> "null"
  _serialize(node, arr) {
    if (node === null) {
      arr.push("null");
      return;
    }
    arr.push(node.data.toString());
    this._serialize(node.left, arr);
    this._serialize(node.right, arr);
  }

  // KMP substring search: true if pattern is in text
  _kmpSearch(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    if (m === 0) return true;
    if (n === 0) return false;

    const lps = this._buildLPS(pattern);
    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < n) {
      if (text[i] === pattern[j]) {
        i++;
        j++;
        if (j === m) return true;
      } else {
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          i++;
        }
      }
    }
    return false;
  }

  // Build LPS (Longest Prefix Suffix) array for KMP
  _buildLPS(pattern) {
    const m = pattern.length;
    const lps = new Array(m).fill(0);
    let len = 0; // length of previous longest prefix suffix
    let i = 1;

    while (i < m) {
      if (pattern[i] === pattern[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len !== 0) {
          len = lps[len - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
    return lps;
  }
}
