<template>
  <div
    v-loading="loading"
    :class="classes"
    :style="mStyle"
    :element-loading-text="loadingText"
  >
    <slot :keys="keys" :active="active" @ea-view="deepView  = false"/>
    <slot name="backtop">
      <el-backtop v-if="backtop"/>
    </slot>
  </div>
</template>
<script>
  export default {
    name: 'EaView',
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
      loadingText: {
        type: String,
        default: '数据加载中',
      },
      center: {
        type: [Boolean, Number, String],
        default: false,
      },
      scrollRecord: {                        // 是否记录滚动条高度
        type: Boolean,
        default: true,
      },
      scrollRecordChildren: [String, Array], // 如果ea-view作为路由组件，它的子路由高度默认不被记录 这里可以传入子路由组件名 用于记录滚动条高度
      defaultClass: {
        type: Boolean,
        default: true,
      },
      padding: {
        type: [String, Number],
        default: 10,
      },
      backtop: {
        type: Boolean,
        default: true,
      },
      paramsKey: String,
      bodyClass: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        scrollTop: {},
        keys: [],
        active: '',
        deepEaView: 0,  // 标识嵌套ea-view 0表示最深
      };
    },
    computed: {
      mStyle() {
        const style = {};
        if (this.center) {
          let width = '1000px';
          switch (typeof this.center) {
            case 'number':
              width = `${this.center}px`;
              break;
            case 'string':
              width = this.center;
              break;
          }
          style.width = width;
        }
        if (this.padding) {
          style.padding = typeof this.padding === 'number' ? `${this.padding}px` : this.padding;
        }
        return style;
      },
      classes() {
        return {
          'ea-view': this.defaultClass,
          'ea-view_center': this.center,
        };
      },
    },
    methods: {
      beforeEach(to, from, next) {
        const parentName = this.$parent.$options.name;
        const childrenName = Array.isArray(this.scrollRecordChildren) ? this.scrollRecordChildren : [this.scrollRecordChildren];
        if (parentName === from.name || childrenName.includes(from.name)) {
          const path = from.path;
          this.scrollTop[path] = document.documentElement.scrollTop || document.body.scrollTop;
        }
        if (parentName === from.name || !this.deepEaView && (from.matched || []).some(v => v.name === parentName)) {
          this.setBodyClass('');
        }
        next();
      },
      afterEach(to) {
        const parentName = this.$parent.$options.name;
        const childrenName = Array.isArray(this.scrollRecordChildren) ? this.scrollRecordChildren : [this.scrollRecordChildren];
        if (parentName === to.name || childrenName.includes(to.name)) {
          if (this.scrollRecord) {
            const path = to.path;
            this.$nextTick(() => {
              document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop[path] || 0;
            });
          }
          if (this.paramsKey) {
            const key = to.params[this.paramsKey];
            if (key && !this.keys.includes(key)) this.keys.push(key);
            this.active = key;
          }
        }
        if (parentName === to.name || !this.deepEaView && (to.matched || []).some(v => v.name === parentName)) {
          this.setBodyClass(this.bodyClass);
        }
      },
      tabsCloseAfter(tab) {
        if (this.paramsKey) {
          const parentName = this.$parent.$options.name;
          if (parentName === tab.name) {
            const key = tab.route.params[this.paramsKey],
              index = this.keys.indexOf(key);
            if (index > -1) {
              this.keys.splice(index, 1);
            }
          }
        }
      },
      handleDeepEaView(mounted) {
        let $parent = this.$parent;
        while ($parent) {
          if ($parent.$options._componentTag === 'ea-view') {
            $parent.deepEaView += mounted ? 1 : -1;
          }
          $parent = $parent.$parent;
        }
      },
      setBodyClass(className) {
        let $parent = this.$parent;
        while ($parent) {
          if ($parent.$options._componentTag === 'ea-admin') {
            $parent.bodyClass = className;
            return;
          }
          $parent = $parent.$parent;
        }
      },
    },
    mounted() {
      // 绑定 beforeEach
      this.$router.beforeEach(this.beforeEach);

      // 绑定 afterHooks
      this.$router.afterEach(this.afterEach);

      // 解决初始化不触发afterEach的问题
      this.afterEach(this.$route);

      document.documentElement.scrollTop = document.body.scrollTop = 0;

      this.$ea.$on('tabs-close-after', this.tabsCloseAfter);

      this.handleDeepEaView(true);
    },
    beforeDestroy() {
      // 解除 beforeEach
      let index = this.$router.beforeHooks.indexOf(this.beforeEach);
      if (index > -1) {
        this.$router.beforeHooks.splice(index, 1);
      }
      // 解除 afterHooks
      index = this.$router.afterHooks.indexOf(this.afterEach);
      if (index > -1) {
        this.$router.afterHooks.splice(index, 1);
      }

      this.$ea.$off('tabs-close-after', this.tabsCloseAfter);

      this.handleDeepEaView(false);
    },
  };
</script>
