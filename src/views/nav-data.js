import logo from '@/assets/logo.svg';

export default [

  {
    title: '安装',
    path: '/install',
    icon: 'iconfont icon-install',
  },
  {
    title: '更新日志',
    path: '/update',
    icon: 'el-icon-s-promotion',
  },
  {
    title: '组件',
    icon: 'el-icon-s-grid',
    children: [
      {
        title: 'admin',
        group: true,
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
            children: [
              {
                title: 'MultiView',
                path: '/view/multi/:id',
                onOpen(tab) {
                  // eslint-disable-next-line no-console
                  console.log('tab-open:nav-data', tab);
                  if (tab.route.params.id === '103') {
                    tab.title = 'lucky number';
                  }
                },
                onClose(tab) {
                  // eslint-disable-next-line no-console
                  console.log('tab-close:nav-data', tab);
                },
                visible: false,
              },
              {
                title: 'SingleView',
                path: '/view/single/:id',
                visible: false,
              },
            ],
          },
        ],
      },
      {
        title: 'image',
        group: true,
        children: [
          {
            title: 'Image',
            path: '/image',
            icon: 'el-icon-picture',
          },
          {
            title: 'ImageDialog',
            path: '/image-dialog',
            icon: 'el-icon-picture-outline',
          },
        ],
      },
      {
        title: '其他',
        group: true,
        children: [
          {
            title: 'Affix 图钉',
            path: '/affix',
            icon: 'iconfont icon-affix',
          },
        ],
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