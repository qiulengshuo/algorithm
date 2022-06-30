/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p1 = l1
  let p2 = l2
  const dummy = new ListNode(0)
  let cur = dummy
  let carry = 0
  while (p1 || p2) {
    // 有就赋值 null就为0
    const num1 = p1 ? p1.val : 0
    const num2 = p2 ? p2.val : 0
    const sum = num1 + num2 + carry
    const temp = new ListNode(sum % 10)
    carry = Math.floor(sum / 10)
    cur.next = temp
    cur = cur.next
    // 不断 next 直到 null
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
  }
  // 进一
  if (carry) {
    cur.next = new ListNode(carry)
  }
  return dummy.next
}