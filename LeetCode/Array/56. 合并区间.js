/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const res = []
  // 先排序，各个数组元素的首元素升序排列
  intervals.sort((a, b) => a[0] - b[0])
  // 等待被push的数组
  let prev = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i]
    // 没有重合区间
    if (prev[1] < cur[0]) {
      res.push(prev.slice())
      prev = cur
    } else {
      // 有重合区间，并且重合了一部分，修改 prev 的右边界
      if (prev[1] < cur[1]) {
        prev[1] = cur[1]
      } else {
        // 有重合区间，并且完全覆盖了第二个数组，直接跳过
        continue
      }
    }
  }
  // 无论是重合还是没有重合，最后还剩一个数组没有push
  res.push(prev.slice())
  return res
}