<style scoped>
</style>
<style>
</style>
<template>
  <ea-view :center="700" class="ea-document">
    <h2>EaAdminHeader 头部组件</h2>
    <p>内置常用中后台页头功能</p>
    <ea-admin-header
        :collapse.sync="collapse"
        :notice="notice"
        :fullscreen="fullscreen"
        :menu-data="menuData"
    ></ea-admin-header>
    <h3>collapse</h3>
    <p>展示<code>collapse</code>按钮，控制左侧边栏是否折叠，如配置请确保全局使用同一变量</p>
    <div class="demo-block">
      <p>如果不想在头部展示这个功能按钮，请传入字符串<code>`false`</code></p>
      <el-switch
          v-model="collapseActive"
          active-text="启用"
          inactive-text="关闭">
      </el-switch>
    </div>
    <h3>menu-data</h3>
    <p>页面菜单配置文件，breadcrumbs默认按路由matched展示，传入此参数可以按照设定的关系展示面包屑</p>
    <div class="demo-block">
      <el-switch
          v-model="menuDataActive"
          active-text="菜单 breadcrumbs"
          inactive-text="路由 breadcrumbs">
      </el-switch>
    </div>
    <h3>notice</h3>
    <p>展示<code>notice</code>按钮，点击后触发<code>command('notice')</code></p>
    <div class="demo-block">
      <p>如果不想在头部展示这个功能按钮，请传入 <code>false</code></p>
      <p>notice接受<code>Boolean/String/Number</code>三种数据类型，展示为<code>el-badge</code></p>
      <el-form :inline="true" size="small">
        <el-form-item label="数据类型">
          <el-select
              v-model="noticeType"
              placeholder="请选择">
            <el-option
                v-for="v in noticeTypes"
                :key="v"
                :label="v"
                :value="v">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="参数值">
          <el-switch
              v-model="noticeBoolean"
              v-if="noticeType === 'Boolean'"
              active-text="true"
              inactive-text="false">
          </el-switch>
          <el-input
              v-model="noticeString"
              v-if="noticeType === 'String'"
              placeholder="请输入内容">
          </el-input>
          <el-input-number
              v-model="noticeNumber"
              v-if="noticeType === 'Number'">
          </el-input-number>
        </el-form-item>
      </el-form>
    </div>
    <h3>fullscreen</h3>
    <p>展示全屏缩放功能按钮</p>
    <div class="demo-block">
      <el-switch
          v-model="fullscreen"
          active-text="启用"
          inactive-text="关闭">
      </el-switch>
    </div>
    <h3>user</h3>
    <p>当前登录人对象</p>
    <div class="demo-block">
      <code>{name: '未知', avatar: ''}</code>
    </div>
    <h3>dropdown-menu</h3>
    <p>下拉菜单</p>
    <div class="demo-block">
      <p>接受一个数据参数，支持对象如下</p>
      <dropdown-menu></dropdown-menu>
      <p>默认配置</p>
      <dropdown-menu-default></dropdown-menu-default>
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
  import DocumentTable from '@/views/components/DocumentTable';
  import DropdownMenu from './dropdown-menu.md'
  import DropdownMenuDefault from './dropdown-menu-default.md'
  import menuData from '@/views/menu-data';

  export default {
    name: 'AdminHeader',
    components: {
      DocumentTable,
      DropdownMenu,
      DropdownMenuDefault
    },
    props: {},
    watch: {},
    data() {
      return {
        collapseActive: true,
        noticeBoolean: true,
        noticeString: '',
        noticeNumber: 0,
        noticeType: 'String',
        noticeTypes: ['Boolean', 'String', 'Number'],
        fullscreen: true,
        menuDataActive:false,
        tableData: [
          {
            prop: 'collapse',
            desc: 'side是否折叠，Boolean控制折叠状态，如不需显示传入字符串"false"',
            type: 'Boolean / String',
            enum: 'true / false / "false"',
            default: 'false',
            config: true,
          },
          {
            prop: 'notice',
            desc: '消息按钮，false 不显示 true 显示小圆点 其他内容作为el-badge内容展示',
            type: 'String / Number / Boolean',
            enum: '-',
            default: '-',
          },
          {prop: 'notice-content', desc: 'notice提示文本', type: 'Sting', enum: '-', default: '消息'},
          {prop: 'fullscreen', desc: '是否展示全屏/缩放按钮', type: 'Boolean', enum: '-', default: 'true'},
          {prop: 'user', desc: '当前登录人对象，数据格式见文档', type: 'Object', enum: '-', default: '{name: ""}'},
          {prop: 'dropdown-menu', desc: '下拉菜单内容', type: 'Array', enum: '-', default: '见上文'},
          {prop: 'menu-data', desc: '页面菜单配置文件，breadcrumbs默认按路由matched展示，传入此参数可以按照设定的关系展示面包屑，当前示例页面没有传参，可与文档header对比', type: 'Array', enum: '-', default: '见上文'},
        ],
      };
    },
    computed: {
      collapse: {
        get() {
          return this.collapseActive ? this.$ea.config.collapse : 'false';
        },
        set(v) {
          this.$ea.config.collapse = v;
        },
      },
      notice: {
        get() {
          return this[`notice${this.noticeType}`];
        },
        set(v) {
          this[`notice${this.noticeType}`] = v;
        },
      },
      menuData(){
        return this.menuDataActive ? menuData : []
      }
    },
    methods: {},
    created() {
    },
    mounted() {
    },
  };
</script>