<style scoped>
</style>
<style>
</style>
<template>
  <ea-view center class="ea-document">
    <h2>EaAdmin 后台主框架</h2>
    <p>渐进式架构，可选通过提供插槽插入对应组件完成后台搭建</p>
    <img :src="adminSlot">
    <h3>完整配置</h3>
    <p>默认插槽建议配置 <code>keep-alive</code> 的 <code>router-view</code> 完整配置如下</p>
    <admin-md></admin-md>
    <h3>Side折叠</h3>
    <p>通过<code>collapse</code>控制左侧边栏是否折叠，如配置请确保全局使用同一变量</p>
    <div class="demo-block">
      <el-switch
          v-model="collapse"
          active-text="折叠"
          inactive-text="展开">
      </el-switch>
    </div>
    <h3>头部自动隐藏</h3>
    <p>为了能展示更多内容，当检测到鼠标向下滚动时<code>slot->header</code>会自动隐藏，这项配置默认启用，可通过<code>header-auto-hide</code>关闭</p>
    <div class="demo-block">
      <el-switch
          v-model="headerAutoHide"
          active-text="启用"
          inactive-text="关闭">
      </el-switch>
      <p>设置后请滚动鼠标体验效果。</p>
    </div>
    <document-table :data="tableData"></document-table>
    <div class="primary">
      <p>
        如果没有传参，默认使用全局联动配置项，默认值取决于 <code>$ea.config</code> 此配置可以在注入时改变，也可以通过全局 <code>$ea.config[Attributes] =
        newValue</code> 改变
      </p>
    </div>
  </ea-view>
</template>
<script>
  /* eslint-disable no-console */
  import adminSlot from '@/assets/admin-slot.svg';
  import AdminMd from './admin.md';
  import DocumentTable from '@/views/components/DocumentTable';

  export default {
    name: 'EaAdmin',
    components: {DocumentTable, AdminMd},
    props: {},
    watch: {},
    data() {
      return {
        adminSlot,
        tableData: [
          {prop: 'collapse', desc: 'side是否折叠', type: 'Boolean', enum: '-', default: 'false', config: true},
          {prop: 'theme', desc: '皮肤类型', type: 'String', enum: 'white / dark', default: 'dark', config: true},
          {prop: 'header-auto-hide', desc: '头部是否自动隐藏', type: 'Boolean', enum: '-', default: 'true', config: true},
          {
            prop: 'side-max-width',
            desc: 'side展开后宽度',
            type: 'Number / String',
            enum: '-',
            default: '200px',
            config: true,
          },
          {
            prop: 'side-min-width',
            desc: 'side缩进后宽度',
            type: 'Number / String',
            enum: '-',
            default: '64px',
            config: true,
          },
        ],
      };
    },
    computed: {
      collapse: {
        get() {
          return this.$ea.config.collapse;
        },
        set(v) {
          this.$ea.config.collapse = v;
        },
      },
      headerAutoHide: {
        get() {
          return this.$ea.config.headerAutoHide;
        },
        set(v) {
          this.$ea.config.headerAutoHide = v;
        },
      },
    },
    methods: {},
    created() {
    },
    mounted() {
    },
  };
</script>