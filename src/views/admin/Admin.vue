<style scoped>
</style>
<style>
</style>
<template>
  <ea-view center class="ea-document">
    <admin-md>
      <template v-slot:collapse>
        <demo-block>
          如配置请确保全局使用同一变量，此处控制默认配置
          <template slot="source">
            <el-switch
                v-model="collapse"
                active-text="折叠"
                inactive-text="展开">
            </el-switch>
          </template>
          <template slot="highlight">
            <collapse-md></collapse-md>
          </template>
        </demo-block>
      </template>
      <template v-slot:headerAutoHide>
        <demo-block>
          <p>设置后请滚动鼠标体验效果。</p>
          <p>如配置请确保全局使用同一变量，此处控制默认配置</p>
          <template slot="source">
            <el-switch
                v-model="headerAutoHide"
                active-text="启用"
                inactive-text="关闭">
            </el-switch>
          </template>
          <template slot="highlight">
            <header-auto-hide-md>
            </header-auto-hide-md>
          </template>
        </demo-block>
      </template>
      <template v-slot:table>
        <document-table :data="attributes"/>
        <div class="primary">
          <p>
            如果没有传参，默认使用全局联动配置项，默认值取决于 <code>$ea.config</code> 此配置可以在注入时改变，也可以通过全局 <code>$ea.config[Attributes] =
            newValue</code> 改变
          </p>
        </div>
      </template>
    </admin-md>
  </ea-view>
</template>
<script>
  import adminSlot from '@/assets/admin-slot.svg';
  import adminMd from './admin.md';
  import collapseMd from './collapse.md';
  import documentTable from '@/components/DocumentTable';
  import headerAutoHideMd from './header-auto-hide.md';
  import attributes from './attributes'

  export default {
    name: 'Admin',
    components: {documentTable, adminMd, collapseMd, headerAutoHideMd},
    props: {},
    watch: {},
    data() {
      return {
        adminSlot,
        attributes,
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