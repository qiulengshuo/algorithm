/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let res = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    // 大于尾部，直接push
    if (nums[i] > res[res.length - 1]) {
      res.push(nums[i])
    } else {
      // 二分，用它替换掉最小比它大的。
      let left = 0
      let right = res.length - 1
      while (left < right) {
        let mid = left + ((right - left) >>> 1)
        if (res[mid] < nums[i]) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      res[left] = nums[i]
    }
  }
  return res.length
}