/**
 * @description 当页面关闭/ 隐藏 / 不可见 时 调用传入的callback 拿到event 对象
 * @param once 表示监听一次然后销毁  false 表示一直处于监听状态
 */
export interface OnHiddenCallback {
  (event: Event): void
}
  
const addEventListener =  window.addEventListener;
const removeEventListener =  window.removeEventListener;

export const onHidden = (cb: OnHiddenCallback, once?: boolean) => {
  const onHiddenOrPageHide = (event: Event) => {
    if (event.type === 'pagehide' || document.visibilityState === 'hidden') {
      cb(event)
      if (once) {
        removeEventListener('visibilitychange', onHiddenOrPageHide, true)
        removeEventListener('pagehide', onHiddenOrPageHide, true)
      }
    }
  }
  addEventListener('visibilitychange', onHiddenOrPageHide, true)
  // Some browsers have buggy implementations of visibilitychange,
  // so we use pagehide in addition, just to be safe.
  addEventListener('pagehide', onHiddenOrPageHide, true)
}
