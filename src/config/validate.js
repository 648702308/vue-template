let test1 = 15228817502;
let test2 = 13540153301;

// 手机号验证
export function isvalidPhone(str) {
  const reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/
  return reg.test(str)
}
// 手机号验证码（六位）
export function isvalidPhoneVcode(str) {
  const reg = /^\d{6}$/
  return reg.test(str)
}
