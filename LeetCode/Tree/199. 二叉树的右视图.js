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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return []
  const res = []
  const queue = [root]
  while (queue.length) {
    let len = queue.length
    while (len--) {
      const node = queue.shift()
      // 每层最后一个push
      if (len === 0) {
        res.push(node.val)
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return res
}