const cubic = value => Math.pow(value, 3);
const easeInOutCubic = value => value < 0.5
  ? cubic(value * 2) / 2
  : 1 - cubic((1 - value) * 2) / 2;
const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));

function getOffsetTop(el, targetEl) {
  let value = el.offsetTop;
  el = el.offsetParent;
  while (el && el !== targetEl) {
    value += el.offsetTop;
    el = el.offsetParent;
  }
  return value;
}

/**
 * 平滑滚动到指定位置
 * @param value Number|Element
 * @param el  滚动的容器
 * @param offset 当value为Element时的偏移量
 * @returns {boolean}
 */
function scrollTo(value, {el = document.documentElement, offset = 0} = {}) {
  if (value instanceof Element) {
    value = getOffsetTop(value, el) + offset;
  }
  if (typeof value === 'number' && el.scrollTop !== value) {
    const beginValue = el.scrollTop;
    const beginTime = Date.now();
    const isTop = value < beginValue;
    const frameFunc = () => {
      const progress = (Date.now() - beginTime) / 500;
      const scrollTop = isTop ? beginValue * (1 - easeInOutCubic(progress)) : beginValue + value * easeInOutCubic(progress);
      const isEnd = isTop ? scrollTop <= value : scrollTop >= value;
      if (progress < 1 && !isEnd) {
        el.scrollTop = scrollTop;
        rAF(frameFunc);
      } else {
        el.scrollTop = value;
      }
    };
    rAF(frameFunc);
  }
}

export default scrollTo;