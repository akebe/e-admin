<template>
  <ea-view center class="ea-document">
    <header-md>
      <template v-slot:collapse>
        <demo-block>
          如果不想在头部展示这个功能按钮，请传入字符串<code>`false`</code>
          <template slot="source">
            <el-switch
                v-model="collapse"
                active-text="启用"
                inactive-text="关闭">
            </el-switch>
          </template>
          <template slot="highlight">
            <collapse-md></collapse-md>
          </template>
        </demo-block>
      </template>
      <template v-slot:navData>
        <demo-block>
          路由当前<code>path</code>如果没有匹配到<code>navData</code>，会按路由<code>matched</code>展示
          <template slot="source">
            <el-switch
                v-model="navData"
                active-text="菜单 breadcrumbs"
                inactive-text="路由 breadcrumbs">
            </el-switch>
          </template>
          <template slot="highlight">
            <nav-data-md></nav-data-md>
          </template>
        </demo-block>
      </template>
      <template v-slot:notice>
        <demo-block>
          <p>如果不想在头部展示这个功能按钮，请传入<code>false</code></p>
          <p>notice接受<code>Boolean/String/Number</code>三种数据类型，展示为<code>el-badge</code></p>
          <p>当前类型：{{noticeType}} 值：{{notice}}</p>
          <template slot="source">
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
          </template>
          <template slot="highlight">
            <notice-md></notice-md>
          </template>
        </demo-block>
      </template>
      <template v-slot:fullscreen>
        <demo-block>
          <p>tips：此功能没有采用全局变量</p>
          <template slot="source">
            <el-switch
                v-model="fullscreen"
                active-text="启用"
                inactive-text="关闭">
            </el-switch>
          </template>
          <template slot="highlight">
            <fullscreen-md></fullscreen-md>
          </template>
        </demo-block>
      </template>
      <template v-slot:table>
        <document-table :data="attributes"></document-table>
        <div class="primary">
          <p>
            如果没有传参，默认使用全局联动配置项，默认值取决于 <code>$ea.config</code> 此配置可以在注入时改变，也可以通过全局 <code>$ea.config[Attributes] =
            newValue</code> 改变
          </p>
        </div>
      </template>
    </header-md>
  </ea-view>
</template>
<script>
  import DocumentTable from '@/components/DocumentTable';
  import navDataMd from './nav-data.md';
  import headerMd from './header.md';
  import collapseMd from './collapse.md';
  import noticeMd from './notice.md';
  import fullscreenMd from './fullscreen.md';
  import attributes from './attributes';

  export default {
    name: 'Header',
    components: {
      headerMd,
      collapseMd,
      DocumentTable,
      navDataMd,
      noticeMd,
      fullscreenMd,
    },
    props: {},
    watch: {
      notice(v) {
        this.$parent.$parent.notice = v;
      },
    },
    data() {
      return {
        collapseActive: true,
        noticeBoolean: true,
        noticeString: '',
        noticeNumber: 0,
        noticeType: 'String',
        noticeTypes: ['Boolean', 'String', 'Number'],
        navDataActive: false,
        attributes,
      };
    },
    computed: {
      notice: {
        get() {
          return this[`notice${this.noticeType}`];
        },
        set(v) {
          this[`notice${this.noticeType}`] = v;
        },
      },
      collapse: {
        get() {
          return this.$parent.$parent.headerCollapseActive;
        },
        set(v) {
          this.$parent.$parent.headerCollapseActive = v;
        },
      },
      navData: {
        get() {
          return this.$parent.$parent.headerNavDataActive;
        },
        set(v) {
          this.$parent.$parent.headerNavDataActive = v;
        },
      },
      fullscreen: {
        get() {
          return this.$parent.$parent.fullscreen;
        },
        set(v) {
          this.$parent.$parent.fullscreen = v;
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