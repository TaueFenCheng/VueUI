/**
 * @description 判断一个结点是否在视口内
 * @param el dom 结点
 * @param threshold 默认阈值 100
 * @returns
 */
export function isInviewPoint(
  el: HTMLDivElement | HTMLElement,
  threshold: number = 100
) {
  const screnHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  const top =
    (el.getBoundingClientRect() && el?.getBoundingClientRect().top) || 0
  return top <= screnHeight + threshold
}

export function isInviewPoint2(element: HTMLDivElement | HTMLElement,threshold:number = 100) {
  // 获取可视窗口的高度。兼容所有浏览器
  const screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  // 获取滚动条滚动的高度
  const scrollTop = document.documentElement.scrollTop
  // 获取元素偏移的高度。就是距离可视窗口的偏移量。
  const offsetTop = element.offsetTop
  // 加100是为了提前加载
  return offsetTop - scrollTop <= screenHeight + threshold
}
