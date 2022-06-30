/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let n1 = num1.length - 1
  let n2 = num2.length - 1
  let carry = 0
  let res = []
  while (n1 >= 0 || n2 >= 0) {
    // undefined 置为 0
    const number1 = num1[n1] === undefined ? 0 : +num1[n1]
    const number2 = num2[n2] === undefined ? 0 : +num2[n2]
    const sum = number1 + number2 + carry
    res.push(sum % 10)
    carry = Math.floor(sum / 10)
    n1--
    n2--
  }
  // 进一
  if (carry > 0) {
    res.push(carry)
  }
  return res.reverse().join("")
}