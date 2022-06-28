/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 深度优先遍历
  function dfs (node, p, q) {
    // 如果遇到 null 或者 p 或者 q 直接返回即可
    if (node === null || node === p || node === q) {
      return node
    }
    const leftNode = dfs(node.left, p, q)
    const rightNode = dfs(node.right, p, q)
    // 当两者都存在，说明公共祖先就是当前节点
    if (leftNode && rightNode) {
      return node
    }
    // 一边存在，返回一边，否则默认是 null
    if (leftNode) {
      return leftNode
    }
    return rightNode
  }
  return dfs(root, p, q)
}