
/**
 * @description 柯里化函数
 * @param fn 功能函数
 * @returns 
 */

export function curry(fn:()=>void) {
  return function curried<T>(this:any,...args:T[]) {
    if (args.length >= fn.length) {
      return fn.apply(this, args as any)
    } else {
      return function<U> (this:any,...args2:U[]):any {
        return curried.apply(this, args.concat(args2 as any))
      }
    }
  }
}
