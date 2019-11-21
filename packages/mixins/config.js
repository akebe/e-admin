/**
 * 全局与组件传参自适应
 * @param props Object {theme: String, $slots: { theme: 'theme' }}
 * 默认传props对象 当包含$slots对象时 get会验证组件是否有对应$slots才生效
 * @param prefix          转换后命名前缀
 * @param firstUpperCase  转换后首字母是否大写
 * props {theme : String} to { props: {theme : String}, computed: { mTheme:{...} }}
 * @returns {*}
 * @constructor
 */
function ConfigMixins(props, {prefix = 'm', firstUpperCase = true} = {}) {
  const mixin = {
    props: {},
    computed: {},
  };
  for (let prop in props) {
    if (prop !== '$slots') {
      mixin.props[prop] = props[prop];
      let newProp = prefix;
      if (firstUpperCase) {
        newProp += `${prop.charAt(0).toUpperCase()}${prop.substr(1)}`;
      } else {
        newProp += prop;
      }
      mixin.computed[newProp] = {
        get() {
          if (props.$slots && props.$slots[prop]) {
            if (!this.$slots[props.$slots[prop]]) return false;
          }
          const _prop = this.$options.propsData[prop];
          return typeof _prop === 'undefined' ? this.$ea.config[prop] : this[prop];
        },
        set(v) {
          if (typeof this.$options.propsData[prop] === 'undefined') {
            this.$ea.config[prop] = v;
          } else {
            this.$emit(`update:${prop}`, v);
          }
        },
      };
    }
  }
  return mixin;
}

export default ConfigMixins;