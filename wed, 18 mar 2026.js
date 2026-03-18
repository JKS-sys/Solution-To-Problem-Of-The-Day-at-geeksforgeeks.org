class Solution {
  distCandy(root) {
    let moves = 0;

    const dfs = (node) => {
      if (!node) return 0;

      const leftBalance = dfs(node.left);
      const rightBalance = dfs(node.right);

      // moves across left and right edges
      moves += Math.abs(leftBalance) + Math.abs(rightBalance);

      // balance of current subtree: candies - nodes
      return node.data + leftBalance + rightBalance - 1;
    };

    dfs(root);
    return moves;
  }
}
