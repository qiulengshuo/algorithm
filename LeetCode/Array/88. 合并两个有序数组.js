/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 三个指针 
  // 指向 nums1 的 实际长度
  // 指向 nums1 的 尾部
  // 指向 nums2 的 尾部
  let mn = nums1.length - 1
  let n1 = m - 1
  let n2 = n - 1
  // 从后往前遍历，直到其中一个指针为-1，跳出
  while (n1 >= 0 && n2 >= 0) {
    // 大的放后面
    if (nums1[n1] > nums2[n2]) {
      nums1[mn] = nums1[n1]
      n1--
    } else {
      nums1[mn] = nums2[n2]
      n2--
    }
    mn--
  }
  // 如果 nums2 还有元素没有遍历过
  while (n2 >= 0) {
    nums1[mn] = nums2[n2]
    mn--
    n2--
  }
}