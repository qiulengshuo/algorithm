/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = []
  const rows = matrix.length
  const columns = matrix[0].length
  let left = 0
  let top = 0
  let right = columns - 1
  let bottom = rows - 1
  while (left <= right && top <= bottom) {
    // 从左到右
    for (let j = left; j <= right; j++) {
      res.push(matrix[top][j])
    }
    // 从上到下
    for (let i = top + 1; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    // 当存在 2 * 2 以上的矩阵时进入，不然会重复收集
    if (top < bottom && left < right) {
      // 从右到左
      for (let j = right - 1; j >= left; j--) {
        res.push(matrix[bottom][j])
      }
      // 从下到上
      for (let i = bottom - 1; i > top; i--) {
        res.push(matrix[i][left])
      }
    }
    left++
    right--
    top++
    bottom--
  }
  return res
}