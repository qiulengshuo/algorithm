/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp0 = 1
  let dp1 = 1
  for (let i = 2; i <= n; i++) {
    const temp = dp1
    // 该层楼梯，由 前一个楼梯 + 1 或者 前两个楼梯 + 2
    dp1 = dp0 + dp1
    dp0 = temp
  }
  return dp1
}