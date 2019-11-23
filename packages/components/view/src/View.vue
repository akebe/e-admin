<template>
  <div :class="classes"
       :style="mStyle"
       v-loading="loading"
       :element-loading-text="loadingText">
    <slot></slot>
    <slot name="backtop">
      <el-backtop v-if="backtop"></el-backtop>
    </slot>
  </div>
</template>
<script>
  export default {
    name: 'EaView',
    components: {},
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
      scrollRecord: { //是否记录滚动条高度
        type: Boolean,
        default: true,
      },
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
    },
    watch: {},
    data() {
      return {
        scrollTop: 0,
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
        if (parentName === from.name) {
          this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        }
        next();
      },
    },
    activated() {
      if (this.scrollRecord) {
        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop;
      }
    },
    mounted() {
      // 绑定 beforeEach
      this.$router.beforeEach(this.beforeEach);

      document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop;
    },
    beforeDestroy() {
      // 解除 beforeEach
      const index = this.$router.beforeHooks.indexOf(this.beforeEach);
      if (index > -1) {
        this.$router.beforeHooks.splice(index, 1);
      }
    },
  };
</script>