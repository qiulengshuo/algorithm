/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const map = {}
  const res = []
  function backTracking (path) {
    if (path.length === nums.length) {
      // 注意拷贝
      res.push(path.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (map[nums[i]]) continue
      // 标记已存
      map[nums[i]] = true
      path.push(nums[i])
      backTracking(path)
      // 跳出递归 清空
      path.pop()
      map[nums[i]] = false
    }
  }
  backTracking([])
  return res
}