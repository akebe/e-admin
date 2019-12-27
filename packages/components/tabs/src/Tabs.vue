<template>
  <div class="ea-tabs">
    <div class="_wrap">
      <ea-tabs-item
          v-if="collapse !== 'false'"
          @click="mCollapse = !mCollapse"
          :icon="`ea-icon-page-arrow-${mCollapse ? 'right' : 'left'}`">
      </ea-tabs-item>
      <ea-tabs-item
          icon="el-icon-d-arrow-left"
          @click="arrowLeft(100)"
          v-longpress="()=> arrowLeft(30)"
          v-if="arrowWidth > 0">
      </ea-tabs-item>
      <div class="_scroll" ref="scroll">
        <div class="_nav" :style="`transform: translateX(${arrowX}px)`">
          <ea-tabs-item
              :title="mHome.title"
              :src="mHome.src"
              :icon="mHome.icon"
              :active="path === mHome.path"
              scroll
              @click="to(mHome)"
          ></ea-tabs-item>
          <ea-tabs-item
              v-for="item in tabs"
              :key="item.toPath"
              :title="item.title"
              :src="item.src"
              :icon="item.icon"
              :active="path === item.toPath"
              closable
              scroll
              @click="to(item)"
              @close="tabsClose([item])"
          ></ea-tabs-item>
        </div>
      </div>
      <ea-tabs-item
          icon="el-icon-d-arrow-right"
          @click="arrowRight(100)"
          v-longpress="()=> arrowRight(30)"
          v-if="arrowWidth > 0">
      </ea-tabs-item>
      <el-dropdown @command="tabsCloseByCommand">
        <ea-tabs-item icon="el-icon-caret-bottom"></ea-tabs-item>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="refresh" icon="el-icon-refresh">刷新</el-dropdown-item>
          <el-dropdown-item command="left" icon="el-icon-back">关闭左侧标签</el-dropdown-item>
          <el-dropdown-item command="right" icon="el-icon-right">关闭右侧标签</el-dropdown-item>
          <el-dropdown-item command="other" icon="el-icon-document-delete">关闭其他标签页</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
  import ConfigMixins from '../../../mixins/config';
  import longpress from '../../../directive/longpress';

  export default {
    name: 'EaTabs',
    mixins: [ConfigMixins({
      collapse: [Boolean, String],
      home: Object,
    })],
    components: {},
    directives: {
      longpress,
    },
    props: {
      //如果传入这个对象 tabs的标题会以匹配path的title为标题
      navData: {
        type: Array,
        default: () => [],
      },
      //标签缓存验证函数(route, done)
      validator: Function,
    },
    watch: {
      '$route'(to) {
        this.routeAfterEach(to);
      },
    },
    data() {
      const {tabs, history} = this.$ea.config.page;
      return {
        tabs,
        history,
        active: '',
        children: [],
        arrowWidth: 0,
        arrowX: 0,
      };
    },
    computed: {
      path() {
        return this.$route.path;
      },
    },
    methods: {
      to({path, toPath, fullPath}) {
        this.$router.push(fullPath || toPath || path);
      },
      mValidator(to, done) {
        const matched = to.matched[to.matched.length - 1];
        if (matched.meta.tabs !== false) {
          if (this.validator) {
            this.validator(to, done);
          } else {
            done();
          }
        }
      },
      routeAfterEach(to) {
        if (to.path !== this.mHome.path) {
          this.mValidator(to, () => {
            const matched = to.matched.find(v => v.meta.childrenAgent) || to.matched[to.matched.length - 1];
            let tab = this.tabs.find(v => v.toPath === to.path);
            const first = !tab;
            if (first) {
              tab = this.getTab(matched);
              this.tabs.push(tab);
            }
            tab.toPath = to.path;
            tab.fullPath = to.fullPath;
            tab.route = to;
            this.history.push([matched.path, to.path]);
            if (typeof tab.onOpen === 'function') {
              tab.onOpen(tab, first);
            }
          });
        }
      },
      getTab(matched) {
        let tab = matched.meta.tabs || this.getTabByNavData(this.navData, matched.path) || {};
        if (typeof tab.title === 'undefined') tab.title = matched.meta.label || matched.meta.title || matched.name;
        tab.path = matched.path;
        tab.name = matched.name;
        return {...tab};
      },
      getTabByNavData(ary, path) {
        for (let item of ary) {
          if (item.path === path) {
            return item;
          } else if (item.children) {
            const tab = this.getTabByNavData(item.children, path);
            if (tab) return tab;
          }
        }
      },
      childrenMounted(vm) {
        this.children.push({
          _uid: vm._uid,
          width: vm.$el.clientWidth,
        });
        this.handleArrow();
      },
      childrenDestroyed(vm) {
        const index = this.children.findIndex(v => v._uid === vm._uid);
        if (index > -1) {
          this.children.splice(index, 1);
          this.handleArrow();
        }
      },
      handleArrow() {
        if (this.$refs.scroll) {
          let centerWidth = this.$refs.scroll.clientWidth,
            childrenWidth = this.children.reduce((width, v) => width + v.width, 0);
          this.arrowWidth = childrenWidth - centerWidth;
          if (this.arrowWidth < 0) this.arrowWidth = 0;
          if (!this.arrowWidth) this.arrowX = 0;
        }
      },
      arrowLeft(len = 100) {
        if (this.arrowX < 0) {
          this.arrowX = this.arrowX < -len ? this.arrowX + len : 0;
        }
      },
      arrowRight(len = 100) {
        if (this.arrowWidth > 0) {
          let maxArrow = this.arrowWidth + 80;
          this.arrowX = maxArrow + this.arrowX > len ? this.arrowX - len : -maxArrow;
        }
      },
      tabsCloseByCommand(command) {
        let tabs = [];
        let index = this.tabs.findIndex(v => v.path === this.path);
        switch (command) {
          case 'left':
            if (index > 0) tabs = this.tabs.slice(0, index);
            break;
          case 'right':
            if (index < this.tabs.length) tabs = this.tabs.slice(index + 1);
            break;
          case 'other':
            tabs = this.tabs.filter((v, i) => i !== index);
            break;
        }
        if (tabs.length) {
          this.tabsClose(tabs);
        }
      },
      async tabsClose(_tabs) {
        const {tabs, history} = this;
        for (let tab of _tabs) {
          if (await this.tabsCloseBefore(tab)) {
            const index = tabs.indexOf(tab);
            tabs.splice(index, 1);
            this.$ea.$emit('tabs-close-after', tab);
            if (typeof tab.onClose === 'function') {
              tab.onClose(tab);
            }
          }
        }
        let _history = history.filter(([, toPath]) => tabs.some(v => v.toPath === toPath));
        if (_history.length !== history.length) {
          history.splice(0, history.length);
          history.push(..._history);
        }
        if (!tabs.some(v => v.toPath === this.path)) {
          let path = history.length ? history[history.length - 1][1] : this.mHome.path;
          this.$router.push(path);
        }
      },
      /**
       * 标签关闭消息通知
       * this.$ea.$on('tabs-close-before', (route) => {})
       * return false 会终止关闭
       * 支持return Promise
       * @param tab
       * @returns {Promise<boolean>}
       */
      async tabsCloseBefore(tab) {
        const events = this.$ea._events['tabs-close-before'];
        if (events && events.length) {
          for (let cb of events) {
            const state = await cb.call(this, tab);
            if (state === false) {
              return false;
            }
          }
        }
        return true;
      },
    },
    created() {
    },
    mounted() {
      this.routeAfterEach(this.$route);
      this.$nextTick(() => {
        this.handleArrow();
      });
      window.addEventListener('resize', () => {
        this.handleArrow();
      });
      this.$ea.$on('collapse', () => {
        setTimeout(() => {
          this.handleArrow();
        }, 301);
      });
      this.$ea.tabsClose = (path) => {
        const tab = this.tabs.find(v => v.toPath === (path || this.path));
        if (tab) {
          this.tabsClose([tab]);
        }
      };
    },
  };
</script>