/**
 *
 * @description 某一个函数只允许执行一次
 * @param fn 被执行函数
 * @returns
 */

export function once(fn: () => void) {
  // 利用闭包判断函数是否执行过
  let called = false
  return function (this: any, ...args: any) {
    if (!called) {
      called = true
      fn.apply(this, args)
    }
  }
}
