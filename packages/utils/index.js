import reg from './reg';

const UtilsOptions = {
  // 小数点后默认保留位置
  defaultFixedSize: 2,
};


/**
 * 全局唯一guid
 * 经过百万次循环不重复
 * @returns {string}
 * @constructor
 */
function GUID() {
  const guid = new Date().getTime();
  return guid + '-' +
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) + '-' +
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

/**
 * 数字格式化
 * @param number
 * @param size
 * @returns {string}
 */
function fixed(number, size = UtilsOptions.defaultFixedSize) {
  number = isNaN(number) || !number ? 0 : number;
  return parseFloat(number).toFixed(size);
}

/**
 * 分单位格式化
 * @param number
 * @param size
 * @returns {string}
 */
function fixedCent(number, size = UtilsOptions.defaultFixedSize) {
  number = number || 0;
  return !isNaN(number) ? (number / 100).toFixed(size) : 'error';
}

/**
 * 简单深拷贝
 * @param data
 * @returns {*}
 */
const cloneDeep = data => typeof data === 'object' ? JSON.parse(JSON.stringify(data)) : data;

/**
 * 多维数组指定子项扁平化函数
 * @param array              要执行的扁平化数组
 * @param childrenKeys       要参与扁平的子键名数组 默认 ['children']
 * @param flattenParent      默认的父数组
 * @param flattenParentKey   父数组键名
 * @returns {Array}
 */
function arrayChildrenFlatten(array, {childrenKeys, flattenParent, flattenParentKey} = {}) {
  childrenKeys = childrenKeys || ['children'];
  flattenParent = flattenParent || [];
  flattenParentKey = flattenParentKey || 'flattenParent';
  const result = [];
  array.forEach(item => {
    const flattenItem = cloneDeep(item);
    flattenItem[flattenParentKey] = flattenParent;
    result.push(flattenItem);
    childrenKeys.forEach(key => {
      if (item[key] && Array.isArray(item[key])) {
        const children = arrayChildrenFlatten(item[key], {
          childrenKeys,
          flattenParent: [...flattenParent, item],
          flattenParentKey,
        });
        result.push(...children);
      }
    });
  });
  return result;
}

/**
 * 字符串占位长度
 * @param str
 * @returns {number}
 */
function strLen(str) {
  let l = str.length, len = 0;
  for (let i = 0; i < l; i++) {
    len += (str.charCodeAt(i) & 0xff00) !== 0 ? 2 : 1;
  }
  return len;
}

function getElementHeight(el) {
  if (!(el instanceof Element)) return 0;
  let height = 0;
  let style = window.getComputedStyle(el, null);
  height += +style.height.replace(/[^0-9|.|-]/ig, '');
  height += +style.marginTop.replace(/[^0-9|.|-]/ig, '');
  height += +style.marginBottom.replace(/[^0-9|.|-]/ig, '');
  height += +style.paddingTop.replace(/[^0-9|.|-]/ig, '');
  height += +style.paddingBottom.replace(/[^0-9|.|-]/ig, '');
  return height;
}

const Utils = {
  GUID,
  fixed,
  fixedCent,
  cloneDeep,
  arrayChildrenFlatten,
  strLen,
  reg,
  getElementHeight,
};

export {
  UtilsOptions,
  getElementHeight,
};

export default Utils;