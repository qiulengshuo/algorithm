/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false
  let res = false
  // 深度优先遍历
  const dfs = function (node, sum) {
    // 叶子节点的时候，判断总和
    if (!node.left && !node.right) {
      if (sum === targetSum) {
        res = true
      }
      return
    }
    node.left && dfs(node.left, sum + node.left.val)
    node.right && dfs(node.right, sum + node.right.val)
  }
  dfs(root, root.val)
  return res
}