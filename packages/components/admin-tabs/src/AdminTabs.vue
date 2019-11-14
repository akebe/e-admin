<style scoped>
</style>
<style>
</style>
<template>
  <div class="ea-admin_tabs">
    <div class="_wrap">
      <ea-admin-tabs-item
          v-if="collapse !== 'false'"
          @click="mCollapse = !mCollapse"
          :icon="`ea-icon-page-arrow-${mCollapse ? 'right' : 'left'}`">
      </ea-admin-tabs-item>
      <ea-admin-tabs-item
          icon="el-icon-d-arrow-left"
          @click="arrowLeft(100)"
          v-longpress="()=> arrowLeft(30)"
          v-if="arrowWidth > 0">
      </ea-admin-tabs-item>
      <div class="_scroll" ref="scroll">
        <div class="_nav" :style="`transform: translateX(${arrowX}px)`">
          <ea-admin-tabs-item
              v-for="(item, index) in data"
              :key="item.path"
              :title="item.title"
              :src="item.src"
              :icon="item.icon"
              :active="path === item.path"
              :closable="index > 0"
              scroll
              @click="to(item)"
              @close="tabsClose([item])"
          ></ea-admin-tabs-item>
        </div>
      </div>
      <ea-admin-tabs-item
          icon="el-icon-d-arrow-right"
          @click="arrowRight(100)"
          v-longpress="()=> arrowRight(30)"
          v-if="arrowWidth > 0">
      </ea-admin-tabs-item>
      <el-dropdown @command="tabsCloseByCommand">
        <ea-admin-tabs-item icon="el-icon-caret-bottom"></ea-admin-tabs-item>
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
  import ConfigMixins, {Config} from '../../../mixins/config';
  import longpress from '../../../directive/longpress';

  export default {
    name: 'EaAdminTabs',
    mixins: [ConfigMixins({
      collapse: [Boolean, String],
    })],
    components: {},
    directives: {
      longpress,
    },
    props: {
      home: {
        type: Object,
        default: () => Config.home,
      },
      //如果传入这个对象 tabs的标题会以匹配path的title为标题
      menuData: {
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
      Config.page.tabs = [this.home];
      return {
        data: Config.page.tabs,
        active: '',
        children: [],
        arrowWidth: 0,
        arrowX: 0,
      };
    },
    computed: {
      path() {
        const matched = this.$route.matched.find(v => v.meta.childrenAgent);
        return matched ? matched.path : this.$route.path;
      },
    },
    methods: {
      to({path, toPath}) {
        this.$router.push(toPath || path);
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
        this.mValidator(to, () => {
          const matched = to.matched.find(v => v.meta.childrenAgent) || to.matched[to.matched.length - 1];
          let tab = Config.page.tabs.find(v => v.path === matched.path);
          if (!tab) {
            tab = this.getTab(matched);
            Config.page.tabs.push(tab);
          }
          tab.toPath = to.path;
          Config.page.history.push([matched.path, to.path]);
        });
      },
      getTab(matched) {
        let tab = matched.meta.tabs || this.getTabByMenuData(this.menuData, matched.path) || {
          title: matched.meta.label || matched.meta.title || matched.name,
        };
        tab.path = matched.path;
        tab.name = matched.name;
        return tab;
      },
      getTabByMenuData(ary, path) {
        for (let item of ary) {
          if (item.path === path) {
            return item;
          } else if (item.children) {
            const tab = this.getTabByMenuData(item.children, path);
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
        let index = Config.page.tabs.findIndex(v => v.path === this.path);
        switch (command) {
          case 'left':
            if (index > 1) tabs = Config.page.tabs.slice(1, index);
            break;
          case 'right':
            if (index > 0 && index < Config.page.tabs.length) tabs = Config.page.tabs.slice(index + 1);
            break;
          case 'other':
            tabs = Config.page.tabs.filter((v, i) => i > 0 && i !== index);
            break;
        }
        if (tabs.length) {
          this.tabsClose(tabs);
        }
      },
      tabsClose: async function (_tabs) {
        const {tabs, history} = Config.page;
        for (let tab of _tabs) {
          if (await this.tabsCloseBefore(tab)) {
            const index = tabs.indexOf(tab);
            tabs.splice(index, 1);
          }
        }
        Config.page.history = history.filter(([path]) => tabs.some(v => v.path === path));
        if (!tabs.some(v => v.path === this.path)) {
          let path = Config.page.history.length ? Config.page.history[Config.page.history.length - 1][1] : this.home.path;
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
      tabsCloseBefore: async function (tab) {
        const events = this.$ea._events['tabs-close-before'];
        if (events && events.length) {
          for (let cb of events) {
            const state = await cb.apply(this, tab);
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
        const tab = Config.page.tabs.find(v => v.path === (path || this.path));
        if (tab) {
          this.tabsClose([tab]);
        }
      };
    },
  };
</script>