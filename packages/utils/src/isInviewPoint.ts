
/**
 * @description 判断一个结点是否在视口内
 * @param el dom 结点
 * @param threshold 默认阈值 100
 * @returns 
 */
export function isInviewPoint(el: HTMLDivElement | HTMLElement, threshold: number = 100) {
  const screnHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  const top =
    (el.getBoundingClientRect() && el?.getBoundingClientRect().top) || 0
  return top <= screnHeight + threshold
}
