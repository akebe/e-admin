<template>
  <div :class="classes"
       :style="mStyle"
       v-loading="loading"
       :element-loading-text="loadingText">
    <slot></slot>
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
        type: [Boolean, Number],
        default: false,
      },
      scrollRecord: { //是否记录滚动条高度
        type: Boolean,
        default: false,
      },
      defaultClass: {
        type: Boolean,
        default: true,
      },
      defaultViewStyle: {
        type: Boolean,
        default: true,
      },
      fixedHeight: {
        type: Boolean,
        default: false,
      },
      padding: {
        type: [String, Number],
        default: 10,

      },
    },
    watch: {},
    data() {
      return {
        clientHeight: 500,
        scrollTop: 0,
      };
    },
    computed: {
      mStyle() {
        const style = {};
        let height = 0;
        if (this.fixedHeight) {
          height = this.clientHeight;
          if (this.$ea) {
            if (this.$ea.pageHeaderVisible) {
              if (this.$ea.pageHeaderVisible) height -= 46;
              if (this.$ea.pageTabsVisible) height -= 44;
            }
          }
          style.overflowY = 'auto';
          style.height = (height - 20) + 'px';
        }
        if (this.center) {
          style.width = (typeof this.center === 'number' ? this.center : 1000) + 'px';
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
      resize() {
        this.getClientHeight();
      },
      getClientHeight() {
        this.clientHeight = document.body.clientHeight < document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight;
      },
    },
    created() {
      /**
       * 父组件必须把beforeRouteLeave分发给这个子组件监听
       * beforeRouteLeave(t, f, n) {
       *  this.$emit('beforeRouteLeave', t, f, n)
       * },
       */
      this.$parent.$on('beforeRouteLeave', (t, f, next) => {
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        next();
      });
    },
    activated() {
      if (this.scrollRecord) {
        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop;
      }
    },
    mounted() {
      window.addEventListener('resize', this.resize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resize);
    },
  };
</script>