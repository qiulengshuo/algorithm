/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2
  // 从后往前找第一个比前面一个大的
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }
  if (i >= 0) {
    // 从 i 的后面找第一个比 i 的元素大的
    let j = nums.length - 1
    while (i < j && nums[j] <= nums[i]) {
      j--
    }
    // 然后交换
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  // 把降序改为升序
  let left = i + 1
  let right = nums.length - 1
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }
}