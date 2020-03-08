<template>
  <div :class="classes">
    <div
      class="_header"
      :style="headerStyle"
    >
      <div
        v-if="tabsVisible"
        class="__tabs"
      >
        <slot name="tabs"/>
      </div>
      <div
        class="__header"
        :style="{height: `${headerShow ? headerHeight : 0}px`, opacity: headerShow ? 1 : 0}"
      >
        <slot name="header"/>
      </div>
    </div>
    <div
      v-if="sideVisible"
      :class="{_side: true, [`ea--${mTheme}`]: true}"
      :style="sideStyle"
    >
      <slot name="side"/>
    </div>
    <div
      :class="bodyClasses"
      :style="bodyStyle"
    >
      <slot>
        <keep-alive :include="include">
          <router-view/>
        </keep-alive>
      </slot>
    </div>
  </div>
</template>
<script>
  import ConfigMixins from '../../../mixins/config';

  export default {
    name: 'EaAdmin',
    mixins: [
      ConfigMixins({
        collapse: [Boolean, String],
        theme: String,
        home: Object,
        headerAutoHide: Boolean,
        sideMaxWidth: [Number, String],
        sideMinWidth: [Number, String],
      }),
    ],
    watch: {
      mHeaderAutoHide() {
        this.headerShow = this.headerVisible;
      },
      mCollapse(v) {
        this.$ea.$emit('collapse', v);
      },
    },
    data() {
      return {
        headerShow: true,
        headerHeight: 40,
        tabsHeight: 40,
        Ea: {},
        bodyClass: '',
      };
    },
    computed: {
      sideVisible() {
        return !!this.$slots.side;
      },
      tabsVisible() {
        return !!this.$slots.tabs;
      },
      headerVisible() {
        return !!this.$slots.header;
      },
      sideStyle() {
        let width = this.mCollapse ? this.mSideMinWidth : this.mSideMaxWidth;
        if (typeof width === 'number') width += 'px';
        return {
          width,
        };
      },
      headerStyle() {
        return {
          paddingLeft: this.sideStyle.width,
        };
      },
      bodyStyle() {
        let top = 0;
        if (this.headerShow) top += this.headerHeight;
        if (this.tabsVisible) top += this.tabsHeight;
        const style = {
          top: `${top}px`,
          left: this.sideStyle.width,
        };
        this.$nextTick(() => {
          this.$emit('resize', style);
        });
        return style;
      },
      classes() {
        return {
          'ea-admin': true,
          'ea-admin_collapse': this.mCollapse,
        };
      },
      bodyClasses() {
        return `_body ${this.bodyClass}`;
      },
      include() {
        const tabs = this.$ea.config.page.tabs;
        return [this.mHome.name].concat(tabs.map(v => v.name));
      },
    },
    methods: {
      mouseWheel(e) {
        if (this.headerVisible && this.mHeaderAutoHide) {
          this.headerShow = e.deltaY <= 0;
        }
      },
    },
    mounted() {
      document.addEventListener('mousewheel', this.mouseWheel);
      this.$nextTick(() => {
        this.headerShow = this.headerVisible;
      });
    },
    beforeDestroy() {
      document.removeEventListener('mousewheel', this.mouseWheel);
    },
  };
</script>