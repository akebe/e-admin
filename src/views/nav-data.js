import logo from '@/assets/logo.svg';

export default [
  {
    title: '开发指南',
    icon: 'el-icon-s-promotion',
    children: [
      {
        title: '安装',
        path: '/install',
        icon: 'iconfont icon-install',
      },
      {
        title: 'vue-router',
        path: '/router',
        icon: 'iconfont icon-router',
      },
      {
        title: 'vuex',
        path: '/vuex',
        icon: 'iconfont icon-vue',
      },
    ],
  },
  {
    title: '组件',
    icon: 'el-icon-s-grid',
    children: [
      {
        title: '框架',
        path: '/admin',
        icon: 'iconfont icon-layout',
      },
      {
        title: '头部组件',
        path: '/header',
        icon: 'iconfont icon-header',
      },
      {
        title: '标签栏',
        path: '/tabs',
        icon: 'iconfont icon-tabs',
      },
      {
        title: '导航菜单',
        path: '/nav-menu',
        icon: 'iconfont icon-side',
      },
      {
        title: 'Logo组件',
        path: '/logo',
        src: logo,
      },
      {
        title: '页面组件',
        path: '/view',
        icon: 'iconfont icon-view',
      },
    ],
  },
  {
    title: '错误页面',
    icon: 'el-icon-warning',
    children: [
      {
        title: '404',
        path: '/error/404',
      },
      {
        title: '403',
        path: '/error/403',
      },
    ],
  },
];