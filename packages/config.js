import Vue from 'vue';

/**
 * e-admin 全局响应式配置
 * 暴露为 $ea.config
 */

const EaConfig = {
  /**
   * 项目名称
   */
  title: 'e-admin',
  /**
   * 统一表单尺寸缓存
   */
  formSize: 'small',
  /**
   * 统一表格尺寸缓存
   */
  tableSize: '',
  /**
   * 当前主题缓存
   */
  theme: 'dark',
  /**
   * 左侧菜单缩放
   */
  collapse: false,
  /**
   * 是否启用页面标签
   */
  tabsStatus: true,
  /**
   * 页面标签是否显示
   */
  tabsVisible: true,
  /**
   * 头部当前状态
   */
  headerVisible: true,
  /**
   * 是否自动隐藏头部
   */
  headerAutoHide: false,
  /**
   * 左侧菜单展开大小
   */
  sideMaxWidth: '200px',
  /**
   * 左侧菜单缩进大小
   */
  sideMinWidth: '64px',
  /**
   * 页面标签功能缓存
   */
  page: {
    history: [],
    tabs: [],
  },
  /**
   * 首页路由配置
   */
  home: {
    path: '/',
    title: '首页',
    name: 'Index',
    icon: 'ea-icon-home',
  },
};

Vue.observable(EaConfig);

export default EaConfig;