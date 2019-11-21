<template>
  <ea-view center>
    <tabs-md>
      <template v-slot:collapse>
        <demo-block>
          如果不想在<code>tabs</code>展示这个功能按钮，请传入字符串<code>`false`</code>
          <template v-slot:source>
            <el-switch
                v-model="collapse"
                active-text="启用"
                inactive-text="关闭">
            </el-switch>
          </template>
          <template v-slot:highlight>
            <collapse-md></collapse-md>
          </template>
        </demo-block>
      </template>
      <template v-slot:navData>
        <demo-block>
          <p>
            因为<code>tabs</code>有内部缓存，这里操作解绑/关联<code>nav-data</code>后页面<code>tabs</code>并不会立即作出响应
          </p>
          <p>
            可以重新关闭打开<code>tabs</code>观测变化
          </p>
          <template v-slot:source>
            <el-switch
                v-model="navData"
                active-text="关联nav-data"
                inactive-text="解绑nav-data">
            </el-switch>
          </template>
          <template v-slot:highlight>
            <nav-data-md></nav-data-md>
          </template>
        </demo-block>
      </template>
      <template v-slot:table>
        <document-table :data="attributes"></document-table>
      </template>
    </tabs-md>
  </ea-view>
</template>
<script>
  import tabsMd from './tabs.md';
  import collapseMd from './collapse.md';
  import navDataMd from './nav-data.md';
  import attributes from './attributes';

  export default {
    name: 'Tabs',
    components: {
      collapseMd,
      navDataMd,
      tabsMd,
    },
    props: {},
    watch: {},
    data() {
      return {
        attributes,
      };
    },
    computed: {
      collapse: {
        get() {
          return this.$parent.$parent.tabsCollapseActive;
        },
        set(v) {
          this.$parent.$parent.tabsCollapseActive = v;
        },
      },
      navData: {
        get() {
          return this.$parent.$parent.tabsNavDataActive;
        },
        set(v) {
          this.$parent.$parent.tabsNavDataActive = v;
        },
      },
    },
    methods: {},
    mounted() {
      let path = this.$route.path;
      this.tabsCloseBefore = tab => {
        if (tab.path === path) {
          // 可以通过 return false; 同步阻止关闭
          // return false;

          // 可选 在监听这个页面关闭并需要验证的时候跳转到这个页面
          if (this.$route.path !== path) {
            this.$router.push(path);
          }

          // 通常返回一个 Promise 并 reject 来阻止关闭
          return this.$confirm('确定要关闭这个页面吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          });
        }
      };

      this.$ea.$on('tabs-close-before', this.tabsCloseBefore);
    },
    beforeDestroy() {
      this.$ea.$off('tabs-close-before', this.tabsCloseBefore);
    },
  };
</script>