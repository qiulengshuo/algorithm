/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let l1 = headA
  let l2 = headB
  while (l1 !== l2) {
    // 两指针遍历最大的长度是 headA 和 headB 的长度之和
    l1 = l1 ? l1.next : headB
    l2 = l2 ? l2.next : headA
    // 当两指针相同，说明要么 同时到尾部 null；要么 同时到一个节点
  }
  return l1
}